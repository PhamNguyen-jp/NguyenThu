const mongoose = require('mongoose');
const url = "mongodb+srv://phamnguyen:nguyen123123@cluster0.wkeeg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("MongoDB Connection Succeeded"); } else {
        console.log("An Error Occured");
    }
})

require('./product.model');