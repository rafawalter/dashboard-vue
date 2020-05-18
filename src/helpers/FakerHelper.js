let faker = require('faker');

let FakerHelper = {
    kpis(size = 5) {
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
    },
    chartData() {
        return {
            labels: ['jan', 'feb'],
            datasets: [
                {
                    label: '2019',
                    backgroundColor: '#41b883',
                    data: [this.getRandomInt(), this.getRandomInt()]
                }, {
                    label: '202',
                    backgroundColor: '#35495e',
                    data: [this.getRandomInt(), this.getRandomInt()]
                }
            ]
        }
    },
    getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
}
export default FakerHelper
