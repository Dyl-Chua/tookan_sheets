const express = require('express');
const { stringify } = require('querystring');
const app = express()

app.set('view engine', 'ejs');

const trackingSchema = {
    job_id: String,
    order_id: String,
    customer_username: String,
    job_address: String,
    customer_phone: String,
    job_description: String
}

const tracking = ("tracking", trackingSchema)
 
app.get('/index', (req, res) => {
    tracking.find({}, function(err, tracking) {
        res.render('index', {
            trackingList:  tracking
        })
        console.log(tracking)
    })
})
 
app.listen(3000)
