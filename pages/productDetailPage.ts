import {BasePage} from "./basePage";
import {$} from "protractor";
import * as waitHelper from "../helpers/wait_helper";
import * as Q from 'q';

export class ProductDetailPage extends BasePage{
    url = '';
    pageLoaded = this.inDom($(''));

}