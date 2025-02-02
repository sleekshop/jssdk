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
import checkSecretKey from "../helpers/secretKey";

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
        this.default_language = parentObj.default_language || "de_DE";
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
        {
            id_parent,
            language = null,
        }:
        {
            id_parent: number,
            language?: string | null;
        }
    ): Promise<ICategories | object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_categories");
            formData.append('id_parent', id_parent.toString());
            formData.append('language', language);

            let getCategoriesResponse = await this.instance.post('', formData);
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
        {
            id_category,
            language = null,
            country = 'DE',
            order_columns = [],
            order = 'ASC',
            left_limit = 0,
            right_limit = 0,
            needed_attributes = []
        }:
        {
            id_category: number,
            language?: string | null;
            country?: string,
            order_columns?: Array<string>,
            order?: string,
            left_limit?: number,
            right_limit?: number,
            needed_attributes?: Array<string>
        }
    ): Promise<IProductsInCategory | object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', 'get_products_in_category');
            formData.append('language', language);
            formData.append('id_category', id_category.toString());
            formData.append('country', country);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order', order);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let getProductsInCategory = await this.instance.post('', formData);

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
        {
            id_category,
            language = null,
            order_columns = [],
            order = 'ASC',
            left_limit = 0,
            right_limit = 0,
            needed_attributes = [],
        }:
        {
            id_category: number,
            language?: string | null;
            order_columns?: Array<string>,
            order?: string,
            left_limit?: number,
            right_limit?: number,
            needed_attributes?: Array<string>
        }
    ): Promise<IContentsInCategory | object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', 'get_contents_in_category');
            formData.append('language', language);
            formData.append('id_category', id_category.toString());
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order', order);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let getContentsInCategory = await this.instance.post('', formData);
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
        {
            id_category,
            language = null,
            country = 'DE',
            order_columns = [],
            order = 'ASC',
            left_limit = 0,
            right_limit = 0,
            needed_attributes = [],
        }: {
            id_category: number,
            language?: string | null;
            country?: string,
            order_columns?: Array<string>,
            order?: string,
            left_limit?: number,
            right_limit?: number,
            needed_attributes?: Array<string>,
        }
    ): Promise<IShopobjectsInCategory | object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', 'get_shopobjects_in_category');
            formData.append('language', language);
            formData.append('id_category', id_category.toString());
            formData.append('country', country);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order', order);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let getShopobjectsInCategory = await this.instance.post('', formData);
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
     * @param {Number} depth
     * @param {Array} needed_attributes
     * @return {IDumpCategory} Object of products in category.
     * @public
     */
    public async dumpCategory(
        {
            id_category,
            language = null,
            country = 'DE',
            order_columns = ['prio'],
            order = 'ASC',
            left_limit = 0,
            right_limit = 0,
            depth = 0,
            needed_attributes = [],
        }: {
            id_category: number,
            language?: string | null;
            country?: string,
            order_columns?: Array<string>,
            order?: string,
            left_limit?: number,
            right_limit?: number,
            depth?: number,
            needed_attributes?: Array<string>,
        }
    ): Promise<IDumpCategory | object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', 'dump_category');
            formData.append('language', language);
            formData.append('id_category', id_category.toString());
            formData.append('country', country);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order', order);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('depth', depth.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let dumpCategory = await this.instance.post('', formData);
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
        {
            permalink,
            language = null,
            country = 'DE',
            order_columns = [],
            order = 'ASC',
            left_limit = 0,
            right_limit = 0,
            needed_attributes = [],
        }:
        {
            permalink: string,
            language?: string | null;
            country?: string,
            order_columns?: Array<string>,
            order?: string,
            left_limit?: number,
            right_limit?: number,
            needed_attributes?: Array<string>,
        }
    ): Promise<object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', 'seo_get_products_in_category');
            formData.append('language', language);
            formData.append('permalink', permalink);
            formData.append('country', country);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order', order);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let seoGetProductsInCategory = await this.instance.post('', formData);
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
        {
            permalink,
            order_columns = [],
            order = 'ASC',
            left_limit = 0,
            right_limit = 0,
            needed_attributes = [],
        }:
        {
            permalink: string,
            order_columns?: Array<string>,
            order?: string,
            left_limit?: number,
            right_limit?: number,
            needed_attributes?: Array<string>,
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', 'seo_get_contents_in_category');
            formData.append('permalink', permalink);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order', order);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let seoGetContentsInCategory = await this.instance.post('', formData);
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
        {
            permalink,
            order_columns = [],
            order = 'ASC',
            left_limit = 0,
            right_limit = 0,
            needed_attributes = [],
        }:
        {
            permalink: string,
            order_columns?: Array<string>,
            order?: string,
            left_limit?: number,
            right_limit?: number,
            needed_attributes?: Array<string>,
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', 'seo_get_shopobjects_in_category');
            formData.append('permalink', permalink);
            formData.append('order_columns', JSON.stringify(order_columns));
            formData.append('order', order);
            formData.append('left_limit', left_limit.toString());
            formData.append('right_limit', right_limit.toString());
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let seoGetShopobjectsInCategory = await this.instance.post('', formData);
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
        {
            id_parent,
            name,
            labels = {},
            seo = {},
        }:
        {
            id_parent: number,
            name: string,
            labels?: object,
            seo?: object,
        }
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', 'create_category');
            formData.append('id_parent', id_parent.toString());
            formData.append('name', name);
            formData.append('labels', JSON.stringify(labels));
            formData.append('seo', JSON.stringify(seo));

            let createCategory = await this.instance.post('', formData);
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
        {
            id_parent,
            name,
            labels = null,
            attributes = null,
            seo = null,
        }:
        {
            id_parent: number,
            name: string,
            labels?: object | null,
            attributes?: object | null,
            seo?: object | null,
        }
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', 'update_category');
            formData.append('id_parent', id_parent.toString());
            formData.append('name', name);
            if (labels) formData.append('labels', JSON.stringify(labels));
            if (attributes) formData.append('attributes', JSON.stringify(attributes));
            if (seo) formData.append('seo', JSON.stringify(seo));

            let updateCategory = await this.instance.post('', formData);
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
        {id_category}: { id_category: number, }
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', 'delete_category');
            formData.append('id_category', id_category.toString());

            let deleteCategory = await this.instance.post('', formData);
            return deleteCategory.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
