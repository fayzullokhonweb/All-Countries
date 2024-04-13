import "../css/main.css";
import "./mode";
import request from "./request";
import { createCountryInfo } from "./updateUi";

const querySting = window.location.search;
const urlParams = new URLSearchParams(querySting);
const country = urlParams.get("country");
const countryApI = `https://restcountries.com/v3.1/${country}`;

request(countryApI)
  .then((data) => {
    createCountryInfo(data[0]);
  })
  .catch((err) => {
    alert(err.message);
  });
