import { type SchemaTypeDefinition } from 'sanity'

// Import your schema files
import mostRead from './MostRead'
import mostCited from './mostCited'
import editorialBoard from './editorialBoard'
import volume from './volume'
import issue from './issue'

// Export schema object
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    mostRead,
    mostCited,
    editorialBoard,
    volume,
    issue,
  ],
}
