// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //check the type of passed in obj and handle it according to the rules of JSON.stringify
  if (typeof(obj) === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    //if is array create an array string 
    //and go through the indexes and build the string by recursively calling the function.
    var returnStr = "[";

    for (var i =0; i<obj.length; i++) {
        returnStr += stringifyJSON(obj[i]);
        if (i!==obj.length-1) {
          returnStr+=",";
        }
    }
    returnStr += "]";
    return returnStr;
  } else if (typeof(obj) === "boolean" || typeof(obj) === "number") {
    //if boolean or number use the .toString method
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (typeof(obj) === "function" || typeof(obj) === "symbol" || obj === undefined) {
    //if undefined a symbol or function return an empty string.
    return "";
  } else if (typeof(obj) === "object") {
    //create the return str with curly braces for an object.
    var returnStr = "{";
    for (var key in obj) {
      let stringifyValue = stringifyJSON(obj[key]);
      //if empty dont list that key
      if (stringifyValue!==null && stringifyValue!==undefined && stringifyValue!=="") {
        if (returnStr[returnStr.length-1]!== "{") {
          returnStr+=",";
        }
        returnStr += '"' + key + '":' + stringifyValue;
      }
    }
      returnStr += "}";    
    return returnStr;
  } else {
    //catch all return empty string should never reach but just in case
    return '';
  }
};
