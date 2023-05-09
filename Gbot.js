// ==UserScript==
// @name         Bot for Bing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Martynova Maria
// @match        https://www.bing.com/*
// @match        https://www.labirint.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["Книги на иностранных языках", "Увлекательная история для детей", "Читатели выбирают сегодня"];
let keyword = keywords[getRandom(0,keywords.length)]
let links = document.links;
let bingInput = document.getElementsByName("q")[0];
let search = document.getElementById("search_icon");

if(search != undefined) {
  bingInput.value = keyword;
  search.click();
} else {
  for(let i = 0; i < links.length; i++) {
    if(links[i].href.indexOf("labirint.ru") != -1) {
    let link = links[i];
      console.log("Нашел строку " + link);
      link.click();
    }
  }
}
function getRandom(min, max) {
return Math.floor(Math.random() * (max-min) + min);
}
