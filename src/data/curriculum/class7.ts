import { Chapter, GlossaryTerm, Badge } from '../../types/curriculum';

export const class7Chapters: Chapter[] = [
  {
    id: "c7-ch-1",
    classId: "class-7",
    number: 1,
    title: "Introduction to Automation",
    tagline: "Closed-Loop Feedback Systems, SCADA & Industrial Robots",
    color: "#4F46E5",
    iconName: "Sliders",
    lessons: [
      {
        id: "c7-l1-1",
        chapterId: "c7-ch-1",
        order: 1,
        title: "Foundations of Automation & Industry 4.0",
        subtitle: "Minimal human intervention, precision manufacturing, and smart factories",
        summary: "Automation is the creation and application of technology, control systems, and software to perform repetitive or complex tasks with little to no human intervention. From robotic car assembly lines to automated pharmaceutical pill dispensers, automation maximizes speed, precision, quality, and human safety.",
        keyPoints: [
          "Automation replaces dangerous, repetitive, or dirty manual tasks with machines.",
          "Industry 4.0 integrates smart robotics, cloud telemetry, and IoT sensors.",
          "High accuracy: robots achieve sub-millimeter tolerances without fatigue."
        ],
        illustrationType: "c7_automation_intro"
      },
      {
        id: "c7-l1-2",
        chapterId: "c7-ch-1",
        order: 2,
        title: "Open-Loop vs. Closed-Loop Systems",
        subtitle: "Blind open-loop timers versus dynamic feedback error correction",
        summary: "An Open-Loop control system executes instructions blindly based on input time without measuring output (e.g. an electric toaster or basic washing machine timer). A Closed-Loop control system constantly measures its output with sensors, compares it to the target setpoint, and adjusts control effort to eliminate the error (e.g. a home air conditioner thermostat, car cruise control, or robotic arm servo encoder).",
        keyPoints: [
          "Open-Loop: Input $\rightarrow$ Controller $\rightarrow$ Actuator $\rightarrow$ Output (No feedback).",
          "Closed-Loop: Feedback sensor calculates Error = Setpoint - Actual Value.",
          "Closed-loop systems self-correct against disturbances like wind or friction."
        ],
        illustrationType: "c7_feedback_loops"
      },
      {
        id: "c7-l1-3",
        chapterId: "c7-ch-1",
        order: 3,
        title: "Industrial Automation Hierarchy",
        subtitle: "Field devices, PLCs, SCADA supervisory control, and MES",
        summary: "Industrial plants organize automation into hierarchical levels: Level 0 (Field sensors & actuators), Level 1 (Direct Control: PLCs and microcontrollers), Level 2 (Supervisory Control & Data Acquisition - SCADA monitors entire factory floors on computer displays), and Level 3/4 (Manufacturing Execution Systems and cloud enterprise planning).",
        keyPoints: [
          "PLC (Programmable Logic Controller): Rugged industrial computers built to withstand heat, dust, and electrical noise.",
          "SCADA: Software system displaying real-time graphical plant schematics and alarms.",
          "Redundant safety interlocks automatically shut down lines if a human breaches light curtains."
        ],
        illustrationType: "c7_industrial_hierarchy"
      },
      {
        id: "c7-l1-4",
        chapterId: "c7-ch-1",
        order: 4,
        title: "Sensors & Actuators in Automated Factories",
        subtitle: "Inductive proximity switches, pneumatic cylinders, and optical sorters",
        summary: "Modern factory lines utilize inductive proximity sensors (detecting metal parts on conveyors), optical color sensors (sorting products), and pneumatic cylinders (high-speed air-powered pistons that reject defective packages). These devices feed signals to controllers in milliseconds.",
        keyPoints: [
          "Inductive Sensors: Detect metallic objects via electromagnetic eddy currents.",
          "Pneumatic Actuators: Use compressed air for rapid push-pull stamping and sorting.",
          "Conveyor inspection cameras reject mislabeled bottles at up to 1,000 items per minute."
        ],
        illustrationType: "c7_factory_sensors"
      }
    ],
    activities: [
      {
        id: "c7-act-1",
        chapterId: "c7-ch-1",
        title: "Interactive Closed-Loop Thermostat & Error Correction Lab",
        type: "c7_activity_feedback_control",
        description: "Set a desired room temperature setpoint, introduce sudden cold outdoor wind disturbances, and observe the closed-loop feedback controller adjust heater output to eliminate the error.",
        instructions: [
          "Set the target Temperature Setpoint (e.g. 24.0°C).",
          "Click 'Open Cold Window' to inject an environmental disturbance dropping temperature to 18.0°C.",
          "Observe the sensor calculate Error = Setpoint - Process Variable.",
          "Watch the closed-loop controller ramp up heater power until the temperature converges exactly at 24.0°C!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c7-mod-1",
        chapterId: "c7-ch-1",
        title: "Automated Factory Conveyor & Optical Sorter Rig",
        subtitle: "Miniature automated conveyor belt with optical defect rejection arm",
        description: "Construct a working tabletop conveyor belt model driven by a DC gearmotor, featuring an optical sensor gateway and high-speed servo flipper to divert defective blocks into a bin.",
        parts: [
          { name: "Laser-cut Conveyor Frame and Rollers", count: 1 },
          { name: "Rubberized High-Traction Conveyor Belt", count: 1 },
          { name: "12V Geared DC Drive Motor", count: 1 },
          { name: "Infrared Optical Inspection Gateway", count: 1 },
          { name: "High-Speed SG90 Servo Diverter Arm", count: 1 },
          { name: "Arduino Uno Controller with Relay Shield", count: 1 },
          { name: "12V Power Adapter", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Assemble the conveyor roller axles and tension the rubberized belt." },
          { stepNumber: 2, instruction: "Couple the 12V drive motor to the drive roller and connect via relay." },
          { stepNumber: 3, instruction: "Mount the optical IR sensor arch halfway down the belt." },
          { stepNumber: 4, instruction: "Position the servo diverter gate directly past the inspection point." },
          { stepNumber: 5, instruction: "Program Arduino: when a dark or defective block passes the sensor, trigger the servo arm to sweep it into the reject chute!" },
          { stepNumber: 6, instruction: "Run continuous test blocks: verify 100% automated sorting without human touch!" }
        ],
        xpReward: 140
      }
    ],
    quiz: [
      {
        id: "c7-q1-1",
        chapterId: "c7-ch-1",
        question: "What is the defining characteristic of a Closed-Loop control system?",
        options: ["It continuously measures output with sensors and uses feedback to correct errors", "It has no wires", "It only runs on battery power", "It never changes speed"],
        correctAnswer: 0,
        explanation: "Closed-loop systems monitor process variables and feed data back to eliminate errors between actual and desired output."
      },
      {
        id: "c7-q1-2",
        chapterId: "c7-ch-1",
        question: "Which of the following is an example of an Open-Loop control system?",
        options: ["A simple bread toaster timer", "A car cruise control maintaining 60 km/h uphill", "A home air conditioner thermostat", "A self-balancing Segway"],
        correctAnswer: 0,
        explanation: "A simple toaster runs for a set time regardless of whether the bread is raw, toasted, or burnt because it lacks feedback."
      },
      {
        id: "c7-q1-3",
        chapterId: "c7-ch-1",
        question: "What does SCADA stand for in industrial plant automation?",
        options: ["Supervisory Control and Data Acquisition", "Single Circuit and Digital Assembly", "System Computer and Direct Actuator", "Solar Current and Direct Ampere"],
        correctAnswer: 0,
        explanation: "SCADA systems allow operators to monitor and supervise large industrial infrastructure from centralized screens."
      },
      {
        id: "c7-q1-4",
        chapterId: "c7-ch-1",
        question: "What type of sensor uses electromagnetic fields to detect metal parts on an automated assembly line?",
        options: ["Inductive Proximity Sensor", "Microphone Sensor", "Mercury Switch", "Humidity Sensor"],
        correctAnswer: 0,
        explanation: "Inductive sensors produce high-frequency magnetic fields that detect ferrous and non-ferrous metals without physical contact."
      },
      {
        id: "c7-q1-5",
        chapterId: "c7-ch-1",
        question: "In feedback control mathematics, how is the 'Error' calculated?",
        options: ["Error = Setpoint - Actual Process Variable", "Error = Setpoint × 100", "Error = Battery Voltage / 2", "Error = Room Temperature + 10"],
        correctAnswer: 0,
        explanation: "Error represents the discrepancy between where you want the system to be (Setpoint) and where it currently is (Process Variable)."
      }
    ],
    writtenQuestions: [
      {
        id: "c7-wq1-1",
        chapterId: "c7-ch-1",
        question: "Explain why car cruise control must be a closed-loop system rather than an open-loop throttle lock.",
        sampleAnswer: "An open-loop throttle lock holds the gas pedal at a fixed angle, causing the car to slow down on uphill climbs and dangerously accelerate down hills. A closed-loop cruise control continuously reads speedometer sensors and modulates fuel flow to maintain the exact setpoint speed against gravity and wind."
      },
      {
        id: "c7-wq1-2",
        chapterId: "c7-ch-1",
        question: "Name three safety features designed into modern industrial robotic automation cells.",
        sampleAnswer: "1. Optical infrared light curtains that instantly emergency-stop the robot if a human hand crosses the beam. 2. Red emergency stop (E-stop) pushbuttons placed along conveyor access points. 3. Force and torque limiters in joint motors that halt motion upon accidental physical resistance."
      }
    ],
    funFacts: [
      { id: "c7-ff-1", text: "The earliest known closed-loop feedback device was invented by Ktesibios of Alexandria around 270 BC: a water clock that used a floating valve to maintain constant water level!" },
      { id: "c7-ff-2", text: "In modern semiconductor fabrication 'Giga-factories', automated robots transport multi-million dollar silicon wafers in airtight pods without a single human inside the cleanroom." }
    ]
  },
  {
    id: "c7-ch-2",
    classId: "class-7",
    number: 2,
    title: "Arduino",
    tagline: "C/C++ Sketches, Servo Position Control & PWM Fading",
    color: "#0284C7",
    iconName: "Cpu",
    lessons: [
      {
        id: "c7-l2-1",
        chapterId: "c7-ch-2",
        order: 1,
        title: "Arduino IDE & Sketch Architecture",
        subtitle: "Compilation process, void setup() and void loop() lifecycle",
        summary: "Arduino programs are called 'sketches' written in C/C++. Every sketch requires two fundamental functions: `void setup()`, which executes exactly once when the microcontroller powers up or is reset (used for pin configurations and serial baud setup), and `void loop()`, which repeats endlessly as long as power remains connected.",
        keyPoints: [
          "`void setup()`: Initializes hardware pins (`pinMode(13, OUTPUT)`) and starts `Serial.begin(9600)`.",
          "`void loop()`: Contains the active program logic that runs continuously in real time.",
          "Compilation converts human-readable C++ code into machine hex code flashed into ROM."
        ],
        illustrationType: "c7_arduino_sketch"
      },
      {
        id: "c7-l2-2",
        chapterId: "c7-ch-2",
        order: 2,
        title: "Digital vs. Analog I/O & Functions",
        subtitle: "pinMode(), digitalWrite(), digitalRead(), and analogRead() in practice",
        summary: "Arduino provides built-in API functions to interact with physical pins: `pinMode(pin, mode)` sets a pin to `INPUT`, `OUTPUT`, or `INPUT_PULLUP`. `digitalWrite(pin, HIGH/LOW)` switches 5V on or off. `digitalRead(pin)` checks if 0V or 5V is present. `analogRead(pin)` reads analog pins A0–A5, returning an integer from 0 to 1023.",
        keyPoints: [
          "`INPUT_PULLUP` enables an internal 20kΩ pull-up resistor, simplifying pushbutton wiring.",
          "`analogRead()` takes ~100 microseconds to sample voltage via the internal 10-bit ADC.",
          "Digital inputs should never be left 'floating' (unconnected wires pick up static radio noise)."
        ],
        illustrationType: "c7_arduino_io"
      },
      {
        id: "c7-l2-3",
        chapterId: "c7-ch-2",
        order: 3,
        title: "PWM Signal Generation & analogWrite()",
        subtitle: "8-bit resolution 0–255 duty cycle modulation on timer pins",
        summary: "The `analogWrite(pin, value)` function outputs a hardware Pulse Width Modulation wave on pins 3, 5, 6, 9, 10, and 11. It accepts an 8-bit integer from 0 (always 0V) to 255 (always 5V). A value of 127 yields a 50% duty cycle, outputting an effective average voltage of 2.5V to dim LEDs or regulate DC motor speed.",
        keyPoints: [
          "Value 0 = 0% duty cycle (OFF); Value 255 = 100% duty cycle (Full Power).",
          "PWM frequency on pins 5 and 6 is ~980 Hz; on pins 3, 9, 10, 11 it is ~490 Hz.",
          "Ohm's Law: Average current scales linearly with PWM duty percentage."
        ],
        illustrationType: "c7_pwm_generation"
      },
      {
        id: "c7-l2-4",
        chapterId: "c7-ch-2",
        order: 4,
        title: "Servo Motor Control with <Servo.h>",
        subtitle: "Precise shaft angle positioning from 0° to 180° using PWM pulse widths",
        summary: "Unlike DC motors that spin continuously, a servo motor (like the SG90) rotates its output shaft to an exact angular position between 0° and 180°. It contains an internal DC motor, reduction gearbox, potentiometer feedback sensor, and control circuit. An electrical pulse is sent every 20ms: a 1.0ms pulse commands 0°, 1.5ms commands 90° (center), and 2.0ms commands 180°.",
        keyPoints: [
          "3 wire connections: Brown/Black = GND, Red = +5V VCC, Orange/Yellow = PWM Signal.",
          "The `<Servo.h>` library simplifies control: `myservo.attach(pin)` and `myservo.write(angle)`.",
          "Internal closed-loop potentiometer guarantees the shaft holds its exact target angle under load."
        ],
        illustrationType: "c7_servo_control"
      }
    ],
    activities: [
      {
        id: "c7-act-2",
        chapterId: "c7-ch-2",
        title: "Interactive SG90 Servo PWM Angle & Sweep Simulator",
        type: "c7_activity_servo_pwm",
        description: "Control an interactive SG90 micro-servo horn by sliding an angular dial from 0° to 180°, observing the 1.0ms–2.0ms pulse train on an oscilloscope in real time.",
        instructions: [
          "Drag the servo angle slider to 0°: verify the 1.0ms pulse duration.",
          "Drag the slider to 90°: observe the neutral 1.5ms pulse train.",
          "Drag the slider to 180°: observe the 2.0ms pulse duration.",
          "Toggle the 'Automated Sweep' mode to watch the virtual C++ `for (int pos=0; pos<=180; pos++)` loop in action!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c7-mod-2",
        chapterId: "c7-ch-2",
        title: "Smart Ultrasonic Toll Barrier Gate",
        subtitle: "Automated highway toll plaza barrier operated by servo motor and distance radar",
        description: "Construct an automated vehicle parking barrier gate that detects approaching model cars with an ultrasonic sensor, raises a servo-controlled boom arm 90 degrees, and lowers it safely after passage.",
        parts: [
          { name: "Arduino Uno R3 with Prototyping Shield", count: 1 },
          { name: "SG90 9g Micro Servo Motor", count: 1 },
          { name: "HC-SR04 Ultrasonic Distance Sensor", count: 1 },
          { name: "Red and Green 5mm Indicator LEDs", count: 2 },
          { name: "220Ω Resistors", count: 2 },
          { name: "Striped Boom Barrier Arm (120mm Lightweight Balsa)", count: 1 },
          { name: "Laser-cut Toll Booth Housing Stand", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount the SG90 servo motor horizontally on the toll booth support pillar." },
          { stepNumber: 2, instruction: "Attach the red-and-white striped barrier arm to the servo horn at 0° (horizontal CLOSED)." },
          { stepNumber: 3, instruction: "Mount the HC-SR04 sensor at road level aimed at incoming traffic." },
          { stepNumber: 4, instruction: "Wire Red LED to pin 5, Green LED to pin 6, Servo to pin 9, Trigger to 7, Echo to 8." },
          { stepNumber: 5, instruction: "Program: when distance < 15cm, Red LED off, Green LED on, servo sweeps to 90° (OPEN)." },
          { stepNumber: 6, instruction: "Wait 4 seconds for car to pass, then rotate servo back to 0° with Red LED illuminated!" }
        ],
        xpReward: 140
      }
    ],
    quiz: [
      {
        id: "c7-q2-1",
        chapterId: "c7-ch-2",
        question: "How many times does the `void setup()` function execute in an Arduino program?",
        options: ["Exactly once when the board powers on or resets", "Endlessly in a continuous loop", "Once every minute", "Ten times"],
        correctAnswer: 0,
        explanation: "`setup()` is called only once upon boot-up to initialize pin configurations and communication interfaces."
      },
      {
        id: "c7-q2-2",
        chapterId: "c7-ch-2",
        question: "What pulse width sent to an SG90 servo motor commands it to the center 90-degree position?",
        options: ["1.5 milliseconds", "0.5 milliseconds", "2.0 milliseconds", "10 seconds"],
        correctAnswer: 0,
        explanation: "Standard RC servos use a 1.5ms pulse width at 50 Hz (every 20ms) to indicate neutral center (90°)."
      },
      {
        id: "c7-q2-3",
        chapterId: "c7-ch-2",
        question: "What range of values does the `analogWrite(pin, value)` function accept on an Arduino Uno?",
        options: ["0 to 255 (8-bit integer)", "0 to 1023", "0 to 100", "True or False only"],
        correctAnswer: 0,
        explanation: "`analogWrite()` uses an 8-bit timer register allowing 256 duty cycle values from 0 (0%) to 255 (100%)."
      },
      {
        id: "c7-q2-4",
        chapterId: "c7-ch-2",
        question: "What library must be included at the top of an Arduino sketch to command servo motors easily?",
        options: ["#include <Servo.h>", "#include <Motor.h>", "#include <Math.h>", "#include <WiFi.h>"],
        correctAnswer: 0,
        explanation: "The official `<Servo.h>` library manages hardware timers to generate precise 1ms–2ms pulses automatically."
      },
      {
        id: "c7-q2-5",
        chapterId: "c7-ch-2",
        question: "What is the three-wire color code standard on an SG90 servo motor cable?",
        options: ["Brown (GND), Red (+5V), Orange (PWM Signal)", "Blue, Green, Yellow", "Black, White, Gray", "Red, Red, Red"],
        correctAnswer: 0,
        explanation: "Dark brown or black is Ground, red is +5V power, and orange or yellow is the PWM control signal."
      }
    ],
    writtenQuestions: [
      {
        id: "c7-wq2-1",
        chapterId: "c7-ch-2",
        question: "Explain why `analogRead()` returns 0–1023 while `analogWrite()` takes 0–255 on an Arduino Uno.",
        sampleAnswer: "The Arduino's built-in Analog-to-Digital Converter (ADC) has 10 bits of resolution, giving 2^10 = 1024 discrete steps (0–1023). However, the internal PWM timer counter registers are 8-bit, giving 2^8 = 256 discrete duty cycle steps (0–255)."
      },
      {
        id: "c7-wq2-2",
        chapterId: "c7-ch-2",
        question: "Describe what happens inside a servo motor when an external force attempts to physically twist its output horn away from its commanded angle.",
        sampleAnswer: "The internal feedback potentiometer detects that the actual horn position no longer matches the commanded pulse setpoint. The internal control amplifier immediately powers the internal DC motor in the opposing direction with full torque to restore and lock the horn back at its commanded angle."
      }
    ],
    funFacts: [
      { id: "c7-ff-3", text: "The name 'Arduino' comes from a bar in Ivrea, Italy, where the founders used to meet; the bar itself was named after King Arduin of Italy (1002 AD)!" },
      { id: "c7-ff-4", text: "Industrial robotic arms manufactured by KUKA or Fanuc are essentially giant high-power servo motors capable of holding a 1,000 kg car chassis within 0.05 mm accuracy." }
    ]
  },
  {
    id: "c7-ch-3",
    classId: "class-7",
    number: 3,
    title: "Gesture Control",
    tagline: "IMU MPU6050, 6-DOF Accelerometer, Gyroscope & Glove Teleoperation",
    color: "#7C3AED",
    iconName: "Hand",
    lessons: [
      {
        id: "c7-l3-1",
        chapterId: "c7-ch-3",
        order: 1,
        title: "Human-Machine Interfaces (HMI)",
        subtitle: "Controlling machines through intuitive natural human body movements",
        summary: "Traditional robotics relied on pushbuttons and joysticks. Modern Human-Machine Interfaces (HMIs) utilize wearable motion sensors so that natural body movements (such as tilting a hand, nodding the head, or waving fingers) directly command robots, prosthetic limbs, and virtual reality avatars.",
        keyPoints: [
          "Wearable sensors translate human biomechanics into digital coordinate vectors.",
          "Reduces operator reaction time and training curve in complex 3D environments.",
          "Used in surgical teleoperation, drone piloting, and powered exoskeletons."
        ],
        illustrationType: "c7_hmi_gesture"
      },
      {
        id: "c7-l3-2",
        chapterId: "c7-ch-3",
        order: 2,
        title: "MPU6050 6-DOF Inertial Measurement Unit",
        subtitle: "Micro-Electro-Mechanical Systems (MEMS) accelerometer and gyroscope",
        summary: "The MPU6050 is a 6-Degree-of-Freedom (6-DOF) sensor containing a 3-axis accelerometer and a 3-axis gyroscope on a single silicon chip. Fabricated with microscopic MEMS springs and proof masses, it measures both dynamic linear acceleration and continuous angular rotational velocity.",
        keyPoints: [
          "3-Axis Accelerometer: Measures acceleration along X, Y, Z axes (including Earth's 1g gravity).",
          "3-Axis Gyroscope: Measures rotational angular velocity around X, Y, Z axes in degrees per second (°/s).",
          "Digital Motion Processor (DMP): Fuses accel and gyro data on-chip to eliminate drift."
        ],
        illustrationType: "c7_mpu6050_mems"
      },
      {
        id: "c7-l3-3",
        chapterId: "c7-ch-3",
        order: 3,
        title: "Rotational Physics: Pitch, Roll, and Yaw",
        subtitle: "Understanding 3-dimensional spatial orientation",
        summary: "Spatial rotation is described using nautical and aeronautical axes: **Pitch** is rotation around the transverse axis (tilting hand forward or backward). **Roll** is rotation around the longitudinal axis (tilting hand left or right). **Yaw** is rotation around the vertical vertical axis (twisting hand like a compass).",
        keyPoints: [
          "Pitch (X-axis tilt): Tilt Forward $\rightarrow$ Robot drives Forward; Tilt Backward $\rightarrow$ Robot Reverses.",
          "Roll (Y-axis tilt): Tilt Left $\rightarrow$ Robot steers Left; Tilt Right $\rightarrow$ Robot steers Right.",
          "Flat Palm: Accelerometer reads 1g on Z-axis and 0g on X/Y $\rightarrow$ Robot stops."
        ],
        illustrationType: "c7_pitch_roll_yaw"
      },
      {
        id: "c7-l3-4",
        chapterId: "c7-ch-3",
        order: 4,
        title: "I2C Communication Protocol",
        subtitle: "Inter-Integrated Circuit bus using two wires: SDA and SCL",
        summary: "The MPU6050 communicates with Arduino over the I2C (Inter-Integrated Circuit) bus, which requires only two wires: SDA (Serial Data) and SCL (Serial Clock). Every I2C device has a unique 7-bit address (MPU6050 default is 0x68). Up to 127 different sensors can share the exact same two wires.",
        keyPoints: [
          "SDA (A4 on Uno): Carries bidirectional data packets.",
          "SCL (A5 on Uno): Synchronous clock line generated by the Arduino master.",
          "Requires pull-up resistors (typically 4.7kΩ) to hold lines high when idle."
        ],
        illustrationType: "c7_i2c_bus"
      }
    ],
    activities: [
      {
        id: "c7-act-3",
        chapterId: "c7-ch-3",
        title: "3D Interactive Hand Glove & MPU6050 Orientation Visualizer",
        type: "c7_activity_gesture_glove",
        description: "Tilt a 3D wearable sensor glove in virtual space: observe Pitch and Roll angles update in real-time, view raw accelerometer values (Ax, Ay, Az), and watch the robot vehicle respond to your hand gestures.",
        instructions: [
          "Tilt the virtual glove forward (+30° Pitch): Observe command 'FORWARD'.",
          "Tilt the glove backward (-30° Pitch): Observe command 'REVERSE'.",
          "Bank the glove left and right (+40° / -40° Roll): Watch steering vectors engage.",
          "Adjust the deadzone threshold slider to eliminate accidental hand jitter!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c7-mod-3",
        chapterId: "c7-ch-3",
        title: "Gesture-Controlled Hand Glove Transmitter",
        subtitle: "Wearable teleoperation glove communicating wirelessly with an agile mobile rover",
        description: "Assemble a wearable fabric glove fitted with an MPU6050 motion sensor, Arduino Nano, and NRF24L01 / Bluetooth wireless transceiver that mirrors your hand gestures to drive a remote vehicle.",
        parts: [
          { name: "Mechanics Work Glove (Right Hand)", count: 1 },
          { name: "MPU6050 6-DOF IMU Accelerometer Module", count: 1 },
          { name: "Arduino Nano Microcontroller", count: 1 },
          { name: "NRF24L01+ 2.4GHz Wireless Radio Module", count: 1 },
          { name: "9V Battery with Compact Elastic Strap", count: 1 },
          { name: "Mini Toggle Power Switch", count: 1 },
          { name: "Silicone Flexible Hookup Wires", count: 8 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount the MPU6050 sensor firmly to the back of the glove palm with X-axis pointing toward fingers." },
          { stepNumber: 2, instruction: "Secure the Arduino Nano and wireless radio module onto the forearm wrist cuff." },
          { stepNumber: 3, instruction: "Wire MPU6050 VCC to 3.3V/5V, GND to GND, SDA to Nano A4, and SCL to Nano A5." },
          { stepNumber: 4, instruction: "Connect the NRF24L01 radio module via SPI bus pins (D11, D12, D13, D9, D10)." },
          { stepNumber: 5, instruction: "Calibrate flat zero offsets in Arduino firmware so rest position outputs zero velocity." },
          { stepNumber: 6, instruction: "Slip on the glove, tilt your hand forward, and watch your robot sprint forward across the room!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c7-q3-1",
        chapterId: "c7-ch-3",
        question: "What does an accelerometer measure that allows it to detect hand tilt angle at rest?",
        options: ["The constant 1g acceleration of Earth's gravity vector", "Atmospheric air pressure", "Sound vibrations from the hand", "Radio signals from cell towers"],
        correctAnswer: 0,
        explanation: "Earth's gravitational acceleration (9.8 m/s² downwards) acts on internal MEMS proof masses, revealing exact tilt angles relative to ground."
      },
      {
        id: "c7-q3-2",
        chapterId: "c7-ch-3",
        question: "How many wires are required for the I2C communication bus between an Arduino and MPU6050?",
        options: ["Two wires: SDA (Data) and SCL (Clock)", "Eight parallel data wires", "One single wire", "Fifty wires"],
        correctAnswer: 0,
        explanation: "I2C is a two-wire serial protocol: SDA carries data while SCL provides clock synchronization."
      },
      {
        id: "c7-q3-3",
        chapterId: "c7-ch-3",
        question: "Tilting a wearable glove forward (nose down) represents rotation about which axis?",
        options: ["Pitch axis", "Roll axis", "Yaw axis", "Z-axis"],
        correctAnswer: 0,
        explanation: "Pitch refers to tilting forward or backward around the transverse horizontal axis."
      },
      {
        id: "c7-q3-4",
        chapterId: "c7-ch-3",
        question: "What does 'MEMS' stand for in modern electronic sensor fabrication?",
        options: ["Micro-Electro-Mechanical Systems", "Mega Electric Motor Switch", "Mobile Electronic Memory System", "Multiple Engine Motor Shield"],
        correctAnswer: 0,
        explanation: "MEMS technology integrates microscopic mechanical levers, springs, and electronic circuits on microscopic silicon chips."
      },
      {
        id: "c7-q3-5",
        chapterId: "c7-ch-3",
        question: "What is the standard I2C address for the MPU6050 sensor when its AD0 pin is connected to Ground?",
        options: ["0x68", "0xFF", "0x00", "0x12"],
        correctAnswer: 0,
        explanation: "0x68 is the default hexadecimal 7-bit I2C address for the MPU6050 (shifting to 0x69 if AD0 is pulled to 3.3V)."
      }
    ],
    writtenQuestions: [
      {
        id: "c7-wq3-1",
        chapterId: "c7-ch-3",
        question: "Explain the complementary roles of an accelerometer and a gyroscope in calculating accurate orientation angles.",
        sampleAnswer: "An accelerometer provides absolute tilt reference relative to gravity, but is noisy and vulnerable to sudden physical jerks. A gyroscope measures rapid rotational velocity smoothly, but suffers from continuous drift over time. A complementary filter fuses both: trusting the gyroscope for short-term fast movements and the accelerometer for long-term drift correction."
      },
      {
        id: "c7-wq3-2",
        chapterId: "c7-ch-3",
        question: "Why is a 'deadzone threshold' programmed into gesture-controlled robotic gloves?",
        sampleAnswer: "Human hands naturally have slight subconscious tremors and rarely stay at an exact 0.00° angle. A deadzone (e.g. ignoring all tilts between -10° and +10°) ensures the robot stays completely stationary when the user's hand is approximately flat, preventing frustrating jerky movements."
      }
    ],
    funFacts: [
      { id: "c7-ff-5", text: "Every modern smartphone contains a tiny MEMS accelerometer that automatically rotates your screen between portrait and landscape modes!" },
      { id: "c7-ff-6", text: "Nintendo's famous Wii Remote (2006) introduced mainstream gaming to MEMS accelerometers, selling over 100 million consoles worldwide." }
    ]
  },
  {
    id: "c7-ch-4",
    classId: "class-7",
    number: 4,
    title: "Obstacles Avoiding Robot",
    tagline: "Ultrasonic Radar Turret, Pan-Tilt Scanning & Collision Algorithms",
    color: "#D97706",
    iconName: "ShieldAlert",
    lessons: [
      {
        id: "c7-l4-1",
        chapterId: "c7-ch-4",
        order: 1,
        title: "Autonomous Collision Avoidance Systems",
        subtitle: "How self-driving cars and rovers explore unknown environments without human intervention",
        summary: "Autonomous obstacle avoidance is the core capability that allows robots to navigate unfamiliar, clutter-filled rooms without crashing. While basic bump switches require physical collision to react, optical and acoustic sensors allow proactive non-contact path planning from a distance.",
        keyPoints: [
          "Replaces reactive bumper collisions with proactive advance distance scanning.",
          "Self-driving cars combine radar, LiDAR, and ultrasonic sensors to achieve 360° situational awareness.",
          "Enables warehouse rovers to navigate dynamically changing pedestrian pathways."
        ],
        illustrationType: "c7_obstacle_intro"
      },
      {
        id: "c7-l4-2",
        chapterId: "c7-ch-4",
        order: 2,
        title: "The Servo-Mounted Ultrasonic Radar Turret",
        subtitle: "Using an SG90 servo horn to sweep the HC-SR04 across 180 degrees",
        summary: "A fixed ultrasonic sensor only sees a narrow cone straight ahead. By mounting the HC-SR04 onto an SG90 servo motor turret, the robot can actively scan its surroundings like an airport radar: looking Left (150°), Center (90°), and Right (30°) before deciding which path offers the widest clearance.",
        keyPoints: [
          "Triples the robot's field of vision without needing multiple expensive sensors.",
          "Standard scanning positions: 90° (Straight Ahead), 150° (Front-Left), 30° (Front-Right).",
          "A brief delay (250ms) between servo steps allows vibrations to settle for stable ultrasonic readings."
        ],
        illustrationType: "c7_radar_turret"
      },
      {
        id: "c7-l4-3",
        chapterId: "c7-ch-4",
        order: 3,
        title: "The Multi-Directional Decision Algorithm",
        subtitle: "Step-by-step logic tree for intelligent maze navigation",
        summary: "The navigation logic follows a robust flowchart: 1. Drive forward while distance > 25cm. 2. If distance <= 25cm: STOP motors immediately. 3. Rotate servo left (150°) and measure Distance_Left. 4. Rotate servo right (30°) and measure Distance_Right. 5. Return servo to center (90°). 6. If Distance_Left > Distance_Right: turn Left; otherwise turn Right. 7. If both sides are blocked (<15cm), reverse for 1 second and spin 180°.",
        keyPoints: [
          "Proactive braking threshold: typically set at 20cm–25cm.",
          "Comparative path selection: chooses the side offering the greatest open clearance.",
          "Dead-end escape routine: reversing followed by a U-turn frees the robot from tight corners."
        ],
        illustrationType: "c7_decision_tree"
      },
      {
        id: "c7-l4-4",
        chapterId: "c7-ch-4",
        order: 4,
        title: "Speed Regulation & Turning Dynamics",
        subtitle: "Using PWM to slow down before obstacles and execute controlled pivots",
        summary: "Approaching walls at full speed can cause wheels to skid when braking. By using PWM speed control, the robot cruises at high speed (PWM 220) in open spaces, slows down smoothly (PWM 140) as obstacles approach, and executes measured 90-degree pivot turns using timed delays or wheel encoders.",
        keyPoints: [
          "Dynamic deceleration prevents inertia-based collisions.",
          "Pivot turns: Left wheel reverses while Right wheel drives forward.",
          "Wheel traction affects turn angles; calibrate turn timing for your floor surface."
        ],
        illustrationType: "c7_turning_dynamics"
      }
    ],
    activities: [
      {
        id: "c7-act-4",
        chapterId: "c7-ch-4",
        title: "Interactive Ultrasonic Radar Turret & Maze Navigator",
        type: "c7_activity_radar_maze",
        description: "Watch a live sweeping radar screen display distance echoes from 0° to 180°, and test how the decision algorithm navigates through an intricate maze without touching walls.",
        instructions: [
          "Inspect the sweeping green radar beam plotting obstacle coordinates in real time.",
          "Place a virtual wall directly ahead at 20cm.",
          "Observe the servo pause, pan left (reads 45cm) and pan right (reads 12cm).",
          "Verify the decision tree commands an immediate LEFT turn toward the open corridor!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c7-mod-4",
        chapterId: "c7-ch-4",
        title: "Autonomous Ultrasonic Radar Obstacle-Avoiding Bot",
        subtitle: "Smart 2WD ground vehicle featuring a front servo-sweeping ultrasonic radar scanner",
        description: "Assemble an autonomous 2WD mobile robot featuring an SG90 servo-mounted HC-SR04 ultrasonic radar turret, L298N motor driver, Arduino Uno brain, and intelligent collision-avoidance firmware.",
        parts: [
          { name: "2WD Robot Chassis with Yellow Gearmotors", count: 1 },
          { name: "Rubber Wheels and Front Ball Caster", count: 3 },
          { name: "Arduino Uno R3 with Sensor Shield", count: 1 },
          { name: "HC-SR04 Ultrasonic Sensor Module", count: 1 },
          { name: "SG90 Micro Servo Motor", count: 1 },
          { name: "3D Printed Pan-Tilt Ultrasonic Sensor Bracket", count: 1 },
          { name: "L298N Dual H-Bridge Motor Driver Module", count: 1 },
          { name: "7.4V Rechargeable Li-Ion Battery Pack", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount motors, wheels, and front caster onto the lower chassis plate." },
          { stepNumber: 2, instruction: "Fasten the SG90 servo motor facing forward at the very front nose of the top chassis plate." },
          { stepNumber: 3, instruction: "Snap the HC-SR04 ultrasonic sensor into the bracket and press-fit onto the servo output horn." },
          { stepNumber: 4, instruction: "Connect motor driver to Arduino PWM pins and battery power." },
          { stepNumber: 5, instruction: "Wire ultrasonic Trigger to pin 11, Echo to pin 12, and Servo signal to pin 10." },
          { stepNumber: 6, instruction: "Upload the radar avoidance sketch, release the robot on the floor, and watch it navigate complex obstacle courses autonomously!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c7-q4-1",
        chapterId: "c7-ch-4",
        question: "Why is mounting the ultrasonic sensor on a servo motor superior to a fixed sensor?",
        options: ["It allows the robot to actively scan left and right to pick the clearest path before turning", "It makes the robot jump", "It turns the robot into an airplane", "It increases battery voltage"],
        correctAnswer: 0,
        explanation: "A sweeping turret enables 180° multi-directional situational awareness without turning the entire vehicle chassis."
      },
      {
        id: "c7-q4-2",
        chapterId: "c7-ch-4",
        question: "If an obstacle is detected 18cm ahead, and scanning reveals Left = 45cm and Right = 12cm, what should the robot do?",
        options: ["Turn LEFT toward the open 45cm clearance", "Turn RIGHT into the 12cm obstacle", "Speed forward into the wall", "Shut down forever"],
        correctAnswer: 0,
        explanation: "Intelligent navigation chooses the direction offering maximum obstacle clearance."
      },
      {
        id: "c7-q4-3",
        chapterId: "c7-ch-4",
        question: "What emergency routine should execute if both left and right scans reveal obstacles closer than 15cm?",
        options: ["Reverse backward for 1 second, then execute a 180-degree spin turn", "Honk the horn and accelerate forward", "Detach the wheels", "Turn off the battery"],
        correctAnswer: 0,
        explanation: "Reversing out of a dead-end followed by a U-turn frees the robot from tight corners and box canyons."
      },
      {
        id: "c7-q4-4",
        chapterId: "c7-ch-4",
        question: "Why should you add a 200–250ms delay after commanding the servo to a new angle before taking an ultrasonic distance reading?",
        options: ["To let mechanical inertia and vibrations settle so the sound wave is aimed accurately", "Because sound travels slower than light", "To save battery power", "Because Arduino timers reset"],
        correctAnswer: 0,
        explanation: "Rapid servo movement vibrates the transducer; waiting 250ms ensures a steady, distortion-free acoustic echo."
      },
      {
        id: "c7-q4-5",
        chapterId: "c7-ch-4",
        question: "What typical distance threshold is chosen for obstacle detection in tabletop educational robots?",
        options: ["20 cm to 25 cm", "5 meters", "1 millimeter", "50 meters"],
        correctAnswer: 0,
        explanation: "20–25 cm provides sufficient stopping distance for small rovers moving at moderate speed."
      }
    ],
    writtenQuestions: [
      {
        id: "c7-wq4-1",
        chapterId: "c7-ch-4",
        question: "Outline the step-by-step pseudo-code loop for an autonomous obstacle-avoiding robot with a scanning servo radar.",
        sampleAnswer: "1. Look straight (Servo = 90°). Measure distance. 2. IF distance > 25cm: Drive Forward. 3. ELSE: Stop motors. Rotate Servo to 150° (Left); measure Dist_Left. Rotate Servo to 30° (Right); measure Dist_Right. Return Servo to 90°. 4. IF Dist_Left > Dist_Right: Turn Left for 400ms. 5. ELSE IF Dist_Right >= Dist_Left: Turn Right for 400ms. 6. IF both < 15cm: Reverse for 600ms, then Spin 180°."
      },
      {
        id: "c7-wq4-2",
        chapterId: "c7-ch-4",
        question: "What happens if an ultrasonic sensor encounters a soft fabric curtain or angled triangular corner?",
        sampleAnswer: "Soft materials (like foam or thick curtains) absorb sound waves rather than reflecting them, and steep angled surfaces deflect echoes away from the sensor. This can cause false readings of infinite distance, which is why industrial robots combine ultrasonic sensors with infrared or LiDAR."
      }
    ],
    funFacts: [
      { id: "c7-ff-7", text: "Submarines use active SONAR operating on the exact same acoustic echolocation mathematics as ultrasonic robot sensors, but with low-frequency sound waves that travel hundreds of miles through water!" },
      { id: "c7-ff-8", text: "Tesla's humanoid robot 'Optimus' uses multi-camera vision networks combined with neural networks to navigate around factory obstacles in real time." }
    ]
  },
  {
    id: "c7-ch-5",
    classId: "class-7",
    number: 5,
    title: "Aviation",
    tagline: "Aerodynamics, Bernoulli's Principle & The 4 Forces of Flight",
    color: "#059669",
    iconName: "Wind",
    lessons: [
      {
        id: "c7-l5-1",
        chapterId: "c7-ch-5",
        order: 1,
        title: "Introduction to Aviation & Aerodynamics",
        subtitle: "The science of air in motion and heavier-than-air flight",
        summary: "Aviation encompasses the design, development, production, and operation of aircraft. Aerodynamics is the study of how gases interact with moving bodies. From the Wright Brothers' historic 1903 Kitty Hawk flight to modern supersonic stealth fighters and robotic drones, all aircraft obey immutable physical aerodynamic laws.",
        keyPoints: [
          "Air is a fluid possessing mass, density, pressure, and viscosity.",
          "Moving through air creates aerodynamic forces: Lift, Drag, and Sideforce.",
          "The Wright Brothers succeeded by inventing 3-axis aerodynamic flight control."
        ],
        illustrationType: "c7_aviation_intro"
      },
      {
        id: "c7-l5-2",
        chapterId: "c7-ch-5",
        order: 2,
        title: "The Four Fundamental Forces of Flight",
        subtitle: "Lift, Weight, Thrust, and Drag in dynamic equilibrium",
        summary: "Every flying vehicle experiences four simultaneous opposing forces: **Lift** (upward aerodynamic force generated by wings), **Weight** (downward pull of gravity), **Thrust** (forward propulsion produced by engines or propellers), and **Drag** (backward air resistance). In steady, unaccelerated level flight: Lift = Weight and Thrust = Drag.",
        keyPoints: [
          "Lift opposes Weight (Gravity); Thrust opposes Drag (Air Resistance).",
          "If Lift > Weight $\rightarrow$ Airplane climbs.",
          "If Thrust > Drag $\rightarrow$ Airplane accelerates forward.",
          "Angle of Attack (AoA): Angle between wing chord line and incoming oncoming airflow."
        ],
        illustrationType: "c7_four_forces"
      },
      {
        id: "c7-l5-3",
        chapterId: "c7-ch-5",
        order: 3,
        title: "Bernoulli's Principle & Airfoil Lift",
        subtitle: "Wing cross-section geometry, flow velocity, and pressure differentials",
        summary: "An airfoil (wing cross-section) has a curved upper camber and flatter bottom surface. According to Bernoulli's Principle, as air velocity increases, its static pressure decreases. Air traveling over the longer curved top surface moves faster than air underneath. This creates lower pressure above the wing and higher pressure below it, producing net upward Lift.",
        keyPoints: [
          "Bernoulli's Equation: Higher air speed = Lower air pressure.",
          "Camber: The curvature of an airfoil's upper and lower surfaces.",
          "Newton's Third Law also contributes: the wing deflects air downwards (downwash), creating an equal and opposite upward reaction force."
        ],
        illustrationType: "c7_bernoulli_airfoil"
      },
      {
        id: "c7-l5-4",
        chapterId: "c7-ch-5",
        order: 4,
        title: "Aircraft Control Surfaces & 3-Axis Maneuvers",
        subtitle: "Elevators (Pitch), Ailerons (Roll), and Rudder (Yaw)",
        summary: "Pilots and autopilot computers steer aircraft in three dimensions using movable trailing-edge control surfaces: 1. **Elevators** on the horizontal tail control **Pitch** (nose up/down). 2. **Ailerons** on outer wing edges move in opposite directions to control **Roll** (banking left/right). 3. **Rudder** on the vertical tail fin controls **Yaw** (nose left/right).",
        keyPoints: [
          "Pitch (Elevators): Nose up commands climb; nose down commands dive.",
          "Roll (Ailerons): Banking left/right generates horizontal lift component for turns.",
          "Rudder (Yaw): Coordinates turns and counteracts adverse yaw."
        ],
        illustrationType: "c7_flight_controls"
      }
    ],
    activities: [
      {
        id: "c7-act-5",
        chapterId: "c7-ch-5",
        title: "Interactive Airfoil Wind Tunnel & 4-Forces Balance Simulator",
        type: "c7_activity_aerodynamics",
        description: "Control wind speed and wing angle of attack in a virtual wind tunnel, observe Bernoulli pressure stream lines, and balance the four forces of flight to maintain steady altitude.",
        instructions: [
          "Increase throttle to produce 500 N of forward Thrust.",
          "Adjust Angle of Attack (AoA) from 0° to 12°: watch upward Lift exceed Weight.",
          "Observe high speed (blue streamlines) and low pressure over the top camber.",
          "Exceed 18° AoA to observe airflow separation and stall warning!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c7-mod-5",
        chapterId: "c7-ch-5",
        title: "High-Speed Propeller Wind-Thrust Car",
        subtitle: "Rolling chassis powered by an aircraft brushless propeller generating forward aerodynamic thrust",
        description: "Construct a lightweight, aerodynamic rolling racecar powered not by driven wheels, but by a rear-mounted aircraft propeller that generates pure aerodynamic thrust to accelerate across the floor.",
        parts: [
          { name: "Ultra-Lightweight Balsa / Carbon Chassis Plate", count: 1 },
          { name: "Low-Friction Precision Axle Bearings", count: 4 },
          { name: "Narrow Foam Wheels with Spoke Hubs", count: 4 },
          { name: "High-RPM Coreless DC Motor", count: 1 },
          { name: "6-Inch Twin-Blade Aircraft Propeller", count: 1 },
          { name: "Protective Propeller Wire Safety Cage", count: 1 },
          { name: "3.7V Li-Po Battery Pack with Toggle Switch", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount the low-friction axle bearings and press-fit the narrow wheels onto polished steel axles." },
          { stepNumber: 2, instruction: "Secure the high-RPM motor mount vertically onto the rear chassis tower." },
          { stepNumber: 3, instruction: "Press-fit the 6-inch propeller onto the motor shaft, ensuring the curved blade camber faces forward." },
          { stepNumber: 4, instruction: "Install the protective propeller safety shroud around the spinning blade zone." },
          { stepNumber: 5, instruction: "Wire the battery pack through the toggle switch to the motor terminals." },
          { stepNumber: 6, instruction: "Flip the switch: feel the powerful blast of rearward air thrust launch the vehicle forward at blistering speed!" }
        ],
        xpReward: 140
      }
    ],
    quiz: [
      {
        id: "c7-q5-1",
        chapterId: "c7-ch-5",
        question: "What are the four fundamental forces acting on an aircraft in flight?",
        options: ["Lift, Weight (Gravity), Thrust, and Drag", "Speed, Acceleration, Sound, and Light", "Electricity, Magnetism, Friction, and Heat", "Pressure, Volume, Temperature, and Mass"],
        correctAnswer: 0,
        explanation: "Every flying vehicle is balanced between Lift (up), Weight (down), Thrust (forward), and Drag (backward)."
      },
      {
        id: "c7-q5-2",
        chapterId: "c7-ch-5",
        question: "According to Bernoulli's Principle, what happens to the static pressure of a fluid when its speed increases?",
        options: ["Its pressure decreases", "Its pressure increases to infinity", "Its pressure remains constant", "Its temperature drops to absolute zero"],
        correctAnswer: 0,
        explanation: "Bernoulli's principle states that in a moving fluid, regions of higher velocity experience lower static pressure."
      },
      {
        id: "c7-q5-3",
        chapterId: "c7-ch-5",
        question: "Which movable aircraft control surfaces located on the horizontal tail control Pitch (nose up/down)?",
        options: ["Elevators", "Ailerons", "Rudder", "Flaps"],
        correctAnswer: 0,
        explanation: "Elevators on the horizontal tailplane pivot up or down to pitch the aircraft nose upwards or downwards."
      },
      {
        id: "c7-q5-4",
        chapterId: "c7-ch-5",
        question: "What control surfaces mounted on the trailing edges of the wings control banking and Roll?",
        options: ["Ailerons", "Rudder", "Elevators", "Landing gear"],
        correctAnswer: 0,
        explanation: "Ailerons operate differentially (one up, one down) to roll the airplane left or right into a turn."
      },
      {
        id: "c7-q5-5",
        chapterId: "c7-ch-5",
        question: "What dangerous aerodynamic condition occurs when the wing's Angle of Attack becomes too steep, causing airflow to detach from the upper surface?",
        options: ["Aerodynamic Stall", "Supersonic Boom", "Thermal Expansion", "Propeller Reversal"],
        correctAnswer: 0,
        explanation: "Exceeding the critical angle of attack (typically ~15°–18°) separates airflow from the wing top, causing an instant loss of lift."
      }
    ],
    writtenQuestions: [
      {
        id: "c7-wq5-1",
        chapterId: "c7-ch-5",
        question: "Explain how both Bernoulli's Principle and Newton's Third Law work together to produce aerodynamic lift on an airplane wing.",
        sampleAnswer: "Bernoulli's principle explains that air accelerates over the curved upper surface, lowering static pressure and creating an upward suction force. Simultaneously, Newton's third law dictates that the curved wing deflects large masses of air downwards (downwash); the equal and opposite upward reaction pushes the wing up."
      },
      {
        id: "c7-wq5-2",
        chapterId: "c7-ch-5",
        question: "Describe how an airplane performs a coordinated turn to the left using ailerons and rudder together.",
        sampleAnswer: "The pilot deflects the left aileron UP (reducing lift on the left wing) and right aileron DOWN (increasing lift on the right wing), causing the aircraft to roll and bank left. Simultaneously, left rudder is applied to counteract adverse yaw and align the fuselage cleanly with the turn."
      }
    ],
    funFacts: [
      { id: "c7-ff-9", text: "The Lockheed SR-71 Blackbird spy plane flew at Mach 3.3 (over 3,500 km/h) at 85,000 feet, where air friction heated its titanium skin to over 300°C!" },
      { id: "c7-ff-10", text: "Dragonflies can control each of their four wings independently, allowing them to hover, fly backwards, and accelerate at 30G!" }
    ]
  },
  {
    id: "c7-ch-6",
    classId: "class-7",
    number: 6,
    title: "3D Printing",
    tagline: "FDM Technology, Slicing Parameters, Infill & Troubleshooting",
    color: "#EA580C",
    iconName: "Box",
    lessons: [
      {
        id: "c7-l6-1",
        chapterId: "c7-ch-6",
        order: 1,
        title: "Additive vs. Subtractive Manufacturing",
        subtitle: "Layer-by-layer material deposition versus carving from solid stock",
        summary: "Traditional manufacturing is subtractive (like CNC milling or wood carving), where cutting tools carve away excess material, creating heavy waste chips. 3D printing is additive manufacturing: an automated machine deposits plastic or metal only where needed, building objects slice by horizontal slice from bottom to top.",
        keyPoints: [
          "Subtractive: Starts with a large block and cuts material away (high waste).",
          "Additive: Builds complex internal geometries and hollow structures impossible with machining.",
          "Zero tooling cost: print a one-off prototype directly from CAD in hours."
        ],
        illustrationType: "c7_additive_manufacturing"
      },
      {
        id: "c7-l6-2",
        chapterId: "c7-ch-6",
        order: 2,
        title: "Fused Deposition Modeling (FDM) Anatomy",
        subtitle: "Extruder, hotend, brass nozzle, heated bed, and stepper axes",
        summary: "FDM (Fused Deposition Modeling) is the most popular 3D printing technology in schools and industry. A spool of thermoplastic filament (typically 1.75mm diameter) is pushed by an extruder motor into a heated brass nozzle (heated to 190°C–240°C). The molten plastic is extruded in precise 0.4mm beads onto a heated build platform across X, Y, and Z axes.",
        keyPoints: [
          "Extruder Drive: Stepper motor with knurled hobbed gear feeding filament.",
          "Hotend: Thermal barrier, heat block, thermistor temperature sensor, and 0.4mm nozzle.",
          "Heated Bed: Prevents premature cooling and keeps printed base layers flat."
        ],
        illustrationType: "c7_fdm_anatomy"
      },
      {
        id: "c7-l6-3",
        chapterId: "c7-ch-6",
        order: 3,
        title: "Slicing Software Parameters & G-Code",
        subtitle: "Layer height, infill density, print speed, and support structures",
        summary: "3D printers cannot read 3D CAD files directly. A 'Slicer' program (like Cura or PrusaSlicer) cuts the digital model into hundreds of thin 2D horizontal layers (e.g. 0.2mm layer height) and generates G-code instructions. Key slicing settings include Infill Density (e.g. 20% honeycomb vs 100% solid), Print Temperature, and Support structures for overhangs steeper than 45°.",
        keyPoints: [
          "Layer Height: 0.12mm = Ultra Fine detail; 0.28mm = Fast draft print.",
          "Infill: Internal geometric lattice (Grid, Gyroid) saving 80% plastic weight and print time.",
          "Overhang 45° Rule: Surfaces sloping past 45° require temporary disposable support towers."
        ],
        illustrationType: "c7_slicing_parameters"
      },
      {
        id: "c7-l6-4",
        chapterId: "c7-ch-6",
        order: 4,
        title: "3D Printing Materials & Defect Troubleshooting",
        subtitle: "PLA, ABS, PETG filaments and solving warping, stringing, and clogs",
        summary: "Common filaments include PLA (biodegradable corn-starch plastic, prints at 200°C without toxic fumes, ideal for school STEM), ABS (high temperature and impact resistance, requires enclosure), and PETG (waterproof and chemical resistant). Common print defects include Warping (corners lifting due to thermal shrinkage) and Stringing (fine cobwebs caused by inadequate retraction).",
        keyPoints: [
          "PLA: 190°C–210°C, easy to print, non-toxic, rigid.",
          "Warping Fix: Clean bed with alcohol, apply adhesive glue stick, enable Brim adhesion.",
          "Stringing Fix: Increase nozzle retraction distance (e.g. 5mm) and speed (45mm/s)."
        ],
        illustrationType: "c7_filaments_troubleshooting"
      }
    ],
    activities: [
      {
        id: "c7-act-6",
        chapterId: "c7-ch-6",
        title: "Interactive 3D Slicer Preview & Layer-by-Layer Visualizer",
        type: "c7_activity_slicer_preview",
        description: "Import a 3D robot chassis part, adjust layer height (0.12mm vs 0.28mm) and infill percentage (10% to 100%), inspect internal gyroid infill patterns, and simulate G-code layer printing.",
        instructions: [
          "Adjust the Infill slider from 15% to 80%: observe internal honeycomb density change.",
          "Drag the Layer Height slider: note how 0.12mm increases layer count and print time.",
          "Toggle 'Generate Supports' on an overhanging 60-degree bracket.",
          "Scrub the layer animation slider from Layer 1 up to Layer 250 to watch the print emerge!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c7-mod-6",
        chapterId: "c7-ch-6",
        title: "Custom 3D-Printed Modular Robotic Arm Gripper",
        subtitle: "Precision-sliced articulated robotic gripper jaw assembled with M3 hardware and micro servo",
        description: "Slice and 3D-print a high-strength mechanical robotic gripper mechanism featuring interlocking gear teeth, soft TPU grip pads, and an integrated SG90 servo bracket.",
        parts: [
          { name: "3D CAD .STL Files for Left and Right Jaws", count: 2 },
          { name: "Main Gripper Base Frame Plate", count: 1 },
          { name: "Spool of 1.75mm PLA Filament (Any Color)", count: 1 },
          { name: "Desktop FDM 3D Printer", count: 1 },
          { name: "SG90 Micro Servo Motor", count: 1 },
          { name: "M3 × 12mm Hex Socket Screws and Locknuts", count: 4 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Import gripper STL models into the slicing software." },
          { stepNumber: 2, instruction: "Configure parameters: 0.20mm Layer Height, 25% Gyroid Infill, 3 Wall Perimeters, 205°C Nozzle temp." },
          { stepNumber: 3, instruction: "Export G-code to SD card and preheat the 3D printer bed to 60°C." },
          { stepNumber: 4, instruction: "Verify clean first-layer adhesion as the skirt and base perimeters lay down flat." },
          { stepNumber: 5, instruction: "Post-print: remove parts from build plate, inspect dimensional hole fit, and trim any brim." },
          { stepNumber: 6, instruction: "Assemble jaw gears with M3 pivot screws and test motorized servo pinching!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c7-q6-1",
        chapterId: "c7-ch-6",
        question: "Why is 3D printing categorized as 'Additive' manufacturing?",
        options: ["Because it builds three-dimensional objects by depositing material layer-upon-layer", "Because you add numbers together", "Because it uses subtraction", "Because it only uses recycled paper"],
        correctAnswer: 0,
        explanation: "Additive manufacturing adds raw material only where the object exists, in contrast to subtractive machining."
      },
      {
        id: "c7-q6-2",
        chapterId: "c7-ch-6",
        question: "What is the primary role of a 'Slicer' software in 3D printing?",
        options: ["It slices a 3D CAD model into horizontal 2D layers and generates G-code instructions for the printer", "It cuts the plastic roll with scissors", "It paints the model with colors", "It cools down the nozzle"],
        correctAnswer: 0,
        explanation: "Slicers convert mathematical 3D meshes (.STL) into coordinate path instructions (.GCODE) the stepper motors execute."
      },
      {
        id: "c7-q6-3",
        chapterId: "c7-ch-6",
        question: "What internal slicing setting allows a 3D printed part to be strong while saving 80% of plastic weight and time?",
        options: ["Infill density (internal lattice structure)", "Outer paint layer", "Bed temperature", "Nozzle diameter"],
        correctAnswer: 0,
        explanation: "Infill creates an internal hollow geometric lattice (e.g. 20% honeycomb) that provides structural strength without solid plastic."
      },
      {
        id: "c7-q6-4",
        chapterId: "c7-ch-6",
        question: "Which 3D printing material is biodegradable, non-toxic, and most widely used in school STEM classrooms?",
        options: ["PLA (Polylactic Acid)", "Carbon Fiber Resin", "Liquid Mercury", "Lead filament"],
        correctAnswer: 0,
        explanation: "PLA is derived from renewable corn-starch or sugarcane, prints at 190°C–210°C, and emits sweet, non-toxic vapor."
      },
      {
        id: "c7-q6-5",
        chapterId: "c7-ch-6",
        question: "What common 3D printing defect occurs when the corners of a printed part lift up off the bed due to thermal cooling shrinkage?",
        options: ["Warping", "Extrusion", "Slicing", "Tessellation"],
        correctAnswer: 0,
        explanation: "Warping happens when upper layers cool and contract faster than lower layers, pulling the corners off the build plate."
      }
    ],
    writtenQuestions: [
      {
        id: "c7-wq6-1",
        chapterId: "c7-ch-6",
        question: "Explain the '45-Degree Rule' for support structures in Fused Deposition Modeling.",
        sampleAnswer: "Because each printed layer rests on the layer below it, an FDM printer can safely bridge overhang angles up to 45 degrees from the vertical axis. Any surface sloping past 45 degrees without material underneath will droop and print into thin air, requiring disposable temporary support pillars."
      },
      {
        id: "c7-wq6-2",
        chapterId: "c7-ch-6",
        question: "What is 'retraction' in a 3D printer extruder, and what problem does it prevent?",
        sampleAnswer: "Retraction is the quick backward pull of filament by the extruder stepper motor whenever the hotend travels across empty gaps between printed features. It relieves melt-zone pressure, preventing molten plastic from oozing and creating messy 'stringing' cobwebs."
      }
    ],
    funFacts: [
      { id: "c7-ff-11", text: "Medical researchers have successfully 3D printed custom titanium hip replacements, skull implants, and even biocompatible ear cartilage using bio-printers!" },
      { id: "c7-ff-12", text: "Architectural construction 3D printers can print the concrete walls and foundation of a complete full-sized family house in under 24 hours!" }
    ]
  },
  {
    id: "c7-ch-7",
    classId: "class-7",
    number: 7,
    title: "C & C++",
    tagline: "Variables, Operators, Control Flow, Loops & Arduino Robotics Code",
    color: "#9333EA",
    iconName: "Code",
    lessons: [
      {
        id: "c7-l7-1",
        chapterId: "c7-ch-7",
        order: 1,
        title: "C/C++ in Embedded Robotics",
        subtitle: "Direct memory efficiency, real-time speed, and syntax structure",
        summary: "C and C++ are the gold standard programming languages for robotics and aerospace. Because C compiles directly to native microcontroller machine instructions without heavy background runtime overhead, it delivers microsecond-level execution speed essential for real-time motor control and sensor sampling.",
        keyPoints: [
          "Direct hardware register access and memory efficiency.",
          "Every statement ends with a semicolon (`;`). Code blocks are enclosed in curly braces (`{}`).",
          "Arduino sketches are compiled using standard AVR-GCC C++ compilers."
        ],
        illustrationType: "c7_cpp_intro"
      },
      {
        id: "c7-l7-2",
        chapterId: "c7-ch-7",
        order: 2,
        title: "Data Types & Variables",
        subtitle: "int, float, char, bool, unsigned long and memory sizing",
        summary: "Variables are named storage containers in RAM. In C/C++, variables must be declared with a strict data type: `bool` (1 bit, true/false), `char` (8 bits, single character like 'F'), `int` (16 bits on Arduino Uno, numbers -32,768 to 32,767), `float` (32-bit decimal numbers like 3.14), and `unsigned long` (32-bit positive numbers up to 4 billion, used with `millis()`).",
        keyPoints: [
          "`int sensorVal = 512;` (Standard integer).",
          "`float voltage = 3.3;` (Floating-point decimal).",
          "Using `const int ledPin = 13;` prevents accidental variable alteration and saves RAM."
        ],
        illustrationType: "c7_cpp_variables"
      },
      {
        id: "c7-l7-3",
        chapterId: "c7-ch-7",
        order: 3,
        title: "Operators & Decision Control",
        subtitle: "if, else if, else, and switch-case logic trees",
        summary: "Control structures allow robots to make decisions based on sensor values. Relational operators compare numbers (`==`, `!=`, `<`, `>`, `<=`, `>=`). Logical operators combine conditions: `&&` (AND), `||` (OR), `!` (NOT). `if-else` blocks route execution, while `switch-case` statements efficiently parse single characters received from serial ports.",
        keyPoints: [
          "`if (distance < 20 && speed > 50) { brake(); }`.",
          "Difference between `=` (assignment) and `==` (equality check).",
          "`switch (command) { case 'F': forward(); break; case 'S': stop(); break; }`."
        ],
        illustrationType: "c7_cpp_control_flow"
      },
      {
        id: "c7-l7-4",
        chapterId: "c7-ch-7",
        order: 4,
        title: "Loops, Arrays & Custom Functions",
        subtitle: "for, while, do-while loops and modular code organization",
        summary: "Loops repeat tasks efficiently: `for (int i=0; i<10; i++)` runs a fixed count (e.g. sweeping a servo horn). `while (condition)` repeats as long as a condition holds true. Arrays store lists of values (e.g. `int distances[5];`). Custom functions (`void turnLeft(int angle)`) make programs modular, readable, and reusable.",
        keyPoints: [
          "For Loop: `for (initialization; condition; increment)`.",
          "Arrays are zero-indexed: the first item is `array[0]`.",
          "Functions return a value (`int calculateAverage()`) or perform an action (`void stopMotors()`)."
        ],
        illustrationType: "c7_cpp_loops_functions"
      }
    ],
    activities: [
      {
        id: "c7-act-7",
        chapterId: "c7-ch-7",
        title: "Interactive C/C++ Code Runner & Bug Detective Sandbox",
        type: "c7_activity_cpp_runner",
        description: "Write and execute real C++ robotics logic in the browser sandbox: fix syntax errors (missing semicolons, `=` vs `==`), test `if-else` branches, and watch simulated robot motor outputs update live.",
        instructions: [
          "Inspect the sample Arduino obstacle-avoidance code.",
          "Find and fix the classic bug on line 8: replace `if (distance = 20)` with `==`.",
          "Add a missing semicolon `;` at the end of `analogWrite(motorPin, 200)`.",
          "Click 'Run & Compile' to verify zero compiler errors and observe simulated motor drive!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c7-mod-7",
        chapterId: "c7-ch-7",
        title: "Smart Autonomous Patrol Robot Firmware (Full C++)",
        subtitle: "Complete modular C/C++ sketch integrating functions, arrays, timers, and sensor interrupts",
        description: "Develop a structured, professional-grade C++ Arduino sketch featuring modular motor driver functions, an array for 5-point sensor averaging, and a non-blocking timer loop using `millis()`.",
        parts: [
          { name: "Arduino C++ IDE 2.x Environment", count: 1 },
          { name: "Modular Header Architecture (<RobotDrive.h>)", count: 1 },
          { name: "5-Sample Moving Average Sensor Array", count: 1 },
          { name: "Non-Blocking millis() Timer Routine", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Define pin constants using `const int` at the top of the sketch." },
          { stepNumber: 2, instruction: "Create dedicated modular functions: `void moveForward()`, `void moveReverse()`, `void turn(char dir, int ms)`." },
          { stepNumber: 3, instruction: "Write an array function that takes 5 ultrasonic samples and returns the median distance." },
          { stepNumber: 4, instruction: "Replace all blocking `delay()` calls with non-blocking `millis()` timer comparisons." },
          { stepNumber: 5, instruction: "Implement a clean `switch-case` handler inside `void loop()` to process user overrides." },
          { stepNumber: 6, instruction: "Compile, upload to Arduino, and verify rock-solid autonomous patrol performance!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c7-q7-1",
        chapterId: "c7-ch-7",
        question: "In C/C++, what is the difference between the `=` and `==` operators?",
        options: ["`=` assigns a value to a variable, while `==` compares whether two values are equal", "`=` is for text and `==` is for numbers", "`==` is only used in Python", "There is no difference"],
        correctAnswer: 0,
        explanation: "A single `=` is the assignment operator (`x = 5;`), while `==` is the equality comparison operator (`if (x == 5)`)."
      },
      {
        id: "c7-q7-2",
        chapterId: "c7-ch-7",
        question: "Which C++ data type is designed to store fractional decimal numbers (e.g. 3.1415)?",
        options: ["float", "int", "bool", "char"],
        correctAnswer: 0,
        explanation: "`float` and `double` are floating-point types representing numbers with decimal points."
      },
      {
        id: "c7-q7-3",
        chapterId: "c7-ch-7",
        question: "What character must be placed at the end of almost every standalone statement in C and C++?",
        options: ["Semicolon (`;`)", "Period (`.`)", "Colon (`:`)", "Exclamation mark (`!`)"],
        correctAnswer: 0,
        explanation: "Statements in C/C++ terminate with a semicolon (`;`), telling the compiler where an instruction ends."
      },
      {
        id: "c7-q7-4",
        chapterId: "c7-ch-7",
        question: "What is the index number of the very first element in a standard C++ array?",
        options: ["0 (Zero-indexed)", "1", "-1", "10"],
        correctAnswer: 0,
        explanation: "In C and C++, array indexing begins at zero (`myArray[0]` is the first item)."
      },
      {
        id: "c7-q7-5",
        chapterId: "c7-ch-7",
        question: "What function return type is used when a function performs an action but does NOT return any value?",
        options: ["void", "int", "char", "null"],
        correctAnswer: 0,
        explanation: "`void` specifies that a function returns nothing back to the caller (e.g. `void setup()`)."
      }
    ],
    writtenQuestions: [
      {
        id: "c7-wq7-1",
        chapterId: "c7-ch-7",
        question: "Why is using `millis()` preferred over `delay()` in complex robotics programming?",
        sampleAnswer: "`delay()` is a blocking function that freezes the microcontroller CPU for the entire duration, preventing it from reading sensors, checking emergency stop buttons, or processing radio commands. `millis()` is non-blocking: it checks the background hardware clock, allowing the robot to execute sensor checks continuously while timing events."
      },
      {
        id: "c7-wq7-2",
        chapterId: "c7-ch-7",
        question: "Write a small C++ function `int getAverageDistance(int d1, int d2, int d3)` that returns the mathematical average of three integer distance readings.",
        sampleAnswer: "int getAverageDistance(int d1, int d2, int d3) {\n  int sum = d1 + d2 + d3;\n  int avg = sum / 3;\n  return avg;\n}"
      }
    ],
    funFacts: [
      { id: "c7-ff-13", text: "Bjarne Stroustrup created C++ at Bell Labs in 1979 as an extension of C, originally naming it 'C with Classes'!" },
      { id: "c7-ff-14", text: "The flight control software of NASA's Mars rovers and SpaceX Falcon 9 orbital rockets is written in C and C++!" }
    ]
  }
];

export const class7Glossary: GlossaryTerm[] = [
  { term: "Closed-Loop System", definition: "A control system that monitors its output with sensors and uses feedback to continuously eliminate error relative to a setpoint.", chapterNumber: 1 },
  { term: "Open-Loop System", definition: "A control system that executes actions blindly based on input or time without measuring its output.", chapterNumber: 1 },
  { term: "SCADA", definition: "Supervisory Control and Data Acquisition, an industrial software system for remote plant monitoring and control.", chapterNumber: 1 },
  { term: "Arduino IDE", definition: "Integrated Development Environment used to write, compile, and flash C/C++ sketches onto Arduino microcontrollers.", chapterNumber: 2 },
  { term: "Servo Motor", definition: "A rotary actuator with internal gearbox and potentiometer feedback that holds precise angular positions from 0° to 180°.", chapterNumber: 2 },
  { term: "MPU6050", definition: "A 6-DOF MEMS sensor combining a 3-axis accelerometer and a 3-axis gyroscope with an onboard Digital Motion Processor.", chapterNumber: 3 },
  { term: "I2C", definition: "Inter-Integrated Circuit, a two-wire serial communication bus (SDA data, SCL clock) linking multiple sensors to a microcontroller.", chapterNumber: 3 },
  { term: "Pitch, Roll, Yaw", definition: "The three rotational degrees of freedom: Pitch (tilting forward/back), Roll (banking left/right), and Yaw (swiveling left/right).", chapterNumber: 3 },
  { term: "Ultrasonic Radar", definition: "A distance-measuring sensor mounted onto a rotating servo horn that sweeps across 180 degrees to detect obstacles.", chapterNumber: 4 },
  { term: "Bernoulli's Principle", definition: "The fluid dynamic principle stating that an increase in the speed of a fluid occurs simultaneously with a decrease in static pressure.", chapterNumber: 5 },
  { term: "Angle of Attack", definition: "The acute angle between the chord line of an aircraft wing and the direction of oncoming relative airflow.", chapterNumber: 5 },
  { term: "Ailerons", definition: "Movable control surfaces on the trailing edges of airplane wings that work differentially to control banking and roll.", chapterNumber: 5 },
  { term: "FDM 3D Printing", definition: "Fused Deposition Modeling, an additive manufacturing process that melts and extrudes thermoplastic filament layer by layer.", chapterNumber: 6 },
  { term: "G-Code", definition: "The universal machine numerical control programming language that instructs 3D printers where to move, feed, and heat.", chapterNumber: 6 },
  { term: "Infill", definition: "The internal geometric lattice structure printed inside 3D models to provide strength while minimizing weight and plastic use.", chapterNumber: 6 },
  { term: "Compiler", definition: "A software program that translates human-written C/C++ source code into binary machine code executed directly by the microcontroller CPU.", chapterNumber: 7 }
];

export const class7Badges: Badge[] = [
  {
    id: "c7-badge-automation",
    title: "Automation Engineer",
    description: "Mastered closed-loop feedback systems, setpoint errors, and industrial SCADA hierarchy.",
    icon: "Sliders",
    unlockedAtXp: 100
  },
  {
    id: "c7-badge-arduino-pro",
    title: "Arduino Architect",
    description: "Programmed servo angle positions (0–180°) and custom C++ timer sketches.",
    icon: "Cpu",
    unlockedAtXp: 250
  },
  {
    id: "c7-badge-gesture",
    title: "Gesture Teleoperation Ace",
    description: "Decoded MPU6050 6-DOF MEMS sensors and calibrated 3-axis glove control.",
    icon: "Hand",
    unlockedAtXp: 400
  },
  {
    id: "c7-badge-radar",
    title: "Autonomous Radar Specialist",
    description: "Constructed a 180-degree pan-tilt ultrasonic radar obstacle navigation bot.",
    icon: "ShieldAlert",
    unlockedAtXp: 550
  },
  {
    id: "c7-badge-aerodynamics",
    title: "Aerodynamics Aviator",
    description: "Calculated Bernoulli airfoil lift and balanced the four forces of flight.",
    icon: "Wind",
    unlockedAtXp: 700
  },
  {
    id: "c7-badge-cpp-dev",
    title: "Embedded C++ Developer",
    description: "Wrote modular C++ functions, loops, arrays, and non-blocking millis() logic.",
    icon: "Code",
    unlockedAtXp: 850
  }
];
