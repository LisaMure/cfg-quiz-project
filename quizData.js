// List of questions and answers
const quizData = {
  sports: [
    {
      question: "Which country won the 2023 Rugby World Cup?",
      answers: {
        option1: "China",
        option2: "Namibia",
        option3: "South Africa",
        option4: "New Zealand",
      },
      correctAnswer: "South Africa",
    },
    {
      question: 'Which athlete is known as "The fastest man on Earth"?',
      answers: {
        option1: "Usain Bolt",
        option2: "Carl Lewis",
        option3: "Mike Tyson",
        option4: "Justin Bieber",
      },
      correctAnswer: "Usain Bolt",
    },
    {
      question: "Who is the most decorated female Olympic athlete of all time?",
      answers: {
        option1: "Serena Williams",
        option2: "Simone Biles",
        option3: "Allyson Felix",
        option4: "Katie Ledecky",
      },
      correctAnswer: "Allyson Felix",
    },
    {
      question:
        "Which sport is known as the 'king of sports' and is played on horseback?",
      answers: {
        option1: "Soccer",
        option2: "Cricket",
        option3: "Polo",
        option4: "Rugby",
      },
      correctAnswer: "Polo",
    },
    {
      question: "Who is considered the greatest female golfer of all time?",
      answers: {
        option1: "Britney Spears",
        option2: "Annika Sörenstam",
        option3: "Karrie Webb",
        option4: "Shin-Ae Ahn",
      },
      correctAnswer: "Annika Sörenstam",
    },
    {
      question:
        "Which female tennis player has won the highest number of Grand Slams?",
      answers: {
        option1: "Venus Williams",
        option2: "Serena Williams",
        option3: "Steffi Graf",
        option4: "Margaret Court",
      },
      correctAnswer: "Margaret Court",
    },
    {
      question: "What does WWE stand for?",
      answers: {
        option1: "World Wrestling Entertainment",
        option2: "World Wide Events",
        option3: "Wrestling World Elite",
        option4: "World Warrior Emporium",
      },
      correctAnswer: "World Wrestling Entertainment",
    },
    {
      question: "Which country's rugby team is called Manchester United?",
      answers: {
        option1: "Australia",
        option2: "New Zealand",
        option3: "England",
        option4: "South Africa",
      },
      correctAnswer: "England",
    },
    {
      question: "Who is often referred to as 'The G.O.A.T.' in basketball?",
      answers: {
        option1: "LeBron James",
        option2: "Michael Jordan",
        option3: "Kobe Bryant",
        option4: "Magic Johnson",
      },
      correctAnswer: "Michael Jordan",
    },
    {
      question: "Which country won the 2018 FIFA World Cup?",
      answers: {
        option1: "Germany",
        option2: "Argentina",
        option3: "France",
        option4: "Brazil",
      },
      correctAnswer: "France",
    },
  ],
  history: [
    {
      question: "The Treaty of Versailles was signed at the end of which war?",
      answers: {
        option1: "Napoleonic Wars",
        option2: "World War II",
        option3: "Cold War",
        option4: "World War I",
      },
      correctAnswer: "World War I",
    },
    {
      question:
        "What year did Nelson Mandela become the first black president of South Africa?",
      answers: {
        option1: "2000",
        option2: "1994",
        option3: "1943",
        option4: "2020",
      },
      correctAnswer: "1994",
    },
    {
      question: "Who was the first President of the United States?",
      answers: {
        option1: "George Washington",
        option2: "Thomas Jefferson",
        option3: "Benjamin Franklin",
        option4: "John Adams",
      },
      correctAnswer: "George Washington",
    },
    {
      question: "Who was the first African-American woman in space?",
      answers: {
        option1: "Sally Ride",
        option2: "Valentina Tereshkova",
        option3: "Mae Jemison",
        option4: "Christa McAuliffe",
      },
      correctAnswer: "Mae Jemison",
    },
    {
      question: "When was the Berlin wall fully destroyed?",
      answers: {
        option1: "November 1st 1975",
        option2: "November 9th 1889",
        option3: "November 1st 1989",
        option4: "November 9th 1989",
      },
      correctAnswer: "November 9th 1989",
    },
    {
      question:
        "Who is said to be so beautiful that her face launched a thousand ships?",
      answers: {
        option1: "Cleopatra",
        option2: "Helen of Troy",
        option3: "Joan of Arc",
        option4: "Queen Nefertiti",
      },
      correctAnswer: "Helen of Troy",
    },
    {
      question:
        "Who was the first person in the world to land on the moon and which country were they from?",
      answers: {
        option1: "Buzz Aldrin from Russia",
        option2: "Neil Armstrong from Russia",
        option3: "Buzz Aldrin from the US",
        option4: "Neil Armstrong from the US",
      },
      correctAnswer: "Neil Armstrong from the US",
    },
    {
      question:
        "How old was Queen Elizabeth II when she was crowned the Queen of England?",
      answers: {
        option1: "21",
        option2: "27",
        option3: "30",
        option4: "35",
      },
      correctAnswer: "27",
    },
    {
      question: "Which famous ship sank on its maiden voyage in April 1912?",
      answers: {
        option1: "SS Lusitania",
        option2: "SS Andrea Doria",
        option3: "RMS Titanic",
        option4: "SS Poseidon",
      },
      correctAnswer: "RMS Titanic",
    },
    {
      question:
        "Which city is famously known as the ancient capital of the Roman Empire?",
      answers: {
        option1: "Athens",
        option2: "Rome",
        option3: "Cairo",
        option4: "Jerusalem",
      },
      correctAnswer: "Rome",
    },
  ],
  geography: [
    {
      question: "Which river is the longest in the world?",
      answers: {
        option1: "Amazon",
        option2: "Nile",
        option3: "Mississippi",
        option4: "Yangtze",
      },
      correctAnswer: "Nile",
    },
    {
      question:
        "Which natural wonder, located in Zimbabwe, is among the Seven Wonders of the World?",
      answers: {
        option1: "Grand Canyon",
        option2: "Mount Everest",
        option3: "Victoria Falls",
        option4: "Great Barrier Reef",
      },
      correctAnswer: "Victoria Falls",
    },
    {
      question: "Which mountain is the highest in the world?",
      answers: {
        option1: "Mount Kilimanjaro",
        option2: "Mount McKinley",
        option3: "Mount Everest",
        option4: "Mount Fuji",
      },
      correctAnswer: "Mount Everest",
    },
    {
      question: "What is the capital city of Suriname?",
      answers: {
        option1: "Paramaribo",
        option2: "Georgetown",
        option3: "Bridgetown",
        option4: "Castries",
      },
      correctAnswer: "Paramaribo",
    },
    {
      question: "Which country has 37 official languages?",
      answers: {
        option1: "India",
        option2: "Zimbabwe",
        option3: "Bolivia",
        option4: "China",
      },
      correctAnswer: "Bolivia",
    },
    {
      question: "What is the largest country by land area?",
      answers: {
        option1: "China",
        option2: "United States",
        option3: "Russia",
        option4: "India",
      },
      correctAnswer: "Russia",
    },
    {
      question: "What is the currency of Japan?",
      answers: {
        option1: "Pound",
        option2: "Yuan",
        option3: "Yen",
        option4: "Rupee",
      },
      correctAnswer: "Yen",
    },
    {
      question: "Which African country has the largest population?",
      answers: {
        option1: "Nigeria",
        option2: "South Africa",
        option3: "Egypt",
        option4: "Democratic Republic of Congo",
      },
      correctAnswer: "Nigeria",
    },
    {
      question:
        "What is the name of the river that flows through the Brazilian rainforest?",
      answers: {
        option1: "Nile",
        option2: "Ganges",
        option3: "Amazon",
        option5: "Mississippi",
      },
      correctAnswer: "Amazon",
    },
    {
      question: "What is the capital city of Canada?",
      answers: {
        option1: "Toronto",
        option2: "Vancouver",
        option3: "Montreal",
        option4: "Ottawa",
      },
      correctAnswer: "Ottawa",
    },
    // Add more questions for Geography
  ],
};
