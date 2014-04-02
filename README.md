# rave-load-text

Adds text file loading to rave.js based on file extensions.

By default, rave-load-text loads text when it detects the following file
extensions:

`text` `html` `txt` `htm`

You can change this list by adding a `loadText` property to the context.
In HTML, this can be done by placing a `data-load-text` attribute on the
`<html>` element.  The value of this element should be a comma-separated
list of extensions.

```html
<html data-load-text="html,css">
```

When running `rave()` as a module, the `loadText` property may also be
an array of extensions or an object whose keys are file extensions.

```js
context.loadText = ['less', 'template'];
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
