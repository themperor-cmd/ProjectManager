const express = require("express");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
require("./config/passport");

app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/projects', getProjects);
app.post('/projects', createProjects);
app.post('/login', login);
app.get('/logout', logout);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})