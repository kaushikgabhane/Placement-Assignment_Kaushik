
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
            fn.apply(context,args);
        },delay);
    }
}


const someBetterFn = debounce(getData,500);