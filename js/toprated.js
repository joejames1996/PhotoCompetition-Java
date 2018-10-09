'use strict';

function loadTopRatedImage()
{
	fetch(buildTopRatedUrl())
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);

            var mainImage = $('#main-image');
            mainImage.attr('src', json.url);
            mainImage.attr('alt', 'Photo Competition image, ' + json.name);

            $('#picAuthor').html(json.author);
            $('#picName').html(json.name);
            $('#picScore').html(json.score);
            $('#picLicense').html(json.license);
        })
        .catch(function (err) {
            console.error('Request to /random failed: ', err);
        });
}

$(function () {
    loadTopRatedImage();

});