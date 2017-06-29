// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  var people = ["Alice", "Bob", "Waldo", "Winston"];
  console.log("Found Waldo at index " + people.indexOf("Waldo") + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);