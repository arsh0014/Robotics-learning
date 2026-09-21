import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../../utils/audio';

interface AudioReadAloudProps {
  textToRead: string;
  label?: string;
}

export const AudioReadAloud: React.FC<AudioReadAloudProps> = ({ textToRead, label = 'Listen' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    sound.playClick();
    if (isPlaying) {
      sound.stopSpeaking();
      setIsPlaying(false);
    } else {
      sound.speakText(textToRead);
      setIsPlaying(true);
      // Auto reset after reasonable time
      setTimeout(() => {
        setIsPlaying(false);
      }, Math.max(3000, textToRead.length * 80));
    }
  };

  return (
    <button
      className="btn-tts"
      onClick={handleToggle}
      title="Listen to this lesson text read aloud"
      aria-label="Read text aloud"
    >
      {isPlaying ? <VolumeX size={16} /> : <Volume2 size={16} />}
      <span>{isPlaying ? 'Stop' : label}</span>
    </button>
  );
};
