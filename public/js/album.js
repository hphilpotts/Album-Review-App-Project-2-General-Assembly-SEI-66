// Add album, track listing functionality:
let trackFieldCount = 1;
const trackParent = $('#track-parent');
const newInput = `<input type="text" name="trackList" class="form-control id="${trackFieldCount}"/>`;
const addInput = () => trackParent.append(newInput);
$('#add-field').click(addInput);
$('#track1').attr('required', 'true');

// Add album, genre functionality:
let genreFieldCount = 1;

const genreParent = $('#genre-parent');
const newGenreInput = `<input type="text" name="genre" class="form-control" id="${genreFieldCount}"/>`;

const addGenreButton = $('#add-genre');
const removeGenreButton = $('#remove-genre');

removeGenreButton.hide();
removeGenreButton.width(removeGenreButton.height() * 0.45);

const addGenreInput = () => {
    if (genreFieldCount < 10) {
        genreParent.append(newGenreInput);
        genreFieldCount++;
    }
    if (genreFieldCount > 1) removeGenreButton.show();
    if (genreFieldCount === 10) addGenreButton.hide();
}

const removeGenreInput = () => {
    if (genreFieldCount > 1) {
        genreParent.children().last().remove();
        genreFieldCount--;
    }
    if (genreFieldCount === 1) removeGenreButton.hide();
    if (genreFieldCount < 10) addGenreButton.show();
}

addGenreButton.click(addGenreInput);
removeGenreButton.click(removeGenreInput);

$('#genre1').attr('required', 'true');

// Sets maximum year rather than relying on hardcoded value:
const current_year = new Date().getFullYear();
$('#album-year-input').attr('max', current_year);

$(document).ready(function () {
    // prevent early submit on enter press, handle enter press on specific targets:
    $(window).keydown(function (event) {
        if (event.keyCode == 13 && (event.target.name === 'trackList' || event.target.name === 'addTrack')) {
            addInput()
            event.preventDefault();
            return false;
        } else if (event.keyCode == 13 && (event.target.name === "genre" || event.target.name === 'addGenre')) {
            addGenreInput();
            event.preventDefault();
            return false;
        } else if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
    // prevent empty track / genre inputs from being submitted along with valid inputs: 
    $('.remove-empty-inputs').submit(function () {
        $(this).find(':input').filter(function () { return !this.value; }).attr('disabled', 'disabled');
        return true;
    });
});