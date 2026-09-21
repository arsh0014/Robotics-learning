# RoboBox Learn — Class 6 Curriculum Map
*Source of Truth: `Robobox Textbook Std 6.pdf` (140 pages)*

---

## CLASS 6 OVERVIEW
- **Grade**: Class 6 (Standard 6)
- **Subject**: Robotics & Innovation (Practical STEM Learning)
- **Theme**: Microcontrollers, Advanced Sensors, Line Following Autonomous Robots, Wireless Bluetooth, 3D CAD & MIT App Inventor
- **Total Chapters**: 7 Core Learning Chapters + 1 Notes & Glossary
- **Tagline**: Create • Analyze • Innovate

---

## Chapter 1: INNOVATION IN ROBOTICS (Pages 3–10)
- **Exact Chapter Name**: 1. INNOVATION TO ROBOTICS (or INNOVATION IN ROBOTICS)
- **Topics**:
  1. Evolution & History of Robotics:
     - Ancient automata: Hero of Alexandria (10–70 AD), programmable water theatre & carts
     - 1942: Isaac Asimov introduces the word "Robotics" and the Three Laws of Robotics
     - 1954: George Devol patents the first programmable robot "Unimate"
     - 1961: Unimate deployed in General Motors automotive assembly line for die-casting
     - 1970s: Space robotics and planetary landers
     - 1980s: Industrial robotics boom in manufacturing and healthcare
     - 1997: NASA Sojourner rover navigates Mars surface
     - 2000s: Robotic surgical assistants (da Vinci surgical system)
     - 2010s–2020s: AI integration, machine learning, collaborative robots (Cobots), autonomous drones & COVID-19 disinfection robots
  2. Classification of Modern Robots: Industrial, Service, Medical, Exploration, Military, Domestic
  3. Anatomy of an Intelligent Robot: Sensors (Perception) $\rightarrow$ Microcontroller/Computer (Decision) $\rightarrow$ Actuators (Action)
- **Lessons**:
  - Lesson 1.1: Historical Milestones from Hero of Alexandria to Unimate
  - Lesson 1.2: The Space & Surgical Robotics Revolution (1970–2000)
  - Lesson 1.3: Modern AI Robotics, Cobots & Autonomous Systems
  - Lesson 1.4: The Robotic Sense-Plan-Act Architecture
- **Activities**:
  - Interactive Historical Robotics Timeline Builder (10–70 AD to 2025)
  - Sense-Plan-Act Classification Matrix
- **Questions & Exercises**:
  - 10 MCQs (Hero of Alexandria invention, George Devol Unimate, Asimov's 1942 coining of robotics, NASA Sojourner, Sense-Plan-Act loop)
  - Short Answer Questions:
    - Who invented the Unimate robot and what was its first industrial job?
    - Explain the three core steps of the "Sense-Plan-Act" robotics cycle.

---

## Chapter 2: MICROCONTROLLERS (Pages 11–21)
- **Exact Chapter Name**: 2. MICROCONTROLLERS
- **Topics**:
  1. What is a Microcontroller (Single-chip computer containing CPU, RAM, Flash memory, Timers, and I/O pins)
  2. Microcontroller vs. Microprocessor (Dedicated embedded tasks vs general-purpose OS computers)
  3. Anatomy of Arduino (Arduino Uno / Nano / Mega):
     - Atmel ATmega328P microcontroller chip
     - Digital I/O Pins (Pins 0–13, High=5V, Low=0V)
     - PWM Pins (Pins 3, 5, 6, 9, 10, 11 with ~ symbol for analog output simulation)
     - Analog Input Pins (A0–A5, 10-bit ADC, reads 0–1023 values for 0–5V)
     - Power Pins: 5V, 3.3V, GND, Vin
     - USB Interface & Voltage Regulator (7–12V DC input)
     - Reset button and 16 MHz Quartz Crystal Oscillator
  4. Microcontroller Memory: Flash (stores program), SRAM (variables), EEPROM (non-volatile storage)
- **Lessons**:
  - Lesson 2.1: What is a Microcontroller & Embedded Computing
  - Lesson 2.2: Microcontroller vs Microprocessor Differences
  - Lesson 2.3: Arduino Board Architecture & Pinout Anatomy
  - Lesson 2.4: Digital I/O vs Analog Inputs & PWM Waves
- **Activities**:
  - Interactive Arduino Pinout Explorer (hover and test Digital, Analog, PWM, Power pins)
  - Microcontroller vs Microprocessor Feature Matcher
- **Models / Projects**:
  - **PROJECT 1 - LED Blink & Pattern Sequencer**: Connecting multiple LEDs to Arduino digital pins and writing timed strobe patterns.
- **Questions & Exercises**:
  - 10 MCQs (Microcontroller definition, ATmega328P chip, Analog pin count, ADC 10-bit resolution 0-1023, PWM purpose)
  - Short Answer Questions:
    - State two differences between a microcontroller and a microprocessor.
    - What is the function of the Analog Input pins (A0–A5) on an Arduino board?

---

## Chapter 3: ADVANCE SENSORS (Pages 22–41)
- **Exact Chapter Name**: 3. ADVANCE SENSORS
- **Topics**:
  1. Sensor Fundamentals: Transducers converting physical stimuli into electrical signals
  2. Ultrasonic Sensor (HC-SR04):
     - Working principle: Echolocation (sound waves at 40 kHz)
     - Pinout: VCC, Trig (Trigger pulse 10$\mu$s), Echo (receives bounced wave), GND
     - Distance Calculation Formula: $\text{Distance (cm)} = \frac{\text{Time in microseconds} \times 0.0343}{2}$
  3. Infrared (IR) Proximity & Obstacle Sensor:
     - IR Transmitter LED + Photodiode Receiver + LM393 Op-Amp Comparator
     - On-board sensitivity potentiometer adjustment
     - Surface reflectivity: White reflects IR light (Digital LOW/HIGH), Black absorbs IR light
  4. Passive Infrared (PIR) Motion Sensor: Pyroelectric sensor detecting human body infrared heat radiation
  5. DHT11 / DHT22 Sensor: Capacitive humidity sensor and thermistor for ambient temperature and relative humidity
  6. Sound Sensor (Microphone module with LM393 comparator)
- **Lessons**:
  - Lesson 3.1: Sensor Classification (Active vs Passive, Analog vs Digital)
  - Lesson 3.2: Ultrasonic HC-SR04 Echolocation & Distance Math
  - Lesson 3.3: Infrared (IR) Proximity & Line Detection Principles
  - Lesson 3.4: Environmental Sensors (PIR Motion & DHT11 Temp/Humidity)
- **Activities**:
  - Interactive HC-SR04 Ultrasonic Distance Meter Calculator
  - IR Sensor Surface Reflectivity Simulator (Black line vs White table)
- **Models / Projects**:
  - **PROJECT 1 - Smart Ultrasonic Intruder Alarm**: HC-SR04 distance scanner triggering buzzer when an object enters under 20cm range.
  - **PROJECT 2 - Touchless Smart Dustbin**: Servo motor opens lid when Ultrasonic sensor detects hand above 15cm.
- **Questions & Exercises**:
  - 10 MCQs (HC-SR04 sound frequency 40kHz, Distance formula division by 2 for round-trip, IR black absorption, PIR body heat detection, DHT11 measurements)
  - Short Answer Questions:
    - Why is the travel time divided by 2 in the ultrasonic distance formula?
    - How does an IR sensor distinguish between a white floor and a black line?

---

## Chapter 4: LINE FOLLOWING ROBOT (Pages 42–59)
- **Exact Chapter Name**: 4. LINE FOLLOWING ROBOT
- **Topics**:
  1. Concept of Autonomous Guided Vehicles (AGVs) & Line Followers in automated factories
  2. Hardware Components of a Line Follower:
     - Chassis and 2 DC Gearmotors with Castor Wheel (Differential drive)
     - Dual IR Sensor Array (Left IR Sensor, Right IR Sensor)
     - Motor Driver IC (L298N / L293D Dual H-Bridge module)
     - Microcontroller board & Power source
  3. Line Following Algorithm & Logic:
     - Both sensors on white: Move FORWARD
     - Left sensor on black, Right on white: Turn LEFT
     - Right sensor on black, Left on white: Turn RIGHT
     - Both sensors on black: STOP (or T-junction behavior)
  4. Motor Driver Wiring: IN1, IN2, IN3, IN4 directional pins and ENA/ENB PWM speed regulation
- **Lessons**:
  - Lesson 4.1: Anatomy of an Autonomous Line Following Robot
  - Lesson 4.2: Dual-Sensor Differential Steering Algorithm
  - Lesson 4.3: Motor Driver (L298N/L293D) Control Architecture
  - Lesson 4.4: Tuning, Calibration & Track Testing
- **Activities**:
  - Virtual Line Follower Track Simulator (Trace robot along curved and sharp 90-degree track)
  - 4-State Sensor Decision Logic Matrix
- **Robotics Models**:
  - **MODEL 1 - Dual-Sensor Autonomous Line Following Bot**: Complete 2WD differential robot chassis with front-mounted dual IR sensors, L298N driver, and Arduino controller.
- **Questions & Exercises**:
  - 10 MCQs (Line follower sensor type, Differential drive turns, Motor driver purpose, Left sensor black reaction, Castor wheel function)
  - Short Answer Questions:
    - Write down the 4 core movement rules for a 2-sensor line follower robot.
    - Why is a motor driver like L298N needed between the microcontroller and the DC motors?

---

## Chapter 5: WIRELESS CONTROL (Pages 60–76)
- **Exact Chapter Name**: 5. WIRELESS CONTROL
- **Topics**:
  1. Wireless Communication Technologies: Bluetooth, Wi-Fi, Zigbee, RF 433MHz
  2. Bluetooth Module (HC-05 / HC-06):
     - HC-05 (Master & Slave mode) vs HC-06 (Slave only)
     - Operating voltage: 3.3V logic (5V VCC power), TX/RX UART serial pins
     - Baud rate concepts (Default 9600 bps)
     - AT Command configuration mode
  3. UART Serial Communication (Transmitter TX to Receiver RX cross-connection)
  4. Smartphone-to-Robot Bluetooth Pairing and Control Commands ('F'=Forward, 'B'=Back, 'L'=Left, 'R'=Right, 'S'=Stop)
- **Lessons**:
  - Lesson 5.1: Wireless Communication Spectrum & Bluetooth Tech
  - Lesson 5.2: HC-05 & HC-06 Bluetooth Modules & Serial Protocol
  - Lesson 5.3: UART TX/RX Wiring & Voltage Dividers
  - Lesson 5.4: Mobile Command Packets & Robot Motion Control
- **Activities**:
  - Interactive UART TX-to-RX Signal Cross-Wiring Lab
  - Serial Command Packet Decoder ('F', 'B', 'L', 'R', 'S')
- **Robotics Models**:
  - **MODEL 1 - Smartphone Bluetooth Controlled Robotic Rover**: 4-wheel or 2-wheel chassis wired with HC-05 Bluetooth receiver executing remote mobile phone steering commands.
- **Questions & Exercises**:
  - 10 MCQs (HC-05 vs HC-06 difference, UART TX/RX cross-connection, Default baud rate 9600, Bluetooth operating frequency 2.4GHz, Single byte command execution)
  - Short Answer Questions:
    - Explain why the TX pin of the Bluetooth module connects to the RX pin of the microcontroller.
    - What is a Baud Rate in serial communication?

---

## Chapter 6: 3D DESIGNING (Pages 77–88)
- **Exact Chapter Name**: 6. 3D DESIGNING
- **Topics**:
  1. Computer-Aided Design (CAD) in Modern Engineering
  2. 3D Coordinate Systems (X-axis: Width, Y-axis: Depth, Z-axis: Height)
  3. Solid Modeling vs Parametric Modeling
  4. Advanced CAD Operations: Extrude, Revolve, Sweep, Loft, Fillet, Chamfer, Shell
  5. Designing for Robotics: Motor brackets, Sensor mounts, Chassis cutouts, Snap-fit joints, Hole tolerances (adding 0.2mm–0.4mm for screw fit)
  6. Exporting CAD Files: STL (Standard Tessellation Language) and OBJ formats for 3D slicing
- **Lessons**:
  - Lesson 6.1: 3D CAD Principles & Spatial Coordinate Systems
  - Lesson 6.2: Advanced CAD Features (Extrude, Revolve, Fillet & Chamfer)
  - Lesson 6.3: Designing Mechanical Mounts with Tolerance Offsets
  - Lesson 6.4: Exporting 3D Models for Digital Fabrication
- **Activities**:
  - 3D Extrusion & Fillet Transformation Studio
  - Mechanical Hole Tolerance Precision Calculator
- **Models / Projects**:
  - **PROJECT 1 - Custom Ultrasonic Sensor Mounting Bracket**: Parametric 3D CAD design tailored to snap-fit standard HC-SR04 eyes.
- **Questions & Exercises**:
  - 10 MCQs (CAD definition, 3 axes of 3D space, Fillet vs Chamfer, STL file meaning, 3D printing tolerances)
  - Short Answer Questions:
    - Why is it necessary to add tolerance offsets when designing screw holes for 3D printed parts?
    - What is the difference between Extruding a 2D sketch and Revolving it?

---

## Chapter 7: MIT APP INVENTOR (Pages 89–107)
- **Exact Chapter Name**: 7. MIT APP INVENTOR
- **Topics**:
  1. What is MIT App Inventor (Block-based cloud visual programming environment for Android apps)
  2. Designer View vs. Blocks Editor View:
     - **Designer View**: Palette (Buttons, Labels, Layouts, ListPicker), Viewer, Component Tree, Properties Panel
     - **Blocks Editor**: Logic, Math, Text, Lists, Control (if-then-else), Variables, Event Handlers (when Button.Click do...)
  3. Non-Visible Components: BluetoothClient, Clock, Notifier, TextToSpeech
  4. Building a Bluetooth Robot Controller App:
     - Designing UI with D-pad (Forward, Reverse, Left, Right, Stop) and Connect Button
     - ListPicker for scanning and connecting to HC-05 Bluetooth MAC addresses
     - Sending 1-byte character commands on touch down and 'S' on touch up
  5. Testing Apps Live: MIT AI2 Companion App via QR code / Wi-Fi
- **Lessons**:
  - Lesson 7.1: MIT App Inventor Interface & Mobile Development
  - Lesson 7.2: Designer UI Layouts & Non-Visible Components
  - Lesson 7.3: Blocks Editor Event-Driven Programming
  - Lesson 7.4: Developing a Full Bluetooth Robot Controller App
- **Activities**:
  - Interactive MIT App Inventor Block Assembler (snap together `when ButtonForward.TouchDown do call BluetoothClient.SendText 'F'`)
  - Mobile Robot Remote UI Layout Designer
- **Models / Projects**:
  - **PROJECT 1 - RoboController Android App**: Complete mobile app designed and coded to steer Bluetooth rovers with live feedback.
- **Questions & Exercises**:
  - 10 MCQs (MIT App Inventor creator, Designer vs Blocks editor, Event-driven concept, BluetoothClient component, AI2 Companion testing)
  - Short Answer Questions:
    - Describe the purpose of a non-visible component in MIT App Inventor.
    - How does the `when Button.TouchDown` and `when Button.TouchUp` event pattern allow smooth robot driving?

---

## Chapter 8: NOTES & GLOSSARY (Pages 108–140)
- **Exact Chapter Name**: 8. NOTES & GLOSSARY
- **Topics**: Comprehensive reference glossary covering 50+ definitions across robotics history, microcontrollers, sensors, line tracking, Bluetooth protocols, CAD, and App Inventor; sensor pinout quick reference.
