//Put your custom functions and variables in this file




function RTF2Plain(/**string*/rtfPath)
{
	// https://stackoverflow.com/questions/29922771/convert-rtf-to-and-from-plain-text
	function convertToPlain(rtf) {
	    rtf = rtf.replace(/\\par[d]?/g, "");
	    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "");
	    
	    rtf = Global.DoTrim(rtf);
	    return rtf;
	}

	var rtfText = /**String*/File.Read(rtfPath);
	// Remove last 0 character, if any
	if(rtfText.charCodeAt(rtfText.length-1)==0)
	{
		rtfText = rtfText.substr(0,rtfText.length-1);
	}
	var plainText = convertToPlain(rtfText);
	Log("Converted: "+plainText);
	File.Write(rtfPath+'.txt', plainText)
	
	return plainText;
}


function CompareWithRTF(/**string*/rtfPath, /**string*/expectedText, /**string*/message)
{
	var rtfPlain = RTF2Plain(rtfPath);
	
	message = message || expectedText;
	
	Tester.AssertEqual(message, rtfPlain, expectedText);
	return rtfPlain;
}