import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Cart {

    protected licence_username: string;
    protected licence_password: string;
    protected default_language: string;
    protected instance: XiorInstance;

    constructor(parentObj: Sleekshop) {
        this.licence_username = parentObj.licence_username;
        this.licence_password = parentObj.licence_password;
        this.instance = parentObj.instance;
        this.default_language = parentObj.default_language || "de_DE";
    }

    /**
     * add_to_cart
     * @method addToCart
     * @param {String} session
     * @param {Number} id_shopobject
     * @param {String} element_type
     * @param {Number} id_parent_element
     * @param {Number} quantity
     * @param {String} price_field
     * @param {String} name_field
     * @param {String} description_field
     * @param {String} language
     * @param {String} country
     * @return {Object} Object of product details.
     * @public
     */
    public async addToCart(
        {
            session,
            id_shopobject,
            element_type,
            id_parent_element = 0,
            quantity = 1,
            price_field = "price",
            name_field = "name",
            description_field = "short_description",
            language = null,
            country = "DE"
        }:
        {
            session: string,
            id_shopobject: number,
            element_type: string,
            id_parent_element?: number,
            quantity?: number,
            price_field?: string,
            name_field?: string,
            description_field?: string,
            language?: string | null;
            country?: string
        }
    ): Promise<object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "add_to_cart");
            formData.append('session', session);
            formData.append('id_shopobject', id_shopobject.toString());
            formData.append('element_type', element_type);
            formData.append('id_parent_element', id_parent_element.toString());
            formData.append('quantity', quantity.toString());
            formData.append('price_field', price_field);
            formData.append('name_field', name_field);
            formData.append('description_field', description_field);
            formData.append('language', language);
            formData.append('country', country);

            let addToCart = await this.instance.post('', formData);
            return addToCart.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * sub_from_cart
     * @method subFromCart
     * @param {String} session
     * @param {Number} id_element
     * @return {Object} Object of product details.
     * @public
     */

    public async subFromCart(
        {
            session,
            id_element
        }:
        {
            session: string,
            id_element: number
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "sub_from_cart");
            formData.append('session', session);
            formData.append('id_element', id_element.toString());

            let subFromCart = await this.instance.post('', formData);
            return subFromCart.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * del_from_cart
     * @method delFromCart
     * @param {String} session
     * @param {Number} id_element
     * @return {Object} Object of product details.
     * @public
     */
    public async delFromCart(
        {
            session,
            id_element
        }:
        {
            session: string,
            id_element: number
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "del_from_cart");
            formData.append('session', session);
            formData.append('id_element', id_element.toString());

            let delFromCart = await this.instance.post('', formData);
            return delFromCart.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * clear_cart
     * @method clearCart
     * @param {String} session
     * @return {Object} Object of product details.
     * @public
     */
    public async clearCart(
        {session}: { session: string }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "clear_cart");
            formData.append('session', session);

            let clearCart = await this.instance.post('', formData);
            return clearCart.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_cart
     * @method getCart
     * @param {String} session
     * @return {Object} Object of product details.
     * @public
     */
    public async getCart(
        {session}: { session: string }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_cart");
            formData.append('session', session);

            let getCart = await this.instance.post('', formData);
            return getCart.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }


}
