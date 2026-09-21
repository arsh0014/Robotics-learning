import { Chapter, GlossaryTerm, Badge } from '../../types/curriculum';

export const class5Chapters: Chapter[] = [
  {
    id: "c5-ch-1",
    classId: "class-5",
    number: 1,
    title: "Introduction to Electronics",
    tagline: "Breadboards, LEDs, Batteries & Circuit Safety",
    color: "#DC2626",
    iconName: "Zap",
    lessons: [
      {
        id: "c5-l1-1",
        chapterId: "c5-ch-1",
        order: 1,
        title: "What is Electronics & Electron Flow",
        subtitle: "Study of electrons, energy and automated control",
        summary: "Electronics is a branch of physics and engineering that deals with the study of electron behavior, flow, and control under different conditions. It is the fascinating field where electricity is harnessed to power and control devices that improve our daily lives—from game consoles and flashlights to smart home appliances.",
        keyPoints: [
          "Electronics studies and controls the flow of microscopic electrons.",
          "Unlike passive electricity that just provides power, electronics processes information and controls actions.",
          "Every modern device (smartphones, TVs, robots) relies on electronic circuits."
        ],
        illustrationType: "c5_electronics_intro"
      },
      {
        id: "c5-l1-2",
        chapterId: "c5-ch-1",
        order: 2,
        title: "The Breadboard Anatomy & Internal Matrix",
        subtitle: "How holes and buses are connected inside",
        summary: "A breadboard allows us to build and test electronic circuits without soldering. The top and bottom rows are connected horizontally (power rails, marked with red + and blue -). The middle section has vertical columns where pins connect side-by-side. A center trench separates the two sides for placing integrated circuit (IC) chips safely.",
        keyPoints: [
          "Power rails run horizontally along the top and bottom edges.",
          "Terminal strips in the middle connect holes in 5-pin vertical columns.",
          "The center divider trench isolates opposite pins of IC microchips."
        ],
        illustrationType: "c5_breadboard_matrix"
      },
      {
        id: "c5-l1-3",
        chapterId: "c5-ch-1",
        order: 3,
        title: "LEDs & Battery Power Sources",
        subtitle: "Light-Emitting Diodes, polarity, and chemical energy storage",
        summary: "An LED (Light Emitting Diode) is a semiconductor that emits light when electric current flows through it in the forward direction. The longer lead is the Anode (+), and the shorter lead with a flat rim edge is the Cathode (-). Batteries store chemical energy and convert it to electrical voltage (1.5V AA/AAA, 9V rectangular, 3V coin cells).",
        keyPoints: [
          "LEDs only conduct electricity in forward bias: from Anode (+) to Cathode (-).",
          "LEDs are extremely energy-efficient because they convert energy directly to light without heat.",
          "Batteries act as portable energy pumps with positive and negative terminals."
        ],
        illustrationType: "c5_led_battery"
      },
      {
        id: "c5-l1-4",
        chapterId: "c5-ch-1",
        order: 4,
        title: "Multimeter & Testing Tools",
        subtitle: "Measuring Voltage, Current, Resistance, and Continuity",
        summary: "A digital multimeter (DMM) is an electronic doctor's stethoscope. It features a rotary dial and two test probes (Red positive, Black ground) to measure Voltage (Volts), Current (Amperes), Resistance (Ohms), and Continuity (beeps when a closed conductive path exists).",
        keyPoints: [
          "Red probe connects to V/Ω/mA port, Black probe connects to COM (Common Ground).",
          "Continuity test beeps to confirm wires are unbroken without power.",
          "Always select the correct measurement mode before touching live circuit points."
        ],
        illustrationType: "c5_multimeter"
      }
    ],
    activities: [
      {
        id: "c5-act-1",
        chapterId: "c5-ch-1",
        title: "Interactive Breadboard Circuit Matrix & Polarity Lab",
        type: "c5_activity_breadboard",
        description: "Place components onto the virtual breadboard, connect power rails, orient LED polarity correctly, and power up the circuit.",
        instructions: [
          "Connect battery positive (red) to the top horizontal power rail.",
          "Connect battery negative (black) to the bottom ground rail.",
          "Place a 220Ω resistor between the power rail and vertical terminal column 10.",
          "Insert LED with Anode (+) in column 10 and Cathode (-) in column 12.",
          "Complete the circuit with a jumper wire from column 12 to ground!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c5-mod-1",
        chapterId: "c5-ch-1",
        title: "Dual-LED Signal Station",
        subtitle: "Breadboard-mounted switchable indicator station",
        description: "Construct a clean breadboard circuit featuring dual color-coded LEDs (Red and Green) with independent current limiting resistors and a master power switch.",
        parts: [
          { name: "Solderless Half-Size Breadboard", count: 1 },
          { name: "Red 5mm LED", count: 1 },
          { name: "Green 5mm LED", count: 1 },
          { name: "220Ω Resistor (Red-Red-Brown)", count: 2 },
          { name: "Slide Switch (SPDT)", count: 1 },
          { name: "9V Battery Snap with Wires", count: 1 },
          { name: "Jumper Wires (M-M)", count: 5 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Insert the slide switch into the center breadboard rows across the dividing trench." },
          { stepNumber: 2, instruction: "Connect the 9V battery red positive wire to the center pin of the slide switch." },
          { stepNumber: 3, instruction: "Connect the left switch output pin to row 5 and right switch output to row 15." },
          { stepNumber: 4, instruction: "Insert 220Ω resistors in series with each switch output to rows 8 and 18." },
          { stepNumber: 5, instruction: "Insert Red LED into row 8 (Anode) and Green LED into row 18 (Anode), with Cathodes to the negative ground bus." },
          { stepNumber: 6, instruction: "Flip the switch back and forth to toggle between Red alert and Green clear indicators!" }
        ],
        xpReward: 120
      }
    ],
    quiz: [
      {
        id: "c5-q1-1",
        chapterId: "c5-ch-1",
        question: "What is electronics primarily the study and control of?",
        options: ["Flow and behavior of electrons", "Movement of water pipes", "Static sound waves", "Magnetic compass needles only"],
        correctAnswer: 0,
        explanation: "Electronics is the branch of physics and engineering dealing with the behavior and flow of electrons in circuits."
      },
      {
        id: "c5-q1-2",
        chapterId: "c5-ch-1",
        question: "How are the holes in the top and bottom rows of a breadboard connected?",
        options: ["Horizontally (side-to-side)", "Vertically (top-to-bottom)", "Diagonally", "Not connected at all"],
        correctAnswer: 0,
        explanation: "The breadboard power rails run horizontally across the board to distribute positive voltage and ground."
      },
      {
        id: "c5-q1-3",
        chapterId: "c5-ch-1",
        question: "Which lead of an LED is the positive Anode?",
        options: ["The longer leg", "The shorter leg", "The leg next to the flat rim", "Either leg can be positive"],
        correctAnswer: 0,
        explanation: "The longer leg is the Anode (+), while the shorter leg beside the flat notch on the lens is the Cathode (-)."
      },
      {
        id: "c5-q1-4",
        chapterId: "c5-ch-1",
        question: "What does the continuity setting on a digital multimeter test?",
        options: ["Whether an unbroken conductive path exists between two points", "The temperature of the room", "The weight of the battery", "The brightness of daylight"],
        correctAnswer: 0,
        explanation: "Continuity mode sends a tiny current through the probes and beeps if the path is closed and unbroken."
      },
      {
        id: "c5-q1-5",
        chapterId: "c5-ch-1",
        question: "Why should you never connect the positive and negative terminals of a battery directly together with a wire?",
        options: ["It creates a dangerous short circuit that can cause overheating or fire", "It charges the battery faster", "It makes the battery produce cold air", "It increases battery voltage"],
        correctAnswer: 0,
        explanation: "A direct connection without a load causes a short circuit, drawing massive current that overheats the battery rapidly."
      }
    ],
    writtenQuestions: [
      {
        id: "c5-wq1-1",
        chapterId: "c5-ch-1",
        question: "Explain the difference between horizontal power rails and vertical terminal strips on a breadboard.",
        sampleAnswer: "Horizontal power rails run along the top and bottom to supply power (VCC and GND) across the board. Vertical strips in the middle connect holes in 5-pin columns for wiring individual components together."
      },
      {
        id: "c5-wq1-2",
        chapterId: "c5-ch-1",
        question: "Why does an LED need to be connected in the correct direction (polarity) to light up?",
        sampleAnswer: "An LED is a diode made of semiconductor P-N junctions that only allows current to pass in the forward bias direction (from positive Anode to negative Cathode). Reverse polarity blocks current flow entirely."
      }
    ],
    funFacts: [
      { id: "c5-ff-1", text: "The word 'Breadboard' comes from early radio pioneers who literally hammered nails into wooden bread-slicing boards to wire prototype circuits!" },
      { id: "c5-ff-2", text: "LEDs use up to 90% less energy than traditional incandescent bulbs and can last for over 50,000 hours of continuous lighting." }
    ]
  },
  {
    id: "c5-ch-2",
    classId: "class-5",
    number: 2,
    title: "Circuitry - I",
    tagline: "Switches, Resistors, Color Codes & Series Circuits",
    color: "#EA580C",
    iconName: "Layers",
    lessons: [
      {
        id: "c5-l2-1",
        chapterId: "c5-ch-2",
        order: 1,
        title: "Anatomy of an Electrical Circuit",
        subtitle: "Power source, load, conductive path, and control switch",
        summary: "An electric circuit is a continuous closed loop that allows electric current to travel from the power source through a load and back to the source. If the path is broken at any point, it becomes an Open Circuit and current stops immediately. A closed switch completes the loop.",
        keyPoints: [
          "A working circuit requires: Power Source (Battery), Conductive Path (Wires), Load (LED/Bulb), and Switch.",
          "Open Circuit: Broken path, zero current flow.",
          "Closed Circuit: Complete loop, normal current flow."
        ],
        illustrationType: "c5_circuit_types"
      },
      {
        id: "c5-l2-2",
        chapterId: "c5-ch-2",
        order: 2,
        title: "Switches & Pushbuttons",
        subtitle: "SPST, SPDT, Push-to-Make and Push-to-Break mechanisms",
        summary: "Switches are mechanical control gates in a circuit. An SPST (Single Pole Single Throw) switch has two contacts: ON or OFF. A momentary tactile pushbutton (Normally Open) only completes the circuit while pressed down and springs open when released.",
        keyPoints: [
          "Toggle and slide switches maintain their state until physically flipped.",
          "Momentary pushbuttons return to default open position upon release.",
          "Normally Open (NO) completes on press; Normally Closed (NC) breaks on press."
        ],
        illustrationType: "c5_switches"
      },
      {
        id: "c5-l2-3",
        chapterId: "c5-ch-2",
        order: 3,
        title: "Resistors & The 4-Band Color Code",
        subtitle: "Regulating current flow and reading color multiplier bands",
        summary: "Resistors oppose the flow of electric current, protecting delicate components like LEDs from burning out. Resistance is measured in Ohms (Ω). We read 4-band axial resistors using the international color chart: Black (0), Brown (1), Red (2), Orange (3), Yellow (4), Green (5), Blue (6), Violet (7), Gray (8), White (9), with Gold (±5%) tolerance.",
        keyPoints: [
          "Band 1 = 1st digit, Band 2 = 2nd digit, Band 3 = Multiplier (10^n), Band 4 = Tolerance.",
          "A 220Ω resistor has bands: Red (2), Red (2), Brown (×10), Gold (±5%).",
          "Higher resistance results in less current flow (Ohm's Law: I = V / R)."
        ],
        illustrationType: "c5_resistor_color_code"
      },
      {
        id: "c5-l2-4",
        chapterId: "c5-ch-2",
        order: 4,
        title: "Series Circuit Mechanics",
        subtitle: "Single-path current, voltage division and total resistance",
        summary: "In a series circuit, components are connected end-to-end along a single continuous path. The electric current (I) is identical through every component. Total resistance is the sum of all individual resistors: R_total = R1 + R2 + R3. If one component fails or is removed, the entire circuit breaks.",
        keyPoints: [
          "Current has only ONE path: I_total = I_1 = I_2 = I_3.",
          "Voltage divides across each component: V_total = V_1 + V_2 + V_3.",
          "If any single bulb blows in series, all other bulbs turn off instantly."
        ],
        illustrationType: "c5_series_circuit"
      }
    ],
    activities: [
      {
        id: "c5-act-2",
        chapterId: "c5-ch-2",
        title: "Interactive Resistor Color Code Band Decoder",
        type: "c5_activity_resistor_decoder",
        description: "Select 4 colored bands and calculate the exact resistance value in Ohms, or input a resistance target to discover the correct color stripe sequence.",
        instructions: [
          "Choose the 1st digit color band.",
          "Choose the 2nd digit color band.",
          "Choose the multiplier color band.",
          "Verify the calculated resistance against target circuit values (220Ω, 330Ω, 1kΩ, 10kΩ)!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c5-mod-2",
        chapterId: "c5-ch-2",
        title: "3-Stage Series Light Chain with Pushbutton Control",
        subtitle: "Single-loop circuit demonstrating voltage drop across multiple loads",
        description: "Wire three low-power LEDs in series with a current limiting resistor and momentary pushbutton on a breadboard to demonstrate voltage sharing and single-path current.",
        parts: [
          { name: "Half Breadboard", count: 1 },
          { name: "Red 5mm LEDs", count: 3 },
          { name: "100Ω Resistor", count: 1 },
          { name: "Momentary Pushbutton", count: 1 },
          { name: "9V Battery with Clip", count: 1 },
          { name: "Jumper Wires", count: 4 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Place the tactile pushbutton across the middle dividing trench." },
          { stepNumber: 2, instruction: "Connect battery positive (+) to one pin of the pushbutton." },
          { stepNumber: 3, instruction: "Connect the other pushbutton terminal to a 100Ω resistor." },
          { stepNumber: 4, instruction: "Connect the resistor to the Anode of LED 1." },
          { stepNumber: 5, instruction: "Connect the Cathode of LED 1 directly to the Anode of LED 2, and LED 2 Cathode to LED 3 Anode." },
          { stepNumber: 6, instruction: "Connect LED 3 Cathode to battery Ground (-). Press the pushbutton to illuminate all 3 LEDs simultaneously!" }
        ],
        xpReward: 120
      }
    ],
    quiz: [
      {
        id: "c5-q2-1",
        chapterId: "c5-ch-2",
        question: "What happens to the remaining lights in a series circuit if one bulb burns out?",
        options: ["All the lights go out immediately", "The other lights get twice as bright", "Only the burnt light is affected", "The battery explodes"],
        correctAnswer: 0,
        explanation: "Because there is only one continuous path for electric current in a series circuit, any break stops current to all components."
      },
      {
        id: "c5-q2-2",
        chapterId: "c5-ch-2",
        question: "What resistance value is represented by bands: Red (2), Red (2), Brown (×10)?",
        options: ["220 Ω", "22 Ω", "2,200 Ω", "22,000 Ω"],
        correctAnswer: 0,
        explanation: "Red = 2, Red = 2, Brown = 1 zero (×10), giving 22 × 10 = 220 Ohms."
      },
      {
        id: "c5-q2-3",
        chapterId: "c5-ch-2",
        question: "How do you calculate total resistance when two 100Ω resistors are placed in series?",
        options: ["Add them together: 100 + 100 = 200 Ω", "Multiply them: 100 × 100 = 10,000 Ω", "Divide them: 100 / 2 = 50 Ω", "Subtract them: 100 - 100 = 0 Ω"],
        correctAnswer: 0,
        explanation: "In a series circuit, total resistance is the sum of all individual resistances: R_total = R1 + R2."
      },
      {
        id: "c5-q2-4",
        chapterId: "c5-ch-2",
        question: "What is the primary role of a resistor placed in series with an LED?",
        options: ["To limit current and prevent the LED from burning out", "To change the LED color", "To store electricity like a battery", "To make the LED blink automatically"],
        correctAnswer: 0,
        explanation: "LEDs have very low internal resistance; without a current-limiting resistor, excessive current would destroy the diode instantly."
      },
      {
        id: "c5-q2-5",
        chapterId: "c5-ch-2",
        question: "How does a momentary tactile pushbutton behave?",
        options: ["It completes the circuit only while being pressed down", "It stays on forever once pressed", "It alternates colors", "It generates its own electricity"],
        correctAnswer: 0,
        explanation: "A momentary push-to-make button only closes the circuit while user finger pressure is applied."
      }
    ],
    writtenQuestions: [
      {
        id: "c5-wq2-1",
        chapterId: "c5-ch-2",
        question: "State Ohm's Law and explain what happens to current if resistance is increased while voltage stays constant.",
        sampleAnswer: "Ohm's Law states that Current (I) equals Voltage (V) divided by Resistance (R), or V = I × R. If resistance increases with constant voltage, the electric current flowing through the circuit decreases."
      },
      {
        id: "c5-wq2-2",
        chapterId: "c5-ch-2",
        question: "Why are old decorative festival lights wired in series inconvenient when troubleshooting?",
        sampleAnswer: "In series, all bulbs share one path. If a single filament breaks, the entire string goes dark, requiring each bulb to be tested individually to find the faulty one."
      }
    ],
    funFacts: [
      { id: "c5-ff-3", text: "The human body has an electrical resistance of about 1,000 to 100,000 Ohms depending on whether skin is dry or wet!" },
      { id: "c5-ff-4", text: "A single lightning bolt carries over 30,000 Amperes of electric current and 300 million Volts of potential energy." }
    ]
  },
  {
    id: "c5-ch-3",
    classId: "class-5",
    number: 3,
    title: "Circuitry - II",
    tagline: "Parallel Circuits, Buzzers, Potentiometers & LDR Sensors",
    color: "#D97706",
    iconName: "Activity",
    lessons: [
      {
        id: "c5-l3-1",
        chapterId: "c5-ch-3",
        order: 1,
        title: "Parallel Circuit Architecture",
        subtitle: "Multiple independent branches and uniform branch voltage",
        summary: "In a parallel circuit, components are connected across the same common voltage nodes, creating multiple independent pathways for electric current. Each branch receives the full source voltage (V_total = V_1 = V_2 = V_3). If one branch is disconnected or fails, all other branches continue operating uninterrupted.",
        keyPoints: [
          "Voltage is identical across all parallel branches.",
          "Total current is the sum of currents entering each branch: I_total = I_1 + I_2 + I_3.",
          "Total resistance decreases as more parallel branches are added: 1/R_total = 1/R1 + 1/R2."
        ],
        illustrationType: "c5_parallel_circuit"
      },
      {
        id: "c5-l3-2",
        chapterId: "c5-ch-3",
        order: 2,
        title: "Series vs Parallel Comparison",
        subtitle: "Why household wiring and robotics power buses use parallel connections",
        summary: "Homes and mobile robots use parallel wiring so appliances and subsystems operate independently at full rated voltage. In series, adding loads divides voltage and dims lights; in parallel, adding loads maintains constant voltage across each branch while increasing total battery current demand.",
        keyPoints: [
          "Series: Same current, divided voltage, single failure stops everything.",
          "Parallel: Same voltage, divided current, independent operation of each load.",
          "Robot drive motors and microcontrollers must be powered in parallel to prevent brownouts."
        ],
        illustrationType: "c5_series_vs_parallel"
      },
      {
        id: "c5-l3-3",
        chapterId: "c5-ch-3",
        order: 3,
        title: "Piezoelectric Buzzers & Sound Generation",
        subtitle: "Converting electrical oscillations into acoustic warning beeps",
        summary: "A buzzer produces sound when electrical voltage causes a piezo crystal disc to vibrate rapidly. Active buzzers have an internal oscillator circuit that produces a steady beep whenever DC voltage is applied. Passive buzzers require an oscillating frequency signal to generate different musical pitches.",
        keyPoints: [
          "Active buzzers beep immediately with DC voltage; longer pin is positive (+).",
          "Used in smoke detectors, microwave timers, reverse car sensors, and robot alarms.",
          "Piezoelectric effect: mechanical strain produces electricity, and electrical voltage produces physical vibration."
        ],
        illustrationType: "c5_buzzer"
      },
      {
        id: "c5-l3-4",
        chapterId: "c5-ch-3",
        order: 4,
        title: "Variable Resistors & LDR Light Sensors",
        subtitle: "Potentiometers for manual adjustment and Light Dependent Resistors for optical sensing",
        summary: "A potentiometer is a 3-terminal variable resistor with an adjustable rotary wiper arm, commonly used for volume dials and speed control. A Light Dependent Resistor (LDR or photoresistor) changes resistance based on ambient light: in darkness its resistance is very high (up to 1MΩ), and in bright light its resistance drops to a few hundred Ohms.",
        keyPoints: [
          "Potentiometers have 3 pins: two fixed ends and one center wiper pin.",
          "LDR: Bright light = Low Resistance; Darkness = High Resistance.",
          "LDRs paired with a fixed resistor form a voltage divider that acts as an automatic light detector."
        ],
        illustrationType: "c5_ldr_potentiometer"
      }
    ],
    activities: [
      {
        id: "c5-act-3",
        chapterId: "c5-ch-3",
        title: "Smart Automatic Night Lamp & Streetlight Simulator",
        type: "c5_activity_night_lamp",
        description: "Slide the ambient sunlight control from day to night and observe the LDR resistance change, triggering the automatic streetlight and warning buzzer at twilight.",
        instructions: [
          "Examine the LDR voltage divider graph.",
          "Drag the sunlight slider to simulate daytime (10,000 Lux). Observe low resistance (300Ω) and LED OFF.",
          "Drag the slider towards midnight (10 Lux). Watch resistance climb past 100kΩ.",
          "Observe the switching transistor activate the automatic LED streetlight and alert buzzer!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c5-mod-3",
        chapterId: "c5-ch-3",
        title: "Smart Twilight Streetlight & Burglar Alarm",
        subtitle: "LDR-activated optical sensor circuit with parallel indicators and buzzer",
        description: "Build an autonomous light-sensing circuit on a breadboard using an LDR photoresistor, NPN transistor switch, indicator LED, and acoustic buzzer wired in parallel branches.",
        parts: [
          { name: "Breadboard", count: 1 },
          { name: "LDR Photoresistor", count: 1 },
          { name: "NPN Transistor (BC547 / 2N2222)", count: 1 },
          { name: "10kΩ Resistor (Brown-Black-Orange)", count: 1 },
          { name: "220Ω Resistor", count: 1 },
          { name: "Super-Bright White LED", count: 1 },
          { name: "5V Active Buzzer", count: 1 },
          { name: "9V Battery and Snap Clip", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Insert the BC547 transistor into breadboard columns with Collector, Base, and Emitter pins separated." },
          { stepNumber: 2, instruction: "Connect the LDR between battery positive (+) and the transistor Base pin." },
          { stepNumber: 3, instruction: "Connect the 10kΩ pulldown resistor from the transistor Base pin to Ground (-)." },
          { stepNumber: 4, instruction: "Wire the LED (with 220Ω resistor) and active buzzer in parallel between positive (+) and the transistor Collector." },
          { stepNumber: 5, instruction: "Connect transistor Emitter directly to Ground (-)." },
          { stepNumber: 6, instruction: "Cover the LDR with your palm to simulate darkness: the transistor turns ON, illuminating the streetlight and sounding the alarm!" }
        ],
        xpReward: 130
      }
    ],
    quiz: [
      {
        id: "c5-q3-1",
        chapterId: "c5-ch-3",
        question: "Why are household electrical outlets connected in parallel rather than series?",
        options: ["So appliances receive full voltage and operate independently", "To make wires thinner", "Because parallel circuits don't require electricity", "To make all lights flicker together"],
        correctAnswer: 0,
        explanation: "Parallel wiring ensures that every outlet provides the full 230V/110V supply, and turning off one appliance doesn't shut down the whole house."
      },
      {
        id: "c5-q3-2",
        chapterId: "c5-ch-3",
        question: "What happens to the electrical resistance of an LDR (photoresistor) when bright light falls on it?",
        options: ["Its resistance decreases significantly", "Its resistance increases to infinity", "Its resistance stays exactly the same", "It transforms into a motor"],
        correctAnswer: 0,
        explanation: "Photons of light strike the semiconductor material, releasing charge carriers that drastically lower the LDR's resistance."
      },
      {
        id: "c5-q3-3",
        chapterId: "c5-ch-3",
        question: "In a parallel circuit with three branches, how does voltage across branch 1 compare to branch 2?",
        options: ["Voltage is exactly the same across both branches", "Branch 1 has double the voltage", "Branch 2 has zero voltage", "Voltage depends on wire color"],
        correctAnswer: 0,
        explanation: "A fundamental property of parallel circuits is that voltage is identical across every connected parallel branch."
      },
      {
        id: "c5-q3-4",
        chapterId: "c5-ch-3",
        question: "Which type of buzzer sounds immediately when connected to steady DC power?",
        options: ["Active Buzzer", "Passive Buzzer", "Piezo Speaker", "Guitar Pickup"],
        correctAnswer: 0,
        explanation: "Active buzzers contain an internal oscillating oscillator circuit that generates sound automatically when DC power is applied."
      },
      {
        id: "c5-q3-5",
        chapterId: "c5-ch-3",
        question: "What is the center terminal of a standard 3-pin potentiometer called?",
        options: ["Wiper", "Ground bus", "Cathode", "Filament"],
        correctAnswer: 0,
        explanation: "The center pin is the wiper contact that slides across the resistive track as the knob rotates."
      }
    ],
    writtenQuestions: [
      {
        id: "c5-wq3-1",
        chapterId: "c5-ch-3",
        question: "Describe how an LDR and a transistor work together to turn on a streetlight automatically at sunset.",
        sampleAnswer: "During daylight, the LDR has low resistance, keeping the transistor base below its turn-on threshold. As darkness falls, LDR resistance surges, causing voltage at the transistor base to rise above 0.7V, which switches the transistor ON and powers the lamp."
      },
      {
        id: "c5-wq3-2",
        chapterId: "c5-ch-3",
        question: "Explain what happens to total equivalent resistance when you add more parallel branches to a circuit.",
        sampleAnswer: "Adding more parallel branches decreases total resistance because it creates additional pathways for electric current to flow, similar to opening extra lanes on a busy highway."
      }
    ],
    funFacts: [
      { id: "c5-ff-5", text: "Solar panels are essentially giant arrays of semiconductor photodiodes operating on the same photovoltaic physics as light sensors!" },
      { id: "c5-ff-6", text: "Piezoelectricity was discovered in 1880 by Pierre and Jacques Curie using quartz crystals." }
    ]
  },
  {
    id: "c5-ch-4",
    classId: "class-5",
    number: 4,
    title: "Power Screw",
    tagline: "Mechanical Advantage, Lead Screws & Scissor Lifts",
    color: "#059669",
    iconName: "Settings",
    lessons: [
      {
        id: "c5-l4-1",
        chapterId: "c5-ch-4",
        order: 1,
        title: "Power Screw Mechanics & Motion Conversion",
        subtitle: "Transforming rotary motion into massive linear lifting force",
        summary: "A power screw (also called a lead screw or translation screw) is a mechanical device that converts rotational motion into linear motion. When a threaded shaft is turned, the mating nut moves along the length of the shaft. Because of the gentle incline of the spiral threads, it provides immense mechanical advantage.",
        keyPoints: [
          "Converts rotary torque from a motor or hand crank into high-thrust linear force.",
          "Acts as an inclined plane wrapped around a cylinder.",
          "Self-locking property: high friction prevents the load from driving the screw backwards."
        ],
        illustrationType: "c5_power_screw_intro"
      },
      {
        id: "c5-l4-2",
        chapterId: "c5-ch-4",
        order: 2,
        title: "Thread Anatomy: Pitch, Lead & Profiles",
        subtitle: "Pitch, Lead, Major/Minor diameters, and Square vs Acme threads",
        summary: "The Pitch (p) is the distance from the crest of one thread to the crest of the next adjacent thread. The Lead (L) is the linear distance the nut travels along the shaft in one complete 360° revolution. For single-start screws, Lead = Pitch. Industrial power screws use Square or Acme (29° trapezoidal) threads for high load transmission.",
        keyPoints: [
          "Pitch (p): Distance between consecutive thread peaks.",
          "Lead (L): Axial travel distance per single 360° rotation.",
          "Acme and Trapezoidal threads are stronger and easier to manufacture than V-threads."
        ],
        illustrationType: "c5_thread_anatomy"
      },
      {
        id: "c5-l4-3",
        chapterId: "c5-ch-4",
        order: 3,
        title: "Mechanical Advantage & Force Multiplication",
        subtitle: "How a human can lift a 2,000 kg automobile with one hand",
        summary: "Mechanical Advantage (MA) is the ratio of output force to input effort. A power screw spreads a heavy load across a long helical travel path. In an automobile scissor jack, turning the handle with a small effort force (e.g. 50 N) generates thousands of Newtons of upward thrust, allowing a person to easily hoist a 2-ton vehicle.",
        keyPoints: [
          "Mechanical Advantage = Distance effort travels / Distance load moves.",
          "A small rotational force over many turns lifts an enormous weight a short distance.",
          "Trade-off: High force output requires low linear travel speed."
        ],
        illustrationType: "c5_mechanical_advantage"
      },
      {
        id: "c5-l4-4",
        chapterId: "c5-ch-4",
        order: 4,
        title: "Scissor Lifts & Industrial Mechanisms",
        subtitle: "Pantograph linkage geometry driven by a horizontal lead screw",
        summary: "A scissor lift uses criss-cross 'X' patterned pantograph linkages. When a horizontal power screw pulls the bottom pivot points closer together, the geometric linkage multiplies the motion vertically, elevating the top work platform smoothly to great heights.",
        keyPoints: [
          "Crossed pantograph links convert horizontal closing motion into vertical lift.",
          "Used in aerial maintenance platforms, aircraft cargo loaders, and hospital beds.",
          "Motorized lead screws provide steady, non-slipping vertical positioning."
        ],
        illustrationType: "c5_scissor_lift"
      }
    ],
    activities: [
      {
        id: "c5-act-4",
        chapterId: "c5-ch-4",
        title: "Interactive Scissor Lift Mechanical Advantage Simulator",
        type: "c5_activity_scissor_lift",
        description: "Turn the virtual hand crank or motor drive to rotate the central power screw, observing thread turns, pitch displacement, pantograph arm angle, and platform lift height.",
        instructions: [
          "Set the thread pitch (e.g., 2mm per turn) and total screw turns.",
          "Rotate the crank clockwise to draw the bottom linkage pins together.",
          "Observe the vertical elevation increase and calculate the mechanical advantage multiplier!",
          "Test lifting a virtual 500kg cargo load with minimal motor torque."
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c5-mod-4",
        chapterId: "c5-ch-4",
        title: "Motorized Scissor Lift Platform",
        subtitle: "Mechanical scissor mechanism driven by a central M8 lead screw and gearmotor",
        description: "Construct a sturdy working scissor lift model featuring dual-stage pantograph struts, a threaded lead screw shaft, and a high-torque geared DC motor.",
        parts: [
          { name: "Scissor Linkage Beams (Punched 11-hole)", count: 8 },
          { name: "Threaded Lead Screw Shaft (M8 x 150mm)", count: 1 },
          { name: "M8 Brass Traveling Nut Block", count: 1 },
          { name: "Flanged Ball Bearings", count: 2 },
          { name: "Base Frame Plate", count: 1 },
          { name: "Top Cargo Deck Plate", count: 1 },
          { name: "60 RPM Geared DC Motor", count: 1 },
          { name: "DPDT Reversing Switch with Battery Pack", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Assemble the crossed 'X' linkages using shoulder bolts to create two dual-stage scissor side assemblies." },
          { stepNumber: 2, instruction: "Mount the fixed bottom pivot points to the front of the base plate." },
          { stepNumber: 3, instruction: "Install the central threaded lead screw shaft through the base bearing mounts." },
          { stepNumber: 4, instruction: "Thread the traveling brass nut onto the lead screw and pin it to the sliding bottom scissor pivots." },
          { stepNumber: 5, instruction: "Couple the geared DC motor shaft to the lead screw using a flexible coupler." },
          { stepNumber: 6, instruction: "Attach the top cargo platform to the upper scissor pivots and test forward/reverse elevation using the DPDT switch!" }
        ],
        xpReward: 140
      }
    ],
    quiz: [
      {
        id: "c5-q4-1",
        chapterId: "c5-ch-4",
        question: "What fundamental motion conversion does a power screw perform?",
        options: ["Rotational motion into linear motion", "Linear motion into sound waves", "Magnetic force into heat", "Light into electricity"],
        correctAnswer: 0,
        explanation: "Power screws turn rotational shaft torque into linear forward or backward travel of the mating nut."
      },
      {
        id: "c5-q4-2",
        chapterId: "c5-ch-4",
        question: "What is the 'pitch' of a threaded screw?",
        options: ["Distance between the crests of two adjacent threads", "Total length of the entire screw", "Diameter of the motor shaft", "Weight of the steel nut"],
        correctAnswer: 0,
        explanation: "Pitch is the distance measured parallel to the axis between corresponding points on adjacent thread forms."
      },
      {
        id: "c5-q4-3",
        chapterId: "c5-ch-4",
        question: "Why can a small child raise a car using a scissor screw jack?",
        options: ["Because of high mechanical advantage multiplying effort force", "Because cars become weightless on jacks", "Because screw threads eliminate gravity", "Because the jack contains rocket fuel"],
        correctAnswer: 0,
        explanation: "The screw's inclined plane geometry gives huge mechanical advantage, trading many small turns for enormous lifting force."
      },
      {
        id: "c5-q4-4",
        chapterId: "c5-ch-4",
        question: "What thread shape is commonly used in heavy-duty machinery due to its strength and efficiency?",
        options: ["Acme / Trapezoidal thread", "Sharp needle thread", "Zigzag thread", "Square-wave audio thread"],
        correctAnswer: 0,
        explanation: "Acme threads (29° angle) and trapezoidal threads offer thicker roots and superior load-bearing capacity for power transmission."
      },
      {
        id: "c5-q4-5",
        chapterId: "c5-ch-4",
        question: "In a scissor lift, what happens when the horizontal distance between the bottom pivot pins decreases?",
        options: ["The top platform rises vertically", "The platform collapses downward", "The scissor linkages unscrew", "The motor spins backwards"],
        correctAnswer: 0,
        explanation: "Pulling the base pivot points closer together forces the scissor 'X' angles to close up, pushing the platform upward."
      }
    ],
    writtenQuestions: [
      {
        id: "c5-wq4-1",
        chapterId: "c5-ch-4",
        question: "Explain what is meant by the 'self-locking' property of a power screw and why it is critical for safety.",
        sampleAnswer: "Self-locking occurs when thread friction is high enough that the downward weight of a load cannot force the screw to rotate backwards on its own. This prevents car jacks or scissor lifts from accidentally dropping if power is lost."
      },
      {
        id: "c5-wq4-2",
        chapterId: "c5-ch-4",
        question: "Distinguish between 'Pitch' and 'Lead' on a multi-start power screw.",
        sampleAnswer: "Pitch is the axial distance between adjacent thread crests. Lead is the linear distance the nut advances in one complete 360-degree rotation. On a double-start screw, Lead = 2 × Pitch."
      }
    ],
    funFacts: [
      { id: "c5-ff-7", text: "Archimedes invented the water screw in the 3rd century BC to pump irrigation water up from low-lying riverbeds!" },
      { id: "c5-ff-8", text: "Modern 3D printers and CNC machines use high-precision ball screws that achieve positioning accuracy within 0.005 millimeters." }
    ]
  },
  {
    id: "c5-ch-5",
    classId: "class-5",
    number: 5,
    title: "Rack & Pinion",
    tagline: "Rotary-to-Linear Gear Meshing & Vehicle Steering",
    color: "#0284C7",
    iconName: "Compass",
    lessons: [
      {
        id: "c5-l5-1",
        chapterId: "c5-ch-5",
        order: 1,
        title: "Fundamentals of Rack & Pinion",
        subtitle: "Pairing a circular gear with a straight toothed linear track",
        summary: "A rack and pinion is a gear mechanism composed of a circular spur gear (the Pinion) meshing with a flat, straight toothed bar (the Rack). As the pinion rotates about its central axis, its teeth push against the rack's teeth, driving the rack in a straight line.",
        keyPoints: [
          "Pinion: Circular rotating gear.",
          "Rack: Flat linear toothed rail (conceptually an infinite-radius gear).",
          "Converts rotary motion to continuous linear motion and vice versa with zero slip."
        ],
        illustrationType: "c5_rack_pinion_intro"
      },
      {
        id: "c5-l5-2",
        chapterId: "c5-ch-5",
        order: 2,
        title: "Kinematics & Linear Travel Calculation",
        subtitle: "Calculating linear rack displacement per revolution",
        summary: "Because the teeth mesh positively without slipping, the linear distance traveled by the rack in one full 360° turn of the pinion equals the pinion's pitch circumference: Distance = π × Pitch Diameter = Number of Teeth × Circular Pitch.",
        keyPoints: [
          "Linear travel per revolution: L = π × D_pitch.",
          "A pinion with 20 teeth and 2mm tooth pitch moves the rack exactly 40mm per turn.",
          "Pinion speed in RPM directly dictates the rack's linear speed in mm/second."
        ],
        illustrationType: "c5_rack_kinematics"
      },
      {
        id: "c5-l5-3",
        chapterId: "c5-ch-5",
        order: 3,
        title: "Automotive Steering Systems",
        subtitle: "How turning the steering wheel turns the front wheels of a car",
        summary: "Almost all modern passenger cars use rack and pinion steering. The steering wheel is connected to a steering shaft with a pinion gear at its base. When the driver turns the wheel, the pinion moves the steering rack left or right, which pushes tie rods that swivel the front wheel steering knuckles.",
        keyPoints: [
          "Steering wheel rotates pinion gear.",
          "Pinion slides steering rack horizontally across the chassis.",
          "Tie rods transmit linear rack push/pull to angle the road wheels accurately."
        ],
        illustrationType: "c5_car_steering"
      },
      {
        id: "c5-l5-4",
        chapterId: "c5-ch-5",
        order: 4,
        title: "Robotic Grippers & Linear Gantries",
        subtitle: "Symmetrical dual-rack grippers and CNC sliding axes",
        summary: "In robotics, a single motor-driven pinion placed between two opposing racks moves both gripper fingers simultaneously in opposite directions—pinching inwards to grip an object or sliding outwards to release it. Rack and pinion sets also drive heavy sliding gates and CNC gantry bridges.",
        keyPoints: [
          "Opposing dual racks driven by one center pinion create balanced robotic grippers.",
          "Provides positive drive that cannot slip under high acceleration.",
          "Mountain railway trains use center rack rails (funiculars) to climb steep slopes."
        ],
        illustrationType: "c5_robotic_gripper"
      }
    ],
    activities: [
      {
        id: "c5-act-5",
        chapterId: "c5-ch-5",
        title: "Interactive Automotive Rack & Pinion Steering Lab",
        type: "c5_activity_steering",
        description: "Turn the virtual steering wheel from -180° to +180° and observe the pinion gear translate the horizontal rack, adjusting front tire angles with Ackermann geometry.",
        instructions: [
          "Rotate the steering wheel on screen.",
          "Track the teeth meshing on the rack and observe linear displacement in millimeters.",
          "Inspect how tie rods pivot the left and right wheel hubs.",
          "Calculate the steering ratio between wheel rotation and steering angle!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c5-mod-5",
        chapterId: "c5-ch-5",
        title: "Steerable 4-Wheel Chassis with Working Rack & Pinion",
        subtitle: "Complete automotive front-axle steering system model with steering column and tie rods",
        description: "Construct a functional 4-wheel mobile chassis featuring a working steering wheel, universal joint, rack and pinion steering box, pivoting kingpins, and front wheel tie rods.",
        parts: [
          { name: "Front Axle Support Beam", count: 1 },
          { name: "Toothed Gear Rack (80mm)", count: 1 },
          { name: "16-Tooth Spur Pinion Gear", count: 1 },
          { name: "Pivoting Steering Knuckles", count: 2 },
          { name: "Tie Rod Linkages", count: 2 },
          { name: "Steering Column Shaft with Mini Steering Wheel", count: 1 },
          { name: "Rubber Wheels (60mm)", count: 4 },
          { name: "Rear Fixed Axle", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount the left and right pivoting steering knuckles to the front axle beam using kingpin pins." },
          { stepNumber: 2, instruction: "Slide the toothed gear rack horizontally through the center guide bracket." },
          { stepNumber: 3, instruction: "Connect tie rods from the left and right ends of the rack to the steering knuckle arms." },
          { stepNumber: 4, instruction: "Mount the 16-tooth pinion gear so its teeth mesh firmly with the rack teeth." },
          { stepNumber: 5, instruction: "Attach the steering column and wheel to the pinion shaft." },
          { stepNumber: 6, instruction: "Install the road wheels and turn the steering wheel: watch the front wheels pivot smoothly left and right!" }
        ],
        xpReward: 140
      }
    ],
    quiz: [
      {
        id: "c5-q5-1",
        chapterId: "c5-ch-5",
        question: "What is the flat, straight toothed bar called in a rack and pinion set?",
        options: ["The Rack", "The Pinion", "The Crank", "The Cam"],
        correctAnswer: 0,
        explanation: "The flat linear bar is the Rack, and the round mating gear is the Pinion."
      },
      {
        id: "c5-q5-2",
        chapterId: "c5-ch-5",
        question: "If a pinion gear has 15 teeth and a pitch of 2mm, how far does the rack move in one full turn?",
        options: ["30 mm", "15 mm", "2 mm", "60 mm"],
        correctAnswer: 0,
        explanation: "Distance = Number of Teeth × Tooth Pitch = 15 × 2mm = 30 mm."
      },
      {
        id: "c5-q5-3",
        chapterId: "c5-ch-5",
        question: "Where is the rack and pinion mechanism universally found in everyday life?",
        options: ["Automobile steering systems", "Microwave turntables", "Electric ceiling fans", "LED light bulbs"],
        correctAnswer: 0,
        explanation: "Almost all cars use rack and pinion to translate steering wheel turns into horizontal wheel steering motion."
      },
      {
        id: "c5-q5-4",
        chapterId: "c5-ch-5",
        question: "How does a dual-rack robotic gripper open and close its two fingers symmetrically?",
        options: ["A single center pinion rotates between two opposing racks facing opposite directions", "Two separate batteries pull strings", "Magnets repel each other", "Gravity pulls them down"],
        correctAnswer: 0,
        explanation: "When a center pinion turns between opposing racks, one rack moves left while the other moves right simultaneously."
      },
      {
        id: "c5-q5-5",
        chapterId: "c5-ch-5",
        question: "Why do mountain railways (cog railways / funiculars) use a center rack rail?",
        options: ["To prevent metal train wheels from slipping on steep mountain inclines", "To supply electricity only", "To make the train louder", "To store extra luggage"],
        correctAnswer: 0,
        explanation: "Positive gear teeth engagement on a rack rail allows trains to climb slopes far steeper than smooth steel wheels can grip."
      }
    ],
    writtenQuestions: [
      {
        id: "c5-wq5-1",
        chapterId: "c5-ch-5",
        question: "Describe step-by-step how turning a car's steering wheel turns the front road tires.",
        sampleAnswer: "The driver rotates the steering wheel, turning the steering column shaft and pinion gear. The pinion drives the horizontal rack gear left or right. Tie rods attached to the ends of the rack push or pull the steering knuckles, pivoting the wheels."
      },
      {
        id: "c5-wq5-2",
        chapterId: "c5-ch-5",
        question: "What is an advantage of a rack and pinion drive compared to a belt or friction roller drive?",
        sampleAnswer: "A rack and pinion provides positive, non-slip mechanical engagement capable of transmitting high loads with precise positioning accuracy, whereas friction drives can slip under load or moisture."
      }
    ],
    funFacts: [
      { id: "c5-ff-9", text: "The Mount Washington Cog Railway in New Hampshire, built in 1868, was the world's first rack-and-pinion mountain climbing railway!" },
      { id: "c5-ff-10", text: "High-speed CNC laser cutters use precision helical rack and pinions to accelerate heavy gantry heads at over 2G of acceleration." }
    ]
  },
  {
    id: "c5-ch-6",
    classId: "class-5",
    number: 6,
    title: "Remote Control",
    tagline: "RF vs IR, Multi-Channel TX/RX & H-Bridge Motor Control",
    color: "#7C3AED",
    iconName: "Radio",
    lessons: [
      {
        id: "c5-l6-1",
        chapterId: "c5-ch-6",
        order: 1,
        title: "Transmitter (TX) & Receiver (RX) Systems",
        subtitle: "Wireless signals, antenna tuning, and packet transmission",
        summary: "A remote control system consists of two essential units: the Transmitter (TX), which encodes user joystick commands into high-frequency wireless electromagnetic waves, and the Receiver (RX), which captures the radio signal, decodes the instructions, and commands motors on the robot.",
        keyPoints: [
          "Transmitter (TX) is held by the operator; Receiver (RX) is onboard the robot.",
          "Carrier frequencies: 2.4 GHz radio frequency is standard for modern remote-controlled models.",
          "Pairing binds a specific TX and RX together to prevent interference from nearby robots."
        ],
        illustrationType: "c5_tx_rx_system"
      },
      {
        id: "c5-l6-2",
        chapterId: "c5-ch-6",
        order: 2,
        title: "Infrared (IR) vs Radio Frequency (RF)",
        subtitle: "Comparing line-of-sight optical beams against omnidirectional radio waves",
        summary: "Infrared (IR) remotes (like television remotes) use pulses of invisible infrared light (940nm) that require a direct, unobstructed line of sight. Radio Frequency (RF, 2.4 GHz) waves penetrate walls, travel hundreds of meters, and operate in all directions without needing to point directly at the robot.",
        keyPoints: [
          "Infrared (IR): Requires line-of-sight, easily blocked by obstacles, sunlight interference.",
          "Radio Frequency (RF): Non-line-of-sight, penetrates obstacles, long range (100m+).",
          "Robotic vehicles and outdoor rovers universally use 2.4GHz RF systems."
        ],
        illustrationType: "c5_ir_vs_rf"
      },
      {
        id: "c5-l6-3",
        chapterId: "c5-ch-6",
        order: 3,
        title: "The H-Bridge Motor Control Circuit",
        subtitle: "Controlling DC motor forward, reverse, brake, and coast states",
        summary: "A DC motor spins forward when current flows from terminal A to B, and reverses when current flows from B to A. An H-Bridge circuit uses 4 electronic switches (transistor/MOSFETs) arranged like the letter 'H'. Closing switches 1 and 4 drives forward; closing 2 and 3 reverses polarity; opening all coasts; closing 1 and 3 brakes.",
        keyPoints: [
          "An H-Bridge allows bidirectional DC motor control from a single power supply.",
          "Four switching elements arranged in an 'H' configuration around the motor.",
          "Never close both top and bottom switches on the same side (avoids 'shoot-through' short circuit)."
        ],
        illustrationType: "c5_h_bridge"
      },
      {
        id: "c5-l6-4",
        chapterId: "c5-ch-6",
        order: 4,
        title: "4-Channel Control & Vehicle Wiring",
        subtitle: "Mapping channels to Forward/Reverse and Left/Right steering",
        summary: "In a 4-channel remote control system, Channel 1 controls forward/reverse throttle, Channel 2 controls left/right steering, Channel 3 controls speed trim or auxiliary accessories, and Channel 4 operates mechanisms like robotic arm claws or headlights.",
        keyPoints: [
          "Channel: An independent control signal pathway.",
          "Differential Drive: Steering achieved by spinning left and right motors at different speeds.",
          "Ackermann Steering: Central drive motor with separate servo/pinion steering rack."
        ],
        illustrationType: "c5_4channel_rc"
      }
    ],
    activities: [
      {
        id: "c5-act-6",
        chapterId: "c5-ch-6",
        title: "Virtual 4-Channel Remote Controller & H-Bridge Sandbox",
        type: "c5_activity_rc_controller",
        description: "Operate the virtual 2.4GHz transmitter joysticks to inspect H-Bridge switch states (S1-S4), watch motor polarity reverse in real-time, and drive a robot around an obstacle track.",
        instructions: [
          "Push the Throttle joystick forward: Observe S1 and S4 close, driving Motor Forward.",
          "Pull the Throttle backward: Observe S2 and S3 close, driving Motor in Reverse.",
          "Steer Left and Right: Watch the steering channel actuate the front rack and pinion!",
          "Hit the Emergency Brake button to observe dynamic motor shorting."
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c5-mod-6",
        chapterId: "c5-ch-6",
        title: "4-Channel Wireless RC Rover",
        subtitle: "High-speed wireless remote-controlled vehicle with onboard RF receiver and dual H-bridge motor driver",
        description: "Assemble a high-performance 4-wheel wireless RC rover equipped with a 2.4GHz 4-channel receiver, dual-motor H-bridge driver board, and high-traction rubber wheels.",
        parts: [
          { name: "Laser-cut Acrylic Robot Chassis Plates", count: 2 },
          { name: "2.4GHz 4-Channel Handheld Transmitter", count: 1 },
          { name: "2.4GHz Micro Receiver Module", count: 1 },
          { name: "Dual DC Motor Driver H-Bridge Board", count: 1 },
          { name: "300 RPM DC Gearmotors", count: 2 },
          { name: "High-Grip Rubber Drive Wheels", count: 2 },
          { name: "Smooth Ball Caster Wheel", count: 1 },
          { name: "7.4V Li-Ion / 6xAA Battery Box", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Mount the dual gearmotors to the left and right sides of the lower chassis plate." },
          { stepNumber: 2, instruction: "Attach the drive wheels to motor output shafts and mount the front caster ball wheel." },
          { stepNumber: 3, instruction: "Install the H-Bridge motor driver module on the upper chassis deck." },
          { stepNumber: 4, instruction: "Wire motor terminals to driver outputs (Motor A and Motor B)." },
          { stepNumber: 5, instruction: "Connect receiver channel outputs (CH1 and CH2) to driver logic inputs." },
          { stepNumber: 6, instruction: "Power up the receiver and transmitter, bind the 2.4GHz radio link, and test full proportional driving!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c5-q6-1",
        chapterId: "c5-ch-6",
        question: "Why is Radio Frequency (RF) preferred over Infrared (IR) for outdoor remote-controlled robots?",
        options: ["RF does not require direct line-of-sight and penetrates barriers over long distances", "RF is completely silent while IR is loud", "IR requires high-voltage electricity", "RF only works inside small rooms"],
        correctAnswer: 0,
        explanation: "RF signals (like 2.4GHz) travel through obstacles and operate reliably in bright sunlight where IR fails."
      },
      {
        id: "c5-q6-2",
        chapterId: "c5-ch-6",
        question: "How does an H-Bridge circuit reverse the direction of a DC motor?",
        options: ["By reversing the polarity of the voltage applied across the motor terminals", "By changing the battery chemicals", "By flipping the physical motor upside down", "By adding more resistors"],
        correctAnswer: 0,
        explanation: "Closing diagonal pairs of switches reverses whether current flows from A-to-B or B-to-A through the motor coils."
      },
      {
        id: "c5-q6-3",
        chapterId: "c5-ch-6",
        question: "In remote control terminology, what does 'TX' and 'RX' stand for?",
        options: ["Transmitter (TX) and Receiver (RX)", "Transformer and Reactor", "True X-ray and Radar X-ray", "Terminal X and Route X"],
        correctAnswer: 0,
        explanation: "TX represents Transmitter (hand controller) and RX represents Receiver (onboard device)."
      },
      {
        id: "c5-q6-4",
        chapterId: "c5-ch-6",
        question: "What dangerous condition occurs if top and bottom switches on the same side of an H-bridge close together?",
        options: ["Shoot-through short circuit across the power supply", "The motor spins at infinite speed", "The wireless antenna falls off", "The battery voltage increases"],
        correctAnswer: 0,
        explanation: "Closing both switches on one leg connects positive power directly to ground, causing an instant short circuit."
      },
      {
        id: "c5-q6-5",
        chapterId: "c5-ch-6",
        question: "What is a 'Channel' in a multi-channel remote control system?",
        options: ["An independent wireless control pathway (e.g., steering or throttle)", "A television station", "A groove cut into plastic", "A river water route"],
        correctAnswer: 0,
        explanation: "Each channel carries independent data to control a specific motor, servo, or actuator on the model."
      }
    ],
    writtenQuestions: [
      {
        id: "c5-wq6-1",
        chapterId: "c5-ch-6",
        question: "Explain the four operational states of an H-bridge motor driver: Forward, Reverse, Coast, and Brake.",
        sampleAnswer: "Forward: Diagonal switches 1 and 4 close, sending current from left to right. Reverse: Switches 2 and 3 close, sending current from right to left. Coast: All switches open, allowing the motor to spin freely to a stop. Brake: Both low-side switches close, shorting motor terminals together to generate magnetic braking resistance."
      },
      {
        id: "c5-wq6-2",
        chapterId: "c5-ch-6",
        question: "Why do modern 2.4GHz remote controllers not interfere with one another even when many students drive robots in the same room?",
        sampleAnswer: "Modern 2.4GHz systems use digital frequency-hopping spread spectrum (FHSS) technology and unique digital ID pairing. The transmitter and receiver bind to a unique code and hop across dozens of frequencies every second."
      }
    ],
    funFacts: [
      { id: "c5-ff-11", text: "Nikola Tesla demonstrated the world's first wireless remote-controlled radio boat in Madison Square Garden back in 1898!" },
      { id: "c5-ff-12", text: "NASA communicates with the Mars Perseverance rover using radio wave signals that take up to 20 minutes to travel across space to Earth." }
    ]
  },
  {
    id: "c5-ch-7",
    classId: "class-5",
    number: 7,
    title: "Tinkercad",
    tagline: "3D CAD Modeling & Virtual Circuit Simulation",
    color: "#4F46E5",
    iconName: "Box",
    lessons: [
      {
        id: "c5-l7-1",
        chapterId: "c5-ch-7",
        order: 1,
        title: "Getting Started with Autodesk Tinkercad",
        subtitle: "Cloud-based 3D workspace, ViewCube navigation, and basic shapes",
        summary: "Autodesk Tinkercad is a free, web-based software suite used by millions of young engineers for 3D modeling and circuit design. The 3D design workspace features a grid-patterned Workplane. Users navigate 3D space using the interactive ViewCube (Top, Front, Right, Isometric) and drag basic geometric primitives (Boxes, Cylinders, Spheres, Roofs) onto the canvas.",
        keyPoints: [
          "Runs directly in modern web browsers without installation.",
          "Workplane provides the foundation grid for placing objects in 3D space.",
          "ViewCube allows quick 360° inspection from any angle."
        ],
        illustrationType: "c5_tinkercad_intro"
      },
      {
        id: "c5-l7-2",
        chapterId: "c5-ch-7",
        order: 2,
        title: "3D Shapes, Alignment, Grouping & Hole Cutting",
        subtitle: "Transformations, Boolean union and subtraction in 3D CAD",
        summary: "In Tinkercad, complex models are made by combining simple shapes. Shapes can be resized using dimension handles (holding Shift preserves proportions). The Align tool centers parts accurately. Crucially, any shape can be converted into a 'Hole'. When a Solid shape and a Hole shape are selected and 'Grouped', the hole cuts away material, creating hollow parts, cavities, and screw holes.",
        keyPoints: [
          "Resize handles: Black handles adjust one axis, White handles adjust two axes.",
          "Grouping two Solid shapes merges them into one single compound object (Union).",
          "Grouping a Solid with a 'Hole' shape cuts out negative space (Boolean subtraction)."
        ],
        illustrationType: "c5_tinkercad_grouping"
      },
      {
        id: "c5-l7-3",
        chapterId: "c5-ch-7",
        order: 3,
        title: "Tinkercad Circuits & Virtual Component Library",
        subtitle: "Simulating breadboards, resistors, LEDs, and power supplies in the browser",
        summary: "Tinkercad Circuits provides a virtual sandbox with hundreds of real-world electronic components: 9V batteries, coin cells, breadboards, LEDs, resistors, potentiometers, pushbuttons, multimeters, and even Arduino microcontrollers. Wires are created simply by clicking between component pins, with customizable wire insulation colors.",
        keyPoints: [
          "Virtual library includes authentic components with realistic electrical properties.",
          "Color-code wires (Red for VCC, Black for GND) to maintain clean professional schematics.",
          "Components can be rotated and placed on simulated breadboards exactly like real hardware."
        ],
        illustrationType: "c5_tinkercad_circuits"
      },
      {
        id: "c5-l7-4",
        chapterId: "c5-ch-7",
        order: 4,
        title: "Simulating Circuits & Safe Virtual Testing",
        subtitle: "Running interactive live simulations, measuring voltage, and observing overload warnings",
        summary: "Clicking 'Start Simulation' powers up the virtual circuit. Switches can be clicked, potentiometers turned, and multimeters read live voltages and currents. If too much current flows through an LED without a resistor, Tinkercad displays an explosion warning icon. This allows students to experiment, make mistakes, and learn safely without destroying physical parts.",
        keyPoints: [
          "'Start Simulation' brings interactive circuit physics to life.",
          "Shows real-time warnings if current limits are exceeded.",
          "Virtual multimeters measure circuit parameters dynamically."
        ],
        illustrationType: "c5_tinkercad_simulation"
      }
    ],
    activities: [
      {
        id: "c5-act-7",
        chapterId: "c5-ch-7",
        title: "Tinkercad 3D Chassis Designer & Circuit Simulator Studio",
        type: "c5_activity_tinkercad_studio",
        description: "Practice Boolean grouping to cut motor shaft holes into a 3D robot bracket, then switch to the virtual circuit tab to wire an LED circuit and start the live simulator.",
        instructions: [
          "Drag a Solid Box onto the workplane (Length: 50mm, Width: 40mm, Height: 10mm).",
          "Drag a Cylinder Hole (Diameter: 6mm) into the center of the box.",
          "Select both shapes and click 'Group' (Ctrl+G) to create the mounting hole!",
          "Switch to Circuits mode: Connect a 9V battery, 220Ω resistor, and LED.",
          "Click 'Start Simulation' and verify that the LED glows brightly without overloading!"
        ],
        xpReward: 100
      }
    ],
    models: [
      {
        id: "c5-mod-7",
        chapterId: "c5-ch-7",
        title: "Custom 3D-Modeled Robot Chassis Baseplate",
        subtitle: "Complete 3D CAD design ready for 3D printing and hardware assembly",
        description: "Design a custom robotic rover baseplate in Tinkercad featuring mounting cutouts for two DC gearmotors, a front caster mount, wire routing slots, and battery snap brackets.",
        parts: [
          { name: "Tinkercad 3D Design Software (Web)", count: 1 },
          { name: "Virtual Workplane & Shape Primitives", count: 1 },
          { name: "Motor Bracket Cutout Holes", count: 4 },
          { name: "Exported .STL File for 3D Printing", count: 1 }
        ],
        steps: [
          { stepNumber: 1, instruction: "Create a new 3D design in Tinkercad and rename it 'Class5_Rover_Chassis'." },
          { stepNumber: 2, instruction: "Place a flat rectangular box primitive sized 120mm long by 80mm wide by 4mm thick." },
          { stepNumber: 3, instruction: "Create 3mm cylinder holes at the four corners for frame standoff spacers." },
          { stepNumber: 4, instruction: "Use rectangular hole shapes to cut motor wire pass-through slots along the side edges." },
          { stepNumber: 5, instruction: "Select all shapes and click 'Group' to combine the baseplate with its mounting slots." },
          { stepNumber: 6, instruction: "Export the finished model as an .STL file ready to slice and 3D print in the school lab!" }
        ],
        xpReward: 150
      }
    ],
    quiz: [
      {
        id: "c5-q7-1",
        chapterId: "c5-ch-7",
        question: "What happens in Tinkercad 3D when you group a Solid shape with a Hole shape?",
        options: ["The Hole shape cuts away its shape from the Solid object", "Both shapes disappear forever", "They turn into a battery", "The screen changes color"],
        correctAnswer: 0,
        explanation: "Grouping a Solid with a Hole performs Boolean subtraction, carving negative space into the solid part."
      },
      {
        id: "c5-q7-2",
        chapterId: "c5-ch-7",
        question: "Which tool in Tinkercad allows you to rotate your viewpoint to inspect a 3D model from all sides?",
        options: ["The ViewCube", "The Ruler", "The Color Picker", "The Trash Can"],
        correctAnswer: 0,
        explanation: "The ViewCube at the top left of the workspace can be clicked and dragged to view models from Top, Front, Right, and Isometric angles."
      },
      {
        id: "c5-q7-3",
        chapterId: "c5-ch-7",
        question: "What is a major advantage of simulating an electronic circuit in Tinkercad Circuits before building it with real components?",
        options: ["You can safely test wiring without risking burning out real components from short circuits", "It uses real electricity from your wall", "You don't need a computer", "It builds the robot automatically"],
        correctAnswer: 0,
        explanation: "Virtual simulation allows students to discover mistakes, test resistor values, and learn safely without destroying expensive parts."
      },
      {
        id: "c5-q7-4",
        chapterId: "c5-ch-7",
        question: "Which key should you hold down while resizing a 3D object in Tinkercad to keep its proportions locked?",
        options: ["Shift key", "Spacebar", "Escape key", "Backspace"],
        correctAnswer: 0,
        explanation: "Holding the Shift key while dragging corner handles scales length, width, and height proportionally."
      },
      {
        id: "c5-q7-5",
        chapterId: "c5-ch-7",
        question: "What file format is commonly exported from Tinkercad to send to a 3D printer slicing software?",
        options: [".STL", ".MP3", ".DOCX", ".GIF"],
        correctAnswer: 0,
        explanation: ".STL (Standard Tessellation Language) is the universal file format used by 3D printing slicers."
      }
    ],
    writtenQuestions: [
      {
        id: "c5-wq7-1",
        chapterId: "c5-ch-7",
        question: "Explain how Boolean modeling works in Tinkercad using the concept of Solids and Holes.",
        sampleAnswer: "In Tinkercad, any 3D primitive can be designated as a Solid (positive material) or a Hole (negative space). Selecting both and clicking Group combines them by subtracting the hole's volume from the solid, allowing creation of complex parts like hollow boxes and screw holes."
      },
      {
        id: "c5-wq7-2",
        chapterId: "c5-ch-7",
        question: "Describe what Tinkercad Circuits does if you connect an LED directly across a 9V battery without a resistor in simulation mode.",
        sampleAnswer: "Tinkercad Circuits realistically calculates current using Ohm's Law. Because the current exceeds the LED's 20mA maximum rating, a starburst explosion icon appears over the LED with an alert warning that excessive current damaged the component."
      }
    ],
    funFacts: [
      { id: "c5-ff-13", text: "Tinkercad was founded in 2011 and was the very first WebGL-based 3D CAD modeling software to run entirely in a browser!" },
      { id: "c5-ff-14", text: "Astronauts on the International Space Station use 3D CAD and onboard 3D printers to manufacture replacement wrenches and tools in zero gravity." }
    ]
  }
];

export const class5Glossary: GlossaryTerm[] = [
  { term: "Anode", definition: "The positive terminal or longer lead of a semiconductor diode or LED.", chapterNumber: 1 },
  { term: "Cathode", definition: "The negative terminal or shorter lead with a flat lens notch of an LED.", chapterNumber: 1 },
  { term: "Breadboard", definition: "A solderless construction board with interconnected terminal columns used for prototyping electronics.", chapterNumber: 1 },
  { term: "Multimeter", definition: "An electronic measuring instrument that combines voltmeter, ammeter, and ohmmeter functions in one handheld tool.", chapterNumber: 1 },
  { term: "Series Circuit", definition: "An electrical circuit where components are arranged in a single continuous path so the same current flows through all of them.", chapterNumber: 2 },
  { term: "Resistor", definition: "An electrical component that provides a specific opposition to the flow of electric current, measured in Ohms (Ω).", chapterNumber: 2 },
  { term: "Ohm's Law", definition: "The fundamental electrical relationship stating that Voltage equals Current multiplied by Resistance (V = I × R).", chapterNumber: 2 },
  { term: "Parallel Circuit", definition: "A circuit configuration where components share common electrical nodes, providing multiple independent paths at the same voltage.", chapterNumber: 3 },
  { term: "LDR (Light Dependent Resistor)", definition: "A photoresistor whose electrical resistance decreases significantly when exposed to light.", chapterNumber: 3 },
  { term: "Potentiometer", definition: "A three-terminal variable resistor with a rotating or sliding wiper used for manual circuit adjustments.", chapterNumber: 3 },
  { term: "Power Screw", definition: "A mechanical machine element that converts rotational torque into powerful linear thrust through helical threads.", chapterNumber: 4 },
  { term: "Pitch", definition: "The distance measured parallel to the screw axis between corresponding points on adjacent thread crests.", chapterNumber: 4 },
  { term: "Lead", definition: "The linear distance a nut travels along a threaded shaft in one complete 360-degree rotation.", chapterNumber: 4 },
  { term: "Scissor Lift", definition: "A lifting mechanism that utilizes linked, folding pantograph struts to convert horizontal closing motion into vertical elevation.", chapterNumber: 4 },
  { term: "Rack and Pinion", definition: "A gear mechanism comprising a circular gear (pinion) and a linear toothed rail (rack) that converts rotary to linear motion.", chapterNumber: 5 },
  { term: "Steering Rack", definition: "The horizontal toothed bar in an automobile steering system that translates steering column rotation to angle the front road wheels.", chapterNumber: 5 },
  { term: "Transmitter (TX)", definition: "An electronic device that generates and transmits wireless radio frequency signals carrying control commands.", chapterNumber: 6 },
  { term: "Receiver (RX)", definition: "An onboard electronic module that captures incoming wireless radio signals and decodes them for motor actuators.", chapterNumber: 6 },
  { term: "H-Bridge", definition: "An electronic circuit consisting of four switches that allows DC voltage to be applied across a motor in either direction for forward/reverse drive.", chapterNumber: 6 },
  { term: "Tinkercad", definition: "An intuitive, cloud-based 3D modeling and electronic circuit simulation suite developed by Autodesk.", chapterNumber: 7 },
  { term: "Boolean Modeling", definition: "A 3D CAD technique of combining solid shapes (Union) and negative hole shapes (Subtraction) to form complex geometries.", chapterNumber: 7 }
];

export const class5Badges: Badge[] = [
  {
    id: "c5-badge-circuits",
    title: "Circuit Pioneer",
    description: "Mastered breadboard connections, LEDs, and resistor color code decoding.",
    icon: "Zap",
    unlockedAtXp: 100
  },
  {
    id: "c5-badge-series-parallel",
    title: "Parallel Architect",
    description: "Successfully analyzed independent branch voltages and built an automatic LDR night lamp.",
    icon: "Activity",
    unlockedAtXp: 250
  },
  {
    id: "c5-badge-mechanisms",
    title: "Master of Mechanical Lift",
    description: "Calculated power screw pitch and assembled a motorized scissor lift.",
    icon: "Settings",
    unlockedAtXp: 400
  },
  {
    id: "c5-badge-steering",
    title: "Steering Specialist",
    description: "Constructed an automotive rack and pinion chassis with working tie rods.",
    icon: "Compass",
    unlockedAtXp: 550
  },
  {
    id: "c5-badge-remote",
    title: "RC Commander",
    description: "Operated 4-channel 2.4GHz radio systems and mastered H-bridge polarity reversal.",
    icon: "Radio",
    unlockedAtXp: 700
  },
  {
    id: "c5-badge-cad",
    title: "Tinkercad 3D Engineer",
    description: "Designed a 3D robot chassis plate and simulated electronic circuits virtually.",
    icon: "Box",
    unlockedAtXp: 850
  }
];
