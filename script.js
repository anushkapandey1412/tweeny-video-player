const videoShells = document.querySelectorAll(".video-shell");

function setPlayingState(shell, isPlaying) {
  shell.classList.toggle("is-playing", isPlaying);

  const button = shell.querySelector(".play-button");
  button.setAttribute("aria-label", isPlaying ? "Pause video" : "Play video");
}

function setMuteState(shell, video) {
  const isMuted = video.muted;
  shell.classList.toggle("is-unmuted", !isMuted);

  const button = shell.querySelector(".volume-button");
  button.setAttribute("aria-label", isMuted ? "Unmute video" : "Mute video");
}

function pauseOtherVideos(currentVideo) {
  document.querySelectorAll(".creative-video").forEach((video) => {
    if (video !== currentVideo && !video.paused) {
      video.pause();
    }
  });
}

videoShells.forEach((shell) => {
  const video = shell.querySelector(".creative-video");
  const playButton = shell.querySelector(".play-button");
  const volumeButton = shell.querySelector(".volume-button");
  const progressTrack = shell.querySelector(".progress-track");
  const progressBar = shell.querySelector(".progress-bar");

  // Start muted so browser autoplay policies are never a problem if
  // the browser restores a previous playback state.
  video.muted = true;
  setMuteState(shell, video);
  setPlayingState(shell, false);

  playButton.addEventListener("click", async () => {
    if (video.paused) {
      pauseOtherVideos(video);

      try {
        await video.play();
      } catch (error) {
        console.warn("Video could not be played:", error);
      }
    } else {
      video.pause();
    }
  });

  volumeButton.addEventListener("click", () => {
    video.muted = !video.muted;
    setMuteState(shell, video);
  });

  video.addEventListener("play", () => {
    pauseOtherVideos(video);
    setPlayingState(shell, true);
  });

  video.addEventListener("pause", () => {
    setPlayingState(shell, false);
  });

  video.addEventListener("ended", () => {
    video.currentTime = 0;
    setPlayingState(shell, false);
    progressBar.style.width = "0%";
  });

  video.addEventListener("timeupdate", () => {
    if (!video.duration) return;
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${progress}%`;
  });

  // Allow users to click the progress bar to seek.
  progressTrack.addEventListener("click", (event) => {
    if (!video.duration) return;

    const rect = progressTrack.getBoundingClientRect();
    const clickPosition = Math.min(
      Math.max(event.clientX - rect.left, 0),
      rect.width
    );

    video.currentTime = (clickPosition / rect.width) * video.duration;
  });

  // Keyboard accessibility.
  shell.addEventListener("keydown", (event) => {
    if (event.key === " " && document.activeElement === shell) {
      event.preventDefault();
      playButton.click();
    }
  });
});
