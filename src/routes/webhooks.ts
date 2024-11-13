import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";
import checkSecretKey from "../helpers/secretKey";

export default class Webhooks {

    protected licence_username: string;
    protected licence_password: string;
    protected licence_secret_key: string;
    protected instance: XiorInstance;

    constructor(parentObj: Sleekshop) {
        this.licence_username = parentObj.licence_username;
        this.licence_password = parentObj.licence_password;
        this.licence_secret_key = parentObj.licence_secret_key;
        this.instance = parentObj.instance;
    }

    /**
     * create_webhook
     * @method createWebhook
     * @param {String} name
     * @param {String} event
     * @return {Object} Object of created webhook.
     */
    public async createWebhook(
        {
            name,
            event
        }: {
            name: string;
            event: string;
        }
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "create_webhook");
            formData.append('name', name);
            formData.append('event', event);

            let createWebhook = await this.instance.post('', formData);
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
        {
            name,
            url,
            parameter
        }: {
            name: string;
            url: string;
            parameter: string;
        }
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "update_webhook");
            formData.append('name', name);
            formData.append('url', url);
            formData.append('parameter', parameter);

            let updateWebhook = await this.instance.post('', formData);
            return updateWebhook.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }


}
