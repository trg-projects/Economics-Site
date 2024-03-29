// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_DATASET, // or the name you chose in step 1
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: false // `false` if you want to ensure fresh data
})