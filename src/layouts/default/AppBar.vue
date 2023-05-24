<template>
  <v-app-bar color="teal-darken-4">
    <v-app-bar-title>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-icon>mdi-cup-outline</v-icon>
      <v-icon>mdi-fruit-grapes-outline</v-icon>
      <v-icon>mdi-food-steak</v-icon>
      <v-icon>mdi-egg-outline</v-icon>
      Fresh Food Monitor
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <router-link to="/add" style="color: white">
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </router-link>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup></script>
