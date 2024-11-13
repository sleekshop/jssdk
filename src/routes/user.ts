import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class User {

    protected licence_username: string;
    protected licence_password: string;
    protected default_language: string;
    protected instance: XiorInstance;

    constructor(parentObj: Sleekshop) {
        this.licence_username = parentObj.licence_username;
        this.licence_password = parentObj.licence_password;
        this.instance = parentObj.instance;
        this.default_language = parentObj.default_language || "de_DE";
    }

    /**
     * register_user
     * @method registerUser
     * @param {String} username
     * @param {String} passwd1
     * @param {String} passwd2
     * @param {String} email
     * @param {String} language
     * @param class_
     * @return {Object} Object of product details.
     * @public
     */

    public async registerUser(
        {
            username,
            passwd1,
            passwd2,
            email,
            language = null,
            class_ = "user"
        }:
        {
            username: string,
            passwd1: string,
            passwd2: string,
            email: string,
            language?: string | null;
            class_?: string
        }
    ): Promise<object> {

        try {
            language = language ?? this.default_language;
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "register_user");
            formData.append('language', language);
            formData.append('args', JSON.stringify({
                username: username,
                passwd1: passwd1,
                passwd2: passwd2,
                email: email,
                class: class_
            }));

            let registerUser = await this.instance.post('', formData);
            return registerUser.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * verify_user
     * @method verifyUser
     * @param {Number} id_user
     * @param {String} session_id
     * @return {Object} Object of product details.
     * @public
     */
    public async verifyUser(
        {
            id_user,
            session_id
        }:
        {
            id_user: number,
            session_id: string
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "verify_user");
            formData.append('id_user', id_user.toString());
            formData.append('session_id', session_id);

            let verifyUser = await this.instance.post('', formData);
            return verifyUser.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * login_user
     * @method loginUser
     * @param {String} username
     * @param {String} password
     * @param {String} session
     * @return {Object} Object of product details.
     * @public
     */
    public async loginUser(
        {
            username,
            password,
            session
        }:
        {
            username: string,
            password: string,
            session: string
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "login_user");
            formData.append('username', username);
            formData.append('password', password);
            formData.append('session', session);

            let loginUser = await this.instance.post('', formData);
            return loginUser.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * logout_user
     * @method logoutUser
     * @param {String} session
     * @return {Object} Object of product details.
     * @public
     */
    public async logoutUser(
        {session}: { session: string }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "logout_user");
            formData.append('session', session);

            let logoutUser = await this.instance.post('', formData);
            return logoutUser.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * set_user_password
     * @method setUserPassword
     * @param {String} session
     * @param {String} old_passwd
     * @param {String} new_passwd1
     * @param {String} new_passwd2
     * @return {Object} Object of product details.
     * @public
     */
    public async setUserPassword(
        {
            session,
            old_passwd,
            new_passwd1,
            new_passwd2
        }:
        {
            session: string,
            old_passwd: string,
            new_passwd1: string,
            new_passwd2: string
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "set_user_password");
            formData.append('session', session);
            formData.append('old_passwd', old_passwd);
            formData.append('new_passwd1', new_passwd1);
            formData.append('new_passwd2', new_passwd2);

            let setUserPassword = await this.instance.post('', formData);
            return setUserPassword.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * reset_user_password
     * @method resetUserPasswordInit
     * @param {String} email
     * @return {Object} Object of product details.
     * @public
     */
    public async resetUserPasswordInit(
        {email}: { email: string }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "reset_user_password");
            formData.append('args', JSON.stringify({
                email: email
            }));

            let resetUserPassword = await this.instance.post('', formData);
            return resetUserPassword.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * reset_user_password
     * @method resetUserPasswordSuccess
     * @param {String} session_id
     * @param {Number} id_user
     * @param {String} new_passwd1
     * @param {String} new_passwd2
     * @return {Object} Object of product details.
     * @public
     */
    public async resetUserPasswordSuccess(
        {
            session_id,
            id_user,
            new_passwd1,
            new_passwd2
        }:
        {
            session_id: string,
            id_user: number,
            new_passwd1: string,
            new_passwd2: string
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "reset_user_password");
            formData.append('args', JSON.stringify({
                session_id: session_id,
                id_user: id_user,
                new_passwd1: new_passwd1,
                new_passwd2: new_passwd2
            }));
            let resetUserPassword = await this.instance.post('', formData);
            return resetUserPassword.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_user_orders
     * @method getUserOrders
     * @param {String} session
     * @return {Object} Object of product details.
     * @public
     */
    public async getUserOrders(
        {session}: { session: string }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_user_orders");
            formData.append('session', session);

            let getUserOrders = await this.instance.post('', formData);
            return getUserOrders.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_user_data
     * @method getUserData
     * @param {String} session
     * @return {Object} Object of product details.
     * @public
     */
    public async getUserData(
        {session}: { session: string }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_user_data");
            formData.append('session', session);

            let getUserData = await this.instance.post('', formData);
            return getUserData.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * get_user_by_id
     * @method getUserById
     * @param {Number} id_user
     * @return {Object} Object of product details.
     * @public
     */
    public async getUserById(
        {id_user}: { id_user: number }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "get_user_by_id");
            formData.append('id_user', id_user.toString());

            let getUserById = await this.instance.post('', formData);
            return getUserById.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * set_user_data
     * @method setUserData
     * @param {String} session
     * @param {Object} attributes
     * @return {Object} Object of product details.
     * @public
     */
    public async setUserData(
        {
            session,
            attributes
        }:
        {
            session: string,
            attributes: object
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "set_user_data");
            formData.append('session', session);
            formData.append('attributes', JSON.stringify(attributes));

            let setUserData = await this.instance.post('', formData);
            return setUserData.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

    /**
     * update_user_data
     * @method updateUserData
     * @param {Number} id_user
     * @param {Object} attributes
     * @return {Object} Object of product details.
     * @public
     */
    public async updateUserData(
        {
            id_user,
            attributes
        }:
        {
            id_user: number,
            attributes: object
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "update_user_data");
            formData.append('id_user', id_user.toString());
            formData.append('attributes', JSON.stringify(attributes));

            let updateUserData = await this.instance.post('', formData);
            return updateUserData.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }
    }

    /**
     * instant_login
     * @method instantLogin
     * @param {String} token
     * @param {String} application_token
     * @return {Object} Object of product details.
     * @public
     */
    public async instantLogin(
        {
            token,
            application_token
        }:
        {
            token: string,
            application_token: string
        }
    ): Promise<object> {

        try {
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "instant_login");
            formData.append('token', token);
            formData.append('application_token', application_token);

            let instantLogin = await this.instance.post('', formData);
            return instantLogin.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
