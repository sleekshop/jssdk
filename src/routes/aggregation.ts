import ErrorObject from "../helpers/errorObject";
import {XiorInstance} from "xior";
import Sleekshop from "../index";

export default class Aggregation {

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
            const formData = new FormData();
            formData.append('licence_username', this.licence_username);
            formData.append('licence_password', this.licence_password);
            formData.append('request', "aggregate");
            formData.append('pipe', JSON.stringify(pipe));

            let aggregate = await this.instance.post('', formData);
            return aggregate.data;
        } catch (error) {
            return new ErrorObject().genericError(error);
        }

    }

}
