import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import router from "./server/routes/router.js";
// ES6 does not support __dirname , to use express.static middleware
// create __dirname as follow
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// create express server
const port = 5544; // different from frontend
const app = express();
// express will serve public directory after webpack build 
app.use(express.static(path.join(__dirname, './public')));
// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// use created router
app.use("/", router);

app.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);

// run --> npm run dev:server 
// check with browser --> http://localhost:5544/v1?year=2024&month=2
// can check postman or insomnia
