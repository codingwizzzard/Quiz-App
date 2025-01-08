# Quiz Application

## Overview
This project is a full-stack Quiz Application developed using the MERN stack. It enables users to select quizzes, answer questions, and view their scores. The application meets all the specified requirements for a simple yet dynamic online quiz platform.

---

## Features

### Frontend
- **Quiz List Page**: Displays a list of available quizzes with basic details such as title and description.
- **Quiz Page**: Displays questions with multiple-choice answers. Users can select an answer and navigate to the next question.
- **Score Summary Page**: Displays the user’s score along with correct answers after completing a quiz.
- **State Management**: Managed using React hooks (`useState`, `useEffect`) for questions, answers, and scores.
- **Styling**: Clean and responsive design using Bootstrap.

### Backend
- **API Endpoints**:
  - Fetch all available quizzes.
  - Fetch a specific quiz by its ID with related questions.
  - Submit quiz answers and calculate the score.
- **Quiz Model**:
  - Stores quiz title, description, and an array of questions (each question has text, choices, and the correct answer).
- **Error Handling**: Includes validation for user inputs and ensures proper handling of invalid submissions.

### Integration
- **Frontend-Backend Communication**: Axios is used for seamless communication between the frontend and backend.
- **Dynamic Quiz Loading**: Quizzes and questions are dynamically loaded based on user selection.
- **Score Calculation**: Performed on the backend and displayed to the user.
- **Deployment**:
  - Frontend deployed on Vercel.
  - Backend deployed on Render.

---

## How to Run the Application Locally

### Prerequisites
- Node.js and npm installed.
- MongoDB installed and running locally or access to a cloud MongoDB instance.

### Steps to Run Frontend
1. Clone the repository:
   ```bash
   git clone https://github.com/codingwizzzard/Quiz-App.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

### Steps to Run Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Backend will be running at `http://localhost:5000`.
---

## Deployment Links

Frontend : https://quiz-app-frontend-lemon.vercel.app/
Backend  : https://quiz-app-tau-ebon.vercel.app/
