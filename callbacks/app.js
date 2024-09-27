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


function fetchUser(userId, callback){
    setTimeout (()=>{
        console.log("UserId :",userId);
        callback({userId:userId, username:"John"})
    },1000)
 
}

function fetchOrder(username, callback){
    setTimeout(()=>{
        console.log("username : ",username);
        callback({orderId:1, item:"Rice"})
    },1000)
}

function fetchOrdetails(orderId,callback){
    setTimeout(()=>{
        console.log("order id : ",orderId);
        callback({orderId:orderId, details: "shipped"});
    },1000)
}


//callback hell
fetchUser(101,(user)=>{
    fetchOrder(user.username,(orders)=>{
        fetchOrdetails(orders.orderId,(details)=>{
            console.log("orderDetails:  ",details)
        })
    })
})
