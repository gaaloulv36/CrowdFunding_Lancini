const con = require("../config/db");
module.exports = {
    creat: (data, callBack) => {
        con.query(
            `insert into project(name,typeObject, description, object, datestart, datefinish) values (?,?,?,?,?,?)`, [data.name, data.typeObject, data.description, data.object, data.datestart, data.datefinish],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            }
        );
    },
    getProjectById: (id, callBack) => {
        con.query(
            `select * from project where id=?`, [id],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result[0]);
            }

        );
    },
    getProject: callBack => {
        con.query(
            `select * from project`, [],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            });

    }
}