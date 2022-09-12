// ----- ALBUMS ----- //

// Add album, track listing functionality:
const trackParent = $('#track-parent');
const newInput = '<input type="text" name="trackList" class="form-control"/>'
const addInput = () => trackParent.append(newInput);
$('#add-field').click(addInput);

// Add album, genre functionality:
const genreParent = $('#genre-parent');
const newGenreInput = '<input type="text" name="genre" class="form-control"/>'
const addGenreInput = () => genreParent.append(newGenreInput);
$('#add-genre').click(addGenreInput);