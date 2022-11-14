// order function
let stocks ={
    fruits: ["strawberry","grapes","banana","apple"]
    ,liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolates","peanuts"],

} 
let order =(fruit_name,call_production)=>{

    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production()
    },6000);
   
}

//  production function
//  dependant to function
let production = ()=>{
    setTimeout(()=>{
        console.log("production has started");
        setTimeout(()=>{
            console.log("fruit chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            },1000);
            setTimeout(()=>{
                console.log("The machine was started");
                setTimeout(()=>{
                    console.log(`${stocks.holder[0]} was selected`);

               setTimeout(()=>{
                console.log(`${stocks.toppings[0]} was added`);
                setTimeout(()=>{
                    console.log("serve");
                },2000);
               },3000);
             },2000);
            },1000);

        },2000);
    
    },4000);

}
order(0,production);