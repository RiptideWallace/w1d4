// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function findName(arr, foundPosition) {
    if (arr === "Waldo") {
      found(arr, foundPosition);   // execute callback
    }
  });
}

function actionWhenFound(arrItem, indexOf) {
  console.log("Found " + arrItem + " at index " + indexOf + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);