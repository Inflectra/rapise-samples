

/**
 * RvlInfo
 * Dump all parameters passed into this function from RVL as ParamName: ParamValue pairs.
 */
function RvlInfo(/**string*/message)
{
	var msg = message;

    for (var lp in RVL.LastParams) {
        if (RVL.LastParams.hasOwnProperty(lp) && lp != "message") {
            msg+="<br/><b>"+lp+"</b>: "+RVL.LastParams[lp];
        }
    }
    
    Tester.Message(msg);
}


/**
 * RvlVars
 * Dump all local variables as VarName: Value and plus any additional parameters passed into this function.
 */
function RvlVars(/**string*/message)
{
	var stack = RVL._current_rvl_execution_stack;
	var contextVars = stack.LocalContext.ContextVars;
	var msg = message;
    for (var lp in contextVars) {
        msg+="<br/><b>"+lp+"</b>: "+contextVars[lp];
    }
    
    RvlInfo(msg);
}