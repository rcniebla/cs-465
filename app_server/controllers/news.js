var fs = require('fs');
var newsSections = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
var article = JSON.parse(fs.readFileSync('./data/article.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', newsSections, article });
};
   
module.exports = {
    news
};