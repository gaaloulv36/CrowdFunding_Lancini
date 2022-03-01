const con = require("../config/db");
module.exports = {
    creat: (data, callBack) => {
        con.query(
            `insert into founder_compt(name,email, phone, position, address) values (?,?,?,?,?)`, [data.name, data.email, data.phone, data.position, data.address],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getFounderById: (id, callBack) => {
        con.query(
            `select * from founder_compt where id=?`, [id],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result[0]);
            }

        );
    },
    getFounder: callBack => {
        con.query(
            `select * from founder_compt`, [],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            });

    }
}