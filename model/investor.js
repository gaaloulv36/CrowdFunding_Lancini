const con = require("../config/db");
module.exports = {
    creat: (data, callBack) => {
        con.query(
            `insert into investor_compt(name,email, phone, position, address) values (?,?,?,?,?)`, [data.name, data.email, data.phone, data.position, data.address],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getInvestorById: (id, callBack) => {
        con.query(
            `select * from investor_compt where id=?`, [id],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result[0]);
            }

        );
    },
    getInvestor: callBack => {
        con.query(
            `select * from investor_compt`, [],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            });

    }
}