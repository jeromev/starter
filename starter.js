document.write('<script src="http://code.jquery.com/jquery-1.11.0.min.js"><\/script>');

// ---> BEGIN add useragent attr (src: http://css-tricks.com/ie-10-specific-styles)
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);
// <--- END add useragent attr
