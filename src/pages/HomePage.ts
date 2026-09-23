import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage{

    //1. Initialization of Locators
    private readonly homePageHeaders: Locator;


    //2. Locators

    constructor(page: Page) {
        super(page)

        this.homePageHeaders = this.page.getByRole('heading', { level: 2 });
    }
    


    //3. Action Methods


    async homePageTitle(): Promise<string> {
        return await this.page.title();
    }

    async HomePageHeaderCount(): Promise<string[]>{
        return await this.homePageHeaders.allInnerTexts();
    }




}