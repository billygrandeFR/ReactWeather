//function getTempCallback (location, callback) {
  //callback(undefined, 78);
//  callback('City not found');
//}
//
//getTempCallback('London', function(err, temp){
//  if(err) {
  //  console.log('error', err);
//  } else {
  //  console.log('success', temp)
  //}
//
//});

/*function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('city not found');
    }, 1000);

  });
}

getTempPromise('London').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err)
})*/
/*
function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    promiseSum = (a+b);
    if(typeof promiseSum === 'number') {
      resolve(promiseSum);
    } else {
      reject('a & b are not both numbers');
    }
  });
}

addPromise(4,'jk').then(function (promiseSum) {
  console.log('promise success', promiseSum);
}, function (err) {
  console.log('promise error', err)
})*/

/*function isInteger (intIn) {
  if (typeof intIn === 'number') {
    console.log('This is a number');
  } else {
    console.log('This is not a number');
  }
}

isInteger(true);

convert*/

var add = (a,b) => console.log(a+b);

add(5,8);

var add2 = (c,d) => {
  return console.log(c+d);
}

add2(9,5);
