import React from "react";
import WatchedMovie from "./WatchedMovie";

const WatchedList = ({ watched, onDeleteWatchMovie }) => {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatchMovie={onDeleteWatchMovie}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
