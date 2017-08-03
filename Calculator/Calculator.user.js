//Put your custom functions and variables in this file

function forEach(self, f)
{
	for(var i = 0; i < self.length; i++)
	{
		f(self[i], i);
	}
}

function getDesktopWindow(obj)
{
	var hwnd = SeSGetUIAutomationHWND(obj.instance);
	while(hwnd.Parent)
	{
		hwnd = hwnd.Parent;
		if (hwnd.IsDesktopTaskbarWindow(true))
		{
			break;
		}
	}
	return hwnd;
}

function shuffle(array) 
{
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) 
	{
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function SummonCalc(x, y)
{
	var calc = { x: x, y: y };
	calc.pid = Global.DoLaunch("calc.exe");
	var title = SeS('Title', { pid: calc.pid });
	title.DoMouseMove();
	title.DoLButtonDown();
	Global.DoMouseMove(x, y);
	title.DoLButtonUp();
	calc.hwnd = getDesktopWindow(SeS('_0'));
	return calc;
}

function MoveCalc(from, to)
{
	var title = SeS('Title', { pid: from.pid });
	title.DoMouseMove();
	title.DoLButtonDown();
	Global.DoMouseMove(to.x, to.y);
	title.DoLButtonUp();
}
