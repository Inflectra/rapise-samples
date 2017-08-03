


function Test()
{
	var calcs = [];

	for(var i = 0; i < 5; i++)
	{
		calcs.push(SummonCalc(600 + 500 * i, 350));
	}
	

	for(var i = 0; i < 5; i++)
	{
		calcs.push(SummonCalc(600 + 500 * i, 1050));
	}
	
	
	forEach(calcs, function(calc, index) 
	{ 
		var button = SeS('_' + index, { pid: calc.pid });
		button.DoClick();
	});


	forEach(calcs, function(calc)
	{
		calc.hwnd.Iconic = true;
		Global.DoSleep(200);
	});

	forEach(calcs, function(calc)
	{
		calc.hwnd.Iconic = false;
		Global.DoSleep(200);
	});
	
	forEach(calcs, function(calc, index)
	{
		if (index % 2 == 0)
		{
			calc.hwnd.Iconic = true;
			Global.DoSleep(200);
		}
	});

	forEach(calcs, function(calc, index)
	{
		if (index % 2 == 0)
		{
			calc.hwnd.Iconic = false;
			Global.DoSleep(200);
		}
	});	
	
	forEach(calcs, function(calc)
	{
		calc.hwnd.Highlight();
		Global.DoSleep(200);
	});

	var sCalcs = shuffle(calcs.slice());
	forEach(sCalcs, function(calc, index) 
	{ 
		MoveCalc(calc, calcs[index]);
		Global.DoSleep(200);
	});
	
	Global.DoSleep(1000);
	
	forEach(calcs, function(calc) 
	{ 
		Global.DoKillByPid(calc.pid);
		Global.DoSleep(200);
	});
}

g_load_libraries=["UIAutomation"];


