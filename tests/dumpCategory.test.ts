import Sleekshop from "../src";

describe("dumpCategory", () => {
    it("should return dump category", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );
        const dumpCategory = await sleekshop.categories.dumpCategory({
            id_category: 191111
        });
        console.log(dumpCategory);

        expect(dumpCategory).toHaveProperty("object", "category_dump");
    });
});
