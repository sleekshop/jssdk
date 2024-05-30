import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Payment {

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
     * get_payment_methods
     * @method getPaymentMethods
     * @return {Object} Object of payment methods.
     * @public
     */
    public async getPaymentMethods(): Promise<object> {

        try {
            let getPaymentMethods = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_payment_methods",
            });
            return getPaymentMethods.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * do_payment
     * @method doPayment
     * @param {Number} id_order
     * @param {Array} args
     * @return {Object} Object of payment details.
     * @public
     */
    public async doPayment(
        id_order: number,
        args: Array<any> = []
    ): Promise<object> {

        try {
            let doPayment = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "do_payment",
                id_order: id_order,
                args: args,
            });
            return doPayment.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * add_delivery_costs
     * @method addDeliveryCosts
     * @param {String} session
     * @param {Array} delivery_costs
     * @return {Object} Object of delivery costs.
     * @public
     */
    public async addDeliveryCosts(
        session: string,
        delivery_costs: Array<any> = []
    ): Promise<object> {

        try {
            let addDeliveryCosts = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "add_delivery_costs",
                session: session,
                delivery_costs: delivery_costs,
            });
            return addDeliveryCosts.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
