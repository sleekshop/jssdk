import Sleekshop from "../src";

describe("addToCart", () => {
    it("should add an item to the cart", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );

        const cart = await sleekshop.cart.addToCart(
            {
                session: 'asdasd',
                id_shopobject: 12345,
                element_type: 'PRODUCT_GR',
                quantity: 1,
                price_field: 'price',
                name_field: 'name',
                description_field: 'short_description',
                attributes: [
                    {
                        lang: "de_DE",
                        name: "Farbe",
                        value: "Rot"
                    }
                ]
            }
        );

        expect(cart).toHaveProperty("object", "cart");
    });
});
