/* Oromia STEM Suite — editable Mathematics question bank.
   Edit or append question objects in this file, then upload it to GitHub.
   correct: 0 = A, 1 = B, 2 = C, 3 = D.
   Include a detailed explanation for both correct and incorrect answers.
   Keep commas between question objects. */
window.MATHS_QUESTIONS = [
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
];

/* Example of a new question (copy INSIDE the array, before the final ]):
  {
    "topic": "Algebra",
    "question": "Solve 3x + 2 = 11.",
    "options": ["2", "3", "4", "5"],
    "correct": 1,
    "explanation": "Subtract 2 from both sides: 3x = 9. Divide by 3: x = 3. Therefore B is correct."
  }
*/
