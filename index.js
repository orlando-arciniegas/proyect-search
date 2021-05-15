const express = require('express');
const mainRoute = require('./src/routes/mainRoute');
const app = express();
const port = 4000 || process.env.PORT

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', mainRoute);

app.listen(port, () => {
  console.log("\x1b[34m",`Server on port: http://localhost:${port}`)
});
