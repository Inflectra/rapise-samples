


function Test()
{
	/** target */
	var target = SeS('UploadArea');
	var dropX = target.GetX() + (target.GetWidth() >> 1);
	var dropY = target.GetY() + (target.GetHeight() >> 1);
	
	Tester.Message("dropX: " + dropX + ", dropY: " + dropY);
	
	/** source */
	var fileList = SeS('Items_View');
	var itemCount = fileList.GetItemCount();
	for(var i = 0; i < itemCount; i++)
	{
		var itemName = fileList.GetItemNameByIndex(i);
		var source = fileList.DoFindByText(itemName);
	
		/** drag & drop */
		// move mouse to the center of the source object
		source.DoMouseMove();
		// press left mouse button
		source.DoLButtonDown();
		// drag the object over the drop area,
		// give Chrome a chance to understand it is a dragover event
		Global.DoMouseMove(dropX - 200, dropY - 50);
		Global.DoSleep(300);
		Global.DoMouseMove(dropX - 100, dropY);
		Global.DoSleep(300);
		// release mouse button
		source.DoLButtonUp();
		// pause before next drag&drop
		Global.DoSleep(200);
	}
	
	// Let video capture to do the job
	Global.DoSleep(5000);
}

g_load_libraries=["%g_browserLibrary:Chrome HTML%", "UIAutomation"];


