function Test()
{
	/**
	 * @fileOverview
	 * In this sample we show the difference between Global.DoWaitFor and Global.DoWaitForProperty
	 *
	 * Global.DoWaitFor is used when there is an object that may not exist on the screen
	 * before some point of time. In the AUT we have a button "Proceed>" that is not available
	 * until the app finished loading.
	 *
	 * Global.DoWaitForProperty used when there is an object that changes its state during the process
	 * and we need to wait for it to reach specific state. It may be progress bar or status message. 
	 * In the considered application we have title (WindowText) that says "Ready" when application is loaded
	 * so we wait for it.
	 *
	 */	
	 
	 
	RVL.DoPlayScript("Main.rvl.xlsx", "RVL");
	return;
	
	//Call scenario DoWaitForDemo
	DoWaitForDemo();

	//Call scenario DoWaitForPropertyDemo
	DoWaitForPropertyDemo();

	//Call scenario DoWaitForPropertyAdvancedDemo
	DoWaitForPropertyAdvancedDemo();
}

g_load_libraries=["Managed"];


