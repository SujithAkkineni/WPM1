/* GET homepage */
const index = (req, res) => {
 res.render('index', { title: 'COOK NEXT DOOR' });
};
module.exports = {
 index
};