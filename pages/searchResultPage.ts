import {BasePage} from "./basePage";
import {$} from "protractor";

export class SearchResultPage extends BasePage{
    url = '';
    pageLoaded = this.inDom($('#s-result-info-bar'));
    firstSearchResult =  $('li>div>div.a-fixed-left-grid>div>div');

    click1stResult = async()=>{
        await this.firstSearchResult.click();
    };
}