import { createClient } from "contentful";

const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN
  })

export default client;