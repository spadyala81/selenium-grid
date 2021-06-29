const example = require('../lib/app');

describe("test block", () => {

    it("open the goolge page", async () => {

        const result = await example();
        expect(result).toBeTruthy();
    })

})