const res = require("express/lib/response");
const con = require("../config/db");
module.exports = {
    creat: async(data, next) => {
        con.query(
            `insert into user_compt(name, prenom, email, motdepass, tele) values (?,?,?,?,?)`, [data.name, data.prenom, data.email, data.motdepass, data.tele],
            (error, result, fields) => {
                if (error) throw error;
                next(result)
            })

    },
    getUserById: async(id, next) => {
        con.query(
            `select * from user_compt where id=?`, [id],
            (error, result, fields) => {
                if (error) throw error;
                next(result[0]);
            }

        );
    },
    /* getUserByemail: (email, callBack) => {
         con.query(
             `select * from user_compt where email=?`, [email],
             (error, result, fields) => {
                 if (error) {
                     callBack(error);
                 }
                 return callBack(null, result);
             }

         );
     },*/
    selectByEmail: async(email, next) => {
        let sql = 'SELECT * FROM user_compt WHERE email = ?'
        con.query(sql, email, (err, result) => {
            if (err) throw err
            next(result[0])
        })
    },
    getUser: async(next) => {
        let sql = `select * from user_compt`
        con.query(
            sql, (err, result) => {
                if (err) throw err;
                next(result)
            });

    },
    login: (email, motdepass, callBack) => {
        con.query(
            `select email, motdepass from user_compt where email = ? and motdepass = ?`, [email, motdepass],
            (error, result, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, result);
            });
    },
    update: async(id, { name, prenom, email, motdepass, tele }, next) => {
        let sql = `update user_compt SET name=?, prenom=?, email=?, motdepass=?, tele=? where id=?`
        con.query(sql, [name, prenom, email, motdepass, tele, id], (err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    deleted: async(id, next) => {
        let sql = `delete from user_compt where id=${id}`
        con.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        })
    }
}