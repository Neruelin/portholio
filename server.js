const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use('/', express.static("public/"));

app.get('/', (req, res) => {
	res.sendFile('index.html');
})

app.listen(port, () => {console.log("server started on port " +  port);});