import axios from "axios";
import { monthArray, weekDaysArray } from "../server/src/ymd.js";
import "./index.css";

class CalendarV1 {
  constructor() {
    this._formEl = document.getElementById("form");
    this.getParams();
  }
  getParams() {
    const dt = new Date();
    const yr = dt.getFullYear();
    const mo = dt.getMonth() + 1;
    const dtstr = dt.toDateString();
    let v = [];
    for (let i = mo; i <= 12; i++) {
      v.push(i);
    }
    let s = [];
    if (mo !== 1) {
      for (let i = mo - 1; i >= 1; i--) {
        s.push(i);
      }
    }
    const value = [...v, ...s];
    const formElements = `
    <input type="number" name="year" value=${yr} id="year" />
     <select name="month" id="month">
     ${value
       .map((i) => {
         return `
       <option value="${i}">${monthArray[i]}</option>
       `;
       })
       .join("")}
     </select>
     <small>${dtstr}</small>
    `;
    return formElements;
  }
  render() {}
}
