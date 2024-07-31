<template>
  <pre v-if="data?.ships">{{ data.ships }}</pre>
  <pre v-if="error">{{ error }}</pre>
</template>

<script lang="ts" setup>
  const query = gql`
    query getShips($limit: Int!) {
      ships(limit: $limit) {
        ...ShipFragment
      }
    }
  `
  const variables = { limit: 5 }

  const { data, error } = await useAsyncQuery(query, variables)
</script>

<style scoped></style>
