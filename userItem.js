if(!sessionStorage.grabbedKey){
    sessionStorage.grabbedKey = 0
}
if(!sessionStorage.grabbedPick){
    sessionStorage.grabbedPick = 0
}
console.log("rerunning?")

function grabKey(){
    sessionStorage.grabbedKey  = 1;
}

function keygrabbed(){
    if(sessionStorage.grabbedKey == 1){
        return true;
    }
    return false;
}

function grabLockPick(){
    sessionStorage.grabbedPick = 1;
}

function pickGrabbed(){
    if(sessionStorage.grabbedPick == 1){
        return true;
    }
    return false;
}