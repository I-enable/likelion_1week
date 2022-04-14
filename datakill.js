let frogChange = document.querySelectorAll(".frog");

function joke() {
    document.querySelector(".mainFace").src="그런건없다.PNG";
    frogChange[0].src="그런건없다.PNG";
    frogChange[1].src="그런건없다.PNG";
    frogChange[2].src="그런건없다.PNG";
    document.querySelector("#title").innerText="No Such Thing ㅋㅋ";
    document.querySelector(".posText").innerText="응 새로고침 해도 안돼 ㅋㅋ";
}

if (localStorage.getItem("kill") == 0) {
    joke();
}

function dataKill() {
    localStorage.setItem("kill", 0);
    if (localStorage.getItem("kill") == 0) {
        joke();
    }
}
