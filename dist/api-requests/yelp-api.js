import { RESTDataSource } from '@apollo/datasource-rest';
export class YelpApi extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = 'https://api.yelp.com/v3';
    }
}
//# sourceMappingURL=yelp-api.js.map