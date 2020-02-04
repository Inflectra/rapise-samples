


function Test(params)
{
	SeS('Log_In').DoClick();
	
	// Get image of an element
	var actualImage = SeS('Username').GetBitmap();
	// Compose path to expected image
	var expectedImagePath = '%WORKDIR%/Images/Step2.png';
	// Compare images
	Tester.AssertImage("Images are equal", actualImage, expectedImagePath);
		
	Tester.AssertImage("Images are equal", actualImage, expectedImagePath);
}

g_load_libraries=["%g_browserLibrary%"];


