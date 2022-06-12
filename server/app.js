console.log('App');
const path = require('path');
const express = require('express');
const config = require('config');
const app = express();
const kill = require('kill-port');
const { router } = require('./routes/routerMessage');

const PORT = config.get('PORT') || 5000;

app.use(express.json({ extended: true }));
app.use('/api/message', router);

if (process.env.NODE_ENV === 'production') {
  // app.use('/', express.static(path.join(__dirname, 'client', 'build')));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });
  console.log("production mode");
} else {
  console.log("development mode");
}
config.has();

kill(PORT, 'tcp')
  .then((d) => {
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
  })
  .catch((e) => {
    console.log('Server Error', e.message);
    process.exit(1);
  })
