const express = require("express");
const bodyparser = require("body-parser");
const path = require('path');
const cors = require("cors");
const app = express();
app.use(cors());
const userRoute = require('./app/routes/user.routes');
const checkin = require('./app/routes/checkin.routes');
const auth = require('./app/routes/auth.routes');
const db = require("./app/models");
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and resync database')
});

// parse requests of content-type - application/json
app.use(bodyparser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));

// simple route
app.use(express.static(path.join(__dirname, 'client/dist/')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/client/index.html'));
  }).catch(error => {
    // Will not execute
    console.log('caught', err.message);
  });;
(userRoute)(app);
(checkin)(app);
(auth)(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

});
