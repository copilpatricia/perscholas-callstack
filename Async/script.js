// console.log("One");

// //even with a zero-delay is still asynchronous
// setTimeout(() => console.log("Two"), 0);

// console.log("Three");


// // Create a Promise that resolves after one second.
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Guess this worked!");
//     }, 1000);
// });

// // Add some then() methods to handle additional tasks.
// myPromise
//     .then((x) => x + ' Again?')
//     .then((x) => x + ' Third time!')
//     .then((x) => x + ' Promises are cool.')
//     .catch((err) => {
//         console.error(err);
//     })


// console.log(myPromise);


// new Promise((resolve, reject) => {
//     console.log("Initial");
  
//     resolve();
//   })
//     .then(() => {
//       throw new Error("Something failed");
  
//       console.log("Do this");
//     })
//     .catch(() => {
//       console.error("Do that");
//     })
//     .then(() => {
//       console.log("Do this, no matter what happened before");
//     });



// const myPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("My favorite flavor of yogurt is lime")
//     }, 3000)
// })

// myPromise.then(function(value){
//     document.getElementById('demo').innerHTML = value
// })


// const myFirstPromise = new Promise((resolve, reject) => {
//     // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
//     // In this example, we use setTimeout(...) to simulate async code.
//     // In reality, you will probably be using something like XHR or an HTML API.
//     setTimeout(() => {
//       resolve("You didi it!"); // Yay! Everything went well!
//     }, 250);
//   });
  
//   myFirstPromise.then((successMessage) => {
//     // successMessage is whatever we passed in the resolve(...) function above.
//     // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
//     console.log(`Yay! ${successMessage}`);
//   });

// setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
// let saySomething = () => {
//     console.log('waiting')
// }

// let failureCheck = () => {
//     console.log("did not work");
// }


// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(3 * 1000)
//   .then(() => saySomething("3 seconds"))
//   .catch(failureCallback);

// Promise.resolve().then(() => console.log(2));
// console.log(1);


// async function example() {
//     console.log("Hello");
// }

// function example2() {
//     console.log(Promise.resolve("Hello"));
// }

// example()
// example2()

function resolveAfterSecond(t) {
    const myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Done!')
        },t * 1000)
    });

    return myPromise
}

async function testAwait() {
    console.log('...testing');
    const result = await resolveAfterSecond(3)
    console.log(result);
}

testAwait()

// without the await keyword, the resolveAfterSecond is in pending, the await is there because it tells us that we need to wait 3 second to have the result and then it will execute the function
// async = tell us that the code will not execute in the order we expect