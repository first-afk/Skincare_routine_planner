const question = [
  {
    id: 1,
    question: "How does your skin feel most of the time?",
    options: [
      { id: 1, value: "oily/shiny" },
      { id: 2, value: "dry/tight" },
      { id: 3, value: "balanced" },
      { id: 4, value: "sensitive" },
    ],
  },

  {
    id: 2,
    question: "Do you notice flakiness or rough patches on your skin?",
    options: [
      { id: 1, value: "never" },
      { id: 2, value: "sometimes" },
      { id: 3, value: "often" },
    ],
  },
  {
    id: 3,
    question: "How often do you experience breakouts or acne?",
    options: [
      { id: 1, value: "frequently" },
      { id: 2, value: "occasionally" },
      { id: 3, value: "rarely" },
    ],
  },
  {
    id: 4,
    question: "What are your top skincare concerns?",
    options: [
      { id: 1, value: "acne and breakouts" },
      { id: 2, value: "dryness and flakiness" },
      { id: 3, value: "oiliness and shine" },
      { id: 4, value: "redness and sensitivity" },
      { id: 5, value: "uneven skintone" },
      { id: 6, value: "ageing signs" },
    ],
  },
  {
    id: 5,
    question: "Do you use sunscreen?",
    options: [
      { id: 1, value: "yes" },
      { id: 2, value: "sometimes" },
      { id: 3, value: "never" },
    ],
  },
];

export const results = {
  answers: {},
  skintype: "",
  recommendations: [],
};

export default question;
