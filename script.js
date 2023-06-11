// function for taking inputed text and adding it to the media list
function appendList() {
    let newItem = document.querySelector('#medialist-input').value;
    let mediaType = document.querySelector('#add-mediatype').value;

    let listItem = document.createElement('li');
    listItem.innerHTML = newItem + " (" + mediaType + ")";
    listItem.className = mediaType;
    
    // button that appears next to each list item, and removes the item when clicked
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.className = 'remove-button';
    removeButton.addEventListener('click', function() {
        listItem.remove();
    });

    listItem.appendChild(removeButton);
    document.querySelector('#medialist-list').append(listItem);


    document.querySelector('#medialist-input').value = ""
    return false;
}

// function that allows you to change which list items are being displayed, based on their media type
function filterList() {
    let currentFilter = document.querySelector('#medialist-filter').value;
    let listItems = document.querySelectorAll('#medialist-list li');

    listItems.forEach(function(listItem) {
        listItem.style.display = 'none';

        if (currentFilter === "shows" && listItem.classList.contains('show')) {
        listItem.style.display = 'block';
        } 
        else if (currentFilter === "movies" && listItem.classList.contains('movie')) {
        listItem.style.display = 'block';
        } 
        else if (currentFilter === "books" && listItem.classList.contains('book')) {
        listItem.style.display = 'block';
        } 
        else if (currentFilter === "podcasts" && listItem.classList.contains('podcast')) {
        listItem.style.display = 'block';
        } 
        else if (currentFilter === "videogames" && listItem.classList.contains('videogame')) {
        listItem.style.display = 'block';
        }
        else if (currentFilter === "all") {
            listItem.style.display = 'block';
        }
    });
}


// whenever the add button is clicked the "appendList" function is run
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#add-to-list').onclick = appendList;
});

// whenever the a new item on the medialist filter is selected, the "filterList" function runs
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#medialist-filter').onchange = filterList
});
