const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Model người dùng

exports.register = async ({ username, email, password }) => {
  // Kiểm tra email đã tồn tại chưa
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) throw new Error('Email already in use');

  // Mã hóa mật khẩu
  const hashedPassword = await bcrypt.hash(password, 10);

  // Tạo người dùng mới
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return { id: newUser.id, username: newUser.username, email: newUser.email };
};

exports.login = async ({ email, password }) => {
  // Kiểm tra email có tồn tại không
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Invalid email or password');

  // Kiểm tra mật khẩu
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid email or password');

  // Tạo token JWT
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
  console.log('JWT_SECRET:', process.env.JWT_SECRET);


  return { token, user: { id: user.id, username: user.username, email: user.email } };
};
