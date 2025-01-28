import CustomRoutes from "./Routes";

const App = () => {
  return (
    <div>
      <CustomRoutes />
    </div>
  )
}

export default App;


// import React from 'react';
// import './App.css'; // Ensure Tailwind is imported here
// import ThemeProvider from './utils/ThemeProvider';
// import ThemeToggle from './utils/ToggleTheme'; // Import the ThemeToggle component

// const App: React.FC = () => {
//   return (
//     <ThemeProvider>
//       {({ isDarkMode, toggleTheme }) => (
//         <div className={`h-screen flex justify-center items-center transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//           {/* Theme Toggle Component */}
//           <ThemeToggle toggleTheme={toggleTheme} />

//           <div className="flex flex-col items-center space-y-4">
//             <input
//               type="text"
//               className="w-96 p-3 border-2 border-gray-300 rounded-full dark:bg-gray-800 dark:text-white"
//               placeholder="Search Google"
//             />
//             <button className="px-6 py-2 bg-blue-500 text-white rounded-full">Search</button>
//           </div>
//         </div>
//       )}
//     </ThemeProvider>
//   );
// }

// export default App;