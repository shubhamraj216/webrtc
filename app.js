const http         = require("http"),
      app          = express(),
      express      = require("express"),
      bodyParser   = require("body-parser"),
      morgan       = require("morgan"),
      searchRouter = require("./routes/search");

const hostname = "localhost",
      port = 3000;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use("/", searchRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}/`);
});
