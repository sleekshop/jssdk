import Sleekshop from "../src";

describe("deleteProduct", () => {
    it("should delete product", async () => {

        const sleekshop = new Sleekshop(
            "https://hansabau.sleekshop.net/srv/service/", // Sleekshop API URL
            "hansabau_giNsV8U6uvIRWsi6j0xr", // licence username
            "vmPtmNP3SOXmncLp5JwM", // licence password
            "z0zKxwyB0Kr8vBlQQ0Hd" // optional licence secret key - required for some API calls
        );
        const deleteProduct = await sleekshop.shopObjects.deleteProduct(
            1253
        );
        console.log(deleteProduct);

        expect(deleteProduct);
    });
});
