import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";
import checkSecretKey from "../helpers/secretKey";

export default class Search {

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
        this.default_language = parentObj.default_language || "de_DE";
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
        {
            constraint = {},
            language = null,
            country = "DE",
            order_columns = [],
            order_type = "ASC",
            left_limit = 0,
            right_limit = 0,
            needed_attributes = []
        }: {
            constraint?: object;
            language?: string | null;
            country?: string;
            order_columns?: Array<string>;
            order_type?: string;
            left_limit?: number;
            right_limit?: number;
            needed_attributes?: Array<string>;
        }
    ): Promise<object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "search_products");
            formData.append('constraint', JSON.stringify(constraint));
            formData.append('language', language);
            formData.append('country', country);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order_type', order_type);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let searchProducts = await this.instance.post('', formData);
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
        {
            constraint = {},
            language = null,
            order_columns = [],
            order_type = "ASC",
            left_limit = 0,
            right_limit = 0,
            needed_attributes = []
        }: {
            constraint?: object;
            language?: string | null;
            order_columns?: Array<string>;
            order_type?: string;
            left_limit?: number;
            right_limit?: number;
            needed_attributes?: Array<string>;
        }
    ): Promise<object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "search_contents");
            formData.append('constraint', JSON.stringify(constraint));
            formData.append('language', language);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order_type', order_type);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let searchContents = await this.instance.post('', formData);
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
        {
            field,
            constraint = {},
            language = null,
        }: {
            field: string;
            constraint?: object;
            language?: string | null;
        }
    ): Promise<object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "search_distinct_products");
            formData.append('field', field);
            formData.append('constraint', JSON.stringify(constraint));
            formData.append('language', language);

            let searchDistinctProducts = await this.instance.post('', formData);
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
        {
            constraint = {},
            language = null,
            left_limit = 0,
            right_limit = 0
        }: {
            constraint?: object;
            language?: string | null;
            left_limit?: number;
            right_limit?: number;
        }
    ): Promise<object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "search_orders");
            formData.append('constraint', JSON.stringify(constraint));
            formData.append('language', language);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());

            let searchOrders = await this.instance.post('', formData);
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
        {
            constraint = {},
            order_columns = [],
            order = "ASC",
            left_limit = 0,
            right_limit = 0,
            needed_attributes = []
        }: {
            constraint?: object;
            order_columns?: Array<string>;
            order?: string;
            left_limit?: number;
            right_limit?: number;
            needed_attributes?: Array<string>;
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "search_users");
            formData.append('constraint', JSON.stringify(constraint));
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order', order);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let searchUsers = await this.instance.post('', formData);
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
        {
            constraint = {},
            language = null,
            order_columns = [],
            order_type = "",
            left_limit = 0,
            right_limit = 0,
            needed_attributes = []
        }: {
            constraint?: object;
            language?: string | null;
            order_columns?: Array<string>;
            order_type?: string;
            left_limit?: number;
            right_limit?: number;
            needed_attributes?: Array<string>;
        }
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "search_warehouse_entities");
            formData.append('constraint', JSON.stringify(constraint));
            formData.append('language', language);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order_type', order_type);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let searchWarehouseEntities = await this.instance.post('', formData);
            return searchWarehouseEntities.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

}
