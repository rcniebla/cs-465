var fs = require('fs');
var foods = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', foods});
};
   
module.exports = {
    meals
};