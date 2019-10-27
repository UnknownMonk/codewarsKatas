function redacted(doc1, doc2) {
  if (doc1.length !== doc2.length) {
    return false;
  }
  for (i = 0; i < doc1.length; i++) {
    if (doc1[i] === "X") {
      if (doc2[i] === "\n") {
        return false;
      } else {
        continue;
      }
    } else if (doc1[i] !== doc2[i]) {
      return false;
    }
  }
  return true;
}

var doc1 =
  "TOP SECRET:\nThe missile launch code for Sunday XXXXXXXXXX is:\nXXXXXXXXXXXXXXXXX";
var doc2 =
  "TOP SECRET:\nThe missile launch code for Sunday 5th August is:\n7-ZERO-8X-ALPHA-1";
console.log(redacted(doc1, doc2), true);

var doc1 = "The name of the mole is Professor XXXXX";
var doc2 = "The name of the mole is Professor Dinglemouse";
console.log(redacted(doc1, doc2), false);
