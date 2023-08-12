# AI Product Dashboard Backend

This project serves as the backend for an AI product's dashboard. The frontend part of the project has been implemented separately. The goal of this backend is to provide API endpoints for metrics data and simulated AI predictions.

## Technologies Used

- Node.js with Express for the backend server
- Python for simulating AI predictions
- JSON files for data storage

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/Rdx-coder/techlane.ai.git

Install the Node.js dependencies.
npm install

Usage

Start the Node.js server.
node server.js
The server will run on http://localhost:3000.
API Endpoints
GET /api/metrics
This endpoint returns mock AI model metrics data in JSON format.

GET /api/predictions
This endpoint returns simulated AI predictions and actual results for data visualization. It integrates with a Python script to generate prediction data.

Python Integration
The Python script located in the 'python' folder simulates AI predictions based on input data. The Node.js server integrates this script to provide prediction data for the '/api/predictions' endpoint.

Folder Structure

server.js: Entry point of the Node.js server.
data/: Folder to store mock metrics and prediction data in JSON format.
python/: Folder containing the Python script for generating prediction data.