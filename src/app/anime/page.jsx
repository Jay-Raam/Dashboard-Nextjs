"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import SelectedAnimeDetails from "@/components/ui/SelectedAnimeDetails";
import "./style.css";

export default function Anime() {
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  const fetchAnimeData = async (searchQuery) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAnimeData(data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimeData("Naruto");
  }, []);

  useEffect(() => {
    if (query) {
      fetchAnimeData(query);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelectedAnime = (anime) => {
    setSelectedAnime(anime);
    fetchTrailer(anime.title);
  };

  const fetchTrailer = async (title) => {
    try {
      const apiKey = "AIzaSyDiG8K9rBBYv-dE0kgJRmW2OMsox9jWYW8";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}trailer&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch trailer");
      }
      const data = await response.json();
      const videoId = data.items[0]?.id?.videoId;
      if (videoId) {
        setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
      } else {
        setTrailerUrl("");
        alert("No trailer found.");
      }
    } catch (error) {
      alert(`Error fetching trailer: ${error.message}`);
    }
  };

  const handleClose = () => {
    setSelectedAnime(null);
    setTrailerUrl("");
  };

  if (error) {
    return (
      <div className="error-container max-w-[1550px] mx-auto my-0 h-[100vh] flex justify-center items-center">
        <h4>Error: {error}</h4>
      </div>
    );
  }

  return (
    <div className="anime-app mx-auto my-0">
      <div className="container mx-auto my-0">
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for anime..."
          className="search-input"
          autoFocus
        />

        {isLoading && <div className="loader"></div>}
        <ul className="max-w-[1550px] w-full mx-auto my-0 mt-6 flex justify-center items-center text-center flex-wrap gap-3">
          {animeData.map((anime) => (
            <li
              key={anime.mal_id}
              className="w-[280px] flex justify-center items-center text-center flex-col gap-3"
            >
              <img
                src={anime.images.jpg.image_url}
                className="anime-image"
                alt={anime.title}
                onClick={() => handleSelectedAnime(anime)}
              />
              <h2 className="anime-title">{anime.title}</h2>
              <p className="anime-info">Type: {anime.type}</p>
              <p className="anime-info">Episodes: {anime.episodes}</p>
              <p className="anime-info">Status: {anime.status}</p>
              <p className="anime-info">Score: {anime.score}</p>
            </li>
          ))}
        </ul>
      </div>

      {selectedAnime && (
        <SelectedAnimeDetails
          anime={selectedAnime}
          trailerUrl={trailerUrl}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
