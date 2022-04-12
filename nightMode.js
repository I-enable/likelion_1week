let classColor = document.querySelector("body").className;


function colorChange() {
    if (classColor == "white"){
        document.querySelector("body").classList.replace('white', 'black');
        document.querySelector(".navbar").classList.replace('bg-light', 'bg-black');
        document.querySelector(".navbar").classList.replace('navbar-light', 'navbar-default');
        classColor = "black";
    }
    else if (classColor == "black") {
        document.querySelector("body").classList.replace('black', 'white');
        document.querySelector(".navbar").classList.replace('bg-black', 'bg-light');
        document.querySelector(".navbar").classList.replace('navbar-default', 'navbar-light');
        classColor = "white";
    }
}