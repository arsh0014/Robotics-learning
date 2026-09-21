import { Chapter, GlossaryTerm, Badge } from '../../types/curriculum';

export const class8Chapters: Chapter[] = [
  {
    id: "c8-ch-1",
    classId: "class-8",
    number: 1,
    title: "Introduction to Mechatronics",
    tagline: "Mechanical, Electrical, Control Systems & Computer Science Synergy",
    color: "#9333EA",
    iconName: "Cpu",
    lessons: [
      {
        id: "c8-l1-1",
        chapterId: "c8-ch-1",
        order: 1,
        title: "The 4 Disciplines of Mechatronics",
        subtitle: "Mechanical engineering, electronics, computer science, and control theory",
        summary: "Mechatronics is not just a single engineering field; it is the synergistic integration of four core disciplines: Mechanical Engineering (mechanisms, linkages, dynamics), Electrical & Electronic Engineering (circuits, sensors, power distribution), Computer Science (software algorithms, firmware, AI), and Control Systems (feedback loops, stability, tuning).",
        keyPoints: [
          "Synergy: The combined system achieves performance vastly superior to its individual parts.",
          "Replaces bulky mechanical linkages and cams with microprocessors and electric actuators.",
          "Found in aerospace fly-by-wire, autonomous electric vehicles, and biomedical prosthetics."
        ],
        illustrationType: "c8_mechatronics_disciplines"
      },
      {
        id: "c8-l1-2",
        chapterId: "c8-ch-1",
        order: 2,
        title: "Mechatronic System Architecture",
        subtitle: "Sensors, Actuators, Signal Conditioning & Microcontrollers",
        summary: "Every mechatronic device consists of five interconnected subsystems: 1. Physical Mechanical Mechanism, 2. Sensors (data acquisition), 3. Signal Conditioning (amplifying and filtering noise), 4. Digital Controller (processing algorithms), and 5. Actuators (electric motors, hydraulics, pneumatics generating motion).",
        keyPoints: [
          "Sensors act as physical perception transducers.",
          "Signal conditioning removes electrical noise and converts millivolt signals for ADCs.",
          "Actuators convert electrical energy back into mechanical work and force."
        ],
        illustrationType: "c8_mechatronic_architecture"
      },
      {
        id: "c8-l1-3",
        chapterId: "c8-ch-1",
        order: 3,
        title: "Evolution of Everyday Products",
        subtitle: "How pure mechanical devices became intelligent mechatronic machines",
        summary: "Consider the camera: in 1950, it was purely mechanical with manual shutter springs and film reels. A modern digital camera is a mechatronic marvel: optical image stabilization uses piezoelectric gyro sensors and voice-coil motor actuators to counteract hand shake in real time, while AI neural chips detect human faces instantly.",
        keyPoints: [
          "Typewriter $\rightarrow$ Computer Keyboard with Hall-effect magnetic switches.",
          "Car Carburetor $\rightarrow$ Electronic Fuel Injection (EFI) ECU with oxygen sensors.",
          "Mechanical Speedometer $\rightarrow$ Digital CAN-bus multi-sensor dashboard."
        ],
        illustrationType: "c8_product_evolution"
      },
      {
        id: "c8-l1-4",
        chapterId: "c8-ch-1",
        order: 4,
        title: "Design Methodology for Intelligent Machines",
        subtitle: "Simultaneous multidisciplinary design vs sequential engineering",
        summary: "Traditional engineering was sequential: mechanical engineers built a machine, handed it to electrical engineers to add wiring, and finally handed it to programmers. Mechatronics requires concurrent (simultaneous) engineering where all four disciplines design the system collaboratively from Day 1, optimizing weight, power, and cost.",
        keyPoints: [
          "Concurrent engineering eliminates costly late-stage redesigns.",
          "Digital Twin simulation models mechanical and electronic physics simultaneously.",
          "Optimizes efficiency: smart software can compensate for mechanical imperfections."
        ],
        illustrationType: "c8_concurrent_engineering"
      }
    ],
    activities: [
      {
        id: "c8-act-1",
        chapterId: "c8-ch-1",
        title: "Interactive 4-Pillar Mechatronics System Architecture Explorer",
        type: "c8_activity_mechatronics_pillars",
        description: "Analyze complex modern machines (Tesla Autopilot, Quadcopter, Robotic Surgical Arm, Smart Washing Machine), dissecting their mechanical, electrical, computer, and control components.",
        instructions: [
          "Select a modern machine: 'Electric Vehicle Autonomous Drive'.",
          "Inspect the Mechanical structure: Chassis, rack & pinion steering, disc brakes.",
          "Inspect Electrical sensors: 8 cameras, 12 ultrasonic sensors, forward radar, battery BMS.",
          "Inspect Computer & Control: Dual FSD neural network processors executing real-time trajectory steering!",
          "Map all subsystems into the 4 Mechatronic Pillars to unlock your badge."
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c8-mod-1",
        chapterId: "c8-ch-1",
        title: "Mechatronic Automated Sorting Machine",
        subtitle: "Complete tabletop system integrating mechanical hopper, optical sensors, microcontroller, and servo actuator",
        description: "Build an intelligent automated parts sorting machine combining a mechanical gravity-feed ramp, optical color/size sensors, Arduino controller, and high-speed servo sorting gates.",
        parts: [
          { name: "Laser-cut Acrylic Gravity Feed Chute", count: 1 },
          { name: "TCS3200 Optical Color Sensor / IR Gateway", count: 1 },
          { name: "High-Speed Micro Servo Sorting Flap", count: 1 },
          { name: "Arduino Uno R3 with Sensor Shield", count: 1 },
          { name: "Dual Sorting Bins (Red & Blue)", count: 2 },
          { name: "Breadboard and Jumper Leads", count: 8 },
          { name: "Test Sorting Spheres / Blocks", count: 6 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Assemble the angled gravity-feed ramp ensuring smooth spherical roll." },
          { stepNumber: 2, instruction: "Mount the optical sensor gateway at the inspection station window." },
          { stepNumber: 3, instruction: "Install the high-speed servo motor at the bifurcation chute exit." },
          { stepNumber: 4, instruction: "Wire sensor data lines to Arduino digital inputs, and servo signal to PWM pin 9." },
          { stepNumber: 5, instruction: "Program: read color in 50ms; if Red, angle servo to 45° (Left Bin); if Blue, angle to 135° (Right Bin)." },
          { stepNumber: 6, instruction: "Release a batch of colored test spheres: watch the machine sort them at 60 items per minute with 100% accuracy!" }
        ],
        xpReward: 140
      }
    ],
    quiz: [
      {
        id: "c8-q1-1",
        chapterId: "c8-ch-1",
        question: "What four core engineering disciplines combine to form Mechatronics?",
        options: ["Mechanical Engineering, Electronics, Computer Science, and Control Systems", "Civil, Chemical, Nuclear, and Biological", "Art, Music, History, and Literature", "Mining, Geology, Astronomy, and Botany"],
        correctAnswer: 0,
        explanation: "Mechatronics is defined as the synergistic combination of mechanical, electronic, computer, and control engineering."
      },
      {
        id: "c8-q1-2",
        chapterId: "c8-ch-1",
        question: "What is an 'Actuator' in a mechatronic system?",
        options: ["A component that converts electrical control signals into physical mechanical motion or force", "A sensor that measures room temperature", "A battery charging cable", "A computer monitor"],
        correctAnswer: 0,
        explanation: "Actuators (like motors, servos, solenoids, and pneumatic cylinders) produce the physical motion in a mechatronic system."
      },
      {
        id: "c8-q1-3",
        chapterId: "c8-ch-1",
        question: "What is the primary benefit of 'Concurrent Engineering' in mechatronic product development?",
        options: ["Mechanical, electrical, and software teams collaborate simultaneously from Day 1, optimizing the overall design", "Engineers work in different years", "It eliminates the need for software", "It only builds wooden models"],
        correctAnswer: 0,
        explanation: "Concurrent engineering allows all disciplines to design together in parallel, preventing costly redesigns."
      },
      {
        id: "c8-q1-4",
        chapterId: "c8-ch-1",
        question: "How does a modern digital camera demonstrate mechatronic principles?",
        options: ["Gyroscopic sensors detect hand movement, and voice-coil actuators move lens elements to stabilize images in real time", "It uses traditional chemical film only", "It has no moving parts", "It does not use electricity"],
        correctAnswer: 0,
        explanation: "Optical image stabilization pairs MEMS gyro sensors with magnetic actuators in a real-time feedback control loop."
      },
      {
        id: "c8-q1-5",
        chapterId: "c8-ch-1",
        question: "What role does 'Signal Conditioning' play in a mechatronic system?",
        options: ["Amplifies tiny sensor voltages and filters electrical noise before the microcontroller reads the data", "Cools down the motors", "Powers the wheels directly", "Changes the plastic color"],
        correctAnswer: 0,
        explanation: "Signal conditioning circuitry cleans, amplifies, and filters raw sensor signals so the ADC gets clean readings."
      }
    ],
    writtenQuestions: [
      {
        id: "c8-wq1-1",
        chapterId: "c8-ch-1",
        question: "Explain the concept of 'Synergy' in mechatronics and provide a real-world example.",
        sampleAnswer: "Synergy means that the integrated whole performs far better than the sum of individual mechanical and electrical parts. For example, in an Anti-lock Braking System (ABS), mechanical hydraulic brakes combined with wheel speed sensors and a high-speed microcomputer allow braking at the threshold of road grip—pumping brakes 20 times per second, which no human foot could mechanically achieve."
      },
      {
        id: "c8-wq1-2",
        chapterId: "c8-ch-1",
        question: "Describe how replacing mechanical cams and gears with software-controlled servo motors makes industrial machines more versatile.",
        sampleAnswer: "Mechanical cams require physical re-machining and hours of downtime to change a packaging machine's motion profile. Software-controlled servo motors allow the motion curve, acceleration, and stroke length to be changed instantly by updating digital parameters in code or touching a screen."
      }
    ],
    funFacts: [
      { id: "c8-ff-1", text: "The term 'Mechatronics' was coined in 1969 by senior engineer Tetsuro Mori at the Japanese robotics company Yaskawa Electric Corporation!" },
      { id: "c8-ff-2", text: "A modern luxury automobile contains over 100 networked mechatronic microcontrollers communicating over high-speed CAN buses!" }
    ]
  },
  {
    id: "c8-ch-2",
    classId: "class-8",
    number: 2,
    title: "ESP (ESP8266 & ESP32)",
    tagline: "Internet of Things (IoT), Wi-Fi Web Servers & Cloud Robotics",
    color: "#0284C7",
    iconName: "Wifi",
    lessons: [
      {
        id: "c8-l2-1",
        chapterId: "c8-ch-2",
        order: 1,
        title: "The Internet of Things (IoT) Revolution",
        subtitle: "Connecting physical devices, sensors, and robots to the global internet",
        summary: "The Internet of Things (IoT) is the network of physical objects embedded with sensors, software, and network connectivity that enables them to collect and exchange data. In robotics, IoT allows robots to be monitored from anywhere in the world, stream sensor telemetry to cloud dashboards, and receive remote missions.",
        keyPoints: [
          "Bridges physical robotics hardware with cloud servers and mobile networks.",
          "Cloud telemetry: real-time streaming of battery voltage, temperature, and GPS position.",
          "Remote OTA (Over-The-Air) firmware updates allow robots to be upgraded wirelessly."
        ],
        illustrationType: "c8_iot_revolution"
      },
      {
        id: "c8-l2-2",
        chapterId: "c8-ch-2",
        order: 2,
        title: "ESP8266 vs. ESP32 Architecture",
        subtitle: "High-speed 32-bit Wi-Fi/Bluetooth Systems-on-a-Chip (SoC)",
        summary: "Manufactured by Espressif Systems, the ESP family revolutionized maker robotics: 1. **ESP8266 (NodeMCU)**: 32-bit Tensilica CPU @ 80/160 MHz with 2.4 GHz 802.11 b/g/n Wi-Fi. 2. **ESP32**: Dual-Core 32-bit Tensilica LX6 CPU @ 240 MHz with integrated Wi-Fi, Bluetooth v4.2/BLE, capacitive touch pins, 12-bit ADCs, DACs, and hardware cryptography.",
        keyPoints: [
          "Both chips operate at 3.3V logic level (Warning: not 5V tolerant on GPIOs!).",
          "ESP32 has two independent CPU cores: Core 0 handles Wi-Fi/BLE stacks; Core 1 runs user code.",
          "Cost under $5 while delivering 15x the processing power of a standard Arduino Uno."
        ],
        illustrationType: "c8_esp_comparison"
      },
      {
        id: "c8-l2-3",
        chapterId: "c8-ch-2",
        order: 3,
        title: "Wi-Fi Modes: Station (STA) vs Access Point (AP)",
        subtitle: "Connecting to existing home routers versus broadcasting standalone robot networks",
        summary: "ESP chips support two primary wireless modes: **Station Mode (STA)**: The ESP connects to an existing local Wi-Fi router (using SSID and password), receiving a local IP address (e.g. 192.168.1.50). **Access Point Mode (AP)**: The ESP broadcasts its own standalone Wi-Fi hotspot network (e.g. 'RoboBox-ESP'), allowing smartphones to connect directly in outdoor fields without any internet router.",
        keyPoints: [
          "Station Mode (STA): Requires an external router; allows internet access.",
          "Access Point Mode (AP): Self-contained local network; operates in open fields.",
          "Dual Mode (AP+STA): Can act as a Wi-Fi repeater or mesh node."
        ],
        illustrationType: "c8_wifi_modes"
      },
      {
        id: "c8-l2-4",
        chapterId: "c8-ch-2",
        order: 4,
        title: "Hosting an Embedded Web Server",
        subtitle: "Serving HTML/CSS control interfaces directly from microcontroller flash",
        summary: "An ESP microcontroller can run a lightweight HTTP web server (`WebServer server(80)`). When a smartphone or laptop navigates to the ESP's IP address in any web browser, the ESP serves an interactive HTML/CSS webpage with touch buttons. Tapping 'FORWARD' on the webpage triggers an HTTP GET request that drives the robot motors.",
        keyPoints: [
          "Universal compatibility: works on any device with a browser (iPhone, Android, PC, Mac).",
          "Zero app installation required: just connect to Wi-Fi and open the robot's IP address.",
          "Real-time sensor graphs can be streamed using WebSockets or asynchronous HTTP."
        ],
        illustrationType: "c8_embedded_webserver"
      }
    ],
    activities: [
      {
        id: "c8-act-2",
        chapterId: "c8-ch-2",
        title: "Virtual ESP32 Wi-Fi Web Server & IoT Robot Dashboard",
        type: "c8_activity_esp_dashboard",
        description: "Configure an ESP32 in Access Point mode, launch the embedded web server, and use an interactive browser portal to control virtual robot motors, read telemetry, and toggle LED beacons.",
        instructions: [
          "Configure Wi-Fi AP: SSID = 'RoboBox-Bot-8', IP = 192.168.4.1.",
          "Start the virtual web server and connect your browser.",
          "Click the on-screen browser buttons: Forward, Reverse, Left, Right, Stop.",
          "Inspect the live HTTP request log (`GET /forward HTTP/1.1`) and watch the dual motors drive!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c8-mod-2",
        chapterId: "c8-ch-2",
        title: "ESP32 Wi-Fi IoT Smart Rover & Telemetry Station",
        subtitle: "Internet-connected mobile rover with embedded web dashboard and live sensor streaming",
        description: "Assemble a high-speed Wi-Fi mobile rover powered by an ESP32 microcontroller that serves an interactive HTML control panel to any smartphone connected to its network.",
        parts: [
          { name: "ESP32 NodeMCU Development Board (30-Pin)", count: 1 },
          { name: "L298N Dual H-Bridge Motor Driver Module", count: 1 },
          { name: "2WD Robot Chassis with Dual TT Motors", count: 1 },
          { name: "Rubber Wheels and Front Ball Caster", count: 3 },
          { name: "LM2596 DC-DC Buck Converter (Step-down to 5V)", count: 1 },
          { name: "DHT11 Temperature & Humidity Sensor", count: 1 },
          { name: "7.4V / 11.1V Li-Po Battery Pack", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount motors, wheels, and chassis hardware securely." },
          { stepNumber: 2, instruction: "Tune the buck converter to output a rock-steady 5.0V for the ESP32 power pin." },
          { stepNumber: 3, instruction: "Wire ESP32 GPIOs 16, 17, 18, 19 to the L298N motor driver logic inputs." },
          { stepNumber: 4, instruction: "Connect the DHT11 sensor data pin to GPIO 4." },
          { stepNumber: 5, instruction: "Flash the ESP32 Web Server sketch containing the responsive CSS mobile dashboard." },
          { stepNumber: 6, instruction: "Connect your phone to Wi-Fi 'RoboBox-ESP32', open `192.168.4.1` in Safari/Chrome, and drive your robot while reading live room temperature!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c8-q2-1",
        chapterId: "c8-ch-2",
        question: "What is the native logic operating voltage of ESP8266 and ESP32 GPIO pins?",
        options: ["3.3 Volts (Not 5V tolerant)", "5.0 Volts", "12 Volts", "120 Volts AC"],
        correctAnswer: 0,
        explanation: "ESP processors operate strictly at 3.3V logic; applying 5V signals directly to GPIOs can permanently damage the chip."
      },
      {
        id: "c8-q2-2",
        chapterId: "c8-ch-2",
        question: "What is the difference between Access Point (AP) mode and Station (STA) mode on an ESP chip?",
        options: ["AP mode broadcasts its own Wi-Fi network, while STA mode connects to an existing router", "AP mode only works with cables", "STA mode is for Bluetooth only", "AP mode requires a satellite dish"],
        correctAnswer: 0,
        explanation: "In AP mode, the ESP generates its own wireless hotspot; in STA mode, it acts as a client connected to a home or school router."
      },
      {
        id: "c8-q2-3",
        chapterId: "c8-ch-2",
        question: "How many CPU processor cores does the standard ESP32 microcontroller feature?",
        options: ["Dual-Core (Two 32-bit cores)", "Single-Core", "Octa-Core (8 cores)", "Zero cores"],
        correctAnswer: 0,
        explanation: "The ESP32 features two 32-bit Xtensa LX6 CPU cores running up to 240 MHz."
      },
      {
        id: "c8-q2-4",
        chapterId: "c8-ch-2",
        question: "What software port number is the standard default for hosting an HTTP web server on an ESP?",
        options: ["Port 80", "Port 21", "Port 443", "Port 9999"],
        correctAnswer: 0,
        explanation: "Port 80 is the international standard port for unencrypted HTTP web server traffic."
      },
      {
        id: "c8-q2-5",
        chapterId: "c8-ch-2",
        question: "Why is an embedded web server on an ESP convenient for controlling robots from smartphones?",
        options: ["Any phone with a web browser can control the robot without installing any app from the app store", "It only works on computers", "It makes the robot invisible", "It recharges the phone battery wirelessly"],
        correctAnswer: 0,
        explanation: "Web browsers are universal on all operating systems (iOS, Android, Windows), eliminating the need to develop separate native apps."
      }
    ],
    writtenQuestions: [
      {
        id: "c8-wq2-1",
        chapterId: "c8-ch-2",
        question: "Explain why the ESP32 is considered a 'System-on-a-Chip' (SoC) rather than just a microcontroller.",
        sampleAnswer: "An SoC integrates virtually all computing and communication subsystems on a single piece of silicon. The ESP32 contains dual CPU cores, RAM, ROM, 2.4 GHz Wi-Fi radio baseband, Bluetooth v4.2 and BLE transceivers, cryptographic hardware accelerators, and power management units, forming a complete self-contained computing system."
      },
      {
        id: "c8-wq2-2",
        chapterId: "c8-ch-2",
        question: "Describe how an HTTP GET request sent from a smartphone browser causes an ESP-connected robot motor to spin.",
        sampleAnswer: "When the user taps a 'Forward' button on the served webpage, the browser sends an HTTP request: `GET /forward HTTP/1.1`. The ESP web server handler function detects this specific URI path and immediately triggers C++ code that sets GPIO pins HIGH to the motor driver, spinning the wheels."
      }
    ],
    funFacts: [
      { id: "c8-ff-3", text: "When Chinese semiconductor company Espressif released the ESP8266 in 2014 for under $2, it sparked a global IoT revolution that disrupted multi-billion dollar industrial chipmakers!" },
      { id: "c8-ff-4", text: "The ESP32 has an ultra-low-power (ULP) co-processor that can monitor sensors while the main dual-core CPU is completely asleep, running on a coin-cell battery for years." }
    ]
  },
  {
    id: "c8-ch-3",
    classId: "class-8",
    number: 3,
    title: "Defense Robots (Sumo)",
    tagline: "Combat Dynamics, Dohyo Rings, High-Torque Traction & Wedge Physics",
    color: "#DC2626",
    iconName: "Shield",
    lessons: [
      {
        id: "c8-l3-1",
        chapterId: "c8-ch-3",
        order: 1,
        title: "Robot Sumo Competitions & Tactics",
        subtitle: "Rules of the Dohyo ring, autonomous combat categories, and strategic victory",
        summary: "Robot Sumo is a popular international robotics sport where two autonomous or remote-controlled robots attempt to push each other out of a circular arena called the **Dohyo**. Matches begin on a 5-second countdown. Victory requires pushing any part of the opponent's body outside the white border ring onto the floor.",
        keyPoints: [
          "Dohyo: Circular arena (typically 154cm diameter for standard class, 77cm for mini-sumo).",
          "Ring Surface: Matte black interior with a 5cm wide high-contrast white border line (Tawara).",
          "Zero weapons: No flipping flippers, no cutting blades, no entanglement nets; pure pushing power."
        ],
        illustrationType: "c8_sumo_rules"
      },
      {
        id: "c8-l3-2",
        chapterId: "c8-ch-3",
        order: 2,
        title: "Mechanical Defense Design & Center of Gravity",
        subtitle: "Wedge physics, ultra-low Center of Gravity (CoG), and chassis geometry",
        summary: "In sumo robotics, mechanics win matches. Robots feature razor-sharp front steel or aluminum wedges (scoops) ground down to zero ground clearance. If your wedge slips beneath the opponent's wedge, your robot lifts their front wheels off the floor, eliminating their traction and allowing you to push them effortlessly out of the ring.",
        keyPoints: [
          "Wedge angle (<25°): Acts as an inclined plane to get under opponent chassis.",
          "Low Center of Gravity (CoG): Placing heavy motors and batteries near the bottom prevents tipping.",
          "Weight maximization: Robots are built right up to the maximum competition weight limit (e.g. 500g for mini, 3kg for standard)."
        ],
        illustrationType: "c8_wedge_physics"
      },
      {
        id: "c8-l3-3",
        chapterId: "c8-ch-3",
        order: 3,
        title: "Traction Physics & High-Torque Gearmotors",
        subtitle: "Friction equation F = μ × N, silicone tires, and magnetic downforce",
        summary: "Pushing force is limited by tire traction, governed by the friction formula: $F_{friction} = \mu \times N$ (where $\mu$ is friction coefficient and $N$ is normal force). Competition sumo bots use custom cast polyurethane or silicone rubber tires that provide $\mu > 2.0$. Japanese mega-sumo robots incorporate powerful neodymium magnets to produce hundreds of kilograms of downforce on steel rings.",
        keyPoints: [
          "Traction: Pushing capacity depends on tire grip and normal downward force, not just motor power.",
          "High-torque metal gearmotors (12V–24V) geared down (e.g. 50:1 or 30:1) provide immense torque.",
          "Wheel spin without traction leads to rapid defeat; tires must be kept pristine and dust-free."
        ],
        illustrationType: "c8_traction_physics"
      },
      {
        id: "c8-l3-4",
        chapterId: "c8-ch-3",
        order: 4,
        title: "Autonomous Edge Detection & Target Acquisition",
        subtitle: "Downward IR boundary sensors paired with long-range ultrasonic/laser radar",
        summary: "An autonomous sumo bot requires two distinct sensor systems: 1. Downward-facing IR Edge Sensors on all four corners to detect the white Dohyo ring boundary and immediately command emergency reverse. 2. Forward and diagonal ultrasonic or laser Time-of-Flight (ToF) sensors that scan the arena, lock onto the opponent's position, and initiate a full-throttle charge.",
        keyPoints: [
          "Downward IR sensors: Black surface = Keep fighting; White line = REVERSE instantly!",
          "Search routine: Spin in place until the front distance sensor detects an object under 60cm.",
          "Attack routine: Ramp motors to 100% PWM and charge directly at the target coordinate."
        ],
        illustrationType: "c8_sumo_sensors"
      }
    ],
    activities: [
      {
        id: "c8-act-3",
        chapterId: "c8-ch-3",
        title: "Interactive Sumo Ring (Dohyo) Combat Arena Simulator",
        type: "c8_activity_sumo_arena",
        description: "Deploy your autonomous sumo robot against an AI opponent inside a virtual Dohyo ring: tune wedge angle, tire friction coefficient (μ), edge detection reaction time, and search-and-charge algorithms.",
        instructions: [
          "Select chassis wedge angle (15° razor scoop vs 35° blunt plate).",
          "Equip custom high-grip silicone tires (μ = 2.4).",
          "Start the 5-second countdown and observe autonomous spin-search mode.",
          "Watch the edge sensors trigger an emergency brake at the white line, counter-attack, and push the opponent out!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c8-mod-3",
        chapterId: "c8-ch-3",
        title: "Heavy-Duty Autonomous Sumo Defense Combat Bot",
        subtitle: "High-torque combat rover with front steel scoop wedge, dual edge sensors, and ultrasonic target radar",
        description: "Construct a competition-spec 500g Mini-Sumo combat robot featuring dual high-torque metal gearmotors, front ground-scraping aluminum scoop, downward optical edge sensors, and Arduino Nano brain.",
        parts: [
          { name: "Heavy Laser-Cut Steel Chassis Plate (Weighted)", count: 1 },
          { name: "Precision Beveled Aluminum Front Wedge", count: 1 },
          { name: "High-Torque 12V Metal Micro-Gearmotors (50:1)", count: 2 },
          { name: "Custom Molded Soft Silicone Rubber Tires", count: 2 },
          { name: "Downward Front IR Line Sensors", count: 2 },
          { name: "Front Ultrasonic / ToF Distance Sensor", count: 1 },
          { name: "Arduino Nano with High-Current Motor Driver", count: 1 },
          { name: "11.1V 3S High-Discharge Li-Po Battery Pack", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount the high-torque gearmotors flush to the steel base plate to keep center of gravity within 10mm of the ground." },
          { stepNumber: 2, instruction: "Install the soft silicone drive wheels, ensuring maximum surface contact patch." },
          { stepNumber: 3, instruction: "Bolt the front beveled aluminum wedge to the nose with zero ground clearance." },
          { stepNumber: 4, instruction: "Mount downward IR line sensors behind the wedge corners aimed at the floor." },
          { stepNumber: 5, instruction: "Connect motor driver to Arduino PWM outputs and wire high-discharge Li-Po battery." },
          { stepNumber: 6, instruction: "Upload autonomous combat logic: mandatory 5-second start delay, search spin, and instant edge-avoidance charge!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c8-q3-1",
        chapterId: "c8-ch-3",
        question: "What color is the border line marking the edge of a standard robot sumo ring (Dohyo)?",
        options: ["White line (5cm wide)", "Red line", "Yellow stripe", "Blue circle"],
        correctAnswer: 0,
        explanation: "The interior of the Dohyo is matte black, surrounded by a 5cm high-contrast white border called the Tawara."
      },
      {
        id: "c8-q3-2",
        chapterId: "c8-ch-3",
        question: "Why is a low Center of Gravity (CoG) essential for a sumo defense robot?",
        options: ["It prevents the robot from being flipped or tipped over when rammed by an opponent", "It makes the robot lighter", "It makes the batteries last longer", "It makes the robot bounce"],
        correctAnswer: 0,
        explanation: "A low center of gravity provides superior dynamic stability and resists rotational overturning torque."
      },
      {
        id: "c8-q3-3",
        chapterId: "c8-ch-3",
        question: "What is the mechanical purpose of a sharp, low-angle front wedge on a sumo robot?",
        options: ["To slip beneath the opponent's chassis and lift their drive wheels off the floor, breaking their traction", "To cut the opponent's wires", "To reflect sunlight", "To carry a camera"],
        correctAnswer: 0,
        explanation: "Lifting an opponent's drive wheels eliminates their normal force and traction, allowing you to push them effortlessly."
      },
      {
        id: "c8-q3-4",
        chapterId: "c8-ch-3",
        question: "According to the friction law F = μ × N, how can a robot increase its pushing traction without changing its physical weight (N)?",
        options: ["By using custom high-friction silicone or polyurethane rubber tires with a higher friction coefficient (μ)", "By using plastic wheels", "By making the wheels smaller", "By painting the chassis green"],
        correctAnswer: 0,
        explanation: "Selecting soft silicone tires with a high friction coefficient (μ > 2.0) drastically increases lateral grip force."
      },
      {
        id: "c8-q3-5",
        chapterId: "c8-ch-3",
        question: "How long is the mandatory safety delay from when the referee starts the match until the robots may begin moving?",
        options: ["5 seconds", "1 minute", "Zero seconds (immediate)", "10 milliseconds"],
        correctAnswer: 0,
        explanation: "All international sumo rules enforce a mandatory 5-second delay to allow operators to step clear of the ring."
      }
    ],
    writtenQuestions: [
      {
        id: "c8-wq3-1",
        chapterId: "c8-ch-3",
        question: "Explain the autonomous algorithm executed by a sumo bot from the instant the match starts until it pushes an opponent out.",
        sampleAnswer: "1. 5-Second Wait: Stays stationary. 2. Spin-Search: Rotates in place at 40% speed while reading distance sensors. 3. Target Lock: When the front sensor detects an object under 60cm, halts spin. 4. Charge: Drives forward at 100% PWM straight into the opponent. 5. Edge Interrupt: If downward IR sensors detect the white border line at any moment, the charge is aborted to reverse 30cm and pivot away."
      },
      {
        id: "c8-wq3-2",
        chapterId: "c8-ch-3",
        question: "Why do high-end Japanese All-Japan Robot-Sumo tournament robots incorporate powerful electromagnets on their underside?",
        sampleAnswer: "On a ferromagnetic steel Dohyo, electromagnets generate massive downward magnetic attraction (often exceeding 500–1,000 kg of normal force). Through F = μ × N, this artificial downward force creates monstrous tire traction far beyond the robot's physical 3kg weight limit."
      }
    ],
    funFacts: [
      { id: "c8-ff-5", text: "Championship Japanese mega-sumo robots accelerate from 0 to 50 km/h in less than 0.1 seconds, hitting opponents with the kinetic force of a bowling ball dropped from a building!" },
      { id: "c8-ff-6", text: "The All-Japan Robot-Sumo Tournament has been held continuously since 1989, making it the oldest continuous robotics competition on Earth!" }
    ]
  },
  {
    id: "c8-ch-4",
    classId: "class-8",
    number: 4,
    title: "Mechatronics (Hand)",
    tagline: "Bionic Prosthetics, Flex Sensors, Artificial Tendons & Teleoperation",
    color: "#059669",
    iconName: "Hand",
    lessons: [
      {
        id: "c8-l4-1",
        chapterId: "c8-ch-4",
        order: 1,
        title: "Human Hand Biomechanics vs. Bionic Arms",
        subtitle: "Phalanges, interphalangeal joints, and biological tendon routing",
        summary: "The human hand is one of nature's greatest mechanical masterpieces, possessing 27 bones, 34 muscles, and 27 degrees of freedom (DoF). Fingers do not contain muscles; instead, muscles in the forearm pull flexible tendons (like marionette strings) through smooth synovial sheaths across finger joints to curl and grip.",
        keyPoints: [
          "Phalanges: Distal, Middle, and Proximal bones forming the skeleton of each finger.",
          "Flexor Tendons pull fingers closed; Extensor Tendons pull fingers open.",
          "Biomechatronics mimics this tendon architecture to build lightweight prosthetic hands."
        ],
        illustrationType: "c8_hand_biomechanics"
      },
      {
        id: "c8-l4-2",
        chapterId: "c8-ch-4",
        order: 2,
        title: "Flex Sensors & Resistive Bend Physics",
        subtitle: "Carbon resistive ink strips and voltage divider analog conversion",
        summary: "A flex sensor (bend sensor) consists of conductive carbon resistive ink deposited on a flexible plastic substrate. When the sensor is flat, its resistance is ~10kΩ. As the sensor is bent around a finger joint, the carbon particles pull apart microscopically, increasing electrical resistance up to 30kΩ–50kΩ.",
        keyPoints: [
          "Flat position: ~10kΩ; 90° Bent position: ~30kΩ to 50kΩ.",
          "Paired with a fixed 10kΩ resistor in a voltage divider circuit to output variable voltage to an ADC.",
          "Five flex sensors sewn onto a glove monitor individual finger curling in real time."
        ],
        illustrationType: "c8_flex_sensors"
      },
      {
        id: "c8-l4-3",
        chapterId: "c8-ch-4",
        order: 3,
        title: "Servo Actuation & Artificial Tendon Systems",
        subtitle: "Nylon tendon cords, return springs, and multi-finger articulated grip",
        summary: "In an articulated bionic hand, five high-torque servo motors located in the forearm or palm act as synthetic forearm muscles. High-strength braided nylon or Kevlar tendon cords run from each servo horn through channels in the 3D-printed fingers. When a servo rotates, it pulls the cord, flexing the finger joints; internal elastic bands restore the finger straight when relaxed.",
        keyPoints: [
          "Servo rotation pulls artificial tendon cord to curl finger.",
          "Elastic silicone bands or springs act as antagonist extensor muscles.",
          "Adaptive grasping: flexible tendon routing allows fingers to conform naturally around irregular shapes (like apples or mugs)."
        ],
        illustrationType: "c8_artificial_tendons"
      },
      {
        id: "c8-l4-4",
        chapterId: "c8-ch-4",
        order: 4,
        title: "Master-Slave Robotic Teleoperation",
        subtitle: "Mirroring human finger motions in hazardous environments and prosthetics",
        summary: "In a Master-Slave teleoperation system, an operator wears a Master Data Glove equipped with flex sensors and an IMU. An Arduino samples all five finger voltages, maps the values using `map(flexVal, flatMin, bentMax, 0, 180)`, and transmits the angles over wireless radio to the Slave Robotic Bionic Hand, which mimics the human grip instantaneously.",
        keyPoints: [
          "Teleoperation allows handling hazardous nuclear materials or bomb disposal safely.",
          "Myoelectric sensors (EMG) detect electrical impulses in amputees' residual forearm muscles to command bionic hands.",
          "Provides intuitive grasping without complex joystick interfaces."
        ],
        illustrationType: "c8_master_slave_hand"
      }
    ],
    activities: [
      {
        id: "c8-act-4",
        chapterId: "c8-ch-4",
        title: "3D Interactive Bionic Hand & Flex Sensor Teleoperation Lab",
        type: "c8_activity_bionic_hand",
        description: "Bend individual virtual fingers (Thumb, Index, Middle, Ring, Pinky) on an operator data glove: observe real-time flex sensor resistance changes, voltage divider graphs, and watch the 3D articulated bionic hand replicate your grip.",
        instructions: [
          "Curl the Index finger: Watch flex sensor resistance rise from 10kΩ to 38kΩ.",
          "Observe Arduino map the voltage to a 115° servo horn pull angle.",
          "Test grasping virtual objects: a spherical ball, a cylindrical can, and a fragile lightbulb!",
          "Trigger the haptic pressure sensor feedback loop to avoid crushing delicate objects."
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c8-mod-4",
        chapterId: "c8-ch-4",
        title: "5-Finger Motorized Articulated Bionic Hand",
        subtitle: "3D-printed anthropomorphic robotic hand with braided tendon cables and 5-channel servo actuation",
        description: "Assemble a functional 5-finger prosthetic robotic hand featuring individual jointed phalanges, internal braided tendon routing, 5 metal-gear servos, and Arduino teleoperation firmware.",
        parts: [
          { name: "3D-Printed Finger Phalanges and Palm Chassis (PLA)", count: 1 },
          { name: "Micro Metal-Gear Servos (MG90S / SG90)", count: 5 },
          { name: "High-Strength Braided Fishing Line / Kevlar Cord (2m)", count: 1 },
          { name: "Elastic Silicone Return Springs / Rubber Bands", count: 5 },
          { name: "Soft Silicone Anti-Slip Finger Tip Pads", count: 5 },
          { name: "Arduino Uno with PCA9685 16-Channel Servo Driver Shield", count: 1 },
          { name: "External 5V 3A Regulated Power Supply", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Assemble the three phalanges of each finger using stainless steel pivot pins." },
          { stepNumber: 2, instruction: "Install elastic return bands on the back of each finger to hold them open by default." },
          { stepNumber: 3, instruction: "Route braided Kevlar tendon lines from fingertips through palm internal conduits." },
          { stepNumber: 4, instruction: "Mount the 5 MG90S servos inside the palm base frame." },
          { stepNumber: 5, instruction: "Tie tendon cables to the servo horns with proper pretension." },
          { stepNumber: 6, instruction: "Connect servos to the PCA9685 driver and test individual and full-fist grip maneuvers!" }
        ],
        xpReward: 160
      }
    ],
    quiz: [
      {
        id: "c8-q4-1",
        chapterId: "c8-ch-4",
        question: "How do human fingers move if there are no muscles located inside the fingers themselves?",
        options: ["Forearm muscles pull on flexible tendons running through the fingers like marionette strings", "Fingers are moved by air pressure", "Bones move on their own", "Blood pressure pumps fingers open"],
        correctAnswer: 0,
        explanation: "Finger motion is produced remotely by forearm flexor and extensor muscles pulling long biological tendons."
      },
      {
        id: "c8-q4-2",
        chapterId: "c8-ch-4",
        question: "What happens to the electrical resistance of a flex sensor when it is bent around a finger joint?",
        options: ["Its resistance increases as conductive carbon particles pull apart", "Its resistance drops to zero", "Its resistance turns negative", "It produces AC voltage"],
        correctAnswer: 0,
        explanation: "Bending flexes the conductive carbon ink layer, increasing resistance proportionally to the bend angle."
      },
      {
        id: "c8-q4-3",
        chapterId: "c8-ch-4",
        question: "In an articulated bionic hand, what physical component performs the role of biological tendons?",
        options: ["Braided nylon or Kevlar cords pulled by servo motors", "Rubber glue", "Copper pipes", "Wooden sticks"],
        correctAnswer: 0,
        explanation: "High-strength braided cables routed through internal joint channels act as artificial tendons."
      },
      {
        id: "c8-q4-4",
        chapterId: "c8-ch-4",
        question: "What type of biological sensors detect tiny electrical voltages generated by muscle contractions in an amputee's arm?",
        options: ["Electromyography (EMG) Sensors", "Barometer Sensors", "Optical Color Sensors", "Sonar Sensors"],
        correctAnswer: 0,
        explanation: "EMG sensors detect the microvolt electrical signals generated when forearm muscle fibers contract."
      },
      {
        id: "c8-q4-5",
        chapterId: "c8-ch-4",
        question: "What Arduino function maps raw flex sensor analog readings (e.g. 300 to 750) to servo angles (0 to 180)?",
        options: ["map(value, fromLow, fromHigh, toLow, toHigh)", "digitalWrite()", "delay()", "Serial.begin()"],
        correctAnswer: 0,
        explanation: "The `map()` function linearly scales a numerical value from one range into another target range."
      }
    ],
    writtenQuestions: [
      {
        id: "c8-wq4-1",
        chapterId: "c8-ch-4",
        question: "Describe how an 'adaptive grasp' mechanism in a bionic hand enables it to safely hold an irregular object like an egg or apple.",
        sampleAnswer: "In an adaptive tendon-driven grasp, fingers are not rigidly coupled together. When an individual finger touches the surface of an egg, its tendon tensions and it stops moving, while the remaining fingers continue closing until all fingers make contact, distributing grip pressure evenly without crushing the object."
      },
      {
        id: "c8-wq4-2",
        chapterId: "c8-ch-4",
        question: "Explain why servo motors in a bionic hand should be powered from a dedicated external power supply rather than directly from an Arduino 5V pin.",
        sampleAnswer: "Five servos moving together can draw peak stall currents exceeding 2 to 3 Amperes. The Arduino's onboard 5V linear voltage regulator can only supply ~500mA safely. Attempting to power multiple servos from the Arduino causes severe voltage drops (brownouts) that reset the microcontroller continuously."
      }
    ],
    funFacts: [
      { id: "c8-ff-7", text: "The human hand has over 17,000 tactile mechanoreceptors in the palm and fingertips, capable of detecting vibrations as small as 0.0001 millimeters!" },
      { id: "c8-ff-8", text: "In 2013, the non-profit 'e-NABLE' community began using open-source 3D printing to provide free mechanical prosthetic hands to thousands of children in over 80 countries." }
    ]
  },
  {
    id: "c8-ch-5",
    classId: "class-8",
    number: 5,
    title: "Drones",
    tagline: "Quadcopter Physics, Torque Cancellation, BLDC Motors & ESCs",
    color: "#0284C7",
    iconName: "Wind",
    lessons: [
      {
        id: "c8-l5-1",
        chapterId: "c8-ch-5",
        order: 1,
        title: "Quadcopter Dynamics & Torque Cancellation",
        subtitle: "Why multirotors pair Clockwise (CW) and Counter-Clockwise (CCW) propellers",
        summary: "A quadcopter is an aerial robot lifted and propelled by four rotors. Newton's Third Law dictates that spinning a propeller creates an equal and opposite reactionary torque that tries to spin the drone body in the opposite direction. By spinning two diagonally opposing motors Clockwise (CW) and the other two Counter-Clockwise (CCW), reactive torques cancel out completely, keeping the drone stable in mid-air.",
        keyPoints: [
          "Motors 1 & 4 spin Clockwise (CW); Motors 2 & 3 spin Counter-Clockwise (CCW).",
          "Balanced reactive torques prevent the drone body from uncontrollably spinning.",
          "Changing the torque ratio between CW and CCW pairs allows the drone to rotate (Yaw)."
        ],
        illustrationType: "c8_quadcopter_dynamics"
      },
      {
        id: "c8-l5-2",
        chapterId: "c8-ch-5",
        order: 2,
        title: "Flight Maneuvers: Throttle, Pitch, Roll & Yaw",
        subtitle: "How varying individual motor thrust vectoring steers a drone in 3D space",
        summary: "Quadcopters have no flaps or rudders; all 3D maneuvers are achieved purely by varying the relative speeds of the four motors: **Throttle**: All 4 motors speed up equally $\rightarrow$ Vertical climb. **Pitch**: Rear motors speed up while front slow down $\rightarrow$ Tilts forward. **Roll**: Left motors speed up while right slow down $\rightarrow$ Banks right. **Yaw**: CW motors speed up while CCW slow down $\rightarrow$ Rotates left or right.",
        keyPoints: [
          "Throttle: Controls altitude (vertical Z-axis motion).",
          "Pitch & Roll: Vector vertical thrust horizontally to fly forward/backward/left/right.",
          "Yaw: Alters torque balance to rotate heading without moving horizontally."
        ],
        illustrationType: "c8_flight_maneuvers"
      },
      {
        id: "c8-l5-3",
        chapterId: "c8-ch-5",
        order: 3,
        title: "Brushless DC (BLDC) Motors & ESCs",
        subtitle: "Permanent magnet outrunners, KV ratings, and 3-phase Electronic Speed Controllers",
        summary: "Drones do not use brushed motors because mechanical brushes spark and wear out rapidly. Instead, they use Brushless DC (BLDC) outrunner motors, where permanent magnets spin around stationary copper electromagnets. An Electronic Speed Controller (ESC) switches 3-phase high-current power thousands of times per second. Motor speed is rated in **KV** (RPM per Volt).",
        keyPoints: [
          "BLDC Outrunners: High power-to-weight ratio, zero friction brushes, high reliability.",
          "KV Rating: A 2300KV motor powered by an 11.1V battery spins at ~25,500 RPM unloaded.",
          "ESC (Electronic Speed Controller): Translates microsecond PWM throttle pulses into 3-phase AC."
        ],
        illustrationType: "c8_bldc_esc"
      },
      {
        id: "c8-l5-4",
        chapterId: "c8-ch-5",
        order: 4,
        title: "Flight Controllers & Li-Po Battery Safety",
        subtitle: "IMU sensor fusion, PID stabilization loops, and Lithium Polymer chemistry",
        summary: "A human cannot manually balance four motors spinning at 20,000 RPM. A Flight Controller computer reads an onboard 6-DOF gyro/accel thousands of times per second and executes PID (Proportional-Integral-Derivative) control algorithms to make micro-adjustments to each motor. Power is supplied by Lithium Polymer (Li-Po) batteries, which deliver massive discharge rates (C-rating) but require strict fire safety charging protocols.",
        keyPoints: [
          "Flight Controller: Executes PID loops at 1 kHz to 8 kHz for rock-solid auto-leveling.",
          "Li-Po Batteries: Nominal 3.7V per cell (3S = 11.1V, 4S = 14.8V); never discharge below 3.2V per cell.",
          "Always store and charge Li-Po batteries inside fireproof safety bags."
        ],
        illustrationType: "c8_flight_controller_lipo"
      }
    ],
    activities: [
      {
        id: "c8-act-5",
        chapterId: "c8-ch-5",
        title: "Interactive Quadcopter 4-Motor Thrust & Flight Simulator",
        type: "c8_activity_drone_simulator",
        description: "Pilot a virtual 4-rotor quadcopter in 3D physics space: control Throttle, Pitch, Roll, and Yaw joysticks, observe real-time RPM changes on all four motors (M1-M4), and balance torque vectors.",
        instructions: [
          "Increase Throttle to 50% hover thrust: observe all 4 motors spin at 12,000 RPM.",
          "Push Pitch forward: Watch rear motors (M3, M4) accelerate to 14,500 RPM while front motors (M1, M2) slow to 9,500 RPM.",
          "Apply Yaw Right: Observe CW motors speed up and CCW motors slow down.",
          "Perform a smooth landing on the helipad marker to complete your pilot certification!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c8-mod-5",
        chapterId: "c8-ch-5",
        title: "Miniature STEM Quadcopter Drone",
        subtitle: "Carbon-fiber X-frame quadcopter with brushless motors, 4-in-1 ESC, and auto-leveling flight controller",
        description: "Assemble and calibrate a micro educational quadcopter drone featuring an X-configured carbon fiber chassis, 4 coreless or brushless motors with CW/CCW props, flight controller, and 2.4GHz radio receiver.",
        parts: [
          { name: "Rigid 120mm Carbon Fiber X-Frame Chassis", count: 1 },
          { name: "High-RPM Micro Drone Motors (2x CW, 2x CCW)", count: 4 },
          { name: "Matching 65mm Propellers (2x Red CW, 2x Black CCW)", count: 4 },
          { name: "Integrated 6-DOF Flight Controller Board", count: 1 },
          { name: "Propeller Guards Safety Ring Shroud", count: 1 },
          { name: "3.7V 1S 500mAh High-Discharge Li-Po Battery", count: 1 },
          { name: "2.4GHz Handheld 4-Channel Radio Transmitter", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Press-fit the 4 motors firmly into the carbon frame arm mounts." },
          { stepNumber: 2, instruction: "Mount the flight controller board in the center with its forward arrow aligned with the frame nose." },
          { stepNumber: 3, instruction: "Install CW propellers on motors 1 and 4, and CCW propellers on motors 2 and 3." },
          { stepNumber: 4, instruction: "Attach the outer propeller safety guard bumper ring." },
          { stepNumber: 5, instruction: "Connect battery to flight controller, place on flat table, and allow gyro to calibrate zero offsets." },
          { stepNumber: 6, instruction: "Arm motors via radio stick command, gently throttle up, and enjoy stabilized hover flight!" }
        ],
        xpReward: 160
      }
    ],
    quiz: [
      {
        id: "c8-q5-1",
        chapterId: "c8-ch-5",
        question: "Why do quadcopters spin two motors Clockwise (CW) and two motors Counter-Clockwise (CCW)?",
        options: ["To cancel out rotational reactive torque so the drone body doesn't spin uncontrollably", "To make the propellers look symmetric", "Because batteries only spin one way", "To generate cold air"],
        correctAnswer: 0,
        explanation: "Spinning opposing pairs in opposite directions cancels rotational Newton reaction torques."
      },
      {
        id: "c8-q5-2",
        chapterId: "c8-ch-5",
        question: "What flight maneuver causes a quadcopter to tilt forward and fly horizontally across the ground?",
        options: ["Pitch Forward (Rear motors speed up while front motors slow down)", "Throttle Up", "Yaw Right", "Emergency Disarm"],
        correctAnswer: 0,
        explanation: "Increasing rear motor thrust tilts the vehicle forward, directing a component of the vertical lift horizontally."
      },
      {
        id: "c8-q5-3",
        chapterId: "c8-ch-5",
        question: "What does the 'KV rating' of a Brushless DC (BLDC) motor signify?",
        options: ["Rotations Per Minute (RPM) per Volt of applied voltage without load", "Kilo-Volts of electric shock", "Kilograms of maximum weight", "Kilometers of flight range"],
        correctAnswer: 0,
        explanation: "KV indicates motor velocity constant: a 2000KV motor turns at 20,000 RPM when supplied with 10 Volts."
      },
      {
        id: "c8-q5-4",
        chapterId: "c8-ch-5",
        question: "What component acts as the electronic throttle muscle between the flight controller and BLDC motors?",
        options: ["Electronic Speed Controller (ESC)", "Solderless Breadboard", "AA Battery Holder", "Resistor Band"],
        correctAnswer: 0,
        explanation: "ESCs rapidly switch high-current DC into 3-phase AC power to regulate brushless motor speed."
      },
      {
        id: "c8-q5-5",
        chapterId: "c8-ch-5",
        question: "What critical safety precaution must always be followed when handling Lithium Polymer (Li-Po) drone batteries?",
        options: ["Never over-discharge below 3.2V per cell, and always charge inside a fireproof Li-Po safety bag", "Store them in water", "Puncture the foil casing to cool them", "Charge them with 100 Volts"],
        correctAnswer: 0,
        explanation: "Li-Po chemistry is volatile if punctured or overcharged; fireproof bags and voltage monitoring prevent fires."
      }
    ],
    writtenQuestions: [
      {
        id: "c8-wq5-1",
        chapterId: "c8-ch-5",
        question: "Explain how a quadcopter executes a Yaw rotation (turning left or right) while remaining at a constant hover altitude.",
        sampleAnswer: "To Yaw right, the flight controller increases the speed of the two Counter-Clockwise (CCW) motors and decreases the speed of the two Clockwise (CW) motors by the exact same amount. The total vertical thrust remains constant (preserving altitude), but the unbalanced reactive torque spins the drone body to the right."
      },
      {
        id: "c8-wq5-2",
        chapterId: "c8-ch-5",
        question: "What is the role of the Proportional-Integral-Derivative (PID) controller algorithm inside a drone flight controller?",
        sampleAnswer: "The PID loop runs hundreds of times per second: Proportional (P) corrects current angular tilt errors; Integral (I) accumulates past errors to eliminate steady-state offsets caused by wind; Derivative (D) predicts future motion to dampen overshoots, ensuring smooth, rock-solid auto-leveling."
      }
    ],
    funFacts: [
      { id: "c8-ff-9", text: "NASA's Ingenuity helicopter made history on April 19, 2021, by achieving the first powered, controlled flight on another planet, flying 72 times in Mars's ultra-thin atmosphere!" },
      { id: "c8-ff-10", text: "Professional FPV racing drones accelerate from 0 to 100 km/h in under 1 second, exceeding the acceleration of Formula 1 race cars!" }
    ]
  },
  {
    id: "c8-ch-6",
    classId: "class-8",
    number: 6,
    title: "Prototyping",
    tagline: "Design Thinking, Rapid Fabrication, Breadboards to PCBs & DFM",
    color: "#D97706",
    iconName: "PenTool",
    lessons: [
      {
        id: "c8-l6-1",
        chapterId: "c8-ch-6",
        order: 1,
        title: "The 5 Stages of Design Thinking",
        subtitle: "Empathize, Define, Ideate, Prototype, and Test in engineering",
        summary: "Design Thinking is an iterative, human-centered problem-solving methodology used by top innovators (like Apple, IDEO, and NASA). The process consists of five non-linear stages: 1. **Empathize** (understand user needs), 2. **Define** (frame the core challenge), 3. **Ideate** (brainstorm creative solutions), 4. **Prototype** (build quick tangible models), and 5. **Test** (gather user feedback and refine).",
        keyPoints: [
          "Human-centered: focuses on real human needs rather than technology for its own sake.",
          "Iterative loop: testing reveals new insights that loop back to earlier stages.",
          "'Fail early and fail often' to discover design flaws when changes cost almost nothing."
        ],
        illustrationType: "c8_design_thinking"
      },
      {
        id: "c8-l6-2",
        chapterId: "c8-ch-6",
        order: 2,
        title: "Prototyping Fidelity: Low, Mid & High",
        subtitle: "Cardboard mockups vs 3D printed assemblies vs custom functional electronics",
        summary: "Prototyping progresses through stages of increasing fidelity: **Low-Fidelity**: Cardboard, foamcore, masking tape, and sketches built in 30 minutes to evaluate ergonomic scale. **Medium-Fidelity**: 3D printed brackets, laser-cut acrylic, and breadboard circuits. **High-Fidelity**: Production-grade custom PCBs, CNC machined enclosures, and injection-molded plastics.",
        keyPoints: [
          "Low-Fidelity: Extremely fast and cheap; tests size, ergonomics, and concepts.",
          "Mid-Fidelity: Tests mechanical clearances, kinematics, and electronic functionality.",
          "High-Fidelity: Looks and functions like a final commercial product ready for mass tooling."
        ],
        illustrationType: "c8_prototype_fidelity"
      },
      {
        id: "c8-l6-3",
        chapterId: "c8-ch-6",
        order: 3,
        title: "From Breadboard to Custom PCB",
        subtitle: "Schematic capture, PCB layout, copper traces, and Surface Mount Technology (SMT)",
        summary: "Breadboard circuits with loose jumper wires are vulnerable to vibrations in moving robots. Engineers transition designs to Printed Circuit Boards (PCBs). Using software like EasyEDA or KiCad, you draw the circuit schematic, lay out conductive copper traces, and order custom fiberglass boards (FR4) soldered with compact Surface Mount Devices (SMD/SMT).",
        keyPoints: [
          "Schematic Diagram: Logical electrical blueprint with standard component symbols.",
          "PCB Layout: Physical arrangement of components, copper tracks, vias, and ground planes.",
          "SMT (Surface Mount Technology) replaces bulky through-hole leads with tiny components soldered directly onto surface pads."
        ],
        illustrationType: "c8_pcb_design"
      },
      {
        id: "c8-l6-4",
        chapterId: "c8-ch-6",
        order: 4,
        title: "Design for Manufacturability (DFM) & Assembly (DFA)",
        subtitle: "Designing products so factories can build and assemble them affordably",
        summary: "A brilliant prototype is useless if it costs too much to manufacture at scale. Design for Manufacturing (DFM) optimizes parts for industrial processes (e.g. adding draft angles for injection molding). Design for Assembly (DFA) minimizes part counts, uses snap-fits to eliminate screws, and ensures parts can only be assembled in the correct orientation.",
        keyPoints: [
          "Standardize fasteners (use identical M3 screws across the entire robot to avoid swapping tools).",
          "Poka-Yoke (Mistake-proofing): Design asymmetric connectors so plugs cannot be inserted backwards.",
          "Minimizing fastener count dramatically reduces factory labor costs."
        ],
        illustrationType: "c8_dfm_dfa"
      }
    ],
    activities: [
      {
        id: "c8-act-6",
        chapterId: "c8-ch-6",
        title: "Interactive 5-Stage Design Thinking & PCB Trace Router Lab",
        type: "c8_activity_prototyping_lab",
        description: "Solve a real-world humanitarian robotics challenge through the 5 stages of Design Thinking, then route copper traces on a virtual dual-layer PCB without short circuits.",
        instructions: [
          "Define the user problem: 'Build an automated pill reminder rover for elderly patients'.",
          "Select optimal low-fidelity and mid-fidelity prototyping materials.",
          "Switch to the PCB Layout tab: drag ATmega chip, resistors, and LEDs.",
          "Route Red (Top Layer) and Blue (Bottom Layer) copper traces without crossing lines to pass DRC (Design Rule Check)!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c8-mod-6",
        chapterId: "c8-ch-6",
        title: "Complete Rapid Prototyped Smart Agriculture Robot",
        subtitle: "Full-cycle prototype integrating custom laser-cut chassis, 3D printed enclosures, and custom PCB shield",
        description: "Execute a full rapid-prototyping engineering cycle to create an autonomous plant-watering agricultural robot with custom laser-cut frame, 3D-printed water pump brackets, and sensor shield.",
        parts: [
          { name: "Laser-Cut Plywood / Acrylic Modular Frame", count: 1 },
          { name: "3D-Printed Submersible Water Pump Housing", count: 1 },
          { name: "Custom Designed Arduino Sensor Shield PCB", count: 1 },
          { name: "Capacitive Soil Moisture Sensor (Corrosion-resistant)", count: 1 },
          { name: "5V Submersible Water Pump with Tubing", count: 1 },
          { name: "Single-Channel 5V Relay Module", count: 1 },
          { name: "Arduino Uno R3 with 9V Battery Harness", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Build a rapid cardboard mockup to test reservoir volume and chassis balance." },
          { stepNumber: 2, instruction: "CAD model and laser-cut the waterproof acrylic main chassis plates." },
          { stepNumber: 3, instruction: "3D print the custom snap-fit pump bracket with integrated tubing guides." },
          { stepNumber: 4, instruction: "Solder the custom sensor shield PCB with screw terminals for robust wire retention." },
          { stepNumber: 5, instruction: "Program soil moisture threshold logic to pump water only when soil dryness exceeds 70%." },
          { stepNumber: 6, instruction: "Conduct rigorous 72-hour automated soil hydration testing and document engineering results!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c8-q6-1",
        chapterId: "c8-ch-6",
        question: "What is the first stage in the 5-step Design Thinking innovation process?",
        options: ["Empathize (Understand user needs and challenges)", "Prototype immediately", "Sell the product", "Write code"],
        correctAnswer: 0,
        explanation: "Empathize involves observing and engaging with end users to deeply understand their genuine problems."
      },
      {
        id: "c8-q6-2",
        chapterId: "c8-ch-6",
        question: "Why do engineers start with Low-Fidelity prototypes (like cardboard and tape) instead of making metal parts right away?",
        options: ["They are extremely fast and cheap to build, allowing flaws to be discovered before spending money", "Because metal is illegal in labs", "Because cardboard is stronger than steel", "Because low-fidelity prototypes are sold in stores"],
        correctAnswer: 0,
        explanation: "Cardboard and sketches allow rapid iteration and concept validation in minutes for pennies."
      },
      {
        id: "c8-q6-3",
        chapterId: "c8-ch-6",
        question: "What is the primary advantage of a custom Printed Circuit Board (PCB) over a solderless breadboard in a moving robot?",
        options: ["Copper traces are permanently bonded to fiberglass, preventing loose wires from shaking disconnected during vibration", "PCBs generate free electricity", "PCBs are made of paper", "PCBs do not require soldering"],
        correctAnswer: 0,
        explanation: "PCBs provide vibration resistance, compact size, noise shielding, and reliability under dynamic movement."
      },
      {
        id: "c8-q6-4",
        chapterId: "c8-ch-6",
        question: "What does 'SMT' stand for in modern electronics manufacturing?",
        options: ["Surface Mount Technology", "Simple Machine Testing", "Solid Metal Terminal", "Slow Motor Torque"],
        correctAnswer: 0,
        explanation: "Surface Mount Technology places microscopic components directly onto surface copper pads without wire leads."
      },
      {
        id: "c8-q6-5",
        chapterId: "c8-ch-6",
        question: "What Japanese manufacturing principle (Poka-Yoke) refers to designing parts so they are physically impossible to assemble incorrectly?",
        options: ["Mistake-proofing (Poka-Yoke)", "Kaizen", "Origami", "Sudoku"],
        correctAnswer: 0,
        explanation: "Poka-Yoke designs asymmetric shapes or keyed connectors (like USB or battery plugs) so they cannot be inserted backwards."
      }
    ],
    writtenQuestions: [
      {
        id: "c8-wq6-1",
        chapterId: "c8-ch-6",
        question: "Explain the philosophy of 'Fail early and fail often' in rapid engineering prototyping.",
        sampleAnswer: "Finding a design mistake in a cardboard prototype costs five minutes and zero dollars to fix. Finding that same mistake after spending $50,000 on steel injection molds can bankrupt a company. Rapid prototyping encourages testing rough ideas immediately so weaknesses are exposed and resolved early in the design cycle."
      },
      {
        id: "c8-wq6-2",
        chapterId: "c8-ch-6",
        question: "What is the difference between a circuit schematic diagram and a PCB layout diagram?",
        sampleAnswer: "A schematic diagram is an abstract logical electrical blueprint showing how components connect together using standard electrical symbols, with no relationship to physical component size or placement. A PCB layout diagram represents the physical board: exact component package dimensions, pin hole locations, and geometric copper trace routes across board layers."
      }
    ],
    funFacts: [
      { id: "c8-ff-11", text: "The famous computer mouse was originally prototyped in 1964 by Douglas Engelbart using a carved wooden block, two metal wheels, and a guitar cable!" },
      { id: "c8-ff-12", text: "James Dyson built 5,127 cardboard and plastic prototypes over 15 years before successfully perfecting his cyclonic bagless vacuum cleaner!" }
    ]
  },
  {
    id: "c8-ch-7",
    classId: "class-8",
    number: 7,
    title: "Python",
    tagline: "Artificial Intelligence, Data Structures, PySerial & Robotics Logic",
    color: "#4F46E5",
    iconName: "Terminal",
    lessons: [
      {
        id: "c8-l7-1",
        chapterId: "c8-ch-7",
        order: 1,
        title: "Why Python in Modern Robotics & AI",
        subtitle: "High-level clean syntax, extensive scientific libraries, and ROS integration",
        summary: "Python is the world's most popular programming language for Artificial Intelligence, Machine Learning, Computer Vision, and high-level robotics. With clean, readable syntax that resembles plain English, Python allows roboticists to prototype complex algorithms rapidly using libraries like OpenCV (computer vision), NumPy (matrix math), and PySerial.",
        keyPoints: [
          "Interpreted, high-level, and dynamically typed language.",
          "Core language of the Robot Operating System (ROS and ROS 2).",
          "Standard choice for computer vision, face tracking, and neural networks on Raspberry Pi."
        ],
        illustrationType: "c8_python_intro"
      },
      {
        id: "c8-l7-2",
        chapterId: "c8-ch-7",
        order: 2,
        title: "Python Syntax & Indentation Blocks",
        subtitle: "Whitespace indentation rules, variables, dynamic types, and math operators",
        summary: "Unlike C++ which uses curly braces `{}` and semicolons `;`, Python enforces code structure using **Whitespace Indentation** (typically 4 spaces). Variables are declared dynamically without needing type keywords (`speed = 100`, `distance = 24.5`, `is_clear = True`).",
        keyPoints: [
          "Indentation defines code blocks inside `if` statements, loops, and functions.",
          "Dynamic typing: Python automatically infers integers, floats, strings, and booleans.",
          "Comments start with a hash `#` symbol."
        ],
        illustrationType: "c8_python_syntax"
      },
      {
        id: "c8-l7-3",
        chapterId: "c8-ch-7",
        order: 3,
        title: "Data Structures: Lists & Dictionaries",
        subtitle: "Ordered sequences and key-value pairs for sensor telemetry datasets",
        summary: "Python provides powerful built-in data structures: **Lists** are ordered, mutable collections of items (`readings = [25.4, 18.2, 30.1]`). **Dictionaries** store key-value pairs (`telemetry = {'battery': 11.8, 'speed': 60, 'status': 'ACTIVE'}`), making sensor packet parsing and logging effortless.",
        keyPoints: [
          "Lists use square brackets `[]` and support `.append()`, `.pop()`, and slicing `[0:3]`.",
          "Dictionaries use curly braces `{}` and access data by keyword: `telemetry['battery']`.",
          "For-loops iterate directly over items: `for val in readings:`."
        ],
        illustrationType: "c8_python_data_structures"
      },
      {
        id: "c8-l7-4",
        chapterId: "c8-ch-7",
        order: 4,
        title: "Functions & Serial Communication (PySerial)",
        subtitle: "Modular functions (`def`) and communicating with microcontrollers over USB COM",
        summary: "Functions in Python are defined with the `def` keyword (`def calculate_thrust(rpm): return rpm * 0.002`). The `pySerial` library allows Python running on a laptop or Raspberry Pi to send and receive commands to an Arduino over USB: `ser = serial.Serial('COM3', 9600); ser.write(b'F')`.",
        keyPoints: [
          "Functions modularize algorithms with arguments and return values.",
          "`import serial`: Establishes real-time serial link to robot microcontroller.",
          "Enables laptops with AI cameras to command mobile robot hardware directly."
        ],
        illustrationType: "c8_pyserial_control"
      }
    ],
    activities: [
      {
        id: "c8-act-7",
        chapterId: "c8-ch-7",
        title: "Interactive Python Code Runner & Robotics AI Sandbox",
        type: "c8_activity_python_runner",
        description: "Write and execute real Python robotics scripts in the browser: parse sensor telemetry dictionaries, calculate median ultrasonic filter readings, and trigger motor drive commands.",
        instructions: [
          "Inspect the Python dictionary containing real-time robot telemetry data.",
          "Write a Python function `def check_obstacle(dist_list):` that returns True if the average distance is < 20cm.",
          "Use a Python `for` loop to filter out negative outlier noise values.",
          "Click 'Run Python Script' and inspect execution output in the virtual terminal!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c8-mod-7",
        chapterId: "c8-ch-7",
        title: "Python Desktop AI Vision & Robot Telemetry Dashboard",
        subtitle: "Full desktop Python GUI application communicating over serial to command rovers with live telemetry graphs",
        description: "Develop a complete desktop Python robotics application featuring a graphical user interface, real-time serial telemetry data plotting, keyboard teleoperation, and obstacle warning alerts.",
        parts: [
          { name: "Python 3.x Environment with PySerial & Matplotlib", count: 1 },
          { name: "Serial USB Cable connecting Laptop to Robot", count: 1 },
          { name: "Autonomous Robot Chassis with Arduino / ESP32 Brain", count: 1 },
          { name: "Real-time Telemetry Data Logging Script", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Install Python libraries: `pip install pyserial matplotlib`." },
          { stepNumber: 2, instruction: "Create a Python script that opens the COM serial port at 9600 baud." },
          { stepNumber: 3, instruction: "Build keyboard listener loop: Key 'W' sends `b'F'`, Key 'S' sends `b'B'`, Key 'A' sends `b'L'`, Key 'D' sends `b'R'`." },
          { stepNumber: 4, instruction: "Write a background thread to read incoming sensor telemetry strings from the robot." },
          { stepNumber: 5, instruction: "Plot live distance and battery voltage curves using matplotlib." },
          { stepNumber: 6, instruction: "Drive your robot smoothly from your laptop keyboard while monitoring real-time telemetry!" }
        ],
        xpReward: 160
      }
    ],
    quiz: [
      {
        id: "c8-q7-1",
        chapterId: "c8-ch-7",
        question: "How does Python define blocks of code inside functions and if-statements?",
        options: ["Using whitespace indentation (spaces or tabs)", "Using curly braces `{}`", "Using semicolons at the end of every line", "Using parentheses `()`"],
        correctAnswer: 0,
        explanation: "Python famously uses whitespace indentation instead of braces to structure code blocks cleanly."
      },
      {
        id: "c8-q7-2",
        chapterId: "c8-ch-7",
        question: "Which Python data structure stores data as key-value pairs (e.g. `{'voltage': 12.0, 'speed': 80}`)?",
        options: ["Dictionary", "List", "Tuple", "Integer"],
        correctAnswer: 0,
        explanation: "A Dictionary (`dict`) maps unique keys to associated values, ideal for labeled sensor telemetry packets."
      },
      {
        id: "c8-q7-3",
        chapterId: "c8-ch-7",
        question: "What keyword is used in Python to define a new custom function?",
        options: ["def", "function", "void", "create"],
        correctAnswer: 0,
        explanation: "The `def` keyword defines functions in Python (e.g. `def drive_forward(speed):`)."
      },
      {
        id: "c8-q7-4",
        chapterId: "c8-ch-7",
        question: "Which popular Python library is used to communicate with an Arduino or robot over a USB serial COM port?",
        options: ["pySerial", "pygame", "pandas", "django"],
        correctAnswer: 0,
        explanation: "`pySerial` (imported as `import serial`) provides straightforward serial communication across Windows, Mac, and Linux."
      },
      {
        id: "c8-q7-5",
        chapterId: "c8-ch-7",
        question: "What symbol is used for single-line comments in Python source code?",
        options: ["# (Hash symbol)", "// (Double slash)", "/* (Slash star)", "-- (Double dash)"],
        correctAnswer: 0,
        explanation: "In Python, the hash `#` symbol denotes a comment line ignored by the interpreter."
      }
    ],
    writtenQuestions: [
      {
        id: "c8-wq7-1",
        chapterId: "c8-ch-7",
        question: "Write a simple Python function `def is_safe(distance)` that returns True if distance is greater than or equal to 25.0 cm, and False otherwise.",
        sampleAnswer: "def is_safe(distance):\n    if distance >= 25.0:\n        return True\n    else:\n        return False"
      },
      {
        id: "c8-wq7-2",
        chapterId: "c8-ch-7",
        question: "Explain why modern robotics and autonomous vehicles pair Python with C++ in a hybrid software architecture.",
        sampleAnswer: "Robots use C++ for low-level, high-frequency, time-critical tasks (like 1 kHz motor control, IMU sensor reading, and emergency braking) where microsecond latency is vital. They use Python for high-level intelligence (like neural network computer vision, path planning, and cloud communications) where development speed and AI library support are paramount."
      }
    ],
    funFacts: [
      { id: "c8-ff-13", text: "Python was named by its creator Guido van Rossum not after the snake, but after the British comedy troupe 'Monty Python's Flying Circus'!" },
      { id: "c8-ff-14", text: "Artificial intelligence models running at OpenAI (like ChatGPT) and Tesla Autopilot are built and trained using Python deep learning frameworks like PyTorch!" }
    ]
  }
];

export const class8Glossary: GlossaryTerm[] = [
  { term: "Mechatronics", definition: "The synergistic integration of mechanical engineering, electronic engineering, computer science, and control theory to create smart machines.", chapterNumber: 1 },
  { term: "Actuator", definition: "A mechanical device (such as an electric motor, servo, or hydraulic cylinder) that converts control energy into physical movement.", chapterNumber: 1 },
  { term: "ESP32", definition: "A low-cost, low-power dual-core 32-bit system-on-a-chip microcontroller with integrated 2.4 GHz Wi-Fi and Bluetooth v4.2/BLE.", chapterNumber: 2 },
  { term: "Station Mode (STA)", definition: "An ESP Wi-Fi mode where the microcontroller connects as a client to an existing home or school wireless router.", chapterNumber: 2 },
  { term: "Access Point (AP)", definition: "An ESP Wi-Fi mode where the chip broadcasts its own independent wireless hotspot for direct device connections.", chapterNumber: 2 },
  { term: "Dohyo", definition: "The circular competition arena used in robot sumo matches, featuring a black interior and a 5cm white boundary ring.", chapterNumber: 3 },
  { term: "Center of Gravity (CoG)", definition: "The average location of the weight of a robot; keeping CoG low prevents tipping during combat maneuvers.", chapterNumber: 3 },
  { term: "Flex Sensor", definition: "A bend sensor whose electrical resistance increases as its conductive carbon ink strip is bent around a finger joint.", chapterNumber: 4 },
  { term: "Bionic Prosthetic", definition: "An artificial robotic limb that replicates biological limb function using electric motors, artificial tendons, and sensor feedback.", chapterNumber: 4 },
  { term: "BLDC Motor", definition: "Brushless DC motor, an electric motor that utilizes permanent magnets and electronic 3-phase commutation instead of mechanical carbon brushes.", chapterNumber: 5 },
  { term: "ESC", definition: "Electronic Speed Controller, an electronic module that rapidly switches battery power to drive and regulate brushless drone motors.", chapterNumber: 5 },
  { term: "KV Rating", definition: "The velocity constant of a brushless motor, indicating how many RPM the motor will spin per Volt of applied DC voltage without load.", chapterNumber: 5 },
  { term: "Design Thinking", definition: "A five-stage human-centered innovation methodology: Empathize, Define, Ideate, Prototype, and Test.", chapterNumber: 6 },
  { term: "Printed Circuit Board (PCB)", definition: "A rigid fiberglass board (FR4) with etched copper traces that permanently connects electronic components without loose wires.", chapterNumber: 6 },
  { term: "Python", definition: "A high-level, interpreted programming language widely used in robotics, computer vision, and Artificial Intelligence.", chapterNumber: 7 },
  { term: "PySerial", definition: "A Python library providing cross-platform access to USB serial communication ports linking computers to microcontrollers.", chapterNumber: 7 }
];

export const class8Badges: Badge[] = [
  {
    id: "c8-badge-mechatronics",
    title: "Mechatronics Integrator",
    description: "Mastered the 4-pillar synergy of mechanical, electrical, control, and computing systems.",
    icon: "Cpu",
    unlockedAtXp: 100
  },
  {
    id: "c8-badge-iot",
    title: "IoT Cloud Architect",
    description: "Configured ESP32 Wi-Fi modes and hosted an embedded HTTP web server robot dashboard.",
    icon: "Wifi",
    unlockedAtXp: 250
  },
  {
    id: "c8-badge-sumo",
    title: "Sumo Combat Master",
    description: "Engineered a high-torque defense robot with wedge physics and white edge detection.",
    icon: "Shield",
    unlockedAtXp: 400
  },
  {
    id: "c8-badge-bionic",
    title: "Bionic Hand Bioengineer",
    description: "Constructed a 5-finger articulated prosthetic hand controlled by flex sensor teleoperation.",
    icon: "Hand",
    unlockedAtXp: 550
  },
  {
    id: "c8-badge-drone",
    title: "Drone Flight Dynamics Ace",
    description: "Balanced quadcopter counter-rotating torque vectors, BLDC motors, and 3D flight maneuvers.",
    icon: "Wind",
    unlockedAtXp: 700
  },
  {
    id: "c8-badge-ai-python",
    title: "Python Robotics Programmer",
    description: "Programmed data structures, telemetry streaming, and PySerial robot controllers in Python.",
    icon: "Terminal",
    unlockedAtXp: 850
  }
];
