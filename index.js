require("dotenv").config();

const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");

const router = require("./app/router.js");

// Body parser
app.use(express.urlencoded({ extended: true }));

// Charger les données de la sessions sur `req.session` et `res.locals`
app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: "Un secret pour signer les id de sessions",
  })
);

// Statically served files
app.use(express.static(path.join(__dirname, "./public")));

// Setup view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
);
