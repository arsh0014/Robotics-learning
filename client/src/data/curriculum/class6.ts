import { Chapter, GlossaryTerm, Badge } from '../../types/curriculum';

export const class6Chapters: Chapter[] = [
  {
    id: "c6-ch-1",
    classId: "class-6",
    number: 1,
    title: "Innovation in Robotics",
    tagline: "History, Evolution from Ancient Automata to Modern AI Cobots",
    color: "#0284C7",
    iconName: "Cpu",
    lessons: [
      {
        id: "c6-l1-1",
        chapterId: "c6-ch-1",
        order: 1,
        title: "Ancient Automata to Industrial Birth",
        subtitle: "From Hero of Alexandria to George Devol's Unimate",
        summary: "The dream of automated machines began in antiquity with Hero of Alexandria (10–70 AD), who engineered programmable mechanical water theatres. In 1942, Isaac Asimov coined the term 'Robotics' and introduced the Three Laws. In 1954, George Devol patented the first industrial programmable robot, 'Unimate', deployed in 1961 by General Motors for die-casting.",
        keyPoints: [
          "Hero of Alexandria (10–70 AD) built early programmable carts with falling weights and ropes.",
          "Isaac Asimov (1942) formulated the Three Laws of Robotics in his story 'Runaround'.",
          "George Devol and Joseph Engelberger created Unimate, launching the modern robotics industry."
        ],
        illustrationType: "c6_robotics_history"
      },
      {
        id: "c6-l1-2",
        chapterId: "c6-ch-1",
        order: 2,
        title: "Space Exploration & Surgical Robotics",
        subtitle: "Planetary rovers on Mars and da Vinci precision surgeries",
        summary: "Between 1970 and 2000, robots conquered extreme environments. NASA landed the Sojourner rover on Mars in 1997, paving the way for Spirit, Opportunity, Curiosity, and Perseverance. In hospitals, minimally invasive surgical robots (like the da Vinci system) enabled surgeons to perform microscopic incisions with zero hand tremors.",
        keyPoints: [
          "NASA Mars rovers operate millions of kilometers away using autonomous obstacle navigation.",
          "Surgical robots translate doctor finger motions into microscopic 360° robotic wrist rotations.",
          "Robots thrive in dangerous environments: nuclear plants, deep oceans, and outer space."
        ],
        illustrationType: "c6_space_surgical"
      },
      {
        id: "c6-l1-3",
        chapterId: "c6-ch-1",
        order: 3,
        title: "Artificial Intelligence & Cobots",
        subtitle: "Collaborative robots and machine learning perception",
        summary: "In the 2010s–2020s, robots transitioned from isolated caged factory machines to Collaborative Robots (Cobots) equipped with force sensors that work safely alongside human workers. During the COVID-19 pandemic, autonomous disinfection and delivery robots sanitized hospitals. Today, AI enables robots to recognize objects, understand voice, and adapt dynamically.",
        keyPoints: [
          "Cobots feature rounded edges and sensitive force limiters to prevent human injury.",
          "Computer vision and deep learning allow robots to identify and sort complex parts.",
          "Autonomous Mobile Robots (AMRs) navigate warehouses using LiDAR laser mapping."
        ],
        illustrationType: "c6_ai_cobots"
      },
      {
        id: "c6-l1-4",
        chapterId: "c6-ch-1",
        order: 4,
        title: "The Sense-Plan-Act Architecture",
        subtitle: "The three core feedback stages of every autonomous machine",
        summary: "All autonomous robots operate on a continuous loop: 1. SENSE (Sensors collect data from the physical world: light, sound, distance), 2. PLAN (Microcontroller or computer processes sensor data and decides the best action), 3. ACT (Actuators like motors and servos execute the motion). This loop repeats hundreds of times every second.",
        keyPoints: [
          "SENSE: Ultrasonic, IR, cameras, gyroscopes convert physical stimuli to electrical signals.",
          "PLAN: Control algorithms analyze sensor values and compute desired outputs.",
          "ACT: DC motors, stepper motors, and grippers execute mechanical movement in the environment."
        ],
        illustrationType: "c6_sense_plan_act"
      }
    ],
    activities: [
      {
        id: "c6-act-1",
        chapterId: "c6-ch-1",
        title: "Interactive Historical Robotics Timeline & Architecture Sorter",
        type: "c6_activity_timeline",
        description: "Arrange historic robotics milestones chronologically from 10 AD to 2025, then categorize components into the Sense-Plan-Act framework.",
        instructions: [
          "Place Hero of Alexandria, Unimate, Asimov's Laws, and Mars Sojourner in order.",
          "Inspect robot parts (HC-SR04, Arduino Uno, DC Motor, Camera, Servo).",
          "Drag each part into its correct bucket: SENSE, PLAN, or ACT!",
          "Test the live automated loop and check your accuracy score."
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c6-mod-1",
        chapterId: "c6-ch-1",
        title: "Autonomous Sense-Plan-Act Desktop Rover",
        subtitle: "Modular rover demonstrating the fundamental robotic control loop",
        description: "Assemble a dual-level robotic chassis integrating front tactile bump sensors (Sense), an Arduino microcontroller brain (Plan), and dual DC gearmotors (Act).",
        parts: [
          { name: "Acrylic Base Chassis Platform", count: 1 },
          { name: "Front Micro-Limit Switches (Tactile Bumpers)", count: 2 },
          { name: "Arduino Uno R3 Microcontroller", count: 1 },
          { name: "Dual H-Bridge Motor Driver Board", count: 1 },
          { name: "Geared DC Motors with Wheels", count: 2 },
          { name: "Front Swivel Caster", count: 1 },
          { name: "4xAA Battery Enclosure with Switch", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount the two DC gearmotors to the underside of the main chassis deck." },
          { stepNumber: 2, instruction: "Fix the front ball caster to provide a balanced 3-point support geometry." },
          { stepNumber: 3, instruction: "Install the tactile whisker bump switches on the front left and right bumpers." },
          { stepNumber: 4, instruction: "Mount the Arduino Uno brain in the center and wire the bump switches to digital inputs." },
          { stepNumber: 5, instruction: "Connect motor driver outputs to the left and right wheels." },
          { stepNumber: 6, instruction: "Turn on the rover: observe it drive forward until a bumper hits a wall, causing it to reverse, pivot, and navigate away!" }
        ],
        xpReward: 130
      }
    ],
    quiz: [
      {
        id: "c6-q1-1",
        chapterId: "c6-ch-1",
        question: "Who patented the first programmable industrial robot 'Unimate' in 1954?",
        options: ["George Devol", "Isaac Asimov", "Thomas Edison", "Nikola Tesla"],
        correctAnswer: 0,
        explanation: "George Devol patented Unimate in 1954 and partnered with Joseph Engelberger to install it at General Motors in 1961."
      },
      {
        id: "c6-q1-2",
        chapterId: "c6-ch-1",
        question: "In the fundamental robotics cycle, what are the three steps in order?",
        options: ["Sense → Plan → Act", "Act → Sleep → Charge", "Speak → Listen → Turn", "Assemble → Disassemble → Store"],
        correctAnswer: 0,
        explanation: "Every autonomous robot constantly senses the environment, plans a decision in software, and acts through physical motors."
      },
      {
        id: "c6-q1-3",
        chapterId: "c6-ch-1",
        question: "What makes a 'Cobot' (Collaborative Robot) distinct from older industrial robots?",
        options: ["It has sensitive force-limiting safety sensors allowing it to work safely alongside humans without cages", "It only speaks English", "It does not use electricity", "It has no computer"],
        correctAnswer: 0,
        explanation: "Cobots are designed with safety sensors and gentle compliance to collaborate directly in human work cells."
      },
      {
        id: "c6-q1-4",
        chapterId: "c6-ch-1",
        question: "What was NASA's first wheeled robotic rover to explore the surface of Mars in 1997?",
        options: ["Sojourner", "Apollo 11", "Voyager", "Sputnik"],
        correctAnswer: 0,
        explanation: "The microwave-sized Sojourner rover was delivered by the Mars Pathfinder lander on July 4, 1997."
      },
      {
        id: "c6-q1-5",
        chapterId: "c6-ch-1",
        question: "Which component represents the 'PLAN' stage of a robotic system?",
        options: ["The microcontroller or computer CPU", "The rubber wheel", "The ultrasonic transmitter horn", "The AA battery pack"],
        correctAnswer: 0,
        explanation: "The microcontroller executes the programmed logic and decision algorithms, representing the central planning brain."
      }
    ],
    writtenQuestions: [
      {
        id: "c6-wq1-1",
        chapterId: "c6-ch-1",
        question: "Explain why industrial robots were historically kept inside wire safety cages, and how modern Cobots changed this.",
        sampleAnswer: "Traditional heavy industrial robots moved blindly at high speeds with massive momentum and could injure workers who entered their path. Modern Cobots incorporate torque sensors at every joint that instantly halt motion upon detecting the slightest unexpected human contact."
      },
      {
        id: "c6-wq1-2",
        chapterId: "c6-ch-1",
        question: "Give an example of the Sense-Plan-Act architecture in an autonomous robotic vacuum cleaner.",
        sampleAnswer: "Sense: Infrared bumper and cliff sensors detect an upcoming downward staircase. Plan: Microcontroller algorithm determines that continuing forward will cause a fall and calculates a 90-degree reverse turn. Act: Drive motors rotate the left wheel backwards and right wheel forward to turn away from the edge."
      }
    ],
    funFacts: [
      { id: "c6-ff-1", text: "The word 'robot' comes from the Czech word 'robota', meaning forced labor, introduced in Karel Čapek's 1920 play R.U.R.!" },
      { id: "c6-ff-2", text: "NASA's Curiosity rover on Mars sings 'Happy Birthday' to itself every August 5 using its sample analysis vibration motors." }
    ]
  },
  {
    id: "c6-ch-2",
    classId: "class-6",
    number: 2,
    title: "Microcontrollers",
    tagline: "Architecture, Pinouts, Digital I/O, Analog ADC & PWM",
    color: "#2563EB",
    iconName: "Compass",
    lessons: [
      {
        id: "c6-l2-1",
        chapterId: "c6-ch-2",
        order: 1,
        title: "What is a Microcontroller & Embedded Systems",
        subtitle: "A complete computer integrated onto a single silicon chip",
        summary: "A microcontroller is a compact integrated circuit designed to govern a specific operation in an embedded system. Unlike a general-purpose desktop computer, a microcontroller contains a Central Processing Unit (CPU), Flash program memory, SRAM data memory, and programmable Input/Output (I/O) peripherals all fabricated onto a single microchip.",
        keyPoints: [
          "Microcontrollers are dedicated to running a single real-time control program continuously.",
          "Found inside washing machines, car engine ECUs, microwave ovens, drones, and robots.",
          "Low power consumption, instant boot-up, and direct hardware pin control."
        ],
        illustrationType: "c6_microcontroller_intro"
      },
      {
        id: "c6-l2-2",
        chapterId: "c6-ch-2",
        order: 2,
        title: "Microcontroller vs. Microprocessor",
        subtitle: "Embedded dedicated controllers vs multi-purpose operating system CPUs",
        summary: "A Microprocessor (like Intel Core or ARM Cortex-A) contains only the CPU arithmetic logic units; it requires external RAM, external hard storage, and graphics controllers to function. A Microcontroller (like ATmega328P or RP2040) is an all-in-one computer-on-a-chip optimized for low-cost, low-power physical device control.",
        keyPoints: [
          "Microprocessor: High clock speed (GHz), complex OS (Windows/Linux), external memory.",
          "Microcontroller: Moderate clock speed (16–240 MHz), bare-metal firmware, on-chip memory.",
          "Robots use microcontrollers for real-time sensor reading and millisecond motor timing."
        ],
        illustrationType: "c6_mcu_vs_mpu"
      },
      {
        id: "c6-l2-3",
        chapterId: "c6-ch-2",
        order: 3,
        title: "Arduino Board Architecture & Pin Mapping",
        subtitle: "Digital I/O, Analog inputs, Power rails, and the ATmega328P chip",
        summary: "The Arduino Uno is powered by the 8-bit ATmega328P microcontroller running at 16 MHz. It features 14 Digital I/O Pins (Pins 0–13), 6 Analog Input Pins (A0–A5), Power supply pins (5V, 3.3V, GND, Vin), a USB interface, a reset button, and an ICSP header.",
        keyPoints: [
          "Digital Pins 0–13: Can be configured as INPUT (reading 0V/5V) or OUTPUT (supplying 5V at up to 20mA).",
          "Pins 0 (RX) and 1 (TX) handle hardware serial communication with computers.",
          "Built-in LED is internally wired to Digital Pin 13."
        ],
        illustrationType: "c6_arduino_architecture"
      },
      {
        id: "c6-l2-4",
        chapterId: "c6-ch-2",
        order: 4,
        title: "Analog Inputs (ADC) & PWM Waves",
        subtitle: "10-bit analog conversion and simulated analog voltage modulation",
        summary: "Microcontrollers think in 1s and 0s. To read smooth real-world signals (like temperature or light), the Arduino uses a 10-bit Analog-to-Digital Converter (ADC) across pins A0–A5, converting 0V–5V into numbers from 0 to 1023. To output variable power, it uses Pulse Width Modulation (PWM) on pins with the tilde symbol (~: Pins 3, 5, 6, 9, 10, 11), pulsing 5V rapidly with varying duty cycles (0–255).",
        keyPoints: [
          "10-bit ADC resolution: 5V / 1024 steps = ~4.9 millivolts per unit value.",
          "PWM Duty Cycle: 0% = 0V equivalent (OFF), 50% = 2.5V equivalent, 100% = 5V full power.",
          "PWM is used to regulate motor speeds and fade LED brightness smoothly."
        ],
        illustrationType: "c6_adc_pwm"
      }
    ],
    activities: [
      {
        id: "c6-act-2",
        chapterId: "c6-ch-2",
        title: "Interactive Arduino Pinout & PWM Oscilloscope Lab",
        type: "c6_activity_arduino_pinout",
        description: "Explore the live Arduino board pinout, adjust a potentiometer connected to A0, watch the 10-bit ADC register change from 0 to 1023, and inspect the PWM wave on pin 9.",
        instructions: [
          "Hover over Digital, Analog, Power, and Serial pins to learn their hardware limits.",
          "Rotate the potentiometer dial to vary analog input voltage between 0V and 5.0V.",
          "Observe the ADC register map the voltage to raw integer values (0 to 1023).",
          "Slide the PWM Duty Cycle fader and watch the oscilloscope square wave pulse widen!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c6-mod-2",
        chapterId: "c6-ch-2",
        title: "Programmable RGB Mood Light Station",
        subtitle: "Arduino-controlled tri-color LED utilizing 3-channel PWM modulation",
        description: "Wire a common-cathode RGB LED to three PWM pins of an Arduino Uno to blend primary colors and create a smooth cycling multi-color mood light.",
        parts: [
          { name: "Arduino Uno R3 with USB Cable", count: 1 },
          { name: "Half-size Breadboard", count: 1 },
          { name: "Common-Cathode 5mm RGB LED", count: 1 },
          { name: "220Ω Resistors (Red, Green, Blue lines)", count: 3 },
          { name: "Jumper Wires (Male-to-Male)", count: 5 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Insert the 4-pin RGB LED into the breadboard (longest pin is the common cathode ground)." },
          { stepNumber: 2, instruction: "Connect the common cathode pin directly to an Arduino GND pin." },
          { stepNumber: 3, instruction: "Connect 220Ω resistors to the Red (pin 9), Green (pin 10), and Blue (pin 11) PWM pins." },
          { stepNumber: 4, instruction: "Upload the color cycling sketch via Arduino IDE." },
          { stepNumber: 5, instruction: "Observe the three PWM channels mix Red, Green, and Blue duty cycles to generate Violet, Cyan, Yellow, and White light!" }
        ],
        xpReward: 130
      }
    ],
    quiz: [
      {
        id: "c6-q2-1",
        chapterId: "c6-ch-2",
        question: "What main chip serves as the microcontroller brain of the Arduino Uno?",
        options: ["ATmega328P", "Intel Core i7", "Nvidia RTX", "AMD Ryzen"],
        correctAnswer: 0,
        explanation: "The Arduino Uno is powered by the Atmel/Microchip ATmega328P 8-bit AVR microcontroller."
      },
      {
        id: "c6-q2-2",
        chapterId: "c6-ch-2",
        question: "What is the numeric range returned by the Arduino's 10-bit Analog-to-Digital Converter (ADC)?",
        options: ["0 to 1023", "0 to 100", "0 to 255", "1 to 10"],
        correctAnswer: 0,
        explanation: "A 10-bit ADC has 2^10 = 1024 discrete steps, returning values from 0 (for 0V) to 1023 (for 5V)."
      },
      {
        id: "c6-q2-3",
        chapterId: "c6-ch-2",
        question: "Which symbol on an Arduino board identifies pins capable of Pulse Width Modulation (PWM)?",
        options: ["Tilde (~)", "Asterisk (*)", "Plus (+)", "Hash (#)"],
        correctAnswer: 0,
        explanation: "Pins 3, 5, 6, 9, 10, and 11 have a tilde (~) symbol marking their hardware PWM timer output capability."
      },
      {
        id: "c6-q2-4",
        chapterId: "c6-ch-2",
        question: "What is the clock speed of the standard Arduino Uno crystal oscillator?",
        options: ["16 MHz", "3 GHz", "50 Hz", "100 kHz"],
        correctAnswer: 0,
        explanation: "The silver quartz crystal on an Arduino Uno runs at 16 MHz, executing 16 million clock cycles per second."
      },
      {
        id: "c6-q2-5",
        chapterId: "c6-ch-2",
        question: "What is the key structural difference between a microcontroller and a microprocessor?",
        options: ["A microcontroller contains CPU, RAM, and ROM integrated on one chip, while a microprocessor needs external chips", "Microprocessors are made of wood", "Microcontrollers only work underwater", "There is no difference"],
        correctAnswer: 0,
        explanation: "Microcontrollers are self-contained systems-on-a-chip designed for embedded control without external memory."
      }
    ],
    writtenQuestions: [
      {
        id: "c6-wq2-1",
        chapterId: "c6-ch-2",
        question: "Explain how Pulse Width Modulation (PWM) creates the illusion of an analog output voltage using digital signals.",
        sampleAnswer: "A digital pin can only output 0V or 5V. PWM switches the pin between 0V and 5V thousands of times per second. By varying the 'duty cycle' (the percentage of time the signal spends at 5V versus 0V), the connected device experiences an average equivalent analog voltage."
      },
      {
        id: "c6-wq2-2",
        chapterId: "c6-ch-2",
        question: "Why can you not connect a high-current DC motor directly to an Arduino I/O pin?",
        sampleAnswer: "An Arduino digital pin has an absolute maximum current rating of 40mA (20mA recommended). A small DC motor draws between 200mA to over 1000mA under load; connecting it directly would burn out the microcontroller's internal output transistors."
      }
    ],
    funFacts: [
      { id: "c6-ff-3", text: "The Apollo 11 Lunar Module guidance computer had less processing power and RAM than a standard $5 Arduino Uno!" },
      { id: "c6-ff-4", text: "Over 30 billion microcontrollers are manufactured every year—outnumbering the human population four times over!" }
    ]
  },
  {
    id: "c6-ch-3",
    classId: "class-6",
    number: 3,
    title: "Advance Sensors",
    tagline: "Ultrasonic Echolocation, IR Proximity, PIR Motion & DHT11",
    color: "#059669",
    iconName: "Eye",
    lessons: [
      {
        id: "c6-l3-1",
        chapterId: "c6-ch-3",
        order: 1,
        title: "Sensor Classification & Physics",
        subtitle: "Active vs Passive, Analog vs Digital transducers",
        summary: "Sensors are electronic eyes and ears that convert physical phenomena (heat, sound, light, distance) into electrical voltages. Active sensors emit their own energy (like ultrasonic sound or infrared light) and measure the reflection. Passive sensors detect existing environmental energy (like temperature or ambient light).",
        keyPoints: [
          "Transducers: Devices that transform energy from one physical form into electrical signals.",
          "Digital Sensors: Output high/low pulses or digital communication packets (I2C/SPI/UART).",
          "Analog Sensors: Output a continuous smooth voltage proportional to physical stimuli."
        ],
        illustrationType: "c6_sensor_physics"
      },
      {
        id: "c6-l3-2",
        chapterId: "c6-ch-3",
        order: 2,
        title: "Ultrasonic HC-SR04 & Echolocation Math",
        subtitle: "Using 40 kHz sound waves to calculate distance with high precision",
        summary: "The HC-SR04 ultrasonic sensor uses bats' echolocation principle. The Trigger pin emits an ultrasonic sound burst (8 pulses at 40 kHz). The sound waves travel through the air, strike an obstacle, and bounce back to the Echo receiver. Because speed of sound in air is ~343 m/s (0.0343 cm/μs), Distance = (Time in μs × 0.0343) / 2.",
        keyPoints: [
          "Operating frequency: 40,000 Hz (above human hearing limit of 20 kHz).",
          "Detection range: 2 cm to 400 cm with 3mm accuracy.",
          "Time must be divided by 2 because the sound wave travels round-trip (to obstacle and back)."
        ],
        illustrationType: "c6_ultrasonic_math"
      },
      {
        id: "c6-l3-3",
        chapterId: "c6-ch-3",
        order: 3,
        title: "Infrared (IR) Proximity & Line Detection",
        subtitle: "IR transmitter LED, photodiode receiver, and surface reflectivity",
        summary: "An IR sensor module features an IR LED that emits invisible infrared light and a photodiode receiver paired with an LM393 comparator chip. Light-colored surfaces reflect IR light back into the photodiode (Output LOW), while dark or black surfaces absorb IR light (Output HIGH). A trimmer potentiometer adjusts detection distance.",
        keyPoints: [
          "White surfaces reflect infrared; matte black surfaces absorb infrared light.",
          "Used universally for line-following robots and tabletop cliff edge detectors.",
          "Onboard comparator LM393 provides a clean digital 0 or 1 output."
        ],
        illustrationType: "c6_ir_sensor"
      },
      {
        id: "c6-l3-4",
        chapterId: "c6-ch-3",
        order: 4,
        title: "Environmental Sensors: PIR & DHT11",
        subtitle: "Detecting human body thermal radiation and ambient climate parameters",
        summary: "A Passive Infrared (PIR) sensor contains pyroelectric crystals beneath a Fresnel dome lens that detect shifting infrared heat radiation emitted by warm living bodies (humans and pets). A DHT11 sensor combines a capacitive humidity sensor and NTC thermistor with an internal chip, transmitting temperature and relative humidity over a single data pin.",
        keyPoints: [
          "PIR detects motion of infrared heat sources, ideal for security systems and automatic lights.",
          "Fresnel lens segments the field of view into alternating detection zones.",
          "DHT11 measures temperature from 0°C to 50°C and humidity from 20% to 90% RH."
        ],
        illustrationType: "c6_pir_dht11"
      }
    ],
    activities: [
      {
        id: "c6-act-3",
        chapterId: "c6-ch-3",
        title: "Interactive Ultrasonic Distance Calculator & Radar Scanner",
        type: "c6_activity_sensor_lab",
        description: "Move a virtual obstacle towards and away from an HC-SR04 sensor, inspect the echo microsecond pulse width on an oscilloscope, and verify distance math.",
        instructions: [
          "Drag the obstacle from 50cm down to 5cm.",
          "Read the echo pulse duration in microseconds (e.g. 2915 μs).",
          "Apply the formula: Distance = (Time × 0.0343) / 2.",
          "Trigger the automatic collision zone warning buzzer under 15cm!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c6-mod-3",
        chapterId: "c6-ch-3",
        title: "Smart Touchless Dustbin with Servo Lid",
        subtitle: "Automated sanitary trash can opened by ultrasonic hand detection",
        description: "Build an automated sanitary waste bin using an HC-SR04 ultrasonic sensor, SG90 servo motor, and Arduino Uno to automatically raise the bin lid when a hand approaches.",
        parts: [
          { name: "Arduino Uno", count: 1 },
          { name: "Ultrasonic Sensor (HC-SR04)", count: 1 },
          { name: "SG90 Micro Servo Motor", count: 1 },
          { name: "Miniature Desktop Dustbin with Hinged Lid", count: 1 },
          { name: "Breadboard and Jumper Wires", count: 8 },
          { name: "9V Power Adapter / Battery", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount the HC-SR04 sensor on the front face of the bin facing outwards." },
          { stepNumber: 2, instruction: "Attach the servo motor horn to the hinge mechanism of the bin lid." },
          { stepNumber: 3, instruction: "Connect Trigger to pin 7, Echo to pin 8, and Servo signal to PWM pin 9." },
          { stepNumber: 4, instruction: "Program Arduino: if distance < 20cm, rotate servo to 90° (Lid OPEN)." },
          { stepNumber: 5, instruction: "Wait 4 seconds, then gently rotate servo back to 0° (Lid CLOSED)." },
          { stepNumber: 6, instruction: "Test with your hand: enjoy hygienic, completely touchless waste disposal!" }
        ],
        xpReward: 140
      }
    ],
    quiz: [
      {
        id: "c6-q3-1",
        chapterId: "c6-ch-3",
        question: "Why must the travel time be divided by 2 when calculating distance with an ultrasonic sensor?",
        options: ["Because sound travels out to the obstacle and then bounces back (round-trip)", "Because computers only understand even numbers", "Because the sensor has two eyes", "Because sound moves at half speed in air"],
        correctAnswer: 0,
        explanation: "The measured echo pulse duration represents the time taken for sound to travel to the target AND return to the receiver."
      },
      {
        id: "c6-q3-2",
        chapterId: "c6-ch-3",
        question: "What is the ultrasonic frequency emitted by the HC-SR04 transmitter?",
        options: ["40 kHz", "50 Hz", "2.4 GHz", "100 MHz"],
        correctAnswer: 0,
        explanation: "The transducer vibrates at 40 kHz (40,000 cycles per second), well above the human audible limit of 20 kHz."
      },
      {
        id: "c6-q3-3",
        chapterId: "c6-ch-3",
        question: "How does a standard IR obstacle sensor react when placed over a dark black strip on a white floor?",
        options: ["Black absorbs the IR beam, so the receiver photodiode detects no reflected light", "The sensor catches fire", "Black reflects twice as much light as white", "The sensor measures humidity"],
        correctAnswer: 0,
        explanation: "Black pigments absorb infrared radiation, preventing light from reflecting back into the photodiode receiver."
      },
      {
        id: "c6-q3-4",
        chapterId: "c6-ch-3",
        question: "What physical stimulus does a Passive Infrared (PIR) sensor detect?",
        options: ["Shifting infrared thermal radiation from living warm bodies", "Ultrasonic echoes", "Magnetic fields", "Wind vibrations"],
        correctAnswer: 0,
        explanation: "PIR sensors contain pyroelectric sensors tuned to detect the 8-14 micrometer infrared heat waves naturally radiated by mammals."
      },
      {
        id: "c6-q3-5",
        chapterId: "c6-ch-3",
        question: "What two climate parameters are measured by a DHT11 sensor?",
        options: ["Temperature and Relative Humidity", "Wind speed and atmospheric pressure", "Rainfall and ozone", "Sound and light"],
        correctAnswer: 0,
        explanation: "The DHT11 contains an NTC thermistor for temperature and a capacitive polymer sensor for relative humidity."
      }
    ],
    writtenQuestions: [
      {
        id: "c6-wq3-1",
        chapterId: "c6-ch-3",
        question: "Calculate the distance to an obstacle if an HC-SR04 ultrasonic sensor measures an echo return pulse of 1000 microseconds (use speed of sound = 0.0343 cm/μs).",
        sampleAnswer: "Distance = (Time × Speed) / 2 = (1000 μs × 0.0343 cm/μs) / 2 = 34.3 / 2 = 17.15 cm."
      },
      {
        id: "c6-wq3-2",
        chapterId: "c6-ch-3",
        question: "Explain the purpose of the dome-shaped plastic Fresnel lens covering a PIR motion sensor.",
        sampleAnswer: "The Fresnel lens divides the wide coverage area into multiple distinct conical detection zones. As a warm body walks between zones, the sensor sees rapid thermal changes, triggering motion detection."
      }
    ],
    funFacts: [
      { id: "c6-ff-5", text: "Bats use biological echolocation with frequencies up to 200 kHz to catch flying mosquitoes in complete midnight darkness!" },
      { id: "c6-ff-6", text: "Pit viper snakes have biological infrared pit organs beside their eyes that can sense temperature differences as tiny as 0.003°C." }
    ]
  },
  {
    id: "c6-ch-4",
    classId: "class-6",
    number: 4,
    title: "Line Following Robot",
    tagline: "Differential Drive, Dual IR Logic & Autonomous Navigation",
    color: "#D97706",
    iconName: "CornerDownRight",
    lessons: [
      {
        id: "c6-l4-1",
        chapterId: "c6-ch-4",
        order: 1,
        title: "Autonomous Guided Vehicles (AGVs)",
        subtitle: "How factories and warehouses use line trackers for logistics",
        summary: "In modern manufacturing plants (like Amazon, Tesla, or automated hospitals), autonomous guided vehicles (AGVs) carry tons of cargo without human drivers by following high-contrast optical lines or magnetic tape laid across the warehouse floor. They operate 24/7 with zero collisions.",
        keyPoints: [
          "Eliminates manual warehouse cart pushing and minimizes transit errors.",
          "Differential drive: two independent drive wheels plus a passive caster for zero-radius turning.",
          "Follows a black track on a white floor (or white track on dark asphalt)."
        ],
        illustrationType: "c6_agv_intro"
      },
      {
        id: "c6-l4-2",
        chapterId: "c6-ch-4",
        order: 2,
        title: "Differential Steering & Wheel Physics",
        subtitle: "Spinning wheels at different speeds to navigate curves and sharp angles",
        summary: "A differential drive robot has two independently driven wheels on opposite sides. To drive straight, both wheels turn forward at equal speeds. To pivot left, the left wheel slows down or stops while the right wheel drives forward. Spinning wheels in opposite directions rotates the robot in place on its central axis.",
        keyPoints: [
          "Straight Forward: Left Motor Forward, Right Motor Forward.",
          "Pivot Turn Left: Left Motor Stop/Reverse, Right Motor Forward.",
          "Pivot Turn Right: Right Motor Stop/Reverse, Left Motor Forward.",
          "Spin Turn (Zero-Radius): Left Motor Reverse, Right Motor Forward."
        ],
        illustrationType: "c6_differential_steering"
      },
      {
        id: "c6-l4-3",
        chapterId: "c6-ch-4",
        order: 3,
        title: "The 4-State Sensor Decision Matrix",
        subtitle: "Translating dual IR sensor reflection into automated motor commands",
        summary: "With two IR sensors mounted side-by-side straddling a black line: 1. Both see White: Robot is centered on track $\rightarrow$ Move Forward. 2. Left sees Black, Right sees White: Robot drifted right $\rightarrow$ Turn Left. 3. Right sees Black, Left sees White: Robot drifted left $\rightarrow$ Turn Right. 4. Both see Black: T-junction or finish line reached $\rightarrow$ Stop.",
        keyPoints: [
          "State 1 (White, White): FORWARD at normal cruising speed.",
          "State 2 (Black, White): PIVOT LEFT to bring line back to center.",
          "State 3 (White, Black): PIVOT RIGHT to bring line back to center.",
          "State 4 (Black, Black): STOP or execute preset intersection turn."
        ],
        illustrationType: "c6_line_decision_matrix"
      },
      {
        id: "c6-l4-4",
        chapterId: "c6-ch-4",
        order: 4,
        title: "Motor Driver Wiring: L298N / L293D",
        subtitle: "H-Bridge driver chips bridging microcontroller logic and high-current motors",
        summary: "Microcontrollers cannot provide the high amperes required by DC motors. An L298N dual H-bridge motor driver board accepts logic signals from Arduino (IN1, IN2 for Left Motor; IN3, IN4 for Right Motor; ENA, ENB for PWM speed) and routes power directly from a battery pack to the motors.",
        keyPoints: [
          "IN1=HIGH, IN2=LOW $\rightarrow$ Motor 1 spins Forward.",
          "IN1=LOW, IN2=HIGH $\rightarrow$ Motor 1 spins Reverse.",
          "ENA / ENB jumper pins accept PWM to control motor speed smoothly."
        ],
        illustrationType: "c6_l298n_driver"
      }
    ],
    activities: [
      {
        id: "c6-act-4",
        chapterId: "c6-ch-4",
        title: "Virtual Line Follower Track Simulator & PID Tuner",
        type: "c6_activity_line_track",
        description: "Guide an autonomous dual-sensor robot around a complex curved racetrack with sharp S-bends and 90-degree corners, tuning sensor threshold and motor speed.",
        instructions: [
          "Inspect the left and right IR sensor readings in real time.",
          "Test track execution: observe how the 4-state logic corrects course errors.",
          "Speed up the robot: notice how sharp corners require braking the inner wheel!",
          "Complete one full lap without derailing from the black line to earn your badge."
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c6-mod-4",
        chapterId: "c6-ch-4",
        title: "Dual-Sensor Autonomous Line Following Bot",
        subtitle: "Classic STEM autonomous ground vehicle with L298N motor driver and Arduino Uno",
        description: "Assemble and calibrate a complete 2WD differential robot chassis featuring dual front-mounted IR line tracking sensors, L298N motor driver, and autonomous track-following firmware.",
        parts: [
          { name: "2WD Robot Chassis Kit (Plates & Standoffs)", count: 1 },
          { name: "Yellow TT DC Gearmotors (1:48 Ratio)", count: 2 },
          { name: "Rubber Wheels (65mm Diameter)", count: 2 },
          { name: "Front Swivel Caster Wheel", count: 1 },
          { name: "Dual IR Line Tracker Sensor Modules", count: 2 },
          { name: "L298N Dual H-Bridge Motor Driver Module", count: 1 },
          { name: "Arduino Uno with Shield", count: 1 },
          { name: "2x 18650 Li-Ion Battery Holder with Switch", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Fasten TT gearmotors to left and right chassis tabs and press-fit wheels." },
          { stepNumber: 2, instruction: "Mount front caster wheel to balance the chassis horizontally." },
          { stepNumber: 3, instruction: "Mount the two IR sensors side-by-side underneath the front nose (spacing ~20mm apart, 5mm above floor)." },
          { stepNumber: 4, instruction: "Wire motor driver power to battery and motor outputs to left and right motors." },
          { stepNumber: 5, instruction: "Connect sensor digital outputs to Arduino pins 2 and 3; connect driver logic to pins 4, 5, 6, 7." },
          { stepNumber: 6, instruction: "Place robot onto electrical tape racetrack: watch it track lines automatically!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c6-q4-1",
        chapterId: "c6-ch-4",
        question: "When a line follower's LEFT sensor detects the black line while the RIGHT sensor sees white, what should the robot do?",
        options: ["Turn sharply LEFT to recenter the line", "Turn sharply RIGHT", "Stop and turn off", "Reverse at top speed"],
        correctAnswer: 0,
        explanation: "If the left sensor hit black, the robot has veered right; turning left brings the line back between both sensors."
      },
      {
        id: "c6-q4-2",
        chapterId: "c6-ch-4",
        question: "Why is a motor driver like the L298N necessary between an Arduino and DC motors?",
        options: ["Arduino output pins cannot supply enough electric current to run motors directly", "To make the wheels blue", "To turn electricity into water", "Because Arduino has no digital pins"],
        correctAnswer: 0,
        explanation: "The L298N acts as an amplifier: tiny microamp logic signals from the Arduino switch high-current battery power to the motors."
      },
      {
        id: "c6-q4-3",
        chapterId: "c6-ch-4",
        question: "What type of steering allows a robot to turn around on the spot with zero turning radius?",
        options: ["Differential drive (spinning one wheel forward and the other wheel backward)", "Rack and pinion", "Power screw", "Four-bar linkage"],
        correctAnswer: 0,
        explanation: "Spinning opposing drive wheels in opposite directions rotates the vehicle around its central geometric axis."
      },
      {
        id: "c6-q4-4",
        chapterId: "c6-ch-4",
        question: "What is the recommended vertical mounting distance between IR line sensors and the floor?",
        options: ["5mm to 10mm", "1 meter", "50 centimeters", "Directly dragging on the floor"],
        correctAnswer: 0,
        explanation: "IR sensors must be close to the surface (typically 5–10mm) for reliable optical reflection without dragging."
      },
      {
        id: "c6-q4-5",
        chapterId: "c6-ch-4",
        question: "What happens when both IR sensors detect black at the same time?",
        options: ["The robot detects an intersection, crossline, or stop line", "The robot speeds up to maximum", "The battery reverses polarity", "The caster wheel falls off"],
        correctAnswer: 0,
        explanation: "Both sensors seeing black signifies a perpendicular cross-track, T-junction, or designated stopping line."
      }
    ],
    writtenQuestions: [
      {
        id: "c6-wq4-1",
        chapterId: "c6-ch-4",
        question: "Write down the pseudo-code or logic rules for the 4 states of a 2-sensor line following robot.",
        sampleAnswer: "IF Left=WHITE AND Right=WHITE: Move Forward (Both motors ON). IF Left=BLACK AND Right=WHITE: Turn Left (Left motor STOP, Right motor ON). IF Left=WHITE AND Right=BLACK: Turn Right (Left motor ON, Right motor STOP). IF Left=BLACK AND Right=BLACK: Stop (Both motors STOP)."
      },
      {
        id: "c6-wq4-2",
        chapterId: "c6-ch-4",
        question: "Explain how changing the PWM duty cycle on the motor driver's Enable pins (ENA/ENB) helps a robot navigate tight curves without overshooting.",
        sampleAnswer: "Applying a lower PWM value (e.g. 150 instead of 255) reduces motor speed, giving the sensors and microcontroller more reaction time to detect sharp track changes before centrifugal force throws the robot off the line."
      }
    ],
    funFacts: [
      { id: "c6-ff-7", text: "Amazon fulfillment centers use over 750,000 autonomous mobile robots navigating QR floor markers to deliver shelves directly to packing stations!" },
      { id: "c6-ff-8", text: "In international robotic competitions, championship line tracking bots use aerodynamic suction fans and travel at over 4 meters per second!" }
    ]
  },
  {
    id: "c6-ch-5",
    classId: "class-6",
    number: 5,
    title: "Wireless Control",
    tagline: "Bluetooth HC-05/06, UART Serial Protocol & Mobile Pairing",
    color: "#7C3AED",
    iconName: "Radio",
    lessons: [
      {
        id: "c6-l5-1",
        chapterId: "c6-ch-5",
        order: 1,
        title: "Wireless Spectrum & Bluetooth Standards",
        subtitle: "2.4 GHz ISM band, short-range PANs, and low power connectivity",
        summary: "Bluetooth is a wireless technology standard for exchanging data over short distances (10–100 meters) using 2.4 GHz UHF radio waves. It creates secure Personal Area Networks (PANs) with high noise immunity via frequency hopping. In robotics, Bluetooth bridges microcontrollers and smartphones wirelessly.",
        keyPoints: [
          "Operates in the globally unlicensed 2.4 GHz to 2.485 GHz ISM radio band.",
          "Frequency Hopping Spread Spectrum (FHSS) prevents interference from Wi-Fi routers.",
          "Standard robotics range is ~10 meters (Class 2 Bluetooth)."
        ],
        illustrationType: "c6_bluetooth_spectrum"
      },
      {
        id: "c6-l5-2",
        chapterId: "c6-ch-5",
        order: 2,
        title: "HC-05 vs. HC-06 Bluetooth Modules",
        subtitle: "Master/Slave dual modes vs dedicated Slave-only transceivers",
        summary: "The HC-05 module can operate as both a Master (initiating connections to other devices) and a Slave (waiting for connections). The HC-06 is strictly a Slave module. Both feature standard 3.3V UART serial communication pins (TX, RX), state status LEDs, and an AT-command configuration button.",
        keyPoints: [
          "HC-05 has 6 pins: STATE, VCC, GND, TXD, RXD, EN/KEY.",
          "HC-06 has 4 pins: VCC, GND, TXD, RXD.",
          "Default pairing PIN is usually '1234' or '0000'; default baud rate is 9600 bps."
        ],
        illustrationType: "c6_hc05_hc06"
      },
      {
        id: "c6-l5-3",
        chapterId: "c6-ch-5",
        order: 3,
        title: "UART Serial Communication & Voltage Dividers",
        subtitle: "TX to RX crossover wiring and 5V to 3.3V logic level safety",
        summary: "Universal Asynchronous Receiver-Transmitter (UART) communication sends data serially bit-by-bit. The Transmitter pin (TX) of one device must always connect to the Receiver pin (RX) of the other. Because the HC-05 RX pin is rated for 3.3V logic, a 2-resistor voltage divider (1kΩ and 2kΩ) is used to step down the Arduino's 5V TX signal safely.",
        keyPoints: [
          "Crossover rule: TX of Arduino connects to RX of Bluetooth; TX of Bluetooth connects to RX of Arduino.",
          "Baud Rate: The transmission speed in bits per second (both devices must match, e.g. 9600 bps).",
          "Voltage divider: 1kΩ and 2kΩ resistors protect the 3.3V Bluetooth input pin from 5V overvoltage."
        ],
        illustrationType: "c6_uart_crossover"
      },
      {
        id: "c6-l5-4",
        chapterId: "c6-ch-5",
        order: 4,
        title: "Mobile Command Packets & Robot Driving",
        subtitle: "Parsing single-byte characters ('F', 'B', 'L', 'R', 'S') in firmware",
        summary: "Smartphones send single-byte ASCII characters over the Bluetooth serial stream when controller buttons are pressed: 'F' = Move Forward, 'B' = Reverse, 'L' = Turn Left, 'R' = Turn Right, 'S' = Stop. The microcontroller reads `Serial.read()` inside a `switch-case` block and sets motor outputs accordingly.",
        keyPoints: [
          "Single-character commands offer instantaneous response with zero network latency.",
          "A switch-case statement cleanly routes each character to corresponding motor functions.",
          "Emergency stop: releasing any mobile D-pad button sends 'S' to halt motors immediately."
        ],
        illustrationType: "c6_bluetooth_packets"
      }
    ],
    activities: [
      {
        id: "c6-act-5",
        chapterId: "c6-ch-5",
        title: "Interactive Bluetooth Terminal & UART Wiring Lab",
        type: "c6_activity_uart_terminal",
        description: "Wire the virtual HC-05 module with proper crossover connections, open the serial monitor at 9600 baud, and send 'F', 'B', 'L', 'R', 'S' commands to test motor response.",
        instructions: [
          "Connect HC-05 TXD to Arduino Digital Pin 10 (SoftSerial RX).",
          "Route Arduino Pin 11 (SoftSerial TX) through the 1kΩ/2kΩ voltage divider to HC-05 RXD.",
          "Pair with the virtual smartphone terminal.",
          "Type command 'F' and observe drive motors engage in forward rotation!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c6-mod-5",
        chapterId: "c6-ch-5",
        title: "Smartphone Bluetooth Controlled Robotic Rover",
        subtitle: "Mobile app-controlled 4WD or 2WD rover communicating over wireless HC-05 serial link",
        description: "Build an agile smartphone-controlled robotic car equipped with an HC-05 Bluetooth module, Arduino Uno microcontroller, and dual motor driver, steered using a companion Android app.",
        parts: [
          { name: "2WD Robot Chassis with Motors and Wheels", count: 1 },
          { name: "Arduino Uno R3 with Mounting Hardware", count: 1 },
          { name: "HC-05 Bluetooth Module with Jumper Cable", count: 1 },
          { name: "L298N Dual H-Bridge Motor Driver Board", count: 1 },
          { name: "1kΩ and 2kΩ Resistors (Voltage Divider)", count: 2 },
          { name: "Rechargeable 7.4V Battery Pack", count: 1 },
          { name: "Android Smartphone with Bluetooth Controller App", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount motors, driver, and Arduino onto the robot chassis." },
          { stepNumber: 2, instruction: "Install the HC-05 Bluetooth module onto the top platform." },
          { stepNumber: 3, instruction: "Connect Bluetooth TX to Arduino Pin 10, and Bluetooth RX to Pin 11 via the voltage divider." },
          { stepNumber: 4, instruction: "Upload the Bluetooth rover sketch handling 'F', 'B', 'L', 'R', 'S' commands." },
          { stepNumber: 5, instruction: "Open Android phone Bluetooth settings, search for 'HC-05', pair using PIN '1234'." },
          { stepNumber: 6, instruction: "Open the RoboController app, tap Connect, and steer the robot wirelessly across the room!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c6-q5-1",
        chapterId: "c6-ch-5",
        question: "How should the TX (Transmitter) and RX (Receiver) pins be wired between two UART serial devices?",
        options: ["Crossover connection: TX connects to RX, and RX connects to TX", "TX connects to TX, and RX connects to RX", "Both connect to GND", "Only one pin needs to be wired"],
        correctAnswer: 0,
        explanation: "UART communication requires the transmit pin of one device to talk into the receive pin of the other device."
      },
      {
        id: "c6-q5-2",
        chapterId: "c6-ch-5",
        question: "What is the key capability difference between an HC-05 and an HC-06 Bluetooth module?",
        options: ["HC-05 can act as both Master and Slave, while HC-06 can only act as a Slave", "HC-06 uses radio while HC-05 uses sound", "HC-05 only works in space", "HC-06 has no antenna"],
        correctAnswer: 0,
        explanation: "The HC-05 firmware supports Master mode (searching and connecting to other devices) as well as default Slave mode."
      },
      {
        id: "c6-q5-3",
        chapterId: "c6-ch-5",
        question: "Why is a resistor voltage divider recommended between an Arduino 5V TX pin and the HC-05 RX pin?",
        options: ["The HC-05 serial logic pins are rated for 3.3V, so the divider prevents 5V overvoltage damage", "To make the Bluetooth signal louder", "To double the battery life", "To change the Bluetooth name"],
        correctAnswer: 0,
        explanation: "While the HC-05 power input accepts 5V, its RX data pin connects to a 3.3V processor that can degrade under direct 5V signals."
      },
      {
        id: "c6-q5-4",
        chapterId: "c6-ch-5",
        question: "What is a 'Baud Rate' in serial communications?",
        options: ["The speed of data transmission measured in bits per second (bps)", "The weight of the copper wire", "The volume of the buzzer", "The temperature of the chip"],
        correctAnswer: 0,
        explanation: "Baud rate defines how many signal symbols or bits are transmitted per second over the serial link (e.g. 9600 baud)."
      },
      {
        id: "c6-q5-5",
        chapterId: "c6-ch-5",
        question: "What is the standard radio frequency band used by Bluetooth devices worldwide?",
        options: ["2.4 GHz", "100 kHz", "50 MHz", "10 GHz"],
        correctAnswer: 0,
        explanation: "Bluetooth operates in the unlicensed 2.4 GHz Industrial, Scientific, and Medical (ISM) radio frequency band."
      }
    ],
    writtenQuestions: [
      {
        id: "c6-wq5-1",
        chapterId: "c6-ch-5",
        question: "Explain what happens if the baud rate configured in your Arduino code does not match the baud rate of your Bluetooth module.",
        sampleAnswer: "If baud rates do not match, the receiver samples incoming bits at the wrong clock timing, resulting in unreadable gibberish characters or no communication at all."
      },
      {
        id: "c6-wq5-2",
        chapterId: "c6-ch-5",
        question: "Why is Bluetooth preferred over Wi-Fi for direct smartphone-to-robot model control in school classrooms?",
        sampleAnswer: "Bluetooth pairs directly device-to-device without needing an external Wi-Fi router or internet connection, consumes much less battery power, and allows dozens of student pairs to operate simultaneously without clogging network bandwidth."
      }
    ],
    funFacts: [
      { id: "c6-ff-9", text: "Bluetooth was named after the 10th-century Scandinavian King Harald Bluetooth, who united Danish tribes—just as Bluetooth technology unites computers and gadgets!" },
      { id: "c6-ff-10", text: "The Bluetooth logo is a bindrune combining the Scandinavian Younger Futhark runes for Harald's initials: ᚼ (Hagall) and ᛒ (Bjarkan)." }
    ]
  },
  {
    id: "c6-ch-6",
    classId: "class-6",
    number: 6,
    title: "3D Designing",
    tagline: "Parametric CAD, Mechanical Tolerances & Digital Fabrication",
    color: "#4F46E5",
    iconName: "Layers",
    lessons: [
      {
        id: "c6-l6-1",
        chapterId: "c6-ch-6",
        order: 1,
        title: "3D CAD in Modern Engineering",
        subtitle: "From 2D sketches to 3D solid parametric models",
        summary: "Computer-Aided Design (CAD) allows engineers to create exact digital representations of mechanical parts before manufacturing. In parametric modeling, shapes are defined by exact numerical constraints and dimensions (lengths, angles, diameters). If one dimension is modified, the entire 3D model recalculates automatically.",
        keyPoints: [
          "Eliminates guesswork by modeling every dimension down to 0.01mm.",
          "Parametric constraints link features together (e.g., hole stays centered on a bracket).",
          "Enables assembly testing, collision verification, and stress simulation."
        ],
        illustrationType: "c6_cad_intro"
      },
      {
        id: "c6-l6-2",
        chapterId: "c6-ch-6",
        order: 2,
        title: "Core 3D Operations: Extrude, Revolve, Fillet",
        subtitle: "Transforming 2D sketch profiles into 3D mechanical components",
        summary: "All 3D models start with a 2D sketch on a plane. Extrude pushes a 2D sketch linearly along the Z-axis to create solid volume. Revolve rotates a profile around a central centerline axis (ideal for wheels and shafts). Fillets round sharp corners to relieve mechanical stress, while Chamfers cut angled bevels.",
        keyPoints: [
          "Extrude: Pulls a 2D flat profile straight into 3D thickness.",
          "Revolve: Sweeps a 2D shape 360° around an axis to produce cylinders, pulleys, or cones.",
          "Fillet: Replaces weak 90° internal corners with rounded radii that distribute load stress."
        ],
        illustrationType: "c6_extrude_revolve"
      },
      {
        id: "c6-l6-3",
        chapterId: "c6-ch-6",
        order: 3,
        title: "Mechanical Tolerances & Fits",
        subtitle: "Why designing a 3.0mm hole for a 3.0mm screw fails in 3D printing",
        summary: "3D printers and CNC machines have physical manufacturing tolerances. Molten plastic expands slightly as it cools. If you model a 3.0mm hole for an M3 screw, the printed hole will measure ~2.8mm, preventing the screw from entering. Young engineers must apply clearance offsets (+0.3mm to +0.4mm for free-fit screw holes).",
        keyPoints: [
          "Clearance Fit: Hole is slightly larger than shaft so parts slide or turn freely.",
          "Interference Fit (Press-fit): Hole is slightly smaller so parts lock together tightly.",
          "Always add 0.3mm to 0.5mm clearance for 3D printed holes and snap-fit slots."
        ],
        illustrationType: "c6_tolerances_fits"
      },
      {
        id: "c6-l6-4",
        chapterId: "c6-ch-6",
        order: 4,
        title: "Exporting for 3D Printing: STL & OBJ",
        subtitle: "Tessellation, mesh quality, and preparing parts for slicers",
        summary: "Once a 3D model is complete, it is exported as an STL (Standard Tessellation Language) file. The STL format converts smooth curved CAD surfaces into a mesh of thousands of interconnected tiny triangles. High-resolution export maintains smooth circles, while coarse export creates visible faceted polygon edges.",
        keyPoints: [
          "STL describes the surface geometry of 3D objects using triangular facets.",
          "Binary STL files are compact and read by all 3D printing slicer software.",
          "Ensure CAD parts are completely manifold ('watertight' with no missing face holes)."
        ],
        illustrationType: "c6_stl_mesh"
      }
    ],
    activities: [
      {
        id: "c6-act-6",
        chapterId: "c6-ch-6",
        title: "Interactive Parametric CAD Bracket & Tolerance Lab",
        type: "c6_activity_cad_studio",
        description: "Design a custom ultrasonic sensor bracket: draw the 2D mounting plate, extrude to 3mm thickness, cut dual 16.2mm sensor eye holes with clearance tolerance, and apply 2mm corner fillets.",
        instructions: [
          "Set mounting plate dimensions: 50mm width × 25mm height.",
          "Add 3mm extrusion thickness.",
          "Place two circular holes for HC-SR04 ultrasonic eyes (Diameter = 16.0mm + 0.3mm tolerance = 16.3mm).",
          "Apply 3mm fillet rounds to all sharp outer corners and inspect the tessellated 3D STL mesh!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c6-mod-6",
        chapterId: "c6-ch-6",
        title: "Parametric Ultrasonic Sensor Mounting Bracket",
        subtitle: "Custom snap-fit mounting bracket designed for 3D printing and chassis installation",
        description: "Model and fabricate a robust snap-fit bracket specifically dimensioned to hold an HC-SR04 ultrasonic transducer module onto an autonomous robot front bumper.",
        parts: [
          { name: "3D CAD Modeling Software (Browser / Fusion)", count: 1 },
          { name: "HC-SR04 Transducer Dimensions (16mm Barrels)", count: 1 },
          { name: "M3 Mounting Bolt Holes (3.4mm Clearance)", count: 2 },
          { name: "PLA Filament for 3D Printing (15 grams)", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Create a 2D sketch on the front plane: 46mm width by 22mm height." },
          { stepNumber: 2, instruction: "Sketch two 16.3mm circles spaced 26mm apart on center to accommodate transducer cylinders." },
          { stepNumber: 3, instruction: "Add two 3.4mm mounting ear tabs at the bottom for M3 chassis screws." },
          { stepNumber: 4, instruction: "Extrude the sketch profile to a solid 3.0mm thickness." },
          { stepNumber: 5, instruction: "Apply 2.0mm fillets to all outer corners to eliminate stress concentration points." },
          { stepNumber: 6, instruction: "Export as STL, slice with 20% infill, 3D print, and snap your sensor in place!" }
        ],
        xpReward: 140
      }
    ],
    quiz: [
      {
        id: "c6-q6-1",
        chapterId: "c6-ch-6",
        question: "What does the 3D CAD operation 'Extrude' do to a 2D sketch?",
        options: ["Pushes the 2D sketch linearly along a perpendicular axis to give it 3D thickness", "Deletes the sketch", "Changes the color to grey", "Spins the sketch in a circle"],
        correctAnswer: 0,
        explanation: "Extrusion projects a 2D closed planar sketch along an axis to create solid 3D depth."
      },
      {
        id: "c6-q6-2",
        chapterId: "c6-ch-6",
        question: "Why should you add a clearance tolerance offset (e.g. +0.3mm) when designing screw holes for 3D printed parts?",
        options: ["Because molten 3D print plastic expands slightly as it cools, making holes slightly smaller than drawn", "Because 3D printers can only make large holes", "To make the screw fall out", "Because screws grow bigger in air"],
        correctAnswer: 0,
        explanation: "Plastic thermal shrinkage and nozzle layer extrusion squish contract hole diameters; adding +0.3mm ensures screws slip through easily."
      },
      {
        id: "c6-q6-3",
        chapterId: "c6-ch-6",
        question: "What mechanical advantage does adding a 'Fillet' (rounded corner) provide to a structural robot bracket?",
        options: ["It rounds sharp 90-degree internal corners to prevent stress fractures and cracks", "It makes the bracket magnetic", "It lowers the weight to zero", "It conducts electricity"],
        correctAnswer: 0,
        explanation: "Sharp inside corners create stress concentration zones; fillets spread physical loads smoothly, preventing part breakage."
      },
      {
        id: "c6-q6-4",
        chapterId: "c6-ch-6",
        question: "What does the 3D printing file extension .STL stand for?",
        options: ["Standard Tessellation Language", "Simple Text Layer", "Solid Tool Length", "Steel Triangle Link"],
        correctAnswer: 0,
        explanation: ".STL stands for Standard Tessellation Language, describing surfaces through a mesh of triangular facets."
      },
      {
        id: "c6-q6-5",
        chapterId: "c6-ch-6",
        question: "Which 3D CAD modeling operation is ideal for creating a symmetric wheel, pulley, or cone?",
        options: ["Revolve around a center axis", "Extrude straight", "Hole cutter", "Delete plane"],
        correctAnswer: 0,
        explanation: "Revolve sweeps a half-profile 360 degrees around a central centerline to generate radial cylindrical objects."
      }
    ],
    writtenQuestions: [
      {
        id: "c6-wq6-1",
        chapterId: "c6-ch-6",
        question: "Explain the difference between a 'Clearance Fit' and an 'Interference Fit' in robotics design.",
        sampleAnswer: "A Clearance Fit has a hole slightly larger than the mating shaft, allowing free rotation or sliding movement (e.g., an axle in a bearing). An Interference Fit has a hole slightly smaller than the shaft, requiring parts to be pressed together tightly so friction locks them without set-screws."
      },
      {
        id: "c6-wq6-2",
        chapterId: "c6-ch-6",
        question: "What is meant by a 'parametric' 3D CAD model, and why is it superior to static geometry?",
        sampleAnswer: "Parametric models are defined by mathematical formulas and numeric parameters. If you decide to change motor size from 20mm to 25mm, editing that single dimension automatically updates all related mounting holes, bracket lengths, and clearances instantly without redrawing the entire part."
      }
    ],
    funFacts: [
      { id: "c6-ff-11", text: "Modern aerospace engineers use CAD generative AI algorithms to design hollow, organic airplane brackets that mimic human bone structures to save fuel!" },
      { id: "c6-ff-12", text: "The earliest CAD software, 'Sketchpad', was created by Ivan Sutherland in 1963 using a revolutionary CRT monitor and light-pen!" }
    ]
  },
  {
    id: "c6-ch-7",
    classId: "class-6",
    number: 7,
    title: "MIT App Inventor",
    tagline: "Visual Mobile App Design, Event Handlers & Bluetooth Robot Controllers",
    color: "#9333EA",
    iconName: "Smartphone",
    lessons: [
      {
        id: "c6-l7-1",
        chapterId: "c6-ch-7",
        order: 1,
        title: "Introduction to MIT App Inventor",
        subtitle: "Visual cloud-based smartphone application development",
        summary: "MIT App Inventor is an intuitive visual programming platform originally developed by Google and now maintained by the Massachusetts Institute of Technology (MIT). It allows anyone—even school beginners—to build fully functional native Android apps by snapping together visual code blocks, without needing to memorize complex Java or Kotlin syntax.",
        keyPoints: [
          "Runs in web browsers and compiles real installable Android APK packages.",
          "Two primary views: The Designer View (UI layout) and the Blocks Editor (App logic).",
          "Live preview and instant testing using the MIT AI2 Companion app via Wi-Fi."
        ],
        illustrationType: "c6_app_inventor_intro"
      },
      {
        id: "c6-l7-2",
        chapterId: "c6-ch-7",
        order: 2,
        title: "Designer View: Components & Layouts",
        subtitle: "User Interface elements and Non-Visible hardware components",
        summary: "The Designer view is where you craft the visual screen of your app. Visible components include Buttons, Labels, Images, and Sliders organized neatly within Horizontal and Vertical Arrangements. Non-Visible components include BluetoothClient, Clock timers, Accelerometer, and TextToSpeech, which run in the background to handle device hardware.",
        keyPoints: [
          "Palette: Library of components on the left.",
          "Viewer: Visual smartphone mockup screen in the center.",
          "Component Tree & Properties: Adjusting dimensions, colors, text size, and element IDs on the right."
        ],
        illustrationType: "c6_designer_view"
      },
      {
        id: "c6-l7-3",
        chapterId: "c6-ch-7",
        order: 3,
        title: "Blocks Editor: Event-Driven Programming",
        subtitle: "When Event Happens $\rightarrow$ Do Action (Event Handlers & Logic)",
        summary: "Mobile apps are event-driven: code executes in response to events like button clicks, screen touches, timer ticks, or incoming Bluetooth messages. In the Blocks editor, mustard-colored event blocks (`when ButtonForward.Click do...`) enclose green call blocks (`call BluetoothClient1.SendText text: 'F'`).",
        keyPoints: [
          "Event Handlers: 'when Button.Click do...', 'when Screen1.Initialize do...'.",
          "Control Blocks: if-then-else decision making.",
          "Built-in logic, math, text strings, and list manipulation blocks."
        ],
        illustrationType: "c6_blocks_editor"
      },
      {
        id: "c6-l7-4",
        chapterId: "c6-ch-7",
        order: 4,
        title: "Building the RoboController Bluetooth App",
        subtitle: "ListPicker pairing, TouchDown driving, and TouchUp automatic braking",
        summary: "To create a professional robot controller: 1. Use a ListPicker button to display paired Bluetooth devices (`when ListPicker.BeforePicking set Elements to BluetoothClient.AddressesAndNames`). 2. Connect on selection. 3. Use `ButtonForward.TouchDown` to send 'F' continuously while pressed, and `ButtonForward.TouchUp` to send 'S' to brake immediately when released.",
        keyPoints: [
          "ListPicker: Allows user to choose HC-05 module from phone's paired devices.",
          "TouchDown vs Click: TouchDown begins motion immediately upon finger touch.",
          "TouchUp ensures the robot stops safely the moment the student lifts their thumb."
        ],
        illustrationType: "c6_robocontroller_app"
      }
    ],
    activities: [
      {
        id: "c6-act-7",
        chapterId: "c6-ch-7",
        title: "Interactive MIT App Inventor Block Builder Studio",
        type: "c6_activity_app_builder",
        description: "Design the mobile controller D-pad, snap together the BluetoothClient connection blocks, and test touch-down driving events in the interactive live simulator.",
        instructions: [
          "Drag a ListPicker onto the screen for Bluetooth scanning.",
          "Snap the event block: `when ListPicker1.AfterPicking do call BluetoothClient1.Connect address: ListPicker1.Selection`.",
          "Snap the drive event: `when btnForward.TouchDown do call BluetoothClient1.SendText text: 'F'`.",
          "Snap the brake event: `when btnForward.TouchUp do call BluetoothClient1.SendText text: 'S'`.",
          "Test in the virtual smartphone viewer to verify smooth responsive robot driving!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c6-mod-7",
        chapterId: "c6-ch-7",
        title: "Custom RoboController Mobile App (Android APK)",
        subtitle: "Custom-built native mobile app featuring D-pad steering, speed slider, and status telemetry",
        description: "Program and compile a complete native Android smartphone app in MIT App Inventor that connects over Bluetooth to control your Class 6 robotic vehicle with live status indicators.",
        parts: [
          { name: "MIT App Inventor 2 Web IDE", count: 1 },
          { name: "BluetoothClient Component", count: 1 },
          { name: "Directional D-Pad Button Layout (F, B, L, R, S)", count: 5 },
          { name: "Speed Control PWM Slider (0–255)", count: 1 },
          { name: "Android Smartphone / Tablet", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Open MIT App Inventor and create a project named 'RoboBox_Controller'." },
          { stepNumber: 2, instruction: "Add a TableArrangement and place Forward, Reverse, Left, Right, and Stop buttons in D-pad formation." },
          { stepNumber: 3, instruction: "Add a ListPicker labeled 'Connect Bluetooth' and drag in the non-visible BluetoothClient component." },
          { stepNumber: 4, instruction: "Switch to Blocks: program BeforePicking to load paired Bluetooth addresses, and AfterPicking to connect." },
          { stepNumber: 5, instruction: "Attach SendText ('F', 'B', 'L', 'R') to each button's TouchDown event, and SendText ('S') to TouchUp." },
          { stepNumber: 6, instruction: "Click Build → Generate QR Code for .apk, install on your phone, and drive your robot wirelessly!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c6-q7-1",
        chapterId: "c6-ch-7",
        question: "Which view in MIT App Inventor is used to assemble programming logic using puzzle blocks?",
        options: ["The Blocks Editor", "The Designer View", "The Color Picker", "The Camera View"],
        correctAnswer: 0,
        explanation: "The Blocks Editor is where programmers snap together event handlers, conditions, math, and actions."
      },
      {
        id: "c6-q7-2",
        chapterId: "c6-ch-7",
        question: "Why is the `TouchDown` event preferred over the `Click` event for a robot driving button?",
        options: ["TouchDown triggers immediately when your finger first touches the screen, allowing continuous driving while held", "TouchDown only works at night", "Click makes the phone vibrate too much", "TouchDown is only for deleting files"],
        correctAnswer: 0,
        explanation: "TouchDown fires the instant contact occurs and pairs with TouchUp to stop motion the moment your finger releases."
      },
      {
        id: "c6-q7-3",
        chapterId: "c6-ch-7",
        question: "What type of component in App Inventor is the 'BluetoothClient'?",
        options: ["A Non-Visible component (runs in background without appearing on screen)", "A visible picture button", "A physical AA battery", "A 3D printer nozzle"],
        correctAnswer: 0,
        explanation: "Non-visible components handle behind-the-scenes system capabilities like Bluetooth, timers, and sensors."
      },
      {
        id: "c6-q7-4",
        chapterId: "c6-ch-7",
        question: "Which component is used to show a dropdown list of paired Bluetooth devices for the user to select?",
        options: ["ListPicker", "TextBox", "Image", "Sound"],
        correctAnswer: 0,
        explanation: "A ListPicker opens a list of available paired device MAC addresses and names when tapped."
      },
      {
        id: "c6-q7-5",
        chapterId: "c6-ch-7",
        question: "How can you test your App Inventor project live on a smartphone without compiling an APK file every time?",
        options: ["Using the MIT AI2 Companion mobile app via Wi-Fi QR code sync", "By printing it on paper", "By emailing a screenshot", "By plugging in headphones"],
        correctAnswer: 0,
        explanation: "The MIT AI2 Companion app synchronizes code changes in real time over Wi-Fi for instant live testing."
      }
    ],
    writtenQuestions: [
      {
        id: "c6-wq7-1",
        chapterId: "c6-ch-7",
        question: "Explain what is meant by 'event-driven programming' in mobile applications.",
        sampleAnswer: "In event-driven programming, code does not run in a strict top-to-bottom order. Instead, code blocks remain idle until a specific event occurs—such as a user touching a button, a timer expiring, or a sensor receiving data—which triggers the associated event handler to run."
      },
      {
        id: "c6-wq7-2",
        chapterId: "c6-ch-7",
        question: "Describe how you would add a safety feature to stop a robot if the Bluetooth connection accidentally drops.",
        sampleAnswer: "On the robot's microcontroller, set up a watchdog timer. If no valid control packet ('F', 'B', etc.) is received from the phone within 500 milliseconds, the firmware automatically shuts down all motor outputs to prevent the robot from running away."
      }
    ],
    funFacts: [
      { id: "c6-ff-13", text: "MIT App Inventor has over 13 million registered users from 195 countries who have built more than 68 million custom apps!" },
      { id: "c6-ff-14", text: "Hal Abelson, a renowned computer science professor at MIT, co-founded App Inventor to democratize software creation for school children worldwide." }
    ]
  }
];

export const class6Glossary: GlossaryTerm[] = [
  { term: "Unimate", definition: "The world's first programmable industrial robot, patented by George Devol in 1954 and installed in a General Motors factory in 1961.", chapterNumber: 1 },
  { term: "Cobot", definition: "A collaborative robot designed with integrated safety force limiters to interact safely with humans in a shared workspace.", chapterNumber: 1 },
  { term: "Sense-Plan-Act", definition: "The fundamental computational paradigm of autonomous robotics: perceiving the world, deciding actions, and executing motion.", chapterNumber: 1 },
  { term: "Microcontroller", definition: "A single integrated circuit containing a CPU core, memory (Flash/RAM), and programmable input/output peripherals.", chapterNumber: 2 },
  { term: "ATmega328P", definition: "The 8-bit AVR microcontroller chip that powers the standard Arduino Uno and Nano development boards.", chapterNumber: 2 },
  { term: "ADC (Analog-to-Digital Converter)", definition: "An electronic module that converts continuous physical analog voltages (0-5V) into discrete digital numbers (0-1023).", chapterNumber: 2 },
  { term: "PWM (Pulse Width Modulation)", definition: "A technique for getting analog-like results with digital means by pulsing voltage ON and OFF with varying duty cycles.", chapterNumber: 2 },
  { term: "Echolocation", definition: "The biological or technological location of objects by reflected sound waves, utilized by bats and ultrasonic sensors.", chapterNumber: 3 },
  { term: "HC-SR04", definition: "A popular ultrasonic sensor module operating at 40 kHz capable of measuring distance from 2cm to 400cm.", chapterNumber: 3 },
  { term: "PIR Sensor", definition: "Passive Infrared sensor that measures infrared thermal radiation radiating from objects in its field of view to detect motion.", chapterNumber: 3 },
  { term: "Differential Drive", definition: "A robotic drive mechanism featuring two independently driven wheels on either side with a passive caster for zero-radius turns.", chapterNumber: 4 },
  { term: "L298N", definition: "A dual H-bridge high-current motor driver board used to control speed and direction of two DC motors from a microcontroller.", chapterNumber: 4 },
  { term: "UART", definition: "Universal Asynchronous Receiver-Transmitter, a hardware communication protocol using TX and RX lines for serial data exchange.", chapterNumber: 5 },
  { term: "Baud Rate", definition: "The rate at which information is transferred in a communication channel, commonly 9600 bits per second in robotics.", chapterNumber: 5 },
  { term: "Parametric CAD", definition: "A 3D modeling method where geometry is driven by mathematical constraints and dimensions that update adaptively.", chapterNumber: 6 },
  { term: "Fillet", definition: "A rounding of an internal or external corner of a 3D part to distribute stress and improve structural strength.", chapterNumber: 6 },
  { term: "Event-Driven Programming", definition: "A programming paradigm where program execution flow is determined by user events such as clicks, touches, or messages.", chapterNumber: 7 },
  { term: "MIT App Inventor", definition: "A block-based visual development platform for creating native Android applications without text syntax coding.", chapterNumber: 7 }
];

export const class6Badges: Badge[] = [
  {
    id: "c6-badge-history",
    title: "Robotics Historian",
    description: "Mastered the robotic milestones from Hero of Alexandria to modern AI Cobots.",
    icon: "Cpu",
    unlockedAtXp: 100
  },
  {
    id: "c6-badge-mcu",
    title: "Microcontroller Master",
    description: "Decoded the ATmega328P architecture, 10-bit ADC registers, and PWM waveforms.",
    icon: "Compass",
    unlockedAtXp: 250
  },
  {
    id: "c6-badge-sensors",
    title: "Sensory Explorer",
    description: "Calculated 40 kHz echolocation distances and calibrated IR reflectivity.",
    icon: "Eye",
    unlockedAtXp: 400
  },
  {
    id: "c6-badge-line-bot",
    title: "Autonomous Navigator",
    description: "Assembled and tuned a dual-sensor differential line-following robot.",
    icon: "CornerDownRight",
    unlockedAtXp: 550
  },
  {
    id: "c6-badge-wireless",
    title: "Bluetooth Telemetry Pro",
    description: "Established UART serial communication and voltage divider logic with HC-05.",
    icon: "Radio",
    unlockedAtXp: 700
  },
  {
    id: "c6-badge-mobile-dev",
    title: "Mobile App Developer",
    description: "Engineered a native Android robot controller app in MIT App Inventor.",
    icon: "Smartphone",
    unlockedAtXp: 850
  }
];
