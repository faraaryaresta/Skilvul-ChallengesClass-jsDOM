const selectBox = document.getElementById('fruit');
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const option = document.createElement('option');
    option.value = 'banana';
    option.textContent = 'Banana';
    selectBox.appendChild(option);
});