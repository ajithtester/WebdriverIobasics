describe("Radio button" , async()=>{

    it("radio button test",  async()=>{

    await  browser.url("https://materializecss.com/radio-buttons.html");
    console.log(await "sample")
let radio = await $("//span[normalize-space()='Green']");


console.log(await radio.isEnabled())
console.log(await radio.isClickable())
console.log(await radio.isDisplayed())
await radio.click()
await browser.pause(5000)

    })
})