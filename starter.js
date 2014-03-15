document.write('<script src="http://code.jquery.com/jquery-1.11.0.min.js"><\/script><!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"><\/script><![endif]-->');

// ---> BEGIN add useragent attr (src: http://css-tricks.com/ie-10-specific-styles)
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);
// <--- END add useragent attr
