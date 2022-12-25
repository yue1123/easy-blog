<template>
  <div class="post-bottom space-y-2">
    <div>
      <span>本文链接: {{ url }}</span>
    </div>
    <div>
      <span>转载请注明出处和原文链接</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  const url = computed(() => {
    return decodeURIComponent(window.location.href)
  })
</script>

<style lang="scss" scoped>
  .post-bottom {
    margin-top: 25px;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid var(--vp-custom-block-tip-border);
    color: var(--vp-custom-block-tip-text);
    background-color: var(--vp-custom-block-tip-bg);
    font-size: 14px;
  }
</style>
