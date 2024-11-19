function Button({ children, onClick }) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="relative px-8 py-4 text-white font-semibold text-lg 
                   rounded-lg overflow-hidden shadow-lg
                   bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 
                   before:content-[''] before:absolute before:inset-0 before:bg-stars 
                   hover:before:animate-stars-glow
                   hover:shadow-[0px_0px_15px_rgba(130,0,255,0.7)] 
                   transition duration-300 ease-in-out"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="relative px-8 py-4 text-white font-semibold text-lg 
                 rounded-lg overflow-hidden shadow-lg
                 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 
                 before:content-[''] before:absolute before:inset-0 before:bg-stars 
                 hover:before:animate-stars-glow
                 hover:shadow-[0px_0px_15px_rgba(130,0,255,0.7)] 
                 transition duration-300 ease-in-out"
    >
      {children}
    </button>
  );
}

export default Button;
