
const express = require('express');
const bodyParser = require('body-parser');
const constants = require('../constants');
const cors = require('cors');

const app = express();
app.use(cors);
app.use(express.static('dist'));
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

// app.post('/get', async (req, res) =>{
//     try {
//
//         res.status(200).send(user);
//     } catch (e) {
//
//     }
// });