import {test } from '@playwright/test'
test('createlead', async({page})=>
{
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.waitForLoadState('domcontentloaded')
    await page.locator('#username').fill('Demosalesmanager')
    await page.locator('#password').fill('crmsfa')    
    await page.locator("[class='decorativeSubmit']").click()
    await page.locator('text=CRM/SFA').click()   
    await page.locator('text="Leads"').click()  
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click()
    await page.waitForTimeout(2000);
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('#createLeadForm_companyName').fill('Demo Company')
    await page.locator('#createLeadForm_firstName').fill('Santhosh') 
    await page.locator('#createLeadForm_lastName').fill('S')   
    await page.locator('#createLeadForm_personalTitle').fill('Mr')
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Testing')
    await page.locator('#createLeadForm_annualRevenue').fill('1200000')
    await page.locator('#createLeadForm_departmentName').fill('QA')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('8056468145')
    await page.locator('[class="smallSubmit"]').click()
    await page.waitForTimeout(5000);
})