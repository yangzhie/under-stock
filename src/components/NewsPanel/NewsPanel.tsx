"use client";

import React, { useEffect, useState } from "react";
import News from "./News";

interface NewsPanelProps {
  ticker: string;
}

interface News {
  title: string;
  article_url: string;
  published_utc: string;
}

function NewsPanel({ ticker }: NewsPanelProps) {
  const [news, setNews] = useState<News[]>([]);
  const polygonAPIKey = process.env.NEXT_PUBLIC_POLYGON;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const upTicker = ticker.toUpperCase()
        const response = await fetch(
          `https://api.polygon.io/v2/reference/news?ticker=${upTicker}&limit=5&apiKey=${polygonAPIKey}`
        );
        const newsData = await response.json();

        setNews(newsData.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, [ticker]);
  return (
    <>
      {news.map((element, index: number) => (
        <News
          key={index}
          newsDate={element.published_utc}
          newsContent={element.title}
          newsURL={element.article_url}
        />
      ))}
    </>
  );
}

export default NewsPanel;
