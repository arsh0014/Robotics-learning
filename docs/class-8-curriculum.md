# RoboBox Learn — Class 8 Curriculum Map
*Source of Truth: `Robobox Textbook  Std 8.pdf` (140 pages)*

---

## CLASS 8 OVERVIEW
- **Grade**: Class 8 (Standard 8)
- **Subject**: Robotics & Innovation (Practical STEM Learning)
- **Theme**: Mechatronics Integration, ESP32/ESP8266 IoT Cloud, Sumo Combat Defense Robots, Bionic Mechatronic Hand, Drones & Quadcopters, Product Prototyping & Python Programming
- **Total Chapters**: 7 Core Learning Chapters + 1 Notebook & Glossary
- **Tagline**: Innovate • Integrate • Empower

---

## Chapter 1: INTRODUCTION TO MECHATRONICS (Pages 3–12)
- **Exact Chapter Name**: 1. INTRODUCTION TO MECHATRONICS
- **Topics**:
  1. What is Mechatronics: Synergistic integration of Mechanical Engineering, Electrical/Electronic Engineering, Computer Science, and Control Systems
  2. Key Components of Mechatronic Systems:
     - Physical Mechanical Structure (Mechanisms, gears, linkages, chassis)
     - Sensors (Data acquisition of position, velocity, force, temperature)
     - Actuators (Motors, solenoids, pneumatics, hydraulics producing mechanical force)
     - Digital Controllers (Microcontrollers, DSPs, PLCs processing control algorithms)
  3. Evolution of Products from Pure Mechanical to Mechatronic:
     - Typewriters $\rightarrow$ Smart Electronic Keyboards
     - Mechanical Speedometer $\rightarrow$ Digital GPS Dashboard
     - Mechanical Camera $\rightarrow$ Digital Image Sensor with Autofocus
  4. Benefits: Higher precision, energy efficiency, automated self-diagnostics, miniaturization
- **Lessons**:
  - Lesson 1.1: The 4 Disciplines of Mechatronics
  - Lesson 1.2: System Architecture: Sensors, Controllers & Actuators
  - Lesson 1.3: Evolution of Everyday Mechatronic Products
  - Lesson 1.4: Design Methodology of Intelligent Smart Devices
- **Activities**:
  - Interactive 4-Pillar Mechatronics System Architecture Explorer
  - Mechanical-to-Mechatronic Evolution Timeline Matcher
- **Questions & Exercises**:
  - 10 MCQs (Mechatronics definition, 4 core engineering fields, Actuator definition, Sensor role, Mechatronic product examples)
  - Short Answer Questions:
    - Define Mechatronics and name the four disciplines that combine to form it.
    - How does a modern mechatronic camera differ from a traditional mechanical film camera?

---

## Chapter 2: ESP (ESP8266 / ESP32) (Pages 13–26)
- **Exact Chapter Name**: 2. ESP
- **Topics**:
  1. Introduction to Internet of Things (IoT) & Smart Connected Devices
  2. The ESP Microcontroller Family:
     - **ESP8266** (NodeMCU): 32-bit Tensilica CPU @ 80/160 MHz, integrated 2.4 GHz Wi-Fi 802.11 b/g/n
     - **ESP32**: Dual-Core 32-bit Tensilica LX6 CPU @ 240 MHz, Wi-Fi + Bluetooth v4.2 / BLE, capacitive touch pins, DACs
  3. ESP Pinout & Specifications:
     - 3.3V Logic Level Warning (not 5V tolerant on raw GPIOs)
     - Flash memory (4MB–16MB), USB-to-UART bridge (CP2102 / CH340)
  4. Operating Modes:
     - **Station Mode (STA)**: Connects to existing home Wi-Fi router
     - **Access Point Mode (AP)**: Broadcasts its own Wi-Fi network for direct smartphone connection
  5. Web Server on ESP:
     - Hosting HTML/CSS web pages on the ESP chip
     - Controlling robot motors and LEDs via browser IP address buttons (e.g. `http://192.168.4.1`)
- **Lessons**:
  - Lesson 2.1: IoT Fundamentals & The ESP Revolution
  - Lesson 2.2: ESP8266 vs ESP32 Architecture & Specifications
  - Lesson 2.3: Wi-Fi Operating Modes (Station STA vs Access Point AP)
  - Lesson 2.4: Building an Embedded Web Server for IoT Robotics
- **Activities**:
  - Virtual ESP Wi-Fi Web Server & Live Robot Control Dashboard
  - ESP8266 vs ESP32 Feature Comparison Matrix
- **Models / Projects**:
  - **PROJECT 1 - ESP Wi-Fi Smart Home Automation**: Controlling dual relays and RGB status indicators over a local Wi-Fi browser portal.
- **Questions & Exercises**:
  - 10 MCQs (ESP32 dual-core processor, 3.3V logic level, AP vs STA mode, Embedded web server IP addressing, Wi-Fi standard 2.4GHz)
  - Short Answer Questions:
    - What is the difference between Station (STA) mode and Access Point (AP) mode on an ESP chip?
    - Why is it critical to operate ESP GPIO pins at 3.3V rather than directly feeding 5V?

---

## Chapter 3: DEFENSE ROBOTS (Sumo) (Pages 27–48)
- **Exact Chapter Name**: 3. DEFENSE ROBOTS (Sumo)
- **Topics**:
  1. What is a Robot Sumo Competition (Autonomous or RC combat inside a round ring "Dohyo")
  2. Rules & Ring Specifications:
     - Dohyo diameter, Black ring surface with high-contrast White border line (Tawara)
  3. Mechanical Design for Defense Robots:
     - Low Center of Gravity (CoG) to resist tipping
     - Sloped front steel/aluminum wedge (scoop) to lift and push opponents
     - High-traction silicone/rubber wheels for maximum frictional grip ($F_{friction} = \mu \times N$)
  4. Sensor Strategy for Autonomous Sumo Bots:
     - Downward-facing IR Edge Sensors (Detects white border line $\rightarrow$ triggers immediate emergency reverse)
     - Front & Side Ultrasonic/Laser ToF Sensors (Locks onto opponent coordinate to initiate full-throttle charge)
  5. High-Torque DC Gearmotors & Motor Drivers (12V High-Current Drivers)
- **Lessons**:
  - Lesson 3.1: Sumo Robotics Rules, Dohyo Ring & Tactics
  - Lesson 3.2: Mechanical Defense Design (Wedge Physics & Low Center of Gravity)
  - Lesson 3.3: Sensor Array & Dohyo White Edge Detection
  - Lesson 3.4: Autonomous Sumo Search-and-Push Combat Logic
- **Activities**:
  - Interactive Sumo Ring (Dohyo) Combat & Edge Avoidance Simulator
  - Friction & Traction Physics Multiplier Calculator
- **Robotics Models**:
  - **MODEL 1 - Heavy-Duty Sumo Defense Bot**: Dual high-torque motor combat rover featuring front scoop wedge, downward boundary line sensors, and ultrasonic target radar.
- **Questions & Exercises**:
  - 10 MCQs (Dohyo ring boundary color, Low center of gravity benefit, Sumo wedge mechanical purpose, Edge sensor reaction, Friction coefficient)
  - Short Answer Questions:
    - Why is a low center of gravity critical in defense and sumo robotics?
    - How does the sumo bot prevent itself from driving off the Dohyo ring edge during an attack?

---

## Chapter 4: MECHATRONICS (Hand) (Pages 49–65)
- **Exact Chapter Name**: 4. MECHATRONICS (Hand)
- **Topics**:
  1. Human Anatomy vs Biomechatronic Robotic Hands:
     - Bones (Phalanges), Joints, and Tendons (Flexor & Extensor tendons)
     - 5 Degrees of Freedom (DoF) for human fingers
  2. Bionic Hand Actuation:
     - Servo motors pulling nylon/steel artificial tendon cords through finger joints
     - Elastic spring return mechanism for extension
  3. Flex Sensors:
     - Variable carbon resistive strip (Resistance increases when bent: 10k$\Omega$ flat $\rightarrow$ 30k–50k$\Omega$ bent)
     - Voltage divider circuit reading analog voltage into microcontroller
  4. Master-Slave Robotic Teleoperation:
     - Master Glove equipped with 5 Flex Sensors
     - Slave Bionic Hand mirroring human finger gestures in real time
  5. Applications: Prosthetic limbs for amputees, hazardous material handling, robotic surgery
- **Lessons**:
  - Lesson 4.1: Human Hand Biomechanics & Artificial Tendon Systems
  - Lesson 4.2: Flex Sensor Physics & Voltage Divider Circuitry
  - Lesson 4.3: Servo-Driven 5-Finger Articulated Mechanism
  - Lesson 4.4: Teleoperated Master-Slave Glove Integration
- **Activities**:
  - 3D Interactive Bionic Hand & Flex Sensor Bend Simulator (Drag fingers to bend robotic hand)
  - Flex Sensor Voltage-to-Angle Mapping Sandbox
- **Robotics Models**:
  - **MODEL 1 - 5-Finger Articulated Bionic Hand**: Fully motorized robotic prosthetic hand with tendon routing and servo pull actuation.
- **Questions & Exercises**:
  - 10 MCQs (Human finger tendon analogy, Flex sensor resistance change on bending, Number of finger servos for 5 DoF, Master-slave teleoperation, Prosthetic applications)
  - Short Answer Questions:
    - How does a flex sensor convert a finger bend into a measurable electrical signal?
    - Explain how artificial tendons and servo motors recreate human finger gripping motion.

---

## Chapter 5: DRONES (Pages 66–79)
- **Exact Chapter Name**: 5. DRONES
- **Topics**:
  1. Introduction to Unmanned Aerial Vehicles (UAVs) & Quadcopters
  2. Quadcopter Configuration (X-frame vs +-frame):
     - 4 Motors: 2 Clockwise (CW) + 2 Counter-Clockwise (CCW) to cancel rotational torque
  3. Core Flight Mechanics & Maneuvers:
     - **Throttle**: All 4 motors increase/decrease speed equally $\rightarrow$ Ascend/Descend
     - **Pitch**: Front motors slow down, Rear speed up $\rightarrow$ Pitch Forward / Backward
     - **Roll**: Left motors slow down, Right speed up $\rightarrow$ Roll Left / Right
     - **Yaw**: CW motors speed up, CCW slow down $\rightarrow$ Rotate Left / Right around Z-axis
  4. Propulsion & Electronics Hardware:
     - Brushless DC Motors (BLDC, rated in KV e.g. 2300KV = RPM per Volt)
     - Electronic Speed Controllers (ESCs, 3-phase high-frequency switching)
     - LiPo Battery (Lithium Polymer 3S/4S, C-rating discharge rate)
     - Flight Controller (Gyro, Accel, Barometer, Magnetometer, GPS)
- **Lessons**:
  - Lesson 5.1: Quadcopter Dynamics & Torque Cancellation (CW vs CCW)
  - Lesson 5.2: Flight Control Maneuvers (Throttle, Pitch, Roll, Yaw)
  - Lesson 5.3: BLDC Motors, KV Rating & ESC Power Electronics
  - Lesson 5.4: Flight Controllers, LiPo Battery Safety & Pre-flight Protocols
- **Activities**:
  - Interactive Quadcopter 4-Motor Flight Simulator (Throttle, Pitch, Roll, Yaw live thrust vectoring)
  - BLDC Motor KV & LiPo Cell Voltage Calculator
- **Questions & Exercises**:
  - 10 MCQs (Why quadcopters use CW & CCW pairs, What KV rating means, ESC purpose, Roll maneuver motor speed adjustments, LiPo battery chemistry)
  - Short Answer Questions:
    - Why must two motors spin clockwise and two spin counter-clockwise in a quadcopter?
    - Describe how a quadcopter turns left (Yaw) without changing its altitude.

---

## Chapter 6: PROTOTYPING (Pages 80–89)
- **Exact Chapter Name**: 6. PROTOTYPING
- **Topics**:
  1. The Engineering Design Process & Prototyping Cycle:
     - **Empathize** (Understand user need) $\rightarrow$ **Define** (Problem statement) $\rightarrow$ **Ideate** (Brainstorming solutions) $\rightarrow$ **Prototype** (Build low-to-high fidelity models) $\rightarrow$ **Test** (Iterate and refine)
  2. Prototyping Stages:
     - Low-Fidelity: Cardboard, foam, sketches, clay
     - Medium-Fidelity: Breadboard circuits, laser-cut acrylic, 3D printed mockups
     - High-Fidelity: Custom PCBs, CNC machined enclosures, embedded firmware
  3. Printed Circuit Board (PCB) Design:
     - Schematic capture, PCB layout, copper traces, through-hole vs Surface Mount Technology (SMT)
  4. Design for Manufacturability (DFM) & Assembly (DFA)
- **Lessons**:
  - Lesson 6.1: The 5 Stages of the Design Thinking Prototyping Cycle
  - Lesson 6.2: Low vs Medium vs High-Fidelity Prototyping
  - Lesson 6.3: Basics of Custom PCB Design & Manufacturing
  - Lesson 6.4: Testing, Iteration & Design for Assembly (DFA)
- **Activities**:
  - Interactive 5-Stage Design Thinking Workflow Solver
  - Breadboard-to-PCB Trace Routing Challenge
- **Questions & Exercises**:
  - 10 MCQs (5 design thinking steps, Low-fi prototyping materials, SMT vs Through-hole components, PCB trace function, Iterative testing loop)
  - Short Answer Questions:
    - Explain the five stages of the Design Thinking process in robotics product development.
    - What is the benefit of transitioning from a breadboard circuit to a custom PCB?

---

## Chapter 7: PYTHON (Pages 90–107)
- **Exact Chapter Name**: 7. PYTHON
- **Topics**:
  1. Why Python in Advanced Robotics & Artificial Intelligence:
     - Clean syntax, extensive open-source libraries (NumPy, OpenCV, PySerial, MicroPython)
  2. Python Syntax Fundamentals:
     - Variables, dynamic data types (int, float, string, boolean)
     - Indentation-based block structure (no braces)
     - Mathematical & Comparison operators
  3. Data Structures:
     - Lists: indexing, slicing, `.append()`, `.pop()`
     - Dictionaries: Key-value pairs for sensor data
  4. Control Structures & Loops:
     - `if`, `elif`, `else` conditions
     - `for item in list:` and `while condition:`
  5. Functions & Modules (`def robot_move(speed):`, `import time`, `import serial`)
  6. Python Serial Communication with Microcontrollers (Reading sensor data over USB COM port)
- **Lessons**:
  - Lesson 7.1: Python for Robotics & Syntax Essentials
  - Lesson 7.2: Python Data Structures (Lists & Dictionaries for Sensor Arrays)
  - Lesson 7.3: Loops, Logic & Decision Structures
  - Lesson 7.4: Functions, Modules & Serial Robotics Control
- **Activities**:
  - Interactive Python Code Runner & Robotics Logic Sandbox
  - Python Sensor Telemetry Data Parser Challenge
- **Models / Projects**:
  - **PROJECT 1 - Python Robot GUI Controller**: Desktop Python interface communicating over Serial port to command robotic rovers.
- **Questions & Exercises**:
  - 10 MCQs (Python indentation role, List indexing, Dictionary key-value format, def keyword, Serial module import)
  - Short Answer Questions:
    - Write a Python function `is_obstacle_near(distance)` that returns `True` if distance is under 15cm.
    - Explain why Python is widely used in modern AI and robotics control systems.

---

## Chapter 8: NOTEBOOK & GLOSSARY (Pages 108–140)
- **Exact Chapter Name**: 8. NOTEBOOK & GLOSSARY
- **Topics**: 50+ definitions across mechatronics, IoT protocols, drone aerodynamics, bionic prosthetics, PCB design, and Python syntax; lab safety and battery safety protocols.
