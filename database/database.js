const {Pool}= require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: `618903`,
    database: 'EAB'
  })
  module.exports = {pool};


