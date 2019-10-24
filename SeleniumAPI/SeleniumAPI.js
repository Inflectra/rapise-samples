
function Test()
{
	// Raw Selenium API
	TestRawAPI();
	TestRawAPIAdvanced();	
	TestRawActions();
	
	// Window
	TestWindow();
	
	// Browser cookies
	TestCookies();
	
	// Rapise API operating via WebDriver
	TestObjectAPI();
	TestAlert();
	TestObjectActions();
	TestObjectProperties();
}

g_load_libraries=["%g_browserLibrary:Selenium%"];


