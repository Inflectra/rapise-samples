If /I "%Processor_Architecture%" NEQ "x86" (
%SystemRoot%\SysWoW64\cmd.exe /C %0
goto :eof
)
pushd %~dp0
cscript "c:\Program Files (x86)\Inflectra\Rapise\Engine\SeSExecutor.js" "CommandLineParameters.sstest" "-eval:g_testSetParams={userName:'librarian', password:'librarian'};"
popd