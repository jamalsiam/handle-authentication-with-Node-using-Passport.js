const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
require('./common/redis')

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./common/passport.config');
app.use(require('./routes'))


app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}`);
});