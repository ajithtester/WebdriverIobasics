const expectChai = require('chai').expect;
describe("Scroll" , async()=>{

    it("Scroll to element test",  async()=>{

        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow()
      
        await browser.saveScreenshot("sample1.png");
        await $("//input[@id='twotabsearchtextbox']").setValue("beanbag");
        
        await $("//input[@id='nav-search-submit-button']").click();
        await browser.pause(3000)

        let scrollto = await $("//input[@id='low-price']");
        await scrollto.scrollIntoView();
        await scrollto.setValue("1500");
        
        await $("//input[@class='a-button-input']").click();
       
        await browser.saveScreenshot("sample2.png");

       

        

    })
}) 