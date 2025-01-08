import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quiz-app-tau-ebon.vercel.app/api',
});

export const getQuizzes = () => api.get('/quizzes');
export const getQuizById = (id) => api.get(`/quizzes/${id}`);
export const submitQuiz = (response) => api.post('/quizzes/submit', response); 