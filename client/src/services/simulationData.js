// ==========================================================
// RoboLearn Robotics Learning & Simulation Lab Data
// Level & Model-Specific Simulation Configurations
// ==========================================================

export const MODEL_ALIASES = {
  // Alias mappings for URL/direct slug IDs to canonical model IDs
  'simple-moving-robot': 'p-model-moving',
  'light-following-robot': 'p-model-light',
  'mini-smart-car': 'p-model-mini-smart',
  'simple-obstacle-robot': 'p-model-simple-obstacle',
  'line-following-robot': 'm-model-line',
  'obstacle-avoiding-robot': 'm-model-obstacle',
  'bluetooth-controlled-robot': 'm-model-bluetooth',
  'smart-dustbin': 'm-model-smart-dustbin',
  'smart-touchless-dustbin': 'm-model-smart-dustbin',
  'light-tracking-rover': 'm-model-light-follow-m',
  'advanced-line-following-robot': 's-model-adv-line',
  'autonomous-obstacle-avoiding-rover': 's-model-auto-obstacle',
  'robotic-arm': 's-model-arm',
  '4-dof-robotic-arm': 's-model-arm',
  'bluetooth-teleoperation-rover': 's-model-app-bot',
  'iot-smart-cloud-robot': 's-model-iot-bot',
  'autonomous-navigation': 's-model-auto-nav',
  'autonomous-navigation-robot': 's-model-auto-nav',
  'autonomous-waypoint-navigation-rover': 's-model-auto-nav'
};

export const SIMULATION_ACTIVITIES = {
  // --------------------------------------------------------
  // PRIMARY SCHOOL ACTIVITIES (Grades 1–5 — Ananya Patel)
  // --------------------------------------------------------
  primary: [
    {
      id: 'prim-act-1',
      modelId: 'p-model-moving',
      aliasIds: ['simple-moving-robot'],
      title: 'Simple Moving Robot 🚗',
      tagline: 'Learn how wheels and motors help a robot move forward and turn',
      icon: '🚗',
      simulationType: 'simple_mover',
      category: 'Movement & Wheels',
      difficulty: 'Beginner',
      description: 'Discover how electric DC motors turn wheels to roll across the playfield, reach the star, and steer in circles!',
      howItWorks: [
        { step: 1, title: 'Power to Motors', desc: 'Battery voltage flows into the left and right wheel motors.' },
        { step: 2, title: 'Tires Grip Floor', desc: 'Rubber tires create grip (friction) so the robot rolls instead of sliding.' },
        { step: 3, title: 'Drive to Target', desc: 'Spinning both wheels moves forward; spinning one wheel turns the rover.' }
      ],
      whyItHappens: 'Electric motors convert stored battery energy into spinning mechanical motion that rolls the wheels!',
      initialPhysics: {
        mass: 2, // kg
        force: 30, // N
        friction: 15, // %
        speed: 40 // cm/s
      },
      physicsLabels: {
        param1: { name: 'Motor Force (N)', key: 'force', min: 10, max: 90, desc: 'How hard the electric motors push the wheels' },
        param2: { name: 'Robot Weight (kg)', key: 'mass', min: 1, max: 8, desc: 'How heavy the robot chassis and battery are' },
        param3: { name: 'Floor Friction (%)', key: 'friction', min: 5, max: 40, desc: 'Grip between rubber tires and the floor' },
        param4: { name: 'Target Speed (cm/s)', key: 'speed', min: 15, max: 80, desc: 'Top cruising speed of the wheels' }
      },
      codeSnippet: `// Simple Moving Robot Controls
setSpeed(50);
moveForward(150);
turnRight(90);
moveForward(100);
stop();`,
      codeExplanations: [
        { code: 'setSpeed(50);', meaning: 'Tells the robot to drive at a safe medium cruise speed of 50.' },
        { code: 'moveForward(150);', meaning: 'Drives both wheels forward to travel 150 centimeters.' },
        { code: 'turnRight(90);', meaning: 'Spins the left wheel to turn the robot 90 degrees to the right.' },
        { code: 'stop();', meaning: 'Shuts off power to both wheel motors so the robot stops safely.' }
      ],
      challenges: [
        { id: 'c1', title: 'Drive Forward', desc: 'Run the robot forward at least 100 cm.', completed: false },
        { id: 'c2', title: 'Speed Explorer', desc: 'Increase the speed slider above 60 cm/s and run.', completed: false },
        { id: 'c3', title: 'Reach the Star ⭐', desc: 'Drive the rover until it touches the target star marker.', completed: false }
      ],
      quiz: [
        {
          question: 'What gives power to the robot wheels so they can spin?',
          options: ['Battery electricity flowing to electric motors', 'A slice of pizza', 'Water poured on the wheels', 'A wooden stick'],
          correctIndex: 0,
          explanation: 'Batteries supply electrical energy that electric motors turn into spinning motion!'
        },
        {
          question: 'What happens when you increase the Motor Speed slider?',
          options: ['The robot rolls faster across the floor', 'The robot turns invisible', 'The robot flies to space', 'The wheels turn square'],
          correctIndex: 0,
          explanation: 'Higher speed gives more electrical power to the wheels, making the robot travel faster!'
        },
        {
          question: 'What helps rubber tires roll without slipping on smooth floors?',
          options: ['Friction (grip between tire and floor)', 'Soap bubbles', 'Ice cubes', 'Paint'],
          correctIndex: 0,
          explanation: 'Friction provides the grip that pushes the robot forward across the ground!'
        }
      ]
    },
    {
      id: 'prim-act-2',
      modelId: 'p-model-light',
      aliasIds: ['light-following-robot'],
      title: 'Light Following Robot 🔦',
      tagline: 'Learn how light sensors help a robot steer toward bright flashlight beams',
      icon: '🔦',
      simulationType: 'light_follower',
      category: 'Optical Sensors & Light',
      difficulty: 'Beginner',
      description: 'See how Light Dependent Resistors (LDRs) act like electronic eyes to steer the robot toward bright light sources!',
      howItWorks: [
        { step: 1, title: 'Spot Flashlight', desc: 'Left and right light sensors measure brightness on each side.' },
        { step: 2, title: 'Compare Brightness', desc: 'The robot checks which sensor sees the stronger light beam.' },
        { step: 3, title: 'Steer to Light', desc: 'Motors turn the robot toward the bright flashlight beam!' }
      ],
      whyItHappens: 'More light on a sensor increases electrical signal, causing the robot to turn toward the beacon!',
      initialPhysics: {
        mass: 2.5,
        force: 40,
        friction: 12,
        speed: 45
      },
      physicsLabels: {
        param1: { name: 'Light Intensity (%)', key: 'force', min: 20, max: 100, desc: 'Brightness of the virtual flashlight' },
        param2: { name: 'Sensor Sensitivity', key: 'mass', min: 1, max: 5, desc: 'How quickly sensors respond to light' },
        param3: { name: 'Floor Grip (%)', key: 'friction', min: 5, max: 30, desc: 'Surface traction' },
        param4: { name: 'Drive Speed (cm/s)', key: 'speed', min: 20, max: 75, desc: 'Robot movement speed' }
      },
      codeSnippet: `// Light Following Robot Code
int leftLight = readLeftSensor();
int rightLight = readRightSensor();

if (leftLight > rightLight) {
  turnLeft(30);
} else if (rightLight > leftLight) {
  turnRight(30);
} else {
  moveForward(80);
}`,
      codeExplanations: [
        { code: 'int leftLight = readLeftSensor();', meaning: 'Reads brightness detected by the left optical light sensor.' },
        { code: 'if (leftLight > rightLight)', meaning: 'Checks if the left eye sees more light than the right eye.' },
        { code: 'turnLeft(30);', meaning: 'Pivots left toward the brighter flashlight beam.' },
        { code: 'moveForward(80);', meaning: 'Drives straight ahead when light is balanced directly in front.' }
      ],
      challenges: [
        { id: 'c1', title: 'Beam Spotted', desc: 'Move the flashlight near the robot to trigger light tracking.', completed: false },
        { id: 'c2', title: 'Follow the Beam', desc: 'Guide the robot across the playfield with the flashlight.', completed: false },
        { id: 'c3', title: 'Light Master', desc: 'Keep the robot tracking light for 5 continuous seconds.', completed: false }
      ],
      quiz: [
        {
          question: 'What electronic part acts like eyes for a light following robot?',
          options: ['Light Dependent Resistor (LDR sensor)', 'A wooden block', 'A glass cup', 'A wool sock'],
          correctIndex: 0,
          explanation: 'LDR sensors measure brightness so the robot can see where the flashlight is pointing!'
        },
        {
          question: 'What happens when you shine a bright flashlight on the robot\'s right eye?',
          options: ['The robot turns right toward the light', 'The robot turns off', 'The robot moves backwards into a wall', 'The robot turns blue'],
          correctIndex: 0,
          explanation: 'The robot compares both eyes and steers toward the side receiving more light!'
        },
        {
          question: 'Why does the robot drive straight when both sensors see equal brightness?',
          options: ['Because the light source is directly in front of the robot', 'Because the battery died', 'Because the wheels locked', 'Because of gravity'],
          correctIndex: 0,
          explanation: 'Equal light on both sensors means the light is straight ahead!'
        }
      ]
    },
    {
      id: 'prim-act-3',
      modelId: 'p-model-mini-smart',
      aliasIds: ['mini-smart-car'],
      title: 'Mini Smart Car 🚙',
      tagline: 'Learn how horn buzzers, LED headlights, and buttons work on smart vehicles',
      icon: '🚙',
      simulationType: 'mini_smart_car',
      category: 'Smart Vehicle Tech',
      difficulty: 'Beginner',
      description: 'Explore how real smart cars use electric circuits to honk horns, toggle bright headlights, and detect bumper button clicks!',
      howItWorks: [
        { step: 1, title: 'Press Bumper Switch', desc: 'Clicking the bumper button closes an electrical switch.' },
        { step: 2, title: 'Turn on Headlights', desc: 'LED lights shine bright beams across the path.' },
        { step: 3, title: 'Sound the Horn', desc: 'Piezo buzzer vibrates rapidly to beep a friendly horn!' }
      ],
      whyItHappens: 'Switches complete electrical circuits to power lights and sound buzzers instantly!',
      initialPhysics: {
        mass: 2,
        force: 35,
        friction: 15,
        speed: 50
      },
      physicsLabels: {
        param1: { name: 'Motor Power (N)', key: 'force', min: 10, max: 70, desc: 'Drive motor power' },
        param2: { name: 'Car Mass (kg)', key: 'mass', min: 1, max: 6, desc: 'Weight of chassis' },
        param3: { name: 'Tire Grip (%)', key: 'friction', min: 5, max: 35, desc: 'Braking traction' },
        param4: { name: 'Cruising Speed', key: 'speed', min: 20, max: 70, desc: 'Drive speed' }
      },
      codeSnippet: `// Mini Smart Car Controls
turnOnHeadlights();
beepHorn();
moveForward(120);
if (bumperPressed()) {
  beepHorn();
  stop();
}`,
      codeExplanations: [
        { code: 'turnOnHeadlights();', meaning: 'Powers on the front LED headlights for nighttime driving.' },
        { code: 'beepHorn();', meaning: 'Vibrates the piezo buzzer to play an alert horn beep.' },
        { code: 'moveForward(120);', meaning: 'Drives the smart car forward along the road.' },
        { code: 'if (bumperPressed())', meaning: 'Checks if the front bumper switch tapped an obstacle.' }
      ],
      challenges: [
        { id: 'c1', title: 'Honk the Horn', desc: 'Trigger the horn buzzer using controls or code.', completed: false },
        { id: 'c2', title: 'Flash Headlights', desc: 'Turn on the front LED headlights.', completed: false },
        { id: 'c3', title: 'Drive & Stop', desc: 'Drive the mini smart car safely to the stop line.', completed: false }
      ],
      quiz: [
        {
          question: 'What electronic component makes the beep sound on the mini smart car?',
          options: ['A Piezo Sound Buzzer', 'A plastic wheel', 'A glass window', 'A paper sticker'],
          correctIndex: 0,
          explanation: 'Piezo buzzers vibrate very quickly to produce sound waves and horn beeps!'
        },
        {
          question: 'What type of light bulb is used for robot headlights because it uses very little battery power?',
          options: ['Light Emitting Diode (LED)', 'A flaming candle', 'A flashlight battery', 'A wooden match'],
          correctIndex: 0,
          explanation: 'LEDs are super energy efficient and bright, making them perfect for robotics!'
        },
        {
          question: 'What happens when a switch is clicked to "ON"?',
          options: ['It closes the circuit allowing electricity to flow', 'It breaks the wires', 'It freezes the battery', 'It empties the water'],
          correctIndex: 0,
          explanation: 'Closing the switch completes the circuit loop so electric current can power the motors and lights!'
        }
      ]
    },
    {
      id: 'prim-act-4',
      modelId: 'p-model-simple-obstacle',
      aliasIds: ['simple-obstacle-robot'],
      title: 'Simple Obstacle Robot 🛡️',
      tagline: 'Learn how springy whisker bumpers help a robot reverse and avoid table legs',
      icon: '🛡️',
      simulationType: 'simple_bumper',
      category: 'Touch Sensors & Avoidance',
      difficulty: 'Beginner',
      description: 'Discover how mechanical touch switches and whisker bumpers protect robots from bumping into walls and furniture!',
      howItWorks: [
        { step: 1, title: 'Drive Forward', desc: 'Rover rolls ahead exploring the room.' },
        { step: 2, title: 'Touch Bumper Whisker', desc: 'Springy whisker taps a wall and clicks a switch.' },
        { step: 3, title: 'Reverse & Turn', desc: 'Robot reverses for 1 second and pivots away safely!' }
      ],
      whyItHappens: 'The bumper switch signals the motor circuit to reverse direction before the robot gets stuck!',
      initialPhysics: {
        mass: 3,
        force: 35,
        friction: 20,
        speed: 35
      },
      physicsLabels: {
        param1: { name: 'Motor Force (N)', key: 'force', min: 15, max: 70, desc: 'Pushing power of wheels' },
        param2: { name: 'Robot Mass (kg)', key: 'mass', min: 1, max: 7, desc: 'Chassis weight' },
        param3: { name: 'Floor Friction (%)', key: 'friction', min: 10, max: 40, desc: 'Floor grip' },
        param4: { name: 'Patrol Speed (cm/s)', key: 'speed', min: 15, max: 60, desc: 'Forward drive speed' }
      },
      codeSnippet: `// Whisker Touch & Avoid Logic
setSpeed(40);
moveForward(120);

// When whisker bumper hits wall:
if (whiskerTouched()) {
  moveBackward(50);
  turnLeft(90);
  moveForward(80);
}`,
      codeExplanations: [
        { code: 'moveForward(120);', meaning: 'Drives forward until the whisker sensor taps an obstacle.' },
        { code: 'if (whiskerTouched())', meaning: 'Detects when the mechanical bumper switch clicks.' },
        { code: 'moveBackward(50);', meaning: 'Reverses the robot 50 cm away from the wall.' },
        { code: 'turnLeft(90);', meaning: 'Pivots 90 degrees to face an open path.' }
      ],
      challenges: [
        { id: 'c1', title: 'Tap the Wall', desc: 'Drive the robot near the obstacle wall.', completed: false },
        { id: 'c2', title: 'Safe Reverse', desc: 'Use bumper switch logic to back away from the wall.', completed: false },
        { id: 'c3', title: 'Find Clear Path', desc: 'Turn and drive into the open green zone.', completed: false }
      ],
      quiz: [
        {
          question: 'What does a whisker bumper sensor do when a robot touches a chair?',
          options: ['Clicks a switch to signal that an obstacle was touched', 'Makes lunch for the robot', 'Plays a radio song', 'Paints the chair blue'],
          correctIndex: 0,
          explanation: 'Bumper switches close electrical contacts when pressed against an object!'
        },
        {
          question: 'Why does the robot back up after hitting an obstacle?',
          options: ['To create space so it can turn around without scraping the wall', 'Because it got scared', 'Because the wheels ran out of air', 'To cool down'],
          correctIndex: 0,
          explanation: 'Reversing gives room for the robot body to pivot without getting jammed!'
        },
        {
          question: 'Which of these is like human sense of touch for a robot?',
          options: ['A mechanical bumper microswitch', 'A plastic wheel', 'A battery wire', 'A metal screw'],
          correctIndex: 0,
          explanation: 'Bumper switches give robots tactile touch feedback just like your fingertips!'
        }
      ]
    }
  ],

  // --------------------------------------------------------
  // MIDDLE SCHOOL ACTIVITIES (Grades 6–8 — Aarav Sharma)
  // --------------------------------------------------------
  middle: [
    {
      id: 'mid-act-1',
      modelId: 'm-model-line',
      aliasIds: ['line-following-robot'],
      title: 'Line Following Robot Lab 🛤️',
      tagline: 'Learn how dual IR optical sensors help a robot follow black tracks',
      icon: '🛤️',
      simulationType: 'line_follower',
      category: 'Optical Infrared Tracking',
      difficulty: 'Intermediate',
      description: 'Experiment with dual IR sensor reflectance thresholds, differential steering, and track error correction.',
      howItWorks: [
        { step: 1, title: 'IR Surface Reflection', desc: 'Infrared emitters beam light down; white floor reflects, black tape absorbs.' },
        { step: 2, title: 'Threshold Comparison', desc: 'Arduino compares Left Sensor (0/1) vs Right Sensor (0/1).' },
        { step: 3, title: 'Differential Correction', desc: 'If Left sees line, Left motor slows down and Right speeds up to steer left.' }
      ],
      whyItHappens: 'Varying the speed ratio between left and right wheels changes the turning radius dynamically!',
      initialPhysics: {
        mass: 4, // kg
        force: 50, // N
        friction: 25, // %
        speed: 45 // cm/s
      },
      physicsLabels: {
        param1: { name: 'Motor Force (N)', key: 'force', min: 20, max: 90, desc: 'DC motor torque' },
        param2: { name: 'Chassis Mass (kg)', key: 'mass', min: 2, max: 8, desc: 'Robot weight' },
        param3: { name: 'Floor Friction (%)', key: 'friction', min: 10, max: 40, desc: 'Surface traction' },
        param4: { name: 'Track Speed (cm/s)', key: 'speed', min: 20, max: 80, desc: 'Cruising speed' }
      },
      codeSnippet: `// Arduino Line Following Controller
int leftSensor = readLeftSensor();
int rightSensor = readRightSensor();

if (leftSensor == 1 && rightSensor == 0) {
  turnLeft();   // Left sensor on black line
} else if (leftSensor == 0 && rightSensor == 1) {
  turnRight();  // Right sensor on black line
} else if (leftSensor == 0 && rightSensor == 0) {
  moveForward();// Centered on white/track
} else {
  stop();       // Both on black (intersection)
}`,
      codeExplanations: [
        { code: 'int leftSensor = readLeftSensor();', meaning: 'Reads digital state of left IR photodiode (1 = Black line, 0 = White floor).' },
        { code: 'if (leftSensor == 1 && rightSensor == 0)', meaning: 'Detects when the robot drifts right, putting left sensor on the line.' },
        { code: 'turnLeft();', meaning: 'Slows left wheel and speeds up right wheel to pivot back toward the center line.' },
        { code: 'moveForward();', meaning: 'Drives both wheels equally when centered over the guide path.' }
      ],
      challenges: [
        { id: 'c1', title: 'Calibrate Sensors', desc: 'Adjust IR sensor sensitivity slider to detect the black line.', completed: false },
        { id: 'c2', title: 'Complete a Lap', desc: 'Run the line follower around the complete track without leaving the line.', completed: false },
        { id: 'c3', title: 'High Speed Run', desc: 'Increase speed above 60 cm/s and maintain line lock.', completed: false }
      ],
      quiz: [
        {
          question: 'Why does an IR sensor detect a black tape line on a white floor?',
          options: [
            'Black surfaces absorb infrared light (low reflection), while white surfaces reflect light back into the receiver',
            'Black tape is magnetic',
            'Black tape emits sound beeps',
            'White surfaces block all electricity'
          ],
          correctIndex: 0,
          explanation: 'Dark pigments absorb IR wavelengths, causing a sharp drop in reflected voltage at the receiver photodiode!'
        },
        {
          question: 'In differential drive steering, how does the robot turn toward the RIGHT?',
          options: [
            'Slow down the Right motor while speeding up the Left motor',
            'Speed up both motors equally',
            'Turn off the Arduino',
            'Reverse both motors'
          ],
          correctIndex: 0,
          explanation: 'Slowing the right wheel causes the faster left wheel to pivot the rover around to the right!'
        },
        {
          question: 'What happens if you increase surface friction in the physics panel?',
          options: [
            'The robot requires more motor force to accelerate and slows down faster when power cuts',
            'The robot turns invisible',
            'The sensors stop reading voltages',
            'The battery loses all voltage instantly'
          ],
          correctIndex: 0,
          explanation: 'Friction opposes motion, requiring more motor force to sustain speed!'
        }
      ]
    },
    {
      id: 'mid-act-2',
      modelId: 'm-model-obstacle',
      aliasIds: ['obstacle-avoiding-robot'],
      title: 'Obstacle Avoiding Robot Lab 🛡️',
      tagline: 'Learn how ultrasonic distance sensors help a robot detect and avoid obstacles',
      icon: '🛡️',
      simulationType: 'obstacle_avoider',
      category: 'Ultrasonic Sonar Radar',
      difficulty: 'Intermediate',
      description: 'Experiment with ultrasonic sound wave time-of-flight, detection distance thresholds, and servo panning maneuvers.',
      howItWorks: [
        { step: 1, title: 'Sonar Ping', desc: 'HC-SR04 emits 40kHz sound pulses into the air.' },
        { step: 2, title: 'Echo Time Measurement', desc: 'Measures microseconds for the echo to bounce back from the wall.' },
        { step: 3, title: 'Distance Threshold', desc: 'If Distance < 20 cm, stop motors, scan left/right, and turn toward clear path.' }
      ],
      whyItHappens: '`Distance = (Time * Speed_of_Sound) / 2` calculates obstacle range in real time!',
      initialPhysics: {
        mass: 4.5,
        force: 55,
        friction: 20,
        speed: 50
      },
      physicsLabels: {
        param1: { name: 'Detection Threshold (cm)', key: 'force', min: 10, max: 50, desc: 'Braking distance buffer' },
        param2: { name: 'Robot Mass (kg)', key: 'mass', min: 2, max: 8, desc: 'Weight of rover' },
        param3: { name: 'Surface Grip (%)', key: 'friction', min: 10, max: 40, desc: 'Tire traction' },
        param4: { name: 'Patrol Speed (cm/s)', key: 'speed', min: 20, max: 75, desc: 'Cruise speed' }
      },
      codeSnippet: `// Ultrasonic Obstacle Avoidance Loop
int distance = readDistance();

if (distance < 20) {
  stop();
  turnRight(90);
} else {
  moveForward();
}`,
      codeExplanations: [
        { code: 'int distance = readDistance();', meaning: 'Calculates obstacle distance in cm from sound echo flight time.' },
        { code: 'if (distance < 20)', meaning: 'Checks if an obstacle is closer than the 20 cm safety threshold.' },
        { code: 'stop(); turnRight(90);', meaning: 'Halts forward motion and pivots 90 degrees away from the barrier.' },
        { code: 'moveForward();', meaning: 'Continues forward cruise when the path ahead is clear.' }
      ],
      challenges: [
        { id: 'c1', title: 'Threshold Test', desc: 'Set detection threshold to 30 cm and observe early braking.', completed: false },
        { id: 'c2', title: 'Evade Obstacle', desc: 'Successfully steer around the center obstacle block.', completed: false },
        { id: 'c3', title: 'Continuous Patrol', desc: 'Navigate through obstacle corridor without colliding.', completed: false }
      ],
      quiz: [
        {
          question: 'Why is the round-trip echo time divided by 2 in the ultrasonic formula?',
          options: [
            'Because the sound wave travels forward to the obstacle AND returns back (round trip)',
            'Because the robot has 2 wheels',
            'Because the Arduino runs on 2 microchips',
            'Because sound is cut in half by gravity'
          ],
          correctIndex: 0,
          explanation: 'The measured flight time covers the distance there and back, so dividing by 2 yields the true one-way distance!'
        },
        {
          question: 'What happens if you increase the Detection Threshold from 20cm to 40cm?',
          options: [
            'The robot detects obstacles from farther away and begins turning earlier',
            'The robot crashes into the obstacle faster',
            'The battery drains instantly',
            'The sensors stop functioning'
          ],
          correctIndex: 0,
          explanation: 'A larger detection threshold creates a bigger safety buffer zone around the robot!'
        },
        {
          question: 'What is the speed of sound in normal room temperature air?',
          options: ['Approximately 343 meters per second (0.0343 cm/µs)', '300,000 kilometers per second', '10 miles per hour', '1 meter per minute'],
          correctIndex: 0,
          explanation: 'Sound travels through room air at ~343 m/s, which the microcontroller uses to calculate distance!'
        }
      ]
    },
    {
      id: 'mid-act-3',
      modelId: 'm-model-bluetooth',
      aliasIds: ['bluetooth-controlled-robot'],
      title: 'Bluetooth Controlled Robot Lab 📱',
      tagline: 'Learn how wireless commands control robot movement over Bluetooth',
      icon: '📱',
      simulationType: 'bluetooth_car',
      category: 'Wireless Teleoperation',
      difficulty: 'Intermediate',
      description: 'Explore how wireless ASCII character commands (\'F\', \'B\', \'L\', \'R\', \'S\') streamed from a smartphone app command robot movement over UART serial.',
      howItWorks: [
        { step: 1, title: 'Smartphone Gamepad', desc: 'User presses directional button on phone touchscreen.' },
        { step: 2, title: 'HC-05 Wireless Serial', desc: 'Transmits character byte over 2.4 GHz radio link at 9600 baud.' },
        { step: 3, title: 'Arduino Motor Command', desc: 'Arduino reads `Serial.read()` and drives 4-wheel motor H-Bridge.' }
      ],
      whyItHappens: 'UART serial protocol streams character bytes wirelessly to control microcontroller output pins!',
      initialPhysics: {
        mass: 5,
        force: 60,
        friction: 20,
        speed: 55
      },
      physicsLabels: {
        param1: { name: 'Motor Torque (N)', key: 'force', min: 20, max: 90, desc: '4WD motor torque' },
        param2: { name: 'Chassis Mass (kg)', key: 'mass', min: 2, max: 8, desc: 'Vehicle weight' },
        param3: { name: 'Traction Friction (%)', key: 'friction', min: 10, max: 40, desc: 'Tire grip' },
        param4: { name: 'Throttle Speed (cm/s)', key: 'speed', min: 20, max: 85, desc: 'Drive speed' }
      },
      codeSnippet: `// Bluetooth Serial Command Parser
char cmd = readBluetooth();

if (cmd == 'F') {
  moveForward();
} else if (cmd == 'B') {
  moveBackward();
} else if (cmd == 'L') {
  turnLeft();
} else if (cmd == 'R') {
  turnRight();
} else if (cmd == 'S') {
  stop();
}`,
      codeExplanations: [
        { code: 'char cmd = readBluetooth();', meaning: 'Reads incoming ASCII character from HC-05 serial buffer.' },
        { code: 'if (cmd == \'F\') moveForward();', meaning: 'Executes forward wheel drive when \'F\' is received from phone.' },
        { code: 'else if (cmd == \'L\') turnLeft();', meaning: 'Pivots left wheels in reverse and right wheels forward.' },
        { code: 'else if (cmd == \'S\') stop();', meaning: 'Cuts motor power immediately when button is released.' }
      ],
      challenges: [
        { id: 'c1', title: 'Pair Bluetooth Link', desc: 'Establish simulated wireless connection with rover.', completed: false },
        { id: 'c2', title: 'Drive Remote Circuit', desc: 'Steer the rover through a complete figure-8 using controls.', completed: false },
        { id: 'c3', title: 'Emergency Stop Test', desc: 'Send stop command \'S\' and observe braking deceleration.', completed: false }
      ],
      quiz: [
        {
          question: 'What standard serial protocol connects the HC-05 Bluetooth module to Arduino?',
          options: [
            'UART Serial (TX and RX pins at 9600 baud rate)',
            'HDMI Video cable',
            'Fiber optic cable',
            'Morse code buzzer'
          ],
          correctIndex: 0,
          explanation: 'UART (Universal Asynchronous Receiver-Transmitter) uses TX/RX pins for two-way serial data!'
        },
        {
          question: 'Why are single characters like \'F\', \'B\', \'L\', \'R\' used for teleoperation?',
          options: [
            'Single bytes transmit instantaneously with minimum latency and minimal memory overhead',
            'Because microcontrollers cannot read words',
            'Because English is banned on Arduino',
            'To make code look shorter'
          ],
          correctIndex: 0,
          explanation: 'Single-byte ASCII characters require only 1 byte of bandwidth, ensuring instant response!'
        },
        {
          question: 'What radio frequency band does Bluetooth operate in?',
          options: ['2.4 GHz ISM band', '500 kHz AM radio', '100 MHz FM radio', 'Infrared light'],
          correctIndex: 0,
          explanation: 'Bluetooth uses the 2.4 GHz Industrial, Scientific, and Medical (ISM) radio frequency band!'
        }
      ]
    },
    {
      id: 'mid-act-4',
      modelId: 'm-model-smart-dustbin',
      aliasIds: ['smart-dustbin', 'smart-touchless-dustbin'],
      title: 'Smart Touchless Dustbin Lab 🗑️',
      tagline: 'Learn how proximity sensors and servo motors automate hygienic touchless lids',
      icon: '🗑️',
      simulationType: 'smart_dustbin',
      category: 'Proximity & Servos',
      difficulty: 'Intermediate',
      description: 'Program a touchless smart actuator with ultrasonic distance proximity triggers, servo angular positioning, and non-blocking auto-close timers.',
      howItWorks: [
        { step: 1, title: 'Monitor Proximity', desc: 'Ultrasonic sensor pings continuously while lid is sealed.' },
        { step: 2, title: 'Open Servo Lid', desc: 'Hand detected < 15cm; servo horn rotates to 90 degrees.' },
        { step: 3, title: 'Hold & Countdown', desc: 'Timer holds lid open for 4 seconds for trash disposal.' },
        { step: 4, title: 'Hygienic Seal', desc: 'Servo returns smoothly to 0 degrees to seal the container.' }
      ],
      whyItHappens: 'Finite state machines keep robot operations predictable and prevent erratic behavior!',
      initialPhysics: {
        mass: 3,
        force: 45,
        friction: 15,
        speed: 30
      },
      physicsLabels: {
        param1: { name: 'Trigger Distance (cm)', key: 'force', min: 5, max: 30, desc: 'Proximity detection zone' },
        param2: { name: 'Lid Open Angle (°)', key: 'mass', min: 45, max: 120, desc: 'Servo flap angle' },
        param3: { name: 'Open Hold Time (s)', key: 'friction', min: 2, max: 10, desc: 'Auto-close countdown' },
        param4: { name: 'Servo Speed (%)', key: 'speed', min: 20, max: 90, desc: 'Lid rotation speed' }
      },
      codeSnippet: `// Smart Dustbin Controller
int distance = readUltrasonic();

if (distance < 15 && lidState == CLOSED) {
  openLid(90);      // Rotate servo to 90 degrees
  lidState = OPEN;
  delay(4000);      // Wait 4 seconds for trash
  closeLid(0);      // Return servo to 0 degrees
  lidState = CLOSED;
}`,
      codeExplanations: [
        { code: 'int distance = readUltrasonic();', meaning: 'Measures proximity of approaching hands in centimeters.' },
        { code: 'if (distance < 15 && lidState == CLOSED)', meaning: 'Triggers opening only when hand is closer than 15 cm and lid is closed.' },
        { code: 'openLid(90);', meaning: 'Rotates SG90 servo motor from 0° to 90° to lift the flap.' },
        { code: 'closeLid(0);', meaning: 'Returns servo to 0° to cleanly seal the bin after disposal.' }
      ],
      challenges: [
        { id: 'c1', title: 'Trigger Proximity', desc: 'Bring virtual hand closer than 15 cm to open lid.', completed: false },
        { id: 'c2', title: 'Hold Countdown', desc: 'Watch the 4-second open countdown timer in action.', completed: false },
        { id: 'c3', title: 'Auto-Seal Verification', desc: 'Observe automatic hygienic closing after timeout.', completed: false }
      ],
      quiz: [
        {
          question: 'Why is a servo motor used to open the dustbin lid instead of a continuous DC motor?',
          options: [
            'Because servo motors rotate to an exact angle (0° to 90°) and hold their position firmly',
            'Because servo motors use no electricity',
            'Because DC motors only work in water',
            'Because servo motors are invisible'
          ],
          correctIndex: 0,
          explanation: 'Servo motors have internal position feedback, allowing precise angular positioning from 0° to 90°!'
        },
        {
          question: 'What is the purpose of an auto-close timer in a touchless smart dustbin?',
          options: [
            'Allowing enough time to dispose of trash before automatically sealing the lid to prevent odors and germs',
            'Counting how many days the robot has lived',
            'Recharging the battery',
            'Changing the color of the bin'
          ],
          correctIndex: 0,
          explanation: 'Auto-close timers keep the mechanism hygienic by ensuring the lid seals automatically without touch!'
        },
        {
          question: 'What sensor technology detects hands approaching without physical contact?',
          options: ['Ultrasonic Distance Sensor', 'A mechanical screw', 'A cardboard ruler', 'A wooden spoon'],
          correctIndex: 0,
          explanation: 'Ultrasonic sensors measure distance using sound echo reflection, enabling contact-free detection!'
        }
      ]
    },
    {
      id: 'mid-act-5',
      modelId: 'm-model-light-follow-m',
      aliasIds: ['light-tracking-rover'],
      title: 'Light Tracking Rover Lab ☀️',
      tagline: 'Learn how analog voltage divider photoresistors create heliotropic tracking',
      icon: '☀️',
      simulationType: 'light_follower',
      category: 'Analog Differential Sensors',
      difficulty: 'Intermediate',
      description: 'Experiment with differential analog signal processing, voltage dividers, and heliotropic solar tracking behavior on rovers.',
      howItWorks: [
        { step: 1, title: 'Analog Sampling', desc: 'Reads analog voltages on pins A0 (left LDR) and A1 (right LDR).' },
        { step: 2, title: 'Differential Error', desc: 'Calculates light difference: `int diff = leftVal - rightVal`.' },
        { step: 3, title: 'Proportional Balance', desc: 'Adjusts motor PWM speeds until both sensors receive equal sunlight.' }
      ],
      whyItHappens: 'Analog voltage dividers translate changing light resistance into proportional voltages for smooth steering!',
      initialPhysics: {
        mass: 3.5,
        force: 50,
        friction: 18,
        speed: 40
      },
      physicsLabels: {
        param1: { name: 'Sun Brightness (Lux)', key: 'force', min: 20, max: 100, desc: 'Sunlight intensity' },
        param2: { name: 'LDR Sensitivity', key: 'mass', min: 1, max: 6, desc: 'Photoresistor gain' },
        param3: { name: 'Wheel Friction (%)', key: 'friction', min: 5, max: 35, desc: 'Floor grip' },
        param4: { name: 'Tracking Speed (cm/s)', key: 'speed', min: 15, max: 70, desc: 'Rover speed' }
      },
      codeSnippet: `// Differential Analog Light Tracker
int leftLight = analogRead(A0);
int rightLight = analogRead(A1);

int error = leftLight - rightLight;
int leftSpeed = 50 - (error / 10);
int rightSpeed = 50 + (error / 10);

setMotors(leftSpeed, rightSpeed);`,
      codeExplanations: [
        { code: 'int leftLight = analogRead(A0);', meaning: 'Samples analog voltage (0 to 1023) from the left LDR voltage divider.' },
        { code: 'int error = leftLight - rightLight;', meaning: 'Computes differential brightness error between both eyes.' },
        { code: 'setMotors(leftSpeed, rightSpeed);', meaning: 'Steers proportionally to balance sunlight exposure.' }
      ],
      challenges: [
        { id: 'c1', title: 'Track Sun Position', desc: 'Move the virtual sun and observe proportional steering.', completed: false },
        { id: 'c2', title: 'Solar Balance', desc: 'Achieve equal light intensity on both LDR sensors.', completed: false },
        { id: 'c3', title: 'High Noon Sprint', desc: 'Drive directly toward the noon beacon at top speed.', completed: false }
      ],
      quiz: [
        {
          question: 'What circuit configuration converts an LDR\'s varying resistance into a readable voltage for Arduino analogRead()?',
          options: [
            'A Voltage Divider circuit with a fixed 10kΩ resistor',
            'A direct battery short',
            'A speaker coil',
            'A transformer'
          ],
          correctIndex: 0,
          explanation: 'A voltage divider converts changing resistance into proportional voltage (0V to 5V) for analogRead()!'
        },
        {
          question: 'What range of values does Arduino analogRead() return for a 0V to 5V sensor?',
          options: ['0 to 1023 (10-bit resolution)', '0 to 10', '1 to 100', '-5 to +5'],
          correctIndex: 0,
          explanation: 'Arduino has a 10-bit ADC, which converts 0-5V into 1024 steps (0 to 1023)!'
        },
        {
          question: 'What is the advantage of proportional steering over simple on/off steering?',
          options: [
            'Proportional steering produces smooth, continuous corrections without jerky oscillations',
            'Proportional steering requires no battery',
            'Proportional steering makes the robot invisible',
            'Proportional steering only works at night'
          ],
          correctIndex: 0,
          explanation: 'Proportional steering scales wheel speed with the size of the error, creating smooth turns!'
        }
      ]
    }
  ],

  // --------------------------------------------------------
  // SECONDARY SCHOOL ACTIVITIES (Grades 9–12 — Kabir Mehta)
  // --------------------------------------------------------
  secondary: [
    {
      id: 'sec-act-1',
      modelId: 's-model-adv-line',
      aliasIds: ['advanced-line-following-robot'],
      title: 'Advanced Line Following Robot Lab 🏎️',
      tagline: 'Learn closed-loop PID control and 8-channel QTR sensor array algorithms',
      icon: '🏎️',
      simulationType: 'adv_line_follower',
      category: 'Closed-Loop PID Control',
      difficulty: 'Advanced',
      description: 'Tune real-time Kp, Ki, and Kd coefficients on an 8-sensor analog reflectance array and observe transient response and steady-state error.',
      howItWorks: [
        { step: 1, title: 'Sensor Centroid Calculation', desc: 'Calculates weighted position: `P = ∑(S_i * W_i) / ∑S_i`, returning 0-7000 line position.' },
        { step: 2, title: 'Error Calculation', desc: '`Error = Target_Position (3500) - Current_Position`.' },
        { step: 3, title: 'PID Math Solver', desc: '`Output = (Kp * e) + (Ki * ∫e dt) + (Kd * de/dt)`.' },
        { step: 4, title: 'Differential Velocity', desc: 'Adjusts left and right PWM duty cycles at 500 Hz to cancel trajectory deviation.' }
      ],
      whyItHappens: 'Kp corrects current error, Ki removes steady-state offset, and Kd dampens overshoot oscillation!',
      initialPhysics: {
        mass: 3.5,
        force: 80,
        friction: 20,
        speed: 70
      },
      physicsLabels: {
        param1: { name: 'Proportional Gain (Kp)', key: 'force', min: 10, max: 100, desc: 'Reactive steering force' },
        param2: { name: 'Derivative Gain (Kd)', key: 'mass', min: 1, max: 10, desc: 'Damping rate of wobble' },
        param3: { name: 'Integral Gain (Ki)', key: 'friction', min: 1, max: 30, desc: 'Steady-state error removal' },
        param4: { name: 'Base Speed (PWM)', key: 'speed', min: 30, max: 100, desc: 'Motor cruising speed' }
      },
      codeSnippet: `// High-Speed 500Hz PID Algorithm
readLeftSensor();
readRightSensor();

int error = 3500 - readSensorCentroid();
integral += error;
int derivative = error - lastError;

int correction = (Kp * error) + (Ki * integral) + (Kd * derivative);
setMotors(baseSpeed - correction, baseSpeed + correction);
lastError = error;`,
      codeExplanations: [
        { code: 'int error = 3500 - readSensorCentroid();', meaning: '3500 is the center setpoint; error is deviation in millimeters.' },
        { code: 'int derivative = error - lastError;', meaning: 'Computes instantaneous rate of error change to damp high-speed oscillations.' },
        { code: 'setMotors(baseSpeed - correction, ...);', meaning: 'Applies differential torque vector to steer vehicle back to center line.' }
      ],
      challenges: [
        { id: 'c1', title: 'Tune Proportional (Kp)', desc: 'Adjust Kp for responsive line centering.', completed: false },
        { id: 'c2', title: 'Damp Oscillations (Kd)', desc: 'Increase Kd to eliminate high-speed fish-tailing.', completed: false },
        { id: 'c3', title: 'Sub-3-Second Lap', desc: 'Complete a full speed track lap without trajectory departure.', completed: false }
      ],
      quiz: [
        {
          question: 'In a PID controller, what happens if Proportional gain (Kp) is set too high without sufficient Derivative damping (Kd)?',
          options: [
            'The robot will oscillate aggressively and overshoot the center line, potentially derailing',
            'The robot will stop moving completely',
            'The battery voltage will drop to zero',
            'The sensor array will turn off'
          ],
          correctIndex: 0,
          explanation: 'Excessive Kp creates high gain instability, causing the robot to violently overshoot its target!'
        },
        {
          question: 'What is the mathematical definition of the Integral (I) term in PID?',
          options: [
            'Accumulating past errors over time to eliminate lingering steady-state drift',
            'Predicting future error',
            'Multiplying speed by battery weight',
            'Calculating gear ratios'
          ],
          correctIndex: 0,
          explanation: 'The integral term sums historical error, providing continuous push to reach zero steady-state error!'
        },
        {
          question: 'Why is weighted centroid interpolation superior to discrete digital on/off sensing?',
          options: [
            'It provides continuous, high-resolution position coordinates (e.g. 0-7000) for smooth linear PID regulation',
            'It eliminates the need for electric motors',
            'It works without electricity',
            'It makes the tape invisible'
          ],
          correctIndex: 0,
          explanation: 'Weighted centroid yields sub-millimeter position resolution for smooth high-speed closed-loop regulation!'
        }
      ]
    },
    {
      id: 'sec-act-2',
      modelId: 's-model-auto-obstacle',
      aliasIds: ['autonomous-obstacle-avoiding-rover'],
      title: 'Autonomous Obstacle Avoiding Rover 📡',
      tagline: 'Learn multi-sonar sensor fusion and Vector Field Histogram (VFH) navigation',
      icon: '📡',
      simulationType: 'vector_sonar',
      category: 'Spatial Vector Navigation',
      difficulty: 'Advanced',
      description: 'Implement Artificial Potential Field navigation where obstacle proximity generates virtual repulsive force vectors directing the vehicle.',
      howItWorks: [
        { step: 1, title: 'Multi-Vector Sonar Array', desc: 'Concurrent range sampling across Left (-45°), Center (0°), and Right (+45°) sonars.' },
        { step: 2, title: 'Repulsive Potential', desc: 'Repulsive force vector is calculated: `F_rep = k / d^2` directed away from each obstacle.' },
        { step: 3, title: 'Attractive Goal Vector', desc: 'Goal waypoint generates attractive pull vector `F_att = k_att * (Goal - Position)`.' },
        { step: 4, title: 'Resultant Vector Steering', desc: 'Vehicle velocity vector aligns with `F_net = F_att + ∑F_rep`.' }
      ],
      whyItHappens: 'Vector field summation allows rovers to smoothly skirt obstacles without abrupt stop-and-turn halts!',
      initialPhysics: {
        mass: 5.5,
        force: 75,
        friction: 20,
        speed: 55
      },
      physicsLabels: {
        param1: { name: 'Repulsive Gain (k_rep)', key: 'force', min: 20, max: 100, desc: 'Obstacle repulsion force' },
        param2: { name: 'Attractive Gain (k_att)', key: 'mass', min: 1, max: 10, desc: 'Goal pull strength' },
        param3: { name: 'Sonar Sweep Arc (°)', key: 'friction', min: 30, max: 120, desc: 'Radar scanning width' },
        param4: { name: 'Cruising Speed (cm/s)', key: 'speed', min: 20, max: 80, desc: 'Rover velocity' }
      },
      codeSnippet: `// Artificial Potential Field (APF) Navigation
Vector2D F_att = computeAttractiveForce(currentPos, goalPos);
Vector2D F_rep = computeRepulsiveForces(sonarSensors);

Vector2D F_net = F_att + F_rep;
float targetAngle = atan2(F_net.y, F_net.x);
setSteeringAngle(targetAngle);`,
      codeExplanations: [
        { code: 'Vector2D F_att = computeAttractiveForce(...);', meaning: 'Generates directional pull toward destination waypoint.' },
        { code: 'Vector2D F_rep = computeRepulsiveForces(...);', meaning: 'Generates repulsive force inversely proportional to squared obstacle distance.' },
        { code: 'float targetAngle = atan2(F_net.y, F_net.x);', meaning: 'Resolves Cartesian force vectors into polar steering heading.' }
      ],
      challenges: [
        { id: 'c1', title: 'Repulsive Force Test', desc: 'Slide obstacle near rover and observe repulsive steering vector.', completed: false },
        { id: 'c2', title: 'Slalom Maze', desc: 'Guide the rover through 3 staggered obstacle pylons.', completed: false },
        { id: 'c3', title: 'Waypoint Reach', desc: 'Reach destination coordinate while repelling all hazards.', completed: false }
      ],
      quiz: [
        {
          question: 'In Artificial Potential Field (APF) navigation, how does repulsive force scale as obstacle distance decreases?',
          options: [
            'Repulsive force increases sharply (inversely proportional to the square of distance: 1/d²)',
            'Repulsive force decreases to zero',
            'Repulsive force turns into gravity',
            'Repulsive force has no effect'
          ],
          correctIndex: 0,
          explanation: 'The inverse-square relationship ensures powerful repulsion when obstacles become dangerously close!'
        },
        {
          question: 'What is a "local minimum" problem in potential field navigation?',
          options: [
            'A scenario (like a U-shaped dead-end) where attractive and repulsive forces cancel out to zero, trapping the rover',
            'A low battery condition',
            'A broken motor wire',
            'A small wheel diameter'
          ],
          correctIndex: 0,
          explanation: 'Local minima occur when opposing forces balance out before reaching the goal, requiring wall-following escape routines!'
        },
        {
          question: 'What mathematical function converts Cartesian (X, Y) force components into a polar heading angle?',
          options: ['atan2(Y, X)', 'sin(X) + cos(Y)', 'sqrt(X)', 'log(Y)'],
          correctIndex: 0,
          explanation: 'The four-quadrant arctangent function atan2(y, x) computes the true heading angle across full 360 degrees!'
        }
      ]
    },
    {
      id: 'sec-act-3',
      modelId: 's-model-arm',
      aliasIds: ['robotic-arm', '4-dof-robotic-arm'],
      title: '4-DOF Articulated Robotic Arm 🦾',
      tagline: 'Learn how motors and joints control an articulated robotic arm with Inverse Kinematics',
      icon: '🦾',
      simulationType: 'robotic_arm',
      category: 'Manipulator Kinematics',
      difficulty: 'Advanced',
      description: 'Solve the Inverse Kinematics (IK) equations for an articulated 4-axis robotic arm, command Base rotation, Shoulder, Elbow joints, and Gripper pick-and-place trajectories.',
      howItWorks: [
        { step: 1, title: 'Cartesian Setpoint', desc: 'Target gripper position (X, Y, Z) is defined in millimeters.' },
        { step: 2, title: 'Base Yaw Angle', desc: '`θ_base = atan2(Y, X)` calculates horizontal turntable rotation.' },
        { step: 3, title: 'Law of Cosines Solver', desc: 'Computes Shoulder (θ1) and Elbow (θ2) angles from arm link lengths L1 and L2.' },
        { step: 4, title: 'Interpolated Servo Motion', desc: 'Hardware timers output smooth 50Hz PWM pulses to all 4 joint servos.' }
      ],
      whyItHappens: 'Inverse Kinematics translates intuitive spatial coordinates (X, Y, Z) into machine joint angles!',
      initialPhysics: {
        mass: 6,
        force: 90,
        friction: 15,
        speed: 60
      },
      physicsLabels: {
        param1: { name: 'Joint Torque (N·cm)', key: 'force', min: 30, max: 150, desc: 'MG996R servo torque' },
        param2: { name: 'Arm Link Mass (kg)', key: 'mass', min: 1, max: 8, desc: 'Structure inertia' },
        param3: { name: 'Joint Friction (%)', key: 'friction', min: 5, max: 30, desc: 'Mechanical joint resistance' },
        param4: { name: 'Trajectory Speed (%)', key: 'speed', min: 20, max: 90, desc: 'Interpolation speed' }
      },
      codeSnippet: `// 4-DOF Robotic Arm Pick & Place Routine
moveBase(45);        // Rotate turntable to 45 degrees
moveArm(30, 60);     // Set Shoulder 30°, Elbow 60°
closeGripper();      // Clamp payload block
moveArm(50, 20);     // Elevate arm
moveBase(120);       // Swing to drop bin
openGripper();       // Release payload`,
      codeExplanations: [
        { code: 'moveBase(45);', meaning: 'Commands base turntable servo to rotate 45 degrees horizontally.' },
        { code: 'moveArm(30, 60);', meaning: 'Sets shoulder pitch to 30° and elbow pitch to 60° via Inverse Kinematics.' },
        { code: 'closeGripper();', meaning: 'Actuates gripper claw servo to clamp the payload block firmly.' },
        { code: 'openGripper();', meaning: 'Releases gripper jaw to deposit object into the destination bin.' }
      ],
      challenges: [
        { id: 'c1', title: 'Position Arm at Target', desc: 'Align arm end-effector over target object block.', completed: false },
        { id: 'c2', title: 'Grasp Payload', desc: 'Trigger gripper claw to clamp payload securely.', completed: false },
        { id: 'c3', title: 'Transport to Bin', desc: 'Execute trajectory routine to drop payload into target bin.', completed: false }
      ],
      quiz: [
        {
          question: 'What is the difference between Forward Kinematics and Inverse Kinematics?',
          options: [
            'Forward calculates end-effector (X,Y,Z) from joint angles; Inverse calculates required joint angles from desired (X,Y,Z)',
            'Forward uses batteries; Inverse uses solar panels',
            'Forward is for wheels; Inverse is for drones',
            'There is no difference'
          ],
          correctIndex: 0,
          explanation: 'Forward kinematics maps angles -> coordinates; Inverse kinematics maps coordinates -> joint angles!'
        },
        {
          question: 'What happens if a target coordinate (X, Y) is beyond the sum of link lengths (L1 + L2)?',
          options: [
            'The coordinate is outside the arm\'s reach workspace (Singularity/Unreachable setpoint)',
            'The arm expands its links physically',
            'The microcontroller resets',
            'The servos spin at 10,000 RPM'
          ],
          correctIndex: 0,
          explanation: 'Points beyond L1 + L2 lie outside the physical reach envelope (kinematic singularity)!'
        },
        {
          question: 'Why is trajectory interpolation used instead of jumping immediately to target angles?',
          options: [
            'To ensure smooth continuous acceleration and prevent mechanical jerk, vibration, and gear stripping',
            'To drain battery power',
            'To make servos louder',
            'Because math is slow'
          ],
          correctIndex: 0,
          explanation: 'Smooth trajectory interpolation limits acceleration and prevents mechanical shock to gears!'
        }
      ]
    },
    {
      id: 'sec-act-4',
      modelId: 's-model-app-bot',
      aliasIds: ['bluetooth-teleoperation-rover'],
      title: 'Bluetooth Teleoperation Rover Lab 📱',
      tagline: 'Learn framed UART serial packets, XOR checksums, and telemetry streaming',
      icon: '📱',
      simulationType: 'bluetooth_car',
      category: 'Wireless Telematics',
      difficulty: 'Advanced',
      description: 'Analyze bidirectional packet framing, parity/checksum validation, and real-time telemetry streaming over wireless serial channels.',
      howItWorks: [
        { step: 1, title: 'Packet Framing', desc: 'Message formatted as `[START:0xFF][CMD][SPEED_L][SPEED_R][CHECKSUM][END:0xFE]`.' },
        { step: 2, title: 'UART Transmission', desc: 'Serial packet streamed over 2.4 GHz Bluetooth at 115200 baud.' },
        { step: 3, title: 'Checksum Verification', desc: 'Receiver computes XOR checksum: `Calc_CS == Rx_CS`. If valid, executes motor PWM.' },
        { step: 4, title: 'Telemetry Return', desc: 'Arduino packages battery voltage, current draw, and speed back to mobile app.' }
      ],
      whyItHappens: 'Checksum validation rejects corrupted RF packets before invalid commands can damage motors!',
      initialPhysics: {
        mass: 5,
        force: 70,
        friction: 20,
        speed: 65
      },
      physicsLabels: {
        param1: { name: 'Motor PWM (0-255)', key: 'force', min: 50, max: 255, desc: 'PWM duty cycle power' },
        param2: { name: 'Payload Mass (kg)', key: 'mass', min: 2, max: 8, desc: 'Vehicle inertia' },
        param3: { name: 'Traction Grip (%)', key: 'friction', min: 10, max: 40, desc: 'Floor resistance' },
        param4: { name: 'Cruising Speed (cm/s)', key: 'speed', min: 20, max: 85, desc: 'Rover velocity' }
      },
      codeSnippet: `// Serial Packet Protocol Parser
void parseBluetoothPacket() {
  if (Serial.read() == 0xFF) { // Start Byte
    byte cmd = Serial.read();
    byte speedL = Serial.read();
    byte speedR = Serial.read();
    byte receivedCS = Serial.read();
    
    byte calculatedCS = cmd ^ speedL ^ speedR;
    if (calculatedCS == receivedCS && Serial.read() == 0xFE) {
      setMotorPWM(speedL, speedR); // Valid packet!
    }
  }
}`,
      codeExplanations: [
        { code: 'if (Serial.read() == 0xFF)', meaning: 'Identifies start delimiter byte to synchronize serial byte stream.' },
        { code: 'byte calculatedCS = cmd ^ speedL ^ speedR;', meaning: 'Computes XOR checksum across all command payload bytes.' },
        { code: 'setMotorPWM(speedL, speedR);', meaning: 'Applies verified independent left and right wheel duty cycles.' }
      ],
      challenges: [
        { id: 'c1', title: 'Stream Packet', desc: 'Send forward command packet over virtual UART.', completed: false },
        { id: 'c2', title: 'Checksum Validation', desc: 'Verify packet integrity and observe execution confirmation.', completed: false },
        { id: 'c3', title: 'Live Telemetry', desc: 'Monitor voltage and RPM telemetry stream in real time.', completed: false }
      ],
      quiz: [
        {
          question: 'What is the purpose of an XOR checksum byte in wireless serial communication?',
          options: [
            'Detecting transmission errors or byte corruption caused by radio frequency noise before executing commands',
            'Increasing transmission speed to 10 Gbps',
            'Recharging the battery wirelessly',
            'Changing the Bluetooth frequency'
          ],
          correctIndex: 0,
          explanation: 'Checksum validation guarantees that corrupted bytes are discarded before motor drivers receive erroneous data!'
        },
        {
          question: 'What does a baud rate of 115200 signify in serial UART communication?',
          options: [
            'The channel transmits up to 115,200 bits per second across the serial wire',
            'The motor spins at 115,200 RPM',
            'The battery operates at 115,200 Volts',
            'The robot travels 115,200 meters'
          ],
          correctIndex: 0,
          explanation: 'Baud rate is the modulation rate in symbols or bits per second for UART communication!'
        },
        {
          question: 'Why are dedicated Start (0xFF) and End (0xFE) bytes used in packet framing?',
          options: [
            'To demarcate message boundaries so the parser can resynchronize even if bytes are dropped',
            'To make code look nicer',
            'To turn on the LED indicators',
            'To increase vehicle weight'
          ],
          correctIndex: 0,
          explanation: 'Framing bytes allow the receiver to cleanly locate packet boundaries in a continuous stream of bytes!'
        }
      ]
    },
    {
      id: 'sec-act-5',
      modelId: 's-model-iot-bot',
      aliasIds: ['iot-smart-cloud-robot'],
      title: 'IoT Smart Cloud Robot Lab 🌐',
      tagline: 'Learn ESP32 Wi-Fi microcontrollers, MQTT publish/subscribe & WebSockets',
      icon: '🌐',
      simulationType: 'iot_cloud',
      category: 'Cloud Connected Robotics',
      difficulty: 'Advanced',
      description: 'Simulate cloud telematics where an ESP32 rover publishes JSON sensor telemetry to an MQTT cloud broker and receives browser control messages.',
      howItWorks: [
        { step: 1, title: 'Wi-Fi Socket Connection', desc: 'ESP32 establishes TCP/IP connection to cloud MQTT broker on port 1883.' },
        { step: 2, title: 'JSON Telemetry Payload', desc: 'Packages `{"temp":24.5, "battery":7.8, "speed":52}` into lightweight packets.' },
        { step: 3, title: 'Publish to Topic', desc: 'Publishes payload to topic `robotics/rover1/telemetry` with QoS Level 1.' },
        { step: 4, title: 'Browser WebSockets', desc: 'Cloud dashboard subscribes to topic and renders live instrumentation dials.' }
      ],
      whyItHappens: 'MQTT publish/subscribe architecture enables real-time telematics with minimal cellular/Wi-Fi bandwidth!',
      initialPhysics: {
        mass: 4.8,
        force: 65,
        friction: 18,
        speed: 50
      },
      physicsLabels: {
        param1: { name: 'Publish Rate (Hz)', key: 'force', min: 1, max: 20, desc: 'Telemetry streaming frequency' },
        param2: { name: 'Wi-Fi Signal (dBm)', key: 'mass', min: -90, max: -30, desc: 'RF signal strength' },
        param3: { name: 'Packet Latency (ms)', key: 'friction', min: 10, max: 150, desc: 'Round-trip ping time' },
        param4: { name: 'Rover Speed (cm/s)', key: 'speed', min: 20, max: 75, desc: 'Drive velocity' }
      },
      codeSnippet: `// ESP32 MQTT Telemetry Publisher
#include <WiFi.h>
#include <PubSubClient.h>

void publishTelemetry() {
  StaticJsonDocument<128> doc;
  doc["voltage"] = readBatteryVoltage();
  doc["current"] = readCurrentSensor();
  doc["speed"] = calculateSpeed();

  char buffer[128];
  serializeJson(doc, buffer);
  mqttClient.publish("robot/telemetry", buffer);
}`,
      codeExplanations: [
        { code: 'StaticJsonDocument<128> doc;', meaning: 'Allocates structured JSON key-value document in microcontroller stack memory.' },
        { code: 'serializeJson(doc, buffer);', meaning: 'Encodes structured JSON object into compact string format.' },
        { code: 'mqttClient.publish("robot/telemetry", buffer);', meaning: 'Streams payload to cloud MQTT broker with 2-byte header overhead.' }
      ],
      challenges: [
        { id: 'c1', title: 'Connect to Wi-Fi Broker', desc: 'Establish simulated cloud MQTT link.', completed: false },
        { id: 'c2', title: 'Stream Telemetry Packet', desc: 'Publish JSON payload to cloud broker.', completed: false },
        { id: 'c3', title: 'Remote Command Loop', desc: 'Receive cloud command to execute remote waypoint maneuver.', completed: false }
      ],
      quiz: [
        {
          question: 'Why is MQTT the industry standard protocol for battery-powered IoT robotics over conventional HTTP REST?',
          options: [
            'MQTT has ultra-low packet overhead (2-byte header), minimal power draw, and efficient Publish/Subscribe architecture',
            'HTTP is illegal on microcontrollers',
            'MQTT does not require Wi-Fi or radio',
            'MQTT only works on 500V motors'
          ],
          correctIndex: 0,
          explanation: 'MQTT was built specifically for constrained IoT devices operating over bandwidth-limited wireless links!'
        },
        {
          question: 'What does "QoS" (Quality of Service) define in an MQTT robotics connection?',
          options: [
            'The delivery guarantee level for messages (QoS 0: At most once, QoS 1: At least once, QoS 2: Exactly once)',
            'The volume of the robot speaker',
            'The brightness of the LED headlights',
            'The speed of the wheels'
          ],
          correctIndex: 0,
          explanation: 'QoS levels guarantee whether telemetry or critical control commands must be acknowledged upon receipt!'
        },
        {
          question: 'Which microcontroller family combines high-speed 240MHz dual-core CPUs with built-in Wi-Fi and Bluetooth?',
          options: ['ESP32', 'Standard 555 Timer', 'ATtiny85 (1-core, no radio)', 'A mechanical clock'],
          correctIndex: 0,
          explanation: 'The Espressif ESP32 dual-core SoC is the premier choice for connected IoT robotics projects!'
        }
      ]
    },
    {
      id: 'sec-act-6',
      modelId: 's-model-auto-nav',
      aliasIds: ['autonomous-navigation', 'autonomous-navigation-robot', 'autonomous-waypoint-navigation-rover'],
      title: 'Autonomous Navigation Robot 🧭',
      tagline: 'Learn how robots make decisions, plan paths, and navigate geographic waypoint coordinates',
      icon: '🧭',
      simulationType: 'gps_nav',
      category: 'Autonomous Path Planning',
      difficulty: 'Advanced',
      description: 'Implement GPS coordinate navigation, digital compass magnetometer heading PID steering, and Haversine geodesic distance path planning.',
      howItWorks: [
        { step: 1, title: 'GPS Fix & Geodesic Calculation', desc: 'Acquires latitude/longitude and calculates bearing angle to next waypoint.' },
        { step: 2, title: 'Magnetometer Compass Heading', desc: 'Digital compass measures current rover yaw orientation relative to magnetic north.' },
        { step: 3, title: 'Heading Error PID Steering', desc: 'Closed-loop PID drives differential motors to align heading with target bearing.' },
        { step: 4, title: 'Waypoint Target Reached', desc: 'When within 2-meter arrival radius, advances to the next route waypoint.' }
      ],
      whyItHappens: 'Haversine spherical trigonometry resolves accurate bearing and distance vectors on Earth\'s surface!',
      initialPhysics: {
        mass: 6,
        force: 85,
        friction: 20,
        speed: 60
      },
      physicsLabels: {
        param1: { name: 'Bearing PID (Kp)', key: 'force', min: 20, max: 100, desc: 'Steering alignment gain' },
        param2: { name: 'Vehicle Mass (kg)', key: 'mass', min: 2, max: 10, desc: 'Chassis inertia' },
        param3: { name: 'Ground Traction (%)', key: 'friction', min: 10, max: 40, desc: 'Terrain grip' },
        param4: { name: 'Waypoint Speed (cm/s)', key: 'speed', min: 20, max: 80, desc: 'Cruising velocity' }
      },
      codeSnippet: `// Autonomous Waypoint Navigation Loop
float bearing = calculateBearing(curGPS, targetGPS);
float heading = readCompassHeading();
float headingError = bearing - heading;

steerPID(headingError);

if (distanceTo(targetGPS) < 2.0) {
  nextWaypoint(); // Advance to next target
}`,
      codeExplanations: [
        { code: 'float bearing = calculateBearing(...);', meaning: 'Computes target bearing angle (0-360°) using Haversine formula.' },
        { code: 'float heading = readCompassHeading();', meaning: 'Reads magnetic north heading angle from HMC5883L digital magnetometer.' },
        { code: 'steerPID(headingError);', meaning: 'Applies closed-loop PID correction to eliminate heading deviation.' },
        { code: 'if (distanceTo(targetGPS) < 2.0)', meaning: 'Detects arrival inside the 2-meter waypoint radius.' }
      ],
      challenges: [
        { id: 'c1', title: 'Acquire GPS Fix', desc: 'Initialize satellite positioning fix on the simulated map.', completed: false },
        { id: 'c2', title: 'Align Bearing Angle', desc: 'Turn rover until compass heading matches waypoint bearing.', completed: false },
        { id: 'c3', title: 'Complete 3-Waypoint Route', desc: 'Navigate through all 3 mission waypoints autonomously.', completed: false }
      ],
      quiz: [
        {
          question: 'What mathematical formula calculates the great-circle distance between two GPS latitude/longitude coordinates on Earth?',
          options: [
            'The Haversine Formula',
            'Ohm\'s Law',
            'Pythagorean Theorem for flat planes',
            'Boyle\'s Law'
          ],
          correctIndex: 0,
          explanation: 'The Haversine formula calculates spherical distances over the curved surface of the Earth!'
        },
        {
          question: 'What sensor provides absolute heading orientation relative to Earth\'s Magnetic North?',
          options: ['A 3-Axis Digital Magnetometer (Electronic Compass)', 'A temperature sensor', 'A light sensor', 'A piezo buzzer'],
          correctIndex: 0,
          explanation: 'Digital magnetometers detect Earth\'s geomagnetic field vectors to compute magnetic heading!'
        },
        {
          question: 'What is an "arrival radius" in waypoint navigation?',
          options: [
            'A circular threshold zone (e.g. 2 meters) around a waypoint where the goal is considered achieved',
            'The size of the robot wheel',
            'The length of the battery cable',
            'The color of the antenna'
          ],
          correctIndex: 0,
          explanation: 'Arrival radius accounts for GPS precision variance so rovers reliably advance to subsequent waypoints!'
        }
      ]
    }
  ]
};

// ==========================================================
// Helper Functions for Model-Specific Simulation Resolution
// ==========================================================

/**
 * Resolves a model ID or alias to its specific simulation activity.
 * @param {string} modelId - The model ID or alias (e.g. 'p-model-moving', 'line-following-robot', 'robotic-arm')
 * @param {string} [levelId] - Optional student level ('primary', 'middle', 'secondary')
 * @returns {object|null} The simulation activity object or null if not found
 */
export const getSimulationByModelId = (modelId, levelId) => {
  if (!modelId) return null;

  // Resolve alias if mapped
  const canonicalId = MODEL_ALIASES[modelId] || modelId;

  // 1. Search in preferred level first if provided
  if (levelId && SIMULATION_ACTIVITIES[levelId]) {
    const found = SIMULATION_ACTIVITIES[levelId].find(
      a => a.modelId === canonicalId || a.id === canonicalId || (a.aliasIds && a.aliasIds.includes(modelId))
    );
    if (found) return found;
  }

  // 2. Search across all levels
  for (const lvl of ['primary', 'middle', 'secondary']) {
    const list = SIMULATION_ACTIVITIES[lvl] || [];
    const found = list.find(
      a => a.modelId === canonicalId || a.id === canonicalId || (a.aliasIds && a.aliasIds.includes(modelId))
    );
    if (found) return found;
  }

  return null;
};

/**
 * Gets all activities available for a specific level.
 * @param {string} levelId - 'primary' | 'middle' | 'secondary'
 * @returns {Array} List of activities for that level
 */
export const getActivitiesForLevel = (levelId) => {
  return SIMULATION_ACTIVITIES[levelId] || SIMULATION_ACTIVITIES.primary;
};
