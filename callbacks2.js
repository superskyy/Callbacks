// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  	arr.forEach(function(element)) {
  		if (arr[element] === "Waldo") {
  			console.log(element);
  			found(element);
  		}
  	}
}
function actionWhenFound(ind) {
  console.log("Found Waldo at Index " + ind + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);