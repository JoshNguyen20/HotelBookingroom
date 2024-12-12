const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const result = await authService.register({ username, email, password });
    res.status(201).json({ message: 'User registered successfully', data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login({ email, password });
    res.status(200).json({ message: 'Login successful', data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
