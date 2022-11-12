
// ALL THE QUERIES FOR THE DATABASE GOES HERE 
const pool = require("./database.js")
const signInUsers = async (data) => {
    var status = "success";

    try {
        const res = await pool.pool.query(
            `INSERT INTO users (name, "emailId", password) VALUES ('${data.username}','${data.email}','${data.password}')`
        )
        console.log("reached here.")
        return "user created"



    }
    catch (e) {
        if (e.code === '23505') {
            return "user already exists"
        } else{
            console.log("An error occurred: ", e)
        }

    }
    finally {
        console.log("done execution")

    }
};
const loginUser = async (data) => {
    try {
        const response = await pool.pool.query(
            "SELECT * FROM users WHERE name = $1 AND password=$2", [data.username, data.password]
        ).then((resp) => {

            if (resp.rowCount === 1) {
                console.log(resp.rowCount)
                return "login Successful"
            }
            else {
                return "Login Failed! username or password dosen't match"
            }

        })
        return response;
    }
    catch (e) {
        return "Login Failed"
    }
}
const comment = async (data1) => {
    try {
        const response = await pool.pool.query("INSERT INTO contactus (firstname, lastname, email,comment) VALUES ($1,$2,$3,$4)", [data1.firstName, data1.lastName, data1.email, data1.comment]);
        return "comment added successfully"
    } catch (e) {
        return "something went wrong.Try again"
    }
}

module.exports = {
    signInUsers,
    loginUser,
    comment
}
