function launchBrowser(browserName){
    if(browserName =="chrome"){
        console.log("Launching Chrome Browser");
    }else{
        console.log("Launching another browser: " + browserName);
    }
}

function runTests(value){
switch(value){
    case "smoke":
        console.log("Running smoke tests");
        break;
    case "regression":
        console.log("Running regression tests");
        break;
    case "sanity":
        console.log("Running sanity tests");
        break;
    default:
        console.log("Running smoke tests");
        break;
}
}

launchBrowser("chrome")
runTests("smoke")