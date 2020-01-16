
//########## Script Steps ##############

function Test(params)
{
	var res = SeSCallNodeJS('nodescript/index.js', {data:'ABC'});

	if(res)
	{
		Log('Data: '+res.data);
		Tester.Message('md5: '+res.data);
	} else {
		Tester.Assert('Error calling nodejs.', false);
	}
}

