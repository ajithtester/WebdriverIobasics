describe('Sample test', async ()=>{

    it('Launch the url', async ()=>{

   await browser.url("https://automation.folloit.com/login")
   await console.log(await browser.getTitle())

   await expect(browser).toHaveTitle("Follo - Login")
//
    // await $("//input[@placeholder='Email address']").setValue("sprintcomplete004@yopmail.com")
  
    // await $("//input[@name='password']").setValue("_yf2jh78@2")
    // await browser.pause(5000)
    // console.log( await $("(//h1[normalize-space()='Login'])[1]").getText())
    // await browser.pause(5000)
    })

})