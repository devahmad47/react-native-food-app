import { defineType} from 'sanity'

export default defineType({
  name: 'Dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: rule=>rule.required()
 },
 {
  name: 'description',
  title: 'Dish Description',
  type: 'string',
  validation: rule=>rule.required()
},
{
  name: 'image',
  title: 'Dish Image',
  type: 'image',
},
{
    name: 'price',
    title: 'Dish Price in USD',
    type: 'number',
}
   
  ],
})
