<template>
  <PostItem v-for="item in postList" v-bind="item" :localePath="localePath"></PostItem>
</template>

<script setup lang="ts">
  import { postList } from '../../../utils'
  import { useData, withBase } from 'vitepress'
  import { computed } from 'vue'
  const { localePath } = useData()
</script>
