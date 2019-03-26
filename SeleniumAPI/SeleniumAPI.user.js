//Put your custom functions and variables in this file

/** @scenario*/
function TestRawAPI()
{
	Tester.BeginTest('Raw API');
 	WebDriver.CreateDriver();
	WebDriver.SetUrl("http://www.libraryinformationsystem.org");
	var el = WebDriver.FindElementByXPath("//body");
	Tester.Assert("Text found in BODY", el.GetText().indexOf("Library Information System") != -1);
	var logInLink = el.FindElementByXPath("id('HeadLoginView_HeadLoginStatus')");
	logInLink.Click();
	Global.DoSleep(3000);
	var userName = WebDriver.FindElementByCssSelector("html > body > form > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(2) > fieldset > p:first-of-type > input");
	Tester.AssertEqual("class is 'textbox'", "textbox", userName.GetAttribute("class"));
	WebDriver.Quit();
	Tester.EndTest();
}

/** @scenario*/
function TestRawActions()
{
	Tester.BeginTest('Raw Actions');
	WebDriver.CreateDriver();
	
	WebDriver.SetUrl("http://libraryinformationsystem.org/HtmlTest.htm");

	var el1 = WebDriver.FindElementByXPath("//select[@id='ctrl07']/option[1]");
	var el2 = WebDriver.FindElementByXPath("//select[@id='ctrl07']/option[2]");
	var el3 = WebDriver.FindElementByXPath("//select[@id='ctrl07']/option[3]");
	
	WebDriver.Actions().KeyDown("Shift").Click(el1).Click(el2).Click(el3).KeyUp("Shift").Perform();
	
	
	Global.DoSleep(1000);
	WebDriver.Quit();
	Tester.EndTest();
}

/** @scenario */
function TestWindow()
{
	if (typeof(WebDriver.Window) == "undefined")
	{
		return;
	}

	Tester.BeginTest("Window");
	WebDriver.CreateDriver();
	WebDriver.SetUrl("http://libraryinformationsystem.org");
	WebDriver.Window().SetSize(300, 800);
	WebDriver.Window().SetPosition(200, 50);
	Global.DoSleep(3000);
	var position = WebDriver.Window().GetPosition();
	var size = WebDriver.Window().GetSize();
	Tester.Message("x = " + position.X + ", y = " + position.Y);
	Tester.Message("width = " + size.Width + ", height = " + size.height);
	WebDriver.Window().Maximize();
	Global.DoSleep(1000);
	WebDriver.Window().Minimize();
	Global.DoSleep(1000);
	WebDriver.Window().FullScreen();
	Global.DoSleep(3000);	
	WebDriver.Quit();
	Tester.EndTest();
}

/** @scenario */
function TestCookies()
{
	if (typeof(WebDriver.Cookies) == "undefined")
	{
		return;
	}
	
	function PrintAllCookies()
	{
		var cs = cookies.AllCookies();
		Tester.Message(JSON.stringify(cs));
		
		for(var i = 0; i < cs.length; i++)
		{
			var c = cookies.GetCookieNamed(cs[i].Name);
			Tester.Message(JSON.stringify(c));
		}
	}

	Tester.BeginTest('Cookies');
	WebDriver.CreateDriver();
	WebDriver.SetUrl("https://google.com");
	Global.DoSleep(2000);
	
	var cookies = WebDriver.Cookies();
	
	var startCookieCount = cookies.AllCookies().length;

	var mySimpleCookie = {Name: "MySimpleCookie", Value: "MyValue"};
	cookies.AddCookie(mySimpleCookie);
	cookies.AddCookie({Name: "MyComplexCookie", Value: "MyValue", Domain: ".google.com", Path: "/"});

	// Construct date-time string in the format "2018-12-30T13:15:00-05:00"	
	var dt = new Date();
	var expDate = UtilGetPaddedZeroesDate(dt) + "T" + UtilGetPaddedZeroesTime(dt) + "-05:00";
	
	cookies.AddCookie({Name: "MyExpiringCookie", Value: "MyValue", Domain: ".google.com", Path: "/", Expiry: expDate});

	var afterAddCookieCount = cookies.AllCookies().length;
	
	Tester.AssertEqual("Cookies added", (startCookieCount + 3), afterAddCookieCount)

	PrintAllCookies();
	
	
	var foundCookie = cookies.GetCookieNamed("MySimpleCookie");
	Tester.Assert("Cookie found", foundCookie != null);

	var notFoundCookie = cookies.GetCookieNamed("MyNotFoundCookie");
	Tester.Assert("Cookie not found", notFoundCookie == null);
	
	Tester.Message("Then we delete cookies:");
	
	cookies.DeleteCookie(mySimpleCookie);
	cookies.DeleteCookieNamed("MyComplexCookie");
	
	var afterDeleteCookieCount = cookies.AllCookies().length;
	Tester.AssertEqual("Cookies deleted", (afterAddCookieCount - 2), afterDeleteCookieCount)
	
	PrintAllCookies();	
	
	Tester.Message("Deleting all cookies");
	
	cookies.DeleteAllCookies();
	
	var afterDeleteAllCookieCount = cookies.AllCookies().length;
	Tester.AssertEqual("All cookies deleted", 0, afterDeleteAllCookieCount);
	
	PrintAllCookies();	
	
	Global.DoSleep(1000);
	WebDriver.Quit();
	Tester.EndTest();
}

/** @scenario*/
function TestObjectAPI()
{	
	Tester.BeginTest('Object API');
	Navigator.Open("http://www.libraryinformationsystem.org");
	SeS('Book_Management').DoClick();
	Global.DoSleep(3000);
	SeS('Username_').DoSetText('librarian');
	SeS('Password_').DoSetText('librarian');
	SeS('Submit').DoClick();
	Navigator.Close();
	Tester.EndTest();
}

/** @scenario*/
function TestAlert()
{
	Tester.BeginTest('Alert');
	Navigator.Open("http://libraryinformationsystem.org/HtmlTest.htm");
	var alertBtn = WebDriver.FindElementByXPath("id('btnAlert')");
	var confiBtn = WebDriver.FindElementByXPath("id('btnConfirm')");
	
	alertBtn.Click();
	Navigator.DoCheckAlert("Click OK to Close");
	
	Global.DoSleep(3000);
	
	confiBtn.Click();
	Navigator.DoSetExpectedConfirmResult(false);
	Navigator.DoCheckConfirmation("Do you want tuna for dinner?");
	Navigator.Close();
	Tester.EndTest();
}

/** @scenario*/
function TestObjectActions()
{
	Tester.BeginTest('Object Actions');
	Navigator.Open("http://libraryinformationsystem.org/HtmlTest.htm");	
	
	var select = SeS('inputSelectMultiple');
	select.DoSelect("Option2");
	select.DoAddSelection("Option1");
	select.DoRemoveSelection("Option2");
	
	var rect = select.DoGetRect();
	Tester.Message(rect.x + "/" + rect.y + "/" + rect.w + "/" + rect.h);
	select.DoEnsureVisible();
	
	var checkbox = Navigator.DOMFindByXPath("id('ctrl10')");
	checkbox.DoSetCheck(true);
	checkbox.DoDOMRoot();
	checkbox.DoDOMParent();
	var next = checkbox.DoDOMNextSibling();
	next.DoDOMPrevSibling();
	
	var body = Navigator.DOMFindByXPath("//body");
	var count = body.DoDOMChildrenCount();
	Tester.Message("BODY children count: " + count);
	var child = body.DoDOMChildAt(1);
	
	var html = Navigator.DOMFindByXPath("//form");
	var attr = html.DoDOMGetAttribute("name");
	Tester.Message("FORM name attribute: " + attr);
	var attrs = html.DoDOMGetAttributes();
	
	var parent = checkbox.DoDOMFindParentWithAttribute("name", "AUT");
	
	var children = html.DoDOMQueryXPath(".//input");
	children = html.DoDOMQueryCss("input");
	var conv = html.DoDOMConvert("HTMLObject");
	
	Navigator.Close();
	Tester.EndTest();
}

/** @scenario*/
function TestObjectProperties()
{
	Tester.BeginTest('Object Properties');
	Navigator.Open("http://libraryinformationsystem.org/HtmlTest.htm");
	var checkbox = Navigator.DOMFindByXPath("id('ctrl10')");
	var editbox = Navigator.DOMFindByXPath("id('ctrl01')");
	var link = Navigator.DOMFindByXPath("id('ctrl21')");
	var logArea = Navigator.DOMFindByXPath("id('logArea')");
	var body = Navigator.DOMFindByXPath("//body");
	var textarea = Navigator.DOMFindByXPath("id('ctrl05')");
	
	Tester.AssertEqual("X = 81", 81, checkbox.GetX());
	Tester.AssertEqual("Y = 380", 380, checkbox.GetY());
	Tester.AssertEqual("Width = 13", 13, checkbox.GetWidth())
	Tester.AssertEqual("Height = 13 ", 13, checkbox.GetHeight());
	
	Tester.AssertEqual("Label is null", null, logArea.GetLabel());
	Tester.AssertEqual("Name is 'inputCheckBox'", "inputCheckbox", checkbox.GetName());
	Tester.AssertEqual("Alt is empty ", "", checkbox.GetAlt());
	Tester.AssertEqual("Title is empty ", "", checkbox.GetTitle());
	
	Tester.Message("InnerText: " + body.GetInnerText());
	Tester.Message("NodeText: " + textarea.GetNodeText());
	
	Tester.AssertEqual("Value1 is 'inputCheckboxValue'", "inputCheckboxValue", checkbox.GetValue());
	checkbox.SetValue("some text");
	Tester.AssertEqual("Value2 is 'some text'", "some text", checkbox.GetValue());
	
	Tester.AssertEqual("Checked is false", false, checkbox.GetChecked());
	Tester.AssertEqual("Enabled1 is true", true, checkbox.GetEnabled());
	checkbox.SetEnabled(false);
	Tester.AssertEqual("Enabled2 is false", false, checkbox.GetEnabled());
	
	Tester.Message("Id: " + editbox.GetId());
	Tester.Message("Style: " + checkbox.GetStyle());
	Tester.Message("Tag: " + checkbox.GetTag());
	Tester.Message("Class: " + checkbox.GetClass());
	Tester.Message("Href: " + link.GetHref());
	
	Tester.Message("XPath: " + checkbox.GetXPath());
	Tester.Message("PageURL: " + checkbox.GetPageURL());
	Tester.Message("PageTitle: " + checkbox.GetPageTitle());
	
	Navigator.Close();
	Tester.EndTest();
}