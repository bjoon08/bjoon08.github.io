import { useRef, useState } from "react";
import './songCard.css';

import React from 'react'

export default function SongCard() {
    const [currentMusicDetails, setCurrentMusicDetails] = useState({
        songName: 'The Lights',
        songArtist: 'Juice Wrld',
        songSrc: './songs/The Light.mp3',
        songAvatar: './song-img/juice.png'
    })

    //UseStates Variables
    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(0);
    const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
    const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');

    const currentAudio = useRef()

    const handleMusicProgressBar = (e)=>{
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
    }

    //Change Avatar Class
    let avatarClass = ['objectFitCover','objectFitContain','none']
    const [avatarClassIndex, setAvatarClassIndex] = useState(0)
    const handleAvatar = ()=>{
    if (avatarClassIndex >= avatarClass.length - 1) {
        setAvatarClassIndex(0)
    }else{
        setAvatarClassIndex(avatarClassIndex + 1)
    }
    }


    //Play Audio Function
    const handleAudioPlay = ()=>{
    if (currentAudio.current.paused) {
        currentAudio.current.play();
        setIsAudioPlaying(true)
    }else{
        currentAudio.current.pause();
        setIsAudioPlaying(false)
    }
    }

    const musicAPI = [
    {
        songName: 'The Lights',
        songArtist: 'Juice Wrld',
        songSrc: './songs/The Light.mp3',
        songAvatar: './song-img/juice.png'
    },
    {
        songName: 'step into my life (feat. sleep.ing)',
        songArtist: 'Powfu',
        songSrc: './songs/powfu.mp3',
        songAvatar: './song-img/powfu.jpeg'
    },
    {
        songName: 'Okinawa',
        songArtist: '92914',
        songSrc: './songs/Okinawa.mp3',
        songAvatar: './song-img/okinawa.jpeg'
    },
    {
        songName: 'Drive Safe',
        songArtist: 'Rich Brian',
        songSrc: './songs/Drive Safe.mp3',
        songAvatar: './song-img/drive safe.jpeg'
    }
    ]

    const handleNextSong = ()=>{
    if (musicIndex >= musicAPI.length - 1) {
        let setNumber = 0;
        setMusicIndex(setNumber);
        updateCurrentMusicDetails(setNumber);
    }else{
        let setNumber = musicIndex + 1;
        setMusicIndex(setNumber)
        updateCurrentMusicDetails(setNumber);
    }
    }

    const handlePrevSong = ()=>{
    if (musicIndex === 0) {
        let setNumber = musicAPI.length - 1;
        setMusicIndex(setNumber);
        updateCurrentMusicDetails(setNumber);
    }else{
        let setNumber = musicIndex - 1;
        setMusicIndex(setNumber)
        updateCurrentMusicDetails(setNumber);
    }
    }

    const updateCurrentMusicDetails = (number)=>{
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
        songName: musicObject.songName,
        songArtist: musicObject.songArtist,
        songSrc: musicObject.songSrc,
        songAvatar: musicObject.songAvatar
    })
    setIsAudioPlaying(true);
    }

    const handleAudioUpdate = ()=>{
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress)? 0 : progress)
    }

    return (
        <>
    <div className="container">
        <audio src='./songs/The Light.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
        <div className="music-Container">
            <p className='musicPlayer'>Music Player</p>
            <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
            <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
            <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
            <div className="musicTimerDiv">
            <p className='musicCurrentTime'>{musicCurrentTime}</p>
            <p className='musicTotalLenght'>{musicTotalLength}</p>
            </div>
            <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
            <div className="musicControlers">
            <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa-solid fa-forward musicController' onClick={handleNextSong}></i>
            </div>
        </div>
    </div>
    </>
    );
}
