const con = require("../config/db");
module.exports = {
    creat: (data, callBack) => {
        con.query(
            `insert into user_compt(name, prenom, email, motdepass, tele) values (?,?,?,?,?)`, [data.name, data.prenom, data.email, data.motdepass, data.tele],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getUserById: (id, callBack) => {
        con.query(
            `select * from user_compt where id=?`, [id],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result[0]);
            }

        );
    },
    getUser: callBack => {
        con.query(
            `select * from user_compt`, [],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            });

    }
}