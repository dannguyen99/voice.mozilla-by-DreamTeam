const router = require('express').Router();

router.get('/quotes', (req, res) => {
    const collection = db.collection('quotes').find();

    // Log out each quote to the console
    // collection.forEach(quote => {
    //     console.log(quote.content + ' - ' + quote.author);
    // });

    collection.toArray(function (err, result) {
        res.render('quotes', {
            quotes: result
        });
    });

})

router.post('/quote_remove', (req, res) => {
    console.log('Posting from quotes.js');
    console.log(req.headers);
    console.log(req.body);

    // Removing all quotes matching the criteria
    // db.collection('quotes').remove({
    //     // query (criteria)
    //     author: 'Phong'
    // }, {
    //     justOne: true
    // }, (err, result) => {
    //     if (err) return console.log(err);
    //     console.log('Removed from db successfully');
    //     res.redirect('/quotes');
    // });

    // Removing only one quote matching the criterua
    db.collection('quotes').deleteOne({
        // query (criteria)
        author: 'Phong'
    }, (err, result) => {
        if (err) return console.log(err);
        console.log('Removed from db successfully');
        res.redirect('/quotes');
    })

})

router.post('/quotes', (req, res) => {
    console.log('Posting from quotes.js');
    console.log(req.headers);
    console.log(req.body);
    console.log('Response code: ' + res.statusCode);
    db.collection('quotes').insertOne(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('Saved to db successfully!');
        res.redirect('/quotes');
    })
})

router.get('/error', function (req, res) {
    res.render('error404', {
        title: '404 Not Found'
    });
})

module.exports = router;
// Debugging purpose
console.log('Module from /routes/quotes.js');
console.log(module);