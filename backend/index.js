const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const initializeRoute = require('./routes/initialize.route');
const transactionRoute = require('./routes/product.route');
const statisticsRoute = require('./routes/statistics.route');
const barChartRoute = require('./routes/barChart.route');
const combinedDataRoute = require('./routes/combinedData.route');
const pieChartRoute = require('./routes/pieChart.route');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://rahulgupta:rahulbaba@projectdata.slpr5.mongodb.net/?retryWrites=true&w=majority&appName=projectdata'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', initializeRoute);
app.use('/api', transactionRoute);
app.use('/api', statisticsRoute);
app.use('/api', barChartRoute);
app.use('/api', combinedDataRoute);
app.use('/api', pieChartRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

