"use strict";

// Anser Section -------------

let replayTextHello = "Hello...";
let replayTextHi = "Hiii";
let replayTextHAY = "I am fine, Thank You...";
let replayTextNice = "Thank You...";
let replayTextLove = "I Love You Two";
let replayTextName = "My Name Is Shanto";
let replayTextShantoSM = "Good";
let replayTextShanto = "programming hero best";
let replayTextShantoVL = `https://youtube.com`;
let replayTextShantoGH = `https://github.com/shanto360`;


let dynamicImageSrc = "images/profile/shanto.png";
let dynamicLinkHref = "https://www.facebook.com/profile.shanto";

// ***********************************************************

let audioTon = document.getElementById("audioTon");

let profileNameShow = document.getElementById("profileNameShow");
let profileLink = document.querySelectorAll('.profileLink');
let profileImages = document.querySelectorAll('.profileImages');

let postSection = document.querySelector('.meText');
let inputPostText = document.getElementById("inputPostText");
let likePost = document.getElementById("likePost");
let textSubmit = document.getElementById("textSubmit");


let controls = document.querySelector(".controls");
let closeBtn = document.querySelector(".closeBtn");
let profielName = document.getElementById("profielName");
let profielImgLink = document.getElementById("profielImgLink");
let profielLink = document.getElementById("profielLink");
let Btn = document.getElementById("Btn");

let poppep = document.querySelector(".poppep");

Btn.addEventListener("click", function() {

	if (profielImgLink.value.length !== 0 && profielName.value.length !== 0) {
		
		for(let i = 0; i < profileLink.length; i++) {
			profileLink[i].href = profielLink.value;
			profileLink[i].target = "f";
		}
		for (let i = 0; i < profileImages.length; i++) {
			dynamicImageSrc = profielImgLink.value;
			profileImages[i].src = profielImgLink.value;
		}
		profileNameShow.innerText = profielName.value;
		poppep.style.display = "none";
		profielName.value = "";
		profielImgLink.value = "";
		profielLink.value = "";
		controls.style.display = "block";
	} else {
		profielName.style.borderColor = "red";
		profielImgLink.style.borderColor = "red";
		profielLink.style.borderColor = "red";
	}
	profielLink.addEventListener("input", ()=>{
		if (profielLink.value == "") {
			for(let i = 0; i < profileLink.length; i++) {
				profileLink[i].href = dynamicLinkHref;
				profileLink[i].target = "f";
			}
		} else {
			profileLink[i].href = profielLink.value;
			profileLink[i].target = "f";
		}
	})
})


for (let i = 0; i < profileImages.length; i++) {
	profileImages[i].src = dynamicImageSrc;
}

for(let i = 0; i < profileLink.length; i++) {
	profileLink[i].href = dynamicLinkHref;
	profileLink[i].target = "f";
}



inputPostText.addEventListener("input", function() {
	if (inputPostText.value !== "") {
		textSubmit.classList.remove("disNone");
		likePost.classList.add("disNone");
	} else {
		textSubmit.classList.add("disNone");
		likePost.classList.remove("disNone");
	}
})




let createText = function(text) {
	let ptag = document.createElement("p");
	ptag.innerText = text;

	let mePostDiv = document.createElement("div");
	mePostDiv.className = "postMe";
	let blankDiv = document.createElement("div");
	let textDiv = document.createElement("div");
	textDiv.className = "textDiv";

	mePostDiv.appendChild(blankDiv);
	mePostDiv.appendChild(textDiv);
	textDiv.appendChild(ptag);

	return mePostDiv;
} 


let postText = function(event) {
	event.preventDefault();
	let submit = createText(inputPostText.value);
	postSection.appendChild(submit);

	condotionFonction(inputPostText.value);

	inputPostText.value = "";
	textSubmit.classList.add("disNone");
	likePost.classList.remove("disNone");
}

textSubmit.addEventListener("click", function() {
	postText(event);
});


let createLikePost = function() {
	let ptag = document.createElement("p");
	ptag.className = "likeiconPost";

	let mePostDiv = document.createElement("div");
	mePostDiv.className = "postMe";
	let blankDiv = document.createElement("div");
	let textDiv = document.createElement("div");
	textDiv.className = "textDiv";
	let itag = document.createElement("i");
	itag.className = "fa-solid fa-thumbs-up likePost";

	mePostDiv.appendChild(blankDiv);
	mePostDiv.appendChild(textDiv);
	textDiv.appendChild(ptag);
	ptag.appendChild(itag);

	return mePostDiv;
}
let addLikePost = function(event) {
	event.preventDefault();
	let submit = createLikePost();
	postSection.appendChild(submit);
}

likePost.addEventListener('click', function() {
	addLikePost(event);
})



let youPostCreate = function(text) {

	let mePostDiv = document.createElement("div");
	mePostDiv.className = "postYour";
	let textDiv = document.createElement("div");
	textDiv.className = "textDiv";
	let ptag = document.createElement("p");
	ptag.innerText = text;

	let imageDiv = document.createElement("div");
	imageDiv.className = "imagesDivMini";
	let aTag = document.createElement("a");
	aTag.className = "profileLink";
	let imgTag = document.createElement("img");
	imgTag.className = "profileImages";
	imgTag.src = dynamicImageSrc;

	mePostDiv.appendChild(textDiv);
	textDiv.appendChild(ptag);
	textDiv.appendChild(imageDiv);
	imageDiv.appendChild(aTag);
	aTag.appendChild(imgTag);

	return mePostDiv;
}
let addYouPost = function(event,replayText) {
	event.preventDefault();
	let submit = youPostCreate(replayText);
	postSection.appendChild(submit);
	audioTon.play();
}


controls.addEventListener("click", function() {
	poppep.style.display = "block";
	controls.style.display = "none";
})
closeBtn.addEventListener("click", function() {
	poppep.style.display = "none";
	controls.style.display = "block";
})



let condotionFonction = function(inVlu) {
	if (inVlu == "hello" || inVlu == "Hello" || inVlu == "hlw" || inVlu == "Hlw") {
		addYouPost(event, replayTextHello);
	} else if (inVlu == "Hi" || inVlu == "hi" || inVlu == "Hii" || inVlu == "hii") {
		addYouPost(event, replayTextHi);
	} else if (inVlu == "how are you" || inVlu == "How Are You" || inVlu == "How are you" || inVlu == "how are you?") {
		addYouPost(event, replayTextHAY);
		addYouPost(event, "And You...");
	} else if (inVlu == "nice" || inVlu == "Nice" || inVlu == "Good" || inVlu == "good" || inVlu == "beautiful" || inVlu == "Beautiful" || inVlu == "So Beautiful" || inVlu == "So beautiful" || inVlu == "so beautiful") {
		addYouPost(event, replayTextNice);
	} else if (inVlu == "I Love you" || inVlu == "i love you" || inVlu == "I love you" || inVlu == "love me") {
		addYouPost(event, replayTextLove);
	} else if (inVlu == "Your Name" || inVlu == "your name" || inVlu == "What is your name?" || inVlu == "What is your name") {
		addYouPost(event, replayTextName);
	} else if (inVlu == "Which is the best platform for programming in Bangladesh" || inVlu == "which is the best platform for programming in Bangladesh" || inVlu == "best programming website" || inVlu == "What a programming hero") {
		addYouPost(event, replayTextShanto);
	} else if (inVlu == "Video" || inVlu == "video" || inVlu == "vido link" || inVlu == "Video Link") {
		addYouPost(event, replayTextShantoVL);
	} else if (inVlu == "Github" || inVlu == "GitHub" || inVlu == "github" || inVlu == "Github Link") {
		addYouPost(event, replayTextShantoGH);
	} else if (inVlu == "আমিও" || inVlu == "I am fine" || inVlu == "i am fine" || inVlu == "fine" || inVlu == "yes") {
		addYouPost(event, replayTextShantoSM);
	}
}