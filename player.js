/* SAFE ELEMENTS */
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const heart = document.getElementById("heart");

/* SONGS  */
let songs = [
    {
        name: "Afusic Pal Pal",
        src: "songs/Afusic pal pal.mp3",
        cover: "covers/Afusic pal pal.jpg"
    },
    {
        name: "Kya Hua Tera Wada",
        src: "songs/Kya hua tera wada.mp3",
        cover: "covers/Kya hua tera wada.jpg"
    },
    {
        name: "Rafta Rafta",
        src: "songs/are-rafta-rafta-aankh-meri-ladi-hai.mp3",
        cover: "covers/arey-rafta-rafta-aakhn-meri-ladi-hai.jpg"
    }
];

let index = 0;

/* LOAD SONG */
function loadSong(){
    const song = songs[index];

    audio.src = song.src;

    document.getElementById("songName").innerText = song.name;
    document.getElementById("mainSongName").innerText = song.name;

    document.getElementById("miniCover").src = song.cover;
    document.getElementById("mainCover").src = song.cover;
}

/* PLAY / PAUSE */
function playPause(){
    if(audio.paused){
        audio.play().catch(()=>{});
        playBtn.innerText = "⏸";
    }else{
        audio.pause();
        playBtn.innerText = "▶";
    }
}

/* NEXT */
function nextSong(){
    index = (index + 1) % songs.length;
    loadSong();
    audio.play().catch(()=>{});
    playBtn.innerText = "⏸";
}

/* PREVIOUS */
function prevSong(){
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play().catch(()=>{});
    playBtn.innerText = "⏸";
}

/* LIKE */
function toggleHeart(){
    heart.classList.toggle("active");
}

/* PROGRESS SAFE */
audio.addEventListener("timeupdate", () => {
    if(audio.duration){
        progress.value = (audio.currentTime / audio.duration) * 100;
    }
});

progress.addEventListener("input", () => {
    if(audio.duration){
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

/* AUTO NEXT */
audio.addEventListener("ended", nextSong);

/* INIT */
window.addEventListener("load", loadSong);