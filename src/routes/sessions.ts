import ErrorObject from "../helpers/errorObject";
import { ISession } from "../types/sessions";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Sessions {

    protected licence_username: string;
    protected licence_password: string;
    protected instance: XiorInstance;

    constructor(parentObj: Sleekshop) {
        this.licence_username = parentObj.licence_username;
        this.licence_password = parentObj.licence_password;
        this.instance = parentObj.instance;
    }

    /**
     * Get new Session.
     *
     * @method getNewSession
     * @return {ISession} Object of session with either an existing or new session.
     * @public
     */
    public async getNewSession(): Promise<ISession | object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_new_session");

            let sessionResponse = await this.instance.post('', formData);
            return sessionResponse.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
