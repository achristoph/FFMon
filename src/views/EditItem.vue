<template>
  <v-main>
    <v-sheet max-width="300" class="mx-auto">
      <ItemForm :actionType="route.name"></ItemForm>
    </v-sheet>
  </v-main>
</template>

<script setup>

import { useRoute } from "vue-router"
import ItemForm from "../components/ItemForm.vue"

const route = useRoute()
</script>
