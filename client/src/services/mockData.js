// Comprehensive Multi-Level Educational Data for RoboLearn LMS
// Tailored for:
// 1. Primary School (Grades 1-5) - Ananya Patel
// 2. Middle School (Grades 6-8) - Aarav Sharma
// 3. Secondary School (Grades 9-12) - Kabir Mehta

// ==========================================================
// 1. PRIMARY SCHOOL LESSONS (Grades 1–5)
// Style: Extremely simple, short words, visual, fun, kid-friendly
// ==========================================================
export const PRIMARY_LESSONS = [
  {
    id: 'p-lesson-1',
    levelId: 'primary',
    order: 1,
    title: 'What is a Robot?',
    subtitle: 'Meet our friendly machine helpers!',
    duration: '5 mins',
    icon: '🤖',
    coverIllustration: 'happy-robot',
    shortIntro: 'A robot is a helpful machine that can do tasks for us!',
    explanation: 'A robot is not alive like a dog or a human, but it can move and help us. You can give a robot instructions, and it follows them carefully. Some robots clean floors, some build toys in factories, and some even fly into space!',
    didYouKnow: 'The word "Robot" comes from a story about helpful machine workers!',
    importantPoints: [
      'A robot is a machine made of metal, plastic, and wires.',
      'Robots do jobs that are hard, heavy, or boring for humans.',
      'A robot needs electricity from a battery to wake up and work.'
    ],
    realWorldExample: {
      title: 'Example: Room Cleaning Robot 🧹',
      description: 'A round vacuum robot rolls around the carpet all by itself, picking up crumbs and avoiding table legs!'
    },
    miniQuiz: {
      question: 'What helps a robot know what is around it?',
      options: [
        'A Sensor (like robot eyes)',
        'A wooden chair',
        'A storybook',
        'A drawing pencil'
      ],
      correctIndex: 0,
      explanation: 'Sensors act like robot eyes and ears so the robot does not bump into walls!'
    }
  },
  {
    id: 'p-lesson-2',
    levelId: 'primary',
    order: 2,
    title: 'Robots Around Us',
    subtitle: 'Spotting robot helpers in everyday life',
    duration: '5 mins',
    icon: '🏠',
    coverIllustration: 'smart-home',
    shortIntro: 'Robots are not just in sci-fi movies—they are in our homes and cities right now!',
    explanation: 'Have you ever seen an automatic sliding door at the supermarket? Or a robotic toy dog that barks when you clap? These are simple robots that help us and play with us every single day!',
    didYouKnow: 'Some friendly robots deliver food trays in hospitals and restaurants!',
    importantPoints: [
      'Automatic doors use motion sensors to open when you walk close.',
      'Dishwashers and washing machines use robot timers to wash clothes.',
      'Robot toys have sound sensors that listen to your voice and claps.'
    ],
    realWorldExample: {
      title: 'Example: Supermarket Doors 🚪',
      description: 'When you step near the door, a magic motion sensor spots you and tells the motor to slide the door open!'
    },
    miniQuiz: {
      question: 'Which of these is a robot helper you might see in a home or city?',
      options: [
        'An automatic robot vacuum cleaner',
        'A wooden spoon',
        'A glass cup',
        'A paper notebook'
      ],
      correctIndex: 0,
      explanation: 'Robot vacuum cleaners move across floors by themselves to keep rooms clean!'
    }
  },
  {
    id: 'p-lesson-3',
    levelId: 'primary',
    order: 3,
    title: 'Parts of a Robot',
    subtitle: 'Body, Brain, Battery, and Muscles',
    duration: '6 mins',
    icon: '🧩',
    coverIllustration: 'robot-parts',
    shortIntro: 'Just like your body has bones and muscles, a robot is built with matching parts!',
    explanation: 'A robot has 4 main parts: 1. Body (the plastic frame), 2. Battery (the robot\'s food), 3. Computer Brain (runs the instructions), and 4. Motors (the muscles that make it move).',
    didYouKnow: 'A robot brain is a tiny computer chip smaller than a postage stamp!',
    importantPoints: [
      'Body / Frame: Holds all parts together safely.',
      'Battery: Supplies electric power like breakfast food.',
      'Brain: Remembers what to do and makes decisions.',
      'Motors: Turn wheels and wave robot arms.'
    ],
    realWorldExample: {
      title: 'Human Body vs Robot Body 🧑‍🤝‍🧑',
      description: 'Human Eyes = Robot Sensors | Human Brain = Computer Chip | Human Muscles = Electric Motors | Human Food = Battery Power!'
    },
    miniQuiz: {
      question: 'What gives power to a robot so it can turn on?',
      options: [
        'A Battery (electricity)',
        'A slice of pizza',
        'A glass of milk',
        'A storybook'
      ],
      correctIndex: 0,
      explanation: 'Batteries store electrical energy that flows into the robot\'s brain and motors!'
    }
  },
  {
    id: 'p-lesson-4',
    levelId: 'primary',
    order: 4,
    title: 'Wheels and Movement',
    subtitle: 'How toy rovers roll, spin, and turn',
    duration: '6 mins',
    icon: '🚗',
    coverIllustration: 'wheels-motion',
    shortIntro: 'How do robots get from one side of the room to the other? Let\'s discover wheels!',
    explanation: 'Most school robots use 2 or 4 rubber wheels connected to small motors. If both wheels spin forward, the robot drives straight. If only the left wheel spins, the robot makes a turn to the right!',
    didYouKnow: 'Some robots have tank tracks or 4 legs instead of wheels so they can climb stairs!',
    importantPoints: [
      'Two wheels can make a robot drive forward and backward.',
      'Spinning wheels in opposite directions makes the robot spin in a circle on the spot!',
      'Rubber tires give grip so the robot does not slip on smooth tiles.'
    ],
    realWorldExample: {
      title: 'Example: Toy RC Car 🏎️',
      description: 'When you push the joystick forward on the remote, both wheel motors spin together to zoom across the carpet.'
    },
    miniQuiz: {
      question: 'What happens if a robot\'s left wheel spins forward while its right wheel stops?',
      options: [
        'The robot turns toward the right',
        'The robot flies into the air',
        'The robot turns off forever',
        'The robot becomes invisible'
      ],
      correctIndex: 0,
      explanation: 'When one wheel stops and the other rolls, the robot naturally pivots and turns in that direction!'
    }
  },
  {
    id: 'p-lesson-5',
    levelId: 'primary',
    order: 5,
    title: 'Simple Sensors (Robot Senses)',
    subtitle: 'Eyes, ears, and touch for machines',
    duration: '7 mins',
    icon: '👁️',
    coverIllustration: 'sensors-kids',
    shortIntro: 'How do robots see without human eyes? They use cool sensors!',
    explanation: 'Sensors are electronic senses. A light sensor knows when the sun comes up. A sound sensor hears a loud clap. A distance sensor knows when a wall is too close!',
    didYouKnow: 'Bats use sound echoes to fly in the dark, and robots use the exact same sound waves!',
    importantPoints: [
      'Light Sensor: Senses bright light vs dark shadows.',
      'Sound Sensor: Listens for claps or voices.',
      'Distance Sensor: Pings sound waves to measure how far objects are.',
      'Bumper Sensor: Clicks when the robot bumps gently into a toy.'
    ],
    realWorldExample: {
      title: 'Example: Night Light Robot 💡',
      description: 'When you turn off the bedroom lamp, the robot\'s light sensor notices the dark and automatically glows a soft friendly color!'
    },
    miniQuiz: {
      question: 'What does a robot light sensor detect?',
      options: [
        'Brightness and darkness in the room',
        'The taste of ice cream',
        'The smell of flowers',
        'The weight of a heavy rock'
      ],
      correctIndex: 0,
      explanation: 'Light sensors measure how bright or dark the surrounding room is!'
    }
  },
  {
    id: 'p-lesson-6',
    levelId: 'primary',
    order: 6,
    title: 'Motors for Kids',
    subtitle: 'Making things spin, lift, and wave',
    duration: '6 mins',
    icon: '⚙️',
    coverIllustration: 'motors-simple',
    shortIntro: 'Motors are the muscles that make robot parts move!',
    explanation: 'An electric motor takes electricity from the battery and turns it into spinning motion. We attach motors to wheels to make rovers drive, or to robot arms to wave hello!',
    didYouKnow: 'A tiny motor inside a toy car can spin over 100 times in just one second!',
    importantPoints: [
      'Spinning Motors: Perfect for rover wheels and propeller fans.',
      'Servo Motors: Special motors that turn to exact angles like lifting an arm 90 degrees.',
      'Motors make robot work possible without any human pushing.'
    ],
    realWorldExample: {
      title: 'Example: Electric Fan 🌀',
      description: 'When you press the button, the motor spins the blades super fast to blow cool air across the classroom!'
    },
    miniQuiz: {
      question: 'What do motors turn electrical battery power into?',
      options: [
        'Spinning physical motion and movement',
        'Cold ice cubes',
        'Story books',
        'Soap bubbles'
      ],
      correctIndex: 0,
      explanation: 'Electric motors convert electrical voltage into spinning mechanical movement!'
    }
  },
  {
    id: 'p-lesson-7',
    levelId: 'primary',
    order: 7,
    title: 'What Can Robots Do?',
    subtitle: 'Exploring amazing jobs robots do on Earth and Space',
    duration: '6 mins',
    icon: '🚀',
    coverIllustration: 'space-rover',
    shortIntro: 'Robots can explore deep oceans, build shiny cars, and roll on the red planet Mars!',
    explanation: 'Because robots do not get tired, hungry, or scared of extreme cold, they can explore dangerous places where humans cannot go easily. NASA has robot cars exploring Mars right now!',
    didYouKnow: 'The Mars Curiosity Rover has been driving on Mars for over 10 years without ever coming back to Earth!',
    importantPoints: [
      'Factory Robots: Put together cars and toys with high speed.',
      'Space Rovers: Take photos of rocks and dirt on other planets.',
      'Rescue Robots: Help firefighters look inside smoky buildings safely.'
    ],
    realWorldExample: {
      title: 'Example: Mars Rover Perseverance 🪐',
      description: 'A robotic rover with cameras, wheels, and a robot arm drives on Mars, sending photos back to scientists on Earth!'
    },
    miniQuiz: {
      question: 'Why are robots great for exploring outer space on planets like Mars?',
      options: [
        'They do not need air to breathe or food to eat',
        'They only eat martian rocks',
        'They like space aliens',
        'They cannot be photographed'
      ],
      correctIndex: 0,
      explanation: 'Robots can survive the vacuum of space, extreme cold, and radiation without needing oxygen!'
    }
  },
  {
    id: 'p-lesson-8',
    levelId: 'primary',
    order: 8,
    title: 'Basic Robot Safety',
    subtitle: 'How to play and build safely with electronics',
    duration: '5 mins',
    icon: '🛡️',
    coverIllustration: 'safety-kids',
    shortIntro: 'Being a great junior robotics engineer means always building safely!',
    explanation: 'Robots use wires, batteries, and small motors. Always keep batteries away from water, ask a teacher or parent before plugging in wires, and never put small parts in your mouth.',
    didYouKnow: 'Real robot laboratories have bright yellow safety lines painted on the floor!',
    importantPoints: [
      'Always wash your hands after handling electronics and wires.',
      'Keep water and drinks away from robot parts.',
      'Turn off the battery switch when you finish playing with your robot rover.'
    ],
    realWorldExample: {
      title: 'Example: Classroom Maker Rule 📐',
      description: 'Keep your desk clean and always turn off the power switch before changing wheel parts!'
    },
    miniQuiz: {
      question: 'What should you do before changing parts or wheels on your robot?',
      options: [
        'Turn off the battery power switch',
        'Throw water on the robot',
        'Put the wires in your mouth',
        'Drop it on the floor'
      ],
      correctIndex: 0,
      explanation: 'Turning off power prevents accidental motor spins or wire shorts while building!'
    }
  }
];

// ==========================================================
// 2. MIDDLE SCHOOL LESSONS (Grades 6–8)
// Style: Explanations, diagrams, components, technical concepts, activities
// ==========================================================
export const MIDDLE_LESSONS = [
  {
    id: 'm-lesson-1',
    levelId: 'middle',
    order: 1,
    title: 'Introduction to Robotics & Sense-Think-Act',
    subtitle: 'The fundamental 3-stage loop of all automated machines',
    duration: '9 mins',
    icon: '🔄',
    coverIllustration: 'sense-think-act',
    shortIntro: 'Every autonomous robot on Earth follows a continuous cycle: Sense → Think → Act.',
    explanation: 'Robotics combines mechanical engineering, electronics, and software programming. The robot senses its environment using transducers, processes data using a microcontroller with logical code (if/else), and acts using actuators like motors and lights.',
    didYouKnow: 'An Arduino microcontroller can repeat the Sense-Think-Act loop over 16 million times in one second!',
    importantPoints: [
      'SENSE: Transducers convert physical signals (light, distance, heat) into electrical voltage.',
      'THINK: Microcontroller executes algorithms and conditional decision trees.',
      'ACT: Actuators convert electrical commands into physical force, motion, or acoustic sound.'
    ],
    realWorldExample: {
      title: 'Autonomous Emergency Braking 🚗',
      description: 'Ultrasonic/Radar sensor detects pedestrian 4 meters away (Sense). Car computer computes collision hazard (Think). Brakes clamp down immediately (Act).'
    },
    miniQuiz: {
      question: 'Which stage of the loop does the Arduino Microcontroller perform?',
      options: [
        'THINK: Processing sensor input data and computing motor output commands',
        'SENSE: It is only a physical bumper',
        'ACT: It is the rubber tire',
        'POWER: It is the chemical battery'
      ],
      correctIndex: 0,
      explanation: 'The microcontroller is the computing brain that executes decision logic in the THINK stage!'
    }
  },
  {
    id: 'm-lesson-2',
    levelId: 'middle',
    order: 2,
    title: 'Robot Components & Chassis Design',
    subtitle: 'Mechanical frames, power distribution, and component mounting',
    duration: '10 mins',
    icon: '🛠️',
    coverIllustration: 'chassis-design',
    shortIntro: 'A reliable robot starts with strong mechanical design and clean electrical distribution.',
    explanation: 'A robot chassis provides the structural foundation. Differential drive rovers use two independent motorized wheels plus a passive 360-degree castor wheel for balance, eliminating the need for complex rack-and-pinion steering gears.',
    didYouKnow: 'Acrylic and 3D-printed PLA plastics are the two most popular lightweight materials for school robotics chassis!',
    importantPoints: [
      'Differential Drive: Steering achieved by varying left vs right wheel speeds.',
      'Castor Wheel: Low-friction pivoting third contact point.',
      'Center of Gravity: Placing heavy batteries low prevents tipping over during rapid stops.'
    ],
    realWorldExample: {
      title: 'Warehouse Logistics AGV 📦',
      description: 'Industrial automated guided vehicles use differential drive chassis to pivot 360 degrees on the spot in tight factory aisles.'
    },
    miniQuiz: {
      question: 'How does a 2-wheel differential drive robot turn toward the LEFT?',
      options: [
        'Slow down or reverse the Left motor while driving the Right motor forward',
        'Turn a mechanical steering wheel with a servo',
        'Turn off both motors completely',
        'Disconnect the battery'
      ],
      correctIndex: 0,
      explanation: 'Slowing the left wheel causes the right wheel to swing the rover smoothly toward the left!'
    }
  },
  {
    id: 'm-lesson-3',
    levelId: 'middle',
    order: 3,
    title: 'Sensors and Actuators in Detail',
    subtitle: 'Connecting digital/analog inputs and mechanical outputs',
    duration: '12 mins',
    icon: '🔌',
    coverIllustration: 'sensors-actuators',
    shortIntro: 'Sensors are inputs that feed data to Arduino; Actuators are outputs that interact with the physical world.',
    explanation: 'Sensors convert physical phenomena into electrical signals. Actuators take low-power digital signals from the Arduino and control high-power physical devices like DC motors, servo horns, buzzers, and LED indicators.',
    didYouKnow: 'Ultrasonic sensors use 40kHz sound waves—well above the 20kHz human hearing limit!',
    importantPoints: [
      'Input Devices (Sensors): Ultrasonic HC-SR04, IR Proximity, LDR Light Resistor, PIR Motion.',
      'Output Devices (Actuators): DC Geared Motors, SG90 Servo Motors, Piezo Buzzers, Relays.',
      'Voltage Levels: Standard Arduino logic uses 5V for HIGH and 0V for LOW.'
    ],
    realWorldExample: {
      title: 'Smart Streetlight System 💡',
      description: 'An LDR sensor measures falling sunlight. When light drops below threshold, Arduino signals a relay actuator to energize high-voltage street lamps.'
    },
    miniQuiz: {
      question: 'Which of the following is an ACTUATOR (Output device)?',
      options: [
        'DC Geared Motor that spins wheels',
        'Ultrasonic distance sensor',
        'LDR light intensity sensor',
        'Push button switch'
      ],
      correctIndex: 0,
      explanation: 'A motor is an actuator because it converts electrical energy into physical mechanical movement!'
    }
  },
  {
    id: 'm-lesson-4',
    levelId: 'middle',
    order: 4,
    title: 'Electric Motors & Drivers',
    subtitle: 'DC motors, Servo motors, and the L298N H-Bridge bridge',
    duration: '11 mins',
    icon: '⚙️',
    coverIllustration: 'motors-driver',
    shortIntro: 'Why can\'t we connect a DC motor directly to an Arduino pin? Because motors draw massive current!',
    explanation: 'An Arduino pin can only output 20-40mA of current, but a DC motor under load draws 500-1500mA. An H-Bridge motor driver (like L298N or L293D) acts as a high-current switch amplifier, allowing the Arduino to safely control motor speed (via PWM) and direction.',
    didYouKnow: 'The "H-Bridge" gets its name from the 4 internal switching transistors arranged in the shape of the letter H!',
    importantPoints: [
      'DC Motors: Continuous high-speed rotation, ideal for drive wheels.',
      'Servo Motors: Controlled angular rotation from 0° to 180° using PWM pulse timing.',
      'Motor Driver: Isolates high motor battery current from delicate microcontroller logic.'
    ],
    realWorldExample: {
      title: 'Robotic Gripper Claw 🦾',
      description: 'A micro servo motor rotates exactly 45 degrees to gently clamp fingers around a table tennis ball without crushing it.'
    },
    miniQuiz: {
      question: 'What is the main function of a Motor Driver (like L298N)?',
      options: [
        'To safely supply high battery current to motors using low-power control signals from Arduino',
        'To store video files',
        'To make the Arduino heavier',
        'To replace the wheels'
      ],
      correctIndex: 0,
      explanation: 'Motor drivers amplify low-current Arduino signals into high-current motor power safely!'
    }
  },
  {
    id: 'm-lesson-5',
    levelId: 'middle',
    order: 5,
    title: 'Arduino Introduction & IDE',
    subtitle: 'Meet the open-source microcontroller board that powers student robotics',
    duration: '12 mins',
    icon: '⚡',
    coverIllustration: 'arduino-intro',
    shortIntro: 'Arduino UNO is an easy-to-use microcontroller board based on the ATmega328P chip.',
    explanation: 'Arduino programs are called Sketches and contain two mandatory functions: `void setup()` which runs once at startup to configure pins, and `void loop()` which executes repeatedly forever to monitor sensors and control outputs.',
    didYouKnow: 'Arduino was invented by university teachers in Ivrea, Italy in 2005 to make electronics accessible to everyone!',
    importantPoints: [
      'Digital Pins (0-13): Read or write HIGH (5V) and LOW (0V).',
      'Analog Pins (A0-A5): Read continuous sensor voltages from 0 to 1023 (10-bit ADC).',
      'Power Pins: 5V, 3.3V, and GND (Ground).'
    ],
    realWorldExample: {
      title: 'The "Blink" Program 💡',
      description: 'Writing `digitalWrite(13, HIGH); delay(1000); digitalWrite(13, LOW); delay(1000);` flashes the onboard LED every second.'
    },
    miniQuiz: {
      question: 'Which Arduino code function runs repeatedly over and over forever?',
      options: [
        'void loop()',
        'void setup()',
        'void exit()',
        'void sleep()'
      ],
      correctIndex: 0,
      explanation: 'void loop() executes continuously in an infinite cycle as long as Arduino has power!'
    }
  },
  {
    id: 'm-lesson-6',
    levelId: 'middle',
    order: 6,
    title: 'Digital and Analog Signals',
    subtitle: 'Understanding 0/1 states vs continuous voltage levels',
    duration: '10 mins',
    icon: '📊',
    coverIllustration: 'signals-graph',
    shortIntro: 'Computers understand 1s and 0s, but nature is analog! Learn how Arduino bridges both worlds.',
    explanation: 'A Digital signal has only 2 distinct states: HIGH (5V / TRUE) or LOW (0V / FALSE). An Analog signal is continuous (like temperature or light brightness). Arduino converts analog voltages (0V-5V) into numbers from 0 to 1023 using an Analog-to-Digital Converter (ADC).',
    didYouKnow: 'PWM (Pulse Width Modulation) lets digital pins simulate intermediate voltages like 2.5V by pulsing electricity super fast!',
    importantPoints: [
      'digitalRead(pin): Returns HIGH or LOW (used for buttons, touch sensors).',
      'analogRead(pin): Returns 0 to 1023 (used for potentiometers, LDRs, temperature).',
      'analogWrite(pin, value): Outputs PWM duty cycle from 0 (off) to 255 (full speed).'
    ],
    realWorldExample: {
      title: 'Dimming a Robot Headlight LED 🔦',
      description: 'Using `analogWrite(9, 128)` runs the LED at 50% brightness by pulsing power at 490 Hz.'
    },
    miniQuiz: {
      question: 'What range of values does Arduino analogRead() return for a 0V to 5V sensor?',
      options: [
        '0 to 1023',
        '0 to 10',
        '1 to 100',
        '-5 to +5'
      ],
      correctIndex: 0,
      explanation: 'Arduino has a 10-bit ADC, which divides 5V into 2^10 = 1024 distinct steps (0 to 1023)!'
    }
  },
  {
    id: 'm-lesson-7',
    levelId: 'middle',
    order: 7,
    title: 'Basic Robot Programming',
    subtitle: 'Variables, conditional if/else statements, and decision trees',
    duration: '12 mins',
    icon: '💻',
    coverIllustration: 'code-logic-m',
    shortIntro: 'Giving robots intelligence through conditional programming logic.',
    explanation: 'Robot code uses variables to store sensor readings (e.g. `int distance;`). Conditional statements like `if (distance < 20)` let the robot choose between driving forward or executing an avoidance maneuver.',
    didYouKnow: 'Boolean logic was invented by mathematician George Boole in 1847—long before modern computers existed!',
    importantPoints: [
      'Variables: Named containers that store numbers (`int speed = 200;`).',
      'Comparison Operators: `==` (equal), `<` (less than), `>` (greater than).',
      'Logical Operators: `&&` (AND), `||` (OR), `!` (NOT).'
    ],
    realWorldExample: {
      title: 'Smart Thermostat Fan ❄️',
      description: '`if (temp > 30) { turnFanON(); } else { turnFanOFF(); }` automatically cools the robotics lab when room temperature climbs.'
    },
    miniQuiz: {
      question: 'What does the code `if (distance < 15) { stopMotors(); }` do?',
      options: [
        'Stops the robot motors if an object is closer than 15 cm',
        'Makes the robot drive at 15 km/h',
        'Increases the battery voltage to 15V',
        'Plays 15 songs'
      ],
      correctIndex: 0,
      explanation: 'The if statement tests whether distance is less than 15, and if true, calls the stopMotors() function!'
    }
  },
  {
    id: 'm-lesson-8',
    levelId: 'middle',
    order: 8,
    title: 'Line Following Robots',
    subtitle: 'Optical infrared surface reflectivity and differential tracking',
    duration: '14 mins',
    icon: '🛤️',
    coverIllustration: 'line-follower-m',
    shortIntro: 'How autonomous warehouse robots navigate high-contrast floor paths with millimeter accuracy.',
    explanation: 'Two Infrared (IR) sensors are mounted underneath facing the floor. White floors reflect infrared light back to the photodiode (HIGH), while black tape absorbs infrared light (LOW). By comparing left and right sensors, the robot steers to keep centered.',
    didYouKnow: 'Amazon warehouse fulfillment centers use over 750,000 mobile robots following floor markers!',
    importantPoints: [
      'Both White: Move straight forward.',
      'Left sees Black line: Pivot Left to realign.',
      'Right sees Black line: Pivot Right to realign.',
      'Both see Black (Intersection): Stop or follow intersection rule.'
    ],
    realWorldExample: {
      title: 'Hospital Medicine Transport Trolley 🏥',
      description: 'An automated cart follows color-coded guide lines painted on hospital floors to deliver meals and medication safely to patient wards.'
    },
    miniQuiz: {
      question: 'Why does an Infrared (IR) sensor detect a black tape line on a white floor?',
      options: [
        'Black surfaces absorb IR light (low reflection), while white surfaces reflect IR light back into the receiver',
        'Black tape is magnetic',
        'Black tape emits sound waves',
        'White surfaces are colder'
      ],
      correctIndex: 0,
      explanation: 'Dark pigments absorb infrared light wavelengths, producing a sharp drop in reflected voltage!'
    }
  },
  {
    id: 'm-lesson-9',
    levelId: 'middle',
    order: 9,
    title: 'Obstacle Avoiding Robots',
    subtitle: 'Ultrasonic sound pinging and spatial obstacle avoidance logic',
    duration: '13 mins',
    icon: '🛡️',
    coverIllustration: 'obstacle-avoider-m',
    shortIntro: 'Building a rover that never crashes by using ultrasonic sound echolocation.',
    explanation: 'An HC-SR04 Ultrasonic sensor emits a 40kHz sound burst from its Trigger pin. It measures the time in microseconds for the echo to bounce off a wall and return to the Echo pin. Distance is calculated as: `Distance = (Time × 0.0343) / 2`.',
    didYouKnow: 'Submarines use the exact same acoustic principle called SONAR (Sound Navigation and Ranging) to map the seafloor!',
    importantPoints: [
      'Speed of sound in air: Approximately 343 meters per second (0.0343 cm/µs).',
      'Division by 2: Required because the sound wave makes a round trip (forward and back).',
      'Safe threshold: Stopping when distance < 20 cm prevents collision momentum.'
    ],
    realWorldExample: {
      title: 'Robotic Lawn Mower 🌿',
      description: 'Monitors the lawn perimeter; when a tree trunk or garden chair is detected 30cm ahead, it stops, pans its sensor, and steers safely around.'
    },
    miniQuiz: {
      question: 'In the ultrasonic distance formula `(Time × 0.0343) / 2`, why do we divide by 2?',
      options: [
        'Because the sound wave travels to the obstacle AND bounces back (round trip)',
        'Because the robot has 2 wheels',
        'Because the Arduino has 2 microchips',
        'Because sound speed is cut in half by gravity'
      ],
      correctIndex: 0,
      explanation: 'The measured time covers the forward trip and return bounce, so dividing by 2 yields the true one-way distance!'
    }
  },
  {
    id: 'm-lesson-10',
    levelId: 'middle',
    order: 10,
    title: 'Robotics Logic & State Flow',
    subtitle: 'Structuring robot code using state variables and flowcharts',
    duration: '12 mins',
    icon: '🧠',
    coverIllustration: 'state-logic',
    shortIntro: 'Mastering clean code organization so your robot can multitask smoothly.',
    explanation: 'Robots behave reliably when structured into discrete modes called States (e.g. `STATE_PATROL`, `STATE_AVOID`, `STATE_ALARM`). Using a `switch(currentState)` statement allows the robot to handle complex behaviors without messy code.',
    didYouKnow: 'Mars rovers switch into "Safe Mode" automatically if temperature or battery power drops below critical levels!',
    importantPoints: [
      'State Variables: Keep track of active operating mode.',
      'Flowcharts: Visual diagrams mapping decision branches before writing code.',
      'Non-blocking timers: Using `millis()` instead of `delay()` so sensors can be read continuously.'
    ],
    realWorldExample: {
      title: 'Smart Dustbin State Machine 🗑️',
      description: 'State 1: LID_CLOSED (monitoring hand sensor) → State 2: OPENING_LID → State 3: WAIT_TIMER (4 seconds) → State 4: CLOSING_LID.'
    },
    miniQuiz: {
      question: 'Why is using `delay()` problematic in advanced autonomous robots?',
      options: [
        'Because delay() freezes CPU execution, preventing the robot from reading emergency sensors during the wait',
        'Because delay() drains the battery instantly',
        'Because delay() breaks the motor gears physically',
        'Because delay() is only for web browsers'
      ],
      correctIndex: 0,
      explanation: 'delay() halts microcontroller execution completely, making the robot blind to obstacles during the pause!'
    }
  }
];

// ==========================================================
// 3. SECONDARY SCHOOL LESSONS (Grades 9–12)
// Style: Technical explanations, circuit concepts, programming logic, algorithms, IoT, project design
// ==========================================================
export const SECONDARY_LESSONS = [
  {
    id: 's-lesson-1',
    levelId: 'secondary',
    order: 1,
    title: 'Robotics Fundamentals & Kinematics',
    subtitle: 'Coordinate frames, degrees of freedom (DoF), and spatial transformations',
    duration: '15 mins',
    icon: '📐',
    coverIllustration: 'kinematics-s',
    shortIntro: 'Rigorous engineering foundations of mobile robotics and multi-axis manipulator kinematics.',
    explanation: 'Robotics systems are governed by forward and inverse kinematics. Degrees of Freedom (DoF) define the number of independent variables determining configuration. For articulated arms, homogeneous transformation matrices translate joint angles into Cartesian (X, Y, Z, Roll, Pitch, Yaw) tool tip coordinates.',
    didYouKnow: 'The Canadarm2 on the International Space Station has 7 degrees of freedom and moves payloads up to 116,000 kg!',
    importantPoints: [
      'Degrees of Freedom (DoF): Independent moving joints/axes in the kinematic chain.',
      'Forward Kinematics: Computing end-effector (X, Y, Z) given joint angles (θ1, θ2, θ3).',
      'Inverse Kinematics (IK): Computing required joint angles to reach a target 3D coordinate.'
    ],
    realWorldExample: {
      title: 'Automotive Factory Welding Robots 🏭',
      description: '6-Axis articulated industrial arms execute inverse kinematics solvers at 1 kHz to spot-weld vehicle chassis with sub-millimeter precision.'
    },
    miniQuiz: {
      question: 'What is the objective of Inverse Kinematics (IK) in a robotic manipulator?',
      options: [
        'Calculating the exact joint angles required to position the end-effector at a desired (X, Y, Z) Cartesian coordinate',
        'Measuring battery temperature in real-time',
        'Converting AC household power to DC voltage',
        'Printing 3D plastic gears'
      ],
      correctIndex: 0,
      explanation: 'Inverse Kinematics solves for joint angles given a desired spatial end-effector coordinate in 3D space!'
    }
  },
  {
    id: 's-lesson-2',
    levelId: 'secondary',
    order: 2,
    title: 'Arduino Programming & C++ Architecture',
    subtitle: 'Interrupts, timers, memory registers, and hardware abstraction',
    duration: '16 mins',
    icon: '💻',
    coverIllustration: 'cpp-arch',
    shortIntro: 'Writing performant, modular embedded C++ code for real-time robotic systems.',
    explanation: 'High-performance robotics firmware requires interrupt service routines (ISRs) for high-speed encoder feedback, direct port manipulation for microsecond pin toggling, and object-oriented driver encapsulation. Polling vs interrupt-driven architectures dictate real-time determinism.',
    didYouKnow: 'Direct Port Manipulation (like `PORTB |= (1 << 5);`) executes in a single clock cycle (62.5ns on 16MHz ATmega328P), roughly 50x faster than digitalWrite()!',
    importantPoints: [
      'Hardware Interrupts (External INT0/INT1): Trigger instant code execution when optical wheel encoders fire.',
      'Volatile Variables: Required when sharing data between main loop and ISR routines.',
      'Memory Management: Avoiding heap fragmentation by preventing dynamic String allocations in embedded systems.'
    ],
    realWorldExample: {
      title: 'High-Resolution Wheel Odometry 🏎️',
      description: 'Optical encoder disks trigger INT0 on pin 2; the ISR increments pulse counters with zero dropped ticks even at 4000 RPM wheel speeds.'
    },
    miniQuiz: {
      question: 'Why must variables modified inside an Interrupt Service Routine (ISR) be declared `volatile`?',
      options: [
        'To instruct the C++ compiler not to cache the variable in CPU registers, ensuring the main loop reads the latest hardware-updated value from RAM',
        'To make the variable run at 5 Volts',
        'To compress the variable to save Flash ROM',
        'To prevent the Arduino from rebooting'
      ],
      correctIndex: 0,
      explanation: 'The volatile keyword forces the compiler to fetch fresh values directly from memory rather than optimizing with stale registers!'
    }
  },
  {
    id: 's-lesson-3',
    levelId: 'secondary',
    order: 3,
    title: 'Sensors and Actuators Integration',
    subtitle: 'I2C, SPI, UART bus protocols, and analog signal conditioning',
    duration: '15 mins',
    icon: '📡',
    coverIllustration: 'bus-protocols',
    shortIntro: 'Interfacing multi-sensor suites using standard industrial bus communication protocols.',
    explanation: 'Modern robotics sensors (IMUs, LiDARs, OLEDs) communicate over serial bus interfaces: I2C (Inter-Integrated Circuit - SDA/SCL 2-wire with 7-bit addressing), SPI (Serial Peripheral Interface - MOSI/MISO/SCK/SS high-speed 4-wire), and UART (Universal Asynchronous Receiver-Transmitter).',
    didYouKnow: 'SPI communication can reach data transfer speeds exceeding 10 Mbps, making it ideal for graphical displays and SD data loggers!',
    importantPoints: [
      'I2C Protocol: 2 Wires (SDA Data, SCL Clock), supports up to 127 devices on a shared bus with pull-up resistors.',
      'SPI Protocol: 4 Wires, synchronous full-duplex with dedicated Slave Select (SS) lines.',
      'Analog Conditioning: Low-pass RC filters remove high-frequency electrical motor noise from sensor lines.'
    ],
    realWorldExample: {
      title: 'MPU-6050 6-Axis Gyro/Accelerometer 🛸',
      description: 'Drone flight controllers stream pitch and roll angular rates over I2C at 400 kHz to adjust brushless motor ESCs in real time.'
    },
    miniQuiz: {
      question: 'How many communication signal lines does the I2C bus protocol use to interface multiple sensors?',
      options: [
        '2 Lines: SDA (Serial Data) and SCL (Serial Clock)',
        '8 Parallel Lines',
        '1 Fiber Cable',
        '16 Lines'
      ],
      correctIndex: 0,
      explanation: 'I2C uses exactly two bidirectional open-drain lines (SDA and SCL) pulled up with resistors!'
    }
  },
  {
    id: 's-lesson-4',
    levelId: 'secondary',
    order: 4,
    title: 'Microcontrollers & Memory Architecture',
    subtitle: 'Flash, SRAM, EEPROM, clock distribution, and power management',
    duration: '14 mins',
    icon: '🧠',
    coverIllustration: 'mcu-arch',
    shortIntro: 'Exploring the silicon architecture of 8-bit AVR and 32-bit ARM Cortex-M microcontrollers.',
    explanation: 'Microcontrollers integrate a CPU core, volatile SRAM (for runtime variables and stack), non-volatile Flash ROM (for compiled machine code), and non-volatile EEPROM (for persistent configuration calibration). Understanding memory footprints prevents stack-heap collisions.',
    didYouKnow: 'The ATmega328P on Arduino UNO has only 2 Kilobytes of SRAM—about 2 million times less memory than a smartphone!',
    importantPoints: [
      'Flash Memory (32 KB): Stores program binary instructions.',
      'SRAM (2 KB): Stores dynamic runtime variables and call stack.',
      'EEPROM (1 KB): Retains PID tuning parameters across power cycles.',
      'Sleep Modes: Idle, Power-down, and Standby modes cut current draw down to microamps in battery rovers.'
    ],
    realWorldExample: {
      title: 'Persistent PID Calibration Storage 💾',
      description: 'Storing calibrated Kp, Ki, and Kd coefficients into EEPROM using `EEPROM.put()` so the line maze robot remembers its tuning after battery swaps.'
    },
    miniQuiz: {
      question: 'Which type of microcontroller memory stores runtime variables but loses all contents when power is turned off?',
      options: [
        'SRAM (Static Random Access Memory)',
        'Flash ROM',
        'EEPROM',
        'MicroSD card'
      ],
      correctIndex: 0,
      explanation: 'SRAM is volatile memory used for active variables during program execution and resets on power loss!'
    }
  },
  {
    id: 's-lesson-5',
    levelId: 'secondary',
    order: 5,
    title: 'Motor Drivers & Power Electronics',
    subtitle: 'MOSFET H-Bridges, L298N, back-EMF flyback protection, and dual supplies',
    duration: '16 mins',
    icon: '⚡',
    coverIllustration: 'power-electronics',
    shortIntro: 'Designing safe, high-efficiency power distribution and motor driver stages.',
    explanation: 'DC motors are inductive loads that generate massive reverse voltage spikes (back-EMF) when switched off. Flyback Schottky diodes protect switching transistors. Logic circuitry (5V MCU) and high-current motor circuits (7.4V-12V) must share a common Ground (GND) while maintaining isolated power rails.',
    didYouKnow: 'Modern MOSFET motor drivers have internal resistance under 0.01 Ohms, running cool without needing heavy aluminum heatsinks!',
    importantPoints: [
      'Flyback Diodes: Clamp inductive voltage spikes to prevent transistor breakdown.',
      'Common Ground: Essential reference point for logic control signals between MCU and Driver.',
      'Decoupling Capacitors: 0.1µF ceramic + 100µF electrolytic capacitors absorb voltage dips during motor startup surges.'
    ],
    realWorldExample: {
      title: 'Dual 18650 Battery Rover Stage 🔋',
      description: 'A 7.4V Li-ion pack powers the L298N driver and motors directly, while an onboard step-down buck regulator feeds clean 5.0V to the Arduino.'
    },
    miniQuiz: {
      question: 'What is the crucial wiring rule when powering motors from an external battery pack alongside an Arduino?',
      options: [
        'All Ground (GND) lines from the battery and Arduino must be connected together for a common voltage reference',
        'Disconnect all GND wires completely',
        'Run the motors at 240V AC',
        'Never use batteries'
      ],
      correctIndex: 0,
      explanation: 'A common ground connection ensures that digital HIGH/LOW control signals share an identical 0V reference!'
    }
  },
  {
    id: 's-lesson-6',
    levelId: 'secondary',
    order: 6,
    title: 'Embedded Systems & Real-Time Constraints',
    subtitle: 'Deterministic execution, polling vs interrupts, and hardware watchdogs',
    duration: '15 mins',
    icon: '⏱️',
    coverIllustration: 'embedded-rtos',
    shortIntro: 'Designing deterministic embedded software that responds to external physical events within strict deadlines.',
    explanation: 'Real-time embedded systems must guarantee execution deadlines. Hardware Watchdog Timers (WDT) automatically reset microcontrollers if code freezes in an unexpected deadlock. Non-blocking state loops maintain periodic 100Hz execution loops.',
    didYouKnow: 'The Mars Pathfinder rover experienced a famous real-time priority inversion glitch in 1997 that was solved remotely via software patch from Earth!',
    importantPoints: [
      'Hard vs Soft Real-Time: Hard real-time missing a deadline causes system failure (e.g. drone balancing).',
      'Watchdog Timer (WDT): Hardware countdown timer that triggers CPU reboot if not refreshed periodically.',
      'Finite State Machine (FSM): Models complex multi-mode autonomous behavior predictably.'
    ],
    realWorldExample: {
      title: 'Self-Balancing Inverted Pendulum Robot ⚖️',
      description: 'Executes pitch correction loop strictly every 5 milliseconds; a 20ms delay would cause the inverted pendulum to lose balance and crash.'
    },
    miniQuiz: {
      question: 'What is the purpose of a Hardware Watchdog Timer (WDT)?',
      options: [
        'Automatically rebooting the microcontroller if a software crash or infinite loop prevents the timer from being reset',
        'Counting how many steps the robot takes',
        'Measuring battery temperature',
        'Playing alert beeps'
      ],
      correctIndex: 0,
      explanation: 'A watchdog timer ensures automated recovery from unexpected software lockups in remote autonomous systems!'
    }
  },
  {
    id: 's-lesson-7',
    levelId: 'secondary',
    order: 7,
    title: 'Robot Control Logic & State Machines',
    subtitle: 'Hierarchical state machines, event queues, and behavior arbitration',
    duration: '16 mins',
    icon: '🔀',
    coverIllustration: 'fsm-logic',
    shortIntro: 'Architecting complex autonomous behaviors using Hierarchical Finite State Machines (HFSM).',
    explanation: 'Instead of monolithic nested if/else blocks, professional robotics uses Finite State Machines (FSMs) defined by States, Events, and Transitions. Subsumption architecture prioritizes safety behaviors (e.g. COLLISION_AVOID) over goal-seeking behaviors (e.g. NAVIGATE_TO_WAYPOINT).',
    didYouKnow: 'Subsumption Architecture was invented at MIT by Rodney Brooks and is the core concept behind iRobot Roomba vacuums!',
    importantPoints: [
      'State: Distinct behavioral mode (e.g. SEARCHING, DOCKING, CHARGING).',
      'Transition: Rule defining when to change from State A to State B based on sensor thresholds.',
      'Subsumption Layering: Lower-level survival instincts override higher-level mission tasks.'
    ],
    realWorldExample: {
      title: 'Autonomous Search and Rescue Bot 🚒',
      description: 'Level 1: Obstacle Avoidance (highest priority) → Level 2: Thermal Human Detection → Level 3: Room Mapping (lowest priority).'
    },
    miniQuiz: {
      question: 'In Brooks Subsumption Architecture, which layer takes priority during an unexpected emergency obstacle encounter?',
      options: [
        'The lowest-level reflex safety layer (Obstacle Collision Avoidance)',
        'The highest-level cloud telemetry layer',
        'The audio music layer',
        'The battery recharging layer'
      ],
      correctIndex: 0,
      explanation: 'Reflexive survival layers subsume and override higher-level planning layers to guarantee physical safety!'
    }
  },
  {
    id: 's-lesson-8',
    levelId: 'secondary',
    order: 8,
    title: 'Autonomous Navigation & Closed-Loop PID',
    subtitle: 'Proportional, Integral, Derivative control theory and feedback loops',
    duration: '18 mins',
    icon: '🎯',
    coverIllustration: 'pid-controller',
    shortIntro: 'The mathematical algorithm behind autonomous steering, cruise control, and rocket landing.',
    explanation: 'Open-loop control acts without feedback. Closed-loop control computes `Error = Target - Actual`. A PID controller calculates: `Output = (Kp × Error) + (Ki × ∫Error dt) + (Kd × dError/dt)`. Kp reacts to current error, Ki eliminates steady-state drift, and Kd damps overshoot oscillation.',
    didYouKnow: 'PID controllers regulate over 95% of industrial closed-loop manufacturing processes across the globe!',
    importantPoints: [
      'Proportional (P): `Kp * e(t)` provides steering force proportional to deviation.',
      'Integral (I): `Ki * ∑e(t)` eliminates accumulated steady-state offset.',
      'Derivative (D): `Kd * (e(t) - e(t-1))` predicts future trajectory and dampens wobble oscillations.'
    ],
    realWorldExample: {
      title: 'High-Speed Line Maze Racing Bot 🏁',
      description: 'Samples 8 IR sensors at 500 Hz; PID steering enables smooth cornering at speeds exceeding 3.5 meters per second without derailment.'
    },
    miniQuiz: {
      question: 'In a PID controller, what is the role of the Derivative (D) term?',
      options: [
        'Damping rapid oscillations and predicting future error by measuring rate of change',
        'Making the robot heavier',
        'Setting the battery voltage',
        'Clearing the memory'
      ],
      correctIndex: 0,
      explanation: 'The Derivative term responds to the rate of error change, counteracting overshoot and dampening wobbles!'
    }
  },
  {
    id: 's-lesson-9',
    levelId: 'secondary',
    order: 9,
    title: 'Line Following Algorithms & Sensor Arrays',
    subtitle: 'Weighted average position calculation and 8-channel QTR calibration',
    duration: '16 mins',
    icon: '🛤️',
    coverIllustration: 'qtr-array',
    shortIntro: 'Advanced multi-sensor optical array tracking with weighted centroid calculation.',
    explanation: 'Advanced line followers use an 8-sensor analog reflectance array (like Pololu QTR-8A). The sensor array calibrates min/max reflectivity dynamically. The line position is calculated via weighted average: `Position = ∑(Sensor[i] × Weight[i]) / ∑(Sensor[i])`, producing smooth continuous 0-7000 coordinate values for PID input.',
    didYouKnow: 'Championship Micromouse and Line Tracer robots accelerate at over 3G on specialized polyurethane tracks!',
    importantPoints: [
      'Sensor Calibration: Sweeping over dark and light surfaces during startup to normalize readings from 0 to 1000.',
      'Weighted Centroid: Interpolates line position between discrete phototransistors.',
      'Dynamic Speed Scaling: Slowing base speed automatically on sharp 90-degree hairpin turns.'
    ],
    realWorldExample: {
      title: 'Automated Factory Floor Delivery AGV 🏭',
      description: 'Tracks magnetic and optical guide tapes across 10-kilometer industrial plants with zero deviation.'
    },
    miniQuiz: {
      question: 'Why is weighted average position calculation superior to simple 2-sensor digital tracking?',
      options: [
        'It yields a smooth, continuous numerical position value (e.g. 0 to 7000) allowing precise proportional PID steering',
        'It eliminates the need for motors',
        'It works without electricity',
        'It makes the tape invisible'
      ],
      correctIndex: 0,
      explanation: 'Weighted interpolation gives sub-millimeter position resolution for smooth high-speed closed-loop control!'
    }
  },
  {
    id: 's-lesson-10',
    levelId: 'secondary',
    order: 10,
    title: 'Obstacle Avoidance Logic & Sonar Vectors',
    subtitle: 'Multi-directional ultrasonic scanning and vector field histogram (VFH)',
    duration: '16 mins',
    icon: '📡',
    coverIllustration: 'sonar-vector',
    shortIntro: 'Navigating unknown obstacle fields using panoramic range scanning and vector repulsion fields.',
    explanation: 'Instead of basic stop-and-turn, advanced rovers use Vector Field Histograms (VFH). Obstacles generate virtual repulsive force vectors while the goal destination generates an attractive force vector. The resultant vector sum directs motor velocity smoothly around clutter.',
    didYouKnow: 'Artificial Potential Fields (APF) simulate obstacles as high electric charges that physically repel the rover trajectory!',
    importantPoints: [
      'Polar Histogram: Maps distance measurements across 180 degrees into angular sectors.',
      'Repulsive Force: Inversely proportional to square of obstacle distance (`F_rep = k / d^2`).',
      'Local Minima: Resolving dead-ends (U-shaped obstacles) using wall-following escape routines.'
    ],
    realWorldExample: {
      title: 'Autonomous Delivery Drone Landing 🛸',
      description: 'Computes multi-directional ultrasonic and LiDAR range vectors to land safely in backyards while avoiding trees and fences.'
    },
    miniQuiz: {
      question: 'What happens in Artificial Potential Field (APF) navigation when an obstacle gets closer to the robot?',
      options: [
        'The calculated virtual repulsive force increases, steering the rover away from the hazard',
        'The robot turns off its power',
        'The obstacle moves away automatically',
        'The battery voltage doubles'
      ],
      correctIndex: 0,
      explanation: 'Repulsive potential is inversely proportional to distance, creating stronger steering repulsion near obstacles!'
    }
  },
  {
    id: 's-lesson-11',
    levelId: 'secondary',
    order: 11,
    title: 'Wireless Robotics: Bluetooth & Teleoperation',
    subtitle: 'UART packet framing, checksums, and custom mobile control apps',
    duration: '15 mins',
    icon: '📱',
    coverIllustration: 'bluetooth-teleop',
    shortIntro: 'Establishing reliable bidirectional telemetry and wireless teleoperation links.',
    explanation: 'Wireless teleoperation uses the HC-05 Bluetooth module operating at 2.4 GHz. Packets are framed with start bytes, command payload, and XOR checksum validation to reject radio interference corruptions.',
    didYouKnow: 'Bluetooth Class 2 devices operate at 2.5mW transmitter power with a reliable classroom range of 10 meters!',
    importantPoints: [
      'Baud Rate: UART transmission frequency (e.g. 9600 or 115200 bps).',
      'Packet Framing: `[START_BYTE][CMD][PARAM1][PARAM2][CHECKSUM][END_BYTE]`.',
      'Voltage Level Shifting: Stepping down 5V Arduino TX to 3.3V HC-05 RX via resistor divider.'
    ],
    realWorldExample: {
      title: 'Explosive Ordnance Disposal (EOD) Rover 🚒',
      description: 'Police operators command tracked robotic arms wirelessly from an armored command vehicle 200 meters away.'
    },
    miniQuiz: {
      question: 'Why is a checksum byte included at the end of a wireless robotics packet?',
      options: [
        'To verify packet integrity and detect data corruption caused by radio interference before executing commands',
        'To make the transmission louder',
        'To change the Bluetooth LED color',
        'To recharge the phone battery'
      ],
      correctIndex: 0,
      explanation: 'Checksum validation ensures corrupt packets are rejected before motors can receive invalid commands!'
    }
  },
  {
    id: 's-lesson-12',
    levelId: 'secondary',
    order: 12,
    title: 'Basic IoT in Robotics & Cloud Telemetry',
    subtitle: 'ESP32 / ESP8266, MQTT protocol, WebSockets, and live sensor dashboards',
    duration: '16 mins',
    icon: '🌐',
    coverIllustration: 'iot-robotics',
    shortIntro: 'Connecting autonomous rovers to the Internet of Things (IoT) for cloud telemetry and global remote control.',
    explanation: 'Using Wi-Fi microcontrollers like ESP32, robots publish telemetry (battery voltage, motor current, GPS coordinates) to cloud brokers using lightweight MQTT (Message Queuing Telemetry Transport) or WebSockets for real-time browser monitoring.',
    didYouKnow: 'MQTT was originally invented in 1999 to monitor oil pipelines over satellite links, and is now the global standard for IoT robotics!',
    importantPoints: [
      'MQTT Protocol: Publish/Subscribe architecture with minimal packet overhead (2-byte header).',
      'JSON Payload: Formatting sensor telemetry into readable key-value objects.',
      'REST & WebSockets: Enabling two-way real-time telemetry streaming into web dashboards.'
    ],
    realWorldExample: {
      title: 'Smart Agricultural Crop Inspection Rover 🌾',
      description: 'Rovers patrol farm fields, taking soil moisture readings and publishing live GPS maps to a cloud dashboard for agronomists.'
    },
    miniQuiz: {
      question: 'Why is MQTT the preferred network protocol for battery-powered IoT robotics over standard HTTP?',
      options: [
        'Because MQTT has ultra-low packet overhead, minimal power consumption, and instant Publish/Subscribe messaging',
        'Because HTTP is illegal on microcontrollers',
        'Because MQTT does not use Wi-Fi',
        'Because MQTT only sends images'
      ],
      correctIndex: 0,
      explanation: 'MQTT is designed specifically for constrained embedded networks with low bandwidth and power constraints!'
    }
  },
  {
    id: 's-lesson-13',
    levelId: 'secondary',
    order: 13,
    title: 'Robot Project Design & Schematics',
    subtitle: 'Bill of Materials (BOM), CAD modeling, PCB schematics, and system integration',
    duration: '17 mins',
    icon: '📐',
    coverIllustration: 'project-design',
    shortIntro: 'The end-to-end engineering workflow: from concept sketches and circuit schematics to final deployment.',
    explanation: 'Professional robotics projects follow structured engineering design lifecycles: Requirements Definition → 3D CAD Modeling (Fusion 360) → Schematic Capture & Custom PCB Layout (KiCad/EasyEDA) → Bill of Materials (BOM) cost analysis → Assembly & Firmware Testing.',
    didYouKnow: 'Custom 2-layer PCBs for school robotics projects can be manufactured and shipped from fab houses in under 5 days for less than $5!',
    importantPoints: [
      'Schematic vs PCB Layout: Schematic shows logical electrical connections; PCB layout defines physical copper traces.',
      'Bill of Materials (BOM): Comprehensive parts list including component part numbers, suppliers, and unit costs.',
      'Design for Assembly (DFA): Designing modular brackets for fast maintenance and battery swapping.'
    ],
    realWorldExample: {
      title: 'FIRST Robotics Competition (FRC) Robot 🏆',
      description: 'High school engineering teams design custom CNC aluminum chassis, routed wiring harnesses, and custom PCBs in 6-week build seasons.'
    },
    miniQuiz: {
      question: 'What is the purpose of a Bill of Materials (BOM) in a robotics engineering project?',
      options: [
        'A comprehensive itemized inventory of all hardware, electronic components, fasteners, part numbers, and costs needed to build the robot',
        'A list of robot names',
        'A document certifying battery voltage',
        'A programming manual'
      ],
      correctIndex: 0,
      explanation: 'A BOM details every single component, fastener, supplier, and cost needed for successful manufacturing!'
    }
  }
];

// ==========================================================
// 4. LEVEL-SPECIFIC ROBOTICS MODELS
// ==========================================================

// Primary School Models (Simple, fun, visual)
export const PRIMARY_MODELS = [
  {
    id: 'p-model-moving',
    levelId: 'primary',
    name: 'Simple Moving Robot',
    tagline: 'A fun rolling rover that drives and spins!',
    difficulty: 'Beginner',
    difficultyColor: '#10B981',
    category: 'Fun Rolling Rover',
    icon: '🚗',
    coverColor: '#10B981',
    heroBg: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    shortDescription: 'A friendly rolling robot that learns how to drive forward, backward, and spin in circles using two electric wheel motors.',
    whatIsIt: 'The Simple Moving Robot is the best first robotics build! It shows how a battery feeds electric motors to roll wheels across the floor.',
    howItWorks: 'When you turn on the battery switch, electricity flows into two DC gear motors. Both motors spin together to drive straight, or one motor spins to make a fun turn!',
    components: [
      { name: 'Lightweight Plastic Chassis', role: 'Holds the battery and wheels safely', icon: '🚗' },
      { name: '2x Electric DC Motors & Wheels', role: 'Spins to roll across the carpet', icon: '⚙️' },
      { name: 'Battery Pack (2x AA)', role: 'Supplies electric power like food', icon: '🔋' },
      { name: 'Power Switch & Castor Wheel', role: 'Turns power on/off and balances the rover', icon: '🔘' }
    ],
    workingSteps: [
      { step: 1, title: 'Power On', description: 'Slide the power switch to connect the battery lunch.' },
      { step: 2, title: 'Motor Spin', description: 'Electricity spins the tiny copper coils inside the motors.' },
      { step: 3, title: 'Rolling Forward', description: 'Rubber tires grip the floor and zoom the robot ahead!' }
    ],
    simulationType: 'primary_mover',
    quiz: {
      title: 'Simple Moving Robot Quiz',
      questions: [
        {
          question: 'What makes the wheels of our simple moving robot spin?',
          options: [
            'Electric DC Motors powered by a battery',
            'Wind blowing from a fan',
            'Magic story dust',
            'A glass of milk'
          ],
          correctIndex: 0,
          explanation: 'Electric motors convert battery electricity into spinning wheel motion!'
        }
      ]
    }
  },
  {
    id: 'p-model-light',
    levelId: 'primary',
    name: 'Light Following Robot',
    tagline: 'Follows your flashlight like a friendly puppy!',
    difficulty: 'Beginner',
    difficultyColor: '#10B981',
    category: 'Interactive Pet Bot',
    icon: '🔦',
    coverColor: '#F59E0B',
    heroBg: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
    shortDescription: 'Shine a flashlight beam on the floor and watch this smart robot drive right towards the bright beam!',
    whatIsIt: 'A Light Following Robot uses two light sensors as eyes. When you shine a light on its left eye, it turns left. When you shine light on both eyes, it drives straight to you!',
    howItWorks: 'Light Dependent Resistors (LDRs) detect brightness. More light sends more electricity to the motors, driving the robot toward the brightest beam!',
    components: [
      { name: '2x LDR Light Sensors', role: 'Act as the robot\'s electronic eyes', icon: '👁️' },
      { name: 'Transistor Amplifier Stage', role: 'Helps light signals power the motors', icon: '⚡' },
      { name: '2x Drive Motors & Chassis', role: 'Moves toward the light source', icon: '⚙️' },
      { name: '9V Battery Pack', role: 'Powers the electronic eyes and motors', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'Shine Flashlight', description: 'Point a bright flashlight at the robot.' },
      { step: 2, title: 'Eyes Spot Light', description: 'The light sensor feels the bright beam.' },
      { step: 3, title: 'Drive to Light', description: 'The rover steers directly toward your light!' }
    ],
    simulationType: 'light_follower_simple',
    quiz: {
      title: 'Light Following Robot Quiz',
      questions: [
        {
          question: 'What electronic eye part does this robot use to see a flashlight?',
          options: [
            'Light Dependent Resistor (LDR Sensor)',
            'A wooden pencil',
            'A metal spoon',
            'A wool sock'
          ],
          correctIndex: 0,
          explanation: 'LDR sensors measure brightness so the robot can follow the flashlight!'
        }
      ]
    }
  },
  {
    id: 'p-model-mini-smart',
    levelId: 'primary',
    name: 'Mini Smart Car',
    tagline: 'Beeps its horn and flashes colorful headlights!',
    difficulty: 'Beginner',
    difficultyColor: '#10B981',
    category: 'Fun Smart Vehicle',
    icon: '🚙',
    coverColor: '#3B82F6',
    heroBg: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
    shortDescription: 'A colorful mini car that flashes bright LED headlights and beeps when you press buttons on its bumper!',
    whatIsIt: 'The Mini Smart Car teaches kids how electronic switches, buzzers, and lights work together on real cars.',
    howItWorks: 'Pressing bumper switches triggers colorful LED lights and a sound buzzer, showing how car horns and headlights are wired.',
    components: [
      { name: 'Bumper Touch Switches', role: 'Buttons that click when pressed', icon: '🔘' },
      { name: 'Bright LED Headlights', role: 'Shine white and amber beams', icon: '💡' },
      { name: 'Piezo Sound Buzzer', role: 'Plays friendly beeps like a horn', icon: '🔊' },
      { name: 'Mini Car Body & Battery', role: 'Colorful snap-together frame', icon: '🚙' }
    ],
    workingSteps: [
      { step: 1, title: 'Press Bumper', description: 'Click the front bumper switch.' },
      { step: 2, title: 'Headlights Glow', description: 'Electricity lights up both LED bulbs.' },
      { step: 3, title: 'Beep Horn', description: 'The buzzer sounds an alert beep!' }
    ],
    simulationType: 'mini_smart_car',
    quiz: {
      title: 'Mini Smart Car Quiz',
      questions: [
        {
          question: 'What part of the smart car makes the friendly beep sound?',
          options: [
            'The Piezo Sound Buzzer',
            'The rubber tire',
            'The plastic bumper',
            'The battery holder'
          ],
          correctIndex: 0,
          explanation: 'A piezo buzzer vibrates to create sound waves and horn beeps!'
        }
      ]
    }
  },
  {
    id: 'p-model-simple-obstacle',
    levelId: 'primary',
    name: 'Simple Obstacle Robot',
    tagline: 'Bumps into a couch gently and turns around!',
    difficulty: 'Beginner',
    difficultyColor: '#10B981',
    category: 'Gentle Bumper Rover',
    icon: '🛡️',
    coverColor: '#EC4899',
    heroBg: 'linear-gradient(135deg, #DB2777 0%, #EC4899 100%)',
    shortDescription: 'Equipped with springy bumper whiskers, this cute robot reverses and turns whenever it taps into a chair or wall!',
    whatIsIt: 'A Simple Obstacle Robot uses physical touch switches to navigate around furniture without getting stuck.',
    howItWorks: 'When the front bumper whisker touches an obstacle, it clicks a switch that reverses the left motor for 2 seconds, turning the rover away to safety!',
    components: [
      { name: 'Springy Whisker Bumpers', role: 'Feels walls and furniture gently', icon: '〰️' },
      { name: 'Microswitch Sensors', role: 'Clicks electrical contacts upon contact', icon: '🔘' },
      { name: 'Reversing Motor Circuit', role: 'Backs up and turns away from obstacles', icon: '⚙️' },
      { name: 'Battery & Rover Frame', role: 'Supplies power and holds wheels', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'Drive Ahead', description: 'Robot rolls forward across the floor.' },
      { step: 2, title: 'Tap Furniture', description: 'Whisker touches table leg and clicks switch.' },
      { step: 3, title: 'Reverse & Turn', description: 'Motor backs up and pivots away safely!' }
    ],
    simulationType: 'simple_bumper',
    quiz: {
      title: 'Simple Obstacle Robot Quiz',
      questions: [
        {
          question: 'What happens when the robot bumper taps a table leg?',
          options: [
            'It clicks a switch to reverse and turn away safely',
            'It breaks into pieces',
            'It floats to the ceiling',
            'It turns into a toy train'
          ],
          correctIndex: 0,
          explanation: 'The bumper switch signals the motor to reverse and pivot away from obstacles!'
        }
      ]
    }
  }
];

// Middle School Models (Arduino & Sensor Based)
export const MIDDLE_MODELS = [
  {
    id: 'm-model-line',
    levelId: 'middle',
    name: 'Line Following Robot',
    tagline: 'Dual IR optical sensor tracking with Arduino UNO',
    difficulty: 'Beginner → Intermediate',
    difficultyColor: '#10B981',
    category: 'Autonomous Mobile Rover',
    icon: '🛤️',
    coverColor: '#10B981',
    heroBg: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    shortDescription: 'An autonomous rover utilizing dual infrared reflection sensors and an L298N driver to follow high-contrast tracks.',
    whatIsIt: 'The Line Following Robot is the classic middle school robotics project. It teaches differential steering, optical sensing, and conditional C++ code logic.',
    howItWorks: 'Two IR proximity sensors face the ground. White floors reflect infrared light back (HIGH), while black tape absorbs infrared light (LOW). Arduino reads the digital pins and commands the L298N motor driver to steer.',
    components: [
      { name: 'Arduino UNO / Nano', role: 'Main microcontroller decision brain', icon: '🧠' },
      { name: 'Dual IR Sensor Module Pair', role: 'Reads floor optical reflectivity', icon: '👁️' },
      { name: 'L298N H-Bridge Motor Driver', role: 'Drives DC gear motors with battery power', icon: '⚡' },
      { name: '2x BO Geared Motors & Wheels', role: 'Differential propulsion', icon: '⚙️' },
      { name: '7.4V Li-ion Battery & Chassis', role: 'Power and structural mounting', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'Floor Illumination', description: 'IR emitter LEDs shoot 940nm infrared light at the floor.' },
      { step: 2, title: 'Reflectance Read', description: 'Photodiode measures reflected light (White = HIGH, Black = LOW).' },
      { step: 3, title: 'Arduino Logic', description: '`if (left == BLACK) { steerLeft(); }` executes in real-time.' },
      { step: 4, title: 'Motor Driver', description: 'L298N adjusts wheel speeds to keep centered on the black line.' }
    ],
    simulationType: 'line_follower',
    quiz: {
      title: 'Line Follower Architecture Quiz',
      questions: [
        {
          question: 'If the RIGHT IR sensor detects the black line, what should the robot do to stay on track?',
          options: [
            'Turn Right (slow down Right motor, speed up Left motor)',
            'Turn Left immediately',
            'Drive backwards at full speed',
            'Shut down power completely'
          ],
          correctIndex: 0,
          explanation: 'Turning right swings the robot centerline back over the black track!'
        }
      ]
    }
  },
  {
    id: 'm-model-obstacle',
    levelId: 'middle',
    name: 'Obstacle Avoiding Robot',
    tagline: 'Ultrasonic sound radar with scanning micro servo',
    difficulty: 'Beginner → Intermediate',
    difficultyColor: '#3B82F6',
    category: 'Autonomous Radar Rover',
    icon: '🛡️',
    coverColor: '#3B82F6',
    heroBg: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
    shortDescription: 'Autonomous rover measuring distance with ultrasonic sound waves and panning left/right to find clear pathways.',
    whatIsIt: 'The Obstacle Avoiding Robot uses an HC-SR04 Ultrasonic sensor on top of an SG90 servo motor neck to scan surroundings and navigate rooms autonomously.',
    howItWorks: 'The sensor pings ultrasonic waves. When an obstacle is closer than 20cm, Arduino stops the rover, commands the servo to look 60° left and 60° right, compares distances, and pivots toward the clearest path.',
    components: [
      { name: 'Arduino UNO R3', role: 'Processes ultrasonic timing & motor logic', icon: '🧠' },
      { name: 'HC-SR04 Ultrasonic Sensor', role: 'Emits 40kHz sound and listens for echoes', icon: '📡' },
      { name: 'SG90 Micro Servo Motor', role: 'Pans sensor left and right for scanning', icon: '🔄' },
      { name: 'L298N Motor Driver Shield', role: 'Powers dual drive motors', icon: '⚡' },
      { name: '2x DC Motors & Castor Chassis', role: 'Mobility platform', icon: '🚗' }
    ],
    workingSteps: [
      { step: 1, title: 'Forward Patrol', description: 'Drives forward while sending ultrasonic pings every 50ms.' },
      { step: 2, title: 'Obstacle Alert', description: 'When distance < 20cm, rover halts motors instantly.' },
      { step: 3, title: 'Servo Radar Scan', description: 'Servo pans sensor left and right to sample open distances.' },
      { step: 4, title: 'Clear Path Decision', description: 'Pivots toward the direction with maximum open room!' }
    ],
    simulationType: 'obstacle_avoider',
    quiz: {
      title: 'Ultrasonic Obstacle Avoider Quiz',
      questions: [
        {
          question: 'What frequency does the HC-SR04 ultrasonic distance sensor emit?',
          options: [
            '40 kHz (inaudible and safe for humans & pets)',
            '50 Hz (wall power hum)',
            '1000 MHz (microwaves)',
            '5 Hz (low bass thump)'
          ],
          correctIndex: 0,
          explanation: '40,000 Hz is far above human hearing range (20Hz-20kHz), making it completely silent!'
        }
      ]
    }
  },
  {
    id: 'm-model-bluetooth',
    levelId: 'middle',
    name: 'Bluetooth Controlled Robot',
    tagline: 'Wireless smartphone teleoperation via HC-05 UART',
    difficulty: 'Intermediate',
    difficultyColor: '#3B82F6',
    category: 'Wireless Teleoperation',
    icon: '📱',
    coverColor: '#8B5CF6',
    heroBg: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
    shortDescription: 'High-speed 4-wheel rover commanded wirelessly from a custom smartphone gamepad app over Bluetooth serial.',
    whatIsIt: 'A Bluetooth Controlled Robot receives movement commands (\'F\', \'B\', \'L\', \'R\', \'S\') wirelessly over a 2.4 GHz radio link from a smartphone app.',
    howItWorks: 'The HC-05 Bluetooth module receives ASCII characters from the phone and feeds them to Arduino via Serial UART at 9600 baud. Arduino decodes the letters and sets motor driver pins.',
    components: [
      { name: 'Arduino UNO', role: 'Decodes serial characters and outputs motor PWM', icon: '🧠' },
      { name: 'HC-05 Bluetooth Module', role: '2.4 GHz wireless serial transceiver', icon: '📡' },
      { name: 'L298N Dual Motor Driver', role: 'Supplies high current to all 4 wheels', icon: '⚡' },
      { name: '4x TT Geared DC Motors', role: '4-Wheel drive traction', icon: '⚙️' },
      { name: '7.4V 18650 Li-ion Battery Pack', role: 'High-discharge power source', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'Bluetooth Link', description: 'Smartphone pairs with HC-05 module with PIN 1234.' },
      { step: 2, title: 'Button Press', description: 'Holding Forward button sends character \'F\' over radio.' },
      { step: 3, title: 'Serial Read', description: 'Arduino reads `Serial.read() == \'F\'`.' },
      { step: 4, title: 'Wheel Drive', description: 'Sets driver pins HIGH, spinning all 4 wheels forward!' }
    ],
    simulationType: 'bluetooth_car',
    quiz: {
      title: 'Bluetooth Teleoperation Quiz',
      questions: [
        {
          question: 'What standard serial protocol connects the HC-05 Bluetooth module to Arduino?',
          options: [
            'UART Serial (TX and RX pins at 9600 baud rate)',
            'HDMI Video cable',
            'Fiber optic cable',
            'Morse code buzzer'
          ],
          correctIndex: 0,
          explanation: 'UART (Universal Asynchronous Receiver-Transmitter) uses 2 serial pins for communication!'
        }
      ]
    }
  },
  {
    id: 'm-model-smart-dustbin',
    levelId: 'middle',
    name: 'Smart Touchless Dustbin',
    tagline: 'Automatic hygienic lid opening with proximity sensing',
    difficulty: 'Beginner → Intermediate',
    difficultyColor: '#10B981',
    category: 'Smart Home & Health Tech',
    icon: '🗑️',
    coverColor: '#F59E0B',
    heroBg: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
    shortDescription: 'A touch-free waste bin that senses approaching hands with ultrasonic distance sensing and lifts its lid via a servo motor.',
    whatIsIt: 'A Smart Dustbin promotes hygiene in schools by allowing students to dispose of trash without touching germ-covered lids.',
    howItWorks: 'An ultrasonic sensor on the front measures distance. When a hand is < 15cm, Arduino rotates an SG90 servo motor from 0° to 90°, holds for 4 seconds, and gently closes.',
    components: [
      { name: 'Arduino Nano / UNO', role: 'Compact controller board', icon: '🧠' },
      { name: 'HC-SR04 Distance Sensor', role: 'Detects approaching hands (<15cm)', icon: '👁️' },
      { name: 'SG90 Micro Servo Motor', role: 'Rotates 90 degrees to lift the hinged lid', icon: '⚙️' },
      { name: 'Dustbin Container with Flap', role: 'Hygienic waste enclosure', icon: '🗑️' },
      { name: '9V Battery / USB Power', role: 'Powers electronics', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'Standby Monitoring', description: 'Sensor checks for approaching hands every 100ms.' },
      { step: 2, title: 'Proximity Trigger', description: 'When distance < 15cm, Arduino initiates open routine.' },
      { step: 3, title: 'Servo Opening', description: 'Servo rotates to 90°, lifting the dustbin flap.' },
      { step: 4, title: 'Auto-Close Timer', description: 'Waits 4 seconds for trash disposal, then closes smoothly.' }
    ],
    simulationType: 'smart_dustbin',
    quiz: {
      title: 'Smart Dustbin Mechanism Quiz',
      questions: [
        {
          question: 'Why is a servo motor used to open the dustbin lid instead of a regular DC motor?',
          options: [
            'Because servo motors rotate to an exact angle (0° to 90°) and hold their position firmly',
            'Because servo motors use no electricity',
            'Because DC motors only work in water',
            'Because servo motors are invisible'
          ],
          correctIndex: 0,
          explanation: 'Servos have internal position feedback, allowing precise angular rotation from 0° to 90°!'
        }
      ]
    }
  },
  {
    id: 'm-model-light-follow-m',
    levelId: 'middle',
    name: 'Light Tracking Rover',
    tagline: 'Analog differential photoresistor comparator rover',
    difficulty: 'Intermediate',
    difficultyColor: '#3B82F6',
    category: 'Analog Sensor Rover',
    icon: '☀️',
    coverColor: '#06B6D4',
    heroBg: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
    shortDescription: 'Dual LDR sensor rover with Arduino analog comparison logic that steers smoothly toward flashlight beams.',
    whatIsIt: 'The Light Tracking Rover demonstrates differential analog signal processing, voltage dividers, and heliotropic tracking behavior.',
    howItWorks: 'Two LDRs in voltage divider circuits connect to analog pins A0 and A1. Arduino samples values (0-1023). If Left > Right, it steers left to balance light intensity on both sensors.',
    components: [
      { name: 'Arduino UNO', role: 'Samples A0/A1 and calculates differential light error', icon: '🧠' },
      { name: '2x LDRs + 10kΩ Resistors', role: 'Voltage divider light sensors', icon: '👁️' },
      { name: 'L298N Motor Driver', role: 'Controls differential wheel speeds', icon: '⚡' },
      { name: 'BO Motors & Chassis', role: 'Differential mobility platform', icon: '⚙️' }
    ],
    workingSteps: [
      { step: 1, title: 'Analog Sampling', description: 'Reads voltage on A0 (left eye) and A1 (right eye).' },
      { step: 2, title: 'Error Calculation', description: '`int error = leftLight - rightLight;`' },
      { step: 3, title: 'Proportional Steering', description: 'Adjusts motor PWM to steer rover toward highest brightness.' }
    ],
    simulationType: 'solar_robot',
    quiz: {
      title: 'Light Tracking Circuit Quiz',
      questions: [
        {
          question: 'What circuit configuration converts an LDR\'s varying resistance into a readable voltage for Arduino?',
          options: [
            'A Voltage Divider circuit with a fixed 10kΩ resistor',
            'A direct battery short',
            'A speaker coil',
            'A transformer'
          ],
          correctIndex: 0,
          explanation: 'A voltage divider converts changing resistance into proportional voltage (0V to 5V) for analogRead()!'
        }
      ]
    }
  }
];

// Secondary School Models (Advanced, Programmable, Autonomous, IoT)
export const SECONDARY_MODELS = [
  {
    id: 's-model-adv-line',
    levelId: 'secondary',
    name: 'Advanced Line Following Robot',
    tagline: '8-Channel QTR sensor array with closed-loop PID algorithm',
    difficulty: 'Advanced',
    difficultyColor: '#8B5CF6',
    category: 'High-Speed Autonomous Racer',
    icon: '🏎️',
    coverColor: '#8B5CF6',
    heroBg: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
    shortDescription: 'High-performance autonomous racer using an 8-sensor reflectance array, dynamic calibration, and real-time PID algorithm.',
    whatIsIt: 'The Advanced Line Follower is a competitive robotics system engineered for high speed, featuring weighted centroid calculation and PID trajectory control.',
    howItWorks: 'An 8-channel QTR phototransistor array samples the floor at 500 Hz. The algorithm calculates the weighted centroid position (0-7000) and feeds the error into a tuned PID loop: `PWM_Adjustment = (Kp*e) + (Ki*∫e) + (Kd*de/dt)`.',
    components: [
      { name: 'Arduino Nano / STM32 (32-bit)', role: 'High-frequency 500Hz PID computation', icon: '🧠' },
      { name: 'Pololu QTR-8A Reflectance Array', role: '8-Channel analog optical sensing array', icon: '👁️' },
      { name: 'TB6612FNG Dual MOSFET Driver', role: 'High-efficiency low-resistance motor driver', icon: '⚡' },
      { name: 'Coreless Micro DC Motors (3000 RPM)', role: 'Ultra-fast torque & acceleration', icon: '⚙️' },
      { name: '2S 7.4V 450mAh Li-Po Battery', role: 'High discharge rate (45C)', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'Dynamic Auto-Calibration', description: 'Sweeps across black/white tracks during startup to normalize min/max sensor thresholds.' },
      { step: 2, title: 'Weighted Centroid Position', description: 'Computes line position with sub-millimeter resolution from 0 to 7000.' },
      { step: 3, title: 'PID Math Solver', description: 'Calculates Proportional, Integral, and Derivative adjustments.' },
      { step: 4, title: 'Differential Velocity Control', description: 'Writes differential PWM speeds to left and right motors at 500 Hz.' }
    ],
    simulationType: 'line_follower',
    quiz: {
      title: 'Advanced PID Line Follower Quiz',
      questions: [
        {
          question: 'What role does the Derivative (Kd) constant play in high-speed line tracking?',
          options: [
            'It counteracts rapid overshoot oscillations and dampens wobbles by measuring the rate of error change',
            'It increases the motor current to 100 Amps',
            'It turns off the IR sensors',
            'It changes the color of the chassis'
          ],
          correctIndex: 0,
          explanation: 'The derivative term dampens oscillations by predicting future trajectory based on current error rate of change!'
        }
      ]
    }
  },
  {
    id: 's-model-auto-obstacle',
    levelId: 'secondary',
    name: 'Autonomous Obstacle Avoiding Rover',
    tagline: 'Multi-vector ultrasonic radar & Vector Field Histogram (VFH)',
    difficulty: 'Advanced',
    difficultyColor: '#8B5CF6',
    category: 'Spatial Exploration Rover',
    icon: '📡',
    coverColor: '#3B82F6',
    heroBg: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    shortDescription: 'Autonomous rover building 180-degree polar spatial obstacle maps and calculating repulsive potential vectors to navigate complex mazes.',
    whatIsIt: 'This advanced rover implements Vector Field Histogram (VFH) and Artificial Potential Field navigation to maneuver around dynamic obstacle fields.',
    howItWorks: 'Triple ultrasonic rangefinders and a continuous sweep radar map obstacles into a polar histogram. The algorithm generates virtual repulsive forces from obstacles and computes clear navigation corridors.',
    components: [
      { name: 'Arduino Mega 2560 / ESP32', role: 'Multi-sensor fusion and spatial vector processing', icon: '🧠' },
      { name: '3x HC-SR04 Sonar Sensors', role: 'Left, Center, and Right simultaneous distance arrays', icon: '📡' },
      { name: 'Optical Wheel Encoders (2x)', role: 'Dead-reckoning odometry feedback', icon: '🔄' },
      { name: 'L298N High-Power Driver', role: 'Independent dual motor drive', icon: '⚡' },
      { name: '3S 11.1V Li-Po Battery Pack', role: 'Long-duration rover power', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'Multi-Sonar Fusion', description: 'Reads left, center, and right range data concurrently.' },
      { step: 2, title: 'Vector Calculation', description: 'Computes obstacle repulsion vector `F_rep = k / d^2`.' },
      { step: 3, title: 'Corridor Selection', description: 'Selects the widest angular sector exceeding the safety threshold.' },
      { step: 4, title: 'Odometry Feedback', description: 'Verifies actual movement using wheel optical encoders.' }
    ],
    simulationType: 'obstacle_avoider',
    quiz: {
      title: 'Vector Field Navigation Quiz',
      questions: [
        {
          question: 'What is the primary benefit of using optical wheel encoders on an autonomous rover?',
          options: [
            'Providing closed-loop odometry feedback to track exact distance traveled and detect wheel slip',
            'Decorating the wheels with LEDs',
            'Powering the ultrasonic sensors',
            'Eliminating the need for batteries'
          ],
          correctIndex: 0,
          explanation: 'Wheel encoders count wheel rotations, providing dead-reckoning odometry data to confirm true motion!'
        }
      ]
    }
  },
  {
    id: 's-model-arm',
    levelId: 'secondary',
    name: '4-DOF Articulated Robotic Arm',
    tagline: 'Inverse Kinematics solver & multi-servo pick-and-place manipulator',
    difficulty: 'Advanced',
    difficultyColor: '#8B5CF6',
    category: 'Articulated Manipulator',
    icon: '🦾',
    coverColor: '#EC4899',
    heroBg: 'linear-gradient(135deg, #BE185D 0%, #EC4899 100%)',
    shortDescription: 'Multi-joint robotic arm utilizing Inverse Kinematics (IK) math to position an end-effector gripper at exact 3D Cartesian coordinates.',
    whatIsIt: 'A 4-Degrees-of-Freedom (4-DOF) Robotic Arm that simulates industrial pick-and-place manufacturing automation.',
    howItWorks: 'Four high-torque metal gear servos control Base (Yaw), Shoulder (Pitch), Elbow (Pitch), and Gripper Claw. Control routines translate (X, Y, Z) targets into servo PWM angles ($\theta_1, \theta_2, \theta_3$) using geometric trigonometric solvers.',
    components: [
      { name: 'Arduino Mega 2560', role: 'Computes geometric Inverse Kinematics equations', icon: '🧠' },
      { name: '4x MG996R Metal Gear Servos', role: 'Delivers 11 kg-cm torque per joint axis', icon: '⚙️' },
      { name: '5V 5A External Power Supply', role: 'Prevents microcontroller brownouts under heavy load', icon: '🔌' },
      { name: 'Laser-Cut Acrylic / Aluminum Arm', role: 'Articulated linkage structure', icon: '🦾' },
      { name: 'Parallel Jaw Gripper', role: 'Precision mechanical end-effector', icon: '🖐️' }
    ],
    workingSteps: [
      { step: 1, title: 'Coordinate Input', description: 'Target coordinate (X=15cm, Y=10cm, Z=5cm) received.' },
      { step: 2, title: 'Inverse Kinematics', description: 'Calculates `atan2()` and law of cosines for joint angles.' },
      { step: 3, title: 'Interpolated PWM Motion', description: 'Smoothly ramps servo angles to avoid jerk.' },
      { step: 4, title: 'Grasp & Transport', description: 'Claw closes, arm elevates, rotates, and releases object.' }
    ],
    simulationType: 'robotic_arm',
    quiz: {
      title: 'Robotic Arm Kinematics Quiz',
      questions: [
        {
          question: 'Why is an external dedicated 5V 5A power supply mandatory when driving multiple high-torque MG996R servos?',
          options: [
            'Because four moving servos under load can draw 3 to 4 Amps, which would cause an Arduino regulator to overheat and reset',
            'Because servos require 220V AC household electricity',
            'Because Arduino chips cannot output PWM signals',
            'To make the gripper shiny'
          ],
          correctIndex: 0,
          explanation: 'Multiple high-torque servos draw substantial current spikes that exceed the ~500mA USB/MCU limit!'
        }
      ]
    }
  },
  {
    id: 's-model-app-bot',
    levelId: 'secondary',
    name: 'Bluetooth Teleoperation Rover',
    tagline: 'Custom framed UART packets, checksums & variable speed control',
    difficulty: 'Intermediate → Advanced',
    difficultyColor: '#3B82F6',
    category: 'Telemetry Rover',
    icon: '📱',
    coverColor: '#3B82F6',
    heroBg: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
    shortDescription: 'High-speed wireless rover receiving structured UART command packets and streaming live battery telemetry back to a mobile dashboard.',
    whatIsIt: 'A wireless teleoperated rover demonstrating robust serial communication, packet checksum validation, and bidirectional telemetry streaming.',
    howItWorks: 'An HC-05 transceiver operates at 115200 baud. The mobile app sends structured 6-byte packets `[0xFF][CMD][SPEED_L][SPEED_R][CHECKSUM][0xFE]`. Arduino validates checksums before executing differential PWM motor drive.',
    components: [
      { name: 'Arduino UNO / STM32', role: 'Processes packet framing & motor PWM', icon: '🧠' },
      { name: 'HC-05 Bluetooth Module (115200 baud)', role: 'Wireless serial data transceiver', icon: '📡' },
      { name: 'L298N / Dual VNH5019 Driver', role: 'High-current motor driver stage', icon: '⚡' },
      { name: '4x Metal Gear DC Motors', role: 'Heavy-duty 4WD all-terrain drive', icon: '⚙️' },
      { name: 'Voltage Divider Sensor', role: 'Monitors battery level for live telemetry', icon: '📊' }
    ],
    workingSteps: [
      { step: 1, title: 'Packet Reception', description: 'Reads 6-byte command frame into circular UART buffer.' },
      { step: 2, title: 'Checksum Verification', description: 'Validates XOR checksum to reject RF interference.' },
      { step: 3, title: 'Independent PWM Drive', description: 'Sets individual left and right wheel speeds from 0 to 255.' },
      { step: 4, title: 'Telemetry Return', description: 'Transmits battery voltage and motor status back to smartphone app.' }
    ],
    simulationType: 'bluetooth_car',
    quiz: {
      title: 'Packet Teleoperation Quiz',
      questions: [
        {
          question: 'Why are start bytes (e.g. 0xFF) and end bytes (e.g. 0xFE) used in custom serial telemetry packets?',
          options: [
            'To clearly frame message boundaries so the receiver knows exactly where a command starts and finishes in the serial stream',
            'To increase the Bluetooth radio power',
            'To make code run in reverse',
            'To turn off the LEDs'
          ],
          correctIndex: 0,
          explanation: 'Packet framing delimiters ensure synchronization even if bytes are dropped or delayed during transmission!'
        }
      ]
    }
  },
  {
    id: 's-model-iot-bot',
    levelId: 'secondary',
    name: 'IoT Smart Cloud Robot',
    tagline: 'ESP32 Wi-Fi microcontroller with MQTT telemetry streaming',
    difficulty: 'Advanced',
    difficultyColor: '#8B5CF6',
    category: 'Cloud Connected Robotics',
    icon: '🌐',
    coverColor: '#06B6D4',
    heroBg: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
    shortDescription: 'Internet-connected autonomous rover that streams live sensor data to cloud MQTT brokers and accepts commands from any web browser.',
    whatIsIt: 'An Internet of Things (IoT) robotics platform powered by the dual-core ESP32 microcontroller, demonstrating cloud telematics and remote mission control.',
    howItWorks: 'The ESP32 connects to Wi-Fi, publishes environmental telemetry (temperature, humidity, battery, distance) in JSON format to an MQTT broker, and subscribes to remote browser commands.',
    components: [
      { name: 'ESP32 Dual-Core 240MHz MCU', role: 'Wi-Fi/Bluetooth IoT computational powerhouse', icon: '🧠' },
      { name: 'DHT22 Climate & Sonar Sensors', role: 'Environmental and range data collection', icon: '📡' },
      { name: 'DRV8833 Dual MOSFET Driver', role: 'Efficient low-voltage motor control', icon: '⚡' },
      { name: 'Cloud MQTT Broker / Web Dashboard', role: 'Remote global monitoring station', icon: '🌐' },
      { name: '3.7V 2000mAh Li-Po Cell', role: 'Rechargeable mobile power', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'Wi-Fi Connection', description: 'Authenticates with local 2.4GHz Wi-Fi access point.' },
      { step: 2, title: 'MQTT Telemetry Publish', description: 'Publishes JSON payload `{"temp":24.5,"dist":42}` to `robot/telemetry` topic.' },
      { step: 3, title: 'Browser Subscription', description: 'Web dashboard receives live chart updates via WebSockets.' },
      { step: 4, title: 'Remote Command Execution', description: 'Receives global control commands from authorized web users.' }
    ],
    simulationType: 'solar_robot',
    quiz: {
      title: 'IoT Cloud Robotics Quiz',
      questions: [
        {
          question: 'What is the primary role of the MQTT protocol in IoT robotics?',
          options: [
            'Providing a lightweight, low-overhead Publish/Subscribe messaging protocol for real-time sensor telemetry and remote control',
            'Compressing 4K video files',
            'Charging the Li-Po battery wirelessly',
            'Controlling the physical gear ratio'
          ],
          correctIndex: 0,
          explanation: 'MQTT is the lightweight standard for publishing IoT telemetry to cloud brokers with minimal bandwidth!'
        }
      ]
    }
  },
  {
    id: 's-model-auto-nav',
    levelId: 'secondary',
    name: 'Autonomous Waypoint Navigation Rover',
    tagline: 'GPS, digital compass magnetometer & closed-loop waypoint tracking',
    difficulty: 'Advanced',
    difficultyColor: '#8B5CF6',
    category: 'Autonomous Waypoint Rover',
    icon: '🧭',
    coverColor: '#10B981',
    heroBg: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    shortDescription: 'Outdoor autonomous rover utilizing NEO-6M GPS and HMC5883L digital compass magnetometer to navigate pre-set geographic coordinates.',
    whatIsIt: 'An outdoor field rover demonstrating GPS waypoint navigation, Haversine distance calculation, and magnetic heading PID steering.',
    howItWorks: 'The GPS module receives latitude and longitude coordinates. Arduino calculates the bearing angle to the next waypoint using the Haversine formula, compares it with current heading from the magnetometer compass, and steers to reach the waypoint within a 2-meter radius.',
    components: [
      { name: 'Arduino Mega / ESP32', role: 'Haversine mathematical solvers & heading PID', icon: '🧠' },
      { name: 'U-Blox NEO-6M GPS Receiver', role: 'Geographic coordinate positioning', icon: '🛰️' },
      { name: 'HMC5883L 3-Axis Digital Magnetometer', role: 'Accurate compass heading reference', icon: '🧭' },
      { name: 'High-Torque Tracked Chassis', role: 'All-terrain outdoor mobility', icon: '🚜' },
      { name: 'High-Capacity 3S Li-Po Battery', role: 'Long-range field power', icon: '🔋' }
    ],
    workingSteps: [
      { step: 1, title: 'GPS Fix', description: 'Acquires 3D satellite fix for current latitude and longitude.' },
      { step: 2, title: 'Bearing Calculation', description: 'Calculates target heading angle to next coordinate waypoint.' },
      { step: 3, title: 'Heading Error PID', description: 'Compares target bearing with magnetometer compass heading.' },
      { step: 4, title: 'Waypoint Reached', description: 'When within 2 meters, advances to next mission waypoint in memory!' }
    ],
    simulationType: 'line_follower',
    quiz: {
      title: 'Autonomous GPS Navigation Quiz',
      questions: [
        {
          question: 'What mathematical formula calculates the great-circle distance between two GPS latitude/longitude coordinates on Earth?',
          options: [
            'The Haversine Formula',
            'Ohm\'s Law',
            'Pythagorean Theorem for 2D planes',
            'Boyle\'s Law'
          ],
          correctIndex: 0,
          explanation: 'The Haversine formula accounts for the spherical curvature of the Earth when computing GPS distances!'
        }
      ]
    }
  }
];

// ==========================================================
// 5. DEMO STUDENTS WITH TAILORED LEVEL DATA & PROGRESS
// ==========================================================
export const INITIAL_STUDENTS = [
  {
    id: 'student-ananya',
    email: 'ananya.patel@school.edu',
    name: 'Ananya Patel',
    class: '3rd Grade',
    level: 'Primary School',
    levelId: 'primary',
    avatar: '🚀',
    avatarBg: '#10B981',
    streakDays: 6,
    stats: {
      progressPercentage: 62,
      lessonsCompleted: 5,
      totalLessons: 8,
      modelsExplored: 3,
      totalModels: 4,
      averageQuizScore: 80,
      quizzesCompleted: 4,
      totalQuizzes: 5
    }
  },
  {
    id: 'student-aarav',
    email: 'aarav.sharma@school.edu',
    name: 'Aarav Sharma',
    class: '7th Grade',
    level: 'Middle School',
    levelId: 'middle',
    avatar: '🤖',
    avatarBg: '#3B82F6',
    streakDays: 4,
    stats: {
      progressPercentage: 45,
      lessonsCompleted: 5,
      totalLessons: 10,
      modelsExplored: 3,
      totalModels: 5,
      averageQuizScore: 82,
      quizzesCompleted: 5,
      totalQuizzes: 6
    }
  },
  {
    id: 'student-kabir',
    email: 'kabir.mehta@school.edu',
    name: 'Kabir Mehta',
    class: '10th Grade',
    level: 'Secondary School',
    levelId: 'secondary',
    avatar: '🧠',
    avatarBg: '#8B5CF6',
    streakDays: 12,
    stats: {
      progressPercentage: 31,
      lessonsCompleted: 4,
      totalLessons: 13,
      modelsExplored: 3,
      totalModels: 6,
      averageQuizScore: 74,
      quizzesCompleted: 4,
      totalQuizzes: 6
    }
  }
];

// Learning Levels definition
export const LEARNING_LEVELS = [
  {
    id: 'primary',
    title: 'Primary School',
    badgeText: 'Explorer 🚀',
    gradeRange: 'Grades 1 – 5',
    ageGroup: 'Ages 6 – 10',
    description: 'A magical, colorful start! Discover what robots are, explore robot parts, wheels, simple sensors, and how machines help us.',
    themeGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    bgLight: '#ECFDF5',
    borderColor: '#6EE7B7',
    icon: '🌱',
    lessonCount: 8,
    modelCount: 4,
    topics: [
      'What is a Robot?',
      'Robots Around Us',
      'Parts of a Robot',
      'Wheels and Movement',
      'Simple Sensors',
      'Motors for Kids',
      'What Can Robots Do?',
      'Basic Robot Safety'
    ]
  },
  {
    id: 'middle',
    title: 'Middle School',
    badgeText: 'Builder 🛠️',
    gradeRange: 'Grades 6 – 8',
    ageGroup: 'Ages 11 – 13',
    description: 'Level up your skills! Master the Sense-Think-Act loop, Arduino microcontroller brains, sensor circuits, line followers, and obstacle rovers.',
    themeGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
    bgLight: '#EFF6FF',
    borderColor: '#93C5FD',
    icon: '⚡',
    lessonCount: 10,
    modelCount: 5,
    topics: [
      'Introduction to Robotics',
      'Robot Components',
      'Sensors and Actuators',
      'Motors',
      'Arduino Introduction',
      'Digital and Analog Signals',
      'Basic Robot Programming',
      'Line Following Robots',
      'Obstacle Avoiding Robots',
      'Robotics Logic'
    ]
  },
  {
    id: 'secondary',
    title: 'Secondary School',
    badgeText: 'Innovator 💡',
    gradeRange: 'Grades 9 – 12',
    ageGroup: 'Ages 14 – 18',
    description: 'Master engineering & software! Kinematics, Arduino C++, interrupts, motor drivers (L298N), autonomous PID control, IoT telemetry, and project design.',
    themeGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
    bgLight: '#F5F3FF',
    borderColor: '#C4B5FD',
    icon: '🧠',
    lessonCount: 13,
    modelCount: 6,
    topics: [
      'Robotics Fundamentals & Kinematics',
      'Arduino Programming & C++ Architecture',
      'Sensors and Actuators Integration',
      'Microcontrollers & Memory Architecture',
      'Motor Drivers & Power Electronics',
      'Embedded Systems & Real-Time Constraints',
      'Robot Control Logic & State Machines',
      'Autonomous Navigation & Closed-Loop PID',
      'Line Following Algorithms & Sensor Arrays',
      'Obstacle Avoidance Logic & Sonar Vectors',
      'Wireless Robotics: Bluetooth & Teleoperation',
      'Basic IoT in Robotics & Cloud Telemetry',
      'Robot Project Design & Schematics'
    ]
  }
];

// Helper: All combined lessons list
export const ALL_LESSONS = [
  ...PRIMARY_LESSONS,
  ...MIDDLE_LESSONS,
  ...SECONDARY_LESSONS
];

// Helper: All combined models list
export const ALL_MODELS = [
  ...PRIMARY_MODELS,
  ...MIDDLE_MODELS,
  ...SECONDARY_MODELS
];

// Achievement Badges
export const BADGES = [
  {
    id: 'badge_first_explorer',
    name: 'First Robot Explorer',
    description: 'Completed your very first robotics lesson and stepped into the world of robotics!',
    icon: '🚀',
    category: 'Exploration',
    color: '#3B82F6',
    criteria: 'Complete any 1 lesson'
  },
  {
    id: 'badge_sensor_starter',
    name: 'Sensor Starter',
    description: 'Mastered the senses of robots (Sensors, Ultrasonic, IR, LDR)!',
    icon: '👁️',
    category: 'Hardware',
    color: '#10B981',
    criteria: 'Complete the Sensors lesson'
  },
  {
    id: 'badge_robotics_beginner',
    name: 'Robotics Beginner',
    description: 'Completed your first interactive quiz with flying colors!',
    icon: '⭐',
    category: 'Mastery',
    color: '#F59E0B',
    criteria: 'Complete any quiz with ≥ 70% score'
  },
  {
    id: 'badge_quiz_champion',
    name: 'Quiz Champion',
    description: 'Scored 100% on a robotics quiz challenge! Flawless knowledge!',
    icon: '🏆',
    category: 'Excellence',
    color: '#EC4899',
    criteria: 'Score 100% on any quiz'
  },
  {
    id: 'badge_model_explorer',
    name: 'Model Explorer',
    description: 'Explored robot models and learned how they work in detail!',
    icon: '🤖',
    category: 'Robots',
    color: '#8B5CF6',
    criteria: 'Inspect 3 robot models in detail'
  },
  {
    id: 'badge_robotics_builder',
    name: 'Robotics Builder',
    description: 'Tested all components and activated the live interactive robot simulation!',
    icon: '🛠️',
    category: 'Engineering',
    color: '#06B6D4',
    criteria: 'Interact with any model live simulation'
  }
];

export const FUN_ROBOTICS_FACTS = [
  '🤖 The smallest robot in the world is smaller than the width of a human hair and is called a "Microbot"!',
  '🚀 NASA\'s Mars Curiosity Rover sings "Happy Birthday" to itself every year on Mars!',
  '🌊 Deep sea robots can dive deeper into ocean trenches than any human submarine has ever gone!',
  '⚡ Industrial robots can weld car frames with sub-millimeter precision in just seconds!',
  '🦾 Bionic robotic prosthetics can read electric nerve impulses from human muscles to open and close fingers naturally!'
];
