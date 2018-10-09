'use strict';
// JavaScript containing shared constants, for use in all pages.

var backendIp = '18.202.128.247';
var token = '63fc9526-7aab-4665-a61f-31835bd7794c';

function buildUrl(path) {
    return 'http://' + backendIp + '/images' + path + '?token=' + token;
}

function buildVoteUp(id)
{
	return buildUrl('/id/' + id + '/vote/up');
	//return 'http://' + backendIp + 'images/id/' + id + 
}

function buildVoteDown(id)
{
	return buildUrl('/id/' + id + '/vote/down');
}