// Global JS

// Created By Oliver Pope

	// Markdown Converter
	var text= document.getElementById("md").innerHTML;

	var converter = new Showdown.converter();
	var html = converter.makeHtml(text);

	var get = document.getElementById("content");
	get.innerHTML = (html);

	// Async
	(function(doc, script) {
		var js,
				fjs = doc.getElementsByTagName(script)[0],
				frag = doc.createDocumentFragment(),
				add = function(url, id) {
						if (doc.getElementById(id)) {return;}
						js = doc.createElement(script);
						js.src = url;
						if(id) js.id = id;
						frag.appendChild( js );
				};

			// Google+ button
			add('http://apis.google.com/js/plusone.js');

			// Twitter SDK
			add('//platform.twitter.com/widgets.js');

			// Facebook SDK
			add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=460425380664872', 'facebook-jssdk');

			fjs.parentNode.insertBefore(frag, fjs);
	}(document, 'script'));