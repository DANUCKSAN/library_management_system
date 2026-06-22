import { da } from "zod/locales";

const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
  
    imageKit: {
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.DATABASE_URL!,
    upstash:{
      restUrl: process.env.UPSTASH_REDIS_REST_URL!,
      restToken: process.env.UPSTASH_REDIS_REST_TOKEN!, }
  },
}

export default config;