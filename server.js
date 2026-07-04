const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Jenkins CI/CD Pipeline</h1>
        <h2>Deployment Successful</h2>
        <p>Version: 2.0</p>
        <p>Build Time: ${new Date().toLocaleString()}</p>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});