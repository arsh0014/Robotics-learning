import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  try {
    // School kid party burst!
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#3B82F6', '#10B981', '#F59E0B']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#EC4899', '#8B5CF6', '#06B6D4']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#FBBF24', '#34D399', '#60A5FA']
    });
  } catch (err) {
    console.log('Confetti trigger skipped');
  }
};

export default triggerConfetti;
