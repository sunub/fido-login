import express from "express";
import session from "express-session";
import path from "path";
import ReactDOMServer from "react-dom/server";
import hbs from "hbs";

const authStatuses = Object.freeze({
  NEED_SECOND_FACTOR: "needSecondFactor",
  COMPLETE: "complete",
});

const __dirname = path.resolve();
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", ReactDOMServer.renderToString);
app.set("views", path.join(__dirname, "."));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.static("dist"));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    },
  })
);

function isAuthenticationComplete(req) {
  return req.session.name === "main";
}

function isAwaitingSecondFactor(req) {
  return req.session.authStatus === authStatuses.NEED_SECOND_FACTOR;
}

app.use("/", async (req, res) => {
  if (isAuthenticationComplete(req)) {
    res.redirect(307, "/account");
    return;
  }

  try {
    req.session.name = "auth";
    const sessionLength = 3 * 60 * 1000;
    req.session.cookie.expires = new Date(Date.now() + sessionLength);
    res.render("index.html");
  } catch (e) {
    res.render(e);
  }
});

const port = 8080;
const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
