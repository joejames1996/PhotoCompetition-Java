'use strict';

$(function () {
    $("#uploadImage").submit(function(event)
    {
    	var formData = new FormData();
    	var fileField = document.querySelector("input[type='file']");

    	// formData.append('author', $('.uploadAuthor').val());
    	// formData.append('name', $('.uploadName').val());
    	// formData.append('license', $('.uploadLicense').val());

    	var author = $('input#uploadAuthor').val();
    	var name = $('input#uploadName').val();
    	var license = $('input#uploadLicense').val();

    	formData.append('metadata', new Blob([JSON.stringify({
    		'author' : author,
    		'name' : name,
    		'license' : license
    	})], {
    		type: "application/json"
    	}));

    	formData.append('rawdata', fileField.files[0]);

    	fetch(buildUrl(''),
    	{
    		method: 'POST',
    		body: formData
    	})
    	.then(response => response.json())
    	.catch(error => console.error('Error:', error))
    	.then(response => console.log('Success:', JSON.stringify(response)));

    	return false;
    });
});
