'use strict';

function loadAllImages()
{
	fetch(buildUrl(''))
	.then(function (response)
	{
        if (response.status !== 200)
        {
            throw new Error('Request return status code !== 200: ' + response.status + ' - ');
        }
        return response.json();
    })
    .then(function (json)
    {
    	$.each(json, function(i, item)
    	{
    		$('.main-content').append('<div class="image-container">' +
    			'<img id="main-image" src="' + item.url + '">' +
    			'</div>' +
    			'<div class="voting-buttons">' +
    			'</div>' +
    			'<table class="image-details">' +
        		'<tbody>' +
            	'<tr>' +
                '<td><b>Author</b></td>' +
                '<td id="picAuthor"></td>' +
            	'</tr>' +
            	'<tr>' +
                '<td><b>Name</b></td>' +
                '<td id="picName"></td>' +
            	'</tr>' +
            	'<tr>' +
                '<td><b>Score</b></td>' +
                '<td id="picScore"></td>' +
            	'</tr>' +
            	'<tr>' +
                '<td><b>Licence</b></td>' +
                '<td id="picLicense"></td>' +
            	'</tr>' +
        		'</tbody>' +
    			'</table>');
    	});
    })
    .catch(function (err) {
        console.error('Request to /random failed: ', err);
    });
}

$(function ()
{
	loadAllImages();
});