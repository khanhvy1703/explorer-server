import fetch from 'node-fetch';
const mock = [
    {
        restaurantId: '2242423',
        name: 'fsdfdsfs',
        rating: '4.5',
        price: '$$$$'
    },
];
export const resolvers = {
    Query: {
        restaurants: async () => {
            //const data = await fetch(`${baseURL}/businesses/search?location=NYC`).then(res => res.json())
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await res.json();
            console.log(data);
            return mock;
        }
    }
};
//# sourceMappingURL=restaurants.js.map