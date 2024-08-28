const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vamshi@1112',
  database: 'client_management'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define Routes

// Get all clients
app.get('/clients', (req, res) => {
  db.query('SELECT * FROM clients', (err, results) => {
    if (err) {
      console.error('Error fetching clients:', err);
      res.status(500).json({ error: 'An error occurred while fetching clients' });
      return;
    }
    res.json(results);
  });
});

// Add a new client
app.post('/clients', (req, res) => {
  const newClient = req.body;
  db.query('INSERT INTO clients SET ?', newClient, (err, results) => {
    if (err) {
      console.error('Error adding client:', err);
      res.status(500).json({ error: 'An error occurred while adding the client' });
      return;
    }
    res.json({ id: results.insertId, ...newClient });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:3306`);
});
