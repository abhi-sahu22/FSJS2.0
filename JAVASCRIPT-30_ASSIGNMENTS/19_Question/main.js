// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

// ==========SOLUTION========== (PLEASE OPEN index.html file using LIVE SERVER)
import { someCountries } from "./countries.js";
import { webTechs } from "./web_techs.js";

const country = document.getElementById("country");
const tech = document.getElementById("tech");

country.innerText = someCountries;
tech.innerText = webTechs;


console.log(someCountries);
console.log(webTechs);








