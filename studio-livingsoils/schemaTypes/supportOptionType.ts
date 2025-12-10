import {defineField, defineType} from 'sanity'

export const supportOptionType = defineType({
  name: 'supportOption',
  title: 'Option de Soutien',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'url',
    }),
    defineField({
      name: 'buttonText',
      title: 'Texte du bouton',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 0,
    }),
  ],
})
