import { Chapter, GlossaryTerm, Badge } from '../../types/curriculum';

export const class2Chapters: Chapter[] = [
  // ==================== CHAPTER 1: LEGO WALL ====================
  {
    id: 'c2-ch-1-lego-wall',
    classId: 'class-2',
    number: 1,
    title: 'LEGO Wall',
    tagline: 'Steps to build a strong LEGO wall, interlocking bricks, and creative projects',
    color: '#3B82F6',
    iconName: 'Blocks',
    lessons: [
      {
        id: 'c2-l-1-1-blocks-structure',
        chapterId: 'c2-ch-1-lego-wall',
        order: 1,
        title: 'What are LEGO Blocks and Structures?',
        subtitle: 'Building by joining parts together',
        summary: 'LEGO blocks are small, colorful blocks that join together to build amazing models like houses, walls, cars, and towers.',
        keyPoints: [
          'A structure is something made by joining parts together.',
          'With LEGO, we can build simple poles, strong walls, towers, and bridges.',
          'Playing with LEGO is fun and helps our brains think, imagine, and learn.'
        ],
        illustrationType: 'lego_wall_intro',
        tryItAction: {
          label: 'Test Block Snapping',
          description: 'Click to see how colorful blocks fit together to create a structure!'
        }
      },
      {
        id: 'c2-l-1-2-four-steps',
        chapterId: 'c2-ch-1-lego-wall',
        order: 2,
        title: '4 Steps to Build a Strong LEGO Wall',
        subtitle: 'Base plate, first row, stacking, and brick interlocking',
        summary: 'Follow the 4 official steps to make a wall that stands tall and never falls over.',
        keyPoints: [
          'Step 1: Take a Base Plate — Place the flat LEGO base on the table as a steady foundation.',
          'Step 2: Place the First Row — Fix LEGO blocks in a neat straight line on the base.',
          'Step 3: Stack More Blocks — Place blocks one above the other neatly layer by layer.',
          'Step 4: Make It Strong — Arrange blocks like real bricks (overlapping joints) so the wall does not fall!'
        ],
        illustrationType: 'lego_wall_steps',
        tryItAction: {
          label: 'Practice 4 Steps',
          description: 'Tap each step to see the wall rise from the base plate!'
        }
      },
      {
        id: 'c2-l-1-3-projects',
        chapterId: 'c2-ch-1-lego-wall',
        order: 3,
        title: 'Exciting LEGO Projects',
        subtitle: 'Cars, houses, robots, towers, and bridges',
        summary: 'A LEGO project is something we create using our own ideas and imagination.',
        keyPoints: [
          'LEGO Car: Add wheels and chassis to make a speedy rolling vehicle.',
          'LEGO House: Build walls, a door, and a cozy roof.',
          'LEGO Robot: Create arms, legs, and antennas for your mechanical buddy.',
          'LEGO Tower & Bridge: Test balance and make sure the foundation is super strong.'
        ],
        illustrationType: 'lego_wall_projects',
        tryItAction: {
          label: 'Inspect Projects',
          description: 'Explore the different models you can build with LEGO.'
        }
      },
      {
        id: 'c2-l-1-4-benefits',
        chapterId: 'c2-ch-1-lego-wall',
        order: 4,
        title: 'Why Building with LEGO is Good for Us',
        subtitle: 'Problem solving, teamwork, balance, and sequencing',
        summary: 'When we build structures using LEGO, we grow smarter and learn how real engineers work.',
        keyPoints: [
          'We learn problem-solving and teamwork with our friends.',
          'We learn balance so tall buildings stay standing.',
          'We learn sequencing: doing things step by step in the right order.',
          'We learn to build carefully and use our creative imagination.'
        ],
        illustrationType: 'lego_benefits',
        tryItAction: {
          label: 'Discover Skills',
          description: 'See the superpowers you gain when building with blocks!'
        }
      }
    ],
    activities: [
      {
        id: 'c2-act-1-lego-wall-builder',
        chapterId: 'c2-ch-1-lego-wall',
        title: 'Interactive LEGO Wall Builder',
        type: 'lego_wall_builder',
        description: 'Pick a base plate, place the first row, and interlock the bricks to build a strong wall that can withstand the shake test!',
        materialsNeeded: ['LEGO Base Plate', '2x4 Bricks', '2x2 Bricks', 'Foundation Plate'],
        instructions: [
          'Lay down the wide green base plate flat on the table.',
          'Snap the bottom row of bricks firmly across the plate.',
          'Stagger the next row across the seam so two bricks lock together.',
          'Press the test button to check wall strength!'
        ],
        xpReward: 30
      }
    ],
    models: [],
    quiz: [
      {
        id: 'c2-q-1-1',
        chapterId: 'c2-ch-1-lego-wall',
        question: 'What are LEGO blocks used for?',
        options: ['Eating', 'Writing', 'Building models', 'Painting'],
        correctAnswer: 2,
        explanation: 'LEGO blocks are colorful plastic bricks designed for building structures and models!'
      },
      {
        id: 'c2-q-1-2',
        chapterId: 'c2-ch-1-lego-wall',
        question: 'What should we use first to build a LEGO wall?',
        options: ['Wheels', 'Roof', 'Base plate', 'Door'],
        correctAnswer: 2,
        explanation: 'Step 1 is taking a flat Base Plate on the table as a steady foundation.'
      },
      {
        id: 'c2-q-1-3',
        chapterId: 'c2-ch-1-lego-wall',
        question: 'Why should LEGO blocks be arranged like bricks?',
        options: ['To look colorful', 'To make it soft', 'To make it strong', 'To break easily'],
        correctAnswer: 2,
        explanation: 'Staggering blocks like bricks locks them together tightly so the wall does not fall!'
      },
      {
        id: 'c2-q-1-4',
        chapterId: 'c2-ch-1-lego-wall',
        question: 'LEGO helps children to improve:',
        options: ['Sleeping', 'Imagination', 'Watching TV', 'Eating'],
        correctAnswer: 1,
        explanation: 'Building with LEGO exercises our imagination, creativity, and problem-solving skills.'
      },
      {
        id: 'c2-q-1-5',
        chapterId: 'c2-ch-1-lego-wall',
        question: 'How many wheels does a LEGO car usually have?',
        options: ['Two', 'Four', 'Three', 'Five'],
        correctAnswer: 1,
        explanation: 'A classic car has four wheels to roll smoothly and keep balanced!'
      }
    ],
    writtenQuestions: [
      {
        id: 'c2-wq-1-1',
        chapterId: 'c2-ch-1-lego-wall',
        question: 'What are LEGO blocks?',
        placeholder: 'Write 2-3 lines about what LEGO blocks are...',
        sampleAnswer: 'LEGO blocks are small, colorful plastic blocks that can be joined together to build different models like houses, walls, cars, and towers.'
      },
      {
        id: 'c2-wq-1-2',
        chapterId: 'c2-ch-1-lego-wall',
        question: 'What is a LEGO project?',
        placeholder: 'Write 2-3 lines about a LEGO project...',
        sampleAnswer: 'A LEGO project is something we make using our own ideas, such as a LEGO car, house, robot, or bridge.'
      },
      {
        id: 'c2-wq-1-3',
        chapterId: 'c2-ch-1-lego-wall',
        question: 'Why is building with LEGO good for children?',
        placeholder: 'Explain the benefits of building with LEGO...',
        sampleAnswer: 'Building with LEGO helps children develop problem-solving skills, teamwork, balance, sequencing, and creative imagination while having fun.'
      }
    ],
    funFacts: [
      {
        id: 'c2-ff-1-1',
        text: 'LEGO bricks made today can still fit perfectly with LEGO bricks made more than 60 years ago! They have never changed their precision lock!'
      }
    ]
  },

  // ==================== CHAPTER 2: SHAPES WITH TANGRAM ====================
  {
    id: 'c2-ch-2-tangram',
    classId: 'class-2',
    number: 2,
    title: 'Shapes with Tangram',
    tagline: 'Symmetry, 7 geometric tans, puzzle patterns, and the Tangram Cat',
    color: '#8B5CF6',
    iconName: 'Shapes',
    lessons: [
      {
        id: 'c2-l-2-1-symmetry',
        chapterId: 'c2-ch-2-tangram',
        order: 1,
        title: 'Symmetry with Tangrams',
        subtitle: 'Both sides look identical along the line of symmetry',
        summary: 'Symmetry means both sides look the same. If we fold a shape down the middle and both sides match, it is symmetrical.',
        keyPoints: [
          'Symmetry means the left side and the right side are equal.',
          'The line down the center is called the line of symmetry.',
          'A tangram butterfly design shows perfect symmetry because its wings match exactly.'
        ],
        illustrationType: 'tangram_symmetry',
        tryItAction: {
          label: 'Fold the Butterfly',
          description: 'Tap to fold the wings in half and check if both sides match!'
        }
      },
      {
        id: 'c2-l-2-2-solving-puzzles',
        chapterId: 'c2-ch-2-tangram',
        order: 2,
        title: 'Solving Tangram Puzzles & Patterns',
        subtitle: 'The 7 tans: triangles, square, and parallelogram',
        summary: 'A tangram puzzle uses 7 geometric shapes called tans to form pictures without overlapping or leaving gaps.',
        keyPoints: [
          'There are 7 pieces in every set: 2 large triangles, 1 medium triangle, 2 small triangles, 1 square, and 1 parallelogram.',
          'By repeating pieces and changing colors or positions, we make beautiful repeating patterns.',
          'Tangram puzzles train our brain to think in shapes and solve problems.'
        ],
        illustrationType: 'tangram_puzzle',
        tryItAction: {
          label: 'Count the 7 Tans',
          description: 'Click each piece to see its name and geometry!'
        }
      },
      {
        id: 'c2-l-2-3-tangram-cat',
        chapterId: 'c2-ch-2-tangram',
        order: 3,
        title: 'Make an Object: The Tangram Cat',
        subtitle: 'Step-by-step assembly using all 7 pieces',
        summary: 'Learn how to arrange the seven pieces step by step to create a cute sitting cat.',
        keyPoints: [
          'Step 1: Make the body using the large triangles.',
          'Step 2: Add the parallelogram for the neck/tail.',
          'Step 3: Add the small triangles to make pointed cat ears.',
          'Step 4: Put the medium triangle and square for the face.'
        ],
        illustrationType: 'tangram_cat',
        tryItAction: {
          label: 'Assemble the Cat',
          description: 'Slide pieces into place to finish the Tangram Cat!'
        }
      }
    ],
    activities: [
      {
        id: 'c2-act-2-cat-puzzle',
        chapterId: 'c2-ch-2-tangram',
        title: 'Tangram Cat & Symmetry Puzzle',
        type: 'tangram_cat_puzzle',
        description: 'Drag all 7 colored tangram pieces into the cat silhouette and test symmetrical butterfly wings!',
        materialsNeeded: ['7 Tangram Tans (Wood or Plastic)'],
        instructions: [
          'Identify the 2 big triangles, 1 medium triangle, 2 small triangles, 1 square, and 1 parallelogram.',
          'Position the head and pointy ears on top.',
          'Place the triangles to form the resting body and curled tail.',
          'Check that no pieces overlap!'
        ],
        xpReward: 35
      },
      {
        id: 'c2-act-2-circuit-matcher',
        chapterId: 'c2-ch-2-tangram',
        title: 'Activity-1: Draw a Robot Circuit',
        type: 'circuit_matcher',
        description: 'From Textbook Page 16: Connect the Arduino UNO, DC Motor, Wheels, Servo Motor, and Ultrasonic Sensor to build a smart robot circuit!',
        materialsNeeded: ['Arduino UNO', 'DC Motor', 'Robot Wheels', 'Servo Motor', 'HC-SR04 Ultrasonic Sensor'],
        instructions: [
          'Place the Arduino UNO microcontroller in the center.',
          'Connect the Servo Motor for precise angle turning.',
          'Wire the DC Motors to power the wheels for forward movement.',
          'Attach the Ultrasonic Sensor like robot eyes to detect obstacles!'
        ],
        xpReward: 40
      }
    ],
    models: [],
    quiz: [
      {
        id: 'c2-q-2-1',
        chapterId: 'c2-ch-2-tangram',
        question: 'What does symmetry mean?',
        options: ['Both sides are different', 'Only one side is big', 'Shape is broken', 'Both sides look the same'],
        correctAnswer: 3,
        explanation: 'Symmetry means both the left side and the right side look exactly the same when split down the middle.'
      },
      {
        id: 'c2-q-2-2',
        chapterId: 'c2-ch-2-tangram',
        question: 'How many pieces are there in a tangram set?',
        options: ['Five', 'Seven', 'Six', 'Eight'],
        correctAnswer: 1,
        explanation: 'A traditional tangram set contains exactly 7 geometric pieces (tans).'
      },
      {
        id: 'c2-q-2-3',
        chapterId: 'c2-ch-2-tangram',
        question: 'A tangram butterfly with equal left and right sides shows:',
        options: ['Pattern', 'Color', 'Symmetry', 'Size'],
        correctAnswer: 2,
        explanation: 'When both wings match identically across the center fold, it demonstrates symmetry!'
      },
      {
        id: 'c2-q-2-4',
        chapterId: 'c2-ch-2-tangram',
        question: 'Which object can be made using tangrams?',
        options: ['Ball', 'Water', 'Animal', 'Air'],
        correctAnswer: 2,
        explanation: 'Tangram pieces can be combined into animals like cats, rabbits, camels, and birds!'
      },
      {
        id: 'c2-q-2-5',
        chapterId: 'c2-ch-2-tangram',
        question: 'Tangram activities improve:',
        options: ['Sleeping habits', 'Running speed', 'Problem-solving skills', 'Loud talking'],
        correctAnswer: 2,
        explanation: 'Solving tangram puzzles improves spatial reasoning and problem-solving skills.'
      }
    ],
    writtenQuestions: [
      {
        id: 'c2-wq-2-1',
        chapterId: 'c2-ch-2-tangram',
        question: 'What is a tangram puzzle?',
        placeholder: 'Explain what a tangram puzzle is...',
        sampleAnswer: 'A tangram puzzle is an ancient puzzle made by joining seven geometric shapes together without overlapping to form different pictures of animals, objects, and people.'
      },
      {
        id: 'c2-wq-2-2',
        chapterId: 'c2-ch-2-tangram',
        question: 'How do tangrams help students learn?',
        placeholder: 'Describe how tangrams help children learn...',
        sampleAnswer: 'Tangrams help students understand geometric shapes, develop spatial thinking, recognize patterns and symmetry, and boost creative problem-solving.'
      },
      {
        id: 'c2-wq-2-3',
        chapterId: 'c2-ch-2-tangram',
        question: 'What is symmetry?',
        placeholder: 'Define symmetry in simple words...',
        sampleAnswer: 'Symmetry means both sides look the same. When a shape is folded in the middle and both halves match perfectly, it is symmetrical.'
      }
    ],
    funFacts: [
      {
        id: 'c2-ff-2-1',
        text: 'The tangram puzzle was invented in China more than 1,000 years ago and is still loved and played by children all over the world!'
      }
    ]
  },

  // ==================== CHAPTER 3: BATTERY ====================
  {
    id: 'c2-ch-3-battery',
    classId: 'class-2',
    number: 3,
    title: 'Battery',
    tagline: 'Power sources, dry cells, rechargeable batteries, and Blix robotics chassis with suspension',
    color: '#10B981',
    iconName: 'Zap',
    lessons: [
      {
        id: 'c2-l-3-1-what-is-battery',
        chapterId: 'c2-ch-3-battery',
        order: 1,
        title: 'What is a Battery?',
        subtitle: 'The energy power source for machines',
        summary: 'A battery is a power source that gives energy to devices so they can work and move.',
        keyPoints: [
          'A battery is a portable power source that stores electrical energy.',
          'In a battery car, the battery sends power to the motor, which turns the wheels.',
          'Without a battery, an electric toy car cannot move at all.'
        ],
        illustrationType: 'battery_intro',
        tryItAction: {
          label: 'Turn on Battery Power',
          description: 'Connect the battery to see the motor spin the wheels!'
        }
      },
      {
        id: 'c2-l-3-2-battery-types',
        chapterId: 'c2-ch-3-battery',
        order: 2,
        title: 'Types of Batteries',
        subtitle: 'Dry cells, rechargeable batteries, and car batteries',
        summary: 'Different devices need different kinds of batteries depending on their size and power.',
        keyPoints: [
          'Dry Cell Battery: Small in size, 1.5V, commonly used in TV remotes, flashlights, and clocks.',
          'Rechargeable Battery: Can be recharged again and again using electricity; used in phones and toy cars.',
          'Car Battery: Big and heavy battery used to start real vehicles on the road.'
        ],
        illustrationType: 'battery_types',
        tryItAction: {
          label: 'Compare Batteries',
          description: 'Tap each battery type to see where it is used.'
        }
      },
      {
        id: 'c2-l-3-3-uses',
        chapterId: 'c2-ch-3-battery',
        order: 3,
        title: 'Everyday Uses of Batteries',
        subtitle: 'From toy cars to torches and robot brains',
        summary: 'Batteries are everywhere around us, quietly powering our favorite gadgets.',
        keyPoints: [
          'Toy Cars: Batteries drive DC motors to zoom across the floor.',
          'Torches (Flashlights): Batteries light up bulbs in the dark.',
          'Wall Clocks: Keep hands ticking for months on a single AA dry cell.',
          'Mobile Phones & Tablets: Use powerful rechargeable lithium batteries.'
        ],
        illustrationType: 'battery_uses',
        tryItAction: {
          label: 'Test Battery Charge',
          description: 'Compare a fully charged battery with a weak battery!'
        }
      }
    ],
    activities: [
      {
        id: 'c2-act-3-robot-connector',
        chapterId: 'c2-ch-3-battery',
        title: 'Activity-2: Connect the Robot Parts',
        type: 'circuit_matcher',
        description: 'From Textbook Page 30: Wire the Head (sensor brain), Hand (servo gripper), and Leg (drive motor) to the central battery power pack!',
        materialsNeeded: ['Robot Head', 'Robot Hand', 'Robot Leg', 'Battery Pack', 'Connecting Wires'],
        instructions: [
          'Connect the positive (+) and negative (-) wires from the battery pack.',
          'Plug power into the robot head sensor.',
          'Link the motor circuit to the robot legs.',
          'Attach the hand gripper to the servo power line!'
        ],
        xpReward: 35
      }
    ],
    models: [
      {
        id: 'c2-mod-1-cruiser',
        chapterId: 'c2-ch-3-battery',
        title: 'Model-1: 4-Wheel Blix Cruiser',
        subtitle: 'Sturdy 4-wheel chassis with spoiler and steering wheel',
        description: 'From Textbook Pages 23-24: Build a classic 4-wheel cruiser with chassis plates and sleek spoiler.',
        parts: [
          { name: 'CL2 Connector', count: 4, color: '#3B82F6' },
          { name: 'P3 Plate', count: 5, color: '#EF4444' },
          { name: 'CT3 Connector', count: 6, color: '#10B981' },
          { name: 'P5 Plate', count: 4, color: '#F59E0B' },
          { name: 'CT2 Connector', count: 6, color: '#6366F1' },
          { name: 'P11 Long Plate', count: 3, color: '#EC4899' },
          { name: 'CH2 Connector', count: 5, color: '#8B5CF6' },
          { name: 'Suspension Piece', count: 1, color: '#06B6D4' },
          { name: 'Spoiler', count: 1, color: '#E11D48' },
          { name: 'Steering Wheel', count: 1, color: '#1E293B' },
          { name: 'Mudguard Left & Right', count: 2, color: '#64748B' },
          { name: 'Wheels & Shaft SH60', count: 4, color: '#0F172A' }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Take CL2 (1 pc), P3 (4 pcs), CT3 (4 pcs), and P5 (2 pcs). Connect them to build the bottom chassis base.',
            partsUsed: ['CL2', 'P3', 'CT3', 'P5'],
            tip: 'Ensure the plate holes align squarely before clipping.'
          },
          {
            stepNumber: 2,
            instruction: 'Add P5 (1 pc) and CT2 (2 pcs) along the center spine to strengthen the body.',
            partsUsed: ['P5', 'CT2']
          },
          {
            stepNumber: 3,
            instruction: 'Assemble CT2 (4 pcs), CT3 (2 pcs), P11 (3 pcs), P5 (1 pc), CH2 (4 pcs), and CL2 (2 pcs). Fit the 1 Suspension piece onto P5 before attaching it to the model.',
            partsUsed: ['CT2', 'CT3', 'P11', 'P5', 'Suspension', 'CH2', 'CL2'],
            tip: 'Important: Fit the suspension piece securely so it absorbs road shock!'
          },
          {
            stepNumber: 4,
            instruction: 'Mount the Steering Wheel (1 pc), Spoiler (1 pc), P3 (1 pc), CH2 (1 pc), and CL2 (1 pc) on top for aerodynamics.',
            partsUsed: ['Steering Wheel', 'Spoiler', 'P3', 'CH2', 'CL2']
          },
          {
            stepNumber: 5,
            instruction: 'Slide the SH60 shaft through the chassis, attach the Left and Right Mudguards, and fix all Wheels firmly.',
            partsUsed: ['Wheels', 'Mudguards', 'SH60 Shaft', 'TWI']
          }
        ],
        xpReward: 40
      },
      {
        id: 'c2-mod-2-suspension-rover',
        chapterId: 'c2-ch-3-battery',
        title: 'Model-2: Off-Roader with Dual Suspension',
        subtitle: 'Dual suspension springs that cushion rough bumps',
        description: 'From Textbook Pages 25-26: Learn how real off-road robots absorb shocks using twin suspension units.',
        parts: [
          { name: 'CT2 Connector', count: 5, color: '#6366F1' },
          { name: 'CT3 Connector', count: 6, color: '#10B981' },
          { name: 'P5 Plate', count: 4, color: '#F59E0B' },
          { name: 'CH2 Connector', count: 1, color: '#8B5CF6' },
          { name: 'SH60 Shaft', count: 1, color: '#64748B' },
          { name: 'P11 Long Plate', count: 1, color: '#EC4899' },
          { name: 'P3 Plate', count: 4, color: '#EF4444' },
          { name: 'CL2 Connector', count: 5, color: '#3B82F6' },
          { name: 'Suspension Units', count: 2, color: '#06B6D4' },
          { name: 'Steering Wheel', count: 1, color: '#1E293B' },
          { name: 'Mudguards & Wheels', count: 5, color: '#0F172A' },
          { name: 'SH100 Shaft', count: 1, color: '#475569' }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Take CT2 (1 pc) and CT3 (6 pcs) to make the reinforced cross-frame.',
            partsUsed: ['CT2', 'CT3']
          },
          {
            stepNumber: 2,
            instruction: 'Attach P5 (2 pcs), CT2 (4 pcs), and CH2 (1 pc) to create the heavy-duty lower chassis.',
            partsUsed: ['P5', 'CT2', 'CH2']
          },
          {
            stepNumber: 3,
            instruction: 'Add SH60 shaft, P11 (1 pc), P3 (4 pcs), CL2 (4 pcs), and TWI (2 pcs) along the sides.',
            partsUsed: ['SH60', 'P11', 'P3', 'CL2', 'TWI']
          },
          {
            stepNumber: 4,
            instruction: 'Mount 2 Suspension units onto P5 (2 pcs), clip CL2 (1 pc), and install the driver Steering Wheel.',
            partsUsed: ['P5', 'Suspension (2 pcs)', 'CL2', 'Steering Wheel'],
            tip: 'Test pushing down on the suspension — feel it spring back!'
          },
          {
            stepNumber: 5,
            instruction: 'Insert the long SH100 shaft, attach Left & Right Mudguards, and lock the Wheels tightly with TWI locks.',
            partsUsed: ['Mudguards', 'Wheels', 'SH100', 'TWI']
          }
        ],
        xpReward: 45
      },
      {
        id: 'c2-mod-3-trike',
        chapterId: 'c2-ch-3-battery',
        title: 'Model-3: Robo-Transport Trike',
        subtitle: '6-step 3-wheel heavy transport model',
        description: 'From Textbook Pages 27-29: Advanced multi-link transport rover with rear stabilizer spoiler and twin suspension.',
        parts: [
          { name: 'P5 Plate', count: 6, color: '#F59E0B' },
          { name: 'CT3 Connector', count: 9, color: '#10B981' },
          { name: 'CL2 Connector', count: 4, color: '#3B82F6' },
          { name: 'CT2 Connector', count: 2, color: '#6366F1' },
          { name: 'CH2 Connector', count: 5, color: '#8B5CF6' },
          { name: 'P3 Plate', count: 1, color: '#EF4444' },
          { name: 'P11 Long Plate', count: 2, color: '#EC4899' },
          { name: 'Suspension Units', count: 2, color: '#06B6D4' },
          { name: 'Steering Wheel', count: 1, color: '#1E293B' },
          { name: 'Spoiler', count: 1, color: '#E11D48' },
          { name: 'Wheels (4 pcs)', count: 4, color: '#0F172A' }
        ],
        steps: [
          {
            stepNumber: 1,
            instruction: 'Assemble P5 (2 pcs), CT3 (3 pcs), and CL2 (1 pc) for the front wheel mount.',
            partsUsed: ['P5', 'CT3', 'CL2']
          },
          {
            stepNumber: 2,
            instruction: 'Extend the main frame using P5 (2 pcs) and CT3 (4 pcs).',
            partsUsed: ['P5', 'CT3']
          },
          {
            stepNumber: 3,
            instruction: 'Lock the mid-section with P5 (2 pcs), CT2 (2 pcs), CH2 (2 pcs), and CL2 (2 pcs).',
            partsUsed: ['P5', 'CT2', 'CH2', 'CL2']
          },
          {
            stepNumber: 4,
            instruction: 'Install the cockpit frame with P3 (1 pc), P11 (2 pcs), CT3 (2 pcs), TWI (2 pcs), and CQ connectors.',
            partsUsed: ['P3', 'P11', 'CT3', 'TWI', 'CQ']
          },
          {
            stepNumber: 5,
            instruction: 'Add CH2 (3 pcs), CL2 (1 pc), Steering Wheel, 2 Suspension units, and twin SH100 shafts.',
            partsUsed: ['CH2', 'CL2', 'Steering Wheel', 'Suspension', 'SH100']
          },
          {
            stepNumber: 6,
            instruction: 'Clip the Mudguards, install the rear high-downforce Spoiler, and fit all 4 Wheels.',
            partsUsed: ['Mudguards', 'Spoiler', 'Wheels']
          }
        ],
        xpReward: 50
      }
    ],
    quiz: [
      {
        id: 'c2-q-3-1',
        chapterId: 'c2-ch-3-battery',
        question: 'What is a battery?',
        options: ['A toy', 'A wheel', 'A power source', 'A wire'],
        correctAnswer: 2,
        explanation: 'A battery is a power source that stores electrical energy to run devices.'
      },
      {
        id: 'c2-q-3-2',
        chapterId: 'c2-ch-3-battery',
        question: 'What does a battery give to devices?',
        options: ['Water', 'Energy', 'Food', 'Air'],
        correctAnswer: 1,
        explanation: 'A battery gives electrical energy so motors, lights, and chips can work.'
      },
      {
        id: 'c2-q-3-3',
        chapterId: 'c2-ch-3-battery',
        question: 'Which battery is used in real cars?',
        options: ['Toy battery', 'Rechargeable dry cell', 'Dry cell', 'Car battery'],
        correctAnswer: 3,
        explanation: 'Real cars use a big, powerful Car Battery to start the engine and power the lights.'
      },
      {
        id: 'c2-q-3-4',
        chapterId: 'c2-ch-3-battery',
        question: 'Which of these uses a battery?',
        options: ['Book', 'Table', 'Torch', 'Chalk'],
        correctAnswer: 2,
        explanation: 'A torch (flashlight) needs a battery to light up its bulb in the dark!'
      },
      {
        id: 'c2-q-3-5',
        chapterId: 'c2-ch-3-battery',
        question: 'What happens without a battery in a battery car?',
        options: ['Car flies', 'Car cannot move', 'Car moves fast', 'Car becomes bigger'],
        correctAnswer: 1,
        explanation: 'Without a battery, there is no energy for the motor, so the car cannot move!'
      }
    ],
    writtenQuestions: [
      {
        id: 'c2-wq-3-1',
        chapterId: 'c2-ch-3-battery',
        question: 'What is a battery?',
        placeholder: 'Write 2-3 lines about what a battery is...',
        sampleAnswer: 'A battery is a power source that gives energy to devices so they can work. In a toy car, it supplies electricity to the motor to turn the wheels.'
      },
      {
        id: 'c2-wq-3-2',
        chapterId: 'c2-ch-3-battery',
        question: 'Name two types of batteries.',
        placeholder: 'Name two types and write where they are used...',
        sampleAnswer: 'Two types are: 1. Dry Cell Battery (used in small toys and remotes) and 2. Rechargeable Battery (can be charged again and used in phones and battery cars).'
      },
      {
        id: 'c2-wq-3-3',
        chapterId: 'c2-ch-3-battery',
        question: 'How does a battery car move?',
        placeholder: 'Explain how power reaches the wheels...',
        sampleAnswer: 'The battery gives electrical energy to the motor. The motor spins its shaft, which turns the axles and wheels, moving the car forward.'
      }
    ],
    funFacts: [
      {
        id: 'c2-ff-3-1',
        text: 'A fully charged battery makes toy cars run faster and longer, while a weak battery makes them slow!'
      }
    ]
  },

  // ==================== CHAPTER 4: STEM PROJECTS - II ====================
  {
    id: 'c2-ch-4-stem-projects',
    classId: 'class-2',
    number: 4,
    title: 'STEM Projects - II',
    tagline: 'Volcano Eruption, Marble Run, Solar Plane, and Hydraulic Lift',
    color: '#F59E0B',
    iconName: 'FlaskConical',
    lessons: [
      {
        id: 'c2-l-4-1-volcano',
        chapterId: 'c2-ch-4-stem-projects',
        order: 1,
        title: 'Project 1: Volcano Eruption',
        subtitle: 'Magma, lava, and foaming chemical reactions',
        summary: 'A volcano is a mountain that erupts hot melted rock called lava when deep underground magma bubbles up.',
        keyPoints: [
          'Inside the Earth, hot liquid melted rock is called magma.',
          'When magma erupts out onto the surface, it is called lava.',
          'DIY Experiment: Mixing baking soda, vinegar, dish soap, and red food coloring creates bubbly foam that looks just like red-hot lava!'
        ],
        illustrationType: 'volcano_intro',
        tryItAction: {
          label: 'Erupt the Volcano',
          description: 'Pour vinegar into baking soda to trigger the foaming red lava!'
        }
      },
      {
        id: 'c2-l-4-2-marble-run',
        chapterId: 'c2-ch-4-stem-projects',
        order: 2,
        title: 'Project 2: Marble Run',
        subtitle: 'Gravity, speed, sloping paths, and loops',
        summary: 'A marble run is a track where a marble rolls through ramps and cups pulled down by the invisible force of gravity.',
        keyPoints: [
          'Gravity is the natural force that pulls objects downwards toward the ground.',
          'The steeper the slope of the track, the faster the marble moves!',
          'Marbles rolling super fast can even go upside-down through loops without falling off.'
        ],
        illustrationType: 'marble_run_intro',
        tryItAction: {
          label: 'Change Slope Angle',
          description: 'Tilt the track higher and watch the marble race at high speed!'
        }
      },
      {
        id: 'c2-l-4-3-solar-plane',
        chapterId: 'c2-ch-4-stem-projects',
        order: 3,
        title: 'Project 3: Solar Plane',
        subtitle: 'Sunlight converted into clean flying power',
        summary: 'A solar plane has photovoltaic solar panels on its wings that turn sunlight directly into electricity to spin its propellers.',
        keyPoints: [
          'No Pollution: Solar planes produce no smoke and cause zero harm to the air.',
          'Quiet Flying: Clean electric motors whisper quietly compared to loud jet engines.',
          'Solar Impulse 2 flew completely around the world using only sunlight and zero fuel!'
        ],
        illustrationType: 'solar_plane_intro',
        tryItAction: {
          label: 'Aim the Sun Beam',
          description: 'Shine sunlight on the wing panels and see the propeller whirl!'
        }
      },
      {
        id: 'c2-l-4-4-hydraulic-lift',
        chapterId: 'c2-ch-4-stem-projects',
        order: 4,
        title: 'Project 4: Hydraulic Lift',
        subtitle: 'Water pressure in syringes lifting heavy cars easily',
        summary: 'Hydraulics uses water or liquid pressure trapped inside tubes to multiply human strength and lift heavy cars.',
        keyPoints: [
          'Water cannot be squished easily, so pushing one syringe piston pushes water through the tube.',
          'The water pressure pushes the second syringe up, lifting a platform with a toy car!',
          'Real car service centers, diggers, and cranes use hydraulic systems every single day.'
        ],
        illustrationType: 'hydraulic_lift_intro',
        tryItAction: {
          label: 'Push the Syringe',
          description: 'Press the water piston to elevate the heavy car platform!'
        }
      }
    ],
    activities: [
      {
        id: 'c2-act-4-volcano-sim',
        chapterId: 'c2-ch-4-stem-projects',
        title: 'Interactive Volcano Lab',
        type: 'volcano_simulator',
        description: 'Measure baking soda, drops of dish soap, red dye, and vinegar into the crater to cause a safe foaming eruption!',
        materialsNeeded: ['Plastic Bottle', 'Baking Soda', 'Vinegar', 'Dish Soap', 'Red Food Color', 'Tray'],
        instructions: [
          'Place the bottle in the center of a spill tray.',
          'Cover the bottle with clay or paper to form the mountain shape.',
          'Add 2 spoons of baking soda, dish soap, and red dye.',
          'Pour vinegar inside and watch foaming red lava bubble over!'
        ],
        xpReward: 35
      },
      {
        id: 'c2-act-4-hydraulic-sim',
        chapterId: 'c2-ch-4-stem-projects',
        title: 'Hydraulic Lift Simulator',
        type: 'hydraulic_simulator',
        description: 'Connect two syringes with a water tube to lift heavy loads and see how liquid pressure works.',
        materialsNeeded: ['2 Plastic Syringes (without needles)', 'Plastic Water Tube', 'Water', 'Platform Stand', 'Toy Car'],
        instructions: [
          'Fill the master syringe with colored water.',
          'Connect the plastic tube between both syringes with no air bubbles.',
          'Mount the slave syringe under the scissor lifting platform.',
          'Push the master plunger to smoothly raise the car into the air!'
        ],
        xpReward: 35
      },
      {
        id: 'c2-act-4-marble-activity',
        chapterId: 'c2-ch-4-stem-projects',
        title: 'Activity-3: Make a Marble Run',
        type: 'marble_run',
        description: 'From Textbook Page 40: Build a U-shaped track using colorful cardboard paper, paper cups, and tape on the classroom wall!',
        materialsNeeded: ['Colorful Cardboard Paper', 'Paper Cups', 'Marbles', 'Double-sided Tape', 'Scissors'],
        instructions: [
          'Fold cardboard sheets into U-shaped gutters.',
          'Tape each section on the wall with a downward slope.',
          'Place paper cups at turns and landing zones.',
          'Release the marble at START and watch it race to FINISH!'
        ],
        xpReward: 35
      }
    ],
    models: [],
    quiz: [
      {
        id: 'c2-q-4-1',
        chapterId: 'c2-ch-4-stem-projects',
        question: 'What makes the marble move in a marble run?',
        options: ['Wind', 'Magnet', 'Gravity', 'Battery'],
        correctAnswer: 2,
        explanation: 'Gravity is the natural pulling force that draws the marble downward along the sloping ramps.'
      },
      {
        id: 'c2-q-4-2',
        chapterId: 'c2-ch-4-stem-projects',
        question: 'What is a volcano?',
        options: ['A river', 'A building', 'A road', 'A natural mountain that erupts'],
        correctAnswer: 3,
        explanation: 'A volcano is a mountain that erupts and releases hot melted lava from deep inside Earth.'
      },
      {
        id: 'c2-q-4-3',
        chapterId: 'c2-ch-4-stem-projects',
        question: 'What do solar panels do?',
        options: ['Make noise', 'Catch sunlight and turn it into energy', 'Make the plane heavy', 'Stop the plane'],
        correctAnswer: 1,
        explanation: 'Solar panels catch light from the sun and convert it into clean electrical energy!'
      },
      {
        id: 'c2-q-4-4',
        chapterId: 'c2-ch-4-stem-projects',
        question: 'What is a hydraulic lift used for?',
        options: ['To cut paper', 'To make sound', 'To lift heavy objects', 'To give light'],
        correctAnswer: 2,
        explanation: 'Hydraulic lifts use liquid pressure to easily elevate heavy objects like cars in service centers.'
      },
      {
        id: 'c2-q-4-5',
        chapterId: 'c2-ch-4-stem-projects',
        question: 'How is a solar plane powered?',
        options: ['By fuel', 'By sunlight', 'By wind', 'By water'],
        correctAnswer: 1,
        explanation: 'A solar plane is powered completely by sunlight caught on its solar panel wings.'
      }
    ],
    writtenQuestions: [
      {
        id: 'c2-wq-4-1',
        chapterId: 'c2-ch-4-stem-projects',
        question: 'What is a marble run?',
        placeholder: 'Explain what a marble run is...',
        sampleAnswer: 'A marble run is a fun STEM project where a marble rolls through sloping tracks, tubes, and cups pulled downward by gravity.'
      },
      {
        id: 'c2-wq-4-2',
        chapterId: 'c2-ch-4-stem-projects',
        question: 'Why are solar planes eco-friendly?',
        placeholder: 'Explain why solar flight is green...',
        sampleAnswer: 'Solar planes are eco-friendly because they do not burn fossil fuels, create zero harmful smoke or air pollution, and fly quietly using clean sunlight.'
      },
      {
        id: 'c2-wq-4-3',
        chapterId: 'c2-ch-4-stem-projects',
        question: 'Why should the marble path be sloping?',
        placeholder: 'Explain the role of slope and gravity...',
        sampleAnswer: 'The path must slope downwards so gravity can pull the marble forward. The steeper the slope, the faster the marble moves.'
      }
    ],
    funFacts: [
      {
        id: 'c2-ff-4-1',
        text: 'The largest volcano on Earth is Mauna Loa in Hawaii, and it is still active today!'
      },
      {
        id: 'c2-ff-4-2',
        text: 'Solar Impulse 2 flew all the way around the world using only energy from the sun and zero fuel!'
      },
      {
        id: 'c2-ff-4-3',
        text: 'Hydraulic lifts in auto repair shops can lift heavy 2-ton cars easily using water pressure in pistons!'
      }
    ]
  },

  // ==================== CHAPTER 5: QUEAKY - FUN WITH SOUND ====================
  {
    id: 'c2-ch-5-queaky',
    classId: 'class-2',
    number: 5,
    title: 'Queaky - Fun with Sound',
    tagline: 'Sound, electricity, touch, pencil keyboard, and wet string experiments',
    color: '#EC4899',
    iconName: 'Sparkles',
    lessons: [
      {
        id: 'c2-l-5-1-intro-sound',
        chapterId: 'c2-ch-5-queaky',
        order: 1,
        title: 'Introduction to Queaky',
        subtitle: 'Touch, circuits, and sound squeaks',
        summary: 'Queaky is an orange science gadget that makes funny squeaks and musical notes when you close its electric circuit using your touch.',
        keyPoints: [
          'Queaky makes sound when we touch both of its metal contact pads.',
          'Our bodies naturally conduct a safe, tiny amount of electricity that connects the circuit.',
          'Closing the circuit lets electricity flow, and Queaky immediately starts singing!'
        ],
        illustrationType: 'queaky_intro_c2',
        tryItAction: {
          label: 'Touch Queaky',
          description: 'Place two fingers on the sensor pads to hear Queaky squeak!'
        }
      },
      {
        id: 'c2-l-5-2-materials',
        chapterId: 'c2-ch-5-queaky',
        order: 2,
        title: 'Queaky with Different Materials',
        subtitle: 'Exploring conductors and non-conductors',
        summary: 'Different materials let electricity flow in different amounts, changing the pitch and tone Queaky makes.',
        keyPoints: [
          'Conductive Materials: Fingers, water, coins, and fruit let electricity flow easily.',
          'Insulating Materials: Rubber toys, dry paper, and plastic block electricity.',
          'Different materials make different pitches because electricity flows differently through each one.'
        ],
        illustrationType: 'queaky_materials',
        tryItAction: {
          label: 'Test Materials',
          description: 'Touch Queaky with water, coins, leaves, and rubber to hear each sound!'
        }
      },
      {
        id: 'c2-l-5-3-pencil-keyboard',
        chapterId: 'c2-ch-5-queaky',
        order: 3,
        title: 'The Magical Pencil Keyboard',
        subtitle: 'Graphite on paper conducting electricity like a wire',
        summary: 'Pencil lead is made of graphite, which carries electricity! You can draw thick dark lines on paper to create a real working piano keyboard.',
        keyPoints: [
          'Graphite in soft dark pencils conducts electricity just like a tiny metal wire.',
          'Draw thick dark keys on a piece of paper.',
          'You hold one contact on Queaky, and your friend touches the drawn pencil line.',
          'Electricity flows through you, your friend, and the graphite line back into Queaky to play a tune!'
        ],
        illustrationType: 'pencil_keyboard',
        tryItAction: {
          label: 'Play Drawn Piano Keys',
          description: 'Tap the dark graphite keys to play musical notes!'
        }
      },
      {
        id: 'c2-l-5-4-types-projects',
        chapterId: 'c2-ch-5-queaky',
        order: 4,
        title: 'Types of Queaky Projects',
        subtitle: 'Simple toy, musical tones, objects, and art',
        summary: 'Explore 4 wonderful ways to invent with Queaky in the classroom.',
        keyPoints: [
          '1. Simple Queaky Toy: Touch with fingers to make basic squeaks.',
          '2. Musical Queaky: Play musical notes and rhythms.',
          '3. Queaky with Objects: Use water and leaves to learn about conductors.',
          '4. Queaky Art Project: Combine decorated drawings with sounds!'
        ],
        illustrationType: 'queaky_projects',
        tryItAction: {
          label: 'Explore Project Ideas',
          description: 'See the four creative ways to build with sound!'
        }
      }
    ],
    activities: [
      {
        id: 'c2-act-5-pencil-piano',
        chapterId: 'c2-ch-5-queaky',
        title: 'Interactive Pencil Keyboard',
        type: 'queaky_piano',
        description: 'From Textbook Page 44: Play notes by touching graphite-drawn piano keys that complete the circuit through Queaky.',
        materialsNeeded: ['Dark HB/2B Pencil', 'Paper', 'Queaky Unit', 'Connecting Wires'],
        instructions: [
          'Draw 5 thick, dark rectangles on paper using a soft 2B pencil.',
          'Connect the ground lead from Queaky to the bottom line.',
          'Tap each drawn key with your finger.',
          'Hear Queaky play Do, Re, Mi, Fa, Sol!'
        ],
        xpReward: 35
      },
      {
        id: 'c2-act-5-wet-string',
        chapterId: 'c2-ch-5-queaky',
        title: 'Activity-4: Queaky Wet String Piano',
        type: 'wet_string_experiment',
        description: 'From Textbook Page 47: Dip a cotton string in water and slide your fingers along it to change the electrical resistance and pitch!',
        materialsNeeded: ['Cotton String', 'Cup of Water', 'Queaky Unit', 'Alligator Clips'],
        instructions: [
          'Soak the string in water so it is completely wet.',
          'Clip one end of the wet string to Queaky.',
          'Hold the other end in your hand.',
          'Slide your wet finger along the string to bend the musical pitch like a violin!'
        ],
        xpReward: 40
      }
    ],
    models: [],
    quiz: [
      {
        id: 'c2-q-5-1',
        chapterId: 'c2-ch-5-queaky',
        question: 'What happens when we touch Queaky?',
        options: ['It breaks', 'It makes sound', 'It lights up only', 'It stops working'],
        correctAnswer: 1,
        explanation: 'Touching Queaky closes the circuit through your fingers, making it squeak and sing!'
      },
      {
        id: 'c2-q-5-2',
        chapterId: 'c2-ch-5-queaky',
        question: 'When we touch both ends of Queaky, what gets created?',
        options: ['A door', 'A switch', 'An electric path (circuit)', 'A box'],
        correctAnswer: 2,
        explanation: 'Touching both ends closes a complete electrical path (circuit) for electricity to flow.'
      },
      {
        id: 'c2-q-5-3',
        chapterId: 'c2-ch-5-queaky',
        question: 'Which material can be used to touch Queaky and make sound?',
        options: ['Finger', 'Coin', 'Water', 'All of the above'],
        correctAnswer: 3,
        explanation: 'Fingers, metal coins, and water all conduct electricity and can make Queaky sound!'
      },
      {
        id: 'c2-q-5-4',
        chapterId: 'c2-ch-5-queaky',
        question: 'Why do different materials make different sounds with Queaky?',
        options: ['They are colorful', 'Electricity flows differently through them', 'They are big', 'They are heavy'],
        correctAnswer: 1,
        explanation: 'Each material has different electrical resistance, so electricity flows differently through each one.'
      },
      {
        id: 'c2-q-5-5',
        chapterId: 'c2-ch-5-queaky',
        question: 'Which Queaky project lets you create sounds using paper and pencil in a fun way?',
        options: ['Door alarm', 'Paper piano / Pencil keyboard', 'Torch circuit', 'Fan model'],
        correctAnswer: 1,
        explanation: 'A paper piano uses dark graphite pencil lines on paper to create musical touch keys!'
      }
    ],
    writtenQuestions: [
      {
        id: 'c2-wq-5-1',
        chapterId: 'c2-ch-5-queaky',
        question: 'What is Queaky and how does it work?',
        placeholder: 'Explain how Queaky works...',
        sampleAnswer: 'Queaky is an educational sound toy. When you touch its two metal ends, your body conducts a small electric current that completes the circuit, causing Queaky to make sound.'
      },
      {
        id: 'c2-wq-5-2',
        chapterId: 'c2-ch-5-queaky',
        question: 'How can we make music using Queaky?',
        placeholder: 'Describe how you can play musical notes...',
        sampleAnswer: 'We can draw a pencil keyboard on paper with dark graphite lines or use a wet string. Touching different spots changes the circuit and plays different musical notes.'
      },
      {
        id: 'c2-wq-5-3',
        chapterId: 'c2-ch-5-queaky',
        question: 'Why does Queaky sound different with different materials?',
        placeholder: 'Explain electrical conduction simply...',
        sampleAnswer: 'Different materials conduct electricity with different strengths. Materials with high conductivity make higher sounds, while resistant materials produce deeper squeaks.'
      }
    ],
    funFacts: [
      {
        id: 'c2-ff-5-1',
        text: 'Your body can conduct electricity, which is why touching Queaky helps it make sound!'
      },
      {
        id: 'c2-ff-5-2',
        text: 'Pencil graphite is actually a form of pure carbon that conducts electricity like a super thin wire!'
      }
    ]
  }
];

// ==================== OFFICIAL CLASS 2 GLOSSARY (TEXTBOOK PP. 48-50) ====================
export const class2Glossary: GlossaryTerm[] = [
  { term: 'LEGO Blocks', definition: 'Small, colorful blocks used for building models.', chapterNumber: 1, example: 'We used colorful LEGO blocks to build a tall tower.' },
  { term: 'Structure', definition: 'Something made by joining parts together.', chapterNumber: 1, example: 'A bridge or a house is a strong structure.' },
  { term: 'Base Plate', definition: 'A flat LEGO piece used as a foundation.', chapterNumber: 1, example: 'Always lay down the base plate first before building a wall.' },
  { term: 'Project', definition: 'A model made using ideas and materials.', chapterNumber: 1, example: 'Our team built a LEGO car project.' },
  { term: 'Balance', definition: 'Ability to keep something steady without falling.', chapterNumber: 1, example: 'Wide foundations give the tower great balance.' },
  { term: 'Tangram', definition: 'A puzzle made of seven flat geometric shapes.', chapterNumber: 2, example: 'We arranged the seven tangram pieces into a cat.' },
  { term: 'Symmetry', definition: 'When both sides of a shape look the same along a middle fold line.', chapterNumber: 2, example: 'A butterfly with equal left and right wings shows symmetry.' },
  { term: 'Pattern', definition: 'A design that repeats in a certain order.', chapterNumber: 2, example: 'We made a repeating triangle and square pattern.' },
  { term: 'Puzzle', definition: 'A problem or game that needs thinking to solve.', chapterNumber: 2, example: 'Fitting the tans into the silhouette was a fun puzzle.' },
  { term: 'Parallelogram', definition: 'A four-sided shape with opposite sides equal and slanted.', chapterNumber: 2, example: 'One of the seven tangram pieces is a parallelogram.' },
  { term: 'Servo Motor', definition: 'A specialized motor that turns to precise angles to steer or rotate robot parts.', chapterNumber: 2, example: 'The servo motor turns the robot head left and right.' },
  { term: 'Battery', definition: 'A power source that gives energy to devices so they can work.', chapterNumber: 3, example: 'The battery provides power to the car motor.' },
  { term: 'Energy', definition: 'Power needed to make things work and move.', chapterNumber: 3, example: 'The battery stores chemical energy.' },
  { term: 'Motor', definition: 'A mechanical part that spins to turn wheels.', chapterNumber: 3, example: 'The DC motor spins the car axle.' },
  { term: 'Rechargeable', definition: 'A battery that can be recharged with electricity and used again.', chapterNumber: 3, example: 'Mobile phones and electric toy cars use rechargeable batteries.' },
  { term: 'Dry Cell', definition: 'A small, portable 1.5V battery used in toys, torches, and TV remotes.', chapterNumber: 3, example: 'We put two dry cells into the TV remote.' },
  { term: 'Suspension', definition: 'A spring-like mechanism that cushions rough bumps on the road.', chapterNumber: 3, example: 'The Blix Model-2 uses suspension for off-road driving.' },
  { term: 'Volcano', definition: 'A mountain that erupts and releases hot melted rock called lava.', chapterNumber: 4, example: 'Magma comes out of the volcano opening.' },
  { term: 'Eruption', definition: 'When lava, gas, and foam burst out of a volcano.', chapterNumber: 4, example: 'The baking soda and vinegar caused a foamy eruption.' },
  { term: 'Lava', definition: 'Hot melted rock flowing outside a volcano on Earth\'s surface.', chapterNumber: 4, example: 'Red lava flowed down the slopes of the mountain.' },
  { term: 'Chemical Reaction', definition: 'When two substances mix together and change into new substances.', chapterNumber: 4, example: 'Mixing baking soda and vinegar creates bubbles of carbon dioxide.' },
  { term: 'Foam', definition: 'Bubbles formed during a bubbling chemical reaction.', chapterNumber: 4, example: 'Dish soap helps make thick red lava foam.' },
  { term: 'Marble', definition: 'A small, smooth, hard round sphere ball.', chapterNumber: 4, example: 'The glass marble rolled quickly down the U-shaped ramp.' },
  { term: 'Gravity', definition: 'A natural force that pulls objects downward toward the Earth.', chapterNumber: 4, example: 'Gravity pulls the marble down the ramp.' },
  { term: 'Motion', definition: 'The continuous movement of an object from one place to another.', chapterNumber: 4, example: 'The marble is in swift forward motion.' },
  { term: 'Speed', definition: 'How fast an object travels over distance.', chapterNumber: 4, example: 'Steep slopes give the marble greater speed.' },
  { term: 'Direction', definition: 'The path along which something moves.', chapterNumber: 4, example: 'Curved cups change the marble\'s direction.' },
  { term: 'Solar Plane', definition: 'An airplane powered completely by clean sunlight.', chapterNumber: 4, example: 'The solar plane flew without using any petrol fuel.' },
  { term: 'Solar Panels', definition: 'Devices that collect sunlight and turn it directly into electricity.', chapterNumber: 4, example: 'Wings covered in solar panels capture bright sunlight.' },
  { term: 'Pollution', definition: 'Harmful smoke or waste that damages the air and environment.', chapterNumber: 4, example: 'Solar airplanes create zero air pollution.' },
  { term: 'Eco-friendly', definition: 'Safe, clean, and healthy for the natural environment.', chapterNumber: 4, example: 'Solar energy is green and eco-friendly.' },
  { term: 'Hydraulic', definition: 'A mechanical system using liquid pressure to create lifting force.', chapterNumber: 4, example: 'The hydraulic lift raises the heavy car.' },
  { term: 'Syringe', definition: 'A cylinder tool with a piston used to push or pull liquid.', chapterNumber: 4, example: 'Pushing the syringe plunger sends water through the tube.' },
  { term: 'Platform', definition: 'A flat top surface that lifts and holds objects.', chapterNumber: 4, example: 'The platform raised the toy car into the air.' },
  { term: 'Pressure', definition: 'Force applied over a surface or trapped liquid.', chapterNumber: 4, example: 'Water pressure in the tube lifts the second piston.' },
  { term: 'Scissor Lift', definition: 'A lifting mechanism with criss-crossing metal arms.', chapterNumber: 4, example: 'Hydraulic scissor lifts elevate maintenance workers.' },
  { term: 'Queaky', definition: 'An interactive science toy that makes sound using human touch and electricity.', chapterNumber: 5, example: 'Touching Queaky with both thumbs makes it squeak.' },
  { term: 'Sound', definition: 'Vibrations in the air that our ears hear.', chapterNumber: 5, example: 'Queaky produces musical sounds and high-pitched squeaks.' },
  { term: 'Electricity', definition: 'A flow of electric charge that powers lights, computers, and motors.', chapterNumber: 5, example: 'Electricity flows through the closed circuit.' },
  { term: 'Circuit', definition: 'A complete unbroken loop or path for electricity to flow around.', chapterNumber: 5, example: 'Touching Queaky closes the circuit.' },
  { term: 'Conductor', definition: 'A material that easily lets electricity pass through it.', chapterNumber: 5, example: 'Water, metal coins, and human bodies are electrical conductors.' }
];

// ==================== OFFICIAL CLASS 2 BADGES ====================
export const class2Badges: Badge[] = [
  {
    id: 'c2-badge-wall-builder',
    title: 'LEGO Wall Architect',
    description: 'Mastered the 4 official steps to building a rock-solid interlocking LEGO wall!',
    icon: '🧱',
    unlockedAtXp: 80,
    chapterRequirement: 'c2-ch-1-lego-wall'
  },
  {
    id: 'c2-badge-tangram-master',
    title: 'Tangram Shape Wizard',
    description: 'Discovered symmetry and assembled the 7-piece Tangram Cat puzzle!',
    icon: '🐱',
    unlockedAtXp: 160,
    chapterRequirement: 'c2-ch-2-tangram'
  },
  {
    id: 'c2-badge-circuit-master',
    title: 'Servo Circuit Builder',
    description: 'Wired Arduino UNO, Servo Motor, DC Motor, and Ultrasonic Sensor in Activity-1!',
    icon: '⚡',
    unlockedAtXp: 240
  },
  {
    id: 'c2-badge-battery-expert',
    title: 'Energy Detective',
    description: 'Distinguished dry cells, rechargeable batteries, and power sources!',
    icon: '🔋',
    unlockedAtXp: 320,
    chapterRequirement: 'c2-ch-3-battery'
  },
  {
    id: 'c2-badge-suspension-engineer',
    title: 'Suspension Engineer',
    description: 'Constructed Blix Model-2 with dual shock-absorbing suspension springs!',
    icon: '🚗',
    unlockedAtXp: 400
  },
  {
    id: 'c2-badge-volcano-scientist',
    title: 'Volcano Scientist',
    description: 'Triggered a safe foaming chemical eruption with baking soda & vinegar!',
    icon: '🌋',
    unlockedAtXp: 480
  },
  {
    id: 'c2-badge-hydraulic-lifter',
    title: 'Hydraulic Pioneer',
    description: 'Harnessed water pressure inside syringes to elevate heavy vehicles!',
    icon: '💧',
    unlockedAtXp: 560
  },
  {
    id: 'c2-badge-solar-pilot',
    title: 'Solar Flight Hero',
    description: 'Explored clean zero-emission flight like Solar Impulse 2!',
    icon: '☀️',
    unlockedAtXp: 640
  },
  {
    id: 'c2-badge-queaky-maestro',
    title: 'Queaky Sound Maestro',
    description: 'Played musical melodies on pencil graphite and vibrating wet strings!',
    icon: '🎶',
    unlockedAtXp: 720,
    chapterRequirement: 'c2-ch-5-queaky'
  }
];
