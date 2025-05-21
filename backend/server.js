const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Serve frontend files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
