import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Target, Trophy, Book } from 'lucide-react';

const ProjectileMotionGame = () => {
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(30);
  const [isLaunched, setIsLaunched] = useState(false);
  const [projectilePos, setProjectilePos] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [targetPos, setTargetPos] = useState({ x: 400, y: 350 });
  const [showTrail, setShowTrail] = useState([]);
  const [gameMessage, setGameMessage] = useState('');
  const animationRef = useRef();
  const startTimeRef = useRef();

  const g = 9.8; // gravity
  const scale = 0.5; // scale factor for display

  const generateNewTarget = () => {
    const x = 300 + Math.random() * 200;
    const y = 320 + Math.random() * 50;
    setTargetPos({ x, y });
  };

  const resetGame = () => {
    setIsLaunched(false);
    setProjectilePos({ x: 0, y: 0 });
    setShowTrail([]);
    setGameMessage('');
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const launch = () => {
    if (isLaunched) return;
    
    setIsLaunched(true);
    setShowTrail([]);
    startTimeRef.current = Date.now();
    
    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const vx = velocity * Math.cos(angle * Math.PI / 180);
      const vy = velocity * Math.sin(angle * Math.PI / 180);
      
      const x = vx * elapsed * scale * 10;
      const y = -(vy * elapsed - 0.5 * g * elapsed * elapsed) * scale * 10;
      
      if (y > 350) {
        // Hit ground
        setIsLaunched(false);
        setProjectilePos({ x, y: 350 });
        
        // Check if hit target
        const distance = Math.sqrt(Math.pow(x + 50 - targetPos.x, 2) + Math.pow(350 - targetPos.y, 2));
        if (distance < 40) {
          setScore(prev => prev + level * 10);
          setLevel(prev => prev + 1);
          setGameMessage('🎯 Target Hit! Great shot!');
          generateNewTarget();
        } else {
          setGameMessage('💥 Missed! Try adjusting angle or velocity');
        }
        return;
      }
      
      setProjectilePos({ x, y });
      setShowTrail(prev => [...prev.slice(-15), { x: x + 50, y: y + 350 }]);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
  };

  const calculateRange = () => {
    const range = (velocity * velocity * Math.sin(2 * angle * Math.PI / 180)) / g;
    return range.toFixed(1);
  };

  const calculateMaxHeight = () => {
    const height = (velocity * velocity * Math.sin(angle * Math.PI / 180) * Math.sin(angle * Math.PI / 180)) / (2 * g);
    return height.toFixed(1);
  };

  useEffect(() => {
    generateNewTarget();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <Book className="h-10 w-10" />
            Projectile Motion Game
          </h1>
          <p className="text-white/80 text-lg">Master Class 11 Physics through Interactive Learning!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Control Panel */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Controls
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Launch Angle: {angle}°
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  value={angle}
                  onChange={(e) => setAngle(parseInt(e.target.value))}
                  className="w-full h-3 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                  disabled={isLaunched}
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Initial Velocity: {velocity} m/s
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={velocity}
                  onChange={(e) => setVelocity(parseInt(e.target.value))}
                  className="w-full h-3 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                  disabled={isLaunched}
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  onClick={launch}
                  disabled={isLaunched}
                  className="flex-1 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Play className="h-5 w-5" />
                  Launch
                </button>
                
                <button
                  onClick={resetGame}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                >
                  <RotateCcw className="h-5 w-5" />
                  Reset
                </button>
              </div>
            </div>

            {/* Physics Calculations */}
            <div className="mt-6 bg-white/20 rounded-xl p-4">
              <h3 className="text-white font-bold mb-3">📊 Physics Calculations</h3>
              <div className="text-sm text-white/90 space-y-2">
                <p><span className="font-semibold">Range:</span> {calculateRange()} m</p>
                <p><span className="font-semibold">Max Height:</span> {calculateMaxHeight()} m</p>
                <p><span className="font-semibold">Time of Flight:</span> {(2 * velocity * Math.sin(angle * Math.PI / 180) / g).toFixed(1)} s</p>
              </div>
            </div>
          </div>

          {/* Game Area */}
          <div className="lg:col-span-2 bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">Score: {score}</span>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full">
                  Level {level}
                </div>
              </div>
              {gameMessage && (
                <div className="bg-white/30 text-white px-4 py-2 rounded-lg font-semibold">
                  {gameMessage}
                </div>
              )}
            </div>

            {/* Game Canvas */}
            <div className="relative bg-gradient-to-b from-sky-200 to-green-200 rounded-xl overflow-hidden" style={{ height: '400px' }}>
              {/* Background elements */}
              <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-green-600 to-green-400"></div>
              
              {/* Clouds */}
              <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-12 sm:w-16 h-6 sm:h-8 bg-white rounded-full opacity-70"></div>
              <div className="absolute top-10 sm:top-16 left-24 sm:left-32 w-16 sm:w-20 h-8 sm:h-10 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-4 sm:top-8 right-12 sm:right-20 w-10 sm:w-12 h-5 sm:h-6 bg-white rounded-full opacity-50"></div>

              {/* Cannon */}
              <div 
                className="absolute bottom-12 sm:bottom-16 left-8 sm:left-12 w-8 sm:w-12 h-2 sm:h-3 bg-gray-800 rounded origin-left transition-transform duration-300"
                style={{ 
                  transform: `rotate(-${angle}deg)`,
                  transformOrigin: 'left center'
                }}
              ></div>
              <div className="absolute bottom-10 sm:bottom-14 left-6 sm:left-8 w-6 sm:w-8 h-6 sm:h-8 bg-gray-700 rounded-full"></div>

              {/* Target */}
              <div 
                className="absolute w-6 sm:w-8 h-6 sm:h-8 transition-all duration-500"
                style={{ 
                  left: targetPos.x * 0.7, 
                  bottom: (window.innerWidth < 640 ? 300 : 400) - (targetPos.y * 0.8),
                  transform: 'translate(-50%, 50%)'
                }}
              >
                <div className="w-full h-full bg-red-500 rounded-full border-2 sm:border-4 border-red-700 relative">
                  <div className="absolute inset-1 sm:inset-2 bg-white rounded-full">
                    <div className="absolute inset-1 sm:inset-2 bg-red-500 rounded-full">
                      <div className="absolute inset-0.5 sm:inset-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trail */}
              {showTrail.map((point, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-yellow-400 rounded-full"
                  style={{
                    left: point.x * 0.7,
                    bottom: (window.innerWidth < 640 ? 300 : 400) - (point.y * 0.8),
                    opacity: (i + 1) / showTrail.length
                  }}
                ></div>
              ))}

              {/* Projectile */}
              <div
                className="absolute w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full border border-yellow-700 sm:border-2 transition-all duration-75 shadow-lg"
                style={{
                  left: (projectilePos.x + 50) * 0.7,
                  bottom: (window.innerWidth < 640 ? 300 : 400) - ((projectilePos.y + 350) * 0.8),
                  transform: 'translate(-50%, 50%)',
                  display: isLaunched || projectilePos.x > 0 ? 'block' : 'none'
                }}
              ></div>
            </div>

            {/* Instructions */}
            <div className="mt-3 sm:mt-4 text-white/80 text-xs sm:text-sm space-y-1">
              <p>🎯 <strong>Goal:</strong> Hit the target by adjusting angle and velocity</p>
              <p className="hidden sm:block">📐 <strong>Physics:</strong> Learn projectile motion concepts while playing</p>
              <p>🏆 <strong>Scoring:</strong> Higher levels give more points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectileMotionGame;