const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const authRouter = require('./src/routes/auth');

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use('/api/v1/auth', authRouter);
// Example Route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js Server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
