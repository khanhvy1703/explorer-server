import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import { getDay, getHours, getMinutes } from 'date-fns'

dotenv.config();
const { YELP_API_KEY, YELP_BASE_URL } = process.env
const YELP_RESTAURANTS_BUSINESS_SEARCH = '/businesses/search?term=restaurant&'
const DEFAULT_LIMIT = 10
const YELP_URL = `${YELP_BASE_URL}${YELP_RESTAURANTS_BUSINESS_SEARCH}limit=${DEFAULT_LIMIT}&`

export function formatYelpApisTime(time) {
  const hours = time.substring(0, 2)
  const minutes = time.substring(2, 4)
  return hours === '00' ? `00:00 (Next day)` : `${hours}:${minutes}`
}

export function checkIfOpening(open) {
  const now = Date.now()
  const currentDay = getDay(now)
  const currentHour = getHours(now)
  const currentMinutes = getMinutes(now)
  const {start, end} = open[currentDay]
  const startHours = Number(start.substring(0, 2))
  const startMinutes = Number(start.substring(2, 4))
  const endHours = Number(end.substring(0, 2))
  const endMinutes = Number(end.substring(2, 4))
  if (startHours === currentHour) {
    return startMinutes <= currentMinutes
  } else if (endHours === currentHour) {
    return endMinutes >= currentMinutes
  } else {
    return startHours < currentHour && endHours > currentHour
  }
}

export const resolvers = { 
  Query: {
    RestaurantsByLocation: async (parent, args) => {
      const {location1, location2 } = args
      console.log(YELP_URL)
      try {
        let restaurants = []
        let url;
        if (location1) {
          url = `${YELP_URL}location=${location1}`
        } else if (location2) {
          const {latitude, longitude} = location2
          url = `${YELP_URL}latitude=${latitude}&longitude=${longitude}`
        }
        const res = await fetch(url, {
          method: 'GET',
          headers: {'Authorization': 'Bearer ' + YELP_API_KEY}
        }).then(res => res.json())
        const data = res.businesses
        data.forEach(element => {
          const {id, alias, name, image_url, rating, price, review_count, categories, transactions, is_closed, url } = element
          return restaurants.push({
            restaurantId: id,
            alias,
            name,
            image: image_url,
            rating,
            price,
            yelpReview: review_count,
            numReview: 0,
            cuisine: categories.map(element => element.title),
            transactions,
            isPermanentlyClosed: !!is_closed,
            yelpURL: url
          })
        });
        return restaurants  
      } catch (error) {
        console.log(error);
        return null
      }
    },

    RestaurantDetail: async (parent, args) => {
      const {restaurantAlias} = args
      const response = await fetch(`${YELP_BASE_URL}/businesses/${restaurantAlias}`, {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + YELP_API_KEY}
      }).then(res => res.json())
      const {
        id, 
        alias,
        name, 
        image_url, 
        rating, 
        price, 
        review_count, 
        categories, 
        transactions, 
        is_closed, 
        display_phone,
        hours,
        photos,
        location, 
        url
      } = response
      const {display_address} = location
      const {open} = hours[0]
      const isOpening = checkIfOpening(open)
      const formatLocation = display_address.reduce((accumulator, current) => accumulator + ' ' + current, '')
      const getOpenHours = hours.map((element) => {
        return {
          hoursType: element.hours_type,
          dailyOpenHours: element.open.map(hours => {
            const {day, start, end, is_overnight} = hours
            return {
              day,
              start: formatYelpApisTime(start),
              end: formatYelpApisTime(end),
              isOvernight: !!is_overnight
            }
          })
        }
      })
      return {
        restaurantId: id,
        alias,
        name,
        image: image_url,
        rating,
        price,
        yelpReview: review_count,
        numReview: 0,
        cuisine: categories.map(element => element.title),
        transactions,
        isPermanentlyClosed: !!is_closed,
        isCurrentlyOpen: isOpening,
        location: formatLocation,
        photos,
        openHours: getOpenHours,
        phone: display_phone,
        yelpURL: url
      }
    }
  }
};