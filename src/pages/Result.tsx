import { useLocation } from "react-router-dom";
import { useResultContext } from "../context/ResultContextProvider";
import { useEffect, useState } from "react";

const Result = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext();
    const location = useLocation();
    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (searchTerm) {
            // Update search type based on location
            const query = encodeURIComponent(searchTerm);
            if (location.pathname === "/videos") {
                setSelected(location.pathname);
                getResults(`/search/q=${query} videos`);
            } else {
                setSelected(location.pathname);
                getResults(`${location.pathname}/q=${query}&num=40`);
            }
        }
    }, [searchTerm, location.pathname]);
    console.log(selected);

    // Log the results and loading state for debugging
    useEffect(() => {
        console.log("Results:", results);
        console.log("Loading state:", isLoading);
    }, [results, isLoading]);

    // Show loading state
    if (isLoading) return <div>Loading...</div>;

    // Handle no results found
    if (!results || results.length === 0) {
        return <div>No results found</div>;
    }

    return (
        <div>
            <h1>Results for: {searchTerm}</h1>
            <div>
                {Array.isArray(results) ? (
                    results.map((item, index) => (
                        <div key={index}>
                            <p>{item.title || "No title available"}</p>
                            <a href={item.link || "#"} target="_blank" rel="noopener noreferrer">
                                {item.link || "No link available"}
                            </a>
                        </div>
                    ))
                ) : (
                    <div>{JSON.stringify(results)}</div>
                )}
            </div>
        </div>
    );
};

export default Result;
