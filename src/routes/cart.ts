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
        this.default_language = parentObj.default_language;
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
        session: string,
        id_shopobject: number,
        element_type: string,
        id_parent_element: number = 0,
        quantity: number = 1,
        price_field: string = "price",
        name_field: string = "name",
        description_field: string,
        language: string = this.default_language,
        country: string = "DE"
    ): Promise<object> {

        try {
            let addToCart = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "add_to_cart",
                session: session,
                id_shopobject: id_shopobject,
                element_type: element_type,
                id_parent_element: id_parent_element,
                quantity: quantity,
                price_field: price_field,
                name_field: name_field,
                description_field: description_field,
                language: language,
                country: country,
            });
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
        session: string,
        id_element: number
    ): Promise<object> {

        try {
            let subFromCart = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "sub_from_cart",
                session: session,
                id_element: id_element,
            });
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
        session: string,
        id_element: number
    ): Promise<object> {

        try {
            let delFromCart = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "del_from_cart",
                session: session,
                id_element: id_element,
            });
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
        session: string
    ): Promise<object> {

        try {
            let clearCart = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "clear_cart",
                session: session,
            });
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
        session: string
    ): Promise<object> {

        try {
            let getCart = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_cart",
                session: session,
            });
            return getCart.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }


}
