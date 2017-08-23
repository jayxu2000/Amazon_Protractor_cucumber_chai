import {BasePage} from "./basePage";
import {$} from "protractor";
import * as waitHelper from "../helpers/wait_helper";
import * as Q from 'q';

export class SearchResultPage extends BasePage{
    url = '';
    pageLoaded = this.inDom($('#s-result-info-bar'));
    firstSearchResult =  $('#result_1>div>div.a-fixed-left-grid>div>div');

    click1stResult = async()=>{
        await this.firstSearchResult.click();
    };
}