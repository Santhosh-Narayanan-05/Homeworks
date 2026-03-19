function  launchBrowser(browsername){
    if (browsername==="Chrome") {
        console.log("Chrome browser is Launching")        
    }
    else{
        console.log("Other browser is Launching")
    }
    }
    launchBrowser("Brave")

    function runTests(testType){
        switch (testType) {
            case 1:
                console.log("Smoke Test")                
                break;
                case 2:
                console.log("Sanity Test")                
                break;
                case 3:
                console.log("Regression Test")                
                break;

            default:
                console.log("Smoke test is the default test")
                break;
        }
    }
    runTests(0)