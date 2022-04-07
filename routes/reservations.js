var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reservations', { title: 'TuGYM' });
});

router.post('/', function(req, res, next) {

let newUser = {
  ...req.body,
}

res.render("reservations", newUser)

})
module.exports = router;
