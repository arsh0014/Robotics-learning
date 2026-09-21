// Synthesized Web Audio API Sound Effects for RoboLearn
// Pure browser native audio - zero external MP3 downloads required!

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  // Friendly soft button click
  playClick() {
    this.playTone(520, 'triangle', 0.08, 0.08);
  }

  // Robot beep boop
  playRoboBeep() {
    this.playTone(440, 'square', 0.06, 0.04);
    setTimeout(() => this.playTone(880, 'sine', 0.1, 0.05), 70);
  }

  // Correct answer chime
  playCorrect() {
    this.playTone(523.25, 'sine', 0.12, 0.1); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.15, 0.12), 100); // E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.25, 0.15), 200); // G5
  }

  // Incorrect answer soft buzz
  playIncorrect() {
    this.playTone(220, 'sawtooth', 0.18, 0.06);
    setTimeout(() => this.playTone(180, 'sawtooth', 0.22, 0.06), 120);
  }

  // Celebration fanfare on badge unlock / quiz complete!
  playFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, High C
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.3, 0.15);
      }, idx * 120);
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

export const sounds = new SoundSystem();
export default sounds;
