import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Classes {

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
     * Get ClassDetails
     * @method getClassDetails
     * @param {Number} id_class
     * @param {String} language
     * @return {object} Object of class details.
     * @public
     */
    public async getClassDetails(
        id_class: number,
        language: string = this.default_language,
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "get_class_details");
            formData.append('id_class', id_class.toString());
            formData.append('language', language);

            let getClassDetailsResponse = await this.instance.post('', formData);
            return getClassDetailsResponse.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * Create Class
     * @method createClass
     * @param {String} name
     * @param {String} type
     * @return {object} Object of created class.
     * @public
     */
    public async createClass(
        name: string,
        type: string,
    ): Promise<object> {
        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "create_class");
            formData.append('name', name);
            formData.append('type', type);

            let createClassResponse = await this.instance.post('', formData);
            return createClassResponse.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

    /**
     * Delete Class
     * @method deleteClass
     * @param {Number} id_class
     * @return {object} Object of deleted class.
     * @public
     */
    public async deleteClass(
        id_class: number,
    ): Promise<object> {
        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "delete_class");
            formData.append('id_class', id_class.toString());

            let deleteClassResponse = await this.instance.post('', formData);
            return deleteClassResponse.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

    /**
     * Create Class Attributes
     * @method createClassAttributes
     * @param {Number} id_class
     * @param {Array<Object>} attributes
     * @return {object} Object of created class attributes.
     * @public
     */
    public async createClassAttributes(
        id_class: number,
        attributes: Array<object>,
    ): Promise<object> {
        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "create_class_attributes");
            formData.append('id_class', id_class.toString());
            formData.append('attributes', JSON.stringify(attributes));

            let createClassAttributesResponse = await this.instance.post('', formData);
            return createClassAttributesResponse.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

    /**
     * Delete Class Attributes
     * @method deleteClassAttributes
     * @param {Number} id_class
     * @param {Array<String>} attributes
     * @return {object} Object of deleted class attributes.
     * @public
     */
    public async deleteClassAttributes(
        id_class: number,
        attributes: Array<string>,
    ): Promise<object> {
        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "delete_class_attributes");
            formData.append('id_class', id_class.toString());
            formData.append('attributes', JSON.stringify(attributes));

            let deleteClassAttributesResponse = await this.instance.post('', formData);
            return deleteClassAttributesResponse.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }



}
