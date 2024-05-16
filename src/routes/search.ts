import ErrorObject from "../helpers/errorObject";
import {AxiosInstance} from "axios";
import Sleekshop from "../index";

export default class Search {

    protected licence_username: string;
    protected licence_password: string;
    protected licence_secret_key: string;
    protected default_language: string;
    protected instance: AxiosInstance;

    constructor(parentObj: Sleekshop) {
        this.licence_username = parentObj.licence_username;
        this.licence_password = parentObj.licence_password;
        this.licence_secret_key = parentObj.licence_secret_key;
        this.instance = parentObj.instance;
        this.default_language = parentObj.default_language;
    }

    /**
     * search_products
     * @method searchProducts
     * @param {Object} constraint
     * @param {String} language
     * @param {String} country
     * @param {Array<String>} order_columns
     * @param {String} order_type
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array<String>} needed_attributes
     * @return {Object} Object of product details.
     * @public
     */
    public async searchProducts(
        constraint: object = {},
        language: string = this.default_language,
        country: string = "DE",
        order_columns: Array<string> = [],
        order_type: string = "ASC",
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = []
    ): Promise<object> {

        try {
            let searchProducts = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "search_products",
                constraint: constraint,
                language: language,
                country: country,
                order_columns: order_columns,
                order_type: order_type,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return searchProducts.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * search_contents
     * @method searchContents
     * @param {Object} constraint
     * @param {String} language
     * @param {Array<String>} order_columns
     * @param {String} order_type
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array<String>} needed_attributes
     * @return {Object} Object of content details.
     * @public
     */
    public async searchContents(
        constraint: object = {},
        language: string = this.default_language,
        order_columns: Array<string> = [],
        order_type: string = "ASC",
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = []
    ): Promise<object> {

        try {
            let searchContents = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "search_contents",
                constraint: constraint,
                language: language,
                order_columns: order_columns,
                order_type: order_type,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return searchContents.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * search_distinct_products
     * @method searchDistinctProducts
     * @param {String} field
     * @param {Object} constraint
     * @param {String} language
     * @return {Object} Object of distinct product details.
     * @public
     */
    public async searchDistinctProducts(
        field: string,
        constraint: object = {},
        language: string = this.default_language
    ): Promise<object> {

        try {
            let searchDistinctProducts = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "search_distinct_products",
                field: field,
                constraint: constraint,
                language: language,
            });
            return searchDistinctProducts.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * search_orders
     * @method searchOrders
     * @param {Object} constraint
     * @param {String} language
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @return {Object} Object of order details.
     * @public
     */
    public async searchOrders(
        constraint: object = {},
        language: string = this.default_language,
        left_limit: number = 0,
        right_limit: number = 0
    ): Promise<object> {

        try {
            let searchOrders = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "search_orders",
                constraint: constraint,
                language: language,
                left_limit: left_limit,
                right_limit: right_limit,
            });
            return searchOrders.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * search_users
     * @method searchUsers
     * @param {Object} constraint
     * @param {Array<String>} order_columns
     * @param {String} order
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array<String>} needed_attributes
     * @return {Object} Object of user details.
     * @public
     */
    public async searchUsers(
        constraint: object = {},
        order_columns: Array<string> = [],
        order: string = "ASC",
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = []
    ): Promise<object> {

        try {
            let searchUsers = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "search_users",
                constraint: constraint,
                order_columns: order_columns,
                order: order,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return searchUsers.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * search_warehouse_entities
     * @method searchWarehouseEntities
     * @param {Object} constraint
     * @param {String} language
     * @param {Array<String>} order_columns
     * @param {String} order_type
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array<String>} needed_attributes
     */
    public async searchWarehouseEntities(
        constraint: object = {},
        language: string = this.default_language,
        order_columns: Array<string> = [],
        order_type: string = "",
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = []
    ): Promise<object> {

        try {
            let searchWarehouseEntities = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "search_warehouse_entities",
                constraint: constraint,
                language: language,
                order_columns: order_columns,
                order_type: order_type,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return searchWarehouseEntities.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

}
