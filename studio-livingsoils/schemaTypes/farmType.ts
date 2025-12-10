import {defineField, defineType} from 'sanity'

export const farmType = defineType({
  name: 'farm',
  title: 'Ferme',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de la ferme',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Localisation',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
