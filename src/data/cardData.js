const cardCategories = {
  red: (
    <>
      <span>MAPPING OPINIONS</span> (STARTER QUESTIONS)
    </>
  ),
  blue: (
    <>
      <span>SHIFTING ATTITUDES</span> (COURAGEOUS CONVERSATIONS)
    </>
  ),
  yellow: (
    <>
      <span>INTEGRATING COHESION</span> (WHERE TO FROM HERE)
    </>
  ),
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
      Values:
        ": universal concepts about what matters most to us, they are what motivates us.",
      Beliefs: ": assumptions we hold true that uphold our values.",
    },
  },
  {
    id: 2,
    category: cardCategories.red,
    title: "How do you describe 'Kiwi culture'?",
    questions: [
      "What are you most proud about in Kiwi culture?",
      "What are you not proud of about Kiwi culture?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 3,
    category: cardCategories.red,
    title:
      "How does the Treaty of Waitangi or Te Tiriti o Waitangi relate to you?",
    questions: [
      "How do you feel when people talk about it?",
      "What have you learnt about it?",
      "What misunderstandings do you think there are about it?",
      "What else would you like to know about it?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 4,
    category: cardCategories.red,
    title: "How do you describe your own 'race'?",
    questions: [
      "What has shaped your view about your own race?",
      "What has shaped your view about other races?",
    ],
    highlighted:
      "What are the differences between race, ethnicity, and nationality?",
    text: {},
  },
  {
    id: 5,
    category: cardCategories.red,
    title: "How similar or different are opinions within your family?",
    questions: [
      "On religion?",
      "On race?",
      "On climate change?",
      "On peace?",
      "On war?",
      "On politics?",
      "On poverty?",
    ],
    highlighted: "What informs your views on these topics?",
    text: {},
  },
  {
    id: 6,
    category: cardCategories.red,
    title: "Who or what influences your worldview?",
    questions: [
      "As you reflect, how do you feel about who or what is shaping your worldview?",
      "Is there anyone or anything you want to remove?",
      "Who or what would you want to add?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 7,
    category: cardCategories.red,
    title:
      "When did you learn something new about other cultures, faiths, or belief systems?",
    questions: [
      "What did you like about what you learnt?",
      "What, if anything, made you uncomfortable?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 8,
    category: cardCategories.red,
    title: "How do you feel when you hear people speaking another language?",
    questions: [
      "How do you appreciate or struggle with other accents?",
      "How easy or hard do you find it to learn new languages?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 9,
    category: cardCategories.red,
    title: "How important do you think it is to pronounce names correctly?",
    questions: [
      "What do you do if you find a name difficult to pronounce?",
      "Has your name been incorrectly pronounced and what effect did this have on you?",
      "What power do you think there is in a person's name?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 10,
    category: cardCategories.red,
    title: "What is/was an opinion that challenges you?",
    questions: [
      "How do you feel when others hold different opinions to you?",
      "How do you feel about people who hold different opinions?",
      "How do you respond to people who hold different opinions?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 11,
    category: cardCategories.red,
    title:
      "When have you changed your mind about something you were passionate about?",
    questions: [
      "What or who influenced you to support this change?",
      "How do you feel about people who still hold your previous view?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 12,
    category: cardCategories.red,
    title: "Find there values in common with the person next to you?",
    questions: [
      "If/when you found these things in common how did it feel?",
      "What can this do for the relationship between the two of you?",
      "Discuss three things you agree would make the world better?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 13,
    category: cardCategories.blue,
    title: "How do you define 'banter'?",
    questions: [
      "What does good banter feel like?",
      "How is banter different from teasing, bullying or harassment?",
      "How do you know when you are moving from one to another?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 14,
    category: cardCategories.blue,
    title: "When have you unintentionally offended someone?",
    questions: [
      "What happened for you?",
      "What happened for the other person?",
      "How would you approach it differently now?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 15,
    category: cardCategories.blue,
    title: "What is the line between funny and offensive?",
    questions: [
      "When is a joke moving from funny to uncomfortable, or from uncomfortable to offensive?",
      "How could you respond when humour becomes offensive?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 16,
    category: cardCategories.blue,
    title: "What are some racial stereotypes about your identity?",
    questions: [
      "What contributes to these stereotypes?",
      "How might stereotypes influence how you treat other people?",
      "What unhelpful stereotypes are you aware of?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 17,
    category: cardCategories.blue,
    title:
      "What is the difference between racism, discrimination, and xenophobia?",
    questions: [
      "Think of examples that impacted you or people you care about.",
      "When does this become systemic and what does that look like?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 18,
    category: cardCategories.blue,
    title: "What are antisemitism, islamophobia, homophobia, and transphobia?",
    questions: [
      "Where have you observed, heard, or experienced these things?",
      "How did you feel?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 19,
    category: cardCategories.blue,
    title: "What is white supremacy?",
    questions: [
      "What are examples of white supremacy, historical and current, and the ideas they promote?",
      "How would you recognize something that supports or advocates white supremacist ideas?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 20,
    category: cardCategories.blue,
    title: "Would you post something online that you wouldn't say in person?",
    questions: [
      "What might a healthy online discussion look like?",
      "How similar or different is it to in-person discussions?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 21,
    category: cardCategories.blue,
    title: "What are the impacts of cyberbullying?",
    questions: [
      "Have you observed bullying behaviour online?",
      "What motivates people to post stuff online?",
      "How similar is your behaviour online and offline?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 22,
    category: cardCategories.blue,
    title: "Have you ever seen a meme with racist undertones?",
    questions: [
      "What kind of memes would you share or not share?",
      "How could you start conversations about memes or ideas that make you feel uncomfortable?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 23,
    category: cardCategories.blue,
    title: "What is 'woke'?",
    questions: [
      "What are topics often described as 'woke'? How do you feel about that?",
      "What are negative or positive things you have heard about something or someone being called 'woke'?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 24,
    category: cardCategories.blue,
    title: "What is 'privilege'?",
    questions: [
      "What advantages do you have based on your identity (gender, race, class, or sexuality)?",
      "What does it look like to move from holding privilege with guilt to holding it with gratitude?",
      "How can you use privilege to support others?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 25,
    category: cardCategories.yellow,
    title: "What is 'social cohesion'?",
    questions: [
      "Can you think of examples where you have seen connectedness and solidarity amongst groups?",
      "What would you like to know about it?",
      "What could be useful to learn in school/courses that might create social cohesion?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 26,
    category: cardCategories.yellow,
    title:
      "How would you describe the collective society of Aotearoa/New Zealand?",
    questions: [
      "What are you proud of?",
      "What are you not proud of?",
      "How can we all collectively behave in a way that is better than we are now?",
      "What can you do personally to contribute to a better Aotearoa/NZ?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 27,
    category: cardCategories.yellow,
    title: "What might an ideal Aotearoa/New Zealand look like for everyone?",
    questions: [
      "What things would you want us to keep or hold as a nation?",
      "If you could change one thing about Aotearoa/NZ what would it be?",
      "Who could you talk to if you were to do something about this?",
      "Who else might need to be part of the change?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 28,
    category: cardCategories.yellow,
    title: "If you could change one thing in your community what would it be?",
    questions: [
      "Who could you talk to if you were to do something about this?",
      "Who else might need to be part of the change?",
    ],
    highlighted: "",
    text: {},
  },
  {
    id: 29,
    category: cardCategories.yellow,
    title:
      "If you could change one thing in your home, school, or work what would it be?",
    questions: [
      "Who could you talk to if you were to do something about this?",
      "Who else might need to be part of your team?",
    ],
    highlighted: "",
    text: "Sometimes change happens close to home…",
  },
  {
    id: 30,
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
