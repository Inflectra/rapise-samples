


function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", "RVL");
	return;
	
	// Comment two lines above to run JavaScript version
	
	SeS('Username').DoClick();
	SeS('Username').DoSetText("librarian");
	SeS('Password').DoSetText("librarian");
	SeS('Login').DoClick();
	SeS('Books').DoClick();
	// Edit default book
	SeS('Edit').DoClick();
	SeS('Cancel').DoClick();
	// Set book name to Saturday
	SeS('Edit', {BookName: "Saturday"}).DoClick();
	SeS('Cancel').DoClick();
	SeS('Logout').DoClick();
}

g_load_libraries=["%g_browserLibrary%"];


