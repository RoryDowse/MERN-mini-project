const typeDefs = `
    type Tech {
        _id: ID! // non-null string (required)
        name: String!
    }
    
    type Matchup {
        _id: ID!
        tech1: String!
        tech2: String!
        tech1_votes: Int! // 32-bit signed integer
        tech2_votes: Int!
    }

    type Query { // Read data on the database
        tech: [Tech] // List of technologies
        matchups(_id: String!): [Matchup] // List of matchups
    }

    type Mutation { // Write data to the database
        createMatchup(tech1: String!, tech2: String!): Matchup
        createVote(_id: String!, techNum: Int!): Matchup
    }
    `;

export default typeDefs;