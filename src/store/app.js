// Utilities
import { defineStore } from 'pinia'

export const useItemStore = defineStore('item', {
  state: () => ({
    items: []
  }),
  getters: {
    getItems: (state) => state.items,
    getItem: (state) => (index) => state.items[index],
    getItemName(state) {
      return (actionType, id) => {
        if (actionType == "Add") {
          return ""
        } else if (actionType == "Edit") {
          console.log(id, this.getItem(id))
          return this.getItem(id).name
        }
      }
    }
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    add(item) {
      this.items.push(item)
    },
    update(index, item){
      this.items[index] = item
    },
    delete(index) {
      this.items.splice(index, 1);
    }
  },
  persist: {
    enabled: true,
    key: 'food-store',
  },
})
