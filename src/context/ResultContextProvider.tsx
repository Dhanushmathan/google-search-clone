import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
    useEffect, // Import useEffect
} from "react";

interface ContextInterface {
    getResults: (type: string) => Promise<void>;
    results: any[];  // Always an array
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
}

export const ResultContext = createContext<ContextInterface>({
    getResults: async () => { },
    results: [],  // Initialize as empty array
    searchTerm: "",
    setSearchTerm: () => { },
    isLoading: false,
});

const baseUrl = "https://google-search-master-mega.p.rapidapi.com/search?q=Coffee&gl=us&hl=en&autocorrect=true&num=10&page=1";

interface Props {
    children: ReactNode;
}

export const ResultContextProvider: FC<Props> = ({ children }) => {
    const [results, setResults] = useState<any[]>([]);  // Always an array
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const getResults = async (type: string) => {
        if (!searchTerm.trim()) {
            console.warn("Search term is empty");
            return;
        }

        setIsLoading(true);

        try {
            const url = `${baseUrl}${type}?q=${encodeURIComponent(searchTerm)}`;
            console.log(baseUrl, url);

            const apiKey = import.meta.env.VITE_API_KEY;

            if (!apiKey) {
                console.error("API key is missing! Check your environment variables.");
                setIsLoading(false);
                return;
            }

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "x-user-agent": "desktop",
                    "x-proxy-location": "US",
                    "x-rapidapi-key": apiKey,
                    "x-rapidapi-host": "google-search-master.p.rapidapi.com",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Always ensure results are an array
            if (type.includes("/news")) {
                setResults(data.entries ? data.entries : []);  // Ensure an array
            } else if (type.includes("/image")) {
                setResults(data.image_results ? data.image_results : []);  // Ensure an array
            } else {
                setResults(data.results ? data.results : []);  // Ensure an array
            }
        } catch (error: any) {
            console.error("Error fetching results:", error.message);
            setResults([]);  // Set to empty array if error occurs
        } finally {
            setIsLoading(false);
        }
    };

    // Log results whenever they change
    useEffect(() => {
        console.log("Updated Results:", results);
    }, [results]);  // This will run every time `results` changes

    return (
        <ResultContext.Provider
            value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
        >
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
