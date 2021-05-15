const express = require('express');
const db = require('../datajson/database.json')

const mainController = {
    list: (req, res) => {

        let result = {
            meta: {
                status: 200,
                total: db.length,
                url: "/api/users"
            },
            data: db
        }
        return res.status(200).json(result)
    },
    find: (req, res) => {
        db.forEach(element => {
            if(element.id == req.params.id){
                let findResult = {
                    meta: {
                        status: 200,
                        url: "/api/users/:id"
                    },
                    data: element
                }
                return res.status(200).json(findResult)
            }
        })
    },
    update: (req, res) => {
        db.forEach(element => {
           if(element.id == req.params.id){
               
           }
        });
    }  
}


module.exports = mainController;