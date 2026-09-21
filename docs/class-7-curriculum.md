# RoboBox Learn — Class 7 Curriculum Map
*Source of Truth: `Robobox Textbook Std 7.pdf` (162 pages)*

---

## CLASS 7 OVERVIEW
- **Grade**: Class 7 (Standard 7)
- **Subject**: Robotics & Innovation (Practical STEM Learning)
- **Theme**: Industrial Automation, Arduino Embedded Coding, MPU6050 Gesture Control, Obstacle Avoiding Autonomous Radars, Aviation & Aerodynamics, 3D Slicing & C/C++ Programming
- **Total Chapters**: 7 Core Learning Chapters + 1 Notes & Glossary
- **Tagline**: Design • Program • Automate

---

## Chapter 1: INTRODUCTION TO AUTOMATION (Pages 3–9)
- **Exact Chapter Name**: 1. INTRODUCTION TO AUTOMATION
- **Topics**:
  1. What is Automation (technology to perform tasks with minimal human intervention; increasing efficiency, accuracy, and safety)
  2. Key Aspects of Automation:
     - Minimal human input, technology-driven, process-focused
  3. Types of Control Systems:
     - **Open-Loop Control Systems**: No feedback loop (e.g., simple washing machine timer, toaster)
     - **Closed-Loop Control Systems**: Continuous feedback error correction via sensors (e.g., home thermostat, cruise control, robotic arm position encoder)
  4. Industrial Automation Hierarchy (Field sensors $\rightarrow$ PLCs/Microcontrollers $\rightarrow$ SCADA $\rightarrow$ Cloud Enterprise)
  5. Applications: Automotive manufacturing assembly lines, automated packaging, smart agriculture, sorting warehouses
- **Lessons**:
  - Lesson 1.1: Foundations of Automation & Industrial Evolution
  - Lesson 1.2: Open-Loop vs. Closed-Loop Feedback Control Systems
  - Lesson 1.3: Sensors and Actuators in Automated Factories
  - Lesson 1.4: Real-World Automation Case Studies
- **Activities**:
  - Open-Loop vs Closed-Loop System Identifier & Sorter
  - Closed-Loop Thermostat Feedback Simulator (Error = Setpoint - Process Variable)
- **Questions & Exercises**:
  - 10 MCQs (Automation definition, Closed-loop feedback necessity, Open-loop examples, Error calculation formula, SCADA role)
  - Short Answer Questions:
    - What is the primary difference between an open-loop and a closed-loop control system?
    - Give two examples of closed-loop automated systems used in everyday life.

---

## Chapter 2: ARDUINO (Pages 10–26)
- **Exact Chapter Name**: 2. ARDUINO
- **Topics**:
  1. Arduino Ecosystem: Hardware boards, Arduino IDE (Integrated Development Environment), and Open-Source Community
  2. Structure of an Arduino C/C++ Sketch:
     - `void setup()`: Initialization block executed once at startup
     - `void loop()`: Main execution block running continuously
  3. Essential Built-in Functions:
     - `pinMode(pin, mode)` (INPUT, OUTPUT, INPUT_PULLUP)
     - `digitalWrite(pin, value)` (HIGH, LOW)
     - `digitalRead(pin)`
     - `delay(milliseconds)`
     - `analogRead(pin)` (0 to 1023)
     - `analogWrite(pin, value)` (PWM 0 to 255)
  4. Servo Motors (SG90 / MG995):
     - Working principle: Pulse-Width Modulation (1ms = 0°, 1.5ms = 90°, 2ms = 180°)
     - `<Servo.h>` library: `servo.attach(pin)`, `servo.write(angle)`
     - 3 wires: Brown/Black (GND), Red (5V VCC), Orange/Yellow (Signal)
- **Lessons**:
  - Lesson 2.1: Arduino IDE Setup & Sketch Architecture
  - Lesson 2.2: Core Digital & Analog I/O Functions
  - Lesson 2.3: Pulse Width Modulation (PWM) & Signal Dimming
  - Lesson 2.4: Servo Motor Angle Control (0° to 180°) with Servo.h
- **Activities**:
  - Interactive Arduino C++ Code Builder & Virtual Serial Monitor
  - SG90 Servo PWM Angle Positioner Simulator
- **Models / Projects**:
  - **PROJECT 1 - Automatic Servo Barrier Gate**: Ultrasonic sensor detects approaching car $\rightarrow$ Arduino commands servo to swing gate up 90° and lowers after 5 seconds.
- **Questions & Exercises**:
  - 10 MCQs (setup() vs loop(), pinMode parameters, analogRead 10-bit range, analogWrite 8-bit PWM 0-255, Servo 3-wire pinout)
  - Short Answer Questions:
    - Why does `analogWrite()` accept values between 0 and 255 while `analogRead()` returns values up to 1023?
    - Explain the purpose of `void setup()` in an Arduino program.

---

## Chapter 3: GESTURE CONTROL (Pages 27–46)
- **Exact Chapter Name**: 3. GESTURE CONTROL
- **Topics**:
  1. Introduction to Human-Machine Interfaces (HMI) & Gesture Recognition
  2. Inertial Measurement Unit (IMU) — MPU6050:
     - 3-Axis Accelerometer (measures linear acceleration along X, Y, Z in g-force)
     - 3-Axis Gyroscope (measures angular rotational velocity in degrees/sec: Pitch, Roll, Yaw)
     - Integrated Digital Motion Processor (DMP)
     - I2C Communication Protocol (SDA: Data, SCL: Clock, 0x68 address)
  3. Reading Gesture Tilts:
     - Tilt Forward (Pitch +) $\rightarrow$ Move Robot Forward
     - Tilt Backward (Pitch -) $\rightarrow$ Move Robot Backward
     - Tilt Left (Roll -) $\rightarrow$ Steer Robot Left
     - Tilt Right (Roll +) $\rightarrow$ Steer Robot Right
     - Hand Flat (Zero Acceleration Offset) $\rightarrow$ Stop
  4. Wireless Transceiver NRF24L01 / Bluetooth for Hand Glove Controller
- **Lessons**:
  - Lesson 3.1: Human-Machine Interfaces & IMU Sensors
  - Lesson 3.2: MPU6050 6-DOF Sensor Anatomy & I2C Protocol
  - Lesson 3.3: Accelerometer & Gyroscope Physics (Pitch, Roll, Yaw)
  - Lesson 3.4: Mapping Hand Gestures to Robot Locomotion
- **Activities**:
  - 3D Interactive Hand Glove & MPU6050 Orientation Visualizer
  - Pitch & Roll Angle-to-Command Threshold Calibrator
- **Robotics Models**:
  - **MODEL 1 - Gesture-Controlled Hand Glove Transmitter**: Wearable glove with MPU6050 sensor transmitting wireless tilt packets to mobile rover.
- **Questions & Exercises**:
  - 10 MCQs (MPU6050 degree of freedom, I2C bus pins SDA/SCL, Pitch vs Roll rotation axes, Accelerometer gravity measurement, Gesture thresholding)
  - Short Answer Questions:
    - Distinguish between what an accelerometer measures versus what a gyroscope measures.
    - How does an I2C communication bus allow multiple sensors to communicate using only two data wires?

---

## Chapter 4: OBSTACLE AVOIDING ROBOT (Pages 47–72)
- **Exact Chapter Name**: 4. OBSTACLES AVOIDING ROBOT (or OBSTACLE AVOIDING ROBOT)
- **Topics**:
  1. Autonomous Navigation & Collision Avoidance in Robotics
  2. Ultrasonic Radar Pan-Tilt Mechanism:
     - Mounting HC-SR04 Ultrasonic sensor onto SG90 servo horn at front chassis
     - Sweeping radar view: Look Left (150°), Look Center (90°), Look Right (30°)
  3. Obstacle Avoidance Decision Tree Algorithm:
     - Measure distance straight ahead ($D_{center}$)
     - If $D_{center} > 25\text{ cm}$: Move Forward
     - If $D_{center} \le 25\text{ cm}$:
       1. Stop motors
       2. Servo scans Left $\rightarrow$ records $D_{left}$
       3. Servo scans Right $\rightarrow$ records $D_{right}$
       4. Return servo to center (90°)
       5. If $D_{left} > D_{right}$: Turn Left; else Turn Right
       6. If both $D_{left}$ and $D_{right} < 20\text{ cm}$: Reverse for 1 second, then Turn 180°
  4. L298N Motor Driver Speed Regulation with PWM
- **Lessons**:
  - Lesson 4.1: Autonomous Obstacle Avoidance Architecture
  - Lesson 4.2: Servo-Mounted Ultrasonic Radar Scanning
  - Lesson 4.3: Multi-Directional Collision Decision Logic
  - Lesson 4.4: Motor Driver Integration & Obstacle Maze Navigation
- **Activities**:
  - Virtual Ultrasonic Radar Scanning Simulator (Real-time sweep showing distances)
  - Obstacle Avoidance Decision Flowchart Solver
- **Robotics Models**:
  - **MODEL 1 - Autonomous Ultrasonic Radar Obstacle-Avoiding Bot**: Smart 2WD/4WD robotic rover equipped with servo radar turret autonomously navigating complex mazes.
- **Questions & Exercises**:
  - 10 MCQs (Obstacle threshold distance, Scanning servo angles, Decision rule when left is clear, Emergency reverse trigger, Pan-tilt mechanism purpose)
  - Short Answer Questions:
    - Outline the step-by-step algorithm executed when the robot detects an obstacle 15cm ahead.
    - Why is scanning both left and right directions superior to simply turning in a random direction?

---

## Chapter 5: AVIATION (Pages 73–88)
- **Exact Chapter Name**: 5. AVIATION
- **Topics**:
  1. Introduction to Aviation & Aerodynamics
  2. The Four Fundamental Forces of Flight:
     - **Lift**: Upward force generated by wings
     - **Weight / Gravity**: Downward gravitational pull
     - **Thrust**: Forward propulsion produced by propellers / jet engines
     - **Drag**: Backward aerodynamic air resistance
     - Equilibrium: In steady level flight, $\text{Lift} = \text{Weight}$ and $\text{Thrust} = \text{Drag}$
  3. Bernoulli’s Principle & Airfoil Geometry:
     - Faster airflow over curved top surface creates lower pressure; slower airflow underneath creates high pressure $\rightarrow$ upward Lift
  4. Aircraft Control Surfaces & 3-Axis Movements:
     - **Pitch** (Nose Up/Down): Controlled by Elevators on horizontal tail
     - **Roll** (Banking Left/Right): Controlled by Ailerons on wing trailing edges
     - **Yaw** (Nose Left/Right): Controlled by Rudder on vertical tail fin
  5. Drones & Fixed-Wing UAVs Overview
- **Lessons**:
  - Lesson 5.1: Fundamentals of Aerodynamics & Aviation History
  - Lesson 5.2: The Four Forces of Flight in Balance
  - Lesson 5.3: Bernoulli's Principle & Airfoil Lift Generation
  - Lesson 5.4: Aircraft Control Surfaces (Elevators, Ailerons, Rudder)
- **Activities**:
  - 4 Forces of Flight Dynamic Balance Simulator
  - Interactive Airfoil Wind Tunnel & Bernoulli Pressure Visualizer
- **Models / Projects**:
  - **PROJECT 1 - Motorized Propeller Wind-Thrust Car**: High-speed rolling chassis powered by an aircraft brushless/DC propeller creating forward aerodynamic thrust.
- **Questions & Exercises**:
  - 10 MCQs (Four forces of flight, Bernoulli principle speed vs pressure, Aileron roll control, Elevator pitch control, Thrust generator)
  - Short Answer Questions:
    - State Bernoulli's principle and explain how an airplane wing produces aerodynamic lift.
    - Name the three primary aircraft control surfaces and the rotational movement each controls.

---

## Chapter 6: 3D PRINTING (Pages 89–102)
- **Exact Chapter Name**: 6. 3D PRINTING
- **Topics**:
  1. Additive Manufacturing vs Subtractive Manufacturing (CNC milling vs FDM 3D printing)
  2. Fused Deposition Modeling (FDM) Architecture:
     - Extruder motor, Hotend, Heating block, Nozzle (0.4mm), Heated build plate
  3. 3D Printing Materials:
     - PLA (Polylactic Acid): Biodegradable, prints at 190–210°C, easy for school STEM
     - ABS: High strength, requires heated bed (90–110°C) and enclosure
     - PETG & TPU (flexible filament)
  4. Slicing Software (UltiMaker Cura / PrusaSlicer):
     - Slicing 3D STL model into 2D horizontal layers and generating G-code
     - Key Print Parameters: Layer height (0.12mm–0.28mm), Infill percentage (15%–100%) and patterns (Grid, Gyroid), Print speed (50mm/s), Supports for overhangs $>45^\circ$, Bed adhesion (Skirt, Brim, Raft)
  5. Troubleshooting 3D Prints: Warping, Stringing, Layer shifting, Under-extrusion
- **Lessons**:
  - Lesson 6.1: Additive Manufacturing & FDM Printer Anatomy
  - Lesson 6.2: Thermoplastic Filaments (PLA, ABS, PETG, TPU)
  - Lesson 6.3: Slicing Fundamentals (Layer Height, Infill Density & Supports)
  - Lesson 6.4: G-Code Commands & Print Defect Troubleshooting
- **Activities**:
  - Interactive Slicer Preview Simulator (adjust layer height, infill % and watch layer-by-layer build)
  - 3D Print Defect Diagnostic Matrix
- **Questions & Exercises**:
  - 10 MCQs (Additive vs subtractive, PLA extrusion temperature, Infill purpose, Overhang support rule >45°, G-code definition)
  - Short Answer Questions:
    - Why is infill used inside 3D printed objects instead of printing 100% solid plastic?
    - What causes "warping" in a 3D print and how can it be prevented?

---

## Chapter 7: C & C++ (Pages 103–129)
- **Exact Chapter Name**: 7. C & C++
- **Topics**:
  1. Introduction to C/C++ Programming in Robotics & Embedded Systems
  2. Syntax Fundamentals:
     - Comments (`//` and `/* */`), Semicolons, `#include` preprocessors
     - Data Types: `int`, `float`, `char`, `bool`, `String`, `unsigned long`
     - Variables & Constants (`const`)
  3. Arithmetic, Relational & Logical Operators (`+`, `-`, `*`, `/`, `%`, `==`, `!=`, `<`, `>`, `&&`, `||`, `!`)
  4. Conditional Decision Statements: `if`, `if-else`, `else if`, `switch-case`
  5. Iterative Loops: `for` loops, `while` loops, `do-while` loops
  6. Functions: Definition, Return types, Parameters, Modular coding
  7. Arrays: Declaring and indexing 1D arrays for sensor readings
  8. Applying C/C++ to Arduino Robotics Projects
- **Lessons**:
  - Lesson 7.1: C & C++ Basics, Data Types & Variables
  - Lesson 7.2: Arithmetic & Logical Operators in Robotics Logic
  - Lesson 7.3: Control Flow (if-else & switch-case Decision Trees)
  - Lesson 7.4: Loops, Arrays & Custom Functions in Arduino Sketches
- **Activities**:
  - Interactive C/C++ Code Playground & Execution Sandbox
  - Logic Bug Detective Challenge (find and fix syntax and logic errors in robotic code)
- **Questions & Exercises**:
  - 10 MCQs (int vs float storage, Logical AND operator &&, for loop syntax, Array 0-indexing, Function return types)
  - Short Answer Questions:
    - Write a simple C++ `if-else` condition to check if an ultrasonic distance variable is less than 20cm.
    - What is the difference between a `for` loop and a `while` loop?

---

## Chapter 8: NOTES & GLOSSARY (Pages 130–162)
- **Exact Chapter Name**: 8. NOTES & GLOSSARY
- **Topics**: 50+ definitions across industrial automation, Arduino registers, IMU motion physics, aviation aerodynamics, 3D printing parameters, and C++ language keywords; Arduino syntax quick reference.
