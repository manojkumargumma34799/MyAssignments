import {test} from "@playwright/test"

test("Create Leads", async({page}) =>{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr2");
    await page.locator("#password").fill("crmsfa");
    await page.locator("input[type='submit']").click();
    await page.locator("a>img").click();
    await page.getByText('Create Lead').click();
    await page.locator("#createLeadForm_companyName").fill("Dynpro Pvt Ltd");
    await page.locator("input[name='firstNameLocal']").fill("Gumma");
    await page.locator("input[name='lastName']").nth(2).fill("Manoj Kumar");;
    await page.locator("#createLeadForm_personalTitle").fill("Test");
    await page.locator("#createLeadForm_generalProfTitle").fill("Automation Tester");
    await page.locator("#createLeadForm_annualRevenue").fill("900000");
    await page.locator("#createLeadForm_departmentName").fill("IT");

    const options = page.locator("#createLeadForm_dataSourceId option");
    const count = await options.count()

    for(let i=0; i < count; i++){
        const value = await options.nth(i).getAttribute('value');
        const text = await options.nth(i).textContent();
        console.log("Value:" + value , "Text: " + text);
        
    }
await page.locator("input[value='Create Lead']").click();
    
})