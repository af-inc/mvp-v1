import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-4 rounded-b-xl shadow-md flex items-center">
      {/* Left-aligned text container */}
      <div className="flex-1 text-center">
        <div className="text-white text-2xl font-bold">Aide Funding</div>
      </div>
      
      {/* User profile icon */}
      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white">
        <img
          src="https://via.placeholder.com/150" // Placeholder image for the user icon
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
