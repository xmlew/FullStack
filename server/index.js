const express = require('express');
const mysql = require('mysql');
const app = express();

// Create connection
// Connecting via a public network connection
const db = mysql.createConnection({
    host     : '124.71.57.171',
    user     : 'root',
    password : 'Password!!',
    database : 'benchmark'
})

//connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

//query DB
app.get('/search/:code', (req, res) => {
    let sql = `SELECT * FROM buildings WHERE postal_code = ${req.params.code}`;
    
    //SQL Nested Query.
    //First Query: Obtains postal Code.
    //Second Query: Uses result from first query to obtain buildings in the vicinity.
    db.query(sql, (err, result) => {
        if (err) { 
            throw err; 
        } else {
            let similar = result[0].address.replace(/[0-9]/g, '').split(' ')[1];
            console.log(similar);
            let nextQuery = `SELECT buildings.building_name, building_details.overall_score, building_details.notable_qualities, building_details.carbon_emissions \
                            FROM buildings LEFT JOIN building_details ON buildings.postal_code = building_details.postal_code WHERE address LIKE '%${similar}%'`;
            db.query(nextQuery, (err, result2) => {
                if (err){
                throw err;
                } else {
                    res.send(result2);
    // Originally, this is supposed to push data to the frontend and the data will be formatted.
    // However, due to difficulty in integration this feature was unable to be implemented in time.
                };
            });
        };
    });
});

//Setting up in local port.
app.listen('3001', () => {
    console.log('Server started on port 3001');
})

