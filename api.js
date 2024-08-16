import client from "./sanity";

// Function to fetch featured restaurants
export const getFeaturedRestaurants = () => {
  return client.fetch(`
    *[_type == 'feature']{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...,
        },
        type->{
          name
        }
      }
    }
  `);
};

// Function to fetch categories
export const getCategories = () => {
  return client.fetch(`
    *[_type == 'category']
  `);
};

// Function to fetch featured restaurants by ID
export const getFeaturedRestaurantsById = (id) => {
  return client.fetch(`
    *[_type == 'feature' && _id == $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
          ...,
        },
        type->{
          name
        }
      }
    }[0]
  `, { id });
};
