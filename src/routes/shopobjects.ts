import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class ShopObjects {

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
     * get_product_details
     * @method getProductDetails
     * @param {Number} id_product
     * @param {String} language
     * @param {String} country
     * @param {Array<String>} needed_attributes
     * @return {Object} Object of product details.
     * @public
     */
    public async getProductDetails(
        id_product: number,
        language: string = this.default_language,
        country: string = "DE",
        needed_attributes: Array<string> = []
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_product_details");
            formData.append('id_product', id_product.toString());
            formData.append('language', language);
            formData.append('country', country);
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let getProductDetails = await this.instance.post('', formData);
            return getProductDetails.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_content_details
     * @method getContentDetails
     * @param {Number} id_content
     * @param {String} language
     * @return {Object} Object of content details.
     * @public
     */
    public async getContentDetails(
        id_content: number,
        language: string = this.default_language
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_content_details");
            formData.append('id_content', id_content.toString());
            formData.append('language', language);

            let getContentDetails = await this.instance.post('', formData);
            return getContentDetails.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * seo_get_product_details
     * @method seoGetProductDetails
     * @param {String} permalink
     * @param {String} country
     * @param {Array<String>} needed_attributes
     * @return {Object} Object of product details.
     * @public
     */
    public async seoGetProductDetails(
        permalink: string,
        country: string = "DE",
        needed_attributes: Array<string> = []
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "seo_get_product_details");
            formData.append('permalink', permalink);
            formData.append('country', country);
            formData.append('needed_attributes', JSON.stringify(needed_attributes));

            let seoGetProductDetails = await this.instance.post('', formData);
            return seoGetProductDetails.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * seo_get_content_details
     * @method seoGetContentDetails
     * @param {String} permalink
     * @return {Object} Object of content details.
     * @public
     */
    public async seoGetContentDetails(
        permalink: string
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "seo_get_content_details");
            formData.append('permalink', permalink);

            let seoGetContentDetails = await this.instance.post('', formData);
            return seoGetContentDetails.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

    /**
     * create_product
     * @method createProduct
     * @param {String} class_ escaped since class is a reserved keyword
     * @param {String} name
     * @param {Number} shop_active
     * @param {Object} attributes
     * @param {Object} metadata
     * @param {Object} seo
     * @param {Object} availability
     * @return {Object} Object of product details.
     * @public
     */
    public async createProduct(
        class_: string,
        name: string,
        shop_active: number = 1,
        attributes: object = {},
        metadata: object = {},
        seo: object = {},
        availability: object = {}
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "create_product");
            formData.append('class', class_);
            formData.append('name', name);
            formData.append('shop_active', shop_active.toString());
            formData.append('attributes', JSON.stringify(attributes));
            formData.append('metadata', JSON.stringify(metadata));
            formData.append('seo', JSON.stringify(seo));
            formData.append('availability', JSON.stringify(availability));

            let createProduct = await this.instance.post('', formData);
            return createProduct.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

    /**
     * update_product
     * @method updateProduct
     * @param {Number} id_product
     * @param {String} name
     * @param {Number} shop_active
     * @param {Object} attributes
     * @param {Object} metadata
     * @param {Object} seo
     * @param {Object} availability
     * @return {Object} Object of product details.
     * @public
     */
    public async updateProduct(
        id_product: number,
        name: string,
        shop_active: number = 1,
        attributes: object = {},
        metadata: object = {},
        seo: object = {},
        availability: object = {}
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "update_product");
            formData.append('id_product', id_product.toString());
            formData.append('name', name);
            formData.append('shop_active', shop_active.toString());
            formData.append('attributes', JSON.stringify(attributes));
            formData.append('metadata', JSON.stringify(metadata));
            formData.append('seo', JSON.stringify(seo));
            formData.append('availability', JSON.stringify(availability));

            let updateProduct = await this.instance.post('', formData);
            return updateProduct.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * create_variation
     * @method createVariation
     * @param {Number} id_product
     * @param {String} name
     * @param {Number} shop_active
     * @param {Object} attributes
     * @param {Object} metadata
     * @param {Object} seo
     * @param {Object} availability
     * @return {Object} Object of variation details.
     * @public
     */
    public async createVariation(
        id_product: number,
        name: string,
        shop_active: number = 1,
        attributes: object = {},
        metadata: object = {},
        seo: object = {},
        availability: object = {}
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "create_variation");
            formData.append('id_product', id_product.toString());
            formData.append('name', name);
            formData.append('shop_active', shop_active.toString());
            formData.append('attributes', JSON.stringify(attributes));
            formData.append('metadata', JSON.stringify(metadata));
            formData.append('seo', JSON.stringify(seo));
            formData.append('availability', JSON.stringify(availability));

            let createVariation = await this.instance.post('', formData);
            return createVariation.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

    /**
     * delete_product
     * @method deleteProduct
     * @param {Number} id_product
     * @return {Object} Object of product details.
     * @public
     */
    public async deleteProduct(
        id_product: number
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', 'delete_product');
            formData.append('id_product', id_product.toString());

            let deleteProduct = await this.instance.post('', formData);
            return deleteProduct.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

    /**
     * update_content
     * @method updateContent
     * @param {Number} id_content
     * @param {String} name
     * @param {Number} shop_active
     * @param {Object} attributes
     * @param {Object} seo
     * @return {Object} Object of content details.
     * @public
     */
    public async updateContent(
        id_content: number,
        name: string,
        shop_active: number = 1,
        attributes: object = {},
        seo: object = {}
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "update_content");
            formData.append('id_content', id_content.toString());
            formData.append('name', name);
            formData.append('shop_active', shop_active.toString());
            formData.append('attributes', JSON.stringify(attributes));
            formData.append('seo', JSON.stringify(seo));

            let updateContent = await this.instance.post('', formData);
            return updateContent.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
