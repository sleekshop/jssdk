import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

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

        try {
            let createWarehouseEntity = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "create_warehouse_entity",
                class: class_,
                name: name,
                id_manufacturer: id_manufacturer,
                attributes: attributes,
                metadata: metadata,
            });
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

        try {
            let updateWarehouseEntity = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "update_warehouse_entity",
                id_warehouse_entity: id_warehouse_entity,
                name: name,
                id_manufacturer: id_manufacturer,
                attributes: attributes,
                metadata: metadata,
            });
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

        try {
            let deleteWarehouseEntity = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "delete_warehouse_entity",
                id_warehouse_entity: id_warehouse_entity,
            });
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

        try {
            let inventoryPlace = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "inventory_place",
                storage: storage,
                element_number: element_number,
                quantity: quantity,
                note: note,
            });
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

        try {
            let inventoryTake = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "inventory_take",
                storage: storage,
                element_number: element_number,
                quantity: quantity,
                note: note,
            });
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

        try {
            let addBinding = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "add_binding",
                id_product: id_product,
                element_number: element_number,
                quantity: quantity,
            });
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

        try {
            let deleteBinding = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                licence_secret_key: this.licence_secret_key,
                request: "delete_binding",
                id_product: id_product,
                element_number: element_number,
            });
            return deleteBinding.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
