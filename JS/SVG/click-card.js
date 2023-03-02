const modal = document.getElementById("myModal");
const body = document.querySelector("body");
const span = document.getElementsByClassName("close")[0];
const root = document.getElementsByClassName('modal')[0];


document.getElementById("myImg").onclick = function () {
    modal.style.display = "block";
    document.getElementById("img01").src = this.src;
    document.getElementById("caption").innerHTML = this.alt;
    body.style.overflow = "hidden";
}

span.onclick = function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
}

root.onclick = function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
};