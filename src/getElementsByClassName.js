// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function gEBCN (className, elementNode) {
  // your code here
  //create return array of elements
  var returnArr = [];
  //check if elementNode exists if not start at body
  //, if body doesnt exist just return a blank array.
  if (elementNode === undefined) {
    if(document.body!==null) {
      elementNode = document.body;
    } else {
      return returnArr;
    }
  }
  //get list of classes on the current node.
  var classListings = elementNode.classList;
  //check if className exists in the class list
  // and add the element to the return array if it does
  if (classListings !== undefined) {
    for (var i =0; i<classListings.length; i++) {
      if (classListings.item(i) === className) {
        returnArr.push(elementNode);
      }
    }
  }
  
//check if it has child nodes and recursively call the function
// on each child node to build out the array to return. 
  if (elementNode.hasChildNodes()) {
    var children = elementNode.childNodes;
  
    for (var i = 0; i < children.length; i++) {
      //
      returnArr = returnArr.concat(gEBCN(className, children[i]));
    }
  }

  return returnArr;
};
