//Put your custom functions and variables in this file

var startTime = null;

function BeginRun()
{
	startTime = _SeSCurrMillis();
}

function WaitUntil(/**number*/maxMillis) {
	
	var curr = _SeSCurrMillis();
	var lastWait = maxMillis - (curr - startTime);
	if( lastWait > 0 )
	{
		Tester.Message("Final wait: "+lastWait);
		Global.DoSleep( lastWait );
	}
}