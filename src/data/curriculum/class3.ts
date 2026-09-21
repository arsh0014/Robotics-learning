import { Chapter, GlossaryTerm, Badge } from '../../types/curriculum';

export const class3Chapters: Chapter[] = [
  // ==================== CHAPTER 1: INTRODUCTION TO MECHANICS ====================
  {
    id: 'c3-ch-1-intro-mechanics',
    classId: 'class-3',
    number: 1,
    title: 'Introduction to Mechanics',
    tagline: 'Study of movement, 3 types of motion, 6 simple machines, and Scotch Yoke mechanism',
    color: '#2563EB',
    iconName: 'Cog',
    lessons: [
      {
        id: 'c3-l-1-1-what-is-mechanics',
        chapterId: 'c3-ch-1-intro-mechanics',
        order: 1,
        title: 'Definition and Introduction to Mechanics',
        subtitle: 'Understanding why and how things move or stop',
        summary: 'Mechanics is the study of how things move and why they move or stop. It explains everyday motion like rolling balls, speeding cars, and stable buildings.',
        keyPoints: [
          'Mechanics explains how objects behave when pushed, pulled, or left still.',
          'It is like a set of rules explaining motion for small balls up to giant planets.',
          'To understand Robotics, we must first master Mechanics because robots move using these exact physical rules.',
          'Everyday examples of mechanics in action: Cars, Robots, Bicycles, and Electric Fans.'
        ],
        illustrationType: 'mechanics_intro',
        tryItAction: {
          label: 'Test Forces & Motion',
          description: 'Push and pull objects to see how forces create motion!'
        }
      },
      {
        id: 'c3-l-1-2-types-of-motion',
        chapterId: 'c3-ch-1-intro-mechanics',
        order: 2,
        title: 'Three Common Types of Motion',
        subtitle: 'Straight Line, Circular, and Periodic Motion',
        summary: 'Objects move in distinct paths: straight tracks, circular loops around a fixed center, or repeating periodic patterns back and forth.',
        keyPoints: [
          'Straight Line Motion: Object moves along a straight path without turning (e.g. person on a straight road, car on highway, train on straight track).',
          'Circular Motion: Object moves around a fixed center in a circular path (e.g. merry-go-round, rotating blades of a fan).',
          'Periodic Motion: Object moves back and forth again and again in a repeating pattern (e.g. playground swing, clock pendulum, car windshield wiper).'
        ],
        illustrationType: 'motion_types',
        tryItAction: {
          label: 'Explore Motion Simulator',
          description: 'Toggle between Straight Line, Circular, and Periodic motion to see how each behaves!'
        }
      },
      {
        id: 'c3-l-1-3-six-simple-machines',
        chapterId: 'c3-ch-1-intro-mechanics',
        order: 3,
        title: 'The 6 Simple Machines in Mechanics',
        subtitle: 'Tools that make human and robot work easier',
        summary: 'Simple machines multiply human force, redirect effort, and make heavy tasks effortless.',
        keyPoints: [
          '1. Lever: A rigid bar pivoting on a fixed point (fulcrum) to lift or move objects (e.g. Seesaw, Scissors).',
          '2. Pulley: A grooved wheel with a rope that lifts heavy loads easily (e.g. well bucket, construction crane).',
          '3. Wheel & Axle: A central shaft attached to a rotating wheel for smooth transport (e.g. cars, bicycles, office chairs).',
          '4. Inclined Plane: A sloped flat surface higher on one end that eases lifting (e.g. playground slide, loading truck ramp).',
          '5. Screw: A spiral-shaped inclined plane that holds materials together or lifts things (e.g. jar lids, spiral drills).',
          '6. Wedge: A tool with a sharp angled edge that cuts or splits objects (e.g. knives, woodcutter axes).'
        ],
        illustrationType: 'simple_machines',
        tryItAction: {
          label: 'Interact with 6 Machines',
          description: 'Click each simple machine to see how it multiplies force and eases lifting!'
        }
      },
      {
        id: 'c3-l-1-4-scotch-yoke',
        chapterId: 'c3-ch-1-intro-mechanics',
        order: 4,
        title: 'Scotch Yoke Mechanism & Power Press',
        subtitle: 'Converting circular rotary motion into straight linear motion',
        summary: 'The Scotch Yoke uses a rotating pin inside a sliding slotted groove to transform spinning wheel motion into back-and-forth linear stamping.',
        keyPoints: [
          'The yoke is a slot or groove that can slide back and forth smoothly.',
          'A rotating pin fits inside the slot and is attached to a spinning wheel or crank.',
          'As the wheel turns in a circle, the pin pushes the yoke back and forth in a straight line.',
          'Used in real-world power presses, metal stamping machines, and steam engines.'
        ],
        illustrationType: 'scotch_yoke',
        tryItAction: {
          label: 'Spin Scotch Yoke Crank',
          description: 'Turn the circular crank and watch the horizontal slider reciprocate in a straight line!'
        }
      }
    ],
    activities: [
      {
        id: 'c3-act-1-simple-machines-explorer',
        chapterId: 'c3-ch-1-intro-mechanics',
        title: 'Simple Machines & Motion Explorer',
        type: 'simple_machines_explorer',
        description: 'Explore all 6 simple machines, test the 3 motion types, and operate the animated Scotch Yoke mechanism from your textbook!',
        materialsNeeded: ['Lever arm', 'Fulcrum pivot', 'Pulley rope', 'Inclined ramp', 'Wheel & Axle'],
        instructions: [
          'Select each of the 6 simple machines to view its mechanical advantage.',
          'Toggle Straight Line, Circular, and Periodic motions to see real-life examples.',
          'Crank the Scotch Yoke mechanism to witness circular-to-linear conversion!'
        ],
        xpReward: 40
      }
    ],
    models: [
      {
        id: 'c3-mod-1-blix-bike',
        chapterId: 'c3-ch-1-intro-mechanics',
        title: 'Blix Bike Model',
        subtitle: 'Wheel & Axle frame with curved mudguards',
        description: 'Build a sturdy 4-wheeled Blix bicycle model demonstrating the wheel & axle principle and rigid frame assembly.',
        parts: [
          { name: 'Long Blix Strips', count: 2, color: 'Blue' },
          { name: 'Curved Yellow Pieces', count: 2, color: 'Yellow' },
          { name: 'Wheels', count: 4, color: 'Black' },
          { name: 'Axles / Shafts', count: 2, color: 'Silver' },
          { name: 'Connectors', count: 6, color: 'Red' },
          { name: 'Medium Handle Strip', count: 1, color: 'Orange' },
          { name: 'Short Seat Strip', count: 1, color: 'Grey' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Make the Base Frame: Join two long Blix strips using connectors to form the main bike frame.' },
          { stepNumber: 2, instruction: 'Fix the Wheels: Attach two wheels on the front axle and two wheels on the rear axle. Fix the axles firmly to the base frame.' },
          { stepNumber: 3, instruction: 'Build the Handle Section: Use a medium strip and connectors to make the handle bar. Fix it to the front part of the frame.' },
          { stepNumber: 4, instruction: 'Add the Seat Support: Attach a short strip vertically at the center of the frame to represent the seat support.' },
          { stepNumber: 5, instruction: 'Attach Curved Parts: Fix the curved yellow pieces above the wheels to act as mudguards.' },
          { stepNumber: 6, instruction: 'Final Check: Ensure all parts are tightly connected and the wheels rotate freely.' }
        ],
        xpReward: 50
      },
      {
        id: 'c3-mod-1-scotch-yoke-press',
        chapterId: 'c3-ch-1-intro-mechanics',
        title: 'Scotch Yoke Power Press',
        subtitle: 'Rotary-to-linear reciprocating mechanism',
        description: 'Construct the official Blix Scotch Yoke mechanism using sliding grooves, crank pin, and structural beams.',
        parts: [
          { name: 'P7 Beam', code: 'P7', count: 4, color: 'Blue' },
          { name: 'P3C2 Corner Connector', code: 'P3C2', count: 4, color: 'Orange' },
          { name: 'CT2 Connector', code: 'CT2', count: 10, color: 'Grey' },
          { name: 'CH2 Hinge', code: 'CH2', count: 4, color: 'Yellow' },
          { name: 'P7X11 Plate', code: 'P7X11', count: 2, color: 'Green' },
          { name: 'SH60 Shaft', code: 'SH60', count: 2, color: 'Silver' },
          { name: 'CL2 Loose Connector', code: 'CL2', count: 2, color: 'White' },
          { name: 'C60 Crank Wheel', code: 'C60', count: 1, color: 'Yellow' },
          { name: 'TW2 Wheel Spacer', code: 'TW2', count: 2, color: 'Black' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Assemble base uprights using P7 beams and P3C2 connectors.' },
          { stepNumber: 2, instruction: 'Lock crossbeams with CT2 and CH2 connectors ensuring correct collar orientation.' },
          { stepNumber: 3, instruction: 'Mount the vertical sliding guide slot (yoke).' },
          { stepNumber: 4, instruction: 'Insert the rotating crank pin with C60 wheel and SH60 shaft into the sliding yoke slot.' },
          { stepNumber: 5, instruction: 'Rotate the crank wheel to confirm that rotary motion turns into smooth linear reciprocating motion.' }
        ],
        xpReward: 60
      }
    ],
    quiz: [
      {
        id: 'c3-q-1-1',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'Which of the following uses mechanics?',
        options: ['Car', 'Bicycle', 'Robot', 'All of the above'],
        correctAnswer: 3,
        explanation: 'Cars, bicycles, and robots all rely on the principles of mechanics to move and operate.'
      },
      {
        id: 'c3-q-1-2',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'Mechanics helps us understand how objects behave when they are:',
        options: ['Painted', 'Pushed or pulled', 'Covered', 'Washed'],
        correctAnswer: 1,
        explanation: 'Mechanics studies the behavior and motion of objects under pushing, pulling, or resting forces.'
      },
      {
        id: 'c3-q-1-3',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'What is mechanics?',
        options: ['Study of plants', 'Study of how things move and stop', 'Study of numbers', 'Study of animals'],
        correctAnswer: 1,
        explanation: 'Mechanics is the scientific study of how things move and why they move or stop.'
      },
      {
        id: 'c3-q-1-4',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'When an object moves in a straight path without changing direction, it is called:',
        options: ['Circular motion', 'Periodic motion', 'Straight line motion', 'Random motion'],
        correctAnswer: 2,
        explanation: 'Moving in an unchanging straight line path is defined as straight line motion.'
      },
      {
        id: 'c3-q-1-5',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'A car moving on a straight highway shows:',
        options: ['Circular motion', 'Straight line motion', 'Periodic motion', 'Zigzag motion'],
        correctAnswer: 1,
        explanation: 'A vehicle driving down a straight highway follows straight line motion.'
      },
      {
        id: 'c3-q-1-6',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'Which object moves in circular motion?',
        options: ['Swing', 'Merry-go-round', 'Pendulum', 'Train on straight track'],
        correctAnswer: 1,
        explanation: 'A merry-go-round spins around a central axis in circular motion.'
      },
      {
        id: 'c3-q-1-7',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'Which motion moves back and forth again and again?',
        options: ['Straight line motion', 'Periodic motion', 'Circular motion', 'Fast motion'],
        correctAnswer: 1,
        explanation: 'Periodic motion repeats back and forth in the exact same pattern, like a pendulum or swing.'
      },
      {
        id: 'c3-q-1-8',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'A seesaw is an example of which simple machine?',
        options: ['Pulley', 'Screw', 'Lever', 'Wedge'],
        correctAnswer: 2,
        explanation: 'A seesaw is a classic lever pivoting on a central fulcrum.'
      },
      {
        id: 'c3-q-1-9',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'Which simple machine helps lift a bucket from a well?',
        options: ['Wheel and axle', 'Lever', 'Pulley', 'Wedge'],
        correctAnswer: 2,
        explanation: 'A grooved pulley with a rope makes lifting a heavy water bucket out of a deep well easy.'
      },
      {
        id: 'c3-q-1-10',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'Which tool is used for cutting or splitting things?',
        options: ['Screw', 'Inclined plane', 'Pulley', 'Wedge'],
        correctAnswer: 3,
        explanation: 'A wedge has a sharp angled edge designed to cut or split objects apart (e.g. knives, axes).'
      }
    ],
    writtenQuestions: [
      {
        id: 'c3-sq-1-1',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'What is mechanics?',
        sampleAnswer: 'Mechanics is the study of how things move and why they move or stop. It helps us understand how objects behave when pushed, pulled, or left still.'
      },
      {
        id: 'c3-sq-1-2',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'What is straight line motion? Give one example.',
        sampleAnswer: 'When an object moves in a straight path without changing direction, it is called straight line motion. Example: A train moving on a straight track or a person walking on a straight road.'
      },
      {
        id: 'c3-sq-1-3',
        chapterId: 'c3-ch-1-intro-mechanics',
        question: 'What is a simple machine? Name any two.',
        sampleAnswer: 'A simple machine is a tool that makes our work easier by changing the direction or magnitude of force. Two examples are the Lever and the Pulley.'
      }
    ],
    funFacts: [
      { id: 'c3-ff-1-1', text: 'Wheels are one of the greatest inventions in mechanics and are over 5,000 years old!', tag: 'History' },
      { id: 'c3-ff-1-2', text: 'A rolling football stops because of friction with the ground and air, not because it gets tired!', tag: 'Physics' },
      { id: 'c3-ff-1-3', text: 'Bicycles use multiple simple machines together: wheel & axle, levers for brakes, and pulleys for gear cables.', tag: 'Everyday' },
      { id: 'c3-ff-1-4', text: 'Tall skyscrapers do not topple over during storms because their weight and center of gravity are balanced using mechanics.', tag: 'Engineering' },
      { id: 'c3-ff-1-5', text: 'Robots follow the exact same physical rules of motion as humans, cars, and airplanes.', tag: 'Robotics' }
    ]
  },

  // ==================== CHAPTER 2: 3D PEN ====================
  {
    id: 'c3-ch-2-3d-pen',
    classId: 'class-3',
    number: 2,
    title: '3D Pen',
    tagline: '2D flat shapes vs 3D solid objects, filament extrusion, temperature control, and 3D drawing',
    color: '#8B5CF6',
    iconName: 'PenTool',
    lessons: [
      {
        id: 'c3-l-2-1-2d-vs-3d',
        chapterId: 'c3-ch-2-3d-pen',
        order: 1,
        title: 'Introduction to 2D and 3D Shapes',
        subtitle: 'Flat drawings versus solid touchable objects',
        summary: '2D shapes are flat with only length and width. 3D objects have length, width, height, and depth, allowing them to be held and viewed from all sides.',
        keyPoints: [
          '2D (Two-Dimensional): Flat shapes with length and width, but no thickness (e.g. circle, square, triangle, rectangle on paper or screen).',
          '3D (Three-Dimensional): Solid objects with length, width, and height/depth (e.g. box, bottle, ball, toy car).',
          'We can hold, touch, and inspect 3D objects from top, bottom, front, and back.'
        ],
        illustrationType: 'shapes_2d_3d',
        tryItAction: {
          label: 'Compare 2D vs 3D',
          description: 'Rotate a flat square to see it gain depth and transform into a 3D cube!'
        }
      },
      {
        id: 'c3-l-2-2-how-3d-pen-works',
        chapterId: 'c3-ch-2-3d-pen',
        order: 2,
        title: 'Anatomy and Working of a 3D Pen',
        subtitle: 'Heating filament, extruder nozzle, and rapid cooling',
        summary: 'A 3D pen heats plastic filament to 190°C. As the melted plastic is extruded through the nozzle tip, it cools quickly in the air to solidify into 3D structures.',
        keyPoints: [
          'Filament: A special plastic string (usually PLA) fed into the back of the pen.',
          'Heating Chamber: Melts the filament to around 190°C.',
          'Indicator Lights: Red light indicates heating; Green light indicates ready to extrude!',
          'Speed Adjustment: Slider controls how quickly the melted plastic flows out.',
          'Rapid Solidification: Melted filament hardens within seconds of leaving the nozzle tip.'
        ],
        illustrationType: 'pen_anatomy',
        tryItAction: {
          label: 'Inspect 3D Pen Parts',
          description: 'Click on the nozzle, speed slider, filament port, and temperature lights to see how each part works!'
        }
      },
      {
        id: 'c3-l-2-3-operating-steps-safety',
        chapterId: 'c3-ch-2-3d-pen',
        order: 3,
        title: 'Operating Steps and Safety Precautions',
        subtitle: 'Step-by-step procedure and avoiding hot nozzle burns',
        summary: 'Follow the 6 official steps to operate a 3D pen safely, respecting hot zones and cleaning procedures.',
        keyPoints: [
          'Step 1: Plug in the 3D pen, turn on switch, and press downward feed button once.',
          'Step 2: Wait for temperature to reach set value (190°C); red light turns solid green.',
          'Step 3: Insert plastic filament into the rear port while pressing the downward arrow.',
          'Step 4: Wait for filament to extrude; adjust speed controller for steady drawing.',
          'Step 5: Press upward arrow button to retract and remove filament when finished.',
          'Step 6: Allow pen to cool down for 5 minutes before cleaning or storing. NEVER touch the hot metal nozzle!'
        ],
        illustrationType: 'pen_safety',
        tryItAction: {
          label: 'Simulate Pen Preheating',
          description: 'Follow the preheat sequence: plug in, watch temperature rise, load filament on green light!'
        }
      },
      {
        id: 'c3-l-2-4-projects-creative',
        chapterId: 'c3-ch-2-3d-pen',
        order: 4,
        title: 'Hands-on Projects: Name Initials & Shapes',
        subtitle: 'Activity-1: Name initials, RoboBox logo, and wireframe structures',
        summary: 'Use the 3D pen to draw your name initials standing upright in 3D, creating keychains, bookmarks, and structural frameworks.',
        keyPoints: [
          'Drawing on paper first creates a 2D guide stencil.',
          'Tracing over the stencil with filament bonds the plastic strands together.',
          'Peeling the cooled plastic off gives you a solid freestanding 3D object!',
          'Using a 3D pen develops fine motor skills, hand-eye coordination, and spatial thinking.'
        ],
        illustrationType: 'pen_initials',
        tryItAction: {
          label: 'Trace Name Initials',
          description: 'Draw your name in the virtual 3D pen canvas!'
        }
      }
    ],
    activities: [
      {
        id: 'c3-act-2-3d-pen-sandbox',
        chapterId: 'c3-ch-2-3d-pen',
        title: 'Virtual 3D Pen Drawing Sandbox',
        type: 'three_d_pen_sandbox',
        description: 'Choose your filament color, adjust extruder speed, preheat the nozzle, and draw 3D initials, shapes, and robot glasses in real-time!',
        materialsNeeded: ['3D Pen', 'PLA Plastic Filament (Red, Blue, Green, Yellow)', 'Power Adapter', 'Drawing Stencil Paper'],
        instructions: [
          'Turn on the virtual pen power and wait for the preheat light to turn green.',
          'Select your favorite filament color and extruder flow speed.',
          'Click and drag on the canvas to draw 3D wireframe letters, shapes, or models!'
        ],
        safetyAlert: 'The nozzle tip reaches 190°C! Never touch the metal tip during or right after use.',
        xpReward: 40
      }
    ],
    models: [
      {
        id: 'c3-mod-2-name-initials-stand',
        chapterId: 'c3-ch-2-3d-pen',
        title: '3D Name Initials Stand',
        subtitle: 'Freestanding 3D wireframe letter sculpture',
        description: 'Create freestanding 3D name initials with sturdy triangular stabilizing supports.',
        parts: [
          { name: 'PLA Filament Spool', count: 1, color: 'Multicolor' },
          { name: 'Tracing Template Sheet', count: 1, color: 'White' },
          { name: 'Heat-resistant Mat', count: 1, color: 'Grey' },
          { name: 'Safety Finger Protectors', count: 2, color: 'Blue' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Sketch your name initials on the template paper with thick outlines.' },
          { stepNumber: 2, instruction: 'Power on 3D pen and wait for the green indicator light (190°C).' },
          { stepNumber: 3, instruction: 'Trace the base outline of each letter twice to create a thick foundation.' },
          { stepNumber: 4, instruction: 'Fill in cross-hatch reinforcement strands across the letter body.' },
          { stepNumber: 5, instruction: 'Extrude two small triangular support feet at the base so the letters stand upright on your desk.' },
          { stepNumber: 6, instruction: 'Wait 30 seconds for plastic to harden completely before gently peeling off the template.' }
        ],
        xpReward: 50
      }
    ],
    quiz: [
      {
        id: 'c3-q-2-1',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'Which of the following is a 2D shape?',
        options: ['Box', 'Bottle', 'Circle', 'Toy car'],
        correctAnswer: 2,
        explanation: 'A circle is flat and has only length and width without thickness, making it a 2D shape.'
      },
      {
        id: 'c3-q-2-2',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'What does 2D stand for?',
        options: ['Two-Depth', 'Two-Dimensional', 'Three-Dimensional', 'Two-Direction'],
        correctAnswer: 1,
        explanation: '2D stands for Two-Dimensional (length and width).'
      },
      {
        id: 'c3-q-2-3',
        chapterId: 'c3-ch-2-3d-pen',
        question: '2D shapes have:',
        options: ['Length only', 'Length and width', 'Length, width, and height', 'Thickness'],
        correctAnswer: 1,
        explanation: '2D shapes possess only two dimensions: length and width.'
      },
      {
        id: 'c3-q-2-4',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'Which device shows 2D shapes on a screen?',
        options: ['Paper only', 'Book', 'Mobile phone', 'Wall'],
        correctAnswer: 2,
        explanation: 'A mobile phone or computer display presents flat 2D shapes and images.'
      },
      {
        id: 'c3-q-2-5',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'What does 3D stand for?',
        options: ['Three-Directional', 'Three-Depth', 'Three-Dimensional', 'Three-Drawing'],
        correctAnswer: 2,
        explanation: '3D stands for Three-Dimensional (length, width, and height/depth).'
      },
      {
        id: 'c3-q-2-6',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'Which object is an example of a 3D object?',
        options: ['Square', 'Triangle', 'Bottle', 'Circle'],
        correctAnswer: 2,
        explanation: 'A bottle has volume, height, depth, and can be held in your hands, making it 3D.'
      },
      {
        id: 'c3-q-2-7',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'A 3D pen is used to:',
        options: ['Write only on paper', 'Draw flat pictures', 'Draw three-dimensional objects', 'Cut plastic'],
        correctAnswer: 2,
        explanation: 'A 3D pen allows you to build solid 3D structures and objects in the air or on surfaces.'
      },
      {
        id: 'c3-q-2-8',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'What material is used in a 3D pen?',
        options: ['Ink', 'Plastic filament', 'Water', 'Rubber'],
        correctAnswer: 1,
        explanation: '3D pens use strands of plastic filament (such as PLA) that melt and harden.'
      },
      {
        id: 'c3-q-2-9',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'When the 3D pen reaches correct temperature, which light turns ON?',
        options: ['Blue', 'Yellow', 'Red', 'Green'],
        correctAnswer: 3,
        explanation: 'The red heating light turns solid green when the pen reaches operating temperature (190°C).'
      },
      {
        id: 'c3-q-2-10',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'Which button is used to feed the filament forward for drawing?',
        options: ['Speed button', 'Power button', 'Downward arrow', 'Upward arrow'],
        correctAnswer: 2,
        explanation: 'The downward arrow button feeds filament forward through the heated extruder nozzle.'
      }
    ],
    writtenQuestions: [
      {
        id: 'c3-sq-2-1',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'What are 2D shapes? Give two examples.',
        sampleAnswer: '2D shapes are flat shapes that have only length and width with no thickness. Examples: Circle, Square, Triangle.'
      },
      {
        id: 'c3-sq-2-2',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'What are 3D objects? Give two examples.',
        sampleAnswer: '3D objects are solid objects that have length, width, and height or depth. They can be held and seen from all sides. Examples: A bottle, a box, a toy car.'
      },
      {
        id: 'c3-sq-2-3',
        chapterId: 'c3-ch-2-3d-pen',
        question: 'What is a 3D pen?',
        sampleAnswer: 'A 3D pen is a special handheld tool that melts plastic filament so we can draw three-dimensional objects in the air or on surfaces.'
      }
    ],
    funFacts: [
      { id: 'c3-ff-2-1', text: 'A 3D pen can draw directly into the air by cooling plastic as it extrudes!', tag: 'Technology' },
      { id: 'c3-ff-2-2', text: 'The melted plastic hardens within 3 to 5 seconds of leaving the hot nozzle tip.', tag: 'Science' },
      { id: 'c3-ff-2-3', text: '3D pens work on the exact same extrusion concept as giant industrial 3D printers, but fit in your hand!', tag: 'Engineering' },
      { id: 'c3-ff-2-4', text: 'Artists and engineers use 3D pens to prototype custom eyeglasses, architectural models, and robot shells.', tag: 'Art' }
    ]
  },

  // ==================== CHAPTER 3: BATTERY CONTROL ====================
  {
    id: 'c3-ch-3-battery-control',
    classId: 'class-3',
    number: 3,
    title: 'Battery Control',
    tagline: 'Energy boxes, primary vs secondary cells, circuit power flow, safe recycling, and Aarti Set project',
    color: '#10B981',
    iconName: 'BatteryCharging',
    lessons: [
      {
        id: 'c3-l-3-1-battery-intro',
        chapterId: 'c3-ch-3-battery-control',
        order: 1,
        title: 'Introduction to Battery and Power',
        subtitle: 'The energy box that powers machines and robots anywhere',
        summary: 'A battery is an energy box that stores chemical energy and releases electrical energy to power motors, lights, and electronic circuits without needing wall sockets.',
        keyPoints: [
          'A battery supplies electrical energy so robots and gadgets can operate portably.',
          'It stores energy in a safe chemical form and releases it when switched ON.',
          'Everyday examples: Toy cars moving, robots rotating motors, flashlights producing bright light.',
          'Two core parts work together: the Battery supplies the power, and the Motor produces the movement.'
        ],
        illustrationType: 'battery_intro',
        tryItAction: {
          label: 'Power a Circuit',
          description: 'Connect a battery to a motor and flick the switch to see energy flow!'
        }
      },
      {
        id: 'c3-l-3-2-primary-vs-secondary',
        chapterId: 'c3-ch-3-battery-control',
        order: 2,
        title: 'Types of Batteries: Primary vs Secondary',
        subtitle: 'Single-use dry cells vs rechargeable lithium and NiMH packs',
        summary: 'Primary batteries are used once and disposed, while secondary batteries can be recharged hundreds of times for continuous power.',
        keyPoints: [
          'Primary Batteries (Non-Rechargeable): Used once until charge depletes. Common in TV remotes, wall clocks, and small toys (e.g. AA, AAA dry cells, button cells).',
          'Secondary Batteries (Rechargeable): Can be recharged and reused repeatedly. Common in smartphones, laptops, electric vehicles, and robotics kits (e.g. Lithium-Ion, NiMH).',
          'Rechargeable batteries save money and reduce electronic waste over time.'
        ],
        illustrationType: 'battery_types',
        tryItAction: {
          label: 'Sort Battery Types',
          description: 'Sort dry cells, button cells, phone batteries, and car batteries into Primary and Secondary categories!'
        }
      },
      {
        id: 'c3-l-3-3-energy-flow-recycling',
        chapterId: 'c3-ch-3-battery-control',
        order: 3,
        title: 'Circuit Flow, Battery Life & The 3Rs',
        subtitle: 'Chemical energy to electricity, proper disposal, and environmental protection',
        summary: 'Learn how energy travels through wires to rotate motors, and why old batteries must be recycled through the 3Rs (Reduce, Reuse, Recycle).',
        keyPoints: [
          'Energy Flow: Chemicals store energy ➔ Switch closes ➔ Electric current flows through wires ➔ Motor rotates robot wheels.',
          'Battery Life: The duration a battery can provide power before going weak.',
          'Safe Recycling: Never throw batteries in regular trash; dispose of them in dedicated e-waste bins to prevent chemical leaks.',
          'The 3Rs: Reduce (turn off idle switches), Reuse (use rechargeable batteries), Recycle (process used cells into new materials).'
        ],
        illustrationType: 'battery_recycling',
        tryItAction: {
          label: 'Follow 3R Protocol',
          description: 'Practice safe battery handling and drop exhausted cells into the green recycling bin!'
        }
      },
      {
        id: 'c3-l-3-4-hands-on-aarti-set',
        chapterId: 'c3-ch-3-battery-control',
        order: 4,
        title: 'Hands-on Project: The BLIX Aarti Set',
        subtitle: 'Motorized rotating platform powered by battery and gear train',
        summary: 'Build a ceremonial rotating Aarti platform using vertical BLIX beams, yellow reduction gears, motor, and battery pack.',
        keyPoints: [
          'The green base plate and vertical beams form a stable foundation.',
          'A horizontal middle platform acts as the Aarti stand.',
          'Two large yellow gears (G60) mesh with a central small gear to transmit rotation.',
          'The DC motor connects to the battery box via a switch, smoothly spinning the ceremonial lamp.'
        ],
        illustrationType: 'aarti_set',
        tryItAction: {
          label: 'Activate Aarti Set',
          description: 'Switch on the battery pack and watch the ceremonial platform rotate gracefully!'
        }
      }
    ],
    activities: [
      {
        id: 'c3-act-3-aarti-set-simulator',
        chapterId: 'c3-ch-3-battery-control',
        title: 'Aarti Set & Battery Circuit Simulator',
        type: 'aarti_set_simulator',
        description: 'Wire the battery box to the switch and DC motor, mesh the G20 and G60 gears, and power up the rotating Aarti platform!',
        materialsNeeded: ['3V Battery Box (2x AA)', 'DC Toy Motor', '2-Way Switch', 'G20 Gear', 'G60 Gear', 'Aarti Stand Beam'],
        instructions: [
          'Connect the red (+) and black (-) wires from the battery box to the switch terminals.',
          'Route the switch output to the DC motor terminals.',
          'Attach the G20 gear to the motor shaft and mesh it with the G60 platform gear.',
          'Turn on the switch to see the Aarti set rotate in smooth circular motion!'
        ],
        xpReward: 40
      }
    ],
    models: [
      {
        id: 'c3-mod-3-aarti-set',
        chapterId: 'c3-ch-3-battery-control',
        title: 'The BLIX Aarti Set',
        subtitle: 'Rotating motorized ceremonial platform',
        description: 'Complete step-by-step assembly of the official Blix Aarti Set with geared rotation drive.',
        parts: [
          { name: 'CH2 Connector', code: 'CH2', count: 6, color: 'Yellow' },
          { name: 'CT2 Connector', code: 'CT2', count: 9, color: 'Grey' },
          { name: 'P5 Beam', code: 'P5', count: 3, color: 'Blue' },
          { name: 'P11 Beam', code: 'P11', count: 2, color: 'Green' },
          { name: 'PU5X7 Plate', code: 'PU5X7', count: 1, color: 'Yellow' },
          { name: 'P7X11 Base Plate', code: 'P7X11', count: 2, color: 'Green' },
          { name: 'Motor with Battery Box', count: 1, color: 'Black' },
          { name: 'SH60 Shaft', code: 'SH60', count: 2, color: 'Silver' },
          { name: 'G20 Plus Gear', code: 'G20', count: 1, color: 'Blue' },
          { name: 'G60 Gear', code: 'G60', count: 2, color: 'Yellow' },
          { name: 'CQ Connector', code: 'CQ', count: 2, color: 'Red' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Build the Base: Fix the green base plate firmly using vertical BLIX beams to support the entire structure.' },
          { stepNumber: 2, instruction: 'Create the Vertical Frame: Attach vertical grey and orange beams on the base to form a rigid upright frame.' },
          { stepNumber: 3, instruction: 'Add the Platform: Fix a horizontal platform in the middle using blue and orange beams to act as the Aarti stand.' },
          { stepNumber: 4, instruction: 'Fix Gear Assembly: Attach two large yellow gears on both sides of the frame and mesh a small blue gear between them.' },
          { stepNumber: 5, instruction: 'Connect the Motor: Fix the motor at the bottom and align its shaft to the small drive gear.' },
          { stepNumber: 6, instruction: 'Attach the Aarti Holder: Fix a vertical rod above the gear system to hold the ceremonial plate.' },
          { stepNumber: 7, instruction: 'Power the Model: Connect motor wires to the battery pack and switch ON.' },
          { stepNumber: 8, instruction: 'Observe Motion: Watch the platform rotate gracefully in smooth circular motion!' }
        ],
        xpReward: 60
      },
      {
        id: 'c3-mod-3-giant-wheel',
        chapterId: 'c3-ch-3-battery-control',
        title: 'Activity-2: Giant Ferris Wheel',
        subtitle: 'Minimum 3 ft rotating amusement wheel',
        description: 'Construct a large motorized Ferris Wheel with counterbalanced rotating passenger cabins.',
        parts: [
          { name: 'Long Beams', count: 12, color: 'Blue' },
          { name: 'Diagonal Braces', count: 8, color: 'Orange' },
          { name: 'Central Hub Gear', count: 1, color: 'Yellow' },
          { name: 'High-torque Geared Motor', count: 1, color: 'Black' },
          { name: 'Passenger Cabins', count: 6, color: 'Red' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Build two triangular A-frame towers on a wide heavy base plate.' },
          { stepNumber: 2, instruction: 'Mount a central high-strength steel shaft across the A-frame bearings.' },
          { stepNumber: 3, instruction: 'Assemble 6 radial spoke arms extending from the center hub.' },
          { stepNumber: 4, instruction: 'Attach freely pivoting passenger cabins at the tip of each spoke arm.' },
          { stepNumber: 5, instruction: 'Connect motor with reduction gearbox to the central hub and test steady rotation.' }
        ],
        xpReward: 70
      }
    ],
    quiz: [
      {
        id: 'c3-q-3-1',
        chapterId: 'c3-ch-3-battery-control',
        question: 'Which two basic components are important before building a robot?',
        options: ['Wheel and fan', 'Battery and motor', 'Light and sound', 'Screen and keyboard'],
        correctAnswer: 1,
        explanation: 'The battery (for energy) and the motor (for movement) are the two fundamental components.'
      },
      {
        id: 'c3-q-3-2',
        chapterId: 'c3-ch-3-battery-control',
        question: 'What is a battery?',
        options: ['A toy', 'A motor', 'An energy box that gives power', 'A wire'],
        correctAnswer: 2,
        explanation: 'A battery is an energy storage unit that supplies electrical power to devices and robots.'
      },
      {
        id: 'c3-q-3-3',
        chapterId: 'c3-ch-3-battery-control',
        question: 'What type of energy does a battery give?',
        options: ['Heat energy', 'Sound energy', 'Electrical energy', 'Wind energy'],
        correctAnswer: 2,
        explanation: 'Batteries convert internal chemical energy into usable electrical energy.'
      },
      {
        id: 'c3-q-3-4',
        chapterId: 'c3-ch-3-battery-control',
        question: 'Why are batteries useful?',
        options: ['They are heavy', 'They allow devices to work anywhere', 'They break easily', 'They make noise'],
        correctAnswer: 1,
        explanation: 'Batteries make devices portable so they can operate freely without wall socket cords.'
      },
      {
        id: 'c3-q-3-5',
        chapterId: 'c3-ch-3-battery-control',
        question: 'Which device uses batteries to produce light?',
        options: ['Fan', 'Chair', 'Torch', 'Table'],
        correctAnswer: 2,
        explanation: 'A torch (flashlight) uses batteries to illuminate its bulb or LED.'
      },
      {
        id: 'c3-q-3-6',
        chapterId: 'c3-ch-3-battery-control',
        question: 'Which battery can be used only once?',
        options: ['Rechargeable battery', 'Secondary battery', 'Primary battery', 'Mobile battery'],
        correctAnswer: 2,
        explanation: 'Primary batteries are single-use cells that cannot be recharged once depleted.'
      },
      {
        id: 'c3-q-3-7',
        chapterId: 'c3-ch-3-battery-control',
        question: 'Which is an example of a primary battery?',
        options: ['Laptop battery', 'Dry cell (AA)', 'Mobile battery', 'Robot battery pack'],
        correctAnswer: 1,
        explanation: 'Standard AA dry cells used in clocks and remotes are single-use primary batteries.'
      },
      {
        id: 'c3-q-3-8',
        chapterId: 'c3-ch-3-battery-control',
        question: 'Which battery can be charged again and again?',
        options: ['Button cell', 'Primary battery', 'Dry cell', 'Secondary battery'],
        correctAnswer: 3,
        explanation: 'Secondary batteries are designed to be recharged and reused repeatedly.'
      },
      {
        id: 'c3-q-3-9',
        chapterId: 'c3-ch-3-battery-control',
        question: 'What happens when a battery is connected and switched ON?',
        options: ['It stops working', 'It becomes bigger', 'It releases energy', 'It changes color'],
        correctAnswer: 2,
        explanation: 'Switching ON a connected battery completes the circuit and starts releasing electrical energy.'
      },
      {
        id: 'c3-q-3-10',
        chapterId: 'c3-ch-3-battery-control',
        question: 'In robots, batteries help to:',
        options: ['Paint', 'Sleep', 'Rotate motors', 'Read books'],
        correctAnswer: 2,
        explanation: 'Batteries deliver electrical current to rotate motors and drive robot motion.'
      }
    ],
    writtenQuestions: [
      {
        id: 'c3-sq-3-1',
        chapterId: 'c3-ch-3-battery-control',
        question: 'What is a battery used for?',
        sampleAnswer: 'A battery is used to store chemical energy and supply electrical power so that machines, toys, and robots can move, light up, or make sounds anywhere without wall cords.'
      },
      {
        id: 'c3-sq-3-2',
        chapterId: 'c3-ch-3-battery-control',
        question: 'What are primary batteries? Give one example.',
        sampleAnswer: 'Primary batteries are non-rechargeable batteries that can be used only once. After the stored chemical charge is finished, they must be recycled. Example: AA or AAA dry cells, or watch button cells.'
      },
      {
        id: 'c3-sq-3-3',
        chapterId: 'c3-ch-3-battery-control',
        question: 'How does a battery help a robot move?',
        sampleAnswer: 'When switched ON, the battery releases stored energy as electric current flowing through wires into the motor. The motor spins, driving wheels or gears to move the robot forward, backward, or in turns.'
      }
    ],
    funFacts: [
      { id: 'c3-ff-3-1', text: 'The very first chemical battery was invented over 200 years ago in 1800 by Alessandro Volta!', tag: 'History' },
      { id: 'c3-ff-3-2', text: 'Modern electric cars work using thousands of rechargeable lithium-ion battery cells joined together.', tag: 'Automotive' },
      { id: 'c3-ff-3-3', text: 'Many electronic toys that seem "broken" only need their weak batteries replaced or recharged!', tag: 'Tip' },
      { id: 'c3-ff-3-4', text: 'Recycling one battery keeps hazardous metals out of soil and water while recovering valuable zinc and nickel.', tag: 'Eco' }
    ]
  },

  // ==================== CHAPTER 4: BUILDING MECHANICS - I (ARTI SET / WAVING BOT) ====================
  {
    id: 'c3-ch-4-building-mechanics-1',
    classId: 'class-3',
    number: 4,
    title: 'Building Mechanics - I (Waving Bot)',
    tagline: 'Base plates, beams, stability, balance, center of gravity, and Waving Bot assembly',
    color: '#F59E0B',
    iconName: 'Wrench',
    lessons: [
      {
        id: 'c3-l-4-1-building-mechanics-intro',
        chapterId: 'c3-ch-4-building-mechanics-1',
        order: 1,
        title: 'Introduction to Building Mechanics',
        subtitle: 'Joining parts to create strong, stable, and rigid structures',
        summary: 'Building mechanics is the study of joining structural parts (frames, beams, connectors, axles) so that machines, bridges, and robots stay upright and carry loads without breaking.',
        keyPoints: [
          'Good building mechanics ensures a robot stays balanced, moves smoothly, and resists bending.',
          'Basic Structural Parts: Base Plate (foundation), Beams (limbs and body), Connectors (rigid or pivoting joints).',
          'Mechanical Parts: Motor (provides motion), Gears (control speed and torque), Axles & Shafts (support rotation).',
          'Electrical Parts: Battery (supplies power), Switch (toggles power ON and OFF).'
        ],
        illustrationType: 'structural_parts',
        tryItAction: {
          label: 'Test Structure Rigidity',
          description: 'Add diagonal bracing and connectors to stop a wobbly frame from bending!'
        }
      },
      {
        id: 'c3-l-4-2-stability-and-balance',
        chapterId: 'c3-ch-4-building-mechanics-1',
        order: 2,
        title: 'Stability, Balance & Low Center of Gravity',
        subtitle: 'Preventing tilting, wobbling, and falls in humanoid robots',
        summary: 'A stable robot has a wide base and low center of gravity. Balancing weight equally on both sides ensures arms and legs move smoothly without tipping over.',
        keyPoints: [
          'Stability: Ability of a model to stand firmly without falling over. A wider base increases stability.',
          'Balance: Equal weight distribution across both sides of the robot.',
          'Low Center of Gravity: Mounting heavy parts (battery box and motor) near the bottom keeps the robot grounded.',
          'Symmetrical Arm Movement: If one side is heavier, the robot tilts and falls during arm waving.'
        ],
        illustrationType: 'balance_center_gravity',
        tryItAction: {
          label: 'Adjust Center of Gravity',
          description: 'Move the battery pack from top to bottom and observe how stability improves!'
        }
      },
      {
        id: 'c3-l-4-3-gear-teeth-and-power',
        chapterId: 'c3-ch-4-building-mechanics-1',
        order: 3,
        title: 'Gear Teeth, Meshing, Speed & Torque',
        subtitle: 'Interlocking teeth, small gear (speed) vs big gear (power)',
        summary: 'Gears have interlocking teeth. When a motor turns a small gear meshed with a big gear, speed decreases while lifting power (torque) increases.',
        keyPoints: [
          'Gears have small teeth that mesh tightly together without slipping.',
          'When one gear turns, the connected meshed gear turns in the opposite direction.',
          'Small Gear: Has fewer teeth, spins fast, provides speed.',
          'Big Gear: Has more teeth, spins slowly, provides high torque and lifting power.',
          'Gears are essential inside bicycles, wall clocks, wristwatches, mixers, and robot arms.'
        ],
        illustrationType: 'gears_speed_power',
        tryItAction: {
          label: 'Mesh Big & Small Gears',
          description: 'Turn a small blue gear and count how many turns it takes for the big yellow gear to rotate once!'
        }
      },
      {
        id: 'c3-l-4-4-hands-on-waving-bot',
        chapterId: 'c3-ch-4-building-mechanics-1',
        order: 4,
        title: 'Hands-on Project: The Waving Bot',
        subtitle: 'Building a balanced robot with dual waving arms and gear eyes',
        summary: 'Construct the Waving Bot using base plate legs, motor, reduction gear train, symmetrical waving arms, and gear eyes.',
        keyPoints: [
          'Step 1: Fix base plate vertically and attach long beam legs for a solid stance.',
          'Step 2: Mount battery box at the lower part for a low center of gravity.',
          'Step 3: Secure DC motor in the center above the battery holder.',
          'Step 4: Attach small blue gear on motor shaft and mesh it with big yellow gear.',
          'Step 5: Attach long beams to big gear to form waving arms; add small gears for eyes.',
          'Step 6: Switch ON: Big gear rotates slowly, waving arms up and down in friendly greetings!'
        ],
        illustrationType: 'waving_bot',
        tryItAction: {
          label: 'Test Waving Bot',
          description: 'Turn the power switch and watch the balanced bot wave its mechanical arms!'
        }
      }
    ],
    activities: [
      {
        id: 'c3-act-4-balance-bot-simulator',
        chapterId: 'c3-ch-4-building-mechanics-1',
        title: 'Balance Bot & Marble Run Challenge',
        type: 'balance_bot_simulator',
        description: 'Balance the weights on the Waving Bot, adjust its center of gravity, and construct a multi-tier cardboard marble run track!',
        materialsNeeded: ['Waving Bot frame', 'Balance counterweights', 'Cardboard strips', 'Plastic cups', 'Glass marbles', 'Double-sided tape'],
        instructions: [
          'Place weights equally on both robot arms to level the balance meter.',
          'Slide the battery pack down to the lowest position to maximize balance stability.',
          'Arrange the U-shaped cardboard tracks to build a continuous rolling path for the marble!'
        ],
        xpReward: 40
      }
    ],
    models: [
      {
        id: 'c3-mod-4-waving-bot',
        chapterId: 'c3-ch-4-building-mechanics-1',
        title: 'The Waving Bot Model',
        subtitle: 'Balanced humanoid robot with gear-driven waving arms',
        description: 'Construct the official Blix Waving Bot with low center of gravity, geared arm linkage, and decorative gear eyes.',
        parts: [
          { name: 'P7 Beam', code: 'P7', count: 4, color: 'Blue' },
          { name: 'P7X11 Plate', code: 'P7X11', count: 1, color: 'Green' },
          { name: 'CT2 Connector', code: 'CT2', count: 8, color: 'Grey' },
          { name: 'CL2 Loose Connector', code: 'CL2', count: 7, color: 'White' },
          { name: 'P5 Beam', code: 'P5', count: 5, color: 'Yellow' },
          { name: 'PU5X7 Plate', code: 'PU5X7', count: 1, color: 'Orange' },
          { name: 'P11 Beam', code: 'P11', count: 2, color: 'Green' },
          { name: 'TW1 Wheel Spacer', code: 'TW1', count: 3, color: 'Black' },
          { name: 'SH60 Shaft', code: 'SH60', count: 2, color: 'Silver' },
          { name: 'G20 Plus Gear', code: 'G20', count: 1, color: 'Blue' },
          { name: 'G20 Idler Gear', code: 'G20-Idler', count: 1, color: 'Blue' },
          { name: 'G60 Gear', code: 'G60', count: 2, color: 'Yellow' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Assemble the vertical torso frame using P7 beams and CT2 connectors.' },
          { stepNumber: 2, instruction: 'Lock the bottom foundation using P7X11 plate to establish a broad support base.' },
          { stepNumber: 3, instruction: 'Mount the battery box low on the frame to achieve a low center of gravity.' },
          { stepNumber: 4, instruction: 'Insert SH60 axle and mount G20 drive gear meshed with dual G60 reduction gears.' },
          { stepNumber: 5, instruction: 'Attach symmetrical P5 beam arms to the G60 output gears on both sides.' },
          { stepNumber: 6, instruction: 'Add two small blue gears on top as decorative robotic eyes.' },
          { stepNumber: 7, instruction: 'Connect motor wires to battery box and switch ON to verify smooth arm waving.' }
        ],
        xpReward: 60
      },
      {
        id: 'c3-mod-4-cardboard-marble-run',
        chapterId: 'c3-ch-4-building-mechanics-1',
        title: 'Activity-3: Cardboard Marble Run',
        subtitle: 'Gravity-fed continuous marble track',
        description: 'Build a wall-mounted marble run using U-shaped cardboard tracks, cups, and tape.',
        parts: [
          { name: 'Colorful Cardboard Sheets', count: 5, color: 'Multicolor' },
          { name: 'Plastic Paper Cups', count: 4, color: 'White' },
          { name: 'Glass Marbles', count: 3, color: 'Clear' },
          { name: 'Double-sided Tape', count: 1, color: 'White' },
          { name: 'Scissors', count: 1, color: 'Red' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Fold strips of cardboard into U-shaped channels with raised sidewalls.' },
          { stepNumber: 2, instruction: 'Attach the first chute near the top of the board with a slight downward angle.' },
          { stepNumber: 3, instruction: 'Position the second chute sloping in the opposite direction directly underneath.' },
          { stepNumber: 4, instruction: 'Cut catch cups with bottom release slots to redirect marbles to lower ramps.' },
          { stepNumber: 5, instruction: 'Drop a marble at the top and adjust slope angles until the marble rolls smoothly to the finish cup!' }
        ],
        xpReward: 50
      }
    ],
    quiz: [
      {
        id: 'c3-q-4-1',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'Gears have small _____ that fit together.',
        options: ['Wires', 'Teeth', 'Lights', 'Buttons'],
        correctAnswer: 1,
        explanation: 'Gears feature interlocking teeth that mesh together to transfer motion and power.'
      },
      {
        id: 'c3-q-4-2',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'What is Building Mechanics?',
        options: ['Study of colors', 'Storing energy', 'Transferring motion and power by joining parts', 'Making sound'],
        correctAnswer: 2,
        explanation: 'Building mechanics studies how structural parts are joined together to transfer motion, support weight, and maintain stability.'
      },
      {
        id: 'c3-q-4-3',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'When one gear turns, what happens to the connected meshed gear?',
        options: ['It stops', 'It also turns', 'It breaks', 'It changes color'],
        correctAnswer: 1,
        explanation: 'Because their teeth mesh together, when one gear turns, the connected gear turns as well (in the opposite direction).'
      },
      {
        id: 'c3-q-4-4',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'In robotics, gears help control:',
        options: ['Shape and size', 'Color and light', 'Speed, direction, and force', 'Sound and heat'],
        correctAnswer: 2,
        explanation: 'Gears allow roboticists to control speed, rotational direction, and mechanical force (torque).'
      },
      {
        id: 'c3-q-4-5',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'Which machine uses gears to move fast or slow?',
        options: ['Book', 'Bicycle', 'Pencil', 'Table'],
        correctAnswer: 1,
        explanation: 'Bicycles use multiple gears to allow cyclists to pedal easily uphill or travel fast on flat roads.'
      },
      {
        id: 'c3-q-4-6',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'A big gear has:',
        options: ['Fewer teeth', 'More teeth', 'No teeth', 'Sharp edges only'],
        correctAnswer: 1,
        explanation: 'A big gear has a larger circumference and more teeth than a small gear.'
      },
      {
        id: 'c3-q-4-7',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'Compared to a small gear, a big gear rotates:',
        options: ['Faster', 'Slower', 'Randomly', 'Not at all'],
        correctAnswer: 1,
        explanation: 'Due to having more teeth, a big gear rotates slower than a smaller driving gear.'
      },
      {
        id: 'c3-q-4-8',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'A small gear is mainly used for achieving:',
        options: ['More power', 'More strength', 'More speed', 'More weight'],
        correctAnswer: 2,
        explanation: 'Small gears rotate rapidly, making them ideal when high rotational speed is desired.'
      },
      {
        id: 'c3-q-4-9',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'When a small gear moves a big gear, the movement becomes:',
        options: ['Faster with less power', 'Faster with more power', 'Slower with more power', 'Slower with less power'],
        correctAnswer: 2,
        explanation: 'Small driving gear into big gear produces speed reduction with higher torque (slower with more power).'
      },
      {
        id: 'c3-q-4-10',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'Which of these uses gears?',
        options: ['Wall clock', 'Notebook', 'Water bottle', 'Eraser'],
        correctAnswer: 0,
        explanation: 'A wall clock relies on precision gear trains to rotate the hour, minute, and second hands accurately.'
      }
    ],
    writtenQuestions: [
      {
        id: 'c3-sq-4-1',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'What are gears?',
        sampleAnswer: 'Gears are toothed wheels that mesh with each other to transfer movement, speed, and power between rotating shafts.'
      },
      {
        id: 'c3-sq-4-2',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'Why are gears important in machines and robots?',
        sampleAnswer: 'Gears help control the speed, direction, and strength of robot motion. They allow robots to lift heavy objects slowly with high power or move lightweight tools quickly.'
      },
      {
        id: 'c3-sq-4-3',
        chapterId: 'c3-ch-4-building-mechanics-1',
        question: 'How do big and small gears work together?',
        sampleAnswer: 'When a small gear drives a big gear, the output turns slower but with much more power. When a big gear drives a small gear, the output turns much faster with less power.'
      }
    ],
    funFacts: [
      { id: 'c3-ff-4-1', text: 'Wall clocks keep precise time using dozens of interlocking brass gears turning at exact speeds.', tag: 'Horology' },
      { id: 'c3-ff-4-2', text: 'Bicycle gears make pedaling up steep hills effortless by trading speed for pushing power.', tag: 'Sports' },
      { id: 'c3-ff-4-3', text: 'Keeping heavy battery packs at the very bottom of a robot prevents it from falling over during fast turns.', tag: 'Physics' },
      { id: 'c3-ff-4-4', text: 'Connectors in robotics kits act just like ligaments and joints in the human skeleton!', tag: 'Biomechanics' }
    ]
  },

  // ==================== CHAPTER 5: BUILDING MECHANICS - II (CRAWLERS) ====================
  {
    id: 'c3-ch-5-building-mechanics-2',
    classId: 'class-3',
    number: 5,
    title: 'Building Mechanics - II (Crawlers)',
    tagline: 'Continuous tracks, all-terrain mobility, DC motors, gearbox assembly, and Word Hunt activity',
    color: '#059669',
    iconName: 'Truck',
    lessons: [
      {
        id: 'c3-l-5-1-crawler-intro',
        chapterId: 'c3-ch-5-building-mechanics-2',
        order: 1,
        title: 'Introduction to Crawler Robots',
        subtitle: 'Tackling sand, mud, rocks, and rough obstacles with continuous tracks',
        summary: 'Crawler robots use wide tracks or multi-wheel frames instead of standard round wheels. This spreads weight across a large area so they never get stuck in sand, mud, or rocky terrain.',
        keyPoints: [
          'Crawlers move easily over rough, steep, or uneven surfaces where standard wheeled cars would get stuck.',
          'They travel steadily and have high traction and stability.',
          'Real-world crawlers: Military tanks, construction bulldozers, Mars rovers (Curiosity, Perseverance), and rescue bots.',
          'Key crawler components: Chassis frame, tracks/wheels, motorized gearbox, and battery pack.'
        ],
        illustrationType: 'crawler_intro',
        tryItAction: {
          label: 'Test Terrain Types',
          description: 'Drive a crawler over smooth road, muddy soil, and rocky slopes to see how tracks maintain grip!'
        }
      },
      {
        id: 'c3-l-5-2-motors-in-robotics',
        chapterId: 'c3-ch-5-building-mechanics-2',
        order: 2,
        title: 'Role of Motors in Robotics',
        subtitle: 'Converting electrical energy from batteries into mechanical motion',
        summary: 'A motor is the powerhouse of a robot. It takes electrical current from the battery and transforms it into rotating shaft movement to drive wheels, tracks, and limbs.',
        keyPoints: [
          'A motor converts electrical energy into mechanical energy.',
          'Everyday example: Ceiling fan spinning to provide breeze when switched ON.',
          'In robots, motors rotate wheels, swing arms, spin grippers, and navigate obstacles.',
          'Motors can rotate clockwise (forward) or counter-clockwise (backward) by reversing electrical polarity.'
        ],
        illustrationType: 'motor_working',
        tryItAction: {
          label: 'Reverse Motor Polarity',
          description: 'Flip the 2-way switch to reverse electrical flow and watch the motor spin backwards!'
        }
      },
      {
        id: 'c3-l-5-3-crawler-models-assembly',
        chapterId: 'c3-ch-5-building-mechanics-2',
        order: 3,
        title: 'Crawler Assembly: Single vs Double Track',
        subtitle: 'Model 1 (Single Motor) and Model 2 (Dual G60 Track Drive)',
        summary: 'Explore the 6 official assembly steps for both single-motor crawler tanks and heavy-duty double-track crawlers equipped with rubber belts.',
        keyPoints: [
          'Model 1: Features a rigid rectangular chassis, center motorized gearbox, and 4 walking legs or track wheels.',
          'Model 2: Features heavy-duty G60 gear drive with continuous rubber band tracks for maximum obstacle climbing.',
          'A 2-way directional switch mounted on top allows instant forward and backward driver control.'
        ],
        illustrationType: 'crawler_assembly',
        tryItAction: {
          label: 'Assemble Crawler Tracks',
          description: 'Fit the rubber tracks over the drive gears and test traction!'
        }
      },
      {
        id: 'c3-l-5-4-robotics-word-hunt',
        chapterId: 'c3-ch-5-building-mechanics-2',
        order: 4,
        title: 'Activity-4: Robotics Word Hunt',
        subtitle: 'Finding 12 key mechanical vocabulary words',
        summary: 'Reinforce robotics terminology by locating all 12 textbook keywords hidden in the interactive word puzzle grid.',
        keyPoints: [
          '12 Key Words: PULLEY, MOTION, SPIN, AXLE, LINEAR, WHEEL, CIRCULAR, LEVER, BATTERY, CRAWLER, BALANCE, GEAR.',
          'Connecting terminology with physical parts deepens conceptual understanding.',
          'Every term corresponds to an active component in our robotics lab.'
        ],
        illustrationType: 'word_hunt',
        tryItAction: {
          label: 'Open Word Hunt',
          description: 'Find and highlight mechanical words in the letter grid!'
        }
      }
    ],
    activities: [
      {
        id: 'c3-act-5-crawler-simulator',
        chapterId: 'c3-ch-5-building-mechanics-2',
        title: 'All-Terrain Crawler Simulator & Word Hunt',
        type: 'crawler_simulator',
        description: 'Drive the Blix crawler robot across rough terrain obstacles (sand, mud, rocks) and complete the official 12-word robotics puzzle!',
        materialsNeeded: ['Crawler chassis', 'Dual track belts', '2-way switch', '3V battery box', 'Obstacle course ramp'],
        instructions: [
          'Toggle switch to DRIVE forward and backward across rocky obstacles.',
          'Observe how the crawler tracks maintain grip where normal tires slip.',
          'Locate all 12 robotics terms in the interactive word search puzzle!'
        ],
        xpReward: 40
      }
    ],
    models: [
      {
        id: 'c3-mod-5-crawler-1',
        chapterId: 'c3-ch-5-building-mechanics-2',
        title: 'BLIX Crawler Model 1',
        subtitle: 'Single-motor all-terrain walking crawler',
        description: 'Construct the official Blix Model-1 crawler robot with central motorized gearbox and moving legs.',
        parts: [
          { name: 'CT2 Connector', code: 'CT2', count: 5, color: 'Grey' },
          { name: 'PU5X13 Plate', code: 'PU5X13', count: 2, color: 'Yellow' },
          { name: 'Motor with 3V Box', count: 1, color: 'Black' },
          { name: 'P5 Beam', code: 'P5', count: 8, color: 'Blue' },
          { name: 'SH60 Shaft', code: 'SH60', count: 2, color: 'Silver' },
          { name: 'G60 Gear', code: 'G60', count: 4, color: 'Yellow' },
          { name: 'G20 Plus Gear', code: 'G20', count: 1, color: 'Blue' },
          { name: 'CL2 Loose Connector', code: 'CL2', count: 14, color: 'White' },
          { name: 'CH2 Hinge', code: 'CH2', count: 3, color: 'Yellow' },
          { name: 'PC3 Connector', code: 'PC3', count: 2, color: 'Red' },
          { name: 'P11 Beam', code: 'P11', count: 4, color: 'Green' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Prepare the Base Frame: Connect blue and orange BLIX beams to form a strong rectangular chassis.' },
          { stepNumber: 2, instruction: 'Attach Vertical Supports: Fix vertical grey beams on both sides of the base to support the motor.' },
          { stepNumber: 3, instruction: 'Fix Motorized Gearbox: Mount motorized gearbox at center and align motor shaft to drive gears.' },
          { stepNumber: 4, instruction: 'Assemble Gear System: Attach large yellow gears (G60) on both sides ensuring smooth mesh.' },
          { stepNumber: 5, instruction: 'Build Moving Legs: Use long orange beams to create four walking legs connected to the rotating gears.' },
          { stepNumber: 6, instruction: 'Attach Switch and Battery: Fix battery pack on top and wire the 2-way switch for forward and reverse motion.' }
        ],
        xpReward: 60
      },
      {
        id: 'c3-mod-5-crawler-2',
        chapterId: 'c3-ch-5-building-mechanics-2',
        title: 'BLIX Crawler Model 2',
        subtitle: 'Heavy-duty track crawler with rubber bands',
        description: 'Construct the heavy-duty double-track crawler featuring continuous rubber band tracks and G60 reduction gears.',
        parts: [
          { name: 'CT2 Connector', code: 'CT2', count: 6, color: 'Grey' },
          { name: 'P5 Beam', code: 'P5', count: 7, color: 'Blue' },
          { name: 'Motor with 3V Box', count: 1, color: 'Black' },
          { name: 'PU5X13 Plate', code: 'PU5X13', count: 2, color: 'Yellow' },
          { name: 'TW1 Spacer', code: 'TW1', count: 3, color: 'Black' },
          { name: 'G20 Plus Gear', code: 'G20', count: 2, color: 'Blue' },
          { name: 'G60 Gear', code: 'G60', count: 3, color: 'Yellow' },
          { name: 'SH60 Shaft', code: 'SH60', count: 3, color: 'Silver' },
          { name: 'Rubber Band Tracks', count: 2, color: 'Black' },
          { name: 'P11 Beam', code: 'P11', count: 2, color: 'Green' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Build dual parallel chassis rails using PU5X13 plates and P5 crossbeams.' },
          { stepNumber: 2, instruction: 'Mount motor and G20 plus drive gears at center.' },
          { stepNumber: 3, instruction: 'Install front and rear SH60 axles with G60 guide wheels.' },
          { stepNumber: 4, instruction: 'Stretch elastic rubber band tracks over the front and rear wheel pulleys.' },
          { stepNumber: 5, instruction: 'Mount battery box and 2-way directional switch.' },
          { stepNumber: 6, instruction: 'Power on and test high-traction climbing over uneven obstacle blocks.' }
        ],
        xpReward: 70
      }
    ],
    quiz: [
      {
        id: 'c3-q-5-1',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'Building mechanics helps us understand:',
        options: ['Colors and shapes', 'How parts work together', 'How to draw', 'How to sing'],
        correctAnswer: 1,
        explanation: 'Building mechanics explains how physical parts collaborate to make machines move and stand strong.'
      },
      {
        id: 'c3-q-5-2',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'In a crawler, which parts help it move smoothly?',
        options: ['Paper and pencil', 'Wheels/tracks, gears, motor, frame', 'Books and bags', 'Lights and sounds'],
        correctAnswer: 1,
        explanation: 'A crawler moves smoothly via its coordinated frame, motor, gear train, and continuous wheels/tracks.'
      },
      {
        id: 'c3-q-5-3',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'Crawlers can move easily on rough surfaces because they are:',
        options: ['Light', 'Strong and stable', 'Weak', 'Small'],
        correctAnswer: 1,
        explanation: 'Their broad tracks and sturdy structure make crawlers exceptionally strong and stable on rough surfaces.'
      },
      {
        id: 'c3-q-5-4',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'Which part gives movement to the crawler?',
        options: ['Battery', 'Motor', 'Frame', 'Switch'],
        correctAnswer: 1,
        explanation: 'The motor converts electrical energy into mechanical movement to drive the crawler.'
      },
      {
        id: 'c3-q-5-5',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'What does the battery do in a crawler?',
        options: ['Gives color', 'Gives power', 'Stores wheels', 'Makes sound'],
        correctAnswer: 1,
        explanation: 'The battery supplies electrical power to energize the motor.'
      },
      {
        id: 'c3-q-5-6',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'When the battery is connected and switched ON, what flows to the motor?',
        options: ['Water', 'Electricity', 'Air', 'Heat'],
        correctAnswer: 1,
        explanation: 'Electric current flows through wires from the battery to the motor.'
      },
      {
        id: 'c3-q-5-7',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'A motor converts electrical energy into:',
        options: ['Sound energy', 'Mechanical energy', 'Light energy', 'Heat energy'],
        correctAnswer: 1,
        explanation: 'Motors convert electrical energy into mechanical rotary motion.'
      },
      {
        id: 'c3-q-5-8',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'Which example shows the use of a motor in daily life?',
        options: ['Book', 'Chair', 'Electric fan', 'Bottle'],
        correctAnswer: 2,
        explanation: 'An electric fan uses a motor to rotate blades and blow air.'
      },
      {
        id: 'c3-q-5-9',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'Motors help robots to:',
        options: ['Sleep', 'Change color', 'Move and act', 'Break'],
        correctAnswer: 2,
        explanation: 'Motors provide robots with movement and physical actuation.'
      },
      {
        id: 'c3-q-5-10',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'Which of the following is NOT a role of a motor?',
        options: ['Helps wheels rotate', 'Makes robots move', 'Controls speed', 'Stores electricity'],
        correctAnswer: 3,
        explanation: 'Storing electricity is the job of a battery, not a motor.'
      }
    ],
    writtenQuestions: [
      {
        id: 'c3-sq-5-1',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'What is a crawler robot?',
        sampleAnswer: 'A crawler is a sturdy robot that moves using continuous tracks or multi-wheel legs. Its wide contact area allows it to travel across rough surfaces like sand, mud, and rocks without sinking or slipping.'
      },
      {
        id: 'c3-sq-5-2',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'How do motor and battery work together in a crawler?',
        sampleAnswer: 'The battery stores chemical energy and releases electricity through wires. The motor receives this electrical energy and converts it into mechanical rotation to drive the crawler tracks.'
      },
      {
        id: 'c3-sq-5-3',
        chapterId: 'c3-ch-5-building-mechanics-2',
        question: 'Why are motors important in robotics?',
        sampleAnswer: 'Motors are essential because they give robots the ability to move, steer wheels, lift robotic arms, and interact physically with their surroundings.'
      }
    ],
    funFacts: [
      { id: 'c3-ff-5-1', text: 'Space exploration rovers on the Moon and Mars use crawler tracks and rocker-bogie wheels to navigate boulder fields.', tag: 'Space' },
      { id: 'c3-ff-5-2', text: 'Heavy military tanks and snowmobiles use crawler tracks because continuous belts distribute weight so evenly they can drive across deep snow!', tag: 'Engineering' },
      { id: 'c3-ff-5-3', text: 'Crawlers travel slowly compared to race cars, but possess immense pushing and climbing power.', tag: 'Robotics' },
      { id: 'c3-ff-5-4', text: 'Reversing battery wire connections flips the motor polarity and immediately makes the crawler drive in reverse.', tag: 'Circuits' }
    ]
  },

  // ==================== CHAPTER 6: BUILDING STRUCTURES (GEARS) ====================
  {
    id: 'c3-ch-6-building-structures',
    classId: 'class-3',
    number: 6,
    title: 'Building Structures (Gears)',
    tagline: 'Speed control, torque multipliers, rotational direction, Idler Gears, and Compound Gearboxes',
    color: '#D97706',
    iconName: 'Cpu',
    lessons: [
      {
        id: 'c3-l-6-1-advanced-gears-intro',
        chapterId: 'c3-ch-6-building-structures',
        order: 1,
        title: 'Introduction to Advanced Gear Mechanics',
        subtitle: 'Controlling speed, torque, and direction in robotic structures',
        summary: 'Gears transfer rotational power between shafts. By changing gear sizes and arrangements, engineers can multiply torque to lift tons or speed up mechanisms tenfold.',
        keyPoints: [
          'Four Core Functions of Gears: Control Speed, Increase Power (Torque), Change Direction, and Drive Robotic Movement.',
          'Big Gear (Yellow, G60): More teeth, rotates slower, delivers tremendous power to lift heavy loads.',
          'Small Gear (Blue, G20): Fewer teeth, rotates faster, provides high speed with less torque.',
          'When Small drives Big: Output is slower with high torque. When Big drives Small: Output is super fast!'
        ],
        illustrationType: 'gear_functions',
        tryItAction: {
          label: 'Test Speed vs Power',
          description: 'Toggle between Speed mode (Big drives Small) and Torque mode (Small drives Big) to lift weights!'
        }
      },
      {
        id: 'c3-l-6-2-gear-motion-types',
        chapterId: 'c3-ch-6-building-structures',
        order: 2,
        title: 'Directions of Gear Rotation',
        subtitle: 'Opposite direction (direct mesh) vs Same direction (belt/chain)',
        summary: 'When two gear teeth touch, they turn in opposite directions. To make them turn in the same direction, engineers use an intermediate Idler Gear or a belt.',
        keyPoints: [
          'Opposite Direction: Two directly meshed gears always rotate in opposite directions (clockwise vs counter-clockwise).',
          'Same Direction: Connecting gears with an idler gear or a pulley belt preserves the original rotational direction.',
          'This principle is fundamental in clock mechanisms, automotive differentials, and robotic arm joints.'
        ],
        illustrationType: 'gear_rotation_directions',
        tryItAction: {
          label: 'Compare Meshing Types',
          description: 'Watch two meshed gears turn oppositely, then insert an idler to make both spin clockwise!'
        }
      },
      {
        id: 'c3-l-6-3-experiment-6-idler-gear',
        chapterId: 'c3-ch-6-building-structures',
        order: 3,
        title: 'Experiment 6: The Idler Gear Trick',
        subtitle: 'Preserving direction without altering the overall speed ratio',
        summary: 'Placing an idler gear between driver and driven gears restores the original rotation direction without changing the overall gear ratio.',
        keyPoints: [
          'Driver Gear: Connected to the motor (e.g. G20).',
          'Idler Gear: The middle gear that meshes with both driver and driven (e.g. G20 Idler).',
          'Driven Gear: The final output gear (e.g. G60).',
          'Key Observation: The idler gear reverses direction back to matching the driver, but its size has zero effect on the final speed or power ratio!'
        ],
        illustrationType: 'idler_gear_exp',
        tryItAction: {
          label: 'Run Experiment 6',
          description: 'Insert and remove the middle idler gear to see rotation direction flip instantly!'
        }
      },
      {
        id: 'c3-l-6-4-experiment-8-compound-gearbox',
        chapterId: 'c3-ch-6-building-structures',
        order: 4,
        title: 'Experiment 8: Compound Gearbox (Speed Multiplier)',
        subtitle: 'Compounding gears on common shafts for massive speed amplification',
        summary: 'A compound gearbox mounts two gears of different sizes on the same axle, multiplying ratios sequentially to achieve extreme speed or power.',
        keyPoints: [
          'In a compound gear train, two gears share the exact same rotating axle.',
          'Stage 1: Motor drives first gear pair (e.g. 3:1 ratio).',
          'Stage 2: Second gear pair multiplies again (3 × 3 = 9:1 ratio!).',
          'Compound gearboxes allow massive speed multiplication or torque reduction inside a tiny physical footprint.'
        ],
        illustrationType: 'compound_gearbox_exp',
        tryItAction: {
          label: 'Build 2-Stage Multiplier',
          description: 'Stack two gears on one shaft to witness exponential speed multiplication!'
        }
      }
    ],
    activities: [
      {
        id: 'c3-act-6-gear-train-simulator',
        chapterId: 'c3-ch-6-building-structures',
        title: 'Gear Train Simulator (Idler & Compound)',
        type: 'gear_train_simulator',
        description: 'Drag and mesh driver, idler, and compound gears to measure RPM, calculate gear ratios, and solve Experiments 6 and 8!',
        materialsNeeded: ['Motor driver gear (G20)', 'Idler gear', 'Output gear (G60)', 'Compound axle with G20/G60 pair', 'RPM Tachometer'],
        instructions: [
          'Set up driver and driven gears to observe opposite rotation.',
          'Insert an idler gear to synchronize driver and output rotation directions.',
          'Build a 2-stage compound gearbox to achieve a 9x speed multiplication!'
        ],
        xpReward: 40
      }
    ],
    models: [
      {
        id: 'c3-mod-6-experiment-6-model',
        chapterId: 'c3-ch-6-building-structures',
        title: 'Experiment 6: Idler Gear Rig',
        subtitle: 'Direction-correcting 3-gear train',
        description: 'Build the official textbook Experiment 6 model testing idler gear mechanics and direction correction.',
        parts: [
          { name: 'P7X11 Plate', code: 'P7X11', count: 1, color: 'Green' },
          { name: 'TW1 Spacer', code: 'TW1', count: 3, color: 'Black' },
          { name: 'CT3 Connector', code: 'CT3', count: 3, color: 'Orange' },
          { name: 'SH60 Shaft', code: 'SH60', count: 2, color: 'Silver' },
          { name: 'Motor with Battery Box', count: 1, color: 'Black' },
          { name: 'CT2 Connector', code: 'CT2', count: 2, color: 'Grey' },
          { name: 'G20 Gear', code: 'G20', count: 1, color: 'Blue' },
          { name: 'G20 Idler Gear', code: 'G20-Idler', count: 1, color: 'Blue' },
          { name: 'G60 Gear', code: 'G60', count: 2, color: 'Yellow' },
          { name: 'Wheels', count: 2, color: 'Black' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Mount motor with G20 drive gear onto the P7X11 base plate.' },
          { stepNumber: 2, instruction: 'Fix intermediate axle using CT3 connectors and mount the G20 idler gear.' },
          { stepNumber: 3, instruction: 'Mount the output shaft with G60 gear and wheels.' },
          { stepNumber: 4, instruction: 'Switch ON and verify that both driver and output wheels turn in the EXACT same direction.' }
        ],
        xpReward: 60
      },
      {
        id: 'c3-mod-6-experiment-8-model',
        chapterId: 'c3-ch-6-building-structures',
        title: 'Experiment 8: Compound Speed Multiplier',
        subtitle: 'Dual-shaft exponential speed gearbox',
        description: 'Construct the textbook Experiment 8 compound gearbox model achieving extreme rotational speed.',
        parts: [
          { name: 'P7X11 Plate', code: 'P7X11', count: 1, color: 'Green' },
          { name: 'CT2 Connector', code: 'CT2', count: 1, color: 'Grey' },
          { name: 'CT3 Connector', code: 'CT3', count: 4, color: 'Orange' },
          { name: 'SH60 Shaft', code: 'SH60', count: 2, color: 'Silver' },
          { name: 'Motor with Battery Box', count: 1, color: 'Black' },
          { name: 'G60 Gear', code: 'G60', count: 2, color: 'Yellow' },
          { name: 'G20 Gear', code: 'G20', count: 2, color: 'Blue' },
          { name: 'TW1 Spacer', code: 'TW1', count: 4, color: 'Black' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Fix motor with initial G60 drive gear on primary shaft.' },
          { stepNumber: 2, instruction: 'Construct intermediate compound shaft holding both a G20 pinion and a G60 gear side-by-side.' },
          { stepNumber: 3, instruction: 'Mesh initial G60 with the compound G20 gear.' },
          { stepNumber: 4, instruction: 'Mount final high-speed output shaft with G20 meshing with the compound G60.' },
          { stepNumber: 5, instruction: 'Power ON to observe the final output shaft spinning at massive multiplied RPM!' }
        ],
        xpReward: 70
      }
    ],
    quiz: [
      {
        id: 'c3-q-6-1',
        chapterId: 'c3-ch-6-building-structures',
        question: 'What are gears primarily used for?',
        options: ['Coloring pictures', 'Transferring motion and controlling speed/power', 'Holding paper', 'Storing electricity'],
        correctAnswer: 1,
        explanation: 'Gears transfer mechanical rotational power while controlling speed, direction, and torque.'
      },
      {
        id: 'c3-q-6-2',
        chapterId: 'c3-ch-6-building-structures',
        question: 'Which part supplies power to the waving bot?',
        options: ['Gear', 'Battery', 'Beam', 'Connector'],
        correctAnswer: 1,
        explanation: 'The battery supplies electrical power to energize the motor.'
      },
      {
        id: 'c3-q-6-3',
        chapterId: 'c3-ch-6-building-structures',
        question: 'What is Building Mechanics?',
        options: ['Study of colors', 'Study of sounds', 'Study of how parts are joined to make strong structures', 'Study of numbers'],
        correctAnswer: 2,
        explanation: 'Building mechanics is the science of assembling structural parts into stable, robust machines and models.'
      },
      {
        id: 'c3-q-6-4',
        chapterId: 'c3-ch-6-building-structures',
        question: 'Building mechanics helps structures to:',
        options: ['Break easily', 'Fall quickly', 'Stay strong and stable', 'Make noise'],
        correctAnswer: 2,
        explanation: 'Proper building mechanics ensures structures stay firm, stable, and capable of carrying loads.'
      },
      {
        id: 'c3-q-6-5',
        chapterId: 'c3-ch-6-building-structures',
        question: 'Which component forms the foundation of a mechanical model?',
        options: ['Motor', 'Gear', 'Base plate / frame', 'Axle'],
        correctAnswer: 2,
        explanation: 'The base plate or chassis frame acts as the solid foundation supporting all other parts.'
      },
      {
        id: 'c3-q-6-6',
        chapterId: 'c3-ch-6-building-structures',
        question: 'What do beams and connectors do?',
        options: ['Give color', 'Make sound', 'Form body parts and join them', 'Store energy'],
        correctAnswer: 2,
        explanation: 'Beams form structural limbs and body frames, while connectors lock them firmly together.'
      },
      {
        id: 'c3-q-6-7',
        chapterId: 'c3-ch-6-building-structures',
        question: 'Which part gives movement to a mechanical bot?',
        options: ['Battery', 'Frame', 'Motor', 'Switch'],
        correctAnswer: 2,
        explanation: 'The motor produces physical mechanical movement.'
      },
      {
        id: 'c3-q-6-8',
        chapterId: 'c3-ch-6-building-structures',
        question: 'What is the role of an Idler Gear in Experiment 6?',
        options: ['Increases gear speed', 'Keeps rotation in the same direction', 'Stops the motor', 'Cuts plastic'],
        correctAnswer: 1,
        explanation: 'An idler gear between driver and driven gears corrects rotation direction so both turn in the same direction.'
      },
      {
        id: 'c3-q-6-9',
        chapterId: 'c3-ch-6-building-structures',
        question: 'Does the size of an idler gear change the final speed ratio?',
        options: ['Yes, greatly', 'No, it does not change speed or power', 'Only if made of plastic', 'It doubles speed'],
        correctAnswer: 1,
        explanation: 'The idler gear size has no effect on the overall gear ratio; only the driver and final driven gear sizes matter.'
      },
      {
        id: 'c3-q-6-10',
        chapterId: 'c3-ch-6-building-structures',
        question: 'What happens in a Compound Gearbox (Experiment 8)?',
        options: ['Gears melt', 'Two gears share the same axle to multiply speed or power', 'Motors turn off', 'Batteries recharge'],
        correctAnswer: 1,
        explanation: 'In a compound gearbox, pairs of gears share common shafts to achieve exponential speed multiplication or torque increase.'
      }
    ],
    writtenQuestions: [
      {
        id: 'c3-sq-6-1',
        chapterId: 'c3-ch-6-building-structures',
        question: 'What is the role of an idler gear in a gear train?',
        sampleAnswer: 'An idler gear is an intermediate gear placed between the driving gear and the driven gear. It changes the direction of rotation so both input and output turn the same way, without altering the speed ratio.'
      },
      {
        id: 'c3-sq-6-2',
        chapterId: 'c3-ch-6-building-structures',
        question: 'What is a compound gearbox?',
        sampleAnswer: 'A compound gearbox is a gear system where two or more gears of different sizes share the same rotating axle. This allows multi-stage gear ratio multiplication, achieving massive speed or torque changes in a small space.'
      },
      {
        id: 'c3-sq-6-3',
        chapterId: 'c3-ch-6-building-structures',
        question: 'Why should heavy parts be kept at the bottom of a robotic structure?',
        sampleAnswer: 'Keeping heavy parts like the battery pack and motor at the bottom lowers the robot center of gravity, which prevents wobbling and stops the robot from tipping over during movement.'
      }
    ],
    funFacts: [
      { id: 'c3-ff-6-1', text: 'Wind turbines use massive compound gearboxes to multiply slow 15 RPM blade rotations up to 1,800 RPM for electrical generators!', tag: 'Green Energy' },
      { id: 'c3-ff-6-2', text: 'An idler gear can be as tiny as a pebble or as huge as a car wheel—the output speed remains exactly the same!', tag: 'Mechanics' },
      { id: 'c3-ff-6-3', text: 'Car transmissions use 5 to 10 compound gear sets to give drivers high pulling power in 1st gear and top speed in 6th gear.', tag: 'Automotive' },
      { id: 'c3-ff-6-4', text: 'Human joints like knees and elbows behave like complex mechanical linkages with natural cartilage bushings.', tag: 'Biology' }
    ]
  },

  // ==================== CHAPTER 7: SCRATCH CODING ====================
  {
    id: 'c3-ch-7-scratch-coding',
    classId: 'class-3',
    number: 7,
    title: 'Scratch Coding',
    tagline: 'Computer instructions, visual block programming, Sprites, Stage, Events, and Talking Robot project',
    color: '#EC4899',
    iconName: 'Code',
    lessons: [
      {
        id: 'c3-l-7-1-scratch-intro',
        chapterId: 'c3-ch-7-scratch-coding',
        order: 1,
        title: 'Introduction to Scratch & Block Coding',
        subtitle: 'Giving clear step-by-step instructions to computers and robots',
        summary: 'Computers and robots cannot think on their own. They work only when given clear instructions through programming. Scratch makes programming easy by snapping colorful blocks together like LEGO bricks.',
        keyPoints: [
          'Programming: The process of giving instructions to a computer or robot.',
          'Scratch: A fun, visual block-based programming tool made especially for beginners.',
          'Blocks snap together like puzzle pieces, preventing syntax spelling errors.',
          'With Scratch we can create animations, tell interactive stories, design games, and program real robots!'
        ],
        illustrationType: 'scratch_intro',
        tryItAction: {
          label: 'Snap First Code Block',
          description: 'Drag a "move 10 steps" block and snap it under the Green Flag event!'
        }
      },
      {
        id: 'c3-l-7-2-interface-components',
        chapterId: 'c3-ch-7-scratch-coding',
        order: 2,
        title: 'The Scratch Interface: Stage, Sprites & Blocks',
        subtitle: 'Exploring the Stage, Blocks Palette, and Script Area',
        summary: 'Master the 5 essential zones of the Scratch workspace: Sprite characters, Stage theatre, Blocks Palette, Script Area, and the Green Flag launcher.',
        keyPoints: [
          'Sprite: A graphical character or object that performs actions on the screen (e.g. Scratch Cat, Talking Robot).',
          'Stage: The main screen area where sprites move, draw, and act according to instructions.',
          'Blocks Palette: The toolbox of categorized instruction blocks (Motion, Looks, Sound, Events, Control).',
          'Script Area (Code Area): The open workspace where you drag and join blocks to build programs.',
          'Script: A connected sequence of instruction blocks that tell the sprite what to do.'
        ],
        illustrationType: 'scratch_workspace',
        tryItAction: {
          label: 'Tour Scratch Zones',
          description: 'Click on the Stage, Sprite list, Block categories, and Script area to explore each tool!'
        }
      },
      {
        id: 'c3-l-7-3-sprites-and-backdrops',
        chapterId: 'c3-ch-7-scratch-coding',
        order: 3,
        title: 'Customizing Sprites and Stage Backdrops',
        subtitle: 'Choosing characters, drawing sprites, and changing scenes',
        summary: 'Personalize your projects by choosing new sprites from the library, painting your own characters, and switching stage backdrops like parks, space, and rooms.',
        keyPoints: [
          'Choose a Sprite: Pick from animals, people, fantasy robots, or upload your own drawings.',
          'Sprite Properties: Change size, rotation direction, starting X-Y position, and costumes.',
          'Choose a Backdrop: Set scenic backgrounds like outdoor parks, city roads, bedrooms, or outer space.',
          'Backdrops make interactive stories and robotics missions visually engaging.'
        ],
        illustrationType: 'sprite_backdrop',
        tryItAction: {
          label: 'Change Stage Backdrop',
          description: 'Switch backgrounds from Laboratory to City Street to Outer Space!'
        }
      },
      {
        id: 'c3-l-7-4-fun-project-talking-robot',
        chapterId: 'c3-ch-7-scratch-coding',
        order: 4,
        title: 'Fun Project: The Talking Robot',
        subtitle: 'Events block + Looks block = Interactive talking character',
        summary: 'Build your first official Scratch project: program a robot sprite to speak greeting messages in speech bubbles when the Green Flag is clicked.',
        keyPoints: [
          'Step 1: Open a new project, delete the default cat, and choose the Robot sprite from the library.',
          'Step 2: Select the robot sprite in the sprite manager to open its script area.',
          'Step 3: Add an Events block: Drag "when green flag clicked" into the code area.',
          'Step 4: Add a Looks block: Snap "say [Hello! I am a robot] for 2 seconds" right underneath.',
          'Step 5: Run the project: Click the Green Flag! The robot speaks via an animated speech bubble!'
        ],
        illustrationType: 'talking_robot',
        tryItAction: {
          label: 'Run Talking Robot',
          description: 'Click the Green Flag to trigger the robot speech bubble and greeting animation!'
        }
      }
    ],
    activities: [
      {
        id: 'c3-act-7-scratch-block-studio',
        chapterId: 'c3-ch-7-scratch-coding',
        title: 'Scratch Block Studio & Talking Robot',
        type: 'scratch_block_studio',
        description: 'Drag real Scratch blocks (When Flag Clicked, Move Steps, Say Hello, Turn Degrees), snap them into your script, and execute the code on the live robot stage!',
        materialsNeeded: ['Scratch Code Canvas', 'Robot Sprite', 'Motion Blocks', 'Looks Blocks', 'Events Flag'],
        instructions: [
          'Drag the "when green flag clicked" block from the Events palette into the script area.',
          'Snap a "say [Hello! I am a RoboBox robot!] for 2 secs" block from Looks underneath.',
          'Add a "move 20 steps" or "turn 15 degrees" block from Motion.',
          'Click the Green Flag to execute your script in real-time!'
        ],
        xpReward: 50
      }
    ],
    models: [
      {
        id: 'c3-mod-7-talking-robot-project',
        chapterId: 'c3-ch-7-scratch-coding',
        title: 'Project: Talking Robot Animation',
        subtitle: 'Interactive greeting robot in Scratch',
        description: 'Create a complete multi-step talking robot script with speech bubbles, costume switching, and sound effects.',
        parts: [
          { name: 'Robot Sprite Character', count: 1, color: 'Silver/Blue' },
          { name: 'Sci-Fi Laboratory Backdrop', count: 1, color: 'Purple' },
          { name: 'Events: When Flag Clicked Block', count: 1, color: 'Yellow' },
          { name: 'Looks: Say Message Block', count: 2, color: 'Purple' },
          { name: 'Motion: Glide Block', count: 1, color: 'Blue' }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Open Scratch, delete the default cat sprite, and add the "Retro Robot" sprite from library.' },
          { stepNumber: 2, instruction: 'Click Choose a Backdrop and pick the "Space City" or "Neon Lab" backdrop.' },
          { stepNumber: 3, instruction: 'Drag "when green flag clicked" from the Events palette to start your script.' },
          { stepNumber: 4, instruction: 'Snap "say [Hello! I am RoboBox Class 3 Bot!] for 3 seconds" from the Looks category.' },
          { stepNumber: 5, instruction: 'Add "move 30 steps" and "turn 15 degrees" to make the robot celebrate.' },
          { stepNumber: 6, instruction: 'Click the Green Flag above the stage to see your talking robot spring to life!' }
        ],
        xpReward: 60
      }
    ],
    quiz: [
      {
        id: 'c3-q-7-1',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'Why do computers and robots need instructions?',
        options: ['They can think on their own', 'They work without help', 'They follow only given instructions', 'They do nothing'],
        correctAnswer: 2,
        explanation: 'Computers and robots cannot think independently; they execute only the explicit instructions given by programmers.'
      },
      {
        id: 'c3-q-7-2',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'What do we use to give instructions to computers?',
        options: ['Drawing', 'Singing', 'Programming', 'Painting'],
        correctAnswer: 2,
        explanation: 'Programming is the process of writing or assembling instructions for computers.'
      },
      {
        id: 'c3-q-7-3',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'Which block makes the sprite move?',
        options: ['Sound Block', 'Looks Block', 'Motion Block', 'Control Block'],
        correctAnswer: 2,
        explanation: 'Motion blocks (blue) control sprite position, steps, gliding, and rotation.'
      },
      {
        id: 'c3-q-7-4',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'Scratch uses _____ instead of difficult typed text coding:',
        options: ['Numbers', 'Colorful blocks', 'Letters', 'Wires'],
        correctAnswer: 1,
        explanation: 'Scratch uses visual, color-coded interlocking blocks that snap together like puzzle pieces.'
      },
      {
        id: 'c3-q-7-5',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'Blocks in Scratch fit together like:',
        options: ['Puzzle pieces', 'Papers', 'Stones', 'Buttons'],
        correctAnswer: 0,
        explanation: 'Scratch blocks have notches and tabs that lock together securely like jigsaw puzzle pieces.'
      },
      {
        id: 'c3-q-7-6',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'Which of the following can be created using Scratch?',
        options: ['Buildings', 'Food', 'Animations and games', 'Clothes'],
        correctAnswer: 2,
        explanation: 'Scratch enables students to create interactive animations, video games, simulations, and robot controllers.'
      },
      {
        id: 'c3-q-7-7',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'What is a sprite in Scratch?',
        options: ['A background', 'A character or object', 'A sound', 'A block'],
        correctAnswer: 1,
        explanation: 'A sprite is a character, robot, animal, or object that performs actions on screen.'
      },
      {
        id: 'c3-q-7-8',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'Where does the sprite perform actions?',
        options: ['Blocks palette', 'Stage', 'Script area', 'Toolbar'],
        correctAnswer: 1,
        explanation: 'The Stage is the main theatre screen where sprites move, speak, and interact.'
      },
      {
        id: 'c3-q-7-9',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'What happens when we click the green flag?',
        options: ['Program stops', 'Sprite disappears', 'Screen turns off', 'Program starts running'],
        correctAnswer: 3,
        explanation: 'Clicking the green flag triggers all "when green flag clicked" scripts to start running.'
      },
      {
        id: 'c3-q-7-10',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'Which block displays speech bubbles with text like "Hello!"?',
        options: ['Sound block', 'Movement block', 'Looks block', 'Control block'],
        correctAnswer: 2,
        explanation: 'Looks blocks (purple) include the "say [Hello!] for 2 secs" command that generates speech bubbles.'
      }
    ],
    writtenQuestions: [
      {
        id: 'c3-sq-7-1',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'What is Scratch?',
        sampleAnswer: 'Scratch is a beginner-friendly visual programming environment that uses colorful, drag-and-drop blocks instead of complex typed code to create animations, stories, and games.'
      },
      {
        id: 'c3-sq-7-2',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'What is a sprite in Scratch?',
        sampleAnswer: 'A sprite is a character, robot, animal, or object in a Scratch project that can move, speak, change costumes, and perform actions based on code blocks.'
      },
      {
        id: 'c3-sq-7-3',
        chapterId: 'c3-ch-7-scratch-coding',
        question: 'What is the use of a background (backdrop) in Scratch?',
        sampleAnswer: 'A backdrop provides the scenic setting or environment on the stage—such as a space laboratory, city street, or park—making the animation or game story exciting and colorful.'
      }
    ],
    funFacts: [
      { id: 'c3-ff-7-1', text: 'Scratch was created by MIT Media Lab and is used by millions of children in over 150 countries worldwide!', tag: 'Global' },
      { id: 'c3-ff-7-2', text: 'Scratch blocks fit like puzzle pieces—if two blocks are incompatible, they simply will not snap together, preventing coding bugs!', tag: 'Design' },
      { id: 'c3-ff-7-3', text: 'The default friendly mascot of Scratch is the Scratch Cat, who has appeared in over 100 million student projects.', tag: 'Mascot' },
      { id: 'c3-ff-7-4', text: 'You can connect real microcontrollers (like micro:bit and LEGO robots) to Scratch and control motors using your blocks!', tag: 'Hardware' }
    ]
  }
];

// ==================== CLASS 3 GLOSSARY ====================
// Exactly all 34 terms from textbook Pages 93-94
export const class3Glossary: GlossaryTerm[] = [
  {
    term: 'Axle',
    definition: 'A rod that helps wheels or gears rotate smoothly.',
    chapter: 'Introduction to Mechanics',
    icon: '⚙️'
  },
  {
    term: 'Balance',
    definition: 'Equal weight on both sides so a model does not fall.',
    chapter: 'Building Mechanics - I',
    icon: '⚖️'
  },
  {
    term: 'Base Plate',
    definition: 'The bottom part that supports the whole model.',
    chapter: 'Building Mechanics - I',
    icon: '🧱'
  },
  {
    term: 'Battery',
    definition: 'A device that stores energy and gives power to machines and robots.',
    chapter: 'Battery Control',
    icon: '🔋'
  },
  {
    term: 'Block',
    definition: 'A colorful piece in Scratch that gives one instruction, like move or turn.',
    chapter: 'Scratch Coding',
    icon: '🧩'
  },
  {
    term: 'Blocks Palette',
    definition: 'The area in Scratch where all categorized instruction blocks are available.',
    chapter: 'Scratch Coding',
    icon: '🎨'
  },
  {
    term: 'Chassis',
    definition: 'The rigid base frame that holds all wheels, motors, and battery in a vehicle or robot.',
    chapter: 'Building Mechanics - II',
    icon: '🚜'
  },
  {
    term: 'Circular Motion',
    definition: 'Movement of an object in a circular path around a fixed center.',
    chapter: 'Introduction to Mechanics',
    icon: '🔄'
  },
  {
    term: 'Compound Gear',
    definition: 'A gear system where two or more gears of different sizes share the same axle to multiply speed or power.',
    chapter: 'Building Structures (Gears)',
    icon: '⚙️'
  },
  {
    term: 'Connector',
    definition: 'A part used to join beams and other structural pieces firmly together.',
    chapter: 'Introduction to Mechanics',
    icon: '🔗'
  },
  {
    term: 'Crawler',
    definition: 'A robot that moves using wheels or continuous tracks over rough or uneven surfaces.',
    chapter: 'Building Mechanics - II',
    icon: '🤖'
  },
  {
    term: '3D Pen',
    definition: 'A special pen that melts plastic filament used to draw three-dimensional objects in the air.',
    chapter: '3D Pen',
    icon: '🖊️'
  },
  {
    term: '2D Shape',
    definition: 'A flat shape having only length and width, but no thickness.',
    chapter: '3D Pen',
    icon: '📐'
  },
  {
    term: '3D Shape',
    definition: 'A solid shape having length, width, and height or depth.',
    chapter: '3D Pen',
    icon: '📦'
  },
  {
    term: 'Direction',
    definition: 'The path along which an object moves or points, such as forward, backward, clockwise, or counter-clockwise.',
    chapter: 'Introduction to Mechanics',
    icon: '🧭'
  },
  {
    term: 'Drag and Drop',
    definition: 'Moving blocks in Scratch by clicking, dragging, and placing them in the script area.',
    chapter: 'Scratch Coding',
    icon: '🖱️'
  },
  {
    term: 'Electric Flow',
    definition: 'Movement of electricity through wires from the battery to devices.',
    chapter: 'Battery Control',
    icon: '⚡'
  },
  {
    term: 'Filament',
    definition: 'Plastic material (like PLA) fed into a 3D pen that melts and hardens.',
    chapter: '3D Pen',
    icon: '🧵'
  },
  {
    term: 'Force',
    definition: 'A push or pull that can cause an object to move, change speed, or stop.',
    chapter: 'Introduction to Mechanics',
    icon: '💪'
  },
  {
    term: 'Frame',
    definition: 'The main rigid structure that holds all parts of a model or robot together.',
    chapter: 'Building Mechanics - I',
    icon: '🏗️'
  },
  {
    term: 'Gear',
    definition: 'A toothed wheel that helps transfer movement and power between shafts.',
    chapter: 'Building Structures (Gears)',
    icon: '⚙️'
  },
  {
    term: 'Gravity',
    definition: 'The natural force that pulls objects downward toward the center of the Earth.',
    chapter: 'Building Mechanics - I',
    icon: '🍎'
  },
  {
    term: 'Idler Gear',
    definition: 'A middle gear placed between driver and driven gears to make both turn in the same direction.',
    chapter: 'Building Structures (Gears)',
    icon: '🔄'
  },
  {
    term: 'Inclined Plane',
    definition: 'A sloping flat surface used to move heavy objects up or down easily.',
    chapter: 'Introduction to Mechanics',
    icon: '📐'
  },
  {
    term: 'Instruction',
    definition: 'A command that tells a computer or robot what to do.',
    chapter: 'Scratch Coding',
    icon: '📋'
  },
  {
    term: 'Lever',
    definition: 'A simple machine consisting of a rigid bar pivoting on a fixed fulcrum to lift objects.',
    chapter: 'Introduction to Mechanics',
    icon: '⚖️'
  },
  {
    term: 'Low Center of Gravity',
    definition: 'Keeping heavy parts like batteries and motors near the bottom so a robot stays stable.',
    chapter: 'Building Mechanics - I',
    icon: '⚓'
  },
  {
    term: 'Mechanics',
    definition: 'The branch of science that studies how things move, why they move, and the forces acting on them.',
    chapter: 'Introduction to Mechanics',
    icon: '🔬'
  },
  {
    term: 'Motion',
    definition: 'The movement of an object from one position to another over time.',
    chapter: 'Introduction to Mechanics',
    icon: '🏃'
  },
  {
    term: 'Motor',
    definition: 'A device that changes electrical energy from a battery into mechanical movement.',
    chapter: 'Building Mechanics - II',
    icon: '🔄'
  },
  {
    term: 'Nozzle',
    definition: 'The heated metal tip of a 3D pen where melted plastic filament comes out.',
    chapter: '3D Pen',
    icon: '🔥'
  },
  {
    term: 'Periodic Motion',
    definition: 'Movement that repeats back and forth again and again in the same pattern (like a swing or pendulum).',
    chapter: 'Introduction to Mechanics',
    icon: '⏰'
  },
  {
    term: 'Program',
    definition: 'A complete set of ordered instructions given to a computer or robot to perform a task.',
    chapter: 'Scratch Coding',
    icon: '💻'
  },
  {
    term: 'Programming',
    definition: 'The creative process of writing or assembling instructions for a computer or robot.',
    chapter: 'Scratch Coding',
    icon: '⌨️'
  },
  {
    term: 'Pulley',
    definition: 'A simple machine made of a grooved wheel with a rope used to lift heavy loads.',
    chapter: 'Introduction to Mechanics',
    icon: '🪢'
  },
  {
    term: 'Robot',
    definition: 'A programmable machine capable of carrying out complex actions automatically.',
    chapter: 'Introduction to Mechanics',
    icon: '🤖'
  },
  {
    term: 'Robotics',
    definition: 'The science and engineering of designing, building, and programming robots.',
    chapter: 'Introduction to Mechanics',
    icon: '🚀'
  },
  {
    term: 'Scratch',
    definition: 'A beginner-friendly visual block programming environment created by MIT.',
    chapter: 'Scratch Coding',
    icon: '🐱'
  },
  {
    term: 'Scratch Cat',
    definition: 'The default friendly mascot sprite provided inside Scratch.',
    chapter: 'Scratch Coding',
    icon: '😺'
  },
  {
    term: 'Screw',
    definition: 'A spiral-shaped inclined plane used to fasten materials or lift objects.',
    chapter: 'Introduction to Mechanics',
    icon: '🔩'
  },
  {
    term: 'Script',
    definition: 'A set of connected blocks in Scratch that gives instructions to a sprite.',
    chapter: 'Scratch Coding',
    icon: '📜'
  },
  {
    term: 'Script Area (Code Area)',
    definition: 'The workspace in Scratch where blocks are dragged and joined together.',
    chapter: 'Scratch Coding',
    icon: '🖥️'
  },
  {
    term: 'Simple Machine',
    definition: 'A basic tool that makes work easier by changing force magnitude or direction.',
    chapter: 'Introduction to Mechanics',
    icon: '🛠️'
  },
  {
    term: 'Speed Control',
    definition: 'Adjusting how fast or slow a mechanism or robot moves using gears or buttons.',
    chapter: 'Building Structures (Gears)',
    icon: '🏎️'
  },
  {
    term: 'Sprite',
    definition: 'A character or object in Scratch that performs actions on the screen.',
    chapter: 'Scratch Coding',
    icon: '👾'
  },
  {
    term: 'Stability',
    definition: 'The ability of a structure or robot model to stand firmly without falling over.',
    chapter: 'Building Mechanics - I',
    icon: '🏛️'
  },
  {
    term: 'Stage',
    definition: 'The main screen area in Scratch where sprites move and perform actions.',
    chapter: 'Scratch Coding',
    icon: '🎭'
  },
  {
    term: 'Straight Line Motion',
    definition: 'Movement of an object in a straight path without changing direction.',
    chapter: 'Introduction to Mechanics',
    icon: '➡️'
  },
  {
    term: 'Tracks',
    definition: 'Continuous belts or treads that help crawler robots move over rough surfaces.',
    chapter: 'Building Mechanics - II',
    icon: '🚜'
  },
  {
    term: 'Wedge',
    definition: 'A sharp simple machine with angled sides used for cutting or splitting.',
    chapter: 'Introduction to Mechanics',
    icon: '🪓'
  },
  {
    term: 'Wheel and Axle',
    definition: 'A simple machine consisting of a wheel attached to a central rotating rod.',
    chapter: 'Introduction to Mechanics',
    icon: '🎡'
  }
];

// ==================== CLASS 3 BADGES ====================
export const class3Badges: Badge[] = [
  {
    id: 'c3-badge-mechanics-pioneer',
    title: 'Mechanics Pioneer',
    description: 'Mastered the 3 types of motion, 6 simple machines, and Scotch Yoke mechanism!',
    icon: '⚙️',
    unlockedAtXp: 80,
    chapterRequirement: 'c3-ch-1-intro-mechanics'
  },
  {
    id: 'c3-badge-3d-sculptor',
    title: '3D Pen Sculptor',
    description: 'Mastered 2D vs 3D shapes, 190°C preheating, and extruded custom 3D name initials!',
    icon: '🖊️',
    unlockedAtXp: 160,
    chapterRequirement: 'c3-ch-2-3d-pen'
  },
  {
    id: 'c3-badge-circuit-master',
    title: 'Battery & Aarti Engineer',
    description: 'Wired circuits, distinguished primary vs secondary cells, and powered the rotating Aarti Set!',
    icon: '🔋',
    unlockedAtXp: 240,
    chapterRequirement: 'c3-ch-3-battery-control'
  },
  {
    id: 'c3-badge-balance-architect',
    title: 'Balance Architect',
    description: 'Balanced low center of gravity and built the waving robot with symmetrical gear arms!',
    icon: '🤖',
    unlockedAtXp: 320,
    chapterRequirement: 'c3-ch-4-building-mechanics-1'
  },
  {
    id: 'c3-badge-crawler-commander',
    title: 'Crawler Commander',
    description: 'Conquered rough rocky terrain with continuous tracks and solved the 12-word Robotics puzzle!',
    icon: '🚜',
    unlockedAtXp: 400,
    chapterRequirement: 'c3-ch-5-building-mechanics-2'
  },
  {
    id: 'c3-badge-gearbox-wizard',
    title: 'Gearbox Wizard',
    description: 'Solved Experiment 6 Idler Gear direction tricks and built Experiment 8 Compound Multiplier!',
    icon: '⚡',
    unlockedAtXp: 480,
    chapterRequirement: 'c3-ch-6-building-structures'
  },
  {
    id: 'c3-badge-scratch-programmer',
    title: 'Scratch Coder',
    description: 'Assembled visual logic blocks, configured sprites and backdrops, and launched the Talking Robot!',
    icon: '🐱',
    unlockedAtXp: 560,
    chapterRequirement: 'c3-ch-7-scratch-coding'
  },
  {
    id: 'c3-badge-class3-champion',
    title: 'Standard 3 Robotics Champion',
    description: 'Completed all 7 chapters of the official Standard 3 RoboBox curriculum!',
    icon: '🏆',
    unlockedAtXp: 700
  }
];
