//import Page from './page';
import Page from '../../src/pages/page';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistractionPage extends Page {
    /**
     * define selectors using getter methods
     */

    //  const sign: any-in = await $$('//a[@class='login']')
    //get inputUsername () { return $('//a[@class='login']') }
    // get inputPassword () { return $('#password') }
    // get btnSubmit () { return $('button[type="submit"]') }

    // /**
    //  * a method to encapsule automation code to interact with the page
    //  * e.g. to login using username and password
    //  */
    // async login (username: string, password: string) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

    /**
     * overwrite specifc options to adapt it to page object
     */
    get clickSign_button() {
        return $('a[title="Log in to your customer account"]').click()
       // browser.pause(3000)
                
        
    }
 get ScrollView(){
     return $('a[title="Log in to your customer account"]').scrollIntoView()
     browser.pause(3000)
 }
    get username_Emailid() {
        browser.pause(10000)
        return $('//input[@id="email_create"]')
    }

    get create_ccount() {
        return $('button[id="SubmitCreate"] span').click()
        browser.pause(10000)
    }
    async getclickSignbutton(){
        await this.clickSign_button
    }

    async getscrollview(){
        await this.ScrollView
    }

     
async getenterEmailid(emailid: string){
    browser.pause(10000)
    await (await this.username_Emailid).setValue(emailid)
}


    open() {
        return super.open('registractPage');

    }
}
export default new RegistractionPage()





