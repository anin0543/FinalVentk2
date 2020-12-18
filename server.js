const express = require("express");
const bodyparser = require("body-parser");
const path = require('path');
const cors = require("cors");
const app = express();
app.use(cors());
const userRoute = require('./routes/user.routes');
const checkin = require('./routes/checkin.routes');
const auth = require('./routes/auth.routes');
const db = require("./models");
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and resync database')
});

// parse requests of content-type - application/json
app.use(bodyparser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/client/dist/client'));
app.get('/*', function(req, res) {
  const fullPath = path.join(__dirname + '/client/dist/client/index.html');
  console.log(" Fetching from.." + fullPath);
  res.sendFile(fullPath);
});

(userRoute)(app);
(checkin)(app);
(auth)(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

});
