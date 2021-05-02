const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const assetRoute = require('./routes/assetRoute');
const morgan = require('morgan');
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));

app.use(assetRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});