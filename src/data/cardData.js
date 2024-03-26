const cardCategories = {
  red: "MAPPING OPINIONS (STARTER QUESTIONS)",
  blue: "SHIFTING ATTITUDES (COURAGEOUS CONVERSATIONS)",
  yellow: "INTEGRATING COHESION (WHERE TO FROM HERE)",
};

const cardData = [
  {
    id: 1,
    category: cardCategories.red,
    title: "How do you describe your values and beliefs?",
    questions: [
      "What are you particularly passionate about?",
      "What things make you angry?",
      "What values or beliefs do you think sit underneath this anger/passion?",
    ],
    highlighted: "",
    text: {
      values:
        "universal concepts about what matters most to us, they are what motivates us.",
      beliefs: "assumptions we hold true that uphold our values.",
    },
  },
  {
    id: 2, // actually 13, just set to 2 for testing
    category: cardCategories.blue,
    title: "How do you define ‘banter'?",
    questions: [
      "What does good banter feel like?",
      "How is banter different from teasing, bullying or harassment?",
      "How do you define harassment?",
      "How do you know when you are moving from one to another?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 3, // actually 30, just set to 3 for testing
    category: cardCategories.yellow,
    title: "What kind of person do you want to be?",
    questions: [
      "What are the good things about you that you can celebrate?",
      "What are the things you want to grow/develop?",
      "What changes do you need to make personally?",
    ],
    highlighted:
      "If there was one thing you would want to be known as/for what would it be?",
    text: {},
  },
];

export { cardData, cardCategories };
