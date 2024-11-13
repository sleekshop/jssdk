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
        {
            session,
            id_payment_method = null,
            id_delivery_method = null,
            delivery_companyname = null,
            delivery_department = null,
            delivery_salutation = null,
            delivery_firstname = null,
            delivery_lastname = null,
            delivery_street = null,
            delivery_number = null,
            delivery_zip = null,
            delivery_state = null,
            delivery_city = null,
            delivery_country = null,
            invoice_companyname = null,
            invoice_department = null,
            invoice_salutation = null,
            invoice_firstname = null,
            invoice_lastname = null,
            invoice_street = null,
            invoice_number = null,
            invoice_zip = null,
            invoice_state = null,
            invoice_city = null,
            invoice_country = null,
            note = null,
            email = null,
            phone = null,
            attributes = null
        }: {
            session: string;
            id_payment_method?: number | null;
            id_delivery_method?: number | null;
            delivery_companyname?: string | null;
            delivery_department?: string | null;
            delivery_salutation?: string | null;
            delivery_firstname?: string | null;
            delivery_lastname?: string | null;
            delivery_street?: string | null;
            delivery_number?: string | null;
            delivery_zip?: string | null;
            delivery_state?: string | null;
            delivery_city?: string | null;
            delivery_country?: string | null;
            invoice_companyname?: string | null;
            invoice_department?: string | null;
            invoice_salutation?: string | null;
            invoice_firstname?: string | null;
            invoice_lastname?: string | null;
            invoice_street?: string | null;
            invoice_number?: string | null;
            invoice_zip?: string | null;
            invoice_state?: string | null;
            invoice_city?: string | null;
            invoice_country?: string | null;
            note?: string | null;
            email?: string | null;
            phone?: string | null;
            attributes?: Array<object> | null;
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "set_order_details");
            formData.append('session', session);
            if (id_payment_method) formData.append('id_payment_method', id_payment_method.toString());
            if (id_delivery_method) formData.append('id_delivery_method', id_delivery_method.toString());
            if (delivery_companyname) formData.append('delivery_companyname', delivery_companyname);
            if (delivery_department) formData.append('delivery_department', delivery_department);
            if (delivery_salutation) formData.append('delivery_salutation', delivery_salutation);
            if (delivery_firstname) formData.append('delivery_firstname', delivery_firstname);
            if (delivery_lastname) formData.append('delivery_lastname', delivery_lastname);
            if (delivery_street) formData.append('delivery_street', delivery_street);
            if (delivery_number) formData.append('delivery_number', delivery_number);
            if (delivery_zip) formData.append('delivery_zip', delivery_zip);
            if (delivery_state) formData.append('delivery_state', delivery_state);
            if (delivery_city) formData.append('delivery_city', delivery_city);
            if (delivery_country) formData.append('delivery_country', delivery_country);
            if (invoice_companyname) formData.append('invoice_companyname', invoice_companyname);
            if (invoice_department) formData.append('invoice_department', invoice_department);
            if (invoice_salutation) formData.append('invoice_salutation', invoice_salutation);
            if (invoice_firstname) formData.append('invoice_firstname', invoice_firstname);
            if (invoice_lastname) formData.append('invoice_lastname', invoice_lastname);
            if (invoice_street) formData.append('invoice_street', invoice_street);
            if (invoice_number) formData.append('invoice_number', invoice_number);
            if (invoice_zip) formData.append('invoice_zip', invoice_zip);
            if (invoice_state) formData.append('invoice_state', invoice_state);
            if (invoice_city) formData.append('invoice_city', invoice_city);
            if (invoice_country) formData.append('invoice_country', invoice_country);
            if (note) formData.append('note', note);
            if (email) formData.append('email', email);
            if (phone) formData.append('phone', phone);
            if (attributes) formData.append('attributes', JSON.stringify(attributes));

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
        {
            id_order,
            id_payment_method = null,
            id_delivery_method = null,
            order_state = null,
            order_payment_state = null,
            order_delivery_state = null,
            delivery_companyname = null,
            delivery_department = null,
            delivery_salutation = null,
            delivery_firstname = null,
            delivery_lastname = null,
            delivery_street = null,
            delivery_number = null,
            delivery_zip = null,
            delivery_state = null,
            delivery_city = null,
            delivery_country = null,
            invoice_companyname = null,
            invoice_department = null,
            invoice_salutation = null,
            invoice_firstname = null,
            invoice_lastname = null,
            invoice_street = null,
            invoice_number = null,
            invoice_zip = null,
            invoice_state = null,
            invoice_city = null,
            invoice_country = null,
            note = null,
            email = null,
            phone = null,
            attributes = null
        }: {
            id_order: number;
            id_payment_method: number | null;
            id_delivery_method: number | null;
            order_state: string | null;
            order_payment_state: string | null;
            order_delivery_state: string | null;
            delivery_companyname: string | null;
            delivery_department: string | null;
            delivery_salutation: string | null;
            delivery_firstname: string | null;
            delivery_lastname: string | null;
            delivery_street: string | null;
            delivery_number: string | null;
            delivery_zip: string | null;
            delivery_state: string | null;
            delivery_city: string | null;
            delivery_country: string | null;
            invoice_companyname: string | null;
            invoice_department: string | null;
            invoice_salutation: string | null;
            invoice_firstname: string | null;
            invoice_lastname: string | null;
            invoice_street: string | null;
            invoice_number: string | null;
            invoice_zip: string | null;
            invoice_state: string | null;
            invoice_city: string | null;
            invoice_country: string | null;
            note: string | null;
            email: string | null;
            phone: string | null;
            attributes?: Array<object> | null;
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "update_order_details");
            formData.append('id_order', id_order.toString());
            if (id_payment_method) formData.append('id_payment_method', id_payment_method.toString());
            if (id_delivery_method) formData.append('id_delivery_method', id_delivery_method.toString());
            if (order_state) formData.append('order_state', order_state);
            if (order_payment_state) formData.append('order_payment_state', order_payment_state);
            if (order_delivery_state) formData.append('order_delivery_state', order_delivery_state);
            if (delivery_companyname) formData.append('delivery_companyname', delivery_companyname);
            if (delivery_department) formData.append('delivery_department', delivery_department);
            if (delivery_salutation) formData.append('delivery_salutation', delivery_salutation);
            if (delivery_firstname) formData.append('delivery_firstname', delivery_firstname);
            if (delivery_lastname) formData.append('delivery_lastname', delivery_lastname);
            if (delivery_street) formData.append('delivery_street', delivery_street);
            if (delivery_number) formData.append('delivery_number', delivery_number);
            if (delivery_zip) formData.append('delivery_zip', delivery_zip);
            if (delivery_state) formData.append('delivery_state', delivery_state);
            if (delivery_city) formData.append('delivery_city', delivery_city);
            if (delivery_country) formData.append('delivery_country', delivery_country);
            if (invoice_companyname) formData.append('invoice_companyname', invoice_companyname);
            if (invoice_department) formData.append('invoice_department', invoice_department);
            if (invoice_salutation) formData.append('invoice_salutation', invoice_salutation);
            if (invoice_firstname) formData.append('invoice_firstname', invoice_firstname);
            if (invoice_lastname) formData.append('invoice_lastname', invoice_lastname);
            if (invoice_street) formData.append('invoice_street', invoice_street);
            if (invoice_number) formData.append('invoice_number', invoice_number);
            if (invoice_zip) formData.append('invoice_zip', invoice_zip);
            if (invoice_state) formData.append('invoice_state', invoice_state);
            if (invoice_city) formData.append('invoice_city', invoice_city);
            if (invoice_country) formData.append('invoice_country', invoice_country);
            if (note) formData.append('note', note);
            if (email) formData.append('email', email);
            if (phone) formData.append('phone', phone);
            if (attributes) formData.append('attributes', JSON.stringify(attributes));


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
        {
            session
        }: {
            session: string;
        }
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
        {
            id_order,
            language = this.default_language
        }: {
            id_order: number;
            language?: string;
        }
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
        {
            session
        }: {
            session: string;
        }
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
        {
            id_order
        }: {
            id_order: number;
        }
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
        {
            id_order,
            args = {}
        }: {
            id_order: number;
            args?: object;
        }
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
