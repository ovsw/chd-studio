export default {
  name: 'contentImage',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('missing image')
    },
    {
      name: 'alt',
      title: 'ALT (Image Alternative Text)',
      type: 'string',
      validation: Rule => Rule.required().error('missing ALT text for image')
    },
    {
      name: 'caption',
      title: 'Image Caption',
      type: 'string'
    },
    {
      name: 'align',
      title: 'align',
      type: 'string',
      validation: Rule => Rule.required().error('missing image'),
      options: {
        list: [
          {
            title: 'Left',
            value: 'left'
          },
          {
            title: 'Right',
            value: 'left'
          },
          {
            title: 'Center',
            value: 'center'
          }
        ]
      }
    }
  ],
  preview: {
    select: {
      caption: 'caption',
      alt: 'alt',
      media: 'image',
      align: 'align'
    },
    prepare (selection) {
      const {media, alt, caption, align} = selection
      const titleText = caption || alt
      return {
        title: `[${align}] ${titleText}`,
        media: media
      }
    }
  }
}
