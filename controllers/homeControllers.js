const path = require('path')
module.exports = {
    home: (req, res) => res.render('index', { title: 'Home Page' }),
    about: (req, res) => res.render('about', { title: 'About Us' }),
    contact: (req, res) => res.render('contact', { title: 'Contact Us' }),
    portfolio: (req, res) => res.render('portfolio', { title: 'Our Portfolio' }),
    services: (req, res) => res.render('services', { title: 'Our Services' }),
    appAds: (req, res)=> res.sendFile(path.join(__dirname, '../views', 'app-ads.txt')),

    team: (req, res) => res.render('team', { title: 'Team' }),
    webhook_get: (req, res) => {
        let body = req.body;

        console.log(`\u{1F7EA} Received webhook:`);
        console.dir(body, { depth: null });
        // Send a 200 OK response if this is a page webhook

        if (body.object === "page") {
            // Returns a '200 OK' response to all requests
            res.status(200).send("EVENT_RECEIVED");

            // Determine which webhooks were triggered and get sender PSIDs and locale, message content and more.

        } else {
            // Return a '404 Not Found' if event is not from a page subscription
            res.sendStatus(404);
        }
    },
    messaging_webhook_get: (req, res) => {
        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        // Check if a token and mode is in the query string of the request
        if (mode && token) {
            // Check the mode and token sent is correct
            if (mode === "subscribe" && token === config.verifyToken) {
                // Respond with the challenge token from the request
                console.log("WEBHOOK_VERIFIED");
                res.status(200).send(challenge);
            } else {
                // Respond with '403 Forbidden' if verify tokens do not match
                res.sendStatus(403);
            }
        }
    }

}

