import { useLocation, Link, Navigate } from 'react-router-dom';

function ScorePage() {
  const location = useLocation();
  const results = location.state;

  if (!results) {
    return <Navigate to="/quizzes" replace />;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
          <div className="text-6xl font-bold text-primary mb-2">
            {results.score}%
          </div>
          <div className={`text-2xl font-bold mb-4 ${
            results.score >= 90 ? 'text-green-600' :
            results.score >= 80 ? 'text-blue-600' :
            results.score >= 70 ? 'text-yellow-600' :
            results.score >= 60 ? 'text-orange-600' :
            'text-red-600'
          }`}>
            Grade: {
              results.score >= 90 ? 'A' :
              results.score >= 80 ? 'B' :
              results.score >= 70 ? 'C' :
              results.score >= 60 ? 'D' : 'F'
            }
          </div>
          <p className="text-gray-600">
            You got {results.correctAnswers} out of {results.totalQuestions} questions correct
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left border-b">Question</th>
                <th className="px-4 py-2 text-left border-b">Your Answer</th>
                <th className="px-4 py-2 text-left border-b">Correct Answer</th>
                <th className="px-4 py-2 text-center border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {results.questionResults && results.questionResults.map((result, index) => (
                <tr 
                  key={index}
                  className={`border-b ${
                    result.isCorrect ? 'bg-green-50' : 'bg-red-50'
                  }`}
                >
                  <td className="px-4 py-3">
                      {result.question}
                  </td>
                  <td className="px-4 py-3">
                    {result.userAnswer || 'No answer'}
                  </td>
                  <td className="px-4 py-3">
                    {result.correctAnswer}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {result.isCorrect ? (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                        <span className="text-green-600 text-xl">✓</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                        <span className="text-red-600 text-xl">×</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
          >
            Try Another Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ScorePage; 