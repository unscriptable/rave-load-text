# rave-load-text

Adds text file loading to rave.js based on file extensions.

By default, rave-load-text loads text when it detects the following file
extensions:

`text` `html` `txt` `htm`

You can change this list by adding a `loadText` rave env property.
For example, to detect ".html" and ".template"
extensions, add the following to your app's bower.json or package.json:

```js
{
	"rave": {
		"env": {
			"loadText": {
				"extensions": [ "html", "template" ]
			}
		}
	}
}
```

## Usage

Importing a text file is easy.  Just import it as if it were a module.

For CommonJS/node-formatted modules (or AMD-wrapped CommonJS):

```js
var template = require('./template.html');
// ...
template.replace(tokensRx, findValueForToken);
```

For classic AMD modules:

```js
define(['./template.html'], function (template) {
	// ...
	template.replace(tokensRx, findValueForToken);
});
```


For ES6-formatted modules:

```js
import template from './template.html';
// ...
template.replace(tokensRx, findValueForToken);
```
