# RoboBox Learn — Class 5 Curriculum Map
*Source of Truth: `Robobox Textbook Std 5.pdf` (152 pages)*

---

## CLASS 5 OVERVIEW
- **Grade**: Class 5 (Standard 5)
- **Subject**: Robotics & Innovation (Practical STEM Learning)
- **Theme**: Electronics, Mechanism Engineering (Power Screw & Rack & Pinion), Remote Control & Tinkercad
- **Total Chapters**: 7 Core Learning Chapters + 1 Notebook & Glossary
- **Tagline**: Build • Experiment • Understand

---

## Chapter 1: INTRODUCTION TO ELECTRONICS (Pages 3–15)
- **Exact Chapter Name**: 1. INTRODUCTION TO ELECTRONICS
- **Topics**:
  1. What is Electronics (study of electron behavior, flow, and control under different conditions; everyday electronics)
  2. Basic Electronics Components:
     - **Breadboard**: Internal connections, horizontal power rails (red +, blue -), vertical middle columns, center IC isolation trench
     - **LED (Light Emitting Diode)**: Anode (+) longer lead, Cathode (-) shorter lead with flat edge, forward bias P-to-N conduction, energy efficiency
     - **Battery & Battery Boxes**: Chemical to electrical energy conversion, battery types (AA, AAA, 9V, Button cell, 12V), safety enclosures
     - **Connecting Wires & Jumpers**: Solid-core vs stranded wire, male-to-male, male-to-female jumper pins
     - **Multimeter**: Measuring Voltage (V), Current (I/Amperes), and Resistance ($\Omega$), continuity testing
     - **Conductors vs. Insulators**: Copper, silver, aluminum vs. plastic, rubber, wood
     - **Lab Safety**: Never short battery terminals, correct component polarities
- **Lessons**:
  - Lesson 1.1: What is Electronics & Electron Flow
  - Lesson 1.2: The Breadboard Anatomy & Internal Matrix
  - Lesson 1.3: LEDs & Battery Power Sources
  - Lesson 1.4: Multimeter & Circuit Testing Basics
- **Activities**:
  - Interactive Breadboard Matrix Simulator (connect LED + Resistor + Battery on breadboard)
  - Conductor vs Insulator Material Sorter
- **Models / Projects**:
  - First Breadboard Glow Station: Dual LED indicator circuit with power switch
- **Questions & Exercises**:
  - 10 MCQs (Electronics definition, Anode/Cathode polarity, Breadboard horizontal vs vertical rails, Multimeter functions, Battery types)
  - Short Answer Questions:
    - Why does an LED require a forward bias to emit light?
    - How do the power rails differ from the vertical columns on a breadboard?
    - Name three safety rules when handling 9V battery packs.

---

## Chapter 2: CIRCUITRY - I (Pages 16–24)
- **Exact Chapter Name**: 2. CIRCUITRY - I
- **Topics**:
  1. What is an Electrical Circuit (closed loop, power source, load, conductive path)
  2. Types of Circuits: Open, Closed, and Short Circuit
  3. Switches and Pushbuttons: SPST (Single Pole Single Throw), Normally Open (NO), Normally Closed (NC)
  4. Resistors & Ohm's Law Introduction:
     - Resistance concept (opposition to electric current flow)
     - Resistor color code bands (Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Gray, White)
     - Protecting LEDs with current-limiting resistors (220$\Omega$, 330$\Omega$, 1k$\Omega$)
  5. Series Circuits: Single path for current, current is identical through all components, total resistance $R_{total} = R_1 + R_2 + ...$
- **Lessons**:
  - Lesson 2.1: Anatomy of a Complete Electric Circuit
  - Lesson 2.2: Switches, Pushbuttons & Circuit States
  - Lesson 2.3: Resistors & Resistor Color Codes
  - Lesson 2.4: Series Circuit Mechanics & Total Resistance
- **Activities**:
  - Resistor Color Code Band Decoder
  - Series Circuit Voltage Drop Lab
- **Models / Projects**:
  - Series LED Light Strip: 3-LED daisy chain with tactile pushbutton control
- **Questions & Exercises**:
  - 10 MCQs (Closed vs open circuit, Short circuit dangers, Current limiting resistors, Series current properties, Switch types)
  - Short Answer Questions:
    - What happens to remaining bulbs in a series circuit if one bulb burns out?
    - How do you calculate total resistance in a series circuit with three 100$\Omega$ resistors?

---

## Chapter 3: CIRCUITRY - II (Pages 25–37)
- **Exact Chapter Name**: 3. CIRCUITRY - II
- **Topics**:
  1. Parallel Circuits: Multiple paths for current, voltage is identical across all branches, $\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2}$
  2. Series vs. Parallel Circuit Comparison (Home wiring vs simple flashlights)
  3. Buzzers (Active vs Passive Piezoelectric buzzers)
  4. Variable Resistors (Potentiometers & Rheostats): 3-pin rotary dial, volume/speed control
  5. Light Dependent Resistors (LDR / Photoresistors): Resistance decreases when light increases
  6. Automatic Light Sensor Circuit (LDR + Resistor + Transistor/LED)
- **Lessons**:
  - Lesson 3.1: Parallel Circuits & Independent Branching
  - Lesson 3.2: Series vs Parallel Comparison Matrix
  - Lesson 3.3: Buzzers & Acoustic Alarms
  - Lesson 3.4: Potentiometers & LDR Light Sensors
- **Activities**:
  - Automatic Night Lamp Simulator (LDR light threshold trigger)
  - Series vs Parallel Brightness Comparison Lab
- **Models / Projects**:
  - Smart Automatic Streetlight: LDR-activated night light with buzzer warning
- **Questions & Exercises**:
  - 10 MCQs (Parallel voltage characteristics, Home wiring advantages, LDR light sensitivity, Potentiometer wiper pin, Buzzer polarity)
  - Short Answer Questions:
    - Why are household appliances connected in parallel rather than in series?
    - How does an LDR's resistance change in bright daylight versus complete darkness?

---

## Chapter 4: POWER SCREW (Pages 38–58)
- **Exact Chapter Name**: 4. POWER SCREW
- **Topics**:
  1. Introduction to Power Screws (Mechanical device that converts rotational motion into linear motion with high mechanical advantage)
  2. Anatomy of a Power Screw: Thread pitch, Lead, Diameter, Screw shaft, Nut
  3. Thread Profiles: Square threads, Acme threads, Trapezoidal threads, Buttress threads
  4. Mechanical Advantage & Force Multiplication: Lifting heavy loads with minimal rotational effort
  5. Real-World Applications: Scissor jacks for lifting cars, lead screws in 3D printers, bench vises, CNC machines
  6. Scissor Lift Mechanism: Linked pantograph diamond structure driven by a central power screw
- **Lessons**:
  - Lesson 4.1: Power Screw Mechanics & Motion Conversion
  - Lesson 4.2: Thread Anatomy (Pitch, Lead, & Thread Forms)
  - Lesson 4.3: Mechanical Advantage & Load Capacity
  - Lesson 4.4: Scissor Lifts & Industrial Lifting Jacks
- **Activities**:
  - Interactive Thread Pitch & Lead Calculator
  - Scissor Lift Mechanical Advantage Simulator
- **Robotics Models**:
  - **MODEL 1 - Motorized Scissor Lift**: Pantograph scissor mechanism driven by a central lead screw and gearmotor to raise cargo platforms.
  - **MODEL 2 - Heavy-Duty Bench Vise Clamping Rig**: Rotary power screw clamping mechanism.
- **Questions & Exercises**:
  - 10 MCQs (Rotary to linear conversion, Thread pitch definition, Acme thread applications, Scissor jack physics, Mechanical advantage)
  - Short Answer Questions:
    - Define pitch and lead of a power screw.
    - Explain why a power screw allows a single person to lift a heavy car.

---

## Chapter 5: RACK & PINION (Pages 59–89)
- **Exact Chapter Name**: 5. RACK & PINION
- **Topics**:
  1. Introduction to Rack and Pinion:
     - Pinion: Cylindrical gear that rotates
     - Rack: Flat, toothed linear bar
     - Converting rotational motion to continuous linear motion and vice versa
  2. Engineering Geometry: Pitch circle, Module, Tooth profile meshing
  3. Applications of Rack & Pinion:
     - Automotive steering systems (Steering wheel rotates pinion $\rightarrow$ moves rack left/right $\rightarrow$ turns wheels)
     - Railway mountain rack trains (funiculars)
     - Machine tool beds & CNC gantries
     - Automated sliding gates and elevator doors
  4. Robotics Gripper Mechanics: Dual rack mechanism driven by single pinion for symmetrical gripper jaws
- **Lessons**:
  - Lesson 5.1: Fundamentals of Rack & Pinion Mechanics
  - Lesson 5.2: Kinematics & Linear Travel per Revolution ($\text{Distance} = \pi \times D$)
  - Lesson 5.3: Automotive Steering Mechanism
  - Lesson 5.4: Robotic Rack & Pinion Gripper Jaws
- **Activities**:
  - Interactive Car Steering Simulator (Turn steering wheel $\rightarrow$ Pinion moves Rack $\rightarrow$ Front tie rods steer)
  - Rack Travel vs Pinion Teeth Calculator
- **Robotics Models**:
  - **MODEL 1 - Automotive Rack & Pinion Steering Chassis**: Working 4-wheel steerable vehicle chassis with functional steering column and rack mechanism.
  - **MODEL 2 - Motorized Linear Slide Crane**: Vertical tower lift utilizing a vertical rack gear and motor-driven pinion gear.
- **Questions & Exercises**:
  - 10 MCQs (Pinion definition, Rack linear motion, Car steering mechanism, Gear module, Linear displacement formula)
  - Short Answer Questions:
    - Describe how a car steering system converts steering wheel rotation into wheel angle changes.
    - If a pinion gear has a pitch diameter of 20mm, calculate the linear displacement of the rack for one full revolution.

---

## Chapter 6: REMOTE CONTROL (Pages 90–106)
- **Exact Chapter Name**: 6. REMOTE CONTROL
- **Topics**:
  1. Introduction to Remote Control Systems (Transmitter TX and Receiver RX)
  2. Communication Mediums: Infrared (IR) vs Radio Frequency (RF, 2.4 GHz)
  3. Multi-Channel Controllers: 2-Channel, 4-Channel, 6-Channel controls (Forward/Reverse, Left/Right steering)
  4. Motor Drivers & H-Bridge Circuits:
     - Controlling DC motor direction via polarity switching
     - Transistor H-Bridge switches (Forward, Reverse, Brake, Coast)
  5. Building and Wiring an RC Vehicle: Receiver module, Battery pack, Dual DC gearmotors, Steering mechanism
- **Lessons**:
  - Lesson 6.1: Transmitter (TX) & Receiver (RX) Fundamentals
  - Lesson 6.2: IR vs RF Wireless Signals
  - Lesson 6.3: H-Bridge Motor Control & Polarity Reversal
  - Lesson 6.4: Full RC Vehicle Assembly & Antenna Tuning
- **Activities**:
  - Virtual 4-Channel Remote Controller & H-Bridge Simulator
  - RF vs IR Signal Range & Line-of-Sight Tester
- **Robotics Models**:
  - **MODEL 1 - 4-Channel Wireless Remote-Controlled Rover**: Dual-motor differential drive or rack-steered RC car with wireless receiver and battery harness.
- **Questions & Exercises**:
  - 10 MCQs (Transmitter vs receiver, RF 2.4GHz benefits, H-Bridge operation, Channel functions, Motor polarity reversal)
  - Short Answer Questions:
    - Why is Radio Frequency (RF) preferred over Infrared (IR) for outdoor remote-controlled cars?
    - Explain how an H-Bridge circuit reverses the rotation direction of a DC motor.

---

## Chapter 7: TINKERCAD (Pages 107–119)
- **Exact Chapter Name**: 7. TINKERCAD
- **Topics**:
  1. What is Tinkercad (Autodesk cloud-based 3D modeling and circuit simulation platform)
  2. 3D Design Workspace: Workplane, Basic Shapes (Box, Cylinder, Sphere, Wedge, Roof), Navigating the ViewCube
  3. Transformations: Move, Scale (proportional with Shift), Rotate, Align, Group, and Ungroup
  4. Solid vs. Hole Shapes (Creating cutouts and hollow 3D parts)
  5. Tinkercad Circuits Environment: Adding batteries, breadboards, LEDs, resistors, multimeters, and simulated pushbuttons
  6. Virtual Circuit Simulation: Running simulations, measuring current/voltage, testing logic before hardware building
- **Lessons**:
  - Lesson 7.1: Getting Started with Autodesk Tinkercad
  - Lesson 7.2: 3D Shapes, Alignment, Grouping & Hole Cutting
  - Lesson 7.3: Tinkercad Circuits & Virtual Component Library
  - Lesson 7.4: Simulating Electronic Circuits in Tinkercad
- **Activities**:
  - Interactive 3D Shape Grouping & Hollow Box Challenge
  - Virtual Tinkercad Breadboard Circuit Builder
- **Models / Projects**:
  - **PROJECT 1 - Custom 3D Robot Chassis Design**: 3D model designed in Tinkercad with motor mounts and sensor brackets.
  - **PROJECT 2 - Virtual Traffic Light Circuit**: 3-LED simulated circuit with push-to-start timing.
- **Questions & Exercises**:
  - 10 MCQs (Tinkercad purpose, ViewCube navigation, Hole shape function, Grouping shortcut, Virtual circuit simulator)
  - Short Answer Questions:
    - How do you create a hollow cylinder or hole in an object using Tinkercad 3D Design?
    - Name three advantages of simulating a circuit in Tinkercad before wiring real components.

---

## Chapter 8: NOTEBOOK & GLOSSARY (Pages 120–152)
- **Exact Chapter Name**: 8. NOTEBOOK & GLOSSARY
- **Topics**: Comprehensive glossary of 45+ terms across electronics, mechanisms, remote control, and 3D design; circuit symbols chart; safety guidelines.
