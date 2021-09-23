<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-main>
      <CarTable></CarTable>
    </v-main>
  </v-app>
</template>

<script>
import CarTable from './components/CarTable';

export default {
  name: 'App',
  components: {
    CarTable,
  }
};
</script>
