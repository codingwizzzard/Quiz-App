const Quiz = require('./models/Quiz');

const sampleQuizzes = [
  {
    title: "Node.js",
    description: "Test your knowledge of Node.js core concepts and modules",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    questions: [
      {
        text: "What is Node.js?",
        options: [
          "A JavaScript runtime built on Chrome's V8 engine",
          "A frontend framework",
          "A database",
          "An operating system"
        ],
        correctAnswer: 0
      },
      {
        text: "What does npm stand for?",
        options: [
          "Node Project Manager",
          "Node Package Manager",
          "New Programming Model",
          "Network Protocol Manager"
        ],
        correctAnswer: 1
      },
      {
        text: "Which module is used to handle file operations in Node.js?",
        options: [
          "http",
          "url",
          "fs",
          "os"
        ],
        correctAnswer: 2
      },
      {
        text: "What is the purpose of the 'require' function?",
        options: [
          "To make HTTP requests",
          "To import modules",
          "To define routes",
          "To read environment variables"
        ],
        correctAnswer: 1
      },
      {
        text: "What is an event loop in Node.js?",
        options: [
          "A function that loops over events",
          "A mechanism that handles asynchronous operations",
          "A data structure for managing events",
          "A method to debug code"
        ],
        correctAnswer: 1
      },
      {
        text: "Which of the following is not a Node.js framework?",
        options: [
          "Express.js",
          "Koa.js",
          "Django",
          "Nest.js"
        ],
        correctAnswer: 2
      },
      {
        text: "What is middleware in Node.js?",
        options: [
          "Code that executes after a request is processed",
          "Code that executes during the request-response cycle",
          "A function to handle database connections",
          "A mechanism to handle file uploads"
        ],
        correctAnswer: 1
      },
      {
        text: "Which method is used to create a server in Node.js?",
        options: [
          "http.createServer()",
          "http.create()",
          "server.create()",
          "http.server()"
        ],
        correctAnswer: 0
      },
      {
        text: "What is the purpose of the 'process' object in Node.js?",
        options: [
          "To manage HTTP requests",
          "To interact with the operating system",
          "To handle exceptions",
          "To debug applications"
        ],
        correctAnswer: 1
      },
      {
        text: "What does the 'cluster' module do in Node.js?",
        options: [
          "Handles database clusters",
          "Enables multi-threading",
          "Creates child processes to utilize multi-core systems",
          "Manages file systems"
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    title: "React",
    description: "Test your understanding of React core concepts",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    questions: [
      {
        text: "What is the Virtual DOM?",
        options: [
          "A lightweight copy of the actual DOM",
          "A virtual reality interface",
          "A browser extension",
          "A JavaScript library"
        ],
        correctAnswer: 0
      },
      {
        text: "What is JSX?",
        options: [
          "A JavaScript XML parser",
          "A syntax extension for JavaScript",
          "A new programming language",
          "A build tool"
        ],
        correctAnswer: 1
      },
      {
        text: "What is the purpose of useState hook?",
        options: [
          "To create global state",
          "To manage component state",
          "To handle side effects",
          "To optimize performance"
        ],
        correctAnswer: 1
      },
      {
        text: "What is a controlled component?",
        options: [
          "A component that controls other components",
          "A component whose value is controlled by React state",
          "A component with strict access control",
          "A component that can't be modified"
        ],
        correctAnswer: 1
      },
      {
        text: "What is the purpose of useEffect hook?",
        options: [
          "To handle side effects in functional components",
          "To create special effects",
          "To improve performance",
          "To handle errors"
        ],
        correctAnswer: 0
      },
      {
        text: "What is prop drilling?",
        options: [
          "A way to create holes in components",
          "Passing props through multiple levels of components",
          "A performance optimization technique",
          "A type of component composition"
        ],
        correctAnswer: 1
      },
      {
        text: "What is the Context API used for?",
        options: [
          "To create context menus",
          "To share state across components without prop drilling",
          "To handle API calls",
          "To manage routing"
        ],
        correctAnswer: 1
      },
      {
        text: "What are React keys used for?",
        options: [
          "Encryption",
          "Authentication",
          "Unique identification of elements in lists",
          "Performance optimization"
        ],
        correctAnswer: 2
      },
      {
        text: "What is the difference between state and props?",
        options: [
          "There is no difference",
          "Props are internal, state is external",
          "State is mutable, props are immutable",
          "Props are for styling only"
        ],
        correctAnswer: 2
      },
      {
        text: "What is React.memo used for?",
        options: [
          "To memorize things",
          "To prevent unnecessary re-renders",
          "To handle memory leaks",
          "To create memos"
        ],
        correctAnswer: 1
      }
    ]
  }
];

const seedDatabase = async () => {
  try {
    await Quiz.deleteMany({});

    await Quiz.insertMany(sampleQuizzes);
    
    const count = await Quiz.countDocuments();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase; 