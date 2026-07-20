import { defineType } from 'sanity';

export default defineType({
  name: 'issue',
  title: 'Issue',
  type: 'document',
  fields: [
    { name: 'issueNumber', title: 'Issue Number', type: 'number' },
    { name: 'pdf', title: 'PDF File', type: 'file' },
    { name: 'volume', title: 'Volume', type: 'reference', to: [{ type: 'volume' }] }
  ]
});
