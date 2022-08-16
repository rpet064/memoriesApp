const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routes = require("./routes/routes")
const path = require('path');

dotenv.config()

var mongoString = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ejdslj4.mongodb.net/?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;



// mongoose
// .connect(mongoString, { useNewUrlParser: true })
// .then(() => {
// 	const app = express()
// 	app.use(express.json());
// 	app.use("/api", routes);
// 	if (process.env.NODE_ENV === 'production') {
// 		// Serve any static files
// 		app.use(express.static(path.join(__dirname, './client/build')));
// 	//   Handle React routing, return all requests to React app
// 		app.get('/', function(req, res) {
// 			res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
// 				if (err) {
// 				  res.status(500).send(err);
// 				}
// 			})
// 		})
// 	app.liste	n(PORT, () => {
// 		console.log("Server has started!");
// 	})
// };
// })
	
mongoose
.connect(mongoString, { useNewUrlParser: true })
.then(() => {
	const app = express()
	app.use(express.json());
	app.use("/api", routes);
	app.listen(PORT, () => {
				console.log("Server has started!");
			})
		})