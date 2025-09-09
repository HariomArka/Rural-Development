import React, { useState, useEffect, useCallback } from 'react';
import { Plane, MapPin, Star, Trophy, Globe } from 'lucide-react';

const GeographyAdventure = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [collectedItems, setCollectedItems] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [gameMessage, setGameMessage] = useState("Welcome! Use arrow keys to explore the world!");
  const [movingClouds, setMovingClouds] = useState([
    { id: 1, x: 10, y: 15, speed: 0.5 },
    { id: 2, x: 60, y: 25, speed: 0.3 },
    { id: 3, x: 30, y: 40, speed: 0.7 }
  ]);

  // Countries with their positions and facts
  const countries = [
    {
      id: 1,
      name: "India",
      position: { x: 70, y: 45 },
      capital: "New Delhi",
      fact: "Home to the Himalayas and has 28 states!",
      item: "🏔️ Mount Everest",
      color: "bg-orange-400"
    },
    {
      id: 2,
      name: "Brazil",
      position: { x: 25, y: 60 },
      capital: "Brasília",
      fact: "Has the Amazon rainforest with millions of species!",
      item: "🌿 Amazon Plant",
      color: "bg-green-400"
    },
    {
      id: 3,
      name: "Egypt",
      position: { x: 55, y: 35 },
      capital: "Cairo",
      fact: "Home to ancient pyramids and the Nile River!",
      item: "🏺 Ancient Pyramid",
      color: "bg-yellow-400"
    },
    {
      id: 4,
      name: "Australia",
      position: { x: 80, y: 75 },
      capital: "Canberra",
      fact: "The only country that is also a continent!",
      item: "🦘 Kangaroo",
      color: "bg-red-400"
    },
    {
      id: 5,
      name: "Canada",
      position: { x: 20, y: 25 },
      capital: "Ottawa",
      fact: "Second largest country in the world by area!",
      item: "🍁 Maple Leaf",
      color: "bg-red-500"
    },
    {
      id: 6,
      name: "Japan",
      position: { x: 85, y: 35 },
      capital: "Tokyo",
      fact: "An island nation with over 6,800 islands!",
      item: "🗾 Island Chain",
      color: "bg-pink-400"
    }
  ];

  // Move clouds animation
  useEffect(() => {
    const interval = setInterval(() => {
      setMovingClouds(clouds => 
        clouds.map(cloud => ({
          ...cloud,
          x: (cloud.x + cloud.speed) % 100
        }))
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Check if player is near a country
  const checkNearCountry = useCallback(() => {
    const nearbyCountry = countries.find(country => {
      const distance = Math.sqrt(
        Math.pow(playerPosition.x - country.position.x, 2) + 
        Math.pow(playerPosition.y - country.position.y, 2)
      );
      return distance < 8;
    });
    
    if (nearbyCountry && nearbyCountry !== currentCountry) {
      setCurrentCountry(nearbyCountry);
      if (!collectedItems.includes(nearbyCountry.id)) {
        setCollectedItems(prev => [...prev, nearbyCountry.id]);
        setScore(prev => prev + 100);
        setGameMessage(`🎉 Discovered ${nearbyCountry.name}! Capital: ${nearbyCountry.capital}. ${nearbyCountry.fact}`);
      } else {
        setGameMessage(`You're in ${nearbyCountry.name}! You've already collected the ${nearbyCountry.item} from here.`);
      }
    } else if (!nearbyCountry && currentCountry) {
      setCurrentCountry(null);
      setGameMessage("Keep exploring to discover new countries!");
    }
  }, [playerPosition, currentCountry, collectedItems]);

  useEffect(() => {
    checkNearCountry();
  }, [checkNearCountry]);

  // Handle keyboard movement
  useEffect(() => {
    const handleKeyPress = (e) => {
      const moveDistance = 3;
      setPlayerPosition(prev => {
        let newX = prev.x;
        let newY = prev.y;
        
        switch(e.key) {
          case 'ArrowUp':
            newY = Math.max(5, prev.y - moveDistance);
            break;
          case 'ArrowDown':
            newY = Math.min(85, prev.y + moveDistance);
            break;
          case 'ArrowLeft':
            newX = Math.max(5, prev.x - moveDistance);
            break;
          case 'ArrowRight':
            newX = Math.min(95, prev.x + moveDistance);
            break;
          default:
            return prev;
        }
        return { x: newX, y: newY };
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const resetGame = () => {
    setPlayerPosition({ x: 50, y: 50 });
    setScore(0);
    setCollectedItems([]);
    setCurrentCountry(null);
    setGameMessage("Game reset! Start your new adventure!");
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-green-300 overflow-hidden relative">
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Globe className="text-blue-600" size={24} />
            <h1 className="text-xl font-bold text-blue-800">Geography Adventure</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="text-yellow-500" size={20} />
              <span className="font-bold text-blue-800">{score}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Trophy className="text-orange-500" size={20} />
              <span className="font-bold text-blue-800">{collectedItems.length}/6</span>
            </div>
            <button 
              onClick={resetGame}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Game Message */}
      <div className="absolute top-20 left-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <p className="text-center text-blue-800 font-medium">{gameMessage}</p>
      </div>

      {/* Moving Clouds */}
      {movingClouds.map(cloud => (
        <div 
          key={cloud.id}
          className="absolute text-4xl transition-all duration-100 ease-linear opacity-70"
          style={{ left: `${cloud.x}%`, top: `${cloud.y}%` }}
        >
          ☁️
        </div>
      ))}

      {/* World Map Area */}
      <div className="absolute inset-0 top-32">
        {/* Countries */}
        {countries.map(country => (
          <div key={country.id} className="absolute group">
            {/* Country Marker */}
            <div 
              className={`w-8 h-8 ${country.color} rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 animate-pulse`}
              style={{ 
                left: `${country.position.x}%`, 
                top: `${country.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <MapPin size={16} className="text-white" />
            </div>
            
            {/* Country Label */}
            <div 
              className="absolute bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ 
                left: `${country.position.x}%`, 
                top: `${country.position.y - 8}%`,
                transform: 'translate(-50%, -100%)'
              }}
            >
              {country.name}
            </div>

            {/* Collected Item Indicator */}
            {collectedItems.includes(country.id) && (
              <div 
                className="absolute text-2xl animate-bounce"
                style={{ 
                  left: `${country.position.x + 3}%`, 
                  top: `${country.position.y - 3}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                ✨
              </div>
            )}
          </div>
        ))}

        {/* Player Character */}
        <div 
          className="absolute transition-all duration-200 ease-in-out z-10"
          style={{ 
            left: `${playerPosition.x}%`, 
            top: `${playerPosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="relative">
            {/* Player Plane */}
            <div className="bg-blue-600 rounded-full p-2 shadow-lg animate-bounce">
              <Plane className="text-white transform rotate-45" size={24} />
            </div>
            
            {/* Player Trail */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-400/30 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Ocean waves animation */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500 to-transparent opacity-30">
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-blue-600/20 animate-pulse"></div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <p className="text-sm text-blue-800">
          <span className="font-bold">🎮 Controls:</span> Use arrow keys to fly around the world!
        </p>
      </div>

      {/* Collection Status */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="text-sm text-blue-800">
          <span className="font-bold">🏆 Collected Items:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {countries.map(country => (
              <span 
                key={country.id} 
                className={`px-2 py-1 rounded text-xs ${
                  collectedItems.includes(country.id) 
                    ? 'bg-green-200 text-green-800' 
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {collectedItems.includes(country.id) ? country.item : '❓'}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Victory Message */}
      {collectedItems.length === countries.length && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-30">
          <div className="bg-white rounded-lg p-8 text-center shadow-2xl animate-pulse">
            <Trophy className="mx-auto text-yellow-500 mb-4" size={48} />
            <h2 className="text-3xl font-bold text-blue-800 mb-2">🎉 Congratulations!</h2>
            <p className="text-lg text-blue-600 mb-4">You've explored all 6 countries!</p>
            <p className="text-md text-gray-600 mb-4">Final Score: {score} points</p>
            <button 
              onClick={resetGame}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeographyAdventure;