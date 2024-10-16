import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";
import checkSecretKey from "../helpers/secretKey";

export default class Coupons {

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
     * add_coupons
     * @method addCoupons
     * @param {String} session
     * @param {Array} coupons
     * @return {Object} Object of added coupons.
     */
    public async addCoupons(
        session: string,
        coupons: Array<string>
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "add_coupons");
            formData.append('session', session);
            formData.append('coupons', JSON.stringify(coupons));

            let addCoupons = await this.instance.post('', formData);
            return addCoupons.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * create_coupons
     * @method createCoupons
     * @param {Number} count
     * @param {String} name
     * @param {Number} amount
     * @return {Object} Object of created coupons.
     */
    public async createCoupons(
        count: number,
        name: string,
        amount: number
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "create_coupons");
            formData.append('count', count.toString());
            formData.append('name', name);
            formData.append('amount', amount.toString());

            let createCoupons = await this.instance.post('', formData);
            return createCoupons.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
