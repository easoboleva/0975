// ==UserScript==
// @name         Yandex Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Yandex
// @author       Elena Soboleva
// @match        https://ya.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let btn = document.getElementsByClassName("search3__button")[0];
let keywords = ["Продажа автомобилей", "Каталог авто", "купля-продажа автомобиля"];
let keyword = keywords[getRandom(0, keywords.length)];

if (btn !== undefined) {
  document.getElementById("text").value = keyword;
  btn.click();
} else {
  for(let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf("auto.ru") !== -1) {
      let link = links[i];
      console.log("Нашел строку" + link);
      link.click();
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
