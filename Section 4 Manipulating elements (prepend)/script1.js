function tambahElemen() {
    let parent = document.getElementById("parent");
    let div = document.createElement("div");
    div.innerHTML = "New Child";
    parent.prepend(div);
}