'use strict';

$(function () {
    $("#uploadImage").submit(function(event)
    {
    	var formData = new FormData();
    	var fileField = document.querySelector("input[type='file']");

    	formData.append('author', $('.uploadAuthor').val());
    	formData.append('name', $('.uploadName').val());
    	formData.append('license', $('.uploadLicense').val());

    	formData.append('rawdata', fileField.files[0]);

    	fetch(buildUrl(''),
    	{
    		method: 'POST',
    		body: formData
    	})
    	.then(response => response.json())
    	.catch(error => console.error('Error:', error))
    	.then(response => console.log('Success:', JSON.stringify(response)));
    });
});
