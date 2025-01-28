import React from "react";

interface ThemeToggleProps {
    toggleTheme: () => void;
}

const ToggleTheme: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {

    return (
        <div>
            <button className="bg-cyan-700 text-white rounded-full text-sm pl-10 pr-7 py-2 font-semibold relative shadow-xl" onClick={toggleTheme} >Customize Google
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-1 left-3 right-3 w-6 h-6 transition duration-150 transform hover:scale-110 cursor-pointer"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="stroke-white"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-white"></path></svg>
            </button>
        </div>
    )
}

export default ToggleTheme;