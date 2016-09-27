// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp) {
//   console.log('promise success', temp);
// }, function(error) {
//   console.log('promise error', error);
// });

// if (typeof )

// Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a !== 'number') {
      reject(`${a} is not a number`);
    }
    if (typeof b !== 'number') {
      reject(`${b} is not a number`);
    }
    resolve(a + b);
  });
}

addPromise(14, 35).then(function(sum) {
  console.log(sum);
}, function(error){
  console.log(error);
});

addPromise('test', 35).then(function(sum) {
  console.log(sum);
}, function(error){
  console.log(error);
});

addPromise(14, 'chatuba').then(function(sum) {
  console.log(sum);
}, function(error){
  console.log(error);
});

addPromise(125, 79).then(function(sum) {
  console.log(sum);
}, function(error){
  console.log(error);
});
