import Sleekshop from "../src";

describe("getProductsInCategory", () => {
    it("should return products in category", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );
        const getProductsInCategory = await sleekshop.categories.getProductsInCategory({
            id_category: 191111
        });

        expect(getProductsInCategory).toHaveProperty("object", "products_in_category");
    });
});
