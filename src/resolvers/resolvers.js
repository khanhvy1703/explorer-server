import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config();
const { YELP_API_KEY, BASE_URL } = process.env
export const resolvers = { 
  Query: {
    restaurants: async (parent, args) => {
      const {location} = args
      let restaurants = []
      let category = []
      const res = await fetch(`${BASE_URL}/businesses/search?location=${location}`, {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + YELP_API_KEY}
      }).then(res => res.json())
      const data = res.businesses
      data.forEach(element => {
        const {id, name, image_url, rating, price, review_count, categories, transactions } = element
        categories.forEach(element => {
          category.push(element.title)
        })
        return restaurants.push({
          restaurantId: id,
          name,
          image: image_url,
          rating,
          price,
          yelpReview: review_count,
          numReview: 0,
          categories: category,
          transactions,
        })
      });
      return restaurants    
    }
  }
};