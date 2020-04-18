const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.get('/', (req, res) => {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString('en-US', options);

    res.render('list', {
        kindOfDay: day,
        newListItems: items
    });

});

app.post('/', (req, res) => {
    item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});