const index = (req, res) => {  
    res.render('index', { title: 'Monish web page' });   
};
module.exports = {
    index
};