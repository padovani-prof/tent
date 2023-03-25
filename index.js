const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const crypto = require('crypto');
const pkg = require('./package.json');
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/(127(\.\d){3}|localhost)/}));
app.options('*', cors());

app.get('/', function (req, res) {
    return res.send("Hello World do Padovani!");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});