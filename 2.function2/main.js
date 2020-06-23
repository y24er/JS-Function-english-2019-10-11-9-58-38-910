function palindrome(message) {
	// wirte your code here

	let resultStr = "";
	for (let i = message.length - 1; i >= 0; i--) {
		resultStr += message.charAt(i);
	}
	if (resultStr === message) {
		return true;
	} else {
		return false;
	}
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
