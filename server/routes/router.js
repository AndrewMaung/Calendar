import express from "express";
import { monthObject } from "../src/ymd.js";

// create express router
const router = express.Router();
// to response for version 1 , only one month view
// api route : "/v1" method: "GET"
router.get("/v1", (req, res) => {
  // query parameters from request url
  const year = req.query.year;
  const month = req.query.month;
  // create month object from year and month get from user requested parameters.
  try {
    // response month object as json
    // change year and month to type int.
    // let response http headers manage by express, if you want to manage its OK. 
    const monthObj = monthObject(parseInt(year), parseInt(month));
    res.json({ success: true, data: monthObj });
  } catch (error) {
    // handle error
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// export is default here, router is extendable for next versions
export default router;
