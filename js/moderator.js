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
                '<td id="picAuthor">' + item.author + '</td>' +
            	'</tr>' +
            	'<tr>' +
                '<td><b>Name</b></td>' +
                '<td id="picName">' + item.name + '</td>' +
            	'</tr>' +
            	'<tr>' +
                '<td><b>Score</b></td>' +
                '<td id="picScore">' + item.score + '</td>' +
            	'</tr>' +
            	'<tr>' +
                '<td><b>Licence</b></td>' +
                '<td id="picLicense">' + item.license + '</td>' +
            	'</tr>' +
        		'</tbody>' +
    			'</table>' +
    			'<div class="voting-buttons">' +
    			'<button id="' + item.id + '" class="delete-button voting-button vote-down">Delete Photo</button>' +
    			'</div>' +
    			'<hr>');

    		$("button#" + item.id).click(function()
    		{
    			deletePhoto(item.id);
    		});
    	});
    })
    .catch(function (err) {
        console.error('Request to /random failed: ', err);
    });
}

function deletePhoto(id)
{
	console.log('delete photo ' + id);

	var header = new Headers({
		"Authorization": "Basic " + window.btoa(username + ":" + password)
	});

	fetch(buildUrl('/id/' + id),
	{
		method: 'DELETE',
		headers: header
	})
	.then(function(response)
	{
		if (response.status !== 204)
        {
            throw new Error('Request return status code !== 204: ' + response.status + ' - ');
        }
	})
	.then(function()
	{
		$(location).attr('href', 'moderator.html');
	})
	.catch(function(err)
	{
		console.error('Failed to delete photo ' + id + ': ', err);
	});
}

$(function ()
{
	loadAllImages();
});