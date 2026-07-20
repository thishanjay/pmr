import { defineType } from 'sanity';

export default defineType({
  name: 'mostCited',
  title: 'Most Cited',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'citationCount', title: 'Citation Count', type: 'number' },
    { name: 'url', title: 'URL', type: 'url' }
  ]
});
