import Sleekshop from "../src";

describe("getNewSession", () => {
    it("should return new Session", async () => {

        const sleekshop = new Sleekshop(
            "https://test.sleekshop.net/srv/service/",
            "test_asd",
            "asd",
            "asd"
        );


        const session = await sleekshop.sessions.getNewSession();
        console.log(session);

        expect(session).toHaveProperty("object", "session");
    });
});
