import ErrorObject from "../helpers/errorObject";
import {AxiosInstance} from "axios";
import Sleekshop from "../index";

export default class ShopObjects {

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
            let getProductDetails = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_product_details",
                id_product: id_product,
                language: language,
                country: country,
                needed_attributes: needed_attributes,
            });
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
            let getContentDetails = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_content_details",
                id_content: id_content,
                language: language,
            });
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
            let seoGetProductDetails = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "seo_get_product_details",
                permalink: permalink,
                country: country,
                needed_attributes: needed_attributes,
            });
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
            let seoGetContentDetails = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "seo_get_content_details",
                permalink: permalink,
            });
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
            let createProduct = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "create_product",
                class: class_,
                name: name,
                shop_active: shop_active,
                attributes: attributes,
                metadata: metadata,
                seo: seo,
                availability: availability,
            });
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
            let updateProduct = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "update_product",
                id_product: id_product,
                name: name,
                shop_active: shop_active,
                attributes: attributes,
                metadata: metadata,
                seo: seo,
                availability: availability,
            });
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
            let createVariation = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "create_variation",
                id_product: id_product,
                name: name,
                shop_active: shop_active,
                attributes: attributes,
                metadata: metadata,
                seo: seo,
                availability: availability,
            });
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
            let deleteProduct = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "delete_product",
                id_product: id_product,
            });
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
            let updateContent = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "update_content",
                id_content: id_content,
                name: name,
                shop_active: shop_active,
                attributes: attributes,
                seo: seo,
            });
            return updateContent.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
