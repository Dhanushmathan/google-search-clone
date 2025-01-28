import { MicrophoneIcon } from "@heroicons/react/16/solid";
import Avatar from "../compoenents/Avatar";
import { FormEvent, useRef, useState } from "react";
import ToggleTheme from "../utils/ToggleTheme";
import { useNavigate } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";

const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleTheme = (): void => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    const searchInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { setSearchTerm } = useResultContext();

    const search = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const term = searchInputRef!.current!.value;

        setSearchTerm(term);
        navigate("/search");
    };

    return (
        <div className={`flex flex-col items-center justify-center h-screen ${!isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <header className="flex w-full p-5 justify-between text-sm text-gray-700">
                <div className="flex space-x-4 items-center">
                    <a href="#" className={`link ${!isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        About
                    </a>
                    <a href="https://store.google.com/?hl=en-GB&pli=1" target="_blank" className={`link ${!isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Store
                    </a>
                </div>
                <div className="flex space-x-4 items-center">
                    <p className={`link ${!isDarkMode ? 'text-white' : 'text-gray-900'}`}>Gmail</p>
                    <p className={`link ${!isDarkMode ? 'text-white' : 'text-gray-900'}`}>Images</p>

                    <a href="https://labs.google.com/search?source=ntp" target="_blank" title="Search lap" className={`w-10 h-10 hover:bg-gray-100 rounded-full cursor-pointer relative ${!isDarkMode ? 'fill-white hover:bg-gray-800' : 'fill-gray-900 hover:bg-gray-100 w-10 h-10 rounded-full'}`}>
                        <svg className={`gb_D absolute left-2 right-0 top-2 ${!isDarkMode ? 'fill-white' : 'fill-gray-900'}`} focusable="false" height="24px" viewBox="0 -960 960 960" width="24px"> <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path> </svg>
                    </a>

                    <a href="#" target="_blank" title="Google apps" className={`w-10 h-10 hover:bg-gray-100 rounded-full cursor-pointer relative ${!isDarkMode ? 'fill-white hover:bg-gray-800' : 'fill-gray-900 hover:bg-gray-100 w-10 h-10 rounded-full'}`}>
                        <svg className={`mt-1 absolute left-[9px] right-0 bottom-0 top-[6px]`} width="25px" focusable="false" height="24px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                            <circle cx="25" cy="10" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                            <circle cx="40" cy="10" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                            <circle cx="10" cy="25" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                            <circle cx="25" cy="25" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                            <circle cx="40" cy="25" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                            <circle cx="10" cy="40" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                            <circle cx="25" cy="40" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                            <circle cx="40" cy="40" r="5" fill="black" className={!isDarkMode ? 'fill-white' : 'fill-gray-900'} />
                        </svg>
                    </a>
                    <Avatar url="https://m.media-amazon.com/images/I/61D4SqhZjeL.jpg" className="gb" />
                </div>
            </header>
            <form action="" onSubmit={search} className="flex flex-col items-center mt-24 flex-grow w-4/5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="google_logo" width={300} height={100} />
                <div className="w-full relative flex items-center justify-center">
                    <input ref={searchInputRef} type="text" name="search" className={`relative w-full mt-5 hover:shadow-lg focus-within:shadow-lg rounded-full outline-none border border-gray-200 px-12 py-3 sm:max-w-lg lg:max-w-2xl cursor-pointer ${!isDarkMode ? ' text-gray-900' : 'bg-gray-900 text-white'}`} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" className="text-gray-500 mr-3 absolute left-4 sm:left-[13.5rem] md:left-[68px] lg:left-[89px] xl:left-[220px] top-8"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
                    <MicrophoneIcon title="Search by voice" className={`h-5 absolute right-3 sm:right-56 md:right-[68px] lg:right-[89px] xl:right-56 top-9 text-gray-500`} />
                </div>
                <div className="flex flex-col items-center w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button className={`bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-black hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md ${!isDarkMode ? 'bg-gray-800 !text-white' : 'bg-[#f8f9fa]'}`}>Google Search</button>
                    <button className={`bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-black hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md ${!isDarkMode ? 'bg-gray-800 !text-white' : 'bg-[#f8f9fa]'}`}>I'm Feeling Lucky</button>
                </div>
            </form>
            <footer className="grid w-full">
                <div className="px-4 py-3 flex items-center justify-end">
                    <ToggleTheme toggleTheme={handleToggleTheme} />
                </div>
            </footer>
        </div>
    )
};

export default Home;