"use strict";
const btn = document.querySelector(".btn");
const num = document.querySelector(".notif-count");
const unread = document.querySelectorAll(".unread-n");
const redDot = document.querySelectorAll(".red-dot");

btn.addEventListener("click", () => {
	num.innerHTML = "0";
	unread.forEach((message) => {
		message.classList.remove("unread");
	});
	redDot.forEach((message) => {
		message.remove("red-dot");
	});
});
