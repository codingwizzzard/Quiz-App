const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const quizRoutes = require('./routes/quizRoutes');
const seedDatabase = require('./sampleData');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

if (process.env.NODE_ENV === 'development') {
  seedDatabase();
}

app.use('/api/quizzes', quizRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 