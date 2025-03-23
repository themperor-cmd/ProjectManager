const express = require("express");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const {login, callBack, logout} = require('./controllers/authController');
const {getProjects, createProjects, deletedProjects} = require('./controllers/projectController');

const app = express();

dotenv.config();
require("./config/db");

app.use(express.json());
app.use(session({ 
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: false 
}));

app.use(passport.initialize());
app.use(passport.session());

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated) {
        return next();
    }
    res.status(401).json({ message: "Unauthorized user, Please log in."});
};

app.get('/projects', isAuthenticated, getProjects);
app.post('/projects',isAuthenticated, createProjects);
app.delete('/project/:id', isAuthenticated, deletedProjects);

app.get('/auth/google', login);
app.get("/auth/google/callback", callBack);
app.get('/logout', logout);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})