
type Log = Warning | Info | Success;


interface Warning{
    type: "warning" //tag know as descriminated union because of same property name in all the interfaces, different value for all interfaces
    msg:string;
}

interface Info{
    type: "info"
    text:string
}

interface Success{
    type: "success"
    message:string;
}

function handleMsg(log: Log){
    switch(log.type){
        case "warning":
            console.log(log.msg)
            break;
        case "info" :
            console.log(log.text)
            break;
        case "success":
            console.log(log.message)
            break;
    }
}
