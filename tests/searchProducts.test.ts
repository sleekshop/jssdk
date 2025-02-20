import Sleekshop from "../src";

describe("searchProducts", () => {
    it("should return products via search", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );

        const searchProducts = await sleekshop.search.searchProducts(
            {
                constraint: [],
                left_limit: 0,
                right_limit: 5,
                order_columns: [
                    "main.id"
                ],
                order_type: "DESC",
                needed_attributes: [
                    ["name"],
                    ["categories"]
                ]
            }
        );
        expect(searchProducts).toHaveProperty("object", "search_products_result");
    });
});
