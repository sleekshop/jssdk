// Desc: Error object to be used in API response

export default class ErrorObject {

    public genericError(data: Object): Object {
        return {
            object: "error",
            data
        };
    }

}
