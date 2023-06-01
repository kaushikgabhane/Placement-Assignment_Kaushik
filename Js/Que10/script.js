
const getData = () => {
    console.log("data fetched");
}


const debounce = function (fn,delay){

    let timer;
    return function (){
        let context = this,
            args = arguments;
        
        clearTimeout(timer);
        
        timer = setTimeout(()=>{
            // The fn.apply(context, args) line invokes the original function (fn) with the same context (this) and arguments (args) that were passed to the debounced function.

            fn.apply(context,args);
        },delay);
    }
}


const someBetterFn = debounce(getData,500);