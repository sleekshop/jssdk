import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Server {

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
     * get_status
     * @method getStatus
     * @return {Object} Object of status.
     */
    public async getStatus(): Promise<object> {

        try {
            let getStatus = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_status",
            });
            return getStatus.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * create_channel
     * @method createChannel
     * @param {String} name
     * @param {String} description
     * @param {Number} shop_active
     * @param {String} server_output 'json' | 'xml'
     * @return {Object} Object of created channel.
     */
    public async createChannel(
        name: string,
        description: string,
        shop_active: number,
        server_output: string = 'json'
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "create_channel");
            formData.append('name', name);
            formData.append('description', description);
            formData.append('shop_active', shop_active.toString());
            formData.append('server_output', server_output);

            let createChannel = await this.instance.post('', formData);
            return createChannel.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
