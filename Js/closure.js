function a(){
    const a = 2;
    return function b(){
        const b = 2;
        return function c(){
            const c = 2;
            console.log("Sum is" , a+b+c);
        }
    }
}

a()()();