// Web Audio API child-friendly sound effects and speech synthesis

class SoundFX {
  private ctx: AudioContext | null = null;
  private motorOsc: OscillatorNode | null = null;
  private motorGain: GainNode | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Gentle UI Click / Snap
  playClick() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // Audio context might be restricted
    }
  }

  // Cheerful Success Chime (Star earned, correct answer, badge unlocked)
  playSuccess() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.2, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.25);
      });
    } catch {
      // Audio context might be restricted
    }
  }

  // Gentle retry sound (Positive and encouraging)
  playTryAgain() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Audio context might be restricted
    }
  }

  // Queaky Musical Shout
  playQueakyNote(freq: number = 650, duration: number = 0.25) {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth'; // gives that fun buzzy toy character
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.05, ctx.currentTime + duration * 0.5);
      osc.frequency.exponentialRampToValueAtTime(freq, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context might be restricted
    }
  }

  // Continuous Motor Sound
  setMotorHum(isRunning: boolean, speedMultiplier: number = 1) {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      if (!isRunning) {
        if (this.motorGain) {
          this.motorGain.gain.setTargetAtTime(0, ctx.currentTime, 0.05);
        }
        return;
      }

      if (!this.motorOsc) {
        this.motorOsc = ctx.createOscillator();
        this.motorGain = ctx.createGain();
        this.motorOsc.type = 'sawtooth';
        this.motorGain.gain.setValueAtTime(0.01, ctx.currentTime);
        this.motorOsc.connect(this.motorGain);
        this.motorGain.connect(ctx.destination);
        this.motorOsc.start();
      }

      const baseFreq = 80 + speedMultiplier * 70; // 80Hz to 150Hz
      this.motorOsc.frequency.setTargetAtTime(baseFreq, ctx.currentTime, 0.05);
      this.motorGain?.gain.setTargetAtTime(0.08, ctx.currentTime, 0.05);
    } catch {
      // Audio context might be restricted
    }
  }

  // Text-To-Speech for young Class 1 students
  speakText(text: string) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower, easy to understand for Class 1
      utterance.pitch = 1.1; // Friendly warm pitch
      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis might be unavailable
    }
  }

  stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const sound = new SoundFX();
