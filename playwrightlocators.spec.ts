import {test} from "@playwright/test"

test("CreateLead_Using_Playwright_Locators", async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main");
await page.getByRole('textbox', {name:'Username'}).fill("Demosalesmanager");
await page.getByRole('textbox',{name:'Password'}).fill("crmsfa");
await page.getByRole('button',{name:'Login'}).click();
await page.getByRole('img',{name:''}).last().click();
await page.getByRole('link',{name:'Create Lead'}).click();
await page.locator("#createLeadForm_companyName").fill("Dynpro Pvt Ltd");
await page.locator("input[name='firstNameLocal']").fill("Gumma");
await page.locator("input[name='lastName']").nth(2).fill("Manoj Kumar");;
await page.locator("#createLeadForm_personalTitle").fill("Test");
await page.locator("#createLeadForm_generalProfTitle").fill("Automation Tester");
await page.locator("#createLeadForm_annualRevenue").fill("900000");
await page.locator("#createLeadForm_departmentName").fill("IT");
await page.getByRole('button',{name:'Create Lead'}).first().click();


})