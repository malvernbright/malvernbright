module.exports.home = (req, res) => {
    res.render('index', { title: 'Home Page' });
}

module.exports.about = (req, res) => {
    res.render('about', { title: 'About Us' });
}

module.exports.contact = (req, res) => {
    res.render('contact', { title: 'Contact Us' });
}

module.exports.portfolio = (req, res) => {
    res.render('portfolio', { title: 'Our Portfolio' });
}

module.exports.services = (req, res) => {
    res.render('services', { title: 'Our Services' });
}

module.exports.team = (req, res) => {
    res.render('team', { title: 'Team' });
}