const express = require(`express`);
const router = require(`./routes`).router;

let app = express();

//middleware: separation of incoming request into req.header, req.body
app.use(express.urlencoded({extended: true}));

//middleware: req.body -> Json object conversion
app.use(express.json());

//middleware: adding logger for each request coming to server
app.use((req, res, next) => {

    console.log(new Date(), req.method, (decodeURIComponent(req.url)));
    next();
});

//defining routes for API
app.use('/', router);

//routes get execut in order so `/*` route is at last 
app.get('/*', (req, res) => {

    res.send({'msg': 'wrong route send'});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
