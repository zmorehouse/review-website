import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'test',
      type: 'ui',
      admin: {
        components: {
          Field: '../components/BannerComponent', 
        },
      },
    },
  ],
};
