describe("Image test", async()=>{

    it("Amazon home page", async()=>{

        await browser.url("https://www.amazon.in/");
        await browser.maximizeWindow()

        expect(await browser.checkScreen("home screen", {})).toEqual(0)
      //  await $("//input[@id='twotabsearchtextbox']").setValue("beanbag");

    })

    it("Amazon search page", async()=>{

      await browser.url("https://www.amazon.in/");
      await browser.maximizeWindow()
     await (await $("//input[@id='twotabsearchtextbox']")).setValue("redmi")
     await browser.pause(3000)
      expect(await browser.checkElement(await $("#nav-flyout-searchAjax"), "Search screen",{}))
      .toEqual(0)
   

  })
})