import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {

  const [videoUrl, setVideoUrl] = useState('');

  // будем менять url видео в зависимости от выбранной программы

  retrun(
    <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />);
};