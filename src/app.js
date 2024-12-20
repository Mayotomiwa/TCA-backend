const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
