const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

var email = "brentandersonwdm@gmail.com";
var password = "updatePassword";
var badPassword = "thisIsBad";

async function loginSuccess(){
 
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
 
    //To fetch http://hudl.com from the browser with our code.
    await driver.get("http://hudl.com");
            
    //To login by button click.
    await driver.findElement(By.xpath("//a[@href='/login']")).click();
 
    //To enter a email and password.
    await driver.findElement(By.name("email")).sendKeys(email);
    await driver.findElement(By.name("password")).sendKeys(password);

    //To login by button click.
    await driver.findElement(By.id("logIn")).click();
    await driver.sleep(2000);

    //Verify the page title and print it
    var title = await driver.getTitle();

    if (title == "Home - Hudl") {
        console.log('Login was a SUCCESS - Title is:',title);
    } else {
        console.log('Login was a FAILURE - Title is:',title);
    }
 
    //It is always a safe practice to quit the browser after execution
    await driver.quit();

}

async function loginFail(){
 
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://hudl.com from the browser with our code.
    await driver.get("http://hudl.com");
         
    //To login by button click.
    await driver.findElement(By.xpath("//a[@href='/login']")).click();

    //To enter a email and password.
    await driver.findElement(By.name("email")).sendKeys(email);
    await driver.findElement(By.name("password")).sendKeys(badPassword);

    //To login by button click.
    await driver.findElement(By.id("logIn")).click();
    await driver.sleep(2000);

    //Verify the page title and print it
    var title = await driver.getTitle();

    if (title !== "Home - Hudl") {
        console.log('Failed Login was a SUCCESS - Title is:',title);
    } else {
        console.log('Failed Login was a FAILURE - Title is:',title);
    }

    //It is always a safe practice to quit the browser after execution
    await driver.quit();

}

loginSuccess()
loginFail()