import ErrorObject from "../helpers/errorObject";
import {AxiosInstance} from "axios";
import Sleekshop from "../index";

export default class Aggregation {

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
     * aggregate
     * @method aggregate
     * @param {Object} pipe
     * @return {Object} Object of aggregated data.
     * @public
     */
    public async aggregate(
        pipe: object
    ): Promise<object> {

        try {
            let aggregate = await this.instance.post('', {
                licence_username: this.licence_username,
                licence_password: this.licence_password,
                request: "aggregate",
                pipe: pipe,
            });
            return aggregate.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
