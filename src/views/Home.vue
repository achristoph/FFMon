<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(item, index) in getItems" :key="item" cols="12">
          <v-card :title="`${item.name}`" :text="`Qty: ${item.qty}`">
            <v-card-actions>
              <router-link :to="`/edit/${index}`" style="color: black">
                <v-btn>
                  <v-icon>mdi-pencil-outline</v-icon> Edit
                </v-btn>
              </router-link>
              <v-btn @click="deleteItem(index)" outline>
                <v-icon>mdi-delete-outline</v-icon> Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { storeToRefs } from "pinia"
import { useItemStore } from "../store/app"

const store = useItemStore()
const { getItems } = storeToRefs(store)

function deleteItem(index) {
  store.delete(index)
}
</script>
