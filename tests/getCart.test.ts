import Sleekshop from "../src";

describe("getCart", () => {
    it("should get cart object", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );

        const cart = await sleekshop.cart.getCart(
            {
                session: 'asdasd',
            }
        );

        expect(cart).toHaveProperty("object", "cart");
    });
});
