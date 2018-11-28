
function Test()
{
	// Raw Selenium API
	TestRawAPI();
	TestRawActions();
	
	// Rapise API operating via WebDriver
	TestObjectAPI();
	TestAlert();
	TestObjectActions();
	TestObjectProperties();
}

g_load_libraries=["%g_browserLibrary:Selenium%"];


