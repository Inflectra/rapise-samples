//Put your custom functions and variables in this file

var g_controlColumnForScreenshots = "H";


OnRVLScriptStep=function(item, place, status, ctx, stackItem)
{
	var row = item.Startrow;
	if(row.Ext&&row.Ext[g_controlColumnForScreenshots])
	{
		var h = row.Ext[g_controlColumnForScreenshots].toLowerCase();
		if( 
			( place == "before" && h.indexOf('b') >=0 )
			||
			( place == "after"  && h.indexOf('a') >=0 )
		)
		{
			if( h.indexOf('o')>=0 )
			{
				var objId = row.Object;
				Tester.CaptureObjectImage(place + " "+row.GetAllText(), objId)
			} else if( h.indexOf('w')>=0 ) {
				var objId = row.Object;
				var lastObj = SeSFindObj(objId);
				if(lastObj)
				{
					var topWnd = lastObj.getDesktopWindow();
					var obj = SeSTryMatch(topWnd.AccessibleObject(), SeSSimulatedObjectRule);
					if (obj)
					{
						Tester.CaptureObjectImage(place + " "+row.GetAllText(), obj)
					} else {
						Tester.CaptureDesktopImage(place + " "+row.GetAllText());
					}
				} else {
					Tester.CaptureDesktopImage(place + " "+row.GetAllText());
				}
			} else {
				Tester.CaptureDesktopImage(place + " "+row.GetAllText());
			}
		} 
	}
	
}