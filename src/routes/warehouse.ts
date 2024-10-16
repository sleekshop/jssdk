import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";
import checkSecretKey from "../helpers/secretKey";

export default class Warehouse {

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
     * create_warehouse_entity
     * @method createWarehouseEntity
     * @param {String} class_
     * @param {String} name
     * @param {Number} id_manufacturer
     * @param {Object} attributes
     * @param {Object} metadata
     * @return {Object} Object of created warehouse entity.
     */
    public async createWarehouseEntity(
        class_: string,
        name: string,
        id_manufacturer: number,
        attributes: object,
        metadata: object
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "create_warehouse_entity");
            formData.append('class', class_);
            formData.append('name', name);
            formData.append('id_manufacturer', id_manufacturer.toString());
            formData.append('attributes', JSON.stringify(attributes));
            formData.append('metadata', JSON.stringify(metadata));

            let createWarehouseEntity = await this.instance.post('', formData);
            return createWarehouseEntity.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * update_warehouse_entity
     * @method updateWarehouseEntity
     * @param {Number} id_warehouse_entity
     * @param {String} name
     * @param {Number} id_manufacturer
     * @param {Object} attributes
     * @param {Object} metadata
     * @return {Object} Object of updated warehouse entity.
     */
    public async updateWarehouseEntity(
        id_warehouse_entity: number,
        name: string,
        id_manufacturer: number,
        attributes: object,
        metadata: object
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "update_warehouse_entity");
            formData.append('id_warehouse_entity', id_warehouse_entity.toString());
            formData.append('name', name);
            formData.append('id_manufacturer', id_manufacturer.toString());
            formData.append('attributes', JSON.stringify(attributes));
            formData.append('metadata', JSON.stringify(metadata));

            let updateWarehouseEntity = await this.instance.post('', formData);
            return updateWarehouseEntity.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * delete_warehouse_entity
     * @method deleteWarehouseEntity
     * @param {Number} id_warehouse_entity
     * @return {Object} Object of deleted warehouse entity.
     */
    public async deleteWarehouseEntity(
        id_warehouse_entity: number
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "delete_warehouse_entity");
            formData.append('id_warehouse_entity', id_warehouse_entity.toString());

            let deleteWarehouseEntity = await this.instance.post('', formData);
            return deleteWarehouseEntity.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * inventory_place
     * @method inventoryPlace
     * @param {String} storage
     * @param {String} element_number
     * @param {Number} quantity
     * @param {String} note
     * @return {Object} Object of inventory place.
     */
    public async inventoryPlace(
        storage: string,
        element_number: string,
        quantity: number,
        note: string
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "inventory_place");
            formData.append('storage', storage);
            formData.append('element_number', element_number);
            formData.append('quantity', quantity.toString());
            formData.append('note', note);

            let inventoryPlace = await this.instance.post('', formData);
            return inventoryPlace.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * inventory_take
     * @method inventoryTake
     * @param {String} storage
     * @param {String} element_number
     * @param {Number} quantity
     * @param {String} note
     * @return {Object} Object of inventory take.
     */
    public async inventoryTake(
        storage: string,
        element_number: string,
        quantity: number,
        note: string
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "inventory_take");
            formData.append('storage', storage);
            formData.append('element_number', element_number);
            formData.append('quantity', quantity.toString());
            formData.append('note', note);

            let inventoryTake = await this.instance.post('', formData);
            return inventoryTake.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * add_binding
     * @method addBinding
     * @param {Number} id_product
     * @param {String} element_number
     * @param {Number} quantity Default is 1.
     * @return {Object} Object of added binding.
     */
    public async addBinding(
        id_product: number,
        element_number: string,
        quantity: number = 1
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "add_binding");
            formData.append('id_product', id_product.toString());
            formData.append('element_number', element_number);
            formData.append('quantity', quantity.toString());

            let addBinding = await this.instance.post('', formData);
            return addBinding.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * delete_binding
     * @method deleteBinding
     * @param {Number} id_product
     * @param {String} element_number
     * @return {Object} Object of deleted binding.
     */
    public async deleteBinding(
        id_product: number,
        element_number: string
    ): Promise<object> {

        checkSecretKey(this.licence_secret_key);

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('licence_secret_key', this.licence_secret_key);
            formData.append('request', "delete_binding");
            formData.append('id_product', id_product.toString());
            formData.append('element_number', element_number);

            let deleteBinding = await this.instance.post('', formData);
            return deleteBinding.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
