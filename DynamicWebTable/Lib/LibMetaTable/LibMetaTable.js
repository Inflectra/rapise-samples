// Put library code here

/** @behavior */
var HTMLMetaTableBehavior = {
	actions: [	
		{
			actionName: "ClickCell",
			/** @action */
			DoAction: HTMLMetaTableBehavior_DoClickCell
		}	
	],
	properties:
	{
		/** @property */
		ColumnCount:
		{
			Get: HTMLMetaTableBehavior_GetColumnCount
		},
		/** @property */
		ColumnName:
		{
			Get: HTMLMetaTableBehavior_GetColumnName
		},
		/** @property */
		ColumnIndex: 
		{
			Get: function (/**string*/ columnName)
			{
				if (typeof(columnName) == "undefined") return -1;
				return HTMLMetaTableBehavior_GetColumnIndex.apply(this, [columnName]);
			}
		},			
		/** @property */
		RowCount:
		{
			Get: HTMLMetaTableBehavior_GetRowCount
		},
		/** @property */
		Cell:
		{
			Get: HTMLMetaTableBehavior_GetCell
		}
	}
}

function HTMLMetaTableBehavior_DoClickCell(/**number*/ row, /**string|number*/ col, /**string*/ clickType, /**number*/ xOffset, /**number*/ yOffset)
{
	var cell = HTMLMetaTableBehavior_FindCell.apply(this, [row, col]);
	if (cell)
	{
		cell._DoEnsureVisible();
		var rect = cell._DoGetRect();
		
		var cx = rect.x;
		var cy = rect.y;
		
		if(typeof(xOffset)=="number")
		{
			cx = cx+xOffset;
			if (xOffset < 0)
			{
				cx = cx + rect.w;
			}
		} else {
			cx = cx+(rect.w>>1);
		}

		if(typeof(yOffset)=="number")
		{
			cy = cy+yOffset;
			if (yOffset < 0)
			{
				cy = cy + rect.h;
			}
		} else {
			cy = cy+(rect.h>>1);
		}
		g_util.MouseMove(cx,cy);
		Global.DoClick(clickType);
		return true;
	}
	return false;
}

function HTMLMetaTableBehavior_GetColumnName(/**number*/ columnIndex)  /**string*/ 
{
	columnIndex = columnIndex || 0;
		
	var _xpath =  _SeSGetObjectInfo(this.object_id).xpath_column;
	var column = this._DoDOMQueryXPath(_xpath.replace("{col}", columnIndex + 1));
	
	if (column && column.length > 0)
	{
		return column[0].GetInnerText();
	}
	
	return null;
}

function HTMLMetaTableBehavior_GetColumnIndex(columnName)
{
	var colCount = HTMLMetaTableBehavior_GetColumnCount.apply(this);
	for(var i = 0; i < colCount; i++)
	{
		var name = HTMLMetaTableBehavior_GetColumnName.apply(this, [i]);
		if (name == columnName)
		{
			return i;
		}
	}

	return -1;	
}

function HTMLMetaTableBehavior_GetColumnCount()  /**number*/ 
{
	var _xpath =  _SeSGetObjectInfo(this.object_id).xpath_colcount;
	var res = this.doQuery(_xpath, 0, true);
	
	if (res && res.length)
	{
		return res[0];
	}
	
	return -1;
}

function HTMLMetaTableBehavior_GetRowCount()  /**number*/ 
{
	var _xpath =  _SeSGetObjectInfo(this.object_id).xpath_rowcount;
	var res = this.doQuery(_xpath, 0, true);
	
	if (res && res.length > 0)
	{
		return res[0];
	}
	
	return -1;
}

function HTMLMetaTableBehavior_GetCell(/**number*/row, /**string|number*/col)  /**string*/
{
	var cell = HTMLMetaTableBehavior_FindCell.apply(this, [row, col]);
	if (cell)
	{
		return cell.GetInnerText();
	}
	return null;
}

function HTMLMetaTableBehavior_FindCell(row, col)
{
	if (typeof(col) == "string")
	{
		col = HTMLMetaTableBehavior_GetColumnIndex.apply(this, [col]);
		if (col == -1)
		{
			return null;
		}
	}

	var _xpath =  _SeSGetObjectInfo(this.object_id).xpath_cell;
	var cell = this._DoDOMQueryXPath(_xpath.replace("{row}", row + 1).replace("{col}", col + 1));
	if (cell && cell.length > 0)
	{
		return cell[0];
	}
}

/** @rule */
var SeSHTMLMetaTableRule = new SeSMatcherRule(
	{
		object_type: "HTMLMetaTable",
		extend_rule: "HTMLObject",
		object_flavor: "Grid",
		
		extended_properties: {
			xpath_rowcount: "count(.//div[@role='row' and span[@role='cell']])",
			xpath_colcount: "count(.//span[@role='columnheader'])",
			xpath_cell: ".//div[@role='row' and span[@role='cell']][{row}]/span[@role='cell'][{col}]",
			xpath_column: ".//span[@role='columnheader'][{col}]"
		},
		dont_hash: true,
		
		behavior: [HTMLMetaTableBehavior]
	}
);

function HTMLMetaTable_SeSOnActionRecording(/**SeSObject*/ obj, /**string*/ item, /**string*/ action, /**object*/ param, /**string*/ descr, /**boolean*/override, /**boolean*/show)
{
	if (obj && obj.object_info )
	{
		if(obj.rule && obj.rule.extended_properties)
		{
			for(var ii in obj.rule.extended_properties)
			{
				obj.object_info[ii] = obj.rule.extended_properties[ii];
			}
		}
	}
	return false;
}

g_sesOnActionRecordedImpl.push(HTMLMetaTable_SeSOnActionRecording);
