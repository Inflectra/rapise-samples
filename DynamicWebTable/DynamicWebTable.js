


function Test(params)
{
	RVL.DoPlayScript("DynamicWebTable.rvl.xlsx", "RVL");
	return;
	
	
	// Comment two lines above to run JavaScript implementation
	var tasks = SeS('Task_Manager');
	var rowCount = tasks.GetRowCount();
	for(var rowIndex = 0; rowIndex < rowCount; rowIndex++)
	{
		if (tasks.GetCell(rowIndex, "Name") == "Chrome")
		{
			var chromeCpuActual = "Chrome CPU: " + tasks.GetCell(rowIndex, "CPU");
			Tester.Message(chromeCpuActual);
			var chromeCpuExpected = SeS('Chrome_CPU').GetInnerText();
			Tester.AssertEqual("Chrome CPU value is correct", chromeCpuActual, chromeCpuExpected);
			break;
		}
	}
}

g_load_libraries=["%g_browserLibrary:Firefox HTML%", "MetaTable"];


