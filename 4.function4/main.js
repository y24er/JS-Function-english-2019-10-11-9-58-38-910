function countWords(message) {
	// wirte your code here
	var pattern = /\b\w+\b/g;
	var result = message.match(pattern);
	return result.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5
