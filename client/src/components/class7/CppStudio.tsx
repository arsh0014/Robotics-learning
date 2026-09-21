import React, { useState } from 'react';
import { 
  Code2, 
  Play, 
  RotateCcw, 
  Terminal, 
  FileCode, 
  Sparkles, 
  Copy
} from 'lucide-react';

interface CodeSnippet {
  id: string;
  name: string;
  description: string;
  code: string;
}

export const CppStudio: React.FC = () => {
  const snippets: CodeSnippet[] = [
    {
      id: 'blink_serial',
      name: '1. LED Blink & Serial Telemetry',
      description: 'Standard Arduino C setup() and loop() demonstrating GPIO toggling and 9600 baud serial printing.',
      code: `// Class 7 Ch 7: C & C++ Fundamentals for Arduino
const int LED_PIN = 13;
int counter = 0;

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
  Serial.println("System Booted: RoboBox Std 7 C++ Core Ready");
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  Serial.print("Tick #");
  Serial.print(counter);
  Serial.println(" -> LED ON");
  delay(500);

  digitalWrite(LED_PIN, LOW);
  Serial.println(" -> LED OFF");
  delay(500);

  counter++;
}`
    },
    {
      id: 'gesture_mpu',
      name: '2. MPU-6050 Gesture Classifier',
      description: 'Reads pitch and roll angles from the I2C 6-axis accelerometer to determine hand tilt direction.',
      code: `#include <Wire.h>

const int MPU_ADDR = 0x68;
int16_t ax, ay, az;

void setup() {
  Wire.begin();
  Serial.begin(9600);
  Wire.beginTransmission(MPU_ADDR);
  Wire.write(0x6B); // PWR_MGMT_1 register
  Wire.write(0);    // Wake up MPU-6050
  Wire.endTransmission(true);
}

void loop() {
  Wire.beginTransmission(MPU_ADDR);
  Wire.write(0x3B); // Starting register for accelerometer
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_ADDR, 6, true);

  ax = Wire.read() << 8 | Wire.read();
  ay = Wire.read() << 8 | Wire.read();
  az = Wire.read() << 8 | Wire.read();

  if (ay > 8000) {
    Serial.println("Gesture Detected: TILT FORWARD (Command 'F')");
  } else if (ay < -8000) {
    Serial.println("Gesture Detected: TILT BACKWARD (Command 'B')");
  } else {
    Serial.println("Gesture: NEUTRAL LEVEL");
  }
  delay(300);
}`
    },
    {
      id: 'radar_servo',
      name: '3. Obstacle Radar Ultrasonic Sweep',
      description: 'Sweeps an SG90 micro servo from 15° to 165° while taking sonar distance readings.',
      code: `#include <Servo.h>

Servo radarServo;
const int TRIG_PIN = 9;
const int ECHO_PIN = 10;

long getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  long duration = pulseIn(ECHO_PIN, HIGH);
  return (duration * 0.0343) / 2;
}

void setup() {
  radarServo.attach(11);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  for (int angle = 15; angle <= 165; angle += 30) {
    radarServo.write(angle);
    delay(50);
    long dist = getDistance();
    Serial.print("Angle: ");
    Serial.print(angle);
    Serial.print(" deg | Range: ");
    Serial.print(dist);
    Serial.println(" cm");
  }
}`
    },
    {
      id: 'oop_motor',
      name: '4. C++ OOP Motor Class',
      description: 'Object-Oriented Programming (OOP) in C++: Encapsulating dual H-Bridge pins in a reusable class.',
      code: `// C++ Class Abstraction for Dual DC Motor Drive
class MotorDriver {
  private:
    int pinA;
    int pinB;
    int enablePin;

  public:
    MotorDriver(int a, int b, int en) {
      pinA = a;
      pinB = b;
      enablePin = en;
      pinMode(pinA, OUTPUT);
      pinMode(pinB, OUTPUT);
      pinMode(enablePin, OUTPUT);
    }

    void forward(int pwmSpeed) {
      digitalWrite(pinA, HIGH);
      digitalWrite(pinB, LOW);
      analogWrite(enablePin, pwmSpeed);
    }

    void stop() {
      digitalWrite(pinA, LOW);
      digitalWrite(pinB, LOW);
      analogWrite(enablePin, 0);
    }
};

MotorDriver leftWheel(4, 5, 3);

void setup() {
  Serial.begin(9600);
  Serial.println("Motor Driver C++ Instance Initialized!");
  leftWheel.forward(200);
}

void loop() {
  // Motor running at PWM speed 200
}`
    }
  ];

  const [selectedSnippetId, setSelectedSnippetId] = useState<string>(snippets[0].id);
  const [currentCode, setCurrentCode] = useState<string>(snippets[0].code);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    'AVR GCC Compiler 7.3.0 Ready.',
    'Select a sketch and click "Compile & Upload" to test your firmware.'
  ]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeSnippet = snippets.find(s => s.id === selectedSnippetId) || snippets[0];

  const handleSelectSnippet = (id: string) => {
    const s = snippets.find(x => x.id === id);
    if (s) {
      setSelectedSnippetId(id);
      setCurrentCode(s.code);
      setConsoleOutput([`Switched to: ${s.name}`, 'Ready to verify and run.']);
    }
  };

  const handleCompileAndRun = () => {
    setIsCompiling(true);
    setConsoleOutput(prev => [...prev, '>>> Compiling sketch with avr-g++ -mmcu=atmega328p -DF_CPU=16000000L...']);

    setTimeout(() => {
      // Check simple syntax errors
      const hasSetup = currentCode.includes('void setup()');
      const hasLoop = currentCode.includes('void loop()');

      if (!hasSetup || !hasLoop) {
        setConsoleOutput(prev => [
          ...prev,
          '❌ COMPILATION ERROR: Arduino C++ sketches must define both void setup() and void loop()!',
          'avr-g++ returned exit code 1.'
        ]);
        setIsCompiling(false);
        return;
      }

      setConsoleOutput(prev => [
        ...prev,
        '✅ Build successful! Compilation completed in 0.42s.',
        'Sketch uses 3,842 bytes (11%) of program storage space. Maximum is 32,256 bytes.',
        'Global variables use 284 bytes (13%) of dynamic memory.',
        '>>> Flashing firmware to Arduino Uno via /dev/ttyACM0 (avrdude)...',
        '>>> Done uploading! Baud 9600 serial connection opened:',
        '--- Serial Monitor Output ---',
        selectedSnippetId === 'gesture_mpu'
          ? '[I2C 0x68] MPU-6050 Awake. Hand gesture: TILT FORWARD (Command: F)'
          : selectedSnippetId === 'radar_servo'
          ? 'Angle: 15 deg | Range: 42 cm\nAngle: 45 deg | Range: 18 cm (⚠️ Obstacle)\nAngle: 75 deg | Range: 55 cm'
          : selectedSnippetId === 'oop_motor'
          ? 'Motor Driver C++ Instance Initialized! Left motor PWM set to 200.'
          : 'System Booted: RoboBox Std 7 C++ Core Ready\nTick #0 -> LED ON\n -> LED OFF\nTick #1 -> LED ON'
      ]);
      setIsCompiling(false);
    }, 700);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white p-6 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Code2 className="w-8 h-8 text-blue-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black tracking-tight">C & C++ Robotics Studio</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-amber-950">
                Std 7 Ch 7
              </span>
            </div>
            <p className="text-blue-100 text-sm">
              Code typed hardware control: variables, I2C registers, SG90 servo sweeps, and C++ OOP classes!
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCompileAndRun}
            disabled={isCompiling}
            className="px-5 py-2.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-bold transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/25 disabled:opacity-50"
          >
            <Play className={`w-4 h-4 fill-slate-950 ${isCompiling ? 'animate-spin' : ''}`} />
            {isCompiling ? 'Compiling...' : 'Verify & Upload'}
          </button>
        </div>
      </div>

      {/* Code Studio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Snippet Selector & Code Editor */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Preset Selector Pill Bar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 flex flex-wrap gap-2">
            {snippets.map(s => (
              <button
                key={s.id}
                onClick={() => handleSelectSnippet(s.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedSnippetId === s.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Code Editor Container */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-bold text-slate-200">RoboBox_Main.cpp</span>
                <span className="text-[10px] text-slate-500">| C++14 (avr-gcc)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={() => setCurrentCode(activeSnippet.code)}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              </div>
            </div>

            {/* Editable Textarea */}
            <div className="p-4 relative font-mono text-xs">
              <textarea
                value={currentCode}
                onChange={(e) => setCurrentCode(e.target.value)}
                rows={18}
                spellCheck={false}
                className="w-full bg-transparent text-blue-300 focus:outline-none resize-none font-mono text-xs leading-relaxed"
              />
            </div>

            {/* Footer summary */}
            <div className="bg-slate-900/60 px-4 py-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span>{activeSnippet.description}</span>
              <span className="text-blue-400 font-mono">Lines: {currentCode.split('\n').length}</span>
            </div>
          </div>

        </div>

        {/* Right Column: Serial Monitor & Hardware Specs */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Serial Terminal Output */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">AVR Serial Console</h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                9600 BAUD
              </span>
            </div>

            <div className="bg-black/95 rounded-2xl p-3 font-mono text-[11px] text-emerald-400 h-56 overflow-y-auto space-y-1.5 border border-slate-800">
              {consoleOutput.map((line, idx) => (
                <div key={idx} className="leading-tight">
                  <span className="text-slate-600 select-none mr-2">&gt;</span>
                  {line}
                </div>
              ))}
            </div>

            <button
              onClick={() => setConsoleOutput(['Terminal cleared.'])}
              className="mt-3 w-full py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
            >
              Clear Console
            </button>
          </div>

          {/* C vs C++ Concepts Reference Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl text-xs space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              C vs C++ in Robotics
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-blue-300 block mb-0.5">C Language: Procedural</strong>
                <p className="text-[11px] text-slate-400">Direct register manipulation, pointers, efficient for low-level peripheral drivers.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <strong className="text-purple-300 block mb-0.5">C++: Object-Oriented (OOP)</strong>
                <p className="text-[11px] text-slate-400">Classes and objects (e.g. `Servo myservo`), constructor initialization, and code modularity.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
