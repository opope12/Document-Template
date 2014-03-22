# Document Template
The HTML5 and SASS Template for your documents!

## Features
- Easily change colors through SASS variables
- Completely Responsive
- Organized SASS
- Starter document all ready for you! Found at `starter/starter.html`
- Markdown to HTML using [showdown.js](https://github.com/coreyti/showdown)
- Perfect for any document!
- Using [skeleton.css](http://getskeleton.com) for the grid

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

## Share
Using Async, we can add share functionality to any page with just some teeny bitz of code

```
<div class="share">

	<div class="wrapper">

		<div id="button"><div class="g-plusone" data-size="tall" data-annotation="bubble" data-count="true"></div></div>
		<div id="button"><a href="https://twitter.com/share" class="twitter-share-button" data-count="vertical">Tweet</a></div>
		<div id="button"><div id="fb-root"></div><div class="fb-like" data-send="false" data-layout="box_count" data-width="1" data-show-faces="false" data-action="like"></div></div>

	</div>

</div>
```

## Contact
[Developer's Website](https://owebboy.com)<br />
[Contact on Twitter](https://twitter.com/owebboy)