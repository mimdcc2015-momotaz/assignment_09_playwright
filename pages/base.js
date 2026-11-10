class Base {
    constructor(page) {
        this.page = page;
        this.baseurl = 'https://www.saucedemo.com/';
    }

    async openurl() {
        await this.page.goto(this.baseurl, {
            waitUntil: 'domcontentloaded',
            timeout: 60000,
        });
    }
}

export { Base };