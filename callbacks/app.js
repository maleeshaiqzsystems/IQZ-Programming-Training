// const sayHello = ()=>{
//     console.log("Hello");
// }

// setTimeout(sayHello,100);

// let arr = ["Maleesha","Thisura","Dilmi"]

// arr.forEach((name)=>console.log(name))



// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//         console.log("Step 2");
//         setTimeout(() => {
//             console.log("Step 3");
//         }, 1000);
//     }, 1000);
// }, 1000);



//using callbacks 

// function fetchUser(userId, callback){
//     setTimeout (()=>{
//         console.log("UserId :",userId);
//         callback({userId:userId, username:"John"})
//     },1000)
 
// }

// function fetchOrder(username, callback){
//     setTimeout(()=>{
//         console.log("username : ",username);
//         callback({orderId:1, item:"Rice"})
//     },1000)
// }

// function fetchOrdetails(orderId,callback){
//     setTimeout(()=>{
//         console.log("order id : ",orderId);
//         callback({orderId:orderId, details: "shipped"});
//     },1000)
// }


// //callback hell
// fetchUser(101,(user)=>{
//     fetchOrder(user.username,(orders)=>{
//         fetchOrdetails(orders.orderId,(details)=>{
//             console.log("orderDetails:  ",details)
//         })
//     })
// })



// //using promises 

// function fetchUser(userId, callback){
//     return new Promise((resolve)=>{
//         setTimeout (()=>{
//             console.log("UserId :",userId);
//             resolve({userId:userId, username:"John"})
//         },1000)
//     })
    
// }


// function fetchOrder(username, callback){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("username : ",username);
//             resolve({orderId:1, item:"Rice"})
//         },1000)
//     })
// }
    

// function fetchOrdertails(orderId,callback){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("order id : ",orderId);
//             resolve({orderId:orderId, details: "shipped"});
//         },1000)
//     })
    
// }

// fetchUser(101)
//     .then ((user)=>{
//         return fetchOrder(user.username);
//     })
//     .then((orders)=>{
//         return fetchOrdertails(orders.orderId);
//     })
//     .then ((details)=>{
//         console.log("order details :", details);
//     })
//     .catch((error)=>{
//         console.log("An error occurred:", error);
//     })


    //using async and await



    function fetchUser(userId){
        return new Promise((resolve)=>{
            setTimeout (()=>{
                console.log("UserId :",userId);
                resolve({userId:userId, username:"John"})
            },1000)
        })
        
    }

    async function getuser(userId) {
        try{
            let user = await fetchUser(userId);
            console.log("user :",user.username);
        }catch(error){
            console.log(error);
        }
    }

    getuser(1);