<template>
  <div class="post_header-container">
    <h1 class="post_header-title">
      {{ frontmatter.title }}
      <Badge v-if="frontmatter.top" type="tip" text="置顶" />
    </h1>
    <PostMeta class="meta" :tags="frontmatter.tags" :createTime="frontmatter.createTime" />
  </div>
  <div class="post_header-img" v-if="frontmatter.coverImg">
    <img :src="frontmatter.coverImg" alt="" />
  </div>
</template>

<script setup lang="ts">
  import { useData } from 'vitepress'
  import PostMeta from './PostMeta.vue'
  const { frontmatter } = useData()
</script>

<style lang="scss" scoped>
  .post_header {
    &-container {
      .meta {
        padding: 1rem 0;
      }
    }
    &-title {
      letter-spacing: -0.02em;
      line-height: 40px;
      font-size: 28px;
    }
    @media (min-width: 768px) {
      .post-title {
        letter-spacing: -0.02em;
        line-height: 40px;
        font-size: 32px;
      }
    }
    &-img {
      height: auto;
      max-height: 425px;
      overflow: hidden;
      position: relative;
      margin-bottom: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
</style>
