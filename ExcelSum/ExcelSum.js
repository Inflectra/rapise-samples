//Use 'Record/Learn' button to begin test recording

function Test()
{
	/**
		Open Book1.xlsx from test folder
		Calculate SUM of column G
		Scroll to the SUM value
		Make a screenshot
	 */


/*#import:Excel.xml*/

	var excelFileName = Global.GetFullPath("Book1.xlsx");
	
	try
	{
		var excelApp = new ActiveXObject("Excel.Application");
	}
	catch(e)
	{
		Tester.Assert("MS Excel is not installed", true);
		return;
	}
	
	var excelBook = /**Excel.Workbook*/ excelApp.Workbooks.open(excelFileName);
	var excelSheet = excelBook.Worksheets("Sheet1");
	excelApp.Visible = true;
	
	// Start row
	var row = 1;
	// Column index
	var colInd = 7;
	
	// Find the first empty cell in the column
	for(;;row++)
	{
		var cell1 = excelSheet.Cells(row, colInd).Value;
		if(cell1 == null)
		{
			break;
		}
	}
	
	Tester.Message(row);
	
	// Assign formula
	excelSheet.Cells(row, colInd).Value = "=SUM(G1:G" + (row - 1) + ")";
	// Scroll to the cell with SUM
	excelSheet.Cells(row, colInd).Activate();

	// Make screenshot of Excel window
	Global.DoSleep(500);
	var hwnd = /**HWNDWrapper*/g_util.FindWindow("Book1 - Excel", "regex:.*");
	if (hwnd)
	{
		var iw = /**ImageWrapper*/new ActiveXObject("SeSWrappers.Utils.ImageWrapper");
		iw.Capture(hwnd.PosX, hwnd.PosY, hwnd.PosWidth, hwnd.PosHeight, false);
		Tester.Message('Excel Screenshot', new SeSReportImage(iw));
	}
	
	// Uncomment if you need to save the result
	//excelBook.Save();
	excelBook.Close(false);
	
	excelApp.Quit();
}

