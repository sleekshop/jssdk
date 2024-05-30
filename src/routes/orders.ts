import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Orders {

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
     * set_order_details
     * @method setOrderDetails
     * @param {String} session
     * @param {Number} id_payment_method
     * @param {Number} id_delivery_method
     * @param {String} delivery_companyname
     * @param {String} delivery_department
     * @param {String} delivery_salutation
     * @param {String} delivery_firstname
     * @param {String} delivery_lastname
     * @param {String} delivery_street
     * @param {String} delivery_number
     * @param {String} delivery_zip
     * @param {String} delivery_state
     * @param {String} delivery_city
     * @param {String} delivery_country
     * @param {String} invoice_companyname
     * @param {String} invoice_department
     * @param {String} invoice_salutation
     * @param {String} invoice_firstname
     * @param {String} invoice_lastname
     * @param {String} invoice_street
     * @param {String} invoice_number
     * @param {String} invoice_zip
     * @param {String} invoice_state
     * @param {String} invoice_city
     * @param {String} invoice_country
     * @param {String} note
     * @param {String} email
     * @param {String} phone
     * @param {Array<Object>} attributes
     * @return {Object} Object of product details.
     * @public
     */
    public async setOrderDetails(
        session: string,
        id_payment_method: number,
        id_delivery_method: number,
        delivery_companyname: string,
        delivery_department: string,
        delivery_salutation: string,
        delivery_firstname: string,
        delivery_lastname: string,
        delivery_street: string,
        delivery_number: string,
        delivery_zip: string,
        delivery_state: string,
        delivery_city: string,
        delivery_country: string,
        invoice_companyname: string,
        invoice_department: string,
        invoice_salutation: string,
        invoice_firstname: string,
        invoice_lastname: string,
        invoice_street: string,
        invoice_number: string,
        invoice_zip: string,
        invoice_state: string,
        invoice_city: string,
        invoice_country: string,
        note: string,
        email: string,
        phone: string,
        attributes: Array<object> = []
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "set_order_details");
            formData.append('session', session);
            formData.append('id_payment_method', id_payment_method.toString());
            formData.append('id_delivery_method', id_delivery_method.toString());
            formData.append('delivery_companyname', delivery_companyname);
            formData.append('delivery_department', delivery_department);
            formData.append('delivery_salutation', delivery_salutation);
            formData.append('delivery_firstname', delivery_firstname);
            formData.append('delivery_lastname', delivery_lastname);
            formData.append('delivery_street', delivery_street);
            formData.append('delivery_number', delivery_number);
            formData.append('delivery_zip', delivery_zip);
            formData.append('delivery_state', delivery_state);
            formData.append('delivery_city', delivery_city);
            formData.append('delivery_country', delivery_country);
            formData.append('invoice_companyname', invoice_companyname);
            formData.append('invoice_department', invoice_department);
            formData.append('invoice_salutation', invoice_salutation);
            formData.append('invoice_firstname', invoice_firstname);
            formData.append('invoice_lastname', invoice_lastname);
            formData.append('invoice_street', invoice_street);
            formData.append('invoice_number', invoice_number);
            formData.append('invoice_zip', invoice_zip);
            formData.append('invoice_state', invoice_state);
            formData.append('invoice_city', invoice_city);
            formData.append('invoice_country', invoice_country);
            formData.append('note', note);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('attributes', JSON.stringify(attributes));

            let setOrderDetails = await this.instance.post('', formData);
            return setOrderDetails.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_delivery_countries
     * @method getDeliveryCountries
     * @return {Object} Object of delivery countries.
     * @public
     */
    public async getDeliveryCountries(): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_delivery_countries");

            let getDeliveryCountries = await this.instance.post('', formData);
            return getDeliveryCountries.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * update_order_details
     * @method updateOrderDetails
     * @param {Number} id_order
     * @param {Number} id_payment_method
     * @param {Number} id_delivery_method
     * @param {String} order_state
     * @param {String} order_payment_state
     * @param {String} order_delivery_state
     * @param {String} delivery_companyname
     * @param {String} delivery_department
     * @param {String} delivery_salutation
     * @param {String} delivery_firstname
     * @param {String} delivery_lastname
     * @param {String} delivery_street
     * @param {String} delivery_number
     * @param {String} delivery_zip
     * @param {String} delivery_state
     * @param {String} delivery_city
     * @param {String} delivery_country
     * @param {String} invoice_companyname
     * @param {String} invoice_department
     * @param {String} invoice_salutation
     * @param {String} invoice_firstname
     * @param {String} invoice_lastname
     * @param {String} invoice_street
     * @param {String} invoice_number
     * @param {String} invoice_zip
     * @param {String} invoice_state
     * @param {String} invoice_city
     * @param {String} invoice_country
     * @param {String} note
     * @param {String} email
     * @param {String} phone
     * @param {Array<Object>} attributes
     * @return {Object} Object of product details.
     * @public
     */
    public async updateOrderDetails(
        id_order: number,
        id_payment_method: number,
        id_delivery_method: number,
        order_state: string,
        order_payment_state: string,
        order_delivery_state: string,
        delivery_companyname: string,
        delivery_department: string,
        delivery_salutation: string,
        delivery_firstname: string,
        delivery_lastname: string,
        delivery_street: string,
        delivery_number: string,
        delivery_zip: string,
        delivery_state: string,
        delivery_city: string,
        delivery_country: string,
        invoice_companyname: string,
        invoice_department: string,
        invoice_salutation: string,
        invoice_firstname: string,
        invoice_lastname: string,
        invoice_street: string,
        invoice_number: string,
        invoice_zip: string,
        invoice_state: string,
        invoice_city: string,
        invoice_country: string,
        note: string,
        email: string,
        phone: string,
        attributes: Array<object> = []
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "update_order_details");
            formData.append('id_order', id_order.toString());
            formData.append('id_payment_method', id_payment_method.toString());
            formData.append('id_delivery_method', id_delivery_method.toString());
            formData.append('order_state', order_state);
            formData.append('order_payment_state', order_payment_state);
            formData.append('order_delivery_state', order_delivery_state);
            formData.append('delivery_companyname', delivery_companyname);
            formData.append('delivery_department', delivery_department);
            formData.append('delivery_salutation', delivery_salutation);
            formData.append('delivery_firstname', delivery_firstname);
            formData.append('delivery_lastname', delivery_lastname);
            formData.append('delivery_street', delivery_street);
            formData.append('delivery_number', delivery_number);
            formData.append('delivery_zip', delivery_zip);
            formData.append('delivery_state', delivery_state);
            formData.append('delivery_city', delivery_city);
            formData.append('delivery_country', delivery_country);
            formData.append('invoice_companyname', invoice_companyname);
            formData.append('invoice_department', invoice_department);
            formData.append('invoice_salutation', invoice_salutation);
            formData.append('invoice_firstname', invoice_firstname);
            formData.append('invoice_lastname', invoice_lastname);
            formData.append('invoice_street', invoice_street);
            formData.append('invoice_number', invoice_number);
            formData.append('invoice_zip', invoice_zip);
            formData.append('invoice_state', invoice_state);
            formData.append('invoice_city', invoice_city);
            formData.append('invoice_country', invoice_country);
            formData.append('note', note);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('attributes', JSON.stringify(attributes));

            let updateOrderDetails = await this.instance.post('', formData);
            return updateOrderDetails.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_order_details
     * @method getOrderDetails
     * @param {String} session
     * @return {Object} Object of product details.
     * @public
     */
    public async getOrderDetails(
        session: string
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_order_details");
            formData.append('session', session);

            let getOrderDetails = await this.instance.post('', formData);
            return getOrderDetails.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_order_by_id
     * @method getOrderById
     * @param {Number} id_order
     * @param {String} language
     * @return {Object} Object of product details.
     * @public
     */
    public async getOrderById(
        id_order: number,
        language: string = this.default_language
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_order_by_id");
            formData.append('id_order', id_order.toString());
            formData.append('language', language);

            let getOrderById = await this.instance.post('', formData);
            return getOrderById.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * checkout
     * @method checkout
     * @param {String} session
     * @return {Object} Object of product details.
     * @public
     */
    public async checkout(
        session: string
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "checkout");
            formData.append('session', session);

            let checkout = await this.instance.post('', formData);
            return checkout.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_invoice
     * @method getInvoice
     * @param {Number} id_order
     * @return {Object} Object of product details.
     * @public
     */

    public async getInvoice(
        id_order: number
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_invoice");
            formData.append('id_order', id_order.toString());

            let getInvoice = await this.instance.post('', formData);
            return getInvoice.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_order_confirmation
     * @method getOrderConfirmation
     * @param {Number} id_order
     * @param {Object} args
     * @return {Object} Object of product details.
     * @public
     */
    public async getOrderConfirmation(
        id_order: number,
        args: object = {}
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_order_confirmation");
            formData.append('id_order', id_order.toString());
            formData.append('args', JSON.stringify(args));

            let getOrderConfirmation = await this.instance.post('', formData);
            return getOrderConfirmation.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }
}
