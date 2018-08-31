
//########## Script Steps ##############

function Test()
{
	// Comment two following lines to run JavaScript version of the test
	RVL.DoPlayScript("EncryptDecryptPassword.rvl.xlsx", "RVL");
	return;

	//Click on Username:
	SeS('Username_').DoClick();
	//Set Text librarian in Username:
	SeS('Username_').DoSetText("librarian");
	
	Tester.Message("Enter encrypted password");
	SeS('Password_')._DoSetText( Global.DoDecrypt('EAAAAJIzccGm9Eev7S1FvhAyv27sMOqziDF22CQRss80x6Jv') );
	
	
	//Click on ctl00$MainContent$LoginUser$LoginButton
	SeS('ctl00$MainContent$LoginUser$Logi').DoClick();
	//Click on Log Out
	SeS('Log_Out').DoClick();
}

g_load_libraries=["%g_browserLibrary:Firefox HTML%"];



