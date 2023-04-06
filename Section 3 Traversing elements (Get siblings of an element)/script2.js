function ubahStyle() {
    let div3 = document.getElementById("div3");
    let saudaraSebelumnya = div3.previousSibling;
    while (saudaraSebelumnya.nodeType != 1) {
        saudaraSebelumnya = saudaraSebelumnya.previousSibling;
    }
    saudaraSebelumnya.style.backgroundColor = "red";
}