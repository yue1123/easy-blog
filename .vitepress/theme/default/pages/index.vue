<template>
  <PostItem v-for="item in postList" v-bind="item"></PostItem>
</template>

<script setup lang="ts">
  import { postList } from '../../../utils'
</script>
