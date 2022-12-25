<template>
  <div class="post_header-meta space-x-4">
    <div class="space-x-1">
      <BIconCalendar />
      <span>{{ createTime }}</span>
    </div>
    <template v-if="props.tags">
      <div class="space-x-1">
        <BIconTags />
        <a class="tag" :href="`/tags.html#${tag}`" v-for="(tag, index) in props.tags">
          <span>{{ tag }}</span>
          <span v-if="index !== props.tags.length - 1">,</span>
        </a>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { useFriendlyDate } from './../../../hooks/index'
  import { BIconTags, BIconCalendar } from 'bootstrap-icons-vue'
  interface PostMetaProps {
    tags?: string[]
    createTime: number
  }
  const props = defineProps<PostMetaProps>()
  const createTime = useFriendlyDate(props.createTime)
</script>

<style lang="scss" scoped>
  .post_header-meta {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    line-height: 1rem;
    font-weight: 400;
    color: var(--vp-c-text-2);
    font-size: 14px;
    white-space: nowrap;
    & > div {
      display: flex;
    }
    .tag {
      color: var(--vp-c-text-2);
      display: inline-block;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: var(--vp-c-brand);
      }
    }
  }
</style>
