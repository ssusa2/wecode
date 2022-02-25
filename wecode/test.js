/** @format */

function findEven() {
	let result = [];

	for (let i = 1; i <= 50; i++) {
		let even = i % 2;
		if (even == 0) {
			result.push(i);
		}
	}
	return result;
}

console.log(findEven());
