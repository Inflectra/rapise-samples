![Download](https://github.githubassets.com/images/icons/emoji/unicode/23ec.png?v8) [Download Now](https://inflectra.github.io/DownGit/#/home?url=https://github.com/Inflectra/rapise-samples/tree/master/CallingNodeJs)


# Running NodeJS script in Rapise

This sample demonstrates calling script executed by NodeJS from Rapise. 

The whole call from Rapise JS looks like that:

```javascript
var res = SeSCallNodeJS('nodescript/index.js', {data:'ABC'});
Tester.Message('md5: '+res.data);
```

## Calling Function

Call is done in the function:
```javascript
function SeSCallNodeJS(/**string*/script_path, input_data)/**object*/
```

Where **script_path** is a path to nodejs script. In this example the script path is: 'nodescript/index.js'

**inputdata** is an object. In this example we have an object with just one field 

```javascript
{data:"some_string"}
```

The function returns another object produced by nodejs script. In this example it is also an object with just one fild: 

```javascript
{data:'md5_hashsum_of_input_string'}
```

This function is defined in `User.js`.

## nodescript

You may use this script, modify `nodescript/index.js` to fit your needs to utilize any features provided by NodeJS eco-system.

First part reads input data from `input.json`. Then some processing involving data from input file is done. We do **md5** hashsum calculation here, just to demonstrate you may use external modules (**md5** is installed using `npm`).

Finally we write result to `output.json`. So Rapise may read it.


