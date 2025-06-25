const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToMongo = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
connectToMongo();

app.use(cors());
app.use(express.json());

// Serve the React build
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/auth', require('./routes/auth'));

// Catch-all to send React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
