const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.get('/api/metrics', (req, res) => {
  const metrics = require(path.join(__dirname, '../data/metrics.json'));
  res.json(metrics);
});

app.get('/api/predictions', (req, res) => {
  const pythonProcess = spawn('python', [path.join(__dirname, '../python/ai_predictions.py')]);

  const responseDataChunks = [];

  pythonProcess.stdout.on('data', (data) => {
    responseDataChunks.push(data);
  });

  pythonProcess.stdout.on('end', () => {
    try {
      const responseData = Buffer.concat(responseDataChunks).toString();
      console.log('Received Python Script Response:', responseData); 
      const predictionsData = JSON.parse(responseData);
      res.json(predictionsData);
    } catch (error) {
      console.error('JSON Parsing Error:', error);
      console.log('Received Response Data:', responseData); 
      res.status(500).send('Internal Server Error');
    }
  });

  pythonProcess.stderr.on('data', (error) => {
    console.error('Python Script Error:', error.toString());
    res.status(500).send('Internal Server Error');
  });

  pythonProcess.on('error', (error) => {
    console.error('Python Process Error:', error);
    res.status(500).send('Internal Server Error');
  });

  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      console.error('Python Process Closed with Error Code:', code);
      res.status(500).send('Internal Server Error');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
