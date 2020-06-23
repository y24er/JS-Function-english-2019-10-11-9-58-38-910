function reverseString(message) {
	// wirte your code here
	let resultStr = "";
	for (let i = message.length - 1; i >= 0; i--) {
		resultStr += message.charAt(i);
	}
	console.log(resultStr);
}
reverseString('hello'); // should return 'olleh'
