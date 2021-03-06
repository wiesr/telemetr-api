'use strict'
const sql = require('../sql').devices

module.exports = (rep, pgp) => {
  return {
    all: () => rep.many(sql.all),
    show: serial => rep.one(sql.show, serial),
    post: body => rep.one(sql.post, body),
    delete: serial => rep.one(sql.delete, serial),
    edit: arr => rep.one(sql.edit, arr)
  }
}
