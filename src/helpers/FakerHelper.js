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
    barChartData() {
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
    pieChartData() {
        return {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: ['#41b883', '#35495e', '#b85141', '#5e4535'],
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Green',
                'Blue',
                'Red'
            ]
        }
    },
    getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
}
export default FakerHelper
