import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Coupons {

    protected licence_username: string;
    protected licence_password: string;
    protected default_language: string;
    protected instance: XiorInstance;

    constructor(parentObj: Sleekshop) {
        this.licence_username = parentObj.licence_username;
        this.licence_password = parentObj.licence_password;
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
            let addCoupons = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "add_coupons",
                session: session,
                coupons: coupons,
            });
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

        try {
            let createCoupons = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "create_coupons",
                count: count,
                name: name,
                amount: amount,
            });
            return createCoupons.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
