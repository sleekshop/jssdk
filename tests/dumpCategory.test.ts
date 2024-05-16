import Sleekshop from "../src";

describe("dumpCategory", () => {
    it("should return dump category", async () => {

        const sleekshop = new Sleekshop(
            "https://test.sleekshop.net/srv/service/",
            "test_asd",
            "asd",
            "asd"
        );
        const dumpCategory = await sleekshop.categories.dumpCategory(
            191111,
        );
        console.log(dumpCategory);

        expect(dumpCategory).toHaveProperty("object", "category_dump");
    });
});
