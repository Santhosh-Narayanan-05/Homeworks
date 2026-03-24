import {test,chromium,webkit} from "@playwright/test";
test('Load Redbus and Flipkart', async ()=>
    {
        //Load Red Bus in an Edge browser
        const browser= await chromium.launch({channel:'msedge',headless:false});
        const context= await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://www.redbus.in/"); 
        const title=await page.title();
        console.log(title);
        const url=page.url();
        await page.waitForTimeout(5000);

        // Load Flipkart in a Webkit browser
        const browser1= await webkit.launch({headless:false});
        const context1 = await browser1.newContext();
        const page1 = await context1.newPage();
        await page1.goto("https://www.flipkart.com/");
        const title1 = await page1.title();
        console.log(title1);
        const url1 = page1.url();
        console.log(url1);
        await page.waitForTimeout(5000);
})


