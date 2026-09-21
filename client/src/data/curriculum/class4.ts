import { Chapter, GlossaryTerm, Badge } from '../../types/curriculum';

export const class4Chapters: Chapter[] = [
  {
    "id": "c4-ch-1",
    "classId": "class-4",
    "number": 1,
    "title": "Introduction to Robotics",
    "tagline": "Humanoid Robots & Asimov\u2019s Laws of Robotics",
    "color": "#D97706",
    "iconName": "Bot",
    "lessons": [
      {
        "id": "c4-l1-1",
        "chapterId": "c4-ch-1",
        "order": 1,
        "title": "What is a Robot & Robotics",
        "subtitle": "Definition and real-life automated helpers",
        "summary": "A robot is a special machine that can work by itself when we give it instructions. Some robots move, talk, and help at home, like cleaning robots, while others help at work, like machines in factories. The study of robots is called robotics.",
        "keyPoints": [
          "Robotics is the study, engineering, and programming of automated machines.",
          "Robots work automatically when provided with instructions.",
          "Cleaning robots, robotic factory arms, and rovers are real-world robots."
        ],
        "illustrationType": "c4_robot_intro"
      },
      {
        "id": "c4-l1-2",
        "chapterId": "c4-ch-1",
        "order": 2,
        "title": "Humans vs. Humanoid Robots",
        "subtitle": "Anatomy, emotions, learning, and life comparison",
        "summary": "A human is a living organism capable of experiencing real emotions, independent thought, and learning from life. A humanoid robot is designed to resemble humans in appearance and behavior, built with metal, plastic, wires, and programmed computers to operate in human environments like hospitals and workplaces.",
        "keyPoints": [
          "Humans are biological: skin, bones, real feelings, creative thought.",
          "Humanoids are synthetic: metal, wires, motors, computer algorithms.",
          "Robots don't get tired and can work 24/7 without food or sleep."
        ],
        "illustrationType": "c4_humanoid_compare"
      },
      {
        "id": "c4-l1-3",
        "chapterId": "c4-ch-1",
        "order": 3,
        "title": "Isaac Asimov\u2019s Three Laws of Robotics",
        "subtitle": "The 1942 ethical rules for autonomous machines",
        "summary": "Introduced in 1942 by science fiction writer Isaac Asimov, these three ethical laws govern robot behavior: 1. A robot may not injure a human being or, through inaction, allow a human being to come to harm. 2. A robot must obey orders given by human beings, except where such orders conflict with the First Law. 3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws.",
        "keyPoints": [
          "First Law: Never harm a human or allow harm through inaction.",
          "Second Law: Obey humans unless it violates the First Law.",
          "Third Law: Protect self unless it violates First or Second Law."
        ],
        "illustrationType": "c4_asimov_laws"
      }
    ],
    "activities": [
      {
        "id": "c4-act-1",
        "chapterId": "c4-ch-1",
        "title": "Human vs Humanoid Explorer & Asimov Dilemma Lab",
        "type": "c4_activity_humanoid",
        "description": "Analyze human vs humanoid differences and solve interactive robotic ethical dilemmas.",
        "instructions": [
          "Explore the Human vs Humanoid matrix.",
          "Review Asimov's 3 Laws of Robotics.",
          "Solve the 3 ethical dilemma scenarios!"
        ],
        "xpReward": 100
      }
    ],
    "models": [
      {
        "id": "c4-mod-1",
        "chapterId": "c4-ch-1",
        "title": "Bipedal Humanoid Model",
        "subtitle": "Articulated joints and sensors",
        "description": "Assemble a humanoid robot chassis with dual leg joints, camera vision head, and gripper arms.",
        "parts": [
          {
            "name": "Torso Frame",
            "count": 1
          },
          {
            "name": "Leg Articulation Joint",
            "count": 2
          },
          {
            "name": "Ultrasonic Head",
            "count": 1
          },
          {
            "name": "Gripper Hand",
            "count": 2
          }
        ],
        "steps": [
          {
            "stepNumber": 1,
            "instruction": "Attach the leg articulation joints to the base of the torso frame."
          },
          {
            "stepNumber": 2,
            "instruction": "Mount the ultrasonic head assembly on top of the torso."
          },
          {
            "stepNumber": 3,
            "instruction": "Fix the gripper arms to the side pivots and test joint flexibility."
          }
        ],
        "xpReward": 150
      }
    ],
    "quiz": [
      {
        "id": "c4-q1-1",
        "chapterId": "c4-ch-1",
        "question": "What is a robot?",
        "options": [
          "A living human being",
          "A special machine that can work by itself with instructions",
          "A type of animal",
          "A computer game"
        ],
        "correctAnswer": 1,
        "explanation": "A robot is a special machine that can work autonomously when provided with instructions."
      },
      {
        "id": "c4-q1-2",
        "chapterId": "c4-ch-1",
        "question": "What is the study of robots called?",
        "options": [
          "Biology",
          "Chemistry",
          "Robotics",
          "Astronomy"
        ],
        "correctAnswer": 2,
        "explanation": "The scientific study, design, and building of robots is called robotics."
      },
      {
        "id": "c4-q1-3",
        "chapterId": "c4-ch-1",
        "question": "Which of the following is a humanoid robot?",
        "options": [
          "A cleaning vacuum disk on the floor",
          "A robot designed to look and act like a human",
          "A car engine",
          "A smartphone"
        ],
        "correctAnswer": 1,
        "explanation": "Humanoid robots are engineered to mimic human anatomy, walking on two legs or using human-like arms and heads."
      },
      {
        "id": "c4-q1-4",
        "chapterId": "c4-ch-1",
        "question": "Which of these is true about humans?",
        "options": [
          "Made of metal and wires",
          "Can feel emotions like happy and sad",
          "Works only by following programmed instructions",
          "Can be repaired easily by swapping parts"
        ],
        "correctAnswer": 1,
        "explanation": "Humans are biological beings who naturally experience genuine emotions like joy, sorrow, and curiosity."
      },
      {
        "id": "c4-q1-5",
        "chapterId": "c4-ch-1",
        "question": "What are humanoid robots made of?",
        "options": [
          "Skin and bones",
          "Water and air",
          "Metal, plastic, and wires",
          "Wood and clay"
        ],
        "correctAnswer": 2,
        "explanation": "Humanoid robots are constructed from structural metals, polymer plastics, and electrical wires."
      },
      {
        "id": "c4-q1-6",
        "chapterId": "c4-ch-1",
        "question": "According to the First Law of Robotics, a robot must...",
        "options": [
          "Protect itself at all costs",
          "Obey any human order without question",
          "Not harm a human or allow a human to be harmed",
          "Work faster than humans"
        ],
        "correctAnswer": 2,
        "explanation": "The First Law strictly forbids a robot from injuring a human being or allowing one to come to harm."
      },
      {
        "id": "c4-q1-7",
        "chapterId": "c4-ch-1",
        "question": "The Second Law of Robotics says that a robot must...",
        "options": [
          "Always move like a human",
          "Obey human orders unless it conflicts with the First Law",
          "Protect itself at all times",
          "Never talk to strangers"
        ],
        "correctAnswer": 1,
        "explanation": "A robot must obey orders given by humans, except when those orders would cause harm to a human."
      },
      {
        "id": "c4-q1-8",
        "chapterId": "c4-ch-1",
        "question": "The Third Law of Robotics says that a robot must...",
        "options": [
          "Harm humans if needed",
          "Obey all humans even if it harms others",
          "Protect its own existence unless it conflicts with the First or Second Law",
          "Become human one day"
        ],
        "correctAnswer": 2,
        "explanation": "A robot must protect itself, provided this self-preservation does not violate the First or Second Laws."
      },
      {
        "id": "c4-q1-9",
        "chapterId": "c4-ch-1",
        "question": "Which of the following can humans do but humanoid robots cannot?",
        "options": [
          "Follow instructions",
          "Move using electric motors",
          "Feel real emotions",
          "Be repaired when broken"
        ],
        "correctAnswer": 2,
        "explanation": "Robots can simulate expressions, but cannot experience real biological feelings or emotions."
      },
      {
        "id": "c4-q1-10",
        "chapterId": "c4-ch-1",
        "question": "Which of these is NOT a natural function of robots?",
        "options": [
          "Help at home",
          "Help in factories",
          "Think and feel like humans naturally",
          "Move and perform tasks automatically"
        ],
        "correctAnswer": 2,
        "explanation": "Robots operate on algorithms and sensors; they do not have natural thoughts or biological feelings."
      }
    ],
    "writtenQuestions": [
      {
        "id": "c4-w1-1",
        "chapterId": "c4-ch-1",
        "question": "What can humans do that humanoid robots cannot?",
        "sampleAnswer": "Humans can experience real emotions (happiness, sadness, empathy), think creatively without programmed rules, learn naturally from life experience, and possess living biological bodies made of skin, bones, and muscles."
      },
      {
        "id": "c4-w1-2",
        "chapterId": "c4-ch-1",
        "question": "What is the First Law of Robotics?",
        "sampleAnswer": "A robot may not injure a human being or, through inaction, allow a human being to come to harm."
      },
      {
        "id": "c4-w1-3",
        "chapterId": "c4-ch-1",
        "question": "What is a robot?",
        "sampleAnswer": "A robot is a special machine that can work by itself when given instructions, using sensors, motors, and controllers to perform automated tasks."
      }
    ],
    "funFacts": [
      {
        "id": "c4-ff-1-1",
        "text": "Isaac Asimov wrote his Three Laws of Robotics in 1942 for a short story, and today real robot scientists study them in universities worldwide!"
      }
    ]
  },
  {
    "id": "c4-ch-2",
    "classId": "class-4",
    "number": 2,
    "title": "3D Pen - II",
    "tagline": "Free-Form 3D Sculpting & Thermal Extrusion",
    "color": "#EA580C",
    "iconName": "PenTool",
    "lessons": [
      {
        "id": "c4-l2-1",
        "chapterId": "c4-ch-2",
        "order": 1,
        "title": "3D Dimensions & The 3D Printing Pen",
        "subtitle": "Width, Height, and Depth in spatial design",
        "summary": "3D, or three-dimensional, refers to the three spatial dimensions: width, height, and depth. While flat drawings on paper are 2D, the physical world around us is three-dimensional. A 3D pen is a handheld device that lets students draw solid 3D objects in the air by extruding molten plastic filament from its tip.",
        "keyPoints": [
          "2D has length and width; 3D adds depth and height.",
          "3D pens extrude melted plastic filament that cools instantly in the air.",
          "Enables rapid hands-on engineering prototyping."
        ],
        "illustrationType": "c4_3d_dimensions"
      },
      {
        "id": "c4-l2-2",
        "chapterId": "c4-ch-2",
        "order": 2,
        "title": "10 Anatomy Parts of a 3D Pen",
        "subtitle": "Hardware layout and temperature controls",
        "summary": "A professional 3D pen consists of 10 essential parts: 1. Filament Input Hole, 2. Power Input Hole, 3. Power Indicator LED (Red), 4. Work Indicator LED (Green at 190\u00b0C), 5. LCD Screen (temperature dashboard), 6. Temperature Adjustment Buttons (+/-), 7. Speed Controller (flow rate), 8. Load Filament Button (downward arrow), 9. Unload Filament Button (upward arrow), and 10. Integrated Heating Nozzle (hot tip zone).",
        "keyPoints": [
          "LCD screen shows target melting temperature (190\u00b0C).",
          "Speed controller slider adjusts extrusion flow rate.",
          "Load (down arrow) and Unload (up arrow) drive internal feed gears."
        ],
        "illustrationType": "c4_3d_pen_anatomy"
      },
      {
        "id": "c4-l2-3",
        "chapterId": "c4-ch-2",
        "order": 3,
        "title": "Safe 6-Step Operating Procedure",
        "subtitle": "Heating up, extruding, and safe filament unloading",
        "summary": "Follow the official 6 steps: Step 1: Plug in and switch ON; press downward button to heat. Step 2: When temperature reaches 190\u00b0C, the LED turns Green. Step 3: Insert filament and press load button. Step 4: Draw smoothly as filament extrudes. Step 5: When finished, press upward arrow to unload filament. Step 6: Allow 5 minutes to cool down before storing.",
        "keyPoints": [
          "Never touch the heating nozzle\u2014it reaches 190\u00b0C!",
          "Always unload filament completely before switching off power.",
          "Wait for the green LED indicator before inserting filament."
        ],
        "illustrationType": "c4_3d_pen_operation"
      },
      {
        "id": "c4-l2-4",
        "chapterId": "c4-ch-2",
        "order": 4,
        "title": "STEM Benefits of 3D Printing Pens",
        "subtitle": "Artistic creativity meets spatial engineering",
        "summary": "Using a 3D pen enhances creativity, introduces spatial engineering and geometry, provides hands-on prototyping experience, develops critical problem-solving skills, offers accessible 3D manufacturing, and sharpens hand-eye coordination and fine motor skills.",
        "keyPoints": [
          "Bridges 2D sketch ideas into physical solid models.",
          "Teaches thermal physics and material properties.",
          "Fosters fine motor precision and structural thinking."
        ],
        "illustrationType": "c4_3d_pen_benefits"
      }
    ],
    "activities": [
      {
        "id": "c4-act-2",
        "chapterId": "c4-ch-2",
        "title": "Activity-1: 3D Name Initials Sculptor",
        "type": "c4_activity_3d_initials",
        "description": "Preheat the virtual 3D pen to 190\u00b0C and extrude molten plastic to sculpt your 3D name initials.",
        "instructions": [
          "Power ON the 3D pen and wait for the Green LED at 190\u00b0C.",
          "Select your filament color and extrusion speed.",
          "Draw solid 3D initials on the canvas and admire the spatial structure!"
        ],
        "xpReward": 100
      }
    ],
    "models": [
      {
        "id": "c4-mod-2",
        "chapterId": "c4-ch-2",
        "title": "3D Monogram & Structural Stand",
        "subtitle": "Free-standing spatial artifact",
        "description": "Sculpt a rigid monogram letter reinforced with cross-hatch truss supports so it stands upright on your desk.",
        "parts": [
          {
            "name": "PLA Filament Strand",
            "count": 3
          },
          {
            "name": "Stencil Outline",
            "count": 1
          },
          {
            "name": "Heat-Resistant Silicone Mat",
            "count": 1
          }
        ],
        "steps": [
          {
            "stepNumber": 1,
            "instruction": "Trace the base foundation of your letter initials flat on the mat."
          },
          {
            "stepNumber": 2,
            "instruction": "Extrude upright vertical pillars at 90 degrees until desired height is reached."
          },
          {
            "stepNumber": 3,
            "instruction": "Bridge the top joints and add cross-diagonal truss lines for stability."
          }
        ],
        "xpReward": 150
      }
    ],
    "quiz": [
      {
        "id": "c4-q2-1",
        "chapterId": "c4-ch-2",
        "question": "What does 3D mean?",
        "options": [
          "Two-dimensional",
          "Three-dimensional: width, height, and depth",
          "Flat images only",
          "Only height and width"
        ],
        "correctAnswer": 1,
        "explanation": "3D refers to the three physical dimensions of width, height, and depth."
      },
      {
        "id": "c4-q2-2",
        "chapterId": "c4-ch-2",
        "question": "What is a 3D pen used for?",
        "options": [
          "Writing on paper only",
          "Creating freeform 3D objects in physical space",
          "Drawing 2D sketches only",
          "Cooking food"
        ],
        "correctAnswer": 1,
        "explanation": "A 3D pen extrudes heated plastic filament to draw solid structures directly in 3D space."
      },
      {
        "id": "c4-q2-3",
        "chapterId": "c4-ch-2",
        "question": "What temperature does the 3D pen reach to melt PLA filament?",
        "options": [
          "50\u00b0C",
          "100\u00b0C",
          "190\u00b0C",
          "500\u00b0C"
        ],
        "correctAnswer": 2,
        "explanation": "The nozzle heats to approximately 190\u00b0C to smoothly melt PLA plastic filament."
      },
      {
        "id": "c4-q2-4",
        "chapterId": "c4-ch-2",
        "question": "What color does the work indicator LED turn when the pen is ready?",
        "options": [
          "Red",
          "Blue",
          "Green",
          "Yellow"
        ],
        "correctAnswer": 2,
        "explanation": "The indicator turns Green once the operating temperature reaches 190\u00b0C."
      },
      {
        "id": "c4-q2-5",
        "chapterId": "c4-ch-2",
        "question": "Which button is pressed to feed filament into the 3D pen?",
        "options": [
          "Unload filament button (upward arrow)",
          "Load filament button (downward arrow)",
          "Power switch only",
          "Speed slider"
        ],
        "correctAnswer": 1,
        "explanation": "The downward arrow button activates the motor to feed filament into the heating chamber."
      },
      {
        "id": "c4-q2-6",
        "chapterId": "c4-ch-2",
        "question": "Why should you never touch the nozzle tip of a 3D pen?",
        "options": [
          "It is extremely hot and can cause burns",
          "It gets very cold",
          "It can break easily",
          "It makes a loud noise"
        ],
        "correctAnswer": 0,
        "explanation": "The nozzle tip reaches 190\u00b0C during operation, requiring strict caution to prevent burns."
      },
      {
        "id": "c4-q2-7",
        "chapterId": "c4-ch-2",
        "question": "What happens if filament is NOT unloaded before turning off the 3D pen?",
        "options": [
          "The pen melts completely",
          "Filament can jam and clog the internal chamber",
          "The pen turns into a robot",
          "Nothing happens"
        ],
        "correctAnswer": 1,
        "explanation": "Cooled plastic can harden inside the nozzle chamber and cause severe feeding jams."
      },
      {
        "id": "c4-q2-8",
        "chapterId": "c4-ch-2",
        "question": "What is PLA filament made from?",
        "options": [
          "Crude petroleum oil",
          "Plant starch like corn (eco-friendly)",
          "Glass fibers",
          "Pure metal"
        ],
        "correctAnswer": 1,
        "explanation": "PLA is polylactic acid, derived from renewable plant starches like corn."
      },
      {
        "id": "c4-q2-9",
        "chapterId": "c4-ch-2",
        "question": "What does the speed controller slider do on a 3D pen?",
        "options": [
          "Changes the color of the plastic",
          "Adjusts how fast or slow the filament extrudes",
          "Turns the pen ON and OFF",
          "Changes the nozzle size"
        ],
        "correctAnswer": 1,
        "explanation": "The slider regulates motor speed, allowing fine detailing at low speed and fast infill at high speed."
      },
      {
        "id": "c4-q2-10",
        "chapterId": "c4-ch-2",
        "question": "Which STEM skill is developed by using a 3D pen?",
        "options": [
          "Spatial geometry and 3D prototyping",
          "Watching TV",
          "Writing on a blackboard",
          "Sleeping"
        ],
        "correctAnswer": 0,
        "explanation": "3D pens develop spatial reasoning, geometric design, and hands-on manufacturing skills."
      }
    ],
    "writtenQuestions": [
      {
        "id": "c4-w2-1",
        "chapterId": "c4-ch-2",
        "question": "List 5 essential parts of a 3D pen.",
        "sampleAnswer": "1. Filament input hole, 2. Power input hole, 3. LCD screen, 4. Speed controller, 5. Integrated heating nozzle."
      },
      {
        "id": "c4-w2-2",
        "chapterId": "c4-ch-2",
        "question": "What are the 3 dimensions that make up 3D space?",
        "sampleAnswer": "Width, Height, and Depth."
      },
      {
        "id": "c4-w2-3",
        "chapterId": "c4-ch-2",
        "question": "Why is it important to wait for the green LED before inserting filament?",
        "sampleAnswer": "The green LED signals that the nozzle has reached the required 190\u00b0C melting point. Inserting filament too early can strip internal feed gears."
      }
    ],
    "funFacts": [
      {
        "id": "c4-ff-2-1",
        "text": "Unlike standard desktop 3D printers that require complex computer coding, a 3D pen turns your own hand into the robotic extruder!"
      }
    ]
  },
  {
    "id": "c4-ch-3",
    "classId": "class-4",
    "number": 3,
    "title": "Gears",
    "tagline": "Mechanical Spur, Bevel & Screw Gear Trains",
    "color": "#D97706",
    "iconName": "Settings",
    "lessons": [
      {
        "id": "c4-l3-1",
        "chapterId": "c4-ch-3",
        "order": 1,
        "title": "Introduction to Gears & Anatomy",
        "subtitle": "Teeth, Edges, Hubs, and Shaft Holes",
        "summary": "A gear is a toothed wheel designed to mesh with another toothed wheel to transmit power, speed, and torque. The key parts of a gear include: 1. Teeth (meshing ridges), 2. Edge (outer rim holding the teeth), 3. Hub (central body mounting the gear), and 4. Hole (central bore for rotating axle shaft).",
        "keyPoints": [
          "Gears transfer motion without slipping due to interlocking teeth.",
          "Adjacent meshed gears rotate in opposite directions.",
          "The gear receiving power from the motor is the Driver gear; the other is the Driven gear."
        ],
        "illustrationType": "c4_gear_intro"
      },
      {
        "id": "c4-l3-2",
        "chapterId": "c4-ch-3",
        "order": 2,
        "title": "Three Main Types of Gears",
        "subtitle": "Spur Gears, Bevel Gears (90\u00b0), and Screw Gears",
        "summary": "Textbook covers three key gear categories: 1. Spur Gears (teeth parallel to the axle, operating on parallel shafts), 2. Bevel Gears (cone-shaped teeth meeting at a 90-degree angle to redirect rotational axis), and 3. Screw / Crossed Helical Gears (curved helical teeth for smooth, high-speed, and high-load transmission).",
        "keyPoints": [
          "Spur gears are most common (parallel shafts).",
          "Bevel gears turn power around a 90-degree corner (like drill chucks).",
          "Screw gears provide quiet, heavy-load transfer on non-intersecting shafts."
        ],
        "illustrationType": "c4_gear_types"
      },
      {
        "id": "c4-l3-3",
        "chapterId": "c4-ch-3",
        "order": 3,
        "title": "Gear Ratios, Speed & Torque",
        "subtitle": "Calculating mechanical advantage",
        "summary": "Gear Ratio is calculated as: Gear Ratio = Number of Teeth on Driven Gear / Number of Teeth on Driver Gear. When a small driver gear turns a large driven gear, speed decreases but torque (turning power) multiplies! Conversely, a large driver turning a small driven gear increases speed while reducing torque.",
        "keyPoints": [
          "Gear Ratio = Driven Teeth / Driver Teeth.",
          "Big gear driving small gear = High Speed, Low Torque.",
          "Small gear driving big gear = High Torque, Low Speed (hill climbing)."
        ],
        "illustrationType": "c4_gear_ratio"
      },
      {
        "id": "c4-l3-4",
        "chapterId": "c4-ch-3",
        "order": 4,
        "title": "4WD Transmission & Gearboxes",
        "subtitle": "Models 1 & 2: 4WD Car and Manual Gearbox",
        "summary": "In Exp-9 Model-1, a 4-Wheel Drive car uses spur gears and longitudinal axles to deliver motor torque to all four wheels simultaneously for high-traction climbing. In Exp-10 Model-2, a multi-stage gearbox features Reverse (R), Neutral (N), 1st Gear (High torque), and 2nd Gear (High speed).",
        "keyPoints": [
          "4WD provides maximum traction on rough, slippery terrains.",
          "Gearboxes allow changing speed and direction while motor runs at constant RPM.",
          "Activity-2 features building a cardboard marble run utilizing gravitational potential energy."
        ],
        "illustrationType": "c4_gearbox_models"
      }
    ],
    "activities": [
      {
        "id": "c4-act-3",
        "chapterId": "c4-ch-3",
        "title": "Activity-2: Cardboard Marble Run & Gearbox Lab",
        "type": "c4_activity_gearbox",
        "description": "Experiment with Spur, Bevel 90\u00b0, and Screw gears, calculate gear ratios, shift through R-N-1-2 transmission, and launch the cardboard marble run.",
        "instructions": [
          "Select Spur, Bevel, or Screw gear type to inspect mesh geometry.",
          "Adjust driver and driven tooth counts to see speed vs torque ratio.",
          "Shift the manual gearbox between R, N, 1, and 2 to drive the 4WD car."
        ],
        "xpReward": 100
      }
    ],
    "models": [
      {
        "id": "c4-mod-3",
        "chapterId": "c4-ch-3",
        "title": "Working R-N-1-2 Gearbox (Exp-10)",
        "subtitle": "Multi-ratio manual transmission",
        "description": "Construct a working multi-speed gearbox with shifting dog teeth to toggle between Reverse, Neutral, 1st gear, and 2nd gear.",
        "parts": [
          {
            "name": "20-Teeth Driver Spur Gear",
            "count": 2
          },
          {
            "name": "40-Teeth Driven Spur Gear",
            "count": 2
          },
          {
            "name": "Selector Fork Arm",
            "count": 1
          },
          {
            "name": "Steel Drive Axle",
            "count": 2
          }
        ],
        "steps": [
          {
            "stepNumber": 1,
            "instruction": "Slide the driver gears onto the motor input axle shaft."
          },
          {
            "stepNumber": 2,
            "instruction": "Mount the matching driven spur gears on the output axle shaft."
          },
          {
            "stepNumber": 3,
            "instruction": "Install the selector fork arm to slide gears in and out of mesh."
          }
        ],
        "xpReward": 150
      }
    ],
    "quiz": [
      {
        "id": "c4-q3-1",
        "chapterId": "c4-ch-3",
        "question": "What is a gear?",
        "options": [
          "A smooth wheel with rubber",
          "A toothed wheel that meshes with another to transmit power",
          "A long wooden stick",
          "A battery holder"
        ],
        "correctAnswer": 1,
        "explanation": "A gear is a wheel cut with teeth around its rim that meshes with another gear to transfer motion and force."
      },
      {
        "id": "c4-q3-2",
        "chapterId": "c4-ch-3",
        "question": "Which gear type has teeth meeting at a 90-degree angle to turn power around corners?",
        "options": [
          "Spur gear",
          "Bevel gear",
          "Flat gear",
          "Belt pulley"
        ],
        "correctAnswer": 1,
        "explanation": "Bevel gears have angled conical teeth designed specifically to transmit power between shafts intersecting at 90 degrees."
      },
      {
        "id": "c4-q3-3",
        "chapterId": "c4-ch-3",
        "question": "What is the gear called that receives power directly from the motor?",
        "options": [
          "Driven gear",
          "Driver gear (Primary)",
          "Idler gear",
          "Bicycle pedal"
        ],
        "correctAnswer": 1,
        "explanation": "The gear attached directly to the motor shaft is the driver (or primary) gear."
      },
      {
        "id": "c4-q3-4",
        "chapterId": "c4-ch-3",
        "question": "When two meshed gears rotate, in what direction do they turn?",
        "options": [
          "Both turn in the exact same direction",
          "They turn in opposite directions to each other",
          "Neither gear turns",
          "They spin randomly"
        ],
        "correctAnswer": 1,
        "explanation": "Meshing gears always rotate in opposite directions relative to each other."
      },
      {
        "id": "c4-q3-5",
        "chapterId": "c4-ch-3",
        "question": "What is the Gear Ratio formula?",
        "options": [
          "Driver teeth + Driven teeth",
          "Number of teeth on Driven Gear / Number of teeth on Driver Gear",
          "Weight of car x Speed",
          "Motor Voltage / Battery Power"
        ],
        "correctAnswer": 1,
        "explanation": "Gear Ratio = Number of Teeth on Driven Gear divided by Number of Teeth on Driver Gear."
      },
      {
        "id": "c4-q3-6",
        "chapterId": "c4-ch-3",
        "question": "If a small driver gear turns a large driven gear, what happens?",
        "options": [
          "Speed increases, torque decreases",
          "Speed decreases, torque increases (high climbing power)",
          "The gears break immediately",
          "The motor stops forever"
        ],
        "correctAnswer": 1,
        "explanation": "Driving a larger gear produces mechanical advantage: slower rotation with multiplied rotational force (torque)."
      },
      {
        "id": "c4-q3-7",
        "chapterId": "c4-ch-3",
        "question": "What does 4WD stand for in vehicle engineering?",
        "options": [
          "4-Wheel Drive",
          "4-Wing Drone",
          "4-Way Direction",
          "4-Wire Device"
        ],
        "correctAnswer": 0,
        "explanation": "4WD stands for Four-Wheel Drive, where engine torque is distributed to all 4 wheels."
      },
      {
        "id": "c4-q3-8",
        "chapterId": "c4-ch-3",
        "question": "In the manual gearbox model, what does 'N' stand for?",
        "options": [
          "Normal speed",
          "Neutral (no power connected to wheels)",
          "Nitro boost",
          "North direction"
        ],
        "correctAnswer": 1,
        "explanation": "Neutral disengages the transmission so the motor can spin freely without driving the vehicle."
      },
      {
        "id": "c4-q3-9",
        "chapterId": "c4-ch-3",
        "question": "Which gear type has helical curved teeth that provide smooth, quiet high-speed transmission?",
        "options": [
          "Spur gear",
          "Screw / Crossed Helical gear",
          "Square gear",
          "Paddle wheel"
        ],
        "correctAnswer": 1,
        "explanation": "Screw / helical gears have curved teeth that engage gradually for smooth and quiet power transfer."
      },
      {
        "id": "c4-q3-10",
        "chapterId": "c4-ch-3",
        "question": "What is torque?",
        "options": [
          "The color of an axle",
          "Rotational turning force produced by a motor or shaft",
          "The sound a gear makes",
          "A type of battery"
        ],
        "correctAnswer": 1,
        "explanation": "Torque is the measure of rotational force that causes an object to turn around an axis."
      }
    ],
    "writtenQuestions": [
      {
        "id": "c4-w3-1",
        "chapterId": "c4-ch-3",
        "question": "Name the 4 main parts of a gear.",
        "sampleAnswer": "1. Teeth (interlocking ridges), 2. Edge (outer rim where teeth sit), 3. Hub (central body connected to the machine), 4. Hole / Bore (center hole for the rotating shaft)."
      },
      {
        "id": "c4-w3-2",
        "chapterId": "c4-ch-3",
        "question": "How do gears work together without slipping?",
        "sampleAnswer": "Gears have teeth cut with equal spacing that interlock (mesh) with matching teeth of an adjacent gear, transferring rotary motion and force positively without slipping."
      },
      {
        "id": "c4-w3-3",
        "chapterId": "c4-ch-3",
        "question": "What is the difference between primary and secondary gears?",
        "sampleAnswer": "The primary (driver) gear is driven by the motor or power source. The secondary (driven) gear meshes with the primary gear and receives the motion, rotating in the opposite direction."
      }
    ],
    "funFacts": [
      {
        "id": "c4-ff-3-1",
        "text": "Bicycles use different sized gears on the rear wheel so you can climb steep hills with ease or race fast on flat roads!"
      }
    ]
  },
  {
    "id": "c4-ch-4",
    "classId": "class-4",
    "number": 4,
    "title": "Building Structures (Amusement)",
    "tagline": "Megastructures & Motorized Giant Wheel",
    "color": "#059669",
    "iconName": "Building2",
    "lessons": [
      {
        "id": "c4-l4-1",
        "chapterId": "c4-ch-4",
        "order": 1,
        "title": "Introduction to Megastructures",
        "subtitle": "Three Gorges, Akashi Bridge, and Burj Khalifa",
        "summary": "A megastructure is an extremely large and complex structure built by human engineering. Real-life megastructures include massive dams (Three Gorges Dam in China), sprawling bridges (Akashi-Kaikyo in Japan), towering skyscrapers (Burj Khalifa in Dubai, 828m), subsea tunnels (Channel Tunnel), and mega-airports.",
        "keyPoints": [
          "Megastructures solve massive transport, shelter, and water challenges.",
          "Burj Khalifa is the world's tallest building at 828 meters.",
          "Requires advanced load-bearing physics and foundation engineering."
        ],
        "illustrationType": "c4_megastructure_intro"
      },
      {
        "id": "c4-l4-2",
        "chapterId": "c4-ch-4",
        "order": 2,
        "title": "Future Megastructures: Hyperloop & CERN",
        "subtitle": "Vacuum tube transport and particle accelerators",
        "summary": "Futuristic megastructures push the boundary of imagination: Hyperloop transports passengers in low-pressure vacuum tubes at near supersonic speeds using magnetic levitation; Space Elevators stretch into orbit; and CERN near Geneva houses the world\u2019s largest particle accelerator where the World Wide Web was invented!",
        "keyPoints": [
          "Hyperloop eliminates air resistance and ground friction.",
          "CERN particle accelerator invented the World Wide Web in 1989.",
          "Space Elevators use ultra-strong carbon nanotube tethers."
        ],
        "illustrationType": "c4_hyperloop_cern"
      },
      {
        "id": "c4-l4-3",
        "chapterId": "c4-ch-4",
        "order": 3,
        "title": "Advanced Technologies in Megastructures",
        "subtitle": "BIM 3D modeling, sensors, and green energy",
        "summary": "Modern structural engineers rely on: 1. 3D Modeling (BIM - Building Information Modeling) for computerized design, 2. 3D Printing for building components, 3. Sustainable technologies like solar panels, wind turbines, and heat-reducing green roofs, and 4. Health monitoring sensors and inspection drones.",
        "keyPoints": [
          "BIM creates digital twins of buildings before construction.",
          "Smart sensors detect stress and structural movement.",
          "Green roofs and solar skin provide zero-emission power."
        ],
        "illustrationType": "c4_megastructure_tech"
      },
      {
        "id": "c4-l4-4",
        "chapterId": "c4-ch-4",
        "order": 4,
        "title": "Record-Breaking Indian Megastructures",
        "subtitle": "Statue of Unity & Chenab Rail Bridge",
        "summary": "India is home to world-record megastructures: The Statue of Unity in Gujarat is the world\u2019s tallest statue at 182 meters, honoring Sardar Vallabhbhai Patel. The Chenab Rail Bridge in Jammu & Kashmir is the world\u2019s highest railway bridge, towering 359 meters (1,178 feet) above the river\u2014taller than the Eiffel Tower!",
        "keyPoints": [
          "Statue of Unity: 182m tall, built with reinforced concrete and bronze.",
          "Chenab Bridge: 359m high arch bridge engineered to resist severe earthquakes.",
          "Demonstrates supreme Indian civil and structural engineering."
        ],
        "illustrationType": "c4_indian_megastructures"
      }
    ],
    "activities": [
      {
        "id": "c4-act-4",
        "chapterId": "c4-ch-4",
        "title": "Activity-3: Build a 3-ft Motorized Giant Wheel",
        "type": "c4_activity_giant_wheel",
        "description": "Construct and spin a motorized amusement giant wheel, test pod balances, and simulate Hyperloop vacuum speeds.",
        "instructions": [
          "Explore world megastructures including Burj Khalifa and Chenab Bridge.",
          "Vary vacuum air pressure to simulate supersonic Hyperloop capsule speeds.",
          "Power up the Motorized Giant Wheel and adjust rotation speeds!"
        ],
        "xpReward": 100
      }
    ],
    "models": [
      {
        "id": "c4-mod-4",
        "chapterId": "c4-ch-4",
        "title": "Motorized Amusement Giant Wheel",
        "subtitle": "Rotating radial truss structure",
        "description": "Assemble a 3-foot high rotating Ferris wheel with radial truss spokes, balanced passenger pods, and a geared reduction motor.",
        "parts": [
          {
            "name": "Radial Truss Spokes",
            "count": 8
          },
          {
            "name": "Central Hub Bearing",
            "count": 1
          },
          {
            "name": "Passenger Pod Cabins",
            "count": 8
          },
          {
            "name": "Geared Reduction Motor",
            "count": 1
          }
        ],
        "steps": [
          {
            "stepNumber": 1,
            "instruction": "Erect the dual A-frame support pylons and lock them into the base platform."
          },
          {
            "stepNumber": 2,
            "instruction": "Assemble the 8 radial truss spokes into the central axle bearing hub."
          },
          {
            "stepNumber": 3,
            "instruction": "Hang passenger cabins with free-swinging gravity pivots and connect the motor."
          }
        ],
        "xpReward": 150
      }
    ],
    "quiz": [
      {
        "id": "c4-q4-1",
        "chapterId": "c4-ch-4",
        "question": "What is a megastructure?",
        "options": [
          "A small toy car",
          "An exceptionally large, complex man-made construction",
          "A piece of bread",
          "A mobile phone app"
        ],
        "correctAnswer": 1,
        "explanation": "Megastructures are massive architectural and civil engineering works like dams, skyscrapers, and bridges."
      },
      {
        "id": "c4-q4-2",
        "chapterId": "c4-ch-4",
        "question": "What is currently the tallest building in the world?",
        "options": [
          "Eiffel Tower",
          "Burj Khalifa (828m, Dubai)",
          "Empire State Building",
          "Statue of Liberty"
        ],
        "correctAnswer": 1,
        "explanation": "Burj Khalifa in Dubai, UAE is the tallest building in the world, measuring 828 meters tall."
      },
      {
        "id": "c4-q4-3",
        "chapterId": "c4-ch-4",
        "question": "How does the futuristic Hyperloop transport passengers at near-supersonic speeds?",
        "options": [
          "By flying through the clouds like an airplane",
          "By shooting pods inside low-pressure vacuum tubes using magnetic levitation",
          "By sailing across ocean waves",
          "By digging tunnels using water"
        ],
        "correctAnswer": 1,
        "explanation": "Hyperloop removes air resistance by operating in low-pressure vacuum tubes and uses magnetic levitation to eliminate track friction."
      },
      {
        "id": "c4-q4-4",
        "chapterId": "c4-ch-4",
        "question": "What famous technology was invented at CERN in 1989?",
        "options": [
          "Smartphones",
          "The World Wide Web (WWW)",
          "Television",
          "Microwave oven"
        ],
        "correctAnswer": 1,
        "explanation": "Sir Tim Berners-Lee invented the World Wide Web at CERN in 1989 so scientists could share particle data."
      },
      {
        "id": "c4-q4-5",
        "chapterId": "c4-ch-4",
        "question": "What is the world's tallest statue, located in Gujarat, India?",
        "options": [
          "Statue of Liberty",
          "Statue of Unity (182m)",
          "Christ the Redeemer",
          "Spring Temple Buddha"
        ],
        "correctAnswer": 1,
        "explanation": "The Statue of Unity is 182 meters tall, honoring Sardar Vallabhbhai Patel."
      },
      {
        "id": "c4-q4-6",
        "chapterId": "c4-ch-4",
        "question": "What makes the Chenab Rail Bridge in Jammu & Kashmir a world record holder?",
        "options": [
          "It is the longest bridge",
          "It is the world's highest railway bridge (359m above river bed)",
          "It is made of wood",
          "It floats on water"
        ],
        "correctAnswer": 1,
        "explanation": "The Chenab Rail Bridge stands 359 meters high, 35 meters taller than the Eiffel Tower!"
      },
      {
        "id": "c4-q4-7",
        "chapterId": "c4-ch-4",
        "question": "What technology allows architects to create detailed 3D computerized building models?",
        "options": [
          "BIM (Building Information Modeling)",
          "Crayon drawing",
          "Paper origami",
          "X-ray"
        ],
        "correctAnswer": 0,
        "explanation": "BIM provides comprehensive digital 3D models with structural, electrical, and plumbing data."
      },
      {
        "id": "c4-q4-8",
        "chapterId": "c4-ch-4",
        "question": "Which country is the global leader in wind power production?",
        "options": [
          "China",
          "Iceland",
          "Australia",
          "Brazil"
        ],
        "correctAnswer": 0,
        "explanation": "China produces the largest amount of clean wind energy in the world using massive wind farms."
      },
      {
        "id": "c4-q4-9",
        "chapterId": "c4-ch-4",
        "question": "In the Giant Wheel amusement model, why do passenger pods stay upright?",
        "options": [
          "They are glued tight to the spokes",
          "They hang on free-pivoting axles, allowing gravity to keep them level",
          "They have little motors inside each cabin",
          "Magnets hold them up"
        ],
        "correctAnswer": 1,
        "explanation": "Free-swinging pivot pins allow gravity to keep pod floors pointing downwards as the wheel rotates."
      },
      {
        "id": "c4-q4-10",
        "chapterId": "c4-ch-4",
        "question": "Which sustainable energy source converts direct sunlight into electricity for megastructures?",
        "options": [
          "Solar photovoltaic panels",
          "Coal furnaces",
          "Diesel generators",
          "Wood fires"
        ],
        "correctAnswer": 0,
        "explanation": "Solar panels convert radiant sunlight directly into clean electrical energy."
      }
    ],
    "writtenQuestions": [
      {
        "id": "c4-w4-1",
        "chapterId": "c4-ch-4",
        "question": "Name two world-record megastructures in India.",
        "sampleAnswer": "1. The Statue of Unity (182m tall in Gujarat - world's tallest statue). 2. The Chenab Rail Bridge (359m high in Jammu & Kashmir - world's highest railway bridge)."
      },
      {
        "id": "c4-w4-2",
        "chapterId": "c4-ch-4",
        "question": "How does a vacuum tube help the Hyperloop travel so fast?",
        "sampleAnswer": "Removing nearly all air from the sealed tube creates a near-vacuum environment, eliminating aerodynamic air resistance so transport capsules can travel at high speeds with minimal energy."
      },
      {
        "id": "c4-w4-3",
        "chapterId": "c4-ch-4",
        "question": "What is a megastructure?",
        "sampleAnswer": "A megastructure is an exceptionally large, complex man-made construction such as high-rise skyscrapers, massive hydroelectric dams, subsea tunnels, and long-span bridges."
      }
    ],
    "funFacts": [
      {
        "id": "c4-ff-4-1",
        "text": "The Chenab Rail Bridge in Kashmir is engineered with blast-proof steel and can withstand 266 km/h Himalayan storm winds!"
      }
    ]
  },
  {
    "id": "c4-ch-5",
    "classId": "class-4",
    "number": 5,
    "title": "Electro Magnetics - I",
    "tagline": "Current, Polarity, Conductors & Insulators",
    "color": "#2563EB",
    "iconName": "Zap",
    "lessons": [
      {
        "id": "c4-l5-1",
        "chapterId": "c4-ch-5",
        "order": 1,
        "title": "What is Electricity & Electric Current",
        "subtitle": "Charges, protons, electrons, and battery power",
        "summary": "Electricity is a form of energy resulting from the existence of charged particles (protons are positive +, electrons are negative -). When electrons move in a continuous stream through a conductive wire, this flow is called electric current. A battery provides the electrical pressure (voltage) that pushes electrons through the path.",
        "keyPoints": [
          "Electric current is the continuous flow of negative electrons.",
          "Batteries store chemical energy and convert it to electrical energy.",
          "Electric circuits power lights, motors, buzzers, and computers."
        ],
        "illustrationType": "c4_electricity_intro"
      },
      {
        "id": "c4-l5-2",
        "chapterId": "c4-ch-5",
        "order": 2,
        "title": "Electronic Components & LED Polarity",
        "subtitle": "Anode (+) vs Cathode (-), Motors, and Buzzers",
        "summary": "Key robotics components: 1. LED (Light Emitting Diode) - has polarity! The long leg is the positive Anode (+), the shorter leg is the negative Cathode (-). 2. DC Motor - converts electrical energy into rotational mechanical energy. 3. Buzzer - converts electrical pulses into audible sound waves.",
        "keyPoints": [
          "LEDs only allow current in one direction (Anode to Cathode).",
          "Long leg = Positive Anode (+); Short leg = Negative Cathode (-).",
          "DC motors spin clockwise or counter-clockwise depending on polarity."
        ],
        "illustrationType": "c4_component_polarity"
      },
      {
        "id": "c4-l5-3",
        "chapterId": "c4-ch-5",
        "order": 3,
        "title": "Open Circuit vs. Closed Circuit",
        "subtitle": "Complete unbroken loop vs broken path",
        "summary": "A circuit is a closed path through which electric current flows. When the path is continuous without any breaks, it is a Closed Circuit and electricity flows (lamps glow, motors spin). When there is a break or switch is open, it is an Open Circuit and current halts immediately.",
        "keyPoints": [
          "Closed Circuit = Complete loop, current flows, lamp turns ON.",
          "Open Circuit = Gap in wire or open switch, current blocked, lamp OFF.",
          "Switches deliberately open and close circuits on demand."
        ],
        "illustrationType": "c4_open_closed_circuits"
      },
      {
        "id": "c4-l5-4",
        "chapterId": "c4-ch-5",
        "order": 4,
        "title": "Conductors vs. Insulators",
        "subtitle": "Materials that allow or stop electrical flow",
        "summary": "Conductors are materials that allow electricity to flow through them easily because they have free electrons (Copper, Aluminum, Gold, Iron, Silver, and saltwater). Insulators are materials that block electric current, protecting humans from shocks (Rubber, Plastic, Glass, Dry Wood, and Ceramic).",
        "keyPoints": [
          "Conductors: Metals (Copper, Iron) and water with salts.",
          "Insulators: Rubber, Plastic, Glass, Ceramic.",
          "Electrical wires use copper inside for conduction and plastic coating outside for safety."
        ],
        "illustrationType": "c4_conductors_insulators"
      }
    ],
    "activities": [
      {
        "id": "c4-act-5",
        "chapterId": "c4-ch-5",
        "title": "Activity-4: Circuit Lab & Word Hunt",
        "type": "c4_activity_circuit_lab",
        "description": "Test conductors vs insulators with live voltage, toggle open/closed circuit loops, and solve the 10-word electrical Word Hunt puzzle.",
        "instructions": [
          "Toggle the knife switch to observe closed vs open current flow.",
          "Test copper, plastic, wood, iron, and glass to observe lamp conduction.",
          "Find all 10 electrical vocabulary words in the Word Hunt matrix!"
        ],
        "xpReward": 100
      }
    ],
    "models": [
      {
        "id": "c4-mod-5",
        "chapterId": "c4-ch-5",
        "title": "Dual-Probe Conductor Tester",
        "subtitle": "Benchtop electrical continuity detector",
        "description": "Build a test bench with an LED, 9V battery snap, buzzer, and two brass probe leads to test conductivity of classroom materials.",
        "parts": [
          {
            "name": "9V Battery Snap",
            "count": 1
          },
          {
            "name": "Bright Red LED",
            "count": 1
          },
          {
            "name": "Piezo Buzzer",
            "count": 1
          },
          {
            "name": "Brass Testing Probes",
            "count": 2
          }
        ],
        "steps": [
          {
            "stepNumber": 1,
            "instruction": "Wire the battery positive lead to the long anode leg of the LED."
          },
          {
            "stepNumber": 2,
            "instruction": "Connect the LED cathode to the buzzer positive pin."
          },
          {
            "stepNumber": 3,
            "instruction": "Leave two brass testing probes open to touch various test objects."
          }
        ],
        "xpReward": 150
      }
    ],
    "quiz": [
      {
        "id": "c4-q5-1",
        "chapterId": "c4-ch-5",
        "question": "What is electric current?",
        "options": [
          "Flow of water in a river",
          "Continuous flow of electric charges (electrons) through a conductor",
          "Air moving through a room",
          "Sound waves in the ear"
        ],
        "correctAnswer": 1,
        "explanation": "Electric current is defined as the rate of flow of electric charges (electrons) through a conductive material."
      },
      {
        "id": "c4-q5-2",
        "chapterId": "c4-ch-5",
        "question": "Which leg of an LED is the positive Anode?",
        "options": [
          "The shorter leg",
          "The longer leg",
          "Both legs are equal",
          "The middle leg"
        ],
        "correctAnswer": 1,
        "explanation": "The longer lead of an LED is the positive Anode (+), while the shorter lead is the negative Cathode (-)."
      },
      {
        "id": "c4-q5-3",
        "chapterId": "c4-ch-5",
        "question": "What is an open circuit?",
        "options": [
          "A complete unbroken loop where current flows",
          "A circuit with a gap or break where current cannot flow",
          "A circuit with too much power",
          "A wireless circuit"
        ],
        "correctAnswer": 1,
        "explanation": "An open circuit has a break in its wire path, preventing current from circulating."
      },
      {
        "id": "c4-q5-4",
        "chapterId": "c4-ch-5",
        "question": "Which of these materials is a good conductor of electricity?",
        "options": [
          "Rubber",
          "Glass",
          "Copper",
          "Plastic"
        ],
        "correctAnswer": 2,
        "explanation": "Copper has high electrical conductivity and free electrons, making it ideal for electrical wires."
      },
      {
        "id": "c4-q5-5",
        "chapterId": "c4-ch-5",
        "question": "Which of these materials is an insulator?",
        "options": [
          "Iron nail",
          "Aluminum foil",
          "Rubber",
          "Gold ring"
        ],
        "correctAnswer": 2,
        "explanation": "Rubber blocks electric current completely, which is why electricians wear rubber gloves."
      },
      {
        "id": "c4-q5-6",
        "chapterId": "c4-ch-5",
        "question": "What does an electric motor do in a robot?",
        "options": [
          "Converts electrical energy into rotational mechanical movement",
          "Makes sound only",
          "Cools the battery down",
          "Stores data"
        ],
        "correctAnswer": 0,
        "explanation": "Motors convert electrical energy into kinetic mechanical rotation to turn wheels and gears."
      },
      {
        "id": "c4-q5-7",
        "chapterId": "c4-ch-5",
        "question": "Why are copper wires wrapped in plastic coating?",
        "options": [
          "To make them look colorful",
          "Plastic is an insulator that prevents accidental electric shocks and short circuits",
          "To make the wire heavy",
          "To keep the wire warm"
        ],
        "correctAnswer": 1,
        "explanation": "Plastic insulation prevents electrons from leaking out and protects human users from shocks."
      },
      {
        "id": "c4-q5-8",
        "chapterId": "c4-ch-5",
        "question": "What happens when you turn a switch to the OFF position?",
        "options": [
          "It closes the circuit",
          "It opens (breaks) the circuit so current stops flowing",
          "It doubles the voltage",
          "It changes the battery polarity"
        ],
        "correctAnswer": 1,
        "explanation": "Turning OFF a switch physically disconnects the metal contacts, creating an open circuit."
      },
      {
        "id": "c4-q5-9",
        "chapterId": "c4-ch-5",
        "question": "Does pure distilled water conduct electricity as well as saltwater?",
        "options": [
          "Yes, exactly the same",
          "No, saltwater conducts much better because dissolved salt ions carry electric charge",
          "Distilled water conducts better",
          "Neither conducts"
        ],
        "correctAnswer": 1,
        "explanation": "Saltwater contains sodium and chloride ions that readily conduct electricity."
      },
      {
        "id": "c4-q5-10",
        "chapterId": "c4-ch-5",
        "question": "What component emits an audible sound when connected to a closed circuit?",
        "options": [
          "Piezo Buzzer",
          "LED",
          "Resistor",
          "Solar panel"
        ],
        "correctAnswer": 0,
        "explanation": "A buzzer converts electrical energy into mechanical vibration and audible sound."
      }
    ],
    "writtenQuestions": [
      {
        "id": "c4-w5-1",
        "chapterId": "c4-ch-5",
        "question": "Explain the difference between a conductor and an insulator with two examples of each.",
        "sampleAnswer": "Conductors allow electricity to flow freely through them (e.g., Copper, Iron). Insulators block the flow of electric current to protect against shocks (e.g., Rubber, Plastic)."
      },
      {
        "id": "c4-w5-2",
        "chapterId": "c4-ch-5",
        "question": "How can you identify the positive and negative terminals of an LED?",
        "sampleAnswer": "The longer lead wire of the LED is the positive Anode (+). The shorter lead wire is the negative Cathode (-). The plastic bulb casing also has a slight flat edge on the cathode side."
      },
      {
        "id": "c4-w5-3",
        "chapterId": "c4-ch-5",
        "question": "What is the difference between an open circuit and a closed circuit?",
        "sampleAnswer": "In a closed circuit, the electrical path is complete and unbroken so current flows. In an open circuit, the loop is broken or switch is open, halting current immediately."
      }
    ],
    "funFacts": [
      {
        "id": "c4-ff-5-1",
        "text": "Electricity travels through copper wires at nearly the speed of light\u2014around 300,000 kilometers per second!"
      }
    ]
  },
  {
    "id": "c4-ch-6",
    "classId": "class-4",
    "number": 6,
    "title": "Electro Magnetics - II",
    "tagline": "Series/Parallel, Logic Gates & Liquid Alarms",
    "color": "#7C3AED",
    "iconName": "Cpu",
    "lessons": [
      {
        "id": "c4-l6-1",
        "chapterId": "c4-ch-6",
        "order": 1,
        "title": "Series vs. Parallel Circuits",
        "subtitle": "Single path vs multiple branches",
        "summary": "In a Series Circuit, components are connected one after another in a single loop. If one bulb burns out or a switch is opened, the entire circuit stops working! In a Parallel Circuit, components are connected on separate branches. If one bulb goes out, current continues flowing through the other branches independently.",
        "keyPoints": [
          "Series: One continuous loop. Voltage splits; one failure halts all.",
          "Parallel: Independent branches. Full battery voltage per branch.",
          "Homes use parallel wiring so turning off bedroom lights leaves TVs running."
        ],
        "illustrationType": "c4_series_parallel"
      },
      {
        "id": "c4-l6-2",
        "chapterId": "c4-ch-6",
        "order": 2,
        "title": "Logic Gates: AND Gate & OR Gate",
        "subtitle": "Digital decision making and truth tables",
        "summary": "Logic gates are the building blocks of digital computers and robotics controllers. An AND Gate produces an output of 1 (HIGH) ONLY IF both Input A AND Input B are 1 (like two switches in series). An OR Gate produces an output of 1 if either Input A OR Input B (or both) are 1 (like two switches in parallel).",
        "keyPoints": [
          "AND Gate: Output 1 only when A=1 AND B=1.",
          "OR Gate: Output 1 when A=1 OR B=1 (or both).",
          "Truth tables list all possible input combinations and their resulting outputs."
        ],
        "illustrationType": "c4_logic_gates"
      },
      {
        "id": "c4-l6-3",
        "chapterId": "c4-ch-6",
        "order": 3,
        "title": "Water Level & Water Flow Alarms",
        "subtitle": "Liquid conductivity sensors for flood prevention",
        "summary": "Water contains natural mineral ions that conduct electric current. When water in a tank rises to a target height, it bridges two open probe wires, completing the circuit loop and sounding an alarm buzzer! Similarly, a water flow sensor measures water moving through a pipe to detect leaks before flooding occurs.",
        "keyPoints": [
          "Water bridges open sensor probes to complete the electrical circuit.",
          "Overhead water level alarms prevent municipal water wastage.",
          "Water flow turbine sensors detect broken pipes and leakages."
        ],
        "illustrationType": "c4_water_alarms"
      }
    ],
    "activities": [
      {
        "id": "c4-act-6",
        "chapterId": "c4-ch-6",
        "title": "Circuit Logic & Water Alarm Simulator",
        "type": "c4_activity_logic_alarm",
        "description": "Switch between series and parallel breadboards, toggle AND/OR logic gate truth tables, and fill the overhead water tank to test buzzer conductivity.",
        "instructions": [
          "Toggle series switches to see why both must be closed to complete the loop.",
          "Change logic inputs A and B to watch the live AND / OR gate output update.",
          "Fill water past 75% in the tank simulator to trigger the overflow alarm buzzer!"
        ],
        "xpReward": 100
      }
    ],
    "models": [
      {
        "id": "c4-mod-6",
        "chapterId": "c4-ch-6",
        "title": "Automated Tank Overflow Alarm",
        "subtitle": "Liquid conductivity warning system",
        "description": "Construct an overhead water tank level detector with brass water probes, warning buzzer, and red LED alert indicator.",
        "parts": [
          {
            "name": "Water Tank Beaker",
            "count": 1
          },
          {
            "name": "Brass Probe Electrodes",
            "count": 2
          },
          {
            "name": "9V Battery Snap",
            "count": 1
          },
          {
            "name": "High-Decibel Buzzer",
            "count": 1
          }
        ],
        "steps": [
          {
            "stepNumber": 1,
            "instruction": "Position the two brass probe electrodes at the 75% fill line of the beaker."
          },
          {
            "stepNumber": 2,
            "instruction": "Wire one electrode to battery positive and the other to the buzzer positive."
          },
          {
            "stepNumber": 3,
            "instruction": "Pour water into the beaker to test automatic buzzer sounding."
          }
        ],
        "xpReward": 150
      }
    ],
    "quiz": [
      {
        "id": "c4-q6-1",
        "chapterId": "c4-ch-6",
        "question": "In a series circuit, what happens if one light bulb is removed or burns out?",
        "options": [
          "All other bulbs stay lit normally",
          "All other bulbs immediately turn OFF because the single loop is broken",
          "The other bulbs get twice as bright",
          "The battery explodes"
        ],
        "correctAnswer": 1,
        "explanation": "In a series circuit, current has only one path; removing any bulb breaks the loop for all components."
      },
      {
        "id": "c4-q6-2",
        "chapterId": "c4-ch-6",
        "question": "Why are homes and schools wired in parallel circuits?",
        "options": [
          "It uses less wire",
          "Turning off one appliance does not switch off other appliances",
          "Parallel circuits are completely silent",
          "Batteries last forever in parallel"
        ],
        "correctAnswer": 1,
        "explanation": "Parallel circuits provide independent branches, so switching off one appliance doesn't affect others."
      },
      {
        "id": "c4-q6-3",
        "chapterId": "c4-ch-6",
        "question": "What is the rule for an AND logic gate?",
        "options": [
          "Output is 1 only when BOTH Input A AND Input B are 1",
          "Output is 1 if either input is 1",
          "Output is always 0",
          "Output is always 1"
        ],
        "correctAnswer": 0,
        "explanation": "An AND gate requires all inputs to be HIGH (1) for the output to be HIGH (1)."
      },
      {
        "id": "c4-q6-4",
        "chapterId": "c4-ch-6",
        "question": "What is the rule for an OR logic gate?",
        "options": [
          "Both inputs must be 0",
          "Output is 1 if EITHER Input A OR Input B (or both) are 1",
          "Output is 1 only when both are 0",
          "Only works at night"
        ],
        "correctAnswer": 1,
        "explanation": "An OR gate produces a 1 output whenever at least one of its inputs is 1."
      },
      {
        "id": "c4-q6-5",
        "chapterId": "c4-ch-6",
        "question": "How does a water level alarm detect when a tank is full?",
        "options": [
          "By taking photos of the tank",
          "Water conducts electricity between two probe wires, completing an open circuit to ring the buzzer",
          "By measuring the weight of the roof",
          "By using solar heat"
        ],
        "correctAnswer": 1,
        "explanation": "Water bridges the gap between two sensor probes, completing the circuit to activate the buzzer."
      },
      {
        "id": "c4-q6-6",
        "chapterId": "c4-ch-6",
        "question": "Which logic gate is equivalent to two switches connected in series?",
        "options": [
          "AND Gate",
          "OR Gate",
          "NOT Gate",
          "NAND Gate"
        ],
        "correctAnswer": 0,
        "explanation": "Two switches in series both need to be closed for current to pass\u2014identical to an AND gate."
      },
      {
        "id": "c4-q6-7",
        "chapterId": "c4-ch-6",
        "question": "Which logic gate is equivalent to two switches connected in parallel?",
        "options": [
          "AND Gate",
          "OR Gate",
          "XOR Gate",
          "NOR Gate"
        ],
        "correctAnswer": 1,
        "explanation": "Two switches in parallel allow current if either switch is closed\u2014identical to an OR gate."
      },
      {
        "id": "c4-q6-8",
        "chapterId": "c4-ch-6",
        "question": "What is the primary benefit of installing a water flow alarm in a building?",
        "options": [
          "Makes water taste sweeter",
          "Detects pipe bursts and leakages early to prevent flooding and water wastage",
          "Heats the water automatically",
          "Cleans the pipes with soap"
        ],
        "correctAnswer": 1,
        "explanation": "Water flow alarms detect abnormal continuous water flow caused by burst pipes or leaks."
      },
      {
        "id": "c4-q6-9",
        "chapterId": "c4-ch-6",
        "question": "In digital electronics, what do the binary numbers 0 and 1 represent?",
        "options": [
          "0 means cold, 1 means hot",
          "0 means LOW voltage (OFF / False), 1 means HIGH voltage (ON / True)",
          "0 means empty, 1 means big",
          "0 means morning, 1 means night"
        ],
        "correctAnswer": 1,
        "explanation": "In digital circuits, 0 represents LOW / OFF (0V) and 1 represents HIGH / ON (+5V or +3.3V)."
      },
      {
        "id": "c4-q6-10",
        "chapterId": "c4-ch-6",
        "question": "What is a table called that shows all possible inputs and outputs for a logic gate?",
        "options": [
          "Time Table",
          "Truth Table",
          "Multiplication Table",
          "Periodic Table"
        ],
        "correctAnswer": 1,
        "explanation": "A Truth Table displays every binary input combination and corresponding logical output."
      }
    ],
    "writtenQuestions": [
      {
        "id": "c4-w6-1",
        "chapterId": "c4-ch-6",
        "question": "Describe the main difference between series and parallel circuits.",
        "sampleAnswer": "A series circuit has only one single path for electricity; if one bulb is removed, the entire loop opens. A parallel circuit has multiple independent branches, allowing other appliances to continue operating if one is disconnected."
      },
      {
        "id": "c4-w6-2",
        "chapterId": "c4-ch-6",
        "question": "Write the rule for an AND gate and an OR gate.",
        "sampleAnswer": "AND Gate: The output is 1 only when both Input A and Input B are 1. OR Gate: The output is 1 if either Input A or Input B (or both) are 1."
      },
      {
        "id": "c4-w6-3",
        "chapterId": "c4-ch-6",
        "question": "How does a water level alarm prevent tank overflow?",
        "sampleAnswer": "When water fills to the high-level probe wires, water conducts electricity between them. This closes the circuit, powering a warning buzzer and alert LED to notify residents to switch off the pump."
      }
    ],
    "funFacts": [
      {
        "id": "c4-ff-6-1",
        "text": "The computer or tablet you are using right now contains billions of microscopic AND, OR, and NOT gates etched into tiny silicon chips!"
      }
    ]
  },
  {
    "id": "c4-ch-7",
    "classId": "class-4",
    "number": 7,
    "title": "PictoBlox",
    "tagline": "Block-Based Coding & AI Extensions",
    "color": "#0284C7",
    "iconName": "Terminal",
    "lessons": [
      {
        "id": "c4-l7-1",
        "chapterId": "c4-ch-7",
        "order": 1,
        "title": "Introduction to PictoBlox & Block Coding",
        "subtitle": "Graphical visual programming for robotics",
        "summary": "PictoBlox is a graphical block-based coding software based on Scratch 3.0. Instead of typing complex text syntax with punctuation errors, students snap color-coded jigsaw blocks together. PictoBlox connects visual code directly with AI models and robotics hardware boards like Quarky and Arduino.",
        "keyPoints": [
          "Block coding uses visual puzzle pieces instead of typed syntax.",
          "Based on Scratch 3.0 with robotics hardware support.",
          "Eliminates syntax errors so students focus on logical problem-solving."
        ],
        "illustrationType": "c4_pictoblox_intro"
      },
      {
        "id": "c4-l7-2",
        "chapterId": "c4-ch-7",
        "order": 2,
        "title": "7 Interface Areas of PictoBlox",
        "subtitle": "Menu Bar, Block Palette, Script Area, Stage, and Palettes",
        "summary": "The PictoBlox interface consists of 7 main areas: 1. Menu Bar (save, open, board selection), 2. Block Palette (color-coded blocks: Motion, Looks, Sound, Events, Control), 3. Script Area (where blocks snap together), 4. Stage Area (where sprites act out code), 5. Sprite Palette (character selection), 6. Stage Backdrop (background scene), and 7. Extension Button (+) for AI superpowers.",
        "keyPoints": [
          "Palette groups blocks into Motion, Looks, Sound, Events, Control.",
          "Script area is the coding workspace.",
          "Stage area visualizes live sprite animations and coordinates (X, Y)."
        ],
        "illustrationType": "c4_pictoblox_interface"
      },
      {
        "id": "c4-l7-3",
        "chapterId": "c4-ch-7",
        "order": 3,
        "title": "Project: 'Cat is Moving On PictoBlox'",
        "subtitle": "Green Flag, Forever loop, Motion, and Bouncing",
        "summary": "The primary Standard 4 coding project animates the cat sprite: 1. Start with [when green flag clicked], 2. Add [repeat forever] loop, 3. Inside loop add [move 10 steps], 4. Add [next costume] to simulate walking legs, and 5. Add [if on edge, bounce] so the cat never walks off screen.",
        "keyPoints": [
          "Green flag triggers event-driven scripts.",
          "Loops repeat actions indefinitely until stopped.",
          "[if on edge, bounce] turns the sprite around when it hits walls."
        ],
        "illustrationType": "c4_cat_moving_project"
      },
      {
        "id": "c4-l7-4",
        "chapterId": "c4-ch-7",
        "order": 4,
        "title": "AI Extensions in PictoBlox",
        "subtitle": "Text-to-Speech & Face Detection Vision",
        "summary": "By clicking the (+) Extension button, students unlock Artificial Intelligence: 1. Text to Speech: Converts written phrases into synthesized robot voices, and 2. Face Detection: Uses computer vision neural networks to locate human faces, count people, and detect emotional expressions.",
        "keyPoints": [
          "Text to Speech speaks words aloud in various voice pitches.",
          "Computer Vision detects faces, smiles, and eye tracking through webcams.",
          "Teaches real-world Machine Learning in child-friendly block format."
        ],
        "illustrationType": "c4_ai_extensions"
      }
    ],
    "activities": [
      {
        "id": "c4-act-7",
        "chapterId": "c4-ch-7",
        "title": "PictoBlox Studio & AI Laboratory",
        "type": "c4_activity_pictoblox",
        "description": "Drag and snap blocks in the script area, run the 'Cat is Moving On PictoBlox' project with green flag, and test AI Text-to-Speech & Face Detection.",
        "instructions": [
          "Stack [when flag clicked] + [move 15 steps] + [next costume] + [if on edge bounce].",
          "Click the Green Flag to watch the animated sprite walk and bounce!",
          "Switch to the AI Extensions tab to test synthesized speech and face detection."
        ],
        "xpReward": 100
      }
    ],
    "models": [
      {
        "id": "c4-mod-7",
        "chapterId": "c4-ch-7",
        "title": "AI Interactive Storytelling Game",
        "subtitle": "Speech-enabled animation",
        "description": "Program a multi-backdrop interactive storytelling project where two sprites hold conversations using Text-to-Speech.",
        "parts": [
          {
            "name": "PictoBlox Coding Engine",
            "count": 1
          },
          {
            "name": "Tobi / Cat Sprite",
            "count": 1
          },
          {
            "name": "Classroom Stage Backdrop",
            "count": 1
          },
          {
            "name": "Text-to-Speech Extension",
            "count": 1
          }
        ],
        "steps": [
          {
            "stepNumber": 1,
            "instruction": "Add the Cat sprite and load the School Hall backdrop."
          },
          {
            "stepNumber": 2,
            "instruction": "Add the Text-to-Speech extension and set voice pitch to Alto."
          },
          {
            "stepNumber": 3,
            "instruction": "Snap [speak 'Welcome to Robotics!'] block inside the green flag runner."
          }
        ],
        "xpReward": 150
      }
    ],
    "quiz": [
      {
        "id": "c4-q7-1",
        "chapterId": "c4-ch-7",
        "question": "What is PictoBlox?",
        "options": [
          "A video game for fighting",
          "A graphical block-based coding software based on Scratch 3.0",
          "A drawing tablet",
          "A web browser"
        ],
        "correctAnswer": 1,
        "explanation": "PictoBlox is a visual block programming platform that integrates robotics and AI tools."
      },
      {
        "id": "c4-q7-2",
        "chapterId": "c4-ch-7",
        "question": "What is a sprite in PictoBlox?",
        "options": [
          "A character or graphic object that performs actions on stage",
          "A cold soda drink",
          "A hardware screw",
          "The computer keyboard"
        ],
        "correctAnswer": 0,
        "explanation": "In PictoBlox and Scratch, characters or movable graphic elements are called sprites."
      },
      {
        "id": "c4-q7-3",
        "chapterId": "c4-ch-7",
        "question": "Which area of PictoBlox is where you drag and snap coding blocks together?",
        "options": [
          "Stage Area",
          "Script Area / Code Area",
          "Menu Bar",
          "Sprite Palette"
        ],
        "correctAnswer": 1,
        "explanation": "The large center workspace where blocks snap together is the Script (or Code) Area."
      },
      {
        "id": "c4-q7-4",
        "chapterId": "c4-ch-7",
        "question": "Which block starts a PictoBlox program when you click the flag?",
        "options": [
          "when green flag clicked",
          "stop all",
          "delete this sprite",
          "hide"
        ],
        "correctAnswer": 0,
        "explanation": "The 'when green flag clicked' event block is the universal starting trigger for programs."
      },
      {
        "id": "c4-q7-5",
        "chapterId": "c4-ch-7",
        "question": "In the project 'Cat is Moving On PictoBlox', which block keeps the sprite inside the stage screen?",
        "options": [
          "if on edge, bounce",
          "glide to random position",
          "say hello",
          "turn 15 degrees"
        ],
        "correctAnswer": 0,
        "explanation": "'if on edge, bounce' automatically reverses direction when the sprite touches the stage boundary."
      },
      {
        "id": "c4-q7-6",
        "chapterId": "c4-ch-7",
        "question": "Which block category is colored blue in PictoBlox?",
        "options": [
          "Motion",
          "Looks",
          "Sound",
          "Operators"
        ],
        "correctAnswer": 0,
        "explanation": "Motion blocks (move, turn, go to, point) are color-coded in blue."
      },
      {
        "id": "c4-q7-7",
        "chapterId": "c4-ch-7",
        "question": "What does the Text-to-Speech AI extension do in PictoBlox?",
        "options": [
          "Prints text onto paper",
          "Converts written text into spoken synthesized voice",
          "Deletes text from the screen",
          "Translates text into Japanese only"
        ],
        "correctAnswer": 1,
        "explanation": "Text-to-Speech allows sprites to speak words and sentences aloud in natural synthesized voices."
      },
      {
        "id": "c4-q7-8",
        "chapterId": "c4-ch-7",
        "question": "What can the Face Detection extension in PictoBlox do?",
        "options": [
          "Detect and track human faces and expressions through a webcam",
          "Wash the user's face",
          "Draw makeup on pictures",
          "Turn off the monitor"
        ],
        "correctAnswer": 0,
        "explanation": "Face Detection uses artificial intelligence vision models to detect faces and emotional expressions."
      },
      {
        "id": "c4-q7-9",
        "chapterId": "c4-ch-7",
        "question": "What button in PictoBlox is clicked to add AI and robotics hardware extensions?",
        "options": [
          "The (+) Extension button in the bottom-left corner",
          "The file save icon",
          "The minimize button",
          "The delete key"
        ],
        "correctAnswer": 0,
        "explanation": "The purple (+) button in the bottom-left opens the PictoBlox extensions library."
      },
      {
        "id": "c4-q7-10",
        "chapterId": "c4-ch-7",
        "question": "Why is block-based visual coding great for Class 4 learners?",
        "options": [
          "It eliminates syntax typing errors and builds strong logical thinking",
          "It replaces all teachers",
          "It only works without a computer",
          "It does not require thinking"
        ],
        "correctAnswer": 0,
        "explanation": "Block programming prevents syntax typos, allowing students to focus purely on algorithms and logic."
      }
    ],
    "writtenQuestions": [
      {
        "id": "c4-w7-1",
        "chapterId": "c4-ch-7",
        "question": "What is a sprite in PictoBlox?",
        "sampleAnswer": "A sprite is a character or graphic object (like a cat, ball, car, or robot) on the stage that performs actions and animations according to the code blocks in its script."
      },
      {
        "id": "c4-w7-2",
        "chapterId": "c4-ch-7",
        "question": "What is the purpose of the Green Flag in PictoBlox?",
        "sampleAnswer": "The Green Flag is the start button for PictoBlox programs. When clicked, it activates all scripts beginning with the 'when green flag clicked' event block."
      },
      {
        "id": "c4-w7-3",
        "chapterId": "c4-ch-7",
        "question": "Name two creative things you can create using PictoBlox.",
        "sampleAnswer": "1. Interactive video games and animated storytelling cartoons. 2. AI-powered projects with facial detection and robot hardware control (e.g., Arduino or evive)."
      }
    ],
    "funFacts": [
      {
        "id": "c4-ff-7-1",
        "text": "PictoBlox lets you program real physical robots like Quarky and Mars Rover kits using the exact same blocks you use to move the cat on screen!"
      }
    ]
  }
];

export const class4GlossaryTerms: GlossaryTerm[] = [
  {
    "term": "Acceleration",
    "definition": "Increase in speed over time.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Actuator",
    "definition": "Part that causes movement in a robot mechanism.",
    "chapter": "Chapter 1: Introduction to Robotics",
    "chapterNumber": 1
  },
  {
    "term": "Algorithm",
    "definition": "Step-by-step instructions designed to solve a problem.",
    "chapter": "Chapter 7: PictoBlox",
    "chapterNumber": 7
  },
  {
    "term": "Automation",
    "definition": "Working automatically without continuous human control.",
    "chapter": "Chapter 1: Introduction to Robotics",
    "chapterNumber": 1
  },
  {
    "term": "Axle",
    "definition": "A rod that holds gears or wheels and helps them rotate.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Battery",
    "definition": "A device that stores and supplies electrical power.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Block Coding",
    "definition": "Coding using ready-made visual drag-and-drop blocks.",
    "chapter": "Chapter 7: PictoBlox",
    "chapterNumber": 7
  },
  {
    "term": "Circuit",
    "definition": "A complete path along which electricity can flow.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Closed Circuit",
    "definition": "A complete unbroken path where electricity flows uninterrupted.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Compound Machine",
    "definition": "A machine made of two or more simple machines working together.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Condition",
    "definition": "A decision-making statement in coding (if/then branch).",
    "chapter": "Chapter 7: PictoBlox",
    "chapterNumber": 7
  },
  {
    "term": "Conductor",
    "definition": "A material (like copper or seawater) that allows electricity to pass through.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Controller",
    "definition": "The computational brain of a robot or machine.",
    "chapter": "Chapter 1: Introduction to Robotics",
    "chapterNumber": 1
  },
  {
    "term": "Current",
    "definition": "The continuous flow of electricity in a circuit.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Debugging",
    "definition": "Finding and fixing errors or mistakes in a computer program.",
    "chapter": "Chapter 7: PictoBlox",
    "chapterNumber": 7
  },
  {
    "term": "Driver Gear",
    "definition": "The primary gear connected to the power source that starts movement.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Driven Gear",
    "definition": "The secondary gear that receives movement from the driver gear.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Eco-friendly",
    "definition": "Safe for the natural environment without causing harm.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Efficiency",
    "definition": "How well a machine performs work without wasting energy.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Effort",
    "definition": "The force applied to a machine to accomplish work.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Energy",
    "definition": "The ability or capacity to do physical work.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Fulcrum",
    "definition": "The fixed pivot point around which a lever turns.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Gear",
    "definition": "A toothed wheel that changes rotational speed, torque, or direction.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Gear Ratio",
    "definition": "Ratio of driven gear teeth to driver gear teeth, determining mechanical advantage.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Gear Train",
    "definition": "A sequence of two or more interlocking gears.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Geothermal Energy",
    "definition": "Heat energy generated and stored inside the Earth.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Humanoid",
    "definition": "A robot having human-like form and physical characteristics.",
    "chapter": "Chapter 1: Introduction to Robotics",
    "chapterNumber": 1
  },
  {
    "term": "Hydroelectric",
    "definition": "Electricity produced from the gravitational flow of moving water.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Inclined Plane",
    "definition": "A sloping ramp surface used for raising heavy loads.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Infrastructure",
    "definition": "Basic physical systems of a region like roads, bridges, and power lines.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Innovation",
    "definition": "Creating new, practical, and helpful ideas or devices.",
    "chapter": "Chapter 1: Introduction to Robotics",
    "chapterNumber": 1
  },
  {
    "term": "Insulator",
    "definition": "A material (like rubber or plastic) that stops electrical flow.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Lever",
    "definition": "A rigid beam that pivots on a fulcrum to lift loads.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Load",
    "definition": "The weight or resistance an appliance or machine moves.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Loop",
    "definition": "A set of coding instructions that repeats multiple times.",
    "chapter": "Chapter 7: PictoBlox",
    "chapterNumber": 7
  },
  {
    "term": "Machine",
    "definition": "A tool that uses mechanical or electrical power to do work.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Mechanical Advantage",
    "definition": "The multiplication of input force achieved by a mechanical system.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Mechanics",
    "definition": "The science studying how forces cause objects to move or stay at rest.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Megastructure",
    "definition": "An exceptionally large, complex man-made construction.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Open Circuit",
    "definition": "A broken path where electricity cannot travel.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Parallel Circuit",
    "definition": "A circuit with multiple independent branches for current.",
    "chapter": "Chapter 6: Electro Magnetics - II",
    "chapterNumber": 6
  },
  {
    "term": "Pulley",
    "definition": "A grooved wheel with a rope used to lift heavy loads with less effort.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Renewable Energy",
    "definition": "Clean energy harvested from self-replenishing natural sources like sun and wind.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Robot",
    "definition": "A special automated machine that performs tasks based on instructions.",
    "chapter": "Chapter 1: Introduction to Robotics",
    "chapterNumber": 1
  },
  {
    "term": "RPM",
    "definition": "Revolutions Per Minute\u2014the number of complete rotations made in 60 seconds.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Scratch",
    "definition": "A visual block-based coding language and platform for beginners.",
    "chapter": "Chapter 7: PictoBlox",
    "chapterNumber": 7
  },
  {
    "term": "Sensor",
    "definition": "An electronic device that detects environmental changes like light, sound, or proximity.",
    "chapter": "Chapter 1: Introduction to Robotics",
    "chapterNumber": 1
  },
  {
    "term": "Simple Machine",
    "definition": "A basic mechanical device that changes the direction or magnitude of force.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Solar Energy",
    "definition": "Radiant heat and light energy captured from the sun.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Solar Panel",
    "definition": "A device containing photovoltaic cells that convert sunlight into electricity.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Speed",
    "definition": "How fast an object travels over a distance in a unit of time.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Sustainability",
    "definition": "Conserving resources responsibly to protect future generations.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  },
  {
    "term": "Switch",
    "definition": "An electrical device used to open (turn OFF) or close (turn ON) a circuit.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Torque",
    "definition": "Rotational turning force produced by a shaft or motor.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Transmission",
    "definition": "A mechanical gear system that transfers power from a motor to wheels.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Ultrasonic Sensor",
    "definition": "An electronic sensor that calculates distance using high-frequency sound waves.",
    "chapter": "Chapter 1: Introduction to Robotics",
    "chapterNumber": 1
  },
  {
    "term": "Variable",
    "definition": "A named container that stores data values in a computer program.",
    "chapter": "Chapter 7: PictoBlox",
    "chapterNumber": 7
  },
  {
    "term": "Velocity",
    "definition": "Speed of an object in a specified direction.",
    "chapter": "Chapter 3: Gears",
    "chapterNumber": 3
  },
  {
    "term": "Voltage",
    "definition": "Electrical potential difference or pressure driving current through a circuit.",
    "chapter": "Chapter 5: Electro Magnetics - I",
    "chapterNumber": 5
  },
  {
    "term": "Wind Energy",
    "definition": "Kinetic energy captured from moving air currents using wind turbines.",
    "chapter": "Chapter 4: Building Structures",
    "chapterNumber": 4
  }
];

export const class4Glossary: GlossaryTerm[] = class4GlossaryTerms;

export const class4Badges: Badge[] = [
  {
    "id": "badge-c4-1",
    "title": "Asimov\u2019s Ethics Scholar",
    "description": "Mastered Isaac Asimov\u2019s Three Laws of Robotics and Human vs Humanoid anatomy.",
    "icon": "\ud83e\udd16",
    "unlockedAtXp": 100,
    "chapterRequirement": "c4-ch-1"
  },
  {
    "id": "badge-c4-2",
    "title": "3D Pen Specialist",
    "description": "Mastered the 10 parts of the 3D Pen, heated nozzle to 190\u00b0C, and sculpted 3D Name Initials.",
    "icon": "\ud83d\udd8a\ufe0f",
    "unlockedAtXp": 200,
    "chapterRequirement": "c4-ch-2"
  },
  {
    "id": "badge-c4-3",
    "title": "4WD Transmission Master",
    "description": "Built a 4-Wheel-Drive car and manual R-N-1-2 gearbox transmission.",
    "icon": "\u2699\ufe0f",
    "unlockedAtXp": 320,
    "chapterRequirement": "c4-ch-3"
  },
  {
    "id": "badge-c4-4",
    "title": "Megastructure Architect",
    "description": "Analyzed the Burj Khalifa, Chenab Bridge, Hyperloops, and built a motorized Giant Wheel.",
    "icon": "\ud83c\udfa1",
    "unlockedAtXp": 440,
    "chapterRequirement": "c4-ch-4"
  },
  {
    "id": "badge-c4-5",
    "title": "Circuit Detective",
    "description": "Identified electrical conductors and insulators and mastered open vs closed circuits.",
    "icon": "\u26a1",
    "unlockedAtXp": 560,
    "chapterRequirement": "c4-ch-5"
  },
  {
    "id": "badge-c4-6",
    "title": "Logic Gate Pioneer",
    "description": "Built working AND/OR logic gates and constructed a liquid conductivity water alarm.",
    "icon": "\ud83d\udca1",
    "unlockedAtXp": 680,
    "chapterRequirement": "c4-ch-6"
  },
  {
    "id": "badge-c4-7",
    "title": "PictoBlox Animator",
    "description": "Programmed the moving cat project and experimented with AI Text-to-Speech extensions.",
    "icon": "\ud83d\udcbb",
    "unlockedAtXp": 800,
    "chapterRequirement": "c4-ch-7"
  },
  {
    "id": "badge-c4-8",
    "title": "Class 4 Robotics Champion",
    "description": "Graduated all 7 chapters of the Standard 4 Robotics & Innovation curriculum!",
    "icon": "\ud83c\udfc6",
    "unlockedAtXp": 950,
    "chapterRequirement": "c4-ch-7"
  }
];
