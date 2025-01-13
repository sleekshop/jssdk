import Sleekshop from "../src";

describe("searchOrders", () => {
    it("should return orders", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );

        const searchOrders = await sleekshop.search.searchOrders(
            {
                constraint: [],
                left_limit: 0,
                right_limit: 5,
                order_columns: [
                    "main.id"
                ],
                order_type: "DESC"
            }
        );
        console.log(searchOrders);
        expect(searchOrders).toHaveProperty("object", "search_orders_result");
    });
});
