const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());
app.use(express.json()); //parse for json

app.post('/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const requestData = {
            name,
            email,
            message
        };
        //handle contacting server php:
        const response = await axios.post('http://VPS-SERVER-IP-HERE/portfolio-api/public/email.php', requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
