const targetElement = $('#filter-back-container')

const checkURL = () => {
    if (/artist_index/.test(window.location.href)) {
        return '<a class="btn btn-dark center" href="/album/index">Back to all Albums</a>';
    } else if  (/user_index/.test(window.location.href)) {
        return '<a class="btn btn-dark center" href="/review/index">Back to all Reviews</a>';
    } else {
        return null
    }
}

const backButton = checkURL();

targetElement.append(backButton)