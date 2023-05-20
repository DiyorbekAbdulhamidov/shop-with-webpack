import './assets/styles/main.css';
import { MainService } from './service/main';
const username = document.querySelector(".username") as HTMLInputElement;
const gmail = document.querySelector(".gmail") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const registerForm = document.querySelector(".register") as HTMLFormElement;
const signInDiv = document.querySelector(".sign-in-page") as HTMLDivElement;
const signInForm = document.querySelector(".signIn") as HTMLFormElement;
const usernameSign = document.querySelector('.usernameSign') as HTMLInputElement;
const passwordSign = document.querySelector('.passwordSign') as HTMLInputElement;
const products = document.querySelector('.products') as HTMLDivElement;
const registerPage = document.querySelector('.register-page') as HTMLDivElement;
const animation = document.querySelector('.animation') as HTMLDivElement;
const monitorBtn = document.querySelector('.mon') as HTMLButtonElement;
const tvBtn = document.querySelector('.tvz') as HTMLButtonElement;
const phoneBtn = document.querySelector('.ph') as HTMLButtonElement;
const laptopBtn = document.querySelector('.lp') as HTMLButtonElement;
const gitaraBtn = document.querySelector('.git') as HTMLButtonElement;
const soatBtn = document.querySelector('.soa') as HTMLButtonElement;
const caseBtn = document.querySelector('.cas') as HTMLButtonElement;
const gulBtn = document.querySelector('.gu') as HTMLButtonElement;
const service = document.querySelector('.service') as HTMLDivElement;
const wrapper = document.querySelector('.wrapper') as HTMLDivElement;
const wrapper1 = document.querySelector('.wrapper1') as HTMLDivElement;
const wrapper2 = document.querySelector('.wrapper2') as HTMLDivElement;
const wrapper3 = document.querySelector('.wrapper3') as HTMLDivElement;
const wrapper4 = document.querySelector('.wrapper4') as HTMLDivElement;
const wrapper5 = document.querySelector('.wrapper5') as HTMLDivElement;
const wrapper6 = document.querySelector('.wrapper6') as HTMLDivElement;
const wrapper7 = document.querySelector('.wrapper7') as HTMLDivElement;

let regUserName: string;
let regPassword: string;

const main = new MainService();

function registerFormm() {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // main.signUp(gmail.value, username.value, password.value);

        if (username.value === "" || password.value === "" || gmail.value === "") {
            alert("Please enter information");
        } else {
            signInDiv.style.display = "block";
            registerForm.style.display = "none";


            regUserName = username.value;
            regPassword = password.value;
            localStorage.setItem("username", regUserName);
            localStorage.setItem("password", regPassword);
        }
    });
}

function signInFormm() {
    signInForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const storedUserName = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (storedUserName === usernameSign.value && storedPassword === passwordSign.value) {
            signInDiv.style.display = "none";
            animation.style.display = "grid";
            setTimeout(() => {
                animation.style.display = "none";
                products.style.display = "grid";
            }, 3000);
        } else {
            alert("Invalid username or password.");
        };  
        // main.signIn(username.value, password.value)
    });
}

function showProductInfo() {
    monitorBtn.addEventListener("click", function () {
        products.style.display = "none";
        wrapper.style.display = "block"
    });

    tvBtn.addEventListener("click", function () {
        products.style.display = "none";
        wrapper1.style.display = "block";
    });

    phoneBtn.addEventListener("click", function () {
        products.style.display = "none";
        wrapper2.style.display = "block";
    });

    laptopBtn.addEventListener("click", function () {
        products.style.display = "none";
        wrapper3.style.display = "block";
    });

    gitaraBtn.addEventListener("click", function () {
        products.style.display = "none";
        wrapper4.style.display = "block";
    });

    soatBtn.addEventListener("click", function () {
        products.style.display = "none";
        wrapper5.style.display = "block";
    });

    caseBtn.addEventListener("click", function () {
        products.style.display = "none";
        wrapper6.style.display = "block";
    });

    gulBtn.addEventListener("click", function () {
        products.style.display = "none";
        wrapper7.style.display = "block";
    });


}

function init() {
    registerFormm();
    signInFormm();
    showProductInfo();
}

init(); 