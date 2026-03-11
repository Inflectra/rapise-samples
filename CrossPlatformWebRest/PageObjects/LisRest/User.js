//Put your custom functions and variables in this file

global.restToken = null;

/** REST After Callback After_LisRest_Login*/
function After_LisRest_Login(/**RESTResponse*/response)
{
	Log('After_LisRest_Login');
	var obj = response.GetResponseBodyObject();
	global.restToken = obj.token;
}

/** REST Before Callback Before_LisRest*/
function Before_LisRest(/**RESTRequest*/request)
{
	if (global.restToken)
	{
		request.SetHeader("Authorization", "Bearer " + global.restToken);
		request.SetParameter('organization', Tester.GetParam("Organization"));
	}
}
