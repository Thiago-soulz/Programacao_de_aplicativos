const express = require('express');
const cors = require('cors');

const pecasRoutes = require('./routes/pecas.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pecas', pecasRoutes);

module.exports = app;