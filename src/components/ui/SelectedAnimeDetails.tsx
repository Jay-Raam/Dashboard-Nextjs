import React from "react";
import { IoMdClose } from "react-icons/io";

interface Broadcast {
  day?: string;
}

interface Producer {
  name?: string;
  url?: string;
}

interface Studio {
  name?: string;
  url?: string;
}

interface Theme {
  name?: string;
  type?: string;
  url?: string;
}

interface Genre {
  name?: string;
  type?: string;
  url?: string;
}

interface Anime {
  images: {
    jpg: {
      image_url: string;
    };
  };
  title?: string;
  type?: string;
  episodes?: number;
  year?: number;
  rank?: number;
  ranking?: number;
  duration?: string;
  source?: string;
  season?: string;
  broadcast?: Broadcast;
  background?: string;
  synopsis?: string;
  producers: Producer[];
  studios: Studio[];
  themes: Theme[];
  genres: Genre[];
  score?: number;
  status?: string;
}

interface SelectedAnimeDetailsProps {
  anime: Anime | null;
  trailerUrl: string;
  onClose: () => void;
}

const SelectedAnimeDetails: React.FC<SelectedAnimeDetailsProps> = ({
  anime,
  trailerUrl,
  onClose,
}) => {
  if (!anime) return null;

  const {
    images,
    title,
    type,
    episodes,
    year,
    rank,
    ranking,
    duration,
    source,
    season,
    broadcast,
    background,
    synopsis,
    producers,
    studios,
    themes,
    genres,
    score,
    status,
  } = anime;

  return (
    <div className="selected-anime text-black">
      <div className="selected-container">
        <span
          className="close-btn absolute left-5 md:left-20 z-50 top-5 hover:text-red-500"
          onClick={onClose}
        >
          <IoMdClose className="text-[25px]" />
        </span>
        <div className="selected-anime-content flex justify-center items-center gap-5 flex-col md:flex-row w-full">
          <div className="anime-image-container w-full md:w-1/2 flex justify-center items-center mt-4">
            <img
              src={
                images.jpg.image_url ||
                "https://example.com/placeholder_200x200.jpg"
              }
              className="selected-anime-image "
              alt={title}
            />
          </div>
          {trailerUrl && (
            <div className="trailer-container w-full md:w-1/2">
              <iframe title="trailer" src={trailerUrl} allowFullScreen></iframe>
            </div>
          )}
        </div>

        <h2 className="selected-anime-title">{title || "No Title"}</h2>
        <div className="selected-anime-details flex justify-center items-center gap-5 flex-col">
          {type && <p className="anime-detail">Type: {type}</p>}
          {episodes && <p className="anime-detail">Episodes: {episodes}</p>}
          {year && <p className="anime-detail">Year: {year}</p>}
          {rank && <p className="anime-detail">Rank: {rank}</p>}
          {ranking && <p className="anime-detail">Ranking: {ranking}</p>}
          {duration && <p className="anime-detail">Duration: {duration}</p>}
          {source && <p className="anime-detail">Source: {source}</p>}
          {season && <p className="anime-detail">Season: {season}</p>}
          {broadcast?.day && (
            <p className="anime-detail">Broadcast: {broadcast.day}</p>
          )}
          {background && (
            <p className="anime-detail">Background: {background}</p>
          )}
          {synopsis && <p className="anime-detail">Synopsis: {synopsis}</p>}

          {producers?.[0]?.name && (
            <p className="anime-detail">Producer Name: {producers[0].name}</p>
          )}
          {producers?.[0]?.url && (
            <a className="anime-link" href={producers[0].url}>
              Producer Link
            </a>
          )}

          {studios?.[0]?.name && (
            <p className="anime-detail">Studio Name: {studios[0].name}</p>
          )}
          {studios?.[0]?.url && (
            <a className="anime-link" href={studios[0].url}>
              Studio Link
            </a>
          )}

          {themes?.[0]?.name && (
            <p className="anime-detail">Theme: {themes[0].name}</p>
          )}
          {themes?.[0]?.type && (
            <p className="anime-detail">Type: {themes[0].type}</p>
          )}
          {themes?.[0]?.url && (
            <a className="anime-link" href={themes[0].url}>
              Theme Link
            </a>
          )}

          {genres?.[0]?.name && (
            <p className="anime-detail">Genre: {genres[0].name}</p>
          )}
          {genres?.[0]?.type && (
            <p className="anime-detail">Type: {genres[0].type}</p>
          )}
          {genres?.[0]?.url && (
            <a className="anime-link" href={genres[0].url}>
              Genre Link
            </a>
          )}

          {score && <p className="anime-detail">Score: {score}</p>}
          {status && <p className="anime-detail">Status: {status}</p>}
        </div>
      </div>
    </div>
  );
};

export default SelectedAnimeDetails;
