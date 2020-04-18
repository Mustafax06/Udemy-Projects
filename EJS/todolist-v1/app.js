const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const today = new Date();
    const currentDay = today.getDay();
    let day = '';

    switch (currentDay) {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Thuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        default:
            console.log('Wrong day value! The assigend value to day is ' + day);
    };

    res.render('list', {
        kindOfDay: day
    });

});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});