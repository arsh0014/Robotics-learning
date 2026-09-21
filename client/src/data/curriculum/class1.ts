import { Chapter, GlossaryTerm, Badge } from '../../types/curriculum';

export const class1Chapters: Chapter[] = [
  // ==================== CHAPTER 1: LEGO WALL ====================
  {
    id: 'ch-1-lego-wall',
    classId: 'class-1',
    number: 1,
    title: 'LEGO Wall',
    tagline: 'Colorful building blocks, interlocking shapes, and creative wall structures',
    color: '#3B82F6',
    iconName: 'Blocks',
    lessons: [
      {
        id: 'l-1-1-definition',
        chapterId: 'ch-1-lego-wall',
        order: 1,
        title: 'What is LEGO and the LEGO Wall?',
        subtitle: 'The magic of interlocking blocks',
        summary: 'LEGO is a set of colorful plastic blocks that fit together to make different structures.',
        keyPoints: [
          'LEGO blocks are made of colorful, durable plastic.',
          'They easily snap together and come apart so you can build anything you imagine.',
          'A LEGO wall is a special wall in the classroom where you can build fun things like trees, houses, bridges, and buildings.'
        ],
        illustrationType: 'lego_intro',
        tryItAction: {
          label: 'Test Block Snapping',
          description: 'Click to see how blocks lock onto the LEGO wall!'
        }
      },
      {
        id: 'l-1-2-basic-shapes',
        chapterId: 'ch-1-lego-wall',
        order: 2,
        title: 'Basic LEGO Shapes',
        subtitle: 'Square, rectangle, plate, slope, and cylinder',
        summary: 'LEGO blocks come in different shapes. Some are square, some are rectangular, and others have slopes or round curves.',
        keyPoints: [
          'Brick: The classic thick building block.',
          'Plate: A flatter, thinner block for creating steady bases.',
          'Square & Rectangle: Two of the most common shapes used in towers and walls.',
          'Slope & Cylinder: Slanted and rounded blocks used for roofs, car hoods, and wheels.'
        ],
        illustrationType: 'lego_shapes',
        tryItAction: {
          label: 'Explore Shapes',
          description: 'Tap each LEGO piece to see its name and shape.'
        }
      },
      {
        id: 'l-1-3-basic-building',
        chapterId: 'ch-1-lego-wall',
        order: 3,
        title: 'How LEGO Bricks Lock: Studs and Tubes',
        subtitle: 'The secret puzzle bumps inside every brick',
        summary: 'LEGO bricks work just like a puzzle. On top are round bumps called studs; on the bottom are hollow circles called tubes or nodes.',
        keyPoints: [
          'Studs are the little round bumps on top of every brick.',
          'Tubes (or nodes) are the hollow circles on the bottom.',
          'When we press them together, the studs slide into the tubes and stay stuck tight!',
          'Careful building makes structures strong so tall towers do not fall down.'
        ],
        illustrationType: 'lego_studs',
        tryItAction: {
          label: 'Lock Studs into Tubes',
          description: 'Slide two bricks together and watch the studs lock tight.'
        }
      }
    ],
    activities: [
      {
        id: 'act-1-color-sort',
        chapterId: 'ch-1-lego-wall',
        title: 'Sort LEGO Parts by Color',
        type: 'lego_sorter',
        description: 'Practice organizing your workshop! Drag each colorful LEGO brick into its matching color tray (Red, Blue, Yellow, Green).',
        instructions: [
          'Look at the LEGO brick shown.',
          'Drag and drop it into the matching colored bin.',
          'Sort all 8 bricks to earn your Builder stars!'
        ],
        xpReward: 20
      },
      {
        id: 'act-1-tree-builder',
        chapterId: 'ch-1-lego-wall',
        title: 'Build a LEGO Tree & Wall Pattern',
        type: 'lego_tree',
        description: 'Inspired by textbook page 4: Work like a classroom team to assemble a tall green tree on the LEGO Wall baseplate!',
        instructions: [
          'Start with brown trunk bricks on the base plate.',
          'Stack green leaf plates on top to form the leafy branches.',
          'Add colorful flowers or fruit bricks to complete your tree.'
        ],
        xpReward: 20
      }
    ],
    models: [
      {
        id: 'model-1-giraffe',
        chapterId: 'ch-1-lego-wall',
        title: 'The LEGO Giraffe',
        subtitle: '6-step colorful animal build from textbook page 3',
        description: 'Follow the official step-by-step instructions from your textbook to build a friendly long-necked giraffe.',
        parts: [
          { name: 'Leg bricks (Yellow/Orange)', count: 4 },
          { name: 'Connecting body bricks (Red)', count: 2 },
          { name: 'Long neck bricks (Yellow)', count: 6 },
          { name: 'Head bricks (Blue & Black)', count: 2 },
          { name: 'Tail brick (White)', count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Make two legs using colored bricks placed side by side.' },
          { stepNumber: 2, instruction: 'Connect the legs securely across the top with red bricks.' },
          { stepNumber: 3, instruction: 'Add the first layer of colored bricks to start the neck.' },
          { stepNumber: 4, instruction: 'Add more colored bricks upward to make the giraffe neck tall.' },
          { stepNumber: 5, instruction: 'Finish the head at the top with blue and black bricks for eyes and face.' },
          { stepNumber: 6, instruction: 'Add a small white brick at the back to make the tail!' }
        ],
        xpReward: 30
      }
    ],
    quiz: [
      {
        id: 'q-1-1',
        chapterId: 'ch-1-lego-wall',
        question: 'What makes LEGO blocks stick together?',
        options: ['Studs', 'Studs and holes', 'Glue', 'Magnets'],
        correctAnswer: 1,
        explanation: 'LEGO bricks lock together when the round studs on top slide into the hollow holes/tubes on the bottom!'
      },
      {
        id: 'q-1-2',
        chapterId: 'ch-1-lego-wall',
        question: 'LEGO blocks help us to learn:',
        options: ['Cooking', 'Shapes and creativity', 'Driving', 'Counting money'],
        correctAnswer: 1,
        explanation: 'Playing with LEGO teaches us geometric shapes, spatial building, and creative problem solving!'
      },
      {
        id: 'q-1-3',
        chapterId: 'ch-1-lego-wall',
        question: 'What do you feel when you play with LEGO?',
        options: ['Sad', 'Angry', 'Happy', 'Bored'],
        correctAnswer: 2,
        explanation: 'Building fun models and colorful houses makes us feel happy and excited!'
      },
      {
        id: 'q-1-4',
        chapterId: 'ch-1-lego-wall',
        question: 'True or False: You can build a real working car with LEGO.',
        options: ['True', 'False'],
        correctAnswer: 0,
        explanation: 'True! Master builders and engineers have even built full-sized drivable cars using LEGO Technic and motors!'
      },
      {
        id: 'q-1-5',
        chapterId: 'ch-1-lego-wall',
        question: 'LEGO is a set of _____ blocks.',
        options: ['Colorful plastic', 'Paper', 'Mud', 'Stone'],
        correctAnswer: 0,
        explanation: 'LEGO blocks are bright, colorful plastic pieces crafted to fit together precisely.'
      }
    ],
    writtenQuestions: [
      {
        id: 'wq-1-1',
        chapterId: 'ch-1-lego-wall',
        question: 'What is LEGO?',
        placeholder: 'Type in your words what LEGO is...',
        sampleAnswer: 'LEGO is a set of colorful plastic blocks that fit together to make different structures.'
      },
      {
        id: 'wq-1-2',
        chapterId: 'ch-1-lego-wall',
        question: 'What is a LEGO wall?',
        placeholder: 'What do we build on the classroom wall?',
        sampleAnswer: 'A LEGO wall is a wall in the classroom where children can build fun structures like trees, bridges, and houses.'
      },
      {
        id: 'wq-1-3',
        chapterId: 'ch-1-lego-wall',
        question: 'What should we do while making a structure using LEGO so it does not fall?',
        placeholder: 'How do we press the blocks?',
        sampleAnswer: 'We should fix the blocks properly by pressing them together firmly so the structure becomes strong.'
      }
    ],
    funFacts: [
      {
        id: 'ff-1-1',
        text: 'There are so many LEGO pieces in the world that if we shared them all, every single person on Earth would have about 100 bricks each. That is a lot of towers and houses!',
        tag: 'Did You Know?'
      }
    ]
  },

  // ==================== CHAPTER 2: TANGRAM ====================
  {
    id: 'ch-2-tangram',
    classId: 'class-1',
    number: 2,
    title: 'Tangram',
    tagline: 'Geometric shapes, 7 magic puzzle pieces, and creative silhouette patterns',
    color: '#EC4899',
    iconName: 'Shapes',
    lessons: [
      {
        id: 'l-2-1-shapes-intro',
        chapterId: 'ch-2-tangram',
        order: 1,
        title: 'Introduction to Shapes',
        subtitle: 'Circles, squares, triangles, and rectangles',
        summary: 'Shapes are the form or outline of objects, defined by boundaries like lines, curves, and points.',
        keyPoints: [
          'Circle: Perfectly round with no corners or sides (e.g. a ball, coin, or wheel).',
          'Square: Four equal sides and four right angles (e.g. window or block).',
          'Triangle: Three sides and three angles (e.g. 3D printed pyramid or pizza slice).',
          'Rectangle: Four sides with equal opposite sides and four right angles (e.g. battery box or phone).'
        ],
        illustrationType: 'shapes_intro',
        tryItAction: {
          label: 'Count Corners',
          description: 'Touch each shape to count its sides and corners.'
        }
      },
      {
        id: 'l-2-2-tangram-pieces',
        chapterId: 'ch-2-tangram',
        order: 2,
        title: 'The 7-Piece Tangram Puzzle',
        subtitle: 'Two big, one medium, two small triangles, one square, one parallelogram',
        summary: 'A tangram is an ancient Chinese puzzle made of exactly 7 geometric shapes called tans.',
        keyPoints: [
          '2 Large Triangles',
          '1 Medium Triangle',
          '2 Small Triangles',
          '1 Square',
          '1 Parallelogram',
          'Together, these 7 pieces can fit into one large square or create hundreds of figures!'
        ],
        illustrationType: 'tangram_pieces',
        tryItAction: {
          label: 'Identify 7 Pieces',
          description: 'Tap each tan piece to highlight its size and shape.'
        }
      },
      {
        id: 'l-2-3-patterns',
        chapterId: 'ch-2-tangram',
        order: 3,
        title: 'Patterns and Tangram Creations',
        subtitle: 'Boats, cats, castles, running persons, and houses',
        summary: 'Arranging the seven pieces teaches pattern recognition, spatial reasoning, and creative thinking.',
        keyPoints: [
          'Helps children see what piece comes next.',
          'Teaches shapes, orientations, and colors.',
          'Improves concentration and problem-solving.',
          'You can make animals, boats, houses, and robots!'
        ],
        illustrationType: 'tangram_patterns',
        tryItAction: {
          label: 'View Tangram Boat',
          description: 'See how 7 pieces arrange into a sailboat riding the ocean waves.'
        }
      }
    ],
    activities: [
      {
        id: 'act-2-tangram-sandbox',
        chapterId: 'ch-2-tangram',
        title: 'Interactive Tangram Playground',
        type: 'tangram_sandbox',
        description: 'Drag, rotate, and snap the 7 colorful tangram pieces to assemble target silhouettes: Boat, Cat, House, and Robot!',
        instructions: [
          'Pick a target shape at the top (Boat, Cat, House, Robot).',
          'Drag the colored triangles, square, and parallelogram onto the silhouette.',
          'Rotate pieces if needed until the puzzle fits together perfectly!'
        ],
        xpReward: 25
      },
      {
        id: 'act-2-robot-circuit',
        chapterId: 'ch-2-tangram',
        title: 'Activity 1: Draw a Robot Circuit',
        type: 'robot_circuit',
        description: 'Connect the brain, power, and movement parts of the robot (Arduino UNO, Motor Driver, Motors, Wheels, and IR Sensor)!',
        instructions: [
          'Drag a wire from the Arduino UNO board to the Motor Driver.',
          'Connect the Motor Driver to the Left and Right Motors.',
          'Attach the Wheels to the Motors and connect the IR Sensor to the front.'
        ],
        xpReward: 20
      }
    ],
    models: [
      {
        id: 'model-2-tangram-cat',
        chapterId: 'ch-2-tangram',
        title: 'Build a Tangram Cat',
        subtitle: '5-step silhouette guide from textbook page 11',
        description: 'Use your imagination and geometric pieces to form a friendly cat silhouette.',
        parts: [
          { name: 'Medium Triangle (Body base)', count: 1 },
          { name: 'Large Triangle (Body flank)', count: 1 },
          { name: 'Square (Head)', count: 1 },
          { name: 'Small Triangles (Pointy ears)', count: 2 },
          { name: 'Parallelogram (Curved tail)', count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Start with the Body: Place the medium triangle and one large triangle to form the torso.' },
          { stepNumber: 2, instruction: 'Add the Head: Place the square diamond-style on top of the torso.' },
          { stepNumber: 3, instruction: 'Form the Ears: Position the two small triangles on top of the head for pointy ears.' },
          { stepNumber: 4, instruction: 'Make the Tail: Extend the angled parallelogram outward from the back as a tail.' },
          { stepNumber: 5, instruction: 'Assemble & Adjust: Check your finished cat silhouette!' }
        ],
        xpReward: 30
      }
    ],
    quiz: [
      {
        id: 'q-2-1',
        chapterId: 'ch-2-tangram',
        question: 'Which shape has no sides but is round?',
        options: ['Triangle', 'Circle', 'Square', 'Rectangle'],
        correctAnswer: 1,
        explanation: 'A circle is perfectly round with zero corners and zero straight sides!'
      },
      {
        id: 'q-2-2',
        chapterId: 'ch-2-tangram',
        question: 'Which object is shaped like a circle (or wheel)?',
        options: ['A box', 'A book', 'A round coin', 'A brick'],
        correctAnswer: 2,
        explanation: 'A coin and a wheel are circular in shape!'
      },
      {
        id: 'q-2-3',
        chapterId: 'ch-2-tangram',
        question: 'Which shape has three sides and three corners?',
        options: ['Square', 'Triangle', 'Circle', 'Rectangle'],
        correctAnswer: 1,
        explanation: 'A triangle always has exactly three straight sides and three vertices/corners.'
      },
      {
        id: 'q-2-4',
        chapterId: 'ch-2-tangram',
        question: 'How many pieces are in a tangram puzzle?',
        options: ['4 pieces', '5 pieces', '7 pieces', '10 pieces'],
        correctAnswer: 2,
        explanation: 'A tangram puzzle always consists of exactly 7 geometric shapes (tans).'
      },
      {
        id: 'q-2-5',
        chapterId: 'ch-2-tangram',
        question: 'If you have a Tangram, what can you make?',
        options: ['A cat', 'A house', 'A boat', 'All of these shapes'],
        correctAnswer: 3,
        explanation: 'With a 7-piece tangram, you can create animals, boats, houses, and hundreds more pictures!'
      }
    ],
    writtenQuestions: [
      {
        id: 'wq-2-1',
        chapterId: 'ch-2-tangram',
        question: 'What is a Shape?',
        placeholder: 'How would you describe an outline of an object?',
        sampleAnswer: 'Shapes are the form or outline of objects, defined by boundaries like lines, curves, and points.'
      },
      {
        id: 'wq-2-2',
        chapterId: 'ch-2-tangram',
        question: 'What is a Tangram?',
        placeholder: 'How many pieces does it have?',
        sampleAnswer: 'A tangram is a puzzle made up of seven geometric shapes that can be arranged to create different pictures.'
      },
      {
        id: 'wq-2-3',
        chapterId: 'ch-2-tangram',
        question: 'What can you make if you have a Tangram?',
        placeholder: 'Name two or three things you can build...',
        sampleAnswer: 'We can make a boat, cat, castle, house, running person, and a robot!'
      }
    ],
    funFacts: [
      {
        id: 'ff-2-1',
        text: 'Even though there are only seven magic shapes in a tangram, you can use them to create over 1,000 different pictures and silhouettes!',
        tag: 'Ancient Magic Puzzle'
      }
    ]
  },

  // ==================== CHAPTER 3: MOTORS AND WHEELS (CARS) ====================
  {
    id: 'ch-3-motors-wheels',
    classId: 'class-1',
    number: 3,
    title: 'Motors and Wheels (Cars)',
    tagline: 'Engines of motion, spinning wheels, gears, and rolling robotic cars',
    color: '#10B981',
    iconName: 'Cog',
    lessons: [
      {
        id: 'l-3-1-motor-def',
        chapterId: 'ch-3-motors-wheels',
        order: 1,
        title: 'What is a Motor?',
        subtitle: 'The tiny engine that powers motion',
        summary: 'A motor is a small part inside a toy or vehicle that helps it move when electricity flows.',
        keyPoints: [
          'A motor is like a tiny engine.',
          'When electricity flows into it from a battery, the shaft spins.',
          'It makes toys roll, walk, shake, dance, or fly!',
          'Vehicles, fans, and robots all rely on motors to perform work.'
        ],
        illustrationType: 'motor_intro',
        tryItAction: {
          label: 'Power the Motor',
          description: 'Turn on the battery switch to see the motor shaft spin!'
        }
      },
      {
        id: 'l-3-2-wheel-def',
        chapterId: 'ch-3-motors-wheels',
        order: 2,
        title: 'What is a Wheel?',
        subtitle: 'Magic circles that roll',
        summary: 'Wheels are circular objects that turn around an axle, helping things move smoothly with less friction.',
        keyPoints: [
          'A wheel is round like a circle.',
          'It helps heavy loads roll easily across floors and roads.',
          'Cars, bicycles, roller skates, and robotic rovers all use wheels.',
          'The invention of the wheel made human life faster and easier!'
        ],
        illustrationType: 'wheel_intro',
        tryItAction: {
          label: 'Spin the Wheel',
          description: 'Give the wheel a push to see how smoothly circles roll.'
        }
      },
      {
        id: 'l-3-3-combo',
        chapterId: 'ch-3-motors-wheels',
        order: 3,
        title: 'Superpowers: Motor + Wheel',
        subtitle: 'Battery -> Motor -> Wheel -> Movement',
        summary: 'Connecting a motor to a wheel gives it superpowers! The spinning motor rotates the wheel, driving cars forward and backward.',
        keyPoints: [
          'Energy chain: Battery -> Motor -> Axle -> Wheel -> Motion.',
          'When the motor turns forward, the toy car drives forward.',
          'Reverse the electrical wires, and the car drives backward!',
          'Gears (like G60 and G20) can change how fast or strong the wheels turn.'
        ],
        illustrationType: 'motor_wheel_combo',
        tryItAction: {
          label: 'Drive the Car',
          description: 'Control the motor speed and see the robotic car move!'
        }
      }
    ],
    activities: [
      {
        id: 'act-3-motor-simulator',
        chapterId: 'ch-3-motors-wheels',
        title: 'Kinetic Motor & Wheel Simulator',
        type: 'motor_runner',
        description: 'Connect the battery switch to the DC motor, adjust the RPM speed slider, and observe the wheels rotate with real audio buzzing sound!',
        instructions: [
          'Flip the Power Switch to ON.',
          'Use the Speed Slider to increase or decrease motor speed.',
          'Toggle Forward / Reverse gear to see the wheel change direction!'
        ],
        xpReward: 25
      },
      {
        id: 'act-3-robot-assembler',
        chapterId: 'ch-3-motors-wheels',
        title: 'Activity 2: Connect the Robot Parts',
        type: 'robot_assembler',
        description: 'From textbook page 26: Assemble the robot parts onto the chassis (Head, Left Hand, Right Hand, and Legs).',
        instructions: [
          'Drag the Robot Head onto the top connector.',
          'Attach the left and right robotic arms.',
          'Connect the wheeled legs to the base and watch your robot celebrate!'
        ],
        xpReward: 20
      }
    ],
    models: [
      {
        id: 'model-3-cart',
        chapterId: 'ch-3-motors-wheels',
        title: 'Model 1: 4-Step Rolling Cart',
        subtitle: 'Blix robotics basic chassis build (Textbook page 21)',
        description: 'Build your first 4-wheeled rolling chassis with plates and axles.',
        parts: [
          { name: 'P3 Plates', code: 'P3', count: 3 },
          { name: 'CT3 Connectors', code: 'CT3', count: 6 },
          { name: 'P5 Plate', code: 'P5', count: 3 },
          { name: 'P11 Plate', code: 'P11', count: 1 },
          { name: 'SH100 Axle Shaft', code: 'SH100', count: 1 },
          { name: 'Wheels', code: 'WHEEL', count: 4 },
          { name: 'TWI Wheel locks', code: 'TWI', count: 4 }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Take 1 pc P3, 4 pcs CT3, and 2 pcs P5 to assemble the base chassis.' },
          { stepNumber: 2, instruction: 'Mount the support plates P3 and connect with CT3 pins.' },
          { stepNumber: 3, instruction: 'Slide the SH100 metal shaft through the bottom connector holes.' },
          { stepNumber: 4, instruction: 'Slide 4 wheels onto the axles and lock firmly with 4 TWI caps!' }
        ],
        xpReward: 30
      },
      {
        id: 'model-3-mudguard-car',
        chapterId: 'ch-3-motors-wheels',
        title: 'Model 2: Car with Left & Right Mudguards',
        subtitle: 'Advanced body build with protective wheel arches (Textbook page 22)',
        description: 'Construct a sleek racer with dedicated left and right mudguards.',
        parts: [
          { name: 'P11 Plates', code: 'P11', count: 2 },
          { name: 'CT2 Connectors', code: 'CT2', count: 12 },
          { name: 'CT3 Connectors', code: 'CT3', count: 4 },
          { name: 'Mudguard Left', code: 'MG-L', count: 1 },
          { name: 'Mudguard Right', code: 'MG-R', count: 1 },
          { name: 'SH100 Axles', code: 'SH100', count: 2 },
          { name: 'Wheels & TWI', code: 'W-TWI', count: 4 }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Assemble the long base using 2 pcs P11 and 8 pcs CT2 pins.' },
          { stepNumber: 2, instruction: 'Important: Attach Mudguard Left to the left side and Mudguard Right to the right side correctly!' },
          { stepNumber: 3, instruction: 'Insert the two SH100 axle shafts and secure the 4 wheels with TWI caps.' }
        ],
        xpReward: 35
      },
      {
        id: 'model-3-paper-machine',
        chapterId: 'ch-3-motors-wheels',
        title: 'Paper Craft Machine',
        subtitle: 'Rotating gear transmission from textbook page 24-25',
        description: 'Build a gear-driven craft machine: turn the small G20 idler gear to rotate large G60 gears and feed paper!',
        parts: [
          { name: 'G60 Large Spur Gears', code: 'G60', count: 2 },
          { name: 'SH60 Shafts', code: 'SH60', count: 2 },
          { name: 'P7 Frame Plates', code: 'P7', count: 2 },
          { name: 'CL2 Locking Clips', code: 'CL2', count: 1 },
          { name: 'G20 Idler Gear with Handle', code: 'G20', count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: 'Mount the two large G60 gears onto the SH60 shafts on the frame.' },
          { stepNumber: 2, instruction: 'Secure the upright side plates P7 on both sides of the gear shafts.' },
          { stepNumber: 3, instruction: 'Attach the G20 drive gear with clip CL2. Insert paper between the G60 gears and rotate!' }
        ],
        xpReward: 35
      }
    ],
    quiz: [
      {
        id: 'q-3-1',
        chapterId: 'ch-3-motors-wheels',
        question: 'Which of these things uses a motor?',
        options: ['A simple light bulb', 'A ceiling fan', 'A flat rock', 'A wooden pencil'],
        correctAnswer: 1,
        explanation: 'A fan uses an electric motor to spin its blades and circulate cool air!'
      },
      {
        id: 'q-3-2',
        chapterId: 'ch-3-motors-wheels',
        question: 'What shape is a wheel?',
        options: ['Square', 'Circle', 'Triangle', 'Star'],
        correctAnswer: 1,
        explanation: 'A wheel is circular so it can roll smoothly along any flat surface without bumping.'
      },
      {
        id: 'q-3-3',
        chapterId: 'ch-3-motors-wheels',
        question: 'A pizza and a steering wheel are similar in shape to a:',
        options: ['Box', 'Circle', 'Cone', 'Pyramid'],
        correctAnswer: 1,
        explanation: 'Both a whole pizza and a steering wheel are round circles!'
      },
      {
        id: 'q-3-4',
        chapterId: 'ch-3-motors-wheels',
        question: 'A wheel is part of:',
        options: ['A car', 'A moving toy', 'A bicycle', 'All of the above'],
        correctAnswer: 3,
        explanation: 'Cars, moving toy cars, and bicycles all rely on round wheels to travel.'
      },
      {
        id: 'q-3-5',
        chapterId: 'ch-3-motors-wheels',
        question: 'The wheel helped early humans make life:',
        options: ['Slower', 'More difficult', 'Faster and easier', 'Colder'],
        correctAnswer: 2,
        explanation: 'Wheels allowed humans to carry heavy loads, travel long distances, and build vehicles easily.'
      }
    ],
    writtenQuestions: [
      {
        id: 'wq-3-1',
        chapterId: 'ch-3-motors-wheels',
        question: 'What is the use of the motor in the robot?',
        placeholder: 'Why does a robot need a motor?',
        sampleAnswer: 'The motor provides power to spin shafts, rotate wheels, and move the robot arms or legs.'
      },
      {
        id: 'wq-3-2',
        chapterId: 'ch-3-motors-wheels',
        question: 'What is the use of wheels in the robot?',
        placeholder: 'How do wheels help the robot?',
        sampleAnswer: 'Wheels allow the robot to roll forward, backward, and turn around smoothly.'
      },
      {
        id: 'wq-3-3',
        chapterId: 'ch-3-motors-wheels',
        question: 'What happens when we put batteries in the robot?',
        placeholder: 'What flows from the battery to the motor?',
        sampleAnswer: 'Electricity flows into the motor, causing it to spin and activate the robot!'
      }
    ],
    funFacts: [
      {
        id: 'ff-3-1',
        text: 'The first practical DC motor was invented by the British scientist William Sturgeon in 1832!',
        tag: 'History of Robotics'
      },
      {
        id: 'ff-3-2',
        text: 'Airplanes have powerful engines called jet engines that help them fly high into the sky!',
        tag: 'Engines in Action'
      }
    ]
  },

  // ==================== CHAPTER 4: STEM PROJECTS - I ====================
  {
    id: 'ch-4-stem-projects',
    classId: 'class-1',
    number: 4,
    title: 'STEM Projects - I',
    tagline: 'Snow powder, foamy chemical reactions, clay sculpting, and DIY claws',
    color: '#F59E0B',
    iconName: 'FlaskConical',
    lessons: [
      {
        id: 'l-4-1-snow-powder',
        chapterId: 'ch-4-stem-projects',
        order: 1,
        title: 'Snow Powder (Instant Snow)',
        subtitle: 'Sodium polyacrylate polymer expansion',
        summary: 'Snow powder is a superabsorbent polymer that looks and feels like real snow when water is added!',
        keyPoints: [
          'It is made of sodium polyacrylate crystals.',
          'When you add water, it expands dramatically into fluffy, cool snow.',
          'Indoor Fun: Enjoy snow indoors even on a hot sunny day.',
          'Safe for kids to touch, but do NOT eat it!',
          'Reusable: Let it dry out and you can use it again.'
        ],
        illustrationType: 'snow_intro',
        tryItAction: {
          label: 'Add Water to Powder',
          description: 'Pour water onto the white powder and watch it puff up into fluffy snow!'
        }
      },
      {
        id: 'l-4-2-elephant-toothpaste',
        chapterId: 'ch-4-stem-projects',
        order: 2,
        title: 'Elephant Toothpaste Experiment',
        subtitle: 'Foamy chemical reaction (with Safety First!)',
        summary: 'A dramatic reaction where yeast catalyzes hydrogen peroxide to create a giant eruption of warm foam.',
        keyPoints: [
          'SAFETY FIRST: Adult supervision is required when handling hydrogen peroxide!',
          'Materials: Bottle, dry yeast, warm water, hydrogen peroxide, dish soap, food coloring, tray.',
          'The yeast rapidly breaks hydrogen peroxide into water and oxygen gas.',
          'The dish soap traps the escaping oxygen gas, forming millions of warm foam bubbles!'
        ],
        illustrationType: 'elephant_toothpaste',
        tryItAction: {
          label: 'Mix Ingredients',
          description: 'Trigger the yeast catalyst and watch the colorful foam shoot upward!'
        }
      },
      {
        id: 'l-4-3-clay-powder',
        chapterId: 'ch-4-stem-projects',
        order: 3,
        title: 'Clay Powder (Kaolin)',
        subtitle: 'Earth materials for pottery and shaping',
        summary: 'Clay powder is a fine, smooth mineral made by crushing clay. Mixed with water, it becomes moldable clay!',
        keyPoints: [
          'Used for pottery, ceramics, paper making, and art.',
          'Playing with clay strengthens fingers and fine motor skills.',
          'Long ago, humans used natural clay to make bowls, bricks, and houses.'
        ],
        illustrationType: 'clay_intro',
        tryItAction: {
          label: 'Shape the Clay',
          description: 'Mix clay with water to sculpt a pot or figurine.'
        }
      },
      {
        id: 'l-4-4-diy-claw',
        chapterId: 'ch-4-stem-projects',
        order: 4,
        title: 'DIY Claw: Simple Machine Gripper',
        subtitle: 'Cups and straws transformed into a robotic gripper',
        summary: 'Using two disposable cups and paper straws, you can build your own push-pull claw to grab prizes!',
        keyPoints: [
          'Teaches children how levers and simple mechanical linkages work.',
          'Step 1: Cut 4 legs around the cup rim.',
          'Step 2: Poke a hole in the base and insert a paper straw.',
          'Step 3: Fold paper pads on leg ends.',
          'Step 4: Slide inside a second cup with a hole.',
          'Step 5: Push and pull the straw to pinch and release!'
        ],
        illustrationType: 'diy_claw',
        tryItAction: {
          label: 'Test Claw Grip',
          description: 'Pull the straw back to close the jaws and pick up a prize!'
        }
      }
    ],
    activities: [
      {
        id: 'act-4-toothpaste-simulator',
        chapterId: 'ch-4-stem-projects',
        title: 'Virtual Elephant Toothpaste Reaction',
        type: 'toothpaste_reaction',
        description: 'Perform the foamy science experiment safely in our virtual lab with colorful dish soap, peroxide, and yeast!',
        instructions: [
          'Add warm water and yeast to the mixing beaker.',
          'Add dish soap and blue food coloring into the reaction flask.',
          'Click POUR CATALYST and observe the foamy eruption!'
        ],
        safetyAlert: 'In a real classroom lab, adult supervision is mandatory when using hydrogen peroxide!',
        xpReward: 25
      },
      {
        id: 'act-4-claw-game',
        chapterId: 'ch-4-stem-projects',
        title: 'DIY Claw Grabber Mini-Game',
        type: 'claw_grabber',
        description: 'Control the cup-and-straw gripping tool to pick up robotic toys and drop them safely into the prize box!',
        instructions: [
          'Aim the claw above the toy.',
          'Click LOWER CLAW to drop the cup.',
          'Click GRAB & LIFT to pull the straw and pick up the prize!'
        ],
        xpReward: 25
      },
      {
        id: 'act-4-marble-run',
        chapterId: 'ch-4-stem-projects',
        title: 'Activity 3: Cardboard Marble Run',
        type: 'marble_run',
        description: 'From textbook page 36: Connect U-shaped cardboard tracks from START to FINISH and release the rolling marble!',
        instructions: [
          'Align Track 1, Track 2, and Track 3 at downhill angles.',
          'Click RELEASE MARBLE and watch gravity guide it through the continuous path.'
        ],
        xpReward: 20
      }
    ],
    models: [],
    quiz: [
      {
        id: 'q-4-1',
        chapterId: 'ch-4-stem-projects',
        question: 'Why does artificial snow feel cold to the touch?',
        options: [
          'Because it is below freezing temperature',
          'Due to the evaporation of water from the surface',
          'Because it is made of dry ice',
          'Because it has battery cooling'
        ],
        correctAnswer: 1,
        explanation: 'Water slowly evaporates from the swollen polymer crystals, which naturally absorbs heat and feels delightfully cool!'
      },
      {
        id: 'q-4-2',
        chapterId: 'ch-4-stem-projects',
        question: 'Clay is used for:',
        options: ['Making pottery', 'Art', 'Construction', 'All of the above'],
        correctAnswer: 3,
        explanation: 'Clay has been used for centuries across pottery, sculpture, ceramics, and building houses.'
      },
      {
        id: 'q-4-3',
        chapterId: 'ch-4-stem-projects',
        question: 'Are clay and mitti the same?',
        options: ['YES', 'NO'],
        correctAnswer: 0,
        explanation: 'YES! Mitti is the natural Hindi/everyday word for fine soil and clay earth.'
      },
      {
        id: 'q-4-4',
        chapterId: 'ch-4-stem-projects',
        question: 'The DIY claw activity teaches kids about _____ machines.',
        options: ['Hard', 'Simple', 'Steel', 'Computer'],
        correctAnswer: 1,
        explanation: 'The paper claw demonstrates simple machines (linkages and levers) that make gripping possible!'
      },
      {
        id: 'q-4-5',
        chapterId: 'ch-4-stem-projects',
        question: 'How many cups are needed to make a DIY gripping tool?',
        options: ['1 cup', '2 cups', '5 cups', '10 cups'],
        correctAnswer: 1,
        explanation: 'You need exactly 2 cups: one inner cut cup with gripping legs and one outer sliding guide cup.'
      }
    ],
    writtenQuestions: [
      {
        id: 'wq-4-1',
        chapterId: 'ch-4-stem-projects',
        question: 'What is the use of the DIY claw?',
        placeholder: 'What does the tool help us pick up?',
        sampleAnswer: 'The DIY claw is a gripping tool that allows us to grab, hold, and move small objects and prizes.'
      },
      {
        id: 'wq-4-2',
        chapterId: 'ch-4-stem-projects',
        question: 'What can we make using clay powder?',
        placeholder: 'Name two things you can sculpt or build...',
        sampleAnswer: 'We can make pottery, bowls, animal figurines, and craft models by mixing clay powder with water.'
      },
      {
        id: 'wq-4-3',
        chapterId: 'ch-4-stem-projects',
        question: 'Write any three materials needed to make elephant toothpaste.',
        placeholder: 'List three ingredients...',
        sampleAnswer: '1. Warm water, 2. Dry yeast, 3. Dish soap (or hydrogen peroxide).'
      }
    ],
    funFacts: [
      {
        id: 'ff-4-1',
        text: 'Long ago, people used clay to make bowls, pots, and even walls for houses!',
        tag: 'Ancient History'
      },
      {
        id: 'ff-4-2',
        text: 'The elephant toothpaste foam is mostly made of water and trapped oxygen bubbles!',
        tag: 'Chemistry Wonder'
      }
    ]
  },

  // ==================== CHAPTER 5: QUEAKY ====================
  {
    id: 'ch-5-queaky',
    classId: 'class-1',
    number: 5,
    title: 'Queaky',
    tagline: 'Sound detective, closed electric circuits, and musical pencil pianos',
    color: '#8B5CF6',
    iconName: 'Zap',
    lessons: [
      {
        id: 'l-5-1-intro',
        chapterId: 'ch-5-queaky',
        order: 1,
        title: 'What is Blix Queaky?',
        subtitle: 'The musical STEM toy and sound detective',
        summary: 'Queaky is an educational STEM toy designed to help children learn basic engineering and circuitry through sound.',
        keyPoints: [
          'Queaky is a musical sound detective.',
          'It detects when electricity completes a full path.',
          'It lets out a happy musical shout whenever a loop is closed!',
          'Makes learning about circuits playful and interactive.'
        ],
        illustrationType: 'queaky_intro',
        tryItAction: {
          label: 'Wake Up Queaky',
          description: 'Tap Queaky to hear its friendly beep.'
        }
      },
      {
        id: 'l-5-2-closed-circuit',
        chapterId: 'ch-5-queaky',
        order: 2,
        title: 'The Secret of Closed Circuits',
        subtitle: 'Tiny electric train on a continuous track',
        summary: 'Electricity only flows when there is a complete closed loop. When you touch both metal contacts, your body acts like a bridge!',
        keyPoints: [
          'Imagine electricity as a tiny train that can only run on a continuous loop track.',
          'If there is any gap, the train stops and Queaky stays quiet.',
          'When you touch Queaky’s metal ends, your skin completes the circuit!',
          'The musical tone changes based on resistance (how easily electricity flows).'
        ],
        illustrationType: 'closed_circuit',
        tryItAction: {
          label: 'Close the Loop',
          description: 'Hold both metal pads to complete the circuit with your fingertips!'
        }
      },
      {
        id: 'l-5-3-conductive-projects',
        chapterId: 'ch-5-queaky',
        order: 3,
        title: 'Things That Complete the Circuit',
        subtitle: 'Leaves, wet string, fingertips, and pencil graphite',
        summary: 'You can make music with everyday conductive items around your home and garden!',
        keyPoints: [
          'Fingertips: Skin has moisture that conducts electricity.',
          'Plants & Trees: Put one lead in moist soil and touch leaves for varied notes!',
          'Wet String: Water is a great conductor that lets the current flow.',
          'Pencil Graphite: The dark lead in pencils conduct electricity to make a piano!'
        ],
        illustrationType: 'queaky_projects',
        tryItAction: {
          label: 'Touch Plant Leaves',
          description: 'Tap the green leaf to play an earthy synth note.'
        }
      }
    ],
    activities: [
      {
        id: 'act-5-circuit-synth',
        chapterId: 'ch-5-queaky',
        title: 'Virtual Queaky Sound Synthesizer',
        type: 'queaky_synthesizer',
        description: 'Test closed circuits with real Web Audio! Connect Queaky to your Fingertips, a Moist Plant, Wet String, or a Friend’s hand.',
        instructions: [
          'Choose a conductor (Fingertips, Plant Leaf, Water String, Handshake).',
          'Press and hold the probe leads to complete the loop.',
          'Listen to Queaky sing! Notice how different materials change the audio pitch.'
        ],
        xpReward: 25
      },
      {
        id: 'act-5-pencil-piano',
        chapterId: 'ch-5-queaky',
        title: 'Activity 4: Queaky Pencil Piano',
        type: 'queaky_piano',
        description: 'From textbook page 42: Touch dark graphite pencil keys drawn on paper to play musical notes like a real piano keyboard!',
        instructions: [
          'Touch Key 1 (Do), Key 2 (Re), Key 3 (Mi), Key 4 (Fa), Key 5 (Sol).',
          'The graphite in the pencil line acts as a resistor to play different musical pitches!'
        ],
        xpReward: 25
      }
    ],
    models: [],
    quiz: [
      {
        id: 'q-5-1',
        chapterId: 'ch-5-queaky',
        question: 'What can we do with Queaky?',
        options: ['Cry', 'Have Fun and learn science', 'No fun', 'Go to sleep'],
        correctAnswer: 1,
        explanation: 'Queaky lets us have fun making music while discovering how electrical circuits work!'
      },
      {
        id: 'q-5-2',
        chapterId: 'ch-5-queaky',
        question: 'What does Queaky make when it completes an electrical circuit?',
        options: ['Sound or musical shout', 'Light only', 'Smoke', 'Ice'],
        correctAnswer: 0,
        explanation: 'Queaky shouts out a happy musical tone as soon as the circuit loop is completed!'
      },
      {
        id: 'q-5-3',
        chapterId: 'ch-5-queaky',
        question: 'Types of everyday items you can use with Queaky:',
        options: ['Leaves from a plant', 'Fingertips', 'A wet string', 'All of these'],
        correctAnswer: 3,
        explanation: 'All of these items conduct electricity enough to close Queaky’s sensitive circuit!'
      },
      {
        id: 'q-5-4',
        chapterId: 'ch-5-queaky',
        question: 'Queaky works on the principle of a:',
        options: ['Open circuit', 'Closed circuit', 'Broken wire', 'Dead battery'],
        correctAnswer: 1,
        explanation: 'Queaky only activates when there is a complete closed circuit path for electrical current.'
      },
      {
        id: 'q-5-5',
        chapterId: 'ch-5-queaky',
        question: 'Queaky is made with _____ parts.',
        options: ['Durable plastic and metal contacts', 'Cardboard only', 'Glass only', 'Sand'],
        correctAnswer: 0,
        explanation: 'Queaky has a child-safe plastic enclosure with metal touch terminals.'
      }
    ],
    writtenQuestions: [
      {
        id: 'wq-5-1',
        chapterId: 'ch-5-queaky',
        question: 'What is Blix Queaky?',
        placeholder: 'Describe what Queaky is...',
        sampleAnswer: 'Blix Queaky is a fun STEM toy and musical sound detective that teaches how electrical circuits work.'
      },
      {
        id: 'wq-5-2',
        chapterId: 'ch-5-queaky',
        question: 'When does Queaky make a sound?',
        placeholder: 'When does it shout?',
        sampleAnswer: 'Queaky makes a sound the moment the circuit is closed and current can flow through the loop.'
      },
      {
        id: 'wq-5-3',
        chapterId: 'ch-5-queaky',
        question: 'How does your body help Queaky work?',
        placeholder: 'What does your hand act like?',
        sampleAnswer: 'When you touch Queaky, your body acts like a conductive bridge that completes the electrical loop.'
      }
    ],
    funFacts: [
      {
        id: 'ff-5-1',
        text: 'When you touch the Blix Queaky, it makes a sound because your body helps complete the path for electricity!',
        tag: 'Electric Human'
      }
    ]
  }
];

// ==================== GLOSSARY (Textbook pp. 45-46) ====================
export const class1Glossary: GlossaryTerm[] = [
  {
    term: 'LEGO',
    definition: 'Colorful plastic blocks that fit together to make different structures.',
    chapterNumber: 1,
    example: 'Towers, houses, bridges, and giraffes.'
  },
  {
    term: 'LEGO Wall',
    definition: 'A classroom wall where you can build structures using LEGO bricks or blocks.',
    chapterNumber: 1,
    example: 'Baseplates mounted on the wall for collective building.'
  },
  {
    term: 'Studs',
    definition: 'The small round bumps on top of a LEGO brick that slide into bottom tubes.',
    chapterNumber: 1,
    example: 'A 2x4 brick has 8 studs on top.'
  },
  {
    term: 'Shape',
    definition: 'The form or outline of an object, like a circle, square, triangle, or rectangle.',
    chapterNumber: 2,
    example: 'Boundaries defined by lines and curves.'
  },
  {
    term: 'Circle',
    definition: 'A shape that is perfectly round with no corners or sides.',
    chapterNumber: 2,
    example: 'A ball, coin, or rolling wheel.'
  },
  {
    term: 'Square',
    definition: 'A shape with four equal sides and four right angles.',
    chapterNumber: 2,
    example: 'A square window or building block.'
  },
  {
    term: 'Triangle',
    definition: 'A shape with three sides and three angles.',
    chapterNumber: 2,
    example: 'A slice of pizza or 3D pyramid.'
  },
  {
    term: 'Rectangle',
    definition: 'A shape with four sides and four right angles, where opposite sides are equal.',
    chapterNumber: 2,
    example: 'A battery box or a doorway.'
  },
  {
    term: 'Tangram',
    definition: 'An ancient puzzle made of 7 shapes (triangles, square, parallelogram) used to create patterns.',
    chapterNumber: 2,
    example: 'Creating a boat or cat silhouette.'
  },
  {
    term: 'Motor',
    definition: 'A small part that uses electricity to make toys or machines move, walk, or dance.',
    chapterNumber: 3,
    example: 'The electric motor inside a robotic car.'
  },
  {
    term: 'Wheel',
    definition: 'A round object that turns around an axle to help things move easily.',
    chapterNumber: 3,
    example: 'Car wheels and bicycle tires.'
  },
  {
    term: 'Engine',
    definition: 'The "heart" of a machine that provides power and makes it move.',
    chapterNumber: 3,
    example: 'A car engine or airplane jet engine.'
  },
  {
    term: 'Machine',
    definition: 'A tool with moving parts that helps us perform work faster and easier.',
    chapterNumber: 3,
    example: 'A paper craft machine or claw grabber.'
  },
  {
    term: 'Snow Powder',
    definition: 'A superabsorbent polymer (sodium polyacrylate) that expands into fluffy snow when water is added.',
    chapterNumber: 4,
    example: 'Instant snow for indoor snowman building.'
  },
  {
    term: 'Elephant Toothpaste',
    definition: 'A science experiment creating a giant, foamy eruption from the rapid decomposition of hydrogen peroxide.',
    chapterNumber: 4,
    example: 'Warm foamy bubbles caught in a tray.'
  },
  {
    term: 'Exothermic Reaction',
    definition: 'A chemical reaction that releases warmth and heat into its surroundings.',
    chapterNumber: 4,
    example: 'The foam in elephant toothpaste feels warm.'
  },
  {
    term: 'Clay Powder (Kaolin)',
    definition: 'A soft natural material used in pottery, ceramics, art, and modeling.',
    chapterNumber: 4,
    example: 'Mixed with water to sculpt cups and figures.'
  },
  {
    term: 'DIY Claw',
    definition: 'A simple gripping tool made with disposable cups and paper straws to pick things up.',
    chapterNumber: 4,
    example: 'Grabbing small toys like an arcade claw.'
  },
  {
    term: 'Queaky',
    definition: 'A STEM toy that makes musical sounds when a simple electrical circuit is completed.',
    chapterNumber: 5,
    example: 'Blix Queaky sound detective.'
  },
  {
    term: 'Circuit',
    definition: 'A closed path or loop that allows electricity to flow continuously.',
    chapterNumber: 5,
    example: 'A train track with no breaks.'
  },
  {
    term: 'Current',
    definition: 'The flow of electrical charges through wires and conductors.',
    chapterNumber: 5,
    example: 'Electricity moving from battery to motor.'
  },
  {
    term: 'Resistance',
    definition: 'The force that slows down the flow of electricity, changing the tone of sound.',
    chapterNumber: 5,
    example: 'Graphite pencil lines have high resistance.'
  }
];

// ==================== BADGES ====================
export const availableBadges: Badge[] = [
  {
    id: 'badge-lego-builder',
    title: 'LEGO Master Builder',
    description: 'Completed the LEGO Wall chapter and built the 6-step Giraffe!',
    icon: '🧱',
    unlockedAtXp: 100,
    chapterRequirement: 'ch-1-lego-wall'
  },
  {
    id: 'badge-shape-explorer',
    title: 'Shape & Tangram Explorer',
    description: 'Mastered the 7 geometric tans and built the Tangram Cat!',
    icon: '🔺',
    unlockedAtXp: 200,
    chapterRequirement: 'ch-2-tangram'
  },
  {
    id: 'badge-little-engineer',
    title: 'Little Engineer',
    description: 'Powered the kinetic motor and built the Blix rolling cars!',
    icon: '⚙️',
    unlockedAtXp: 320,
    chapterRequirement: 'ch-3-motors-wheels'
  },
  {
    id: 'badge-young-scientist',
    title: 'Young Scientist',
    description: 'Explored instant snow, safe foamy reactions, and the DIY claw!',
    icon: '🧪',
    unlockedAtXp: 440,
    chapterRequirement: 'ch-4-stem-projects'
  },
  {
    id: 'badge-queaky-maestro',
    title: 'Queaky Sound Detective',
    description: 'Closed the electric circuit loop and played the Pencil Piano!',
    icon: '⚡',
    unlockedAtXp: 560,
    chapterRequirement: 'ch-5-queaky'
  },
  {
    id: 'badge-robo-explorer',
    title: 'Junior Robot Explorer',
    description: 'Completed the entire Class 1 Robotics & Innovation journey!',
    icon: '🏆',
    unlockedAtXp: 650
  }
];
