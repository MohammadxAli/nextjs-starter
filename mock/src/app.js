const parse = require("parse-link-header");
const jsonServer = require("json-server");
const data = require("../db.json");
const cors = require("cors");

const app = jsonServer.create();
const router = jsonServer.router(data);

app.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

app.options("*", cors());

app.use(jsonServer.bodyParser);

app.use(function (req, res, next) {
    if (process.env.NODE_ENV !== "production") {
        // We need a fake delay in dev environment for all routes
        setTimeout(next, 500);
    } else {
        next();
    }
});

app.use(
    jsonServer.defaults({
        logger: process.env.NODE_ENV !== "production",
    })
);

app.use(router);

router.render = (req, res) => {
    const response = res.locals.data;
    if (req.method === "GET") {
        const isArray =
            Array.isArray(response) && req.originalUrl.indexOf("_limit") > -1;
        const link = res.getHeader("link");
        const parsed = parse(link);
        let meta = { currentPage: 1, lastPage: 1 };
        if (isArray) {
            if (parsed) {
                let currentPage = parseInt(parsed.last._page);
                if (parsed.next) {
                    currentPage = parseInt(parsed.next._page) - 1;
                }

                meta = {
                    currentPage,
                    lastPage: parseInt(parsed.last._page),
                };
                res.jsonp({ data: response, meta });
            } else {
                res.jsonp({ data: response, meta });
            }
        } else {
            res.jsonp(response);
        }
    } else {
        res.jsonp(response);
    }
};

module.exports = app;
