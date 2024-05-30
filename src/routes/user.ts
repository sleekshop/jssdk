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
        this.default_language = parentObj.default_language;
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
        username: string,
        passwd1: string,
        passwd2: string,
        email: string,
        language: string = this.default_language,
        class_: string = "user"
    ): Promise<object> {

        if (passwd1 !== passwd2) return new ErrorObject().genericError({message: "Passwords do not match"});

        try {
            let registerUser = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "register_user",
                language: language,
                args: {
                    username: username,
                    passwd1: passwd1,
                    passwd2: passwd2,
                    email: email,
                    class: class_
                }
            });
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
        id_user: number,
        session_id: string
    ): Promise<object> {

        try {
            let verifyUser = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "verify_user",
                id_user: id_user,
                session_id: session_id,
            });
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
        username: string,
        password: string,
        session: string
    ): Promise<object> {

        try {
            let loginUser = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "login_user",
                username: username,
                password: password,
                session: session,
            });
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
        session: string
    ): Promise<object> {

        try {
            let logoutUser = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "logout_user",
                session: session,
            });
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
        session: string,
        old_passwd: string,
        new_passwd1: string,
        new_passwd2: string
    ): Promise<object> {

        if (new_passwd1 !== new_passwd2) return new ErrorObject().genericError({message: "Passwords do not match"});

        try {
            let setUserPassword = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "set_user_password",
                session: session,
                old_passwd: old_passwd,
                new_passwd1: new_passwd1,
                new_passwd2: new_passwd2,
            });
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
        email: string
    ): Promise<object> {

        try {
            let resetUserPassword = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "reset_user_password",
                args: {
                    email: email
                }
            });
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
        session_id: string,
        id_user: number,
        new_passwd1: string,
        new_passwd2: string
    ): Promise<object> {

        if (new_passwd1 !== new_passwd2) return new ErrorObject().genericError({message: "Passwords do not match"});

        try {
            let resetUserPassword = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "reset_user_password",
                args: {
                    session_id: session_id,
                    id_user: id_user,
                    new_passwd1: new_passwd1,
                    new_passwd2: new_passwd2
                }
            });
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
        session: string
    ): Promise<object> {

        try {
            let getUserOrders = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_user_orders",
                session: session,
            });
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
        session: string
    ): Promise<object> {

        try {
            let getUserData = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_user_data",
                session: session,
            });
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
        id_user: number
    ): Promise<object> {

        try {
            let getUserById = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "get_user_by_id",
                id_user: id_user,
            });
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
        session: string,
        attributes: object
    ): Promise<object> {

        try {
            let setUserData = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "set_user_data",
                session: session,
                attributes: attributes
            });
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
        id_user: number,
        attributes: object
    ): Promise<object> {

        try {
            let updateUserData = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "update_user_data",
                id_user: id_user,
                attributes: attributes
            });
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
        token: string,
        application_token: string
    ): Promise<object> {

        try {
            let instantLogin = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "instant_login",
                token: token,
                application_token: application_token
            });
            return instantLogin.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
