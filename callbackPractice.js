/*In this repo your job is to write functions to make each function call work properly.
//Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   

//and what you should write is the favNum function that makes the code above work, 
    
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
    
*/



  //Code Here for first
  
  var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
  var first = function(names, callback) {
    firstName = names[0];
    return callback(firstName);
}
  
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var last = function(names, callBack) {
  lastName = names[names.length - 1]
  return callBack(lastName);
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



var multiply = function(num1, num2, callBack) {
    answer = num1 * num2;
    return callBack(answer);

}


  //Code Here for multiply

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



var contains = function(arr, person, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === person) {
      return callback(true); // a return statement ends the loop the second the condition is satisfied
    } 
  }
  callback(false);
}

  //Code Here for contains
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result) {
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */
if (arr.indexOf(arr[i]) < 0) {
      newNames.push(arr[i]);
     }  
  }
  if (newNames.indexOf(newNames[i]) === arr.indexOf(arr[i])) {
    newNames.splice(i,1);
    }



    //Code Here for uniq

  var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

  var uniq = function(arr, callback) {
   var newArr = [];
   for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) { // if the new array doesnt have the value at index i in arr push it to newArr -1 represent it not being there since 'Cahlan' is in two places it will push only one of them to the newArr
          newArr.push(arr[i]) 
       }
      } callback(newArr);
     }
  
  

  uniq(names, function(uniqArr){
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
  });





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




 var each = function (arr, callback) {
for (var i = 0; i < arr.length; i++) {
  callback(arr[i], i)// if you return something right here it will stop the loop after it returns the first item. returns kill loops after the condition is met.
}

 }

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
 var getUserById = function(theUser, person, callback) {
   for (var i = 0; i < theUser.length; i++) {
     if (theUser[i].id === person) { // basically saying if the user at index i searching by id (.id) matches the string id of '16t' then execute the call back
      callback(theUser[i]);
     }
   }
 }


getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});












