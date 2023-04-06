function tampilkan() {
    var inputNama = document.getElementById("nama");
    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "Halo " + inputNama.value + "!";
}