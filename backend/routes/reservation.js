const router = require('express').Router();
let Reservation = require('../models/reservation.model');

router.route('/').get((req,res) => {
  Reservation.find()
        .then(reservations => res.json(reservations))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const table = Number(req.body.table);
    const date = Date.parse(req.body.date);
    const time = Number(req.body.time)

    const newReservation = new Reservation({username,table,date,time});

    newReservation.save()
                .then(() => res.json('Reservation Done!'))
                .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Reservation.findById(req.params.id)
      .then(reservation => res.json(reservation))
      .catch(err => res.status(400).json('Error: '+ err))
});

router.route('/:id').delete((req,res) => {
    Reservation.findByIdAndDelete(req.params.id)
       .then(() => res.json("Reservation deleted!"))
       .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req,res) => {
    Reservation.findById(req.params.id)
        .then(reservation => {
            reservation.username = req.body.username;
            reservation.table = Number(req.body.table);
            reservation.date = Date.parse(req.body.date);
            reservation.time = Number(req.body.time);

            reservation.save()
                .then(() => res.json("Reservation changed!"))
                .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json("Error: "+ err));
})

module.exports = router;