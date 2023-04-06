var items = document.querySelectorAll("#myList li");
        
        for (var i = 0; i < items.length; i++) {
        var items = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        
        items[i].dispatchEvent(items);
        }