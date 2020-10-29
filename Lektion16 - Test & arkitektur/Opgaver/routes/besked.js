const controller = require("../controllers/controller");
const express = require('express');
const {request} = require('http');
const router = express.Router();


router
    .get('/', async (request, response) => {
        try {
            let beskeder = await controller.getBeskeder();
            response.send(beskeder)
        } catch (error) {
            sendStatus(e, response);
        }
    })

    .post('/', async (request, response) => {
        try {
            let { navn, rum, tekst } = request.body;
            let max = await Besked.findOne().sort('-nr').exec();
            let nr = max ? max.nr + 1 : 1;
            let besked = controller.createBesked({ navn, rum, tekst, nr });
            response.send({message: 'besked sendt!'})
        } catch (error) {
            sendStatus(e, response);
        }
    })

    // .delete('/besked/:nr', async (request, response) => {
    //     try {
    //         let { nr } = request.params;
    //         let resultat = await Besked.deleteOne().where('nr').eq(nr).exec();
    //     } catch (error) {
    //         sendStatus(e, response);
    //     }
    // });


function sendStatus(e, response) {
    console.error("Exception: " + e);
    if (e.stack) console.error(e.stack);
    response.status(500).send(e);
}

module.exports = router;