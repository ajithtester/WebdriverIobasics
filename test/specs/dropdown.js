const expectChai = require('chai').expect;
describe("dropdown" , async()=>{

    it("Dropdown test",  async()=>{

        await browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
        await browser.maximizeWindow()
        await browser.pause(5000)
        await browser.saveScreenshot("sample3.png");
        let dropdown = await $("//p//select");
        await dropdown.selectByAttribute("value","BGR");
        await browser.saveScreenshot("sample4.png");
        await browser.pause(5000)
      
        await dropdown.selectByVisibleText("Eritrea");
        await browser.saveScreenshot("sample5.png");
        await browser.pause(5000)
        await dropdown.selectByIndex(20);
        await browser.saveScreenshot("sample6.png");
        await browser.pause(5000)


           })
})