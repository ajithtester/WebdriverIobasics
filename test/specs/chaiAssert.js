const expectChai = require('chai').expect;

describe('Sample test', async ()=>{

    it('Launch the url', async ()=>{

        await browser.url("https://automation.folloit.com/login")
        console.log(await browser.getTitle())
        //toequal, toinclude
        expectChai(await browser.getTitle()).to.equal("Follo - Login")
    })

})