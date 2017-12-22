const express = require('express');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 8888;


app.use('/api', routes);

app.listen(PORT, () => {
  db.sequelize.sync({ force: false });
  console.log(`Server listening on port: ${PORT}`);
});