import Sleekshop from "../src";

describe("registerUser", () => {
    it("should fail to register a user", async () => {

        const sleekshop = new Sleekshop(
            "https://yourinstance.sleekshop.net/srv/service/", // Sleekshop API URL
            "yourinstance_jYkL7fPmQw2eVtNgHs3S", // licence username
            "jYkL7fPmQw2eVtNgHs3S", // licence password
            "jYkL7fPmQw2eVtNgHs3S" // optional licence secret key - required for some API calls
        );

        const session = await sleekshop.user.registerUser(
            {
                email: "hallo@sleekshop.io",
                passwd1: "test",
                passwd2: "test2",
                username: "hallo@sleekshop.io",
            }
        );
        console.log(session);

        expect(session).toHaveProperty("object", "session");
    });
});
