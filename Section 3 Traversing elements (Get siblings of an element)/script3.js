function ubahStyle() {
    let paragraf1 = document.getElementById("paragraf1");
    let saudaraBerikutnya = paragraf1.nextSibling;
    while (saudaraBerikutnya) {
        saudaraBerikutnya.style.color = "red";
        saudaraBerikutnya = saudaraBerikutnya.nextSibling;
    }
}