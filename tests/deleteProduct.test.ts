import Sleekshop from "../src";

describe("deleteProduct", () => {
    it("should delete product", async () => {

        const sleekshop = new Sleekshop(
            "https://test.sleekshop.net/srv/service/",
            "test_asd",
            "asd",
            "asd" // optional licence secret key - required for some API calls
        );
        const deleteProduct = await sleekshop.shopObjects.deleteProduct(
            1250
        );
        console.log(deleteProduct);

        expect(deleteProduct);
    });
});
