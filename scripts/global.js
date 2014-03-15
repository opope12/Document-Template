// Global JS

	// Markdown Converter
	var text= document.getElementById("md").innerHTML;

	var converter = new Showdown.converter();
	var html = converter.makeHtml(text);

	var get = document.getElementById("content");
	get.innerHTML = (html);
