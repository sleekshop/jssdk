import Sleekshop from "../src";

describe("deleteProduct", () => {
    it("should delete product", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );
        const deleteProduct = await sleekshop.shopObjects.deleteProduct(
            1253
        );
        console.log(deleteProduct);

        expect(deleteProduct);
    });
});
