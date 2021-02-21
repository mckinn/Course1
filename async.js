
const prom = new Promise ((passBackSuccess, passBackFailure) =>{
    const both = true;
    const successpath = false;
    console.log('executing the promise function', successpath,both);
    setTimeout(() => { 
        if (successpath || both) { 
           console.log('in true');
           passBackSuccess('it passed')
        };
        if (!successpath || both) {
            console.log('in false');
            passBackFailure(new Error('it failed'))
        }
    }, 2000);
});

console.log('just before the reference to the promise');

prom
    .catch(result => { // "catch" will be called if passBackSuccess was invoked
        console.log('in catch');
        console.log('result passed in is '+result.message);
    })
    .then(result => { // "then" will be called if passBackSuccess was invoked
        console.log('in then');
        console.log('result passed in is '+result);
    })
    ;




// function functionName(params) {
//     return new Promise (( resolve, reject ) => {
//         // the executor function
//         // some async stuff 
//         resolve('the value to pass back');
//         or
//         reject('the rejection value');
//     });
// }  // this function returns a Promise, and as a result can be chained.
    
    