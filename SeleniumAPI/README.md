# SeleniumAPI

This sample demonstrates 

- usage of Selenium API in Rapise tests (see TestRawAPI, TestRawActions)
- and that Rapise tests can be executed via WebDriver without modification (TestObjectAPI).

Example of Selenium API usage:
```javascript
WebDriver.CreateDriver();

WebDriver.SetUrl("http://libraryinformationsystem.org/HtmlTest.htm");

var el1 = WebDriver.FindElementByXPath("//select[@id='ctrl07']/option[1]");
var el2 = WebDriver.FindElementByXPath("//select[@id='ctrl07']/option[2]");
var el3 = WebDriver.FindElementByXPath("//select[@id='ctrl07']/option[3]");

WebDriver.Actions().KeyDown("Shift").Click(el1).Click(el2).Click(el3).KeyUp("Shift").Perform();

WebDriver.Quit();
```

