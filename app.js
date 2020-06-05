const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '171271',
    database: 'dbteste'
})

con.connect((err) => {
    if(err){ 
        console.log('Error connecting to database : ...', err)
        return
    }
    console.log('Connection established!')
})

/*SELECT*/

function getBooks(){
    con.query('SELECT b.id, b.title, a.name, a.location FROM book as b, author as a', (err, rows) => {
        if(err) throw err
    
        //console.log(rows.length)
        rows.forEach(row => {
            //console.log(`----------------- ${row.title} by ${row.name}, ${row.location} -------------------`)
        });
    })
}


/*INSERT*/


function doInsert() { 
    const newBook = {title: 'Computer Network', author:2}
    con.query('INSERT INTO book SET ?', newBook, (err, res) => {
        if(err) throw err
    
        console.log(`New book added with ID: ${res.insertId}`)
    })
}


/* UPDATE */

function doUpdate() {
    con.query('UPDATE book SET title = ? WHERE ID = ?', ['React Native', 6], (err, result) => {
        if(err) throw err
    
        console.log('Changed: ', result)
    })
}


/*DELETE*/


function doDelete(){
    con.query(
        'DELETE FROM book WHERE id = ?', [7], (err, result) => {
            if (err) throw err;
    
            console.log(`Deleted ${result.affectedRows} row(s)`);
        }
    );
}


con.end((err) => {
    if(err){
        console.log('Error connecting to database : ...', err)
        return
    }
    console.log('The connection was finish.')
})


