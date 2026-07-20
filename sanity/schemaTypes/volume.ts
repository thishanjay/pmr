import { defineType } from 'sanity';

export default defineType({
  name: 'volume',
  title: 'Volume',
  type: 'document',
  fields: [
    { name: 'volumeNumber', title: 'Volume Number', type: 'number' },
    { name: 'year', title: 'Year', type: 'number' }
  ]
});
