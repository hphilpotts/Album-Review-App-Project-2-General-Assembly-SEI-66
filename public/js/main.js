// ----- ALBUMS ----- //

// Add album, track listing functionality:
const trackParent = $('#track-parent');
const newInput = '<input type="text" name="trackList" class="form-control"/>';
const addInput = () => trackParent.append(newInput);
$('#add-field').click(addInput);
$('#track1').attr('required', 'true');

// Add album, genre functionality:
const genreParent = $('#genre-parent');
const newGenreInput = '<input type="text" name="genre" class="form-control"/>';
const addGenreInput = () => genreParent.append(newGenreInput);
$('#add-genre').click(addGenreInput);
$('#genre1').attr('required', 'true');

// Set maximum year based on current year:
const current_year = new Date().getFullYear();
$('#album-year-input').attr('max', current_year);

$(document).ready(function () {
    $('.remove-empty-inputs').submit(function () {
        $(this).find(':input').filter(function () { return !this.value; }).attr('disabled', 'disabled');
        return true;
    });
});