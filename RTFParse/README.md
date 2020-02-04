![Download](https://github.githubassets.com/images/icons/emoji/unicode/23ec.png?v8) [Download Now](https://inflectra.github.io/DownGit/#/home?url=https://github.com/Inflectra/rapise-samples/tree/master/RTFParse)

# Read .rtf file in Rapise

This sample has 2 functions:

```javascript
function RTF2Plain(/**string*/rtfPath)
```

Read RTF file and return it as a plain text.
This function works with simple RTFs only, i.e.:
1. Should be created using WordPad, not MSWord (any .rtf may be converted to simpler format by opening in WordPad and saving).
2. Should contain no pictures.


```javascript
function CompareWithRTF(/**string*/rtfPath, /**string*/expectedText, /**string*/message, /**boolean*/useWordpad)
```
Compare text in RTF file and add an assertion with specified message. If last parameter (useWordpad) is specified then conversion is performed using `RTF2PlainWordpad`.


```javascript
function RTF2PlainWordpad(/**string*/rtfPath)
```
Same as `RTF2Plain` but it is slower and can handle advanced and RTF files with pictures and heavy formatting.


## Usage

Copy contents of User.js into User.js of your test.
