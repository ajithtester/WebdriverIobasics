const expectChai = require('chai').expect;

describe("Popup test" , async()=>{

it("Popup alert" , async()=>{

    
    await browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
    console.log(await browser.getTitle())
  //  console.log (await browser.status());
    await $("(//input[@id='login1'])[1]").setValue("youcanautomate");
    await $("//input[@title='Sign in']").click();
    await browser.pause(5000)
    await browser.saveScreenshot("sample.png");
    expectChai(await browser.isAlertOpen()).to.equal(true);
  let alertmsg =  "Please enter your password";
   console.log(await browser.getAlertText());
  expectChai(await browser.getAlertText()).to.equal(alertmsg);
    
    await browser.pause(5000)
    await browser.acceptAlert;
    await browser.pause(5000)
    await browser.saveScreenshot("sample2.png");
})
})