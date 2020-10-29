// asyncTest
require('should');
const {get} = require("../testApp");

describe('asyncTest', () => {
    it('get(userUrl)', async () => {
        let usersUrl = 'https://jsonplaceholder.typicode.com/users';
        let users = await get(usersUrl);
        users.length.should.be.equal(10);
        users[0].name.should.be.equal('Leanne Graham');
    });
});
