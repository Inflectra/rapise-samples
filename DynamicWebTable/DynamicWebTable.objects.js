var saved_script_objects={
	"Task_Manager": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_class": "param:object_class",
		"object_text": "param:object_name",
		"object_role": "ROLE_SYSTEM_WINDOW",
		"object_class": "MozillaWindowClass",
		"version": 0,
		"object_type": "HTMLMetaTable",
		"object_flavor": "Grid",
		"object_name": "Task Manager",
		"object_library": "MetaTable",
		"window_name": "Dynamic Table",
		"xpath": "//div[@aria-label='Tasks']",
		"title": "Dynamic Table",
		"url": "http://uitestingplayground.com/dynamictable",
		"xpath_rowcount": "count(.//div[@role='row' and span[@role='cell']])",
		"xpath_colcount": "count(.//span[@role='columnheader'])",
		"xpath_cell": ".//div[@role='row' and span[@role='cell']][{row}]/span[@role='cell'][{col}]",
		"xpath_column": ".//span[@role='columnheader'][{col}]"
	},
	"Chrome_CPU": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_class": "param:object_class",
		"object_text": "param:object_name",
		"object_role": "ROLE_SYSTEM_WINDOW",
		"object_class": "MozillaWindowClass",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Generic",
		"object_name": "",
		"object_library": "Firefox HTML",
		"window_name": "Dynamic Table",
		"xpath": "//p[@class='bg-warning']",
		"title": "Dynamic Table",
		"url": "http://uitestingplayground.com/dynamictable"
	}
};