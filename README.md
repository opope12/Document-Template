# Document Template
The HTML5 and SASS Template for your documents!

## Features
- Easily change colors through SASS variables
- Completely Responsive
- Organized SASS
- Starter document all ready for you! Found at `starter/starter.html`
- Markdown to HTML using [showdown.js](https://github.com/coreyti/showdown)
- Perfect for any document!

## CDN for CSS and HTML

```
<!-- Document Template CSS -->
<link href="http://owebs.pw/doctemp/stylesheets/css/dt.css" rel="stylesheet" type="text/css">

<!-- Showdown.js -->
<script src="http://owebs.pw/doctemp/scripts/libs/showdown.js"></script>

<!-- Document Template JavaScript -->
<script src="http://owebs.pw/doctemp/scripts/global.js"></script>
```

## How to use Markdown to HTML feature
Using [showdown.js](https://github.com/coreyti/showdown), you can easily set it up where it grabs your markdown from `<div id="md"></div>` and convert it into valid HTML. Then you put it in `<div id="content"></div>`

```
var text= document.getElementById("md").innerHTML; // Grabbing the id of #md

var converter = new Showdown.converter(); // Calling the converter
var html = converter.makeHtml(text); // Converting to HTML

var get = document.getElementById("content"); // Getting the #content div
get.innerHTML = (html); // Putting valid HTML in #content
```

## Contact
[Developer's Website](https://owebboy.com)<br />
[Contact on Twitter](https://twitter.com/owebboy)