import ErrorObject from "../helpers/errorObject";
import { ISession } from "../types/sessions";
import {AxiosInstance} from "axios";
import Sleekshop from "../index";

export default class Sessions {

    protected licence_username: string;
    protected licence_password: string;
    protected instance: AxiosInstance;

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
            let sessionResponse = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_new_session",
            });
            return sessionResponse.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
