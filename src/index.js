import style from "./style.css";
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";
import data from "./data.json";
import { HelloWorld } from "./components/HelloWorld.js";

const arr = [1, 2, 3],
  codeESNext = () => console.log(...arr);

console.log("Hola mundo sin configuración con Webpack 😱");

codeESNext();

//document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack">`;

const d = document,
  $app = d.getElementById("app"),
  $h1 = d.createElement("h1"),
  $logo = d.createElement("img"),
  $img = d.createElement("img"),
  $nav = d.createElement("nav");

let menu = "",
  hello = new HelloWorld("Vanilla JS");

data.links.forEach((el) => (menu += `<a href="${el[1]}">${el[0]}</a>`));

$h1.textContent = hello.greet();
$logo.src = logo;
$logo.classList.add("icon");
$img.src = gemini;
$nav.innerHTML = menu;
$nav.classList.add("menu");

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
//$app.appendChild($img);
