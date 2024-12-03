"use client";

const PlayPause = () => {
  return (
    <div className="play-pause-container">
      <input type="checkbox" id="playPauseToggle" />
      <label htmlFor="playPauseToggle" className="play-pause-button">
        <span className="icon"></span>
      </label>
    </div>
  );
};

export default PlayPause;
