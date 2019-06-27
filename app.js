var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000

// HTTPリクエストを受け取る部分
app.get('/', function (req, res) {
  res.send('Hello root!');
});

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'Hikaru Maruyama' });
});

// サーバーを起動する部分
var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, PORT);
});

module.exports = app;
