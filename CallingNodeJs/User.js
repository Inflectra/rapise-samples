//Put your custom functions and variables in this file

function SeSCallNodeJS(/**string*/script_path, input_data)
{
	script_path = g_helper.ResolvePath(script_path);
	// Return instrumented verison of file, ready for eval
	var cmd = g_helper.ResolvePath("InstrumentJS/node.exe");
	var inFile = g_helper.GetDirectoryName(script_path)+'\\input.json';
	var outFile = g_helper.GetDirectoryName(script_path)+'\\output.json';
	
	File.Write(inFile, JSON.stringify(input_data, null, '\t'));
	if(File.Exists(outFile))
	{
		File.Delete(outFile);
	}
	
	var cmdLine = '"'+cmd+'" "'+script_path+'"';

	if(l3) Log3("SeSCallNodeJS: calling "+cmdLine);

	var exitCode = g_util.Run(cmdLine, g_helper.GetDirectoryName(script_path), -1, false);
	
	if(File.Exists(outFile))
	{
		var result = JSON.parse(File.Read(outFile));
		return result;
	}
	
	return null;
}