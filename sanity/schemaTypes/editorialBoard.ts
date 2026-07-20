import { defineType } from 'sanity';

export default defineType({
  name: 'editorialBoard',
  title: 'Editorial Board',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' }
  ]
});
