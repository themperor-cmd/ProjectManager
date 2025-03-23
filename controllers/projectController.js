const db = require('../config/db');

const getProjects = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({ message: "Unauthorized user" });

        const tableName = `projects_${req.user.oauth_id.replace(/[^a-zA-Z0-9]/g, "_")}`;
        const result = await db.query(`SELECT * FROM ${tableName}`);

        res.send(result.rows);

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch projects" });
    }
}

const createProject = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({message: "Unauthorized user"});

        const {title, description} = req.body;

        const tableName = `projects_${req.user.oauth_id.replace(/[^a-zA-Z0-9]/g, "_")}`;
        const result = await db.query(`INSERT INTO ${tableName} (title, description) VALUES ($1, $2) RETURNING *`, [title, description]);

        res.status(201).json({ message: "Successfully created the project." }).send(result.rows)

    } catch (err) {
        res.status(500).json({ error: "Failed to create project" });
    }
}

const deleteProjects = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({message: "Unauthorized user"});

        const {id} = req.params;
        const tableName = `projects_${req.user.oauth_id.replace(/[^a-zA-Z0-9]/g, "_")}`;
        const result = await db.query(`DELETE FROM ${tableName} WHERE id = $1`, [id]);

        res.status(200).json({message: "Successfully deleted the project."}).send(result.rows);
    } catch (err) {
        res.status(500).json({error: "Failed to delete the project"});
    }
}

module.exports = {
    getProjects,
    createProject,
    deleteProjects
}