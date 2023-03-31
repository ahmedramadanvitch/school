// start pre-loader
let preLoader = document.querySelector("#pre-loader");

window.addEventListener("load" , () => {
  preLoader.style.display = "none";
})

// ******************************************************* //

// progress under inputs in request discount section
//input text in form in request discount section
let inputText = document.querySelector(".input-text");
let progressText = document.querySelector(".progress-text");
let maxLengthText = inputText.getAttribute("maxlength");

inputText.oninput = function () {
    progressText.style.width = `${(inputText.value.length * 100) / maxLengthText}%`;
    if (inputText.value.length <= 10) {
        progressText.style.backgroundColor = "var(--bg-orange)";
    }
    else if (inputText.value.length <= 20) {
        progressText.style.backgroundColor = "green";
    } 
    else {
        progressText.style.backgroundColor = "var(--bg-yellow)";
    } 
};
//input Phone in form in request discount section
let inputPhone = document.querySelector(".input-phone");
let progressPhone = document.querySelector(".progress-phone");
let maxLengthPhone = inputPhone.getAttribute("maxlength");

inputPhone.oninput = function () {
    progressPhone.style.width = ` ${(inputPhone.value.length * 100) / maxLengthPhone}% `;
    if (inputPhone.value.length <= 5) {
        progressPhone.style.backgroundColor = "var(--bg-orange)";
    }
    else if (inputPhone.value.length <= 10) {
        progressPhone.style.backgroundColor = "green";
    } 
    else {
        progressPhone.style.backgroundColor = "var(--bg-yellow)";
    } 
};
                        //input Email in form in request discount section
let inputEmail = document.querySelector(".input-email");
let progressEmail = document.querySelector(".progress-email");
let maxLengthEmail = inputEmail.getAttribute("maxlength");

inputEmail.oninput = function () {
    progressEmail.style.width = `${(this.value.length * 100) / maxLengthEmail}%`;
    if (this.value.length <= 10) {
        progressEmail.style.backgroundColor = "var(--bg-orange)";
    }
    else if (inputEmail.value.length <= 20) {
        progressEmail.style.backgroundColor = "green";
    } 
    else {
        progressEmail.style.backgroundColor = "var(--bg-yellow)";
    } 
};
                        //input password number in form in request discount section
let inputPassword = document.querySelector(".input-password");
let progressPassword = document.querySelector(".progress-password");
let maxLengthPassword = inputPassword.getAttribute("maxlength");

inputPassword.oninput = function () {
    progressPassword.style.width = `${(this.value.length * 100) / maxLengthPassword}%`;
    if (this.value.length <= 5) {
        progressPassword.style.backgroundColor = "var(--bg-orange)";
    }
    else if (inputText.value.length <= 10) {
        progressPassword.style.backgroundColor = "green";
    } 
    else {
        progressPassword.style.backgroundColor = "var(--bg-yellow)";
    }
};