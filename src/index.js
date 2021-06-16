const express = require('express');
const morgan = require('morgan')
const route = require('./routes/index')
const cors = require('cors')
const fileUpload = require('express-fileupload')
// Connect database
const db = require('./config/db/index');
db.connect()

// Port Server
const port = 9599;
const app = express();

//Cors
app.use(cors())

app.use(morgan('combined'))

// Body Par
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(fileUpload({
  useTempFiles: true
}))


// Routing
route(app);

// Start Server
app.listen(port, () => {
  console.log(`Start App ${port}`)
})