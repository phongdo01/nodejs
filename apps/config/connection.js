const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'phongdo01',
  database: 'hust'
});
function getConnection() {
  if (connection) {
    return connection.connect()
  }
}
function saySomething() {
  console.log('say hi')
}
module.exports = {
  connection: connection,
  getConnection: getConnection,
  saySomething: saySomething
}