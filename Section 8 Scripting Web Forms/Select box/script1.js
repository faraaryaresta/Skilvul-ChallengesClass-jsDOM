const selectBox = document.getElementById('fruit');
const result = document.getElementById('result');
selectBox.addEventListener('change', () => {
    result.textContent = `Anda memilih ${selectBox.value}`;
});