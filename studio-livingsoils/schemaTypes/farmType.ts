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
    defineField({
      name: 'coordinates',
      title: 'Coordonnées GPS',
      type: 'geopoint',
      options: {
        // Allows entering latitude/longitude with a map UI in Studio
      },
      validation: (rule) =>
        rule.custom((v) => {
          // Optional field; if present, must have both lat and lng
          if (!v) return true
          const hasLat = typeof v.lat === 'number' && !Number.isNaN(v.lat)
          const hasLng = typeof v.lng === 'number' && !Number.isNaN(v.lng)
          return (hasLat && hasLng) || 'Lat/Lng invalides'
        }),
    }),
  ],
})
