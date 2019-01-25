//Put your custom functions and variables in this file

function SelectValue1(/**string*/ value)
{
	// update object properties to find it
	SeS('DropdownItem', { xpath: "//iframe@@@//div[text()='" + value + "']" }).DoClick();
}

function SelectValue2(/**string*/ value)
{
	// find object dynaically
	Navigator.DOMFindByXPath("//iframe@@@//div[text()='" + value + "']").DoClick();
}