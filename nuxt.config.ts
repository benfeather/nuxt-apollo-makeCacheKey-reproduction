// https://nuxt.com/docs/api/configuration/nuxt-config

import { createFragmentRegistry } from '@apollo/client/cache'
import gql from 'graphql-tag'

export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://spacex-production.up.railway.app',
        inMemoryCacheOptions: {
          fragments: createFragmentRegistry(
            gql`
              fragment ShipFragment on Ship {
                id
                name
              }
            `
          ),
        },
      }
    },
  },
})
