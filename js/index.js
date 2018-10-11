'use strict';
// JavaScript for use with the index page.

var id = -1;

function loadRandomImage() {
    fetch(buildUrl('/random'))
        .then(function (response) {
            if (response.status !== 200) {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
            return response.json();
        })
        .then(function (json) {
            console.log('Request to /random succeeded: ');
            console.log(json);

            id = json.id;

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

function voteUp(id)
{
    fetch(buildVoteUp(id),
    {
        method: 'POST'
    })
        .then(function (response)
        {
            if(response.status !== 200)
            {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
        })
        loadRandomImage();
}

function voteDown(id)
{
    fetch(buildVoteDown(id),
    {
        method: 'POST'
    })
        .then(function (response)
        {
            if(response.status !== 200)
            {
                throw new Error('Request return status code !== 200: ' + response.status + ' - ')
            }
        });
        loadRandomImage();
}

$(function () {
    loadRandomImage();

    $("button.vote-up").click(function()
    {
        if(id != -1) {
            voteUp(id);
        }
    });

    $("button.vote-down").click(function()
    {
        if(id != -1) {
            voteDown(id);
        }
    });
});
