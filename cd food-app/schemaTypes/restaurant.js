 import { defineType} from 'sanity'


export default defineType({ 
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule=>rule.required()
 },
 {
  name: 'description',
  title: 'Description',
  type: 'string',
  validation: rule=>rule.max(200)
},
{
  name: 'image',
  title: 'Image of the restaurant',
  type: 'image',
},
{
    name: 'lat',
    title: 'latitude of the restaurant',
    type: 'number',
},
{
    name: 'lng',
    title: 'longitude of the restaurant',
    type: 'number',
},
{
    name: 'address',
    title: 'Address of the restaurant',
    type: 'string',
    validation: rule=>rule.required(),
},
{
    name: 'rating',
    title: 'Rating of the restaurant',
    type: 'number',
    validation: rule=>rule.required().min(1).max(5).error("Please Enter a Value bewtween 1 to 5"),
},
{
    name: 'review',
    title: 'Reviews',
    type: 'string',
},
{
    name: 'type',
    title: 'Category',
    type: 'reference',
    //pairing relationship with other schemas 
    to:[{type: "category"}],
    validation: rule=>rule.required(),
},
{
    name: 'dishes',
    title: 'Dishes',
    type: 'array',
    //pairing relationship with other schemas 
    of:[{type: "reference", to:[{type:"Dish"}]}],
},
  ],
}
)