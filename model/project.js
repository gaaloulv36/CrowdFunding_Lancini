const con = require("../config/db");
module.exports = {
    creat: async(data, next) => {
        con.query(
            `insert into project(name,typeObject, description, object, datestart, datefinish, catego) values (?,?,?,?,?,?,?)`, [data.name, data.typeObject, data.description, data.object, data.datestart, data.datefinish, data.catego],
            (error, result, fields) => {
                if (error) throw error
                next(result);
            }
        );
    },
    getProjectById: async(id, next) => {
        con.query(
            `select * from project where id=?`, [id],
            (error, result, fields) => {
                if (error) throw error;
                next(result);
            }

        );
    },
    getProject: async(next) => {
        con.query(
            `select * from project`,
            (error, result, fields) => {
                if (error) throw error;
                next(result);
            });

    },
    updateProject: async(id, { name, typeObject, description, object, datestart, datefinish, catego }, next) => {
        let sql = `UPDATE project SET name=?, typeObject=?, description=?, object=?, datestart=?, datefinish=?, catego=? WHERE id=?`
        con.query(sql, [name, typeObject, description, object, datestart, datefinish, catego, id], (err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    deleteProject: async(id, next) => {
        let sql = `DELETE FROM project WHERE id=${id}`
        con.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    getProjectByname: async(name, next) => {
        let sql = 'select * from project where name = ?';
        con.query(
            sql, name,
            (error, result) => {
                if (error) throw error;
                next(result);
            }

        );
    },
    getProjectByType: async(name, next) => {
        let sql = 'select * from project where catego = ?';
        con.query(
            sql, name,
            (error, result) => {
                if (error) throw error;
                next(result);
            }

        );
    }
}