import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

// import { useEffect, useState } from "react";

export default async function News() {
    // const res = await fetch("http://localhost:8080/news");

    // if (!res.ok) {
    //     throw new Error("Failed to fetch news.");
    // }

    // const news = await res.json();

    // after chaning the @lib/news.js
    const news = await getAllNews();

    return ( 
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    );
}

// Normal way, but without SEO
/*

import NewsList from "@/components/news-list";

import { useEffect, useState } from "react";

export default async function News() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const res = await fetch("http://localhost:8080/news");

            if (!res.ok) {
                setError("Failed to fetch news.");
                setIsLoading(false);
            }

            const news = await res.json();
            setIsLoading(false);
            setNews(news);
        }

        fetchNews();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    let newsContent;

    if (news) {
        newsContent = <NewsList news={news} />;
    }

    return (
        <>
            <h1>News Page</h1>
            {newsContent}
        </>
    );
}

*/
