const host = 'localhost',
    database = 'blog_post',
    user = 'postgres';

const pgp = require('pg-promise')({
    query: function (event) {
        console.log('QUERY:', event.query);
    }
}); 

const options = {
    host,
    database,
    user
}

const db = pgp(options);

module.exports = db;