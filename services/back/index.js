const Express = require('express');
const Mysql = require('mysql');
const CORS = require('cors');

var connection = Mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});
connection.connect()

const App = Express();

App.use(CORS({
    origin: '*:*'
}));
App.get('/', (req, res) => {
    console.log('new request')
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error){
            res.json(500, {message: error.message})
        };
        res.json(200, {message: results[0].solution})
    });
})

App.listen(process.env.PORT, () => {
    console.log('running')
})