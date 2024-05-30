import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";
import {
    ICategories,
    IContentsInCategory,
    IDumpCategory,
    IProductsInCategory,
    IShopobjectsInCategory
} from "../types/categories";

export default class Categories {

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
     * Get Categories
     * @method getCategories
     * @param {Number} id_parent
     * @param {String} language
     * @return {ISession} Object of session with either an existing or new session.
     * @public
     */
    public async getCategories(
        id_parent: number,
        language: string = this.default_language,
    ): Promise<ICategories | object> {

        try {
            let getCategoriesResponse = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_categories",
                id_parent: id_parent,
                language: language,
            });
            return getCategoriesResponse.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * Get products in category
     * @method getProductsInCategory
     * @param {Number} id_category
     * @param {String} language
     * @param {String} country
     * @param {Array} order_columns
     * @param {String} order
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array} needed_attributes
     * @return {IProductsInCategory} Object of products in category.
     * @public
     */
    public async getProductsInCategory(
        id_category: number,
        language: string = this.default_language,
        country: string = 'DE',
        order_columns: Array<string> = [],
        order: string = 'ASC',
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = [],
    ): Promise<IProductsInCategory | object> {

        try {

            let getProductsInCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: 'get_products_in_category',
                language: language,
                id_category: id_category,
                country: country,
                order_columns: order_columns,
                order: order,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });

            return getProductsInCategory.data;

        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * Get contents in category
     * @method getContentsInCategory
     * @param {Number} id_category
     * @param {String} language
     * @param {Array} order_columns
     * @param {String} order
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array} needed_attributes
     * @return {IContentsInCategory} Object of products in category.
     * @public
     */
    public async getContentsInCategory(
        id_category: number,
        language: string = this.default_language,
        order_columns: Array<string> = [],
        order: string = 'ASC',
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = [],
    ): Promise<IContentsInCategory | object> {

        try {

            let getContentsInCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: 'get_contents_in_category',
                language: language,
                id_category: id_category,
                order_columns: order_columns,
                order: order,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return getContentsInCategory.data;

        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * Get shopobjects in category
     * @method getShopobjectsInCategory
     * @param {Number} id_category
     * @param {String} language
     * @param {String} country
     * @param {Array} order_columns
     * @param {String} order
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array} needed_attributes
     * @return {IShopobjectsInCategory} Object of products in category.
     * @public
     */
    public async getShopobjectsInCategory(
        id_category: number,
        language: string = this.default_language,
        country: string = 'DE',
        order_columns: Array<string> = [],
        order: string = 'ASC',
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = [],
    ): Promise<IShopobjectsInCategory | object> {

        try {
            let getShopobjectsInCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: 'get_shopobjects_in_category',
                language: language,
                id_category: id_category,
                country: country,
                order_columns: order_columns,
                order: order,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return getShopobjectsInCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * dump_category
     * @method dumpCategory
     * @param {Number} id_category
     * @param {String} language
     * @param {String} country
     * @param {Array} order_columns
     * @param {String} order
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array} needed_attributes
     * @return {IDumpCategory} Object of products in category.
     * @public
     */
    public async dumpCategory(
        id_category: number,
        language: string = 'de_DE',
        country: string = 'DE',
        order_columns: Array<string> = ['prio'],
        order: string = 'ASC',
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = [],
    ): Promise<IDumpCategory | object> {

        try {
            let dumpCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: 'dump_category',
                language: language,
                id_category: id_category,
                country: country,
                order_columns: order_columns,
                order: order,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return dumpCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    // TODO: Add Interface
    /**
     * seo_get_products_in_category
     * @method seoGetProductsInCategory
     * @param {String} permalink
     * @param {String} language
     * @param {String} country
     * @param {Array} order_columns
     * @param {String} order
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array} needed_attributes
     * @return {Object} Object of products in category.
     * @public
     */
    public async seoGetProductsInCategory(
        permalink: string,
        language: string = this.default_language,
        country: string = 'DE',
        order_columns: Array<string> = [],
        order: string = 'ASC',
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = [],
    ): Promise<object> {

        try {
            let seoGetProductsInCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: 'seo_get_products_in_category',
                language: language,
                permalink: permalink,
                country: country,
                order_columns: order_columns,
                order: order,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return seoGetProductsInCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    // TODO: Add Interface
    /**
     * seo_get_contents_in_category
     * @method seoGetContentsInCategory
     * @param {String} permalink
     * @param {Array} order_columns
     * @param {String} order
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array} needed_attributes
     * @return {Object} Object of products in category.
     * @public
     */
    public async seoGetContentsInCategory(
        permalink: string,
        order_columns: Array<string> = [],
        order: string = 'ASC',
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = [],
    ): Promise<object> {

        try {
            let seoGetContentsInCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: 'seo_get_contents_in_category',
                permalink: permalink,
                order_columns: order_columns,
                order: order,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return seoGetContentsInCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    // TODO: Add Interface
    /**
     * seo_get_shopobjects_in_category
     * @method seoGetShopobjectsInCategory
     * @param {String} permalink
     * @param {Array} order_columns
     * @param {String} order
     * @param {Number} left_limit
     * @param {Number} right_limit
     * @param {Array} needed_attributes
     * @return {Object} Object of products in category.
     * @public
     */
    public async seoGetShopobjectsInCategory(
        permalink: string,
        order_columns: Array<string> = [],
        order: string = 'ASC',
        left_limit: number = 0,
        right_limit: number = 0,
        needed_attributes: Array<string> = [],
    ): Promise<object> {

        try {
            let seoGetShopobjectsInCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: 'seo_get_shopobjects_in_category',
                permalink: permalink,
                order_columns: order_columns,
                order: order,
                left_limit: left_limit,
                right_limit: right_limit,
                needed_attributes: needed_attributes,
            });
            return seoGetShopobjectsInCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    // TODO: Add Interface
    /**
     * create_category
     * @method createCategory
     * @param {Number} id_parent
     * @param {String} name
     * @param {Object} labels
     * @param {Object} seo
     * @return {Object} Object of products in category.
     * @public
     */
    public async createCategory(
        id_parent: number,
        name: string,
        labels: object = {},
        seo: object = {},
    ): Promise<object> {

        try {
            let createCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: 'create_category',
                id_parent: id_parent,
                name: name,
                labels: labels,
                seo: seo,
            });
            return createCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    // TODO: Add Interface
    /**
     * update_category
     * @method updateCategory
     * @param {Number} id_parent
     * @param {String} name
     * @param {Object} labels
     * @param {Object} attributes
     * @param {Object} seo
     * @return {Object} Object of products in category.
     * @public
     */
    public async updateCategory(
        id_parent: number,
        name: string,
        labels: object = {},
        attributes: object = {},
        seo: object = {},
    ): Promise<object> {

        try {
            let updateCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: 'update_category',
                id_parent: id_parent,
                name: name,
                labels: labels,
                attributes: attributes,
                seo: seo,
            });
            return updateCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    // TODO: Add Interface
    /**
     * delete_category
     * @method deleteCategory
     * @param {Number} id_category
     * @return {Object} Object of products in category.
     * @public
     */
    public async deleteCategory(
        id_category: number,
    ): Promise<object> {

        try {
            let deleteCategory = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: 'delete_category',
                id_category: id_category,
            });
            return deleteCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
