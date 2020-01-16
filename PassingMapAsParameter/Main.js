
//########## Script Steps ##############

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", "RVL");
  Tester.Assert("Done", true);
}

