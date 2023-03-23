//your JS code here. If required.
Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@DipankarBhaduri 
acciojob
/
Meditation-App-parvg555
Public
generated from acciojob/Meditation-App
Fork your own copy of acciojob/Meditation-App-parvg555
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Meditation-App-parvg555/script.js /
@parvg555
parvg555 created a submission
Latest commit a989673 last month
 History
 2 contributors
@acciojob-4@parvg555
79 lines (70 sloc)  2.17 KB

const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

sounds.forEach((sound) => {
  sound.addEventListener("click", function () {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function () {
  checkPlaying(song);
});

replay.addEventListener("click", function () {
  restartSong(song);
});

const restartSong = (song) => {
  let currentTime = song.currentTime;
  song.currentTime = 0;
  console.log("ciao");
};

timeSelect.forEach((option) => {
  option.addEventListener("click", function () {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

const checkPlaying = (song) => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

song.ontimeupdate = function () {
  let currentTime = song.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Meditation-App-parvg555/script.js at master · acciojob/Meditation-App-parvg555