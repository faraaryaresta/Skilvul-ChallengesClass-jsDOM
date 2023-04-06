function ubahTeks() {
    let teks2 = document.getElementById("teks2");
    let saudaraSebelumnya = teks2.previousSibling;
    saudaraSebelumnya.nodeValue = "Ini adalah kalimat pertama yang diubah.";
}