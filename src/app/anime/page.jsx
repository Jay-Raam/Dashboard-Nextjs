"use client";

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import "./stlye.css";
import { Input } from "@/components/ui/input";

export default function App() {
  const [animeData, setAnimeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchAnimeData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${query}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data.data);
        setAnimeData(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchAnimeData();
  }, [query]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleSelectedAnime = (anime) => {
    setSelectedAnime(anime);
    fetchTrailer(anime.title);
  };

  const fetchTrailer = async (title) => {
    try {
      const Api_Key = "AIzaSyDiG8K9rBBYv-dE0kgJRmW2OMsox9jWYW8";
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title} trailer&key=${Api_Key}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch trailer");
      }
      const data = await response.json();
      const videoId = data.items[0].id.videoId;
      setTrailerUrl(`https://www.youtube.com/embed/${videoId}`);
    } catch (error) {
      alert("Error fetching trailer...", error);
    }
  };

  if (error) {
    return (
      <div className="two-01 color">
        <h4>Error: {error}</h4>
      </div>
    );
  } else if (!animeData) {
    return (
      <div>
        <p className="max-w-[800px] mx-auto my-0">Waiting for Data...</p>
      </div>
    );
  }

  const HandleClose = () => {
    setSelectedAnime(null);
  };

  return (
    <div className="Anime mx-auto my-0">
      <div className="container mx-auto my-0">
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for anime..."
          className="one-01"
          autoFocus
        />

        {isLoading && <div className="loader"></div>}
        <ul className="search-container mt-6">
          {animeData.map((anime) => (
            <li key={anime.mal_id} className="one-02">
              <img
                src={anime.images.jpg.image_url}
                className="one-03"
                alt={anime.title}
                onClick={() => handleSelectedAnime(anime)}
              />
              <h2 className="one-04">{anime.title}</h2>
              <p className="one-05">Type {anime.type}</p>
              <p className="one-05">Episodes {anime.episodes}</p>
              <p className="one-05">Status {anime.status}</p>
              <p className="one-05">Score {anime.score}</p>
            </li>
          ))}
        </ul>
      </div>

      {selectedAnime && (
        <div className="selected-anime">
          <div className="selected-container">
            <span className="close-0001" onClick={HandleClose}>
              <IoMdClose />
            </span>
            <div className="flex-00001">
              <div className="image-002">
                {selectedAnime.images.jpg.image_url ? (
                  <img
                    src={selectedAnime.images.jpg.image_url}
                    className="one-003"
                    alt={selectedAnime.title}
                  />
                ) : (
                  <img
                    src={"https://example.com/placeholder_200x200.jpg"}
                    className="one-003"
                    alt={selectedAnime.title}
                  />
                )}
              </div>
              {trailerUrl && (
                <div className="trailer-container">
                  <iframe
                    title="trailer"
                    src={trailerUrl}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {selectedAnime.title ? (
              <h2 className="one-004 text-black">{selectedAnime.title}</h2>
            ) : (
              <h2 className="one-004 text-black">No Title</h2>
            )}
            <div className="flex-00001">
              {selectedAnime.type && selectedAnime.type !== null && (
                <p className="one-005 text-black">
                  <span className="text-black">Type</span> {selectedAnime.type}
                </p>
              )}
              {selectedAnime.episodes && selectedAnime.episode !== null && (
                <p className="one-005 text-black">
                  <span className="text-black">Episodes </span>
                  {selectedAnime.episodes}
                </p>
              )}
              {selectedAnime.year && selectedAnime.year !== null && (
                <p className="one-005 text-black">
                  <span className="text-black">Year</span> {selectedAnime.year}
                </p>
              )}
              {selectedAnime.rank && selectedAnime.rank !== null && (
                <p className="one-005 text-black">
                  <span className="text-black">Rank</span> {selectedAnime.rank}
                </p>
              )}
              {selectedAnime.ranking && selectedAnime.ranking !== null && (
                <p className="one-005 text-black">
                  <span className="text-black">Ranking</span>
                  {selectedAnime.ranking}
                </p>
              )}
              {selectedAnime.duration && selectedAnime.duration !== null && (
                <p className="one-005 text-black">
                  <span className="text-black">Duration</span>
                  {selectedAnime.duration}
                </p>
              )}
              {selectedAnime.source && selectedAnime.source !== null && (
                <p className="one-005 text-black">
                  <span className="text-black">Source</span>
                  {selectedAnime.source}
                </p>
              )}
              {selectedAnime.season && selectedAnime.season !== null && (
                <p className="one-005 text-black">
                  <span className="text-black">Season</span>
                  {selectedAnime.season}
                </p>
              )}
              {selectedAnime.broadcast.day &&
                selectedAnime.broadcast.day !== null && (
                  <p className="one-005 text-black">
                    <span className="text-black">Broadcast</span>
                    {selectedAnime.broadcast.day}
                  </p>
                )}
            </div>
            {selectedAnime.background && selectedAnime.background !== null && (
              <p className="one-005 text-black">
                <span className="text-black">Background</span>
                {selectedAnime.background}
              </p>
            )}

            {selectedAnime.synopsis && selectedAnime.synopsis !== null && (
              <p className="one-005 text-black">
                <span className="text-black">Synopsis</span>
                {selectedAnime.synopsis}
              </p>
            )}
            <div className="flex-00001">
              {selectedAnime.producers.length > 0 &&
                selectedAnime.producers[0].name &&
                selectedAnime.producers[0].name !== null && (
                  <p className="one-005 text-black">
                    <span className="text-black">Porducers Name </span>
                    {selectedAnime.producers[0].name}
                  </p>
                )}
              {selectedAnime.producers.length > 0 &&
                selectedAnime.producers[0].url &&
                selectedAnime.producers[0].url !== null && (
                  <a
                    className="main-00001"
                    href={selectedAnime.producers[0].url}
                  >
                    Porducers Link
                  </a>
                )}
            </div>
            <div className="flex-00001">
              {selectedAnime.studios.length > 0 && (
                <div className="flex-00001">
                  {selectedAnime.studios[0].name &&
                    selectedAnime.studios[0].name !== null && (
                      <p className="one-005 text-black">
                        <span className="text-black"> Studies Name</span>
                        {selectedAnime.studios[0].name || "no Data"}
                      </p>
                    )}
                  {selectedAnime.studios[0].url &&
                    selectedAnime.studios[0].url !== null && (
                      <a
                        className="main-00001"
                        href={selectedAnime.studios[0].url}
                      >
                        Studies
                      </a>
                    )}
                </div>
              )}
            </div>
            <div className="flex-00001">
              <div className="flex-00001">
                {selectedAnime.themes.length > 0 && (
                  <div className="flex-00001">
                    {selectedAnime.themes[0].name &&
                      selectedAnime.themes[0].name !== null && (
                        <p className="one-005 text-black">
                          <span className="text-black">Theme</span>
                          {selectedAnime.themes[0].name}
                        </p>
                      )}
                    {selectedAnime.themes[0].type &&
                      selectedAnime.themes[0].type !== null && (
                        <p className="one-005 text-black">
                          <span className="text-black">Type</span>
                          {selectedAnime.themes[0].type}
                        </p>
                      )}
                    {selectedAnime.themes[0].url &&
                      selectedAnime.themes[0].url !== null && (
                        <a
                          className="main-00001"
                          href={selectedAnime.themes[0].url}
                        >
                          Theme Link
                        </a>
                      )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex-00001-2">
              <div className="flex-00001">
                {selectedAnime.genres.length > 0 && (
                  <div className="flex-00001">
                    {selectedAnime.genres[0].name &&
                      selectedAnime.genres[0].name !== null && (
                        <p className="one-005 text-black">
                          <span className="text-black">Genres</span>
                          {selectedAnime.genres[0].name}
                        </p>
                      )}
                    {selectedAnime.genres[0].type &&
                      selectedAnime.genres[0].type !== null && (
                        <p className="one-005 text-black">
                          <span className="text-black">Type</span>
                          {selectedAnime.genres[0].type}
                        </p>
                      )}
                    {selectedAnime.genres[0].url &&
                      selectedAnime.genres[0].url !== null && (
                        <a
                          className="main-00001"
                          href={selectedAnime.genres[0].url}
                        >
                          Genres Link
                        </a>
                      )}
                  </div>
                )}
              </div>
            </div>
            {selectedAnime.score && selectedAnime.score !== null && (
              <p className="one-005 text-black">
                <span className="text-black">Score</span> {selectedAnime.score}
              </p>
            )}
            {selectedAnime.status && selectedAnime.status !== null && (
              <p className="one-005 text-black">
                <span className="text-black">Status</span>
                {selectedAnime.status}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
