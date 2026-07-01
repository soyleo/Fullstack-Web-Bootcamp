import express from "express";
import ejs from "ejs";

let app = express();
const port = 3000;

function dayDetermin(req, res, next) {
  const day = new Date().getDay();
  const isWeekend = (day === 0 || day === 6);
  
    res.render("index.ejs", {
        isWeekend: isWeekend
    });

  next();
}

app.use(dayDetermin);

app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
