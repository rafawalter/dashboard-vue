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
        return fakeKpis
    },
    barChartData() {
        return {
            labels: ['1st', '2nd', '3rd'],
            datasets: [
                {
                    label: '2019',
                    backgroundColor: '#41b883',
                    data: [faker.random.number(15), faker.random.number(15), faker.random.number(15)]
                }, {
                    label: '2020',
                    backgroundColor: '#35495e',
                    data: [faker.random.number(15), faker.random.number(15), faker.random.number(15)]
                }
            ]
        }
    },
    lineChartData() {
        return {
            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ],
            datasets: [
                {
                    label: '2018',
                    backgroundColor: '#41b883',
                    data: [
                        faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15),
                        faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15)
                    ],
                }, {
                    label: '2019',
                    backgroundColor: '#35495e',
                    data: [
                        faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15),
                        faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15)
                    ],
                }, {
                    label: '2020',
                    backgroundColor: '#b85141',
                    data: [
                        faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15),
                        faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15), faker.random.number(15)
                    ],
                }
            ]
        }
    },
    pieChartData() {
        return {
            datasets: [{
                data: [faker.random.number(15), faker.random.number(15), faker.random.number(15)],
                backgroundColor: ['#41b883', '#35495e', '#b85141', '#5e4535'],
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Green',
                'Blue',
                'Red'
            ]
        }
    }
}
export default FakerHelper
