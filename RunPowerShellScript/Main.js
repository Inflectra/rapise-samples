//Use 'Record/Learn' button to begin test recording

function Test()
{
/*
File C:\Users\squirrel\Documents\My Rapise Tests\PowerShell\hello.ps1 cannot
be loaded because running scripts is disabled on this system. For more
information, see about_Execution_Policies at
http://go.microsoft.com/fwlink/?LinkID=135170.
    + CategoryInfo          : SecurityError: (:) [], ParentContainsErrorRecord
   Exception
    + FullyQualifiedErrorId : UnauthorizedAccess

*/

// Set-ExecutionPolicy Bypass -Scope CurrentUser
// Set-ExecutionPolicy Bypass -Scope LocalMachine

	Global.DoLaunch('cmd.exe /c "powershell.exe -File hello.ps1 *>output.txt"');
	Global.DoSleep(3000);
}
