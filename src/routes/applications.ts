import ErrorObject from "../helpers/errorObject";
import {AxiosInstance} from "axios";
import Sleekshop from "../index";

export default class Applications {

    protected licence_username: string;
    protected licence_password: string;
    protected default_language: string;
    protected instance: AxiosInstance;

    constructor(parentObj: Sleekshop) {
        this.licence_username = parentObj.licence_username;
        this.licence_password = parentObj.licence_password;
        this.instance = parentObj.instance;
        this.default_language = parentObj.default_language;
    }

    /**
     * application_api_call
     * @method applicationApiCall
     * @param {String} application
     * @param {String} app_request
     * @param {Object} args
     * @return {Object} Object of application api call.
     */
    public async applicationApiCall(
        application: string,
        app_request: string,
        args: object
    ): Promise<object> {

        try {
            let applicationApiCall = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "application_api_call",
                application: application,
                app_request: app_request,
                args: args,
            });
            return applicationApiCall.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
