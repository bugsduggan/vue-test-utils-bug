<template>
  <div>
    <v-menu
      bottom
      left>
      <v-btn slot="activator" icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(action, i) in actions"
          :key="i">
          <v-list-tile-title>
            <v-icon
              :style="{color: action.color}">
              {{ action.icon }}
            </v-icon>
            {{ action.name }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Action from '@/models/Action';

@Component
export default class HelloWorld extends Vue {
  @Prop() private actions!: Action[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  /* no-empty */
</style>
