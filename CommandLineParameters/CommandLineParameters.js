


function Test()
{
    Tester.Assert("User name set", typeof(userName) != "undefined");
    Tester.Assert("Password set", typeof(password) != "undefined");

    if (Tester.GetTestStatus() == Tester.Fail)
    {
        Tester.Message("This test must be executed from the command line using Execute.cmd located in the test folder.");	
        return;
    }

    SeS('Log_In').DoClick();
    SeS('Username_').DoSetText(userName);
    SeS('Password_').DoSetText(password);
    SeS('ctl00$MainContent$LoginUser$Logi').DoClick();
    SeS('Log_Out').DoClick();
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%"];


