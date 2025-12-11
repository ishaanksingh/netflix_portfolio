import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from './images/logo-2.png'; // your ISHFLIX image

const NetflixTitle: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    // prevent replaying if already clicked
    if (isClicked) return;

    const audio = new Audio(netflixSound);
    audio.play().catch((error) => console.error('Audio play error:', error));
    setIsClicked(true); // start animation
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse'); // same behaviour as original
      }, 4000); // length of the animation / sound

      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div
      className={`netflix-container ${isClicked ? 'clicked' : ''}`}
      onClick={handlePlaySound}
    >
      <img
        src={logoImage}
        alt="ISHFLIX"
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
      />
    </div>
  );
};

export default NetflixTitle;
