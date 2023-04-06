document.getElementById("myList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.style.color = "red";
    }
});