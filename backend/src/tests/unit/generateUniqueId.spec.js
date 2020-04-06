const generateUniqueId = require('../../utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('shold generate unique ID', () =>{
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});