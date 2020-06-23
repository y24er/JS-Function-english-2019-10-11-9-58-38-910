function alphabetSort(message) {
	// wirte your code here
	let messageArr = message.split("");
	for (let i = 0; i < messageArr.length - 1; i++) {
		for (let j = i + 1; j < messageArr.length; j++) {
			if (messageArr[i] > messageArr[j]) {
				let temp = messageArr[i];
				messageArr[i] = messageArr[j];
				messageArr[j] = temp;
			}
		}
	}
	return messageArr.join('');
}
