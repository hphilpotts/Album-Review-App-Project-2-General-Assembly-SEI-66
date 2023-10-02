// Add album, track listing functionality:
const trackParent = $('#track-parent');
const newInput = '<input type="text" name="trackList" class="form-control"/>';
const addInput = () => trackParent.append(newInput);
$('#add-field').click(addInput);
$('#track1').attr('required', 'true');

// Add album, genre functionality:
let fieldCount = 1;
const genreParent = $('#genre-parent');
const newGenreInput = '<input type="text" name="genre" class="form-control"/>';
const addGenreInput = () => {
    if (fieldCount < 10) {
        genreParent.append(newGenreInput);
        fieldCount++;
    }
}
$('#add-genre').click(addGenreInput);
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