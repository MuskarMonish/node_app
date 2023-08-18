const homelist = (req, res) => {  
    res.render('index', { title: 'Monish web page' });   
};
const locationInfo = (req, res) => {  
    res.render('index', { title: 'Monish web page' });   
};
const addReview = (req, res) => {  
    res.render('index', { title: 'Monish web page' });   
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};