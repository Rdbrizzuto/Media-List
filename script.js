function appendList() {
    let newItem = document.querySelector('#medialist-input').value;
    let mediaType = document.querySelector('#add-mediatype').value;

    let listItem = document.createElement('li');
    listItem.innerHTML = newItem + " (" + mediaType + ")"
    listItem.className = mediaType
    // ^^^will this set a hidden value, so I can filter later??
    //add red x next to list items to be the delete button

    document.querySelector('#medialist-list').append(listItem);


    document.querySelector('#medialist-input').value = ""
    return false;
}


function filterList() {
    let currentFilter = document.querySelector('#medialist-filter');
    let shows = document.getElementsByClassName('show');
    let movies = document.getElementsByClassName('movie');
    let books = document.getElementsByClassName('book');
    let podcasts = document.getElementsByClassName('podcast');
    let videogames = document.getElementsByClassName('videogame'); 


    if (currentFilter.value == "shows") {
        document.querySelector('li').style.display = 'none';
        shows.style.display = 'block'; 
    }
    else if (currentFilter.value == "movies") {
        document.querySelector('li').style.display = 'none';
        movies.style.display = 'block'; 
    }
    else if (currentFilter.value == "books") {
        document.querySelector('li').style.display = 'none';
        books.style.display = 'block'; 
    }
    else if (currentFilter.value == "podcasts") {
        document.querySelector('li').style.display = 'none';
        podcasts.style.display = 'block'; 
    }
    else if (currentFilter.value == "videogames") {
        document.querySelector('li').style.display = 'none';
        videogames.style.display = 'block'; 
    }
    
    else {
        document.querySelector('li').style.display = 'block';
    }
// ^^ doesn't work at filtering
// I don't think the class name is correctly being assigned
}



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#add-to-list').onclick = appendList;
});

document.addEventListener('DOMContentLoaded', filterList);
