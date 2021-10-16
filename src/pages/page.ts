/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
   
        return browser.url(`http://automationpractice.com/index.php/${path}`)
        browser.setTimeout({ implicit: 10000, pageLoad: 10000, script: 5000 });
    }
}
