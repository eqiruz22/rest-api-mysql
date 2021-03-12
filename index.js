const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const assetRoute = require('./routes/assetRoute');
const app = express();
const port = 4000;

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(assetRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});