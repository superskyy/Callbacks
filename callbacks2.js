// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  	arr.forEach(function(find, i) {
  		if (find === "Waldo") {
  			found(i);
  		}  	
  	});
}
function actionWhenFound(ind) {
  console.log("Found Waldo at Index " + ind + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);