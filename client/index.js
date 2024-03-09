import axios from "axios";
import {monthArray, weekDaysArray} from "../server/src/ymd.js"
class MonthView {
  constructor() {
    this._url = "/v1";
    this._year = document.querySelector("#year").value;
    this._month = document.querySelector("#month").value;
    this._apiUrl = `${this._url}?year=${this._year}&month=${this._month}`;
  }
  addEventListeners(){

  }
  handleRequest(){

  }
}
