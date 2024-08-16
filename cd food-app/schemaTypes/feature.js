import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Featured Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant Name',
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
    name: 'restaurant',
    title: 'Restaurant',
    type: 'array',
    //pairing relationship with other schemas 
    of:[{type: "reference", to:[{type:"restaurant"}]}],
},
   
  ],
})
