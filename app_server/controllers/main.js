var fs = require('fs');
var blog = JSON.parse(fs.readFileSync('./data/blog.json', 'utf8'));
var testimonials = JSON.parse(fs.readFileSync('./data/testimonials.json', 'utf8'));

/*GET HOMEPAGE*/
const index = (req, res) => {
    res.render('index', { title: 'Travlr Getaways', blog, testimonials});
};

module.exports = {
    index
};