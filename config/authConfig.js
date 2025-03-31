const passport = require('passport');
const db = require('../config/db');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
}, async (accessToken, refreshToken, profile, cb) => {
    try {
        let user = await db.query('SELECT * FROM users WHERE oauth_id = $1', [profile.id]);

        const tableName = `projects_${profile.id.replace(/[^a-zA-Z0-9]/g, "_")}`;
        if (!user.rows.length) {
            const newUser = await db.query('INSERT INTO users (name, email, oauth_id) VALUES ($1, $2, $3) RETURNING *', [profile.displayName, profile.emails[0].value, profile.id]);
            user = newUser;

            await db.query(`
                CREATE TABLE IF NOT EXISTS ${tableName} (
                    id SERIAL PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    description TEXT,
                    created_at TIMESTAMP DEFAULT NOW()
                );
            `);

        }

        return cb(null, user.rows[0]);
    } catch (err) {
        return cb(err, null);
    }
}))

passport.serializeUser(function(user, cb) {
    cb(null, user.oauth_id);
});

passport.deserializeUser(async (id, cb) => {
    try {
      const user = await db.query("SELECT * FROM users WHERE oauth_id = $1", [id]);
      cb(null, user.rows[0]);
    } catch (err) {
      cb(err, null);
    }
  });

module.exports = passport;