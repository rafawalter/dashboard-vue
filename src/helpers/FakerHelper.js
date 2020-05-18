let faker = require('faker');

let FakerHelper = {
    fakeKpis: function(size = 5) {
        let fakeKpis = []
        for (let i = 0; i < size; i++) {
            let label = faker.commerce.department()
            fakeKpis.push({
                label,
                value: faker.commerce.price(),
                icon: `https://source.unsplash.com/50x50/?logo,${label},${i}`,
            })
        }
        console.debug(fakeKpis)
        return fakeKpis
    }
}
export default FakerHelper
