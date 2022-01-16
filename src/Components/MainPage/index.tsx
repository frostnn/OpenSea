import React from 'react';
import styled from 'styled-components';

const CurrentTime = styled.span`
  position: absolute;
  font-size: 10px;
  z-index: 10;
  top: 6px;
  left: 10px;
  opacity: 0;
  transition: 0.2s;
`;
const DurationTime = styled.span`
  position: absolute;
  font-size: 10px;
  z-index: 10;
  top: 6px;
  right: 10px;
  opacity: 0;
  transition: 0.2s;
`;
const Audio = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  :hover {
    ${DurationTime} {
      opacity: 1;
    }
    ${CurrentTime} {
      opacity: 1;
    }
  }
`;
const ControlPanel = styled.div`
  background: #181818;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ControlPanelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonControlPanel = styled.button`
  margin: 0 5px;
  color: #757575;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  transition: 0.2s;
  &:hover {
    color: #dcdcdc;
  }
`;

const VolumeControl = styled.div`
  width: 44px;
  right: 25px;
  border: 1px solid;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 15px 30px rgb(0 0 0 / 20%);
  margin-bottom: 72px;
  height: 160px;
  bottom: 10px;
  position: absolute;
  opacity: 0;
  transition: 0.2s;
`;
const VolumeControlBar = styled.div`
  color: #f4f4f4;
  background-color: #222;
  top: 0;
  right: 0;
  width: 42px;
  height: 100%;
  z-index: 1;
  position: absolute;
  &:before {
    position: absolute;
    content: '';
    display: block;
    left: 50%;
    width: 0;
    height: 0;
    border-style: solid;
    margin-left: -5px;
    border-width: 5px;
    bottom: -10px;
    border-color: #222 transparent transparent;
  }
`;
const VolumeInput = styled.input`
  transform: rotateZ(270deg);
  position: relative;
  left: -46px;
  top: 68px;
`;
const VolumeControlBtn = styled.button`
  margin: 0 10px;
  color: #757575;
  border: none;
  background: transparent;
  font-size: 26px;
  cursor: pointer;
  display: flex;
  transition: 0.2s;
  :hover + 
    ${VolumeControl} {
      opacity: 1;
    }
  }
`;

const PlayerControlTrack = styled.div`
  display: flex;
  margin-left: 20px;
`;
const TrackImg = styled.img`
  max-width: 50px;
`;
const TrackArtist = styled.span`
  font-size: 13px;
  padding: 3px 0;
  cursor: pointer;
  :hover {
    color: #ffdb4d;
  }
`;
const TrackName = styled.span`
  font-size: 13px;
  font-weight: 600;
  padding: 3px 0;
  cursor: pointer;
  :hover {
    color: #ffdb4d;
  }
`;
const TrackWrapperInfo = styled.span`
  display: flex;
  flex-direction: column;
  color: #fff;
  justify-content: center;
  margin-left: 10px;
`;

const ProgressBarAudio = styled.input`
  appearance: none;
  background: #181818;
  position: relative;
  width: 100%;
  height: 13px;
  bottom: -4px;
  outline: none;
  left: -2px;
  &::-webkit-slider-runnable-track {
    background: rgb(255 255 255 / 30%);
    position: relative;
    width: 100%;
    height: 13px;
    outline: none;
  }
  ::-moz-range-track {
    background: rgb(255 255 255 / 30%);
    position: relative;
    width: 100%;
    height: 13px;
    outline: none;
  }
  &::-moz-focus-outer {
    border: 0;
  }
  ::before {
    content: '';
    height: 13px;
    width: 10;
    background-color: #ffdb4d;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }
  &::-moz-range-progress {
    background-color: #ffdb4d;
    height: 11px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 5px;
    width: 5px;
    border: none;
    background-color: none;
    cursor: pointer;
    position: relative;
    margin: -2px 0 0 0;
    z-index: 3;
    box-sizing: border-box;
  }
  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background: var(--selectedKnobby);
  }
  &::-moz-range-thumb {
    height: 5px;
    width: 5px;
    border: transparent;
    background-color: none;
    cursor: pointer;
    position: relative;
    z-index: 3;
    box-sizing: border-box;
  }
  &:active::-moz-range-thumb {
    transform: scale(1.2);
    background: var(--selectedKnobby);
  }
`;
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const audioRef = React.useRef<HTMLMediaElement>(null);
  const [duration, setDuration] = React.useState<number>(0);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const volumeBar = React.useRef<HTMLInputElement>(null);
  const [volume, setVolume] = React.useState<number>(1);
  const [mute, setMute] = React.useState<boolean>(false);
  const progressBar = React.useRef<HTMLInputElement>(null);
  const animationRef = React.useRef<any>(null);

  const [currentTrack, setCurrentTrack] = React.useState<number>(0);

  return <h1>KEK</h1>;
};

export default AudioPlayer;
