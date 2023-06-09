function appendList() {
    let newItem = document.querySelector('#medialist-input').value;
    let mediaType = document.querySelector('#add-mediatype').value;

    let listItem = document.createElement('li');
    listItem.innerHTML = newItem + " (" + mediaType + ")";
    listItem.className = mediaType;
    //add red x next to list items to be the delete button!!!!

    document.querySelector('#medialist-list').append(listItem);
    // append a button at the same time ???


    document.querySelector('#medialist-input').value = ""
    return false;
}


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



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#add-to-list').onclick = appendList;
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#medialist-filter').onchange = filterList
});
