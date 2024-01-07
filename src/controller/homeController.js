import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'jwtbackend',
});

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  connection.query(
    'INSERT INTO users (email, password, username) VALUES (?,?,?)',
    [email, password, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
  return res.send('handleCreateNewUser');
};

const handleUserPage = (req, res) => {
  return res.render('user.ejs');
};
module.exports = {
  handleCreateNewUser,
  handleUserPage,
};
