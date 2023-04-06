let event = new Event('customEvent', {
    'bubbles': true,
    'cancelable': true
});

document.getElementById("myDiv").dispatchEvent(event);

document.getElementById("myDiv").addEventListener("customEvent", function() {
    alert("Event telah di-trigger!");
});