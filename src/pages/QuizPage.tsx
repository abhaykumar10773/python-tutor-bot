import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What will this code print?",
    code: 'print("Hello, " + "Python!")',
    options: [
      "Hello, Python!",
      "HelloPython!",
      "Error",
      "Nothing"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which of these is the correct way to create a variable in Python?",
    options: [
      "variable = 5",
      "@variable = 5",
      "var variable = 5",
      "let variable = 5"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "What does this code do?",
    code: 'for i in range(3):\n    print("Hi!")',
    options: [
      "Prints 'Hi!' once",
      "Prints 'Hi!' twice",
      "Prints 'Hi!' three times",
      "Causes an error"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What is the output of this code?",
    code: 'print(type(10))',
    options: [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'str'>",
      "Error"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which symbol is used for single-line comments in Python?",
    options: [
      "//",
      "#",
      "/* */",
      "--"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "What will this code print?",
    code: 'print(3 * "Hello ")',
    options: [
      "Hello Hello Hello ",
      "HelloHelloHello",
      "Error",
      "3Hello "
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Which function is used to get user input in Python?",
    options: [
      "scanf()",
      "input()",
      "get()",
      "read()"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "What is a variable in Python?",
    options: [
      "A container that stores data",
      "A type of animal",
      "A kind of fruit",
      "A programming error"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "What will this code print?",
    code: 'print("Python is fun!")',
    options: [
      "Python is fun!",
      "Error",
      "Nothing",
      "python is fun!"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which of these is a correct way to create a list in Python?",
    options: [
      "my_list = [1, 2, 3]",
      "my_list = {1, 2, 3}",
      "my_list = (1, 2, 3)",
      "my_list = <1, 2, 3>"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "What does this loop do?",
    code: 'for i in range(5):\n    print("Hello!")',
    options: [
      "Prints 'Hello!' once",
      "Prints 'Hello!' five times",
      "Prints 'Hello!' forever",
      "Causes an error"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "How do you start a function in Python?",
    options: [
      "function myFunc():",
      "def myFunc():",
      "start myFunc():",
      "func myFunc():"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "What is the output of this code?",
    code: 'print(5 + 3)',
    options: [
      "53",
      "8",
      "Error",
      "5+3"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which keyword is used to make a decision in Python?",
    options: [
      "switch",
      "if",
      "decide",
      "loop"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "What does this code do?",
    code: 'name = "Alice"\nprint("Hello, " + name + "!")',
    options: [
      "Prints 'Hello, Alice!'",
      "Prints 'name'",
      "Error",
      "Nothing"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which operator is used for multiplication in Python?",
    options: [
      "+",
      "-",
      "*",
      "/"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "What will this code print?",
    code: 'print(10 // 3)',
    options: [
      "3.33",
      "3",
      "10/3",
      "Error"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which of these is a correct way to create a string in Python?",
    options: [
      'text = "Hello!"',
      "text = Hello!",
      "text = (Hello!)",
      "text = <Hello!>"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "What is the purpose of indentation in Python?",
    options: [
      "To make code look pretty",
      "To organize code into blocks",
      "To confuse programmers",
      "It is not required"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "What does this loop do?",
    code: 'while True:\n    print("Python is fun!")',
    options: [
      "Prints 'Python is fun!' once",
      "Prints 'Python is fun!' 10 times",
      "Prints 'Python is fun!' forever",
      "Causes an error"
    ],
    correctAnswer: 2
  }
];

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-purple-600">
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {question.question}
          </h2>
          {question.code && (
            <pre className="bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
              {question.code}
            </pre>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg transition-all ${
                showResult
                  ? index === question.correctAnswer
                    ? 'bg-green-100 border-2 border-green-500'
                    : selectedAnswer === index
                    ? 'bg-red-100 border-2 border-red-500'
                    : 'bg-gray-50 border-2 border-gray-200'
                  : 'bg-gray-50 border-2 border-gray-200 hover:border-purple-500'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && index === question.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        {showResult && currentQuestion < questions.length - 1 && (
          <button
            onClick={handleNext}
            className="mt-6 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Next Question
          </button>
        )}

        {/* Final Score */}
        {showResult && currentQuestion === questions.length - 1 && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quiz Complete! 🎉
            </h3>
            <p className="text-lg text-gray-600">
              Your final score: {score} out of {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizPage;