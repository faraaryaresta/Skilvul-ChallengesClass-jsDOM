const checkbox = document.getElementById('toggle');
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
});