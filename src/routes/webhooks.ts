import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Webhooks {

    protected licence_username: string;
    protected licence_password: string;
    protected licence_secret_key: string;
    protected default_language: string;
    protected instance: XiorInstance;

    constructor(parentObj: Sleekshop) {
        this.licence_username = parentObj.licence_username;
        this.licence_password = parentObj.licence_password;
        this.licence_secret_key = parentObj.licence_secret_key;
        this.instance = parentObj.instance;
        this.default_language = parentObj.default_language;
    }

    /**
     * create_webhook
     * @method createWebhook
     * @param {String} name
     * @param {String} event
     * @return {Object} Object of created webhook.
     */
    public async createWebhook(
        name: string,
        event: string
    ): Promise<object> {

        try {
            let createWebhook = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "create_webhook",
                name: name,
                event: event,
            });
            return createWebhook.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * update_webhook
     * @method updateWebhook
     * @param {String} name
     * @param {String} url
     * @param {String} parameter
     * @return {Object} Object of updated webhook.
     */
    public async updateWebhook(
        name: string,
        url: string,
        parameter: string
    ): Promise<object> {

        try {
            let updateWebhook = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "update_webhook",
                name: name,
                url: url,
                parameter: parameter,
            });
            return updateWebhook.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }


}
