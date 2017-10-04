/* 20171004 DM - LHL w1d3 count indexes

Returns an object that can represent the index(es)
of each letter.

*/

function countIndexes(strInput){
  var objOutput = {};

  //Remove all spaces and lower case the input.
  strInput = strInput.replace(/ /g,'').toLowerCase();

  //Loop through each letter in the input.
  for (var i = 0; i < strInput.length; i++){
    //Increment key for a given letter unless it's 0.
    if (strInput[i] in objOutput){
      //objOutput[strInput[i]] += 1;
      objOutput[strInput[i]] += " " + i;
    }
    else{
      //objOutput[strInput[i]] = 1;
      objOutput[strInput[i]] = i;
    }
  }

  //return objOutput;
  console.log(objOutput);
}

countIndexes("lighthouse in the House");
