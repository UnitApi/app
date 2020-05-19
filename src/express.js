module.exports = function (domain = 'localhost', port = 3000, public_src = "./" ) {

    const express = require('express');
    const app = express();

    app.use(express.static(public_src));

    app.get('/', (req, res) => {
        res.send('An alligator approaches!');
    });

    app.listen(port, () => console.log('Gator app listening on: ' + 'http://'+domain + ':'+ port ));

    return app;
};
