function tambahElemen() {
    let parent = document.getElementById("parent");
    let fragment = new DocumentFragment();
    for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.innerHTML = "New Child " + (i+1);
        fragment.appendChild(div);
    }
    parent.prepend(fragment);
}