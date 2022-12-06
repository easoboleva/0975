// ==UserScript==
// @name         Yandex Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Yandex
// @author       Elena Soboleva
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let btn = document.getElementsByClassName("search3__button")[0];
let keywords = ["Продажа автомобилей", "Каталог авто", "купля-продажа автомобиля"];
let keyword = keywords[getRandom(0, keywords.length)];
let yaInput = document.getElementsByName("text")[0];

if (btn !== undefined) {
let i = 0;
let timerId = setInterval(() => {
yaInput.value +=keyword[i];
i++;
if (i == keyword.length) {
			clearInterval(timerId);
			btn.click();
		}
	}, 500);

  } else if (location.hostname == "auto.ru") {
	//console.log("Мы на целевом сайте!");
  setInterval(() => {
  let index = getRandom(0, links.length);
  if (getRandom(0, 101) > 70) {
    location.href = "https://www.yandex.ru/";
  }
  if (links[index].href.indexOf("auto.ru") !== -1) links[index].click();
  }, getRandom(3000, 5000));
} else {
	let nextYandexPage = true;
	for (let i = 0; i < links.length; i++) {
		if (links[i].href.indexOf("auto.ru") !== -1) {
			let link = links[i];
			nextYandexPage = false;
			console.log("Нашел строку " + link);
			setTimeout(() => {
				link.click();
			}, getRandom(2000, 3000));
			break;
		}
	}
	if (document.querySelector(".YyVfkd").innerText == "5") {
		nextYandexPage = false;
		location.href = "https://www.yandex.ru/";
	}
	if (nextYandexPage) {
		setTimeout(() => {
			pnnext.click();
		}, getRandom(2000, 4000));
	}
}

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

