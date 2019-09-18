//Put your custom functions and variables in this file


/** @scenario DoWaitForDemo*/
function DoWaitForDemo()
{
	/**
	 * Phase 1: Launch app, and wait using 'DoWaitFor'
	 */
	Global.DoLaunch("App\\LongLoadingApp.exe");
	if(Global.DoWaitFor('Proceed__', 15000))
	{
		// We are here because DoWaitFor succeeded!
		SeS('Proceed__').DoAction();
		SeS('OK').DoLClick(49, 12);
		Tester.Assert("DoWaitFor worked", true);
	} else {
		// We are here because DoWaitFor failed. DoWaitFor
		// does not affect execution report, so in our case
		// we need to report a failure explictly.
		Tester.Assert("DoWaitFor worked", false);
	}
	// Kill AUT to start it again.
	Global.DoKillByPid();
}

/** @scenario DoWaitForPropertyDemo*/
function DoWaitForPropertyDemo()
{
	/*
	 * Phase 2: Launch the same app, and wait using 'DoWaitForProperty'
	 */
	Global.DoLaunch("App\\LongLoadingApp.exe");
	
	if(Global.DoWaitForProperty('LoadingForm', 'GetWindowText', 'Ready', 15000))
	{
		// We are here because DoWaitForProperty succeeded:
		// title is now 'Ready'
		SeS('Proceed__').DoAction();
		SeS('OK').DoLClick(49, 12);
		Tester.Assert("DoWaitForProperty worked", true);
	} else {
		// We are here because DoWaitForProperty failed. DoWaitForProperty
		// does not affect execution report, so in our case
		// we need to report a failure explictly.
		Tester.Assert("DoWaitForProperty worked", false);
	}
	
	// Kill AUT to start it again.
	Global.DoKillByPid();
}


function CheckWindowTitle(value)
{
	return value.indexOf("Loading") != 0;
}


/** @scenario DoWaitForPropertyAdvancedDemo*/
function DoWaitForPropertyAdvancedDemo()
{
	/*
	 * Phase 3: Launch the same app, and wait using 'DoWaitForProperty'
	 */
	Global.DoLaunch("App\\LongLoadingApp.exe");
	
	if(Global.DoWaitForProperty('LoadingForm', 'GetWindowText', CheckWindowTitle, 15000))
	{
		// We are here because DoWaitForProperty succeeded:
		// title is now 'Ready'
		SeS('Proceed__').DoAction();
		SeS('OK').DoLClick(49, 12);
		Tester.Assert("DoWaitForProperty worked", true);
	} else {
		// We are here because DoWaitForProperty failed. DoWaitForProperty
		// does not affect execution report, so in our case
		// we need to report a failure explictly.
		Tester.Assert("DoWaitForProperty worked", false);
	}
	
	// Kill AUT to start it again.
	Global.DoKillByPid();
}

