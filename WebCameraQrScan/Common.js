// Put functions and global variables shared across all test cases here

/**
 * Run this code before each test case.
 */
SeSOnTestInit(function() {
	if (g_entryPointName == "Test") {
		// Put your common initialization code here
	}
});

/**
 * Run this code after each test case.
 */
SeSOnTestFinish(function() {
	if (g_entryPointName == "Test") {
		// Put your common finalization code here
		Navigator.Close();
	}
});


function GetWebDriverNonProfileCapabilities(profile)
{
	var caps = {};
	
	var videoPath = Global.GetFullPath("qr.mjpeg");
	caps["args"] = ["use-fake-ui-for-media-stream", "use-fake-device-for-media-stream", "use-file-for-fake-video-capture=" + videoPath];
	
	return caps;
}