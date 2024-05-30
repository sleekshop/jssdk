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
            let setOrderDetails = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "set_order_details",
                session: session,
                id_payment_method: id_payment_method,
                id_delivery_method: id_delivery_method,
                delivery_companyname: delivery_companyname,
                delivery_department: delivery_department,
                delivery_salutation: delivery_salutation,
                delivery_firstname: delivery_firstname,
                delivery_lastname: delivery_lastname,
                delivery_street: delivery_street,
                delivery_number: delivery_number,
                delivery_zip: delivery_zip,
                delivery_state: delivery_state,
                delivery_city: delivery_city,
                delivery_country: delivery_country,
                invoice_companyname: invoice_companyname,
                invoice_department: invoice_department,
                invoice_salutation: invoice_salutation,
                invoice_firstname: invoice_firstname,
                invoice_lastname: invoice_lastname,
                invoice_street: invoice_street,
                invoice_number: invoice_number,
                invoice_zip: invoice_zip,
                invoice_state: invoice_state,
                invoice_city: invoice_city,
                invoice_country: invoice_country,
                note: note,
                email: email,
                phone: phone,
                attributes: attributes
            });
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
            let getDeliveryCountries = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_delivery_countries",
            });
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
            let updateOrderDetails = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "update_order_details",
                id_order: id_order,
                id_payment_method: id_payment_method,
                id_delivery_method: id_delivery_method,
                order_state: order_state,
                order_payment_state: order_payment_state,
                order_delivery_state: order_delivery_state,
                delivery_companyname: delivery_companyname,
                delivery_department: delivery_department,
                delivery_salutation: delivery_salutation,
                delivery_firstname: delivery_firstname,
                delivery_lastname: delivery_lastname,
                delivery_street: delivery_street,
                delivery_number: delivery_number,
                delivery_zip: delivery_zip,
                delivery_state: delivery_state,
                delivery_city: delivery_city,
                delivery_country: delivery_country,
                invoice_companyname: invoice_companyname,
                invoice_department: invoice_department,
                invoice_salutation: invoice_salutation,
                invoice_firstname: invoice_firstname,
                invoice_lastname: invoice_lastname,
                invoice_street: invoice_street,
                invoice_number: invoice_number,
                invoice_zip: invoice_zip,
                invoice_state: invoice_state,
                invoice_city: invoice_city,
                invoice_country: invoice_country,
                note: note,
                email: email,
                phone: phone,
                attributes: attributes
            });
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
            let getOrderDetails = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_order_details",
                session: session
            });
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
            let getOrderById = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_order_by_id",
                id_order: id_order,
                language: language
            });
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
            let checkout = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "checkout",
                session: session
            });
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
            let getInvoice = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_invoice",
                id_order: id_order
            });
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
            let getOrderConfirmation = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_order_confirmation",
                id_order: id_order,
                args: args
            });
            return getOrderConfirmation.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }
}
