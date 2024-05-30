import Sleekshop from "../src";

describe("getNewSession", () => {
    it("should return new Session", async () => {

        const sleekshop = new Sleekshop(
            "https://hansabau.sleekshop.net/srv/service/", // Sleekshop API URL
            "hansabau_giNsV8U6uvIRWsi6j0xr", // licence username
            "vmPtmNP3SOXmncLp5JwM", // licence password
            "z0zKxwyB0Kr8vBlQQ0Hd"
        );


        const session = await sleekshop.sessions.getNewSession();
        console.log(session);

        expect(session).toHaveProperty("object", "session");
    });
});
