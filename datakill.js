
if (localStorage.getItem("kill") == 0) {
    document.querySelector(".main_face").src="그런건없다.PNG";
    let frogchange = document.querySelectorAll(".frog");
    frogchange[0].src="그런건없다.PNG";
    frogchange[1].src="그런건없다.PNG";
    frogchange[2].src="그런건없다.PNG";
    document.querySelector("#title").innerText="No Such Thing ㅋㅋ";
    document.querySelector(".pos_text").innerText="응 새로고침 해도 안돼 ㅋㅋ";
}

function datakill() {
    localStorage.setItem("kill", 0);
    if (localStorage.getItem("kill") == 0) {
        document.querySelector(".main_face").src="그런건없다.PNG";
        document.querySelectorAll(".frog").src="그런건없다.PNG";
        let frogchange = document.querySelectorAll(".frog");
        frogchange[0].src="그런건없다.PNG";
        frogchange[1].src="그런건없다.PNG";
        frogchange[2].src="그런건없다.PNG";
        document.querySelector("#title").innerText="No Such Thing ㅋㅋ";
        document.querySelector(".pos_text").innerText="응 새로고침 해도 안돼 ㅋㅋ";
    }
}
