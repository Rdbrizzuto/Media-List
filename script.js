function appendList() {
    let newItem = document.querySelector('#medialist-input').value;

    let listItem = document.createElement('li');
    listItem.innerHTML = newItem

    document.querySelector('#medialist-list').append(listItem);

    // if (document.querySelector('#add-mediatype').value == "show") {
        //also we want to be able to filter based on media type
        //do one of these for each mediatype
        //show media time next to each list item
    //}

    //add red x next to list items

    document.querySelector('#medialist-input').value = ""
    return false;
}



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#add-to-list').onclick = appendList;
});
