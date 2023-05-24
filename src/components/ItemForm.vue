<template>
  <v-form @submit.prevent="actionFn">
    <h3>{{ props.actionType }}</h3>
    {{ getItem(route.params.id) }}
    <v-text-field
      v-model="getItem(route.params.id).name"
      label="Name"
      :rules="rules"
    ></v-text-field>
    <v-btn icon @click="decreaseQty">
      <v-icon>mdi-minus-circle-outline</v-icon>
    </v-btn>
    <v-chip class="ma-2" color="success">
      {{ qty }}
    </v-chip>
    <v-btn icon @click="increaseQty">
      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>
    <v-row no-gutters>
      <v-btn
        type="submit"
        block
        class="mt-2"
        :text="actionText"
        color="success"
      ></v-btn>
      <router-link to="/" style="color: white" class="mt-2">
        <v-btn> Cancel </v-btn>
      </router-link>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref } from "vue"
import { useItemStore } from "../store/app"
import { useRouter } from "vue-router"
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"

const store = useItemStore()
const { getItem } = storeToRefs(store)
const router = useRouter()
const route = useRoute()
const name = ref("")
const qty = ref(1)
const props = defineProps(["actionType"])
const actionText = props.actionType === "Add" ? "Add" : "Update"
const rules = [
  (value) => {
    if (value) return true
    return "You must enter a name"
  },
]

const actionFn = () => {
  if (props.actionType == "Add") {
    addItem()
  } else if (props.actionType == "Edit") {
    updateItem()
  }
}

const addItem = () => {
  if (name.value.length < 1) return
  const item = { name: name, qty: qty }
  store.add(item)
  router.push({ name: "Home" })
}

const updateItem = () => {
  router.push({ name: "Home" })
}

const increaseQty = () => {
  qty.value = qty.value + 1
}
const decreaseQty = () => {
  qty.value = qty.value - 1
  if (qty.value < 0) {
    qty.value = 0
  }
}
</script>
