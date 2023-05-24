// Utilities
import { defineStore } from 'pinia'

export const useItemStore = defineStore('item', {
  state: () => ({
    items: []
  }),
  getters: {
    getItems: (state) => state.items,
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    add(item) {
      this.items.push(item)
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
