import Sleekshop from "../src";

describe("getNewSession", () => {
    it("should return new Session", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );

        const session = await sleekshop.sessions.getNewSession();

        expect(session).toHaveProperty("object", "session");
    });
});
