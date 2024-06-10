// ./components/ColorCard.jsx

const ColorCard = ({ colors = {} }) => {
    const defaultColors = {
      color1: '#FFFFFF',
      color2: '#FFFFFF',
      color3: '#FFFFFF',
      color4: '#FFFFFF',
      color5: '#FFFFFF',
    };
  
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-2">
        <div className="px-6 py-4">
          <h1 className="text-4xl font-bold mb-2" style={{ color: colors.color1 || defaultColors.color1 }}>
            Random Colors
          </h1>
          <h3 className="text-xl font-bold mb-2" style={{ color: colors.color2 || defaultColors.color2 }}>
            Explore the Rainbow
          </h3>
          <p className="text-gray-700 mb-4" style={{ color: colors.color3 || defaultColors.color3 }}>
            Click the button to randomize the colors!
          </p>
          <div className="flex justify-between">
            <a href="#" className="text-indigo-500 hover:text-indigo-700" style={{ color: colors.color4 || defaultColors.color4 }}>
              Learn More
            </a>
            <button className="text-white font-bold py-2 px-4 rounded" style={{ color: colors.color5 || defaultColors.color5 }}>
              Randomize
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ColorCard;
  