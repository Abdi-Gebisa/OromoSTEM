/* Topic data is kept apart from the interface so teachers can edit it. */
window.STEM = {
physics:[
 ['vectors','Vectors and displacement','Resolve vectors into components and calculate a resultant.', ['Magnitude A (units)','Angle A (degrees)','Magnitude B (units)','Angle B (degrees)'],[10,30,8,120],'vectors'],
 ['motion','2D projectile motion','Explore range, flight time and maximum height on level ground.', ['Speed (m/s)','Launch angle (degrees)','Gravity (m/s²)'],[20,45,9.81],'projectile'],
 ['snell','Snell’s law and refraction','Change refractive indices and incident angle to calculate and visualize refraction.', ['Refractive index n₁','Refractive index n₂','Incident angle (degrees)'],[1,1.5,40],'snell'],
 ['newton','Newton’s second law','See how force and mass change acceleration.', ['Net force (N)','Mass (kg)'],[20,4],'newton'],
 ['energy','Mechanical energy','Compare kinetic and gravitational potential energy.', ['Mass (kg)','Height (m)','Speed (m/s)','Gravity (m/s²)'],[2,10,5,9.81],'energy'],
 ['momentum','Conservation of momentum','Calculate the final speed after a perfectly inelastic collision.', ['Mass 1 (kg)','Velocity 1 (m/s)','Mass 2 (kg)','Velocity 2 (m/s)'],[2,6,3,0],'momentum'],
 ['circular','Circular motion','Investigate centripetal acceleration and force.', ['Mass (kg)','Speed (m/s)','Radius (m)'],[2,6,3],'circular'],
 ['spring','Spring oscillations','Estimate the period of an ideal mass–spring oscillator.', ['Mass (kg)','Spring constant (N/m)'],[2,50],'spring'],
 ['ohm','Ohm’s law','Explore voltage, resistance and current.', ['Voltage (V)','Resistance (Ω)'],[12,4],'ohm'],
 ['waves','Waves','Investigate wavelength, frequency and wave speed.', ['Frequency (Hz)','Wavelength (m)'],[5,2],'waves'],
 ['lens','Thin lenses','Find image distance using the thin-lens equation.', ['Focal length (cm)','Object distance (cm)'],[10,30],'lens'],
 ['induction','Electromagnetic induction','Calculate average induced emf from flux change.', ['Turns','Flux change (Wb)','Time interval (s)'],[100,0.2,2],'induction'],
 ['half-life','Nuclear half-life','Model the fraction of an unstable sample remaining.', ['Initial amount','Half-life (days)','Elapsed time (days)'],[100,5,15],'half-life']
],
chemistry:[
 ['ph','Acids, bases and pH','Explore the relationship between hydrogen-ion concentration and pH.', ['Hydrogen-ion concentration (mol/L)'],[0.001],'ph'],
 ['dilution','Solution dilution','Use conservation of solute to calculate a new concentration.', ['Initial concentration (mol/L)','Initial volume (mL)','Final volume (mL)'],[2,50,200],'dilution'],
 ['gas','Gas laws','Observe Boyle’s law at constant temperature.', ['Initial pressure (kPa)','Initial volume (L)','Final volume (L)'],[100,2,4],'gas'],
 ['rate','Reaction kinetics','Model first-order reactant concentration over time.', ['Initial concentration (mol/L)','Rate constant (1/s)','Time (s)'],[1,0.2,8],'rate'],
 ['equilibrium','Chemical equilibrium','Explore a simple reversible reaction A ⇌ B.', ['Forward rate constant','Reverse rate constant','Total concentration (mol/L)'],[2,1,1],'equilibrium']
],
biology:[
 ['bacteria','Bacteria','Prokaryotic cell structure, reproduction and ecological roles.','bacteria'],
 ['virus','Viruses','Viral structures, replication and why viruses require host cells.','virus'],
 ['amoeba','Amoeba','Pseudopodia, movement and feeding in a unicellular eukaryote.','amoeba'],
 ['paramecium','Paramecium','Cilia, oral groove and contractile vacuoles.','paramecium'],
 ['euglena','Euglena','Flagellar movement, chloroplasts and light detection.','euglena'],
 ['cell','Cell structure','Compare essential structures of plant and animal cells.','cell'],
 ['genetics','Genetics and inheritance','Explore a simple monohybrid Punnett square.','genetics'],
 ['enzymes','Enzyme activity','See how temperature influences an illustrative activity curve.','enzymes']
]
 ,
mathPractice: [
  {
    "topic": "Functions",
    "question": "If f(x)=2x+3, what is f(4)?",
    "options": [
      "8",
      "11",
      "14",
      "5"
    ],
    "correct": 1,
    "explanation": "Substitute x=4: f(4)=2(4)+3=11."
  },
  {
    "topic": "Functions",
    "question": "What is the domain of f(x)=1/(x−5)?",
    "options": [
      "All real numbers",
      "x>5",
      "All real numbers except 5",
      "x<5"
    ],
    "correct": 2,
    "explanation": "The denominator cannot be zero. x−5≠0, so x≠5."
  },
  {
    "topic": "Functions",
    "question": "What is the inverse of f(x)=3x−6?",
    "options": [
      "(x+6)/3",
      "3x+6",
      "(x−6)/3",
      "6−3x"
    ],
    "correct": 0,
    "explanation": "Let y=3x−6. Swap x and y: x=3y−6. Solve y=(x+6)/3."
  },
  {
    "topic": "Functions",
    "question": "For f(x)=x², which restriction makes f one-to-one?",
    "options": [
      "All real x",
      "x≥0",
      "All x except 0",
      "−1≤x≤1"
    ],
    "correct": 1,
    "explanation": "On x≥0, x² is strictly increasing, so each output has exactly one input."
  },
  {
    "topic": "Rational functions",
    "question": "What is the vertical asymptote of y=1/(x+2)?",
    "options": [
      "x=2",
      "y=0",
      "x=−2",
      "y=−2"
    ],
    "correct": 2,
    "explanation": "Set the denominator equal to zero: x+2=0, giving x=−2."
  },
  {
    "topic": "Rational functions",
    "question": "What is the horizontal asymptote of y=(2x+1)/(x−3)?",
    "options": [
      "y=−3",
      "y=2",
      "x=3",
      "y=0"
    ],
    "correct": 1,
    "explanation": "Numerator and denominator have equal degree. The ratio of leading coefficients is 2/1=2."
  },
  {
    "topic": "Coordinate geometry",
    "question": "Find the distance between (0,0) and (3,4).",
    "options": [
      "7",
      "1",
      "12",
      "5"
    ],
    "correct": 3,
    "explanation": "Use the distance formula: √[(3−0)²+(4−0)²]=√25=5."
  },
  {
    "topic": "Coordinate geometry",
    "question": "What is the slope through (1,2) and (3,6)?",
    "options": [
      "2",
      "4",
      "1/2",
      "−2"
    ],
    "correct": 0,
    "explanation": "Slope=(6−2)/(3−1)=4/2=2."
  },
  {
    "topic": "Conic sections",
    "question": "What is the center of (x−2)²+(y+3)²=16?",
    "options": [
      "(−2,3)",
      "(2,−3)",
      "(2,3)",
      "(−2,−3)"
    ],
    "correct": 1,
    "explanation": "Compare with (x−h)²+(y−k)²=r². The center is (h,k)=(2,−3)."
  },
  {
    "topic": "Conic sections",
    "question": "Which curve is defined by x²/9+y²/4=1?",
    "options": [
      "Hyperbola",
      "Parabola",
      "Ellipse",
      "Line"
    ],
    "correct": 2,
    "explanation": "Both squared terms are positive and add to 1, with unequal positive denominators: this is an ellipse."
  },
  {
    "topic": "Logic",
    "question": "When is p⇒q false?",
    "options": [
      "p true and q false",
      "p false and q true",
      "Both false",
      "Both true"
    ],
    "correct": 0,
    "explanation": "An implication is false only when the premise is true but the conclusion is false."
  },
  {
    "topic": "Logic",
    "question": "What is the negation of “All students passed”?",
    "options": [
      "No students passed",
      "At least one student did not pass",
      "Some students passed",
      "Every student failed"
    ],
    "correct": 1,
    "explanation": "The negation of a universal statement is an existential counterexample."
  },
  {
    "topic": "Sequences",
    "question": "Find the next term: 3, 7, 11, 15, …",
    "options": [
      "17",
      "18",
      "19",
      "20"
    ],
    "correct": 2,
    "explanation": "The common difference is 4, so the next term is 15+4=19."
  },
  {
    "topic": "Sequences",
    "question": "What is the 6th term of an arithmetic sequence with a₁=2 and d=3?",
    "options": [
      "15",
      "17",
      "20",
      "18"
    ],
    "correct": 1,
    "explanation": "aₙ=a₁+(n−1)d. Thus a₆=2+5×3=17."
  },
  {
    "topic": "Calculus",
    "question": "Differentiate f(x)=x³.",
    "options": [
      "x²",
      "3x²",
      "3x",
      "x⁴/4"
    ],
    "correct": 1,
    "explanation": "Use the power rule d(xⁿ)/dx=nxⁿ⁻¹. Here the derivative is 3x²."
  },
  {
    "topic": "Calculus",
    "question": "Evaluate ∫2x dx.",
    "options": [
      "x²+C",
      "2+C",
      "2x²+C",
      "x+C"
    ],
    "correct": 0,
    "explanation": "Increase the exponent by 1 and divide by the new exponent: ∫2x dx=x²+C."
  },
  {
    "topic": "Probability",
    "question": "A fair coin is tossed once. What is P(heads)?",
    "options": [
      "1",
      "1/4",
      "1/2",
      "0"
    ],
    "correct": 2,
    "explanation": "There are two equally likely outcomes and one favorable outcome: P=1/2."
  },
  {
    "topic": "Statistics",
    "question": "Find the mean of 2, 4, 6, 8.",
    "options": [
      "4",
      "5",
      "6",
      "20"
    ],
    "correct": 1,
    "explanation": "Add the values and divide by their count: (2+4+6+8)/4=5."
  }
],
vectorPractice: [
  {
    "question": "A student walks 6 m east and then 8 m north. Find the magnitude of displacement.",
    "options": [
      "10 m",
      "14 m",
      "2 m",
      "48 m"
    ],
    "answer": "10 m",
    "why": "The two displacements are perpendicular. Resultant magnitude = √(6²+8²)=√100=10 m; direction is northeast."
  },
  {
    "question": "A 12 N force acts east and a 5 N force acts west. What is the resultant?",
    "options": [
      "17 N east",
      "7 N east",
      "7 N west",
      "60 N east"
    ],
    "answer": "7 N east",
    "why": "Choose east as positive: +12−5=+7 N, so the resultant is 7 N east."
  },
  {
    "question": "What is the horizontal component of a 20 N force at 60° above the positive x-axis?",
    "options": [
      "20 N",
      "10 N",
      "17.3 N",
      "0 N"
    ],
    "answer": "10 N",
    "why": "The horizontal component is Fx=F cosθ=20 cos60°=10 N."
  },
  {
    "question": "What is the vertical component of a 10 N force at 30° above the x-axis?",
    "options": [
      "5 N",
      "8.66 N",
      "10 N",
      "0 N"
    ],
    "answer": "5 N",
    "why": "Fy=F sinθ=10 sin30°=5 N."
  },
  {
    "question": "Which pair of vectors is parallel?",
    "options": [
      "(2,3) and (−4,−6)",
      "(2,3) and (−4,6)",
      "(1,1) and (1,−1)",
      "(0,1) and (1,0)"
    ],
    "answer": "(2,3) and (−4,−6)",
    "why": "Parallel vectors are scalar multiples: (−4,−6)=−2(2,3)."
  },
  {
    "question": "A car travels 9 km north and 12 km west. How far is it from the start?",
    "options": [
      "21 km",
      "3 km",
      "15 km",
      "108 km"
    ],
    "answer": "15 km",
    "why": "The displacement is the hypotenuse: √(9²+12²)=15 km."
  },
  {
    "question": "Which quantity is a scalar?",
    "options": [
      "Velocity",
      "Force",
      "Displacement",
      "Speed"
    ],
    "answer": "Speed",
    "why": "Speed has magnitude only. Velocity, force, and displacement have both magnitude and direction."
  },
  {
    "question": "Two perpendicular forces of 3 N and 4 N act on a body. Their resultant is:",
    "options": [
      "1 N",
      "7 N",
      "5 N",
      "12 N"
    ],
    "answer": "5 N",
    "why": "For perpendicular forces, R=√(3²+4²)=5 N."
  },
  {
    "question": "The resultant of two equal vectors pointing in opposite directions is:",
    "options": [
      "Twice either magnitude",
      "Zero",
      "One magnitude",
      "Always 90°"
    ],
    "answer": "Zero",
    "why": "Equal opposite vectors cancel component by component, giving zero net vector."
  },
  {
    "question": "For a vector pointing exactly west, which component is negative?",
    "options": [
      "x component",
      "y component",
      "both components",
      "neither component"
    ],
    "answer": "x component",
    "why": "With east as positive x, west points along negative x; its y component is zero."
  },
  {
    "question": "A 10 N vector points 53° above east. Approximate its x-component.",
    "options": [
      "8 N",
      "10 N",
      "6 N",
      "0 N"
    ],
    "answer": "6 N",
    "why": "Fx=10 cos53°≈10(0.6)=6 N."
  },
  {
    "question": "A 10 N vector points 53° above east. Approximate its y-component.",
    "options": [
      "8 N",
      "6 N",
      "0 N",
      "10 N"
    ],
    "answer": "8 N",
    "why": "Fy=10 sin53°≈10(0.8)=8 N."
  }
]
};
