import { Given, Then } from '@wdio/cucumber-framework';
import Page from '../../src/pages/page';
import registractPage from '../../src/pages/registract.page';
import RegistractionPage from '../../src/pages/registract.page';
import SecurePage from '../../src/pages/secure.page';

// const pages = {
//     registractPage: RegistractionPage
// }

// Given(/^i open browser and load url(.+)$/, async function (registractionpageurl) {
//     await browser.url(registractionpageurl)
//     await browser.maximizeWindow()
//    });
 
//    Then(/^i should see message with text (.+)$/, async function (headermessage) {
//      const anyname =await $('.subheader')
//      expect(await anyname.getText()).toEqual(headermessage)
//    });

  
  
  
  
Given(/^i am on page$/,  async  function () {
   await browser.maximizeWindow()
   
 await registractPage.open()
  var title=browser.getTitle()
  console.log('title')
  
  // pages[registractPage].open()
        
        
  }); 

  Then(/^user click on sign button$/, async  function () {
         await (await registractPage.getclickSignbutton()  )
        // 
                  
  });

Then(/^user scroll page$/, async function () {
  await registractPage.getscrollview()
});

Given(/^user enter username (.+)$/,  async function (emailid) {
      await registractPage.getenterEmailid(emailid)
  });



Then(/^user click on create an account$/,  async function () {
   await registractPage.create_ccount
   console.log('chandrayadav')
  });