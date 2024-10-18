const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

dotenv.config();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("API is runing");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));