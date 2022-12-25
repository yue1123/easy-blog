<template>
  <div class="archive-page">
    <div class="timeline-container">
      <div class="timeline-item" :class="item.type" v-for="item in archivesList">
        <div class="timeline-item-node">
          <BIconPencilSquare v-if="item.type === 'post'" />
          <span v-else-if="item.type === 'month'">月</span>
          <span v-else>年</span>
        </div>
        <div class="timeline-item-wrapper space-y-2">
          <template v-if="item.type === 'post'">
            <div class="content">
              <a v-if="item.type === 'post'" :href="item.url">
                {{ item.title }}
              </a>
            </div>
            <PostMeta :tags="item.tags" :createTime="item.createTime" />
          </template>
          <div class="content" v-else>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { BIconPencilSquare } from 'bootstrap-icons-vue'
  import { computed } from 'vue'
  import PostMeta from '../components/PostMeta.vue'
  import { postList } from '../../../utils'

  type NodeType = 'year' | 'month' | 'post'
  interface ArchivesList {
    type: NodeType
    title: string
    snippets?: string
    coverImg?: string
    createTime: number
    url: string
    top?: boolean
    tags?: string[]
  }

  const data = Object.create(null)
  const archivesList = computed<ArchivesList[]>(() => {
    for (const post of postList) {
      const { createTime } = post
      const _createTime = new Date(createTime)
      const year = _createTime.getUTCFullYear()
      const month = _createTime.getMonth() + 1
      let addYearItemFlag = false
      if (!data[year]) {
        data[year] = {}
        addYearItemFlag = true
      }
      if (!data[year][month]) {
        data[year][month] = []
        let _monthList = data[year][month]
        if (addYearItemFlag) {
          _monthList.push({
            type: 'year',
            title: `${year}年`
          })
        }
        _monthList.push({
          type: 'month',
          title: `${month}月`
        })
      }
      post.type = 'post'
      data[year][month].push(post)
    }
    let archivesList = []
    for (const yearItem of Object.values(data)) {
      for (const monthItem of Object.values(yearItem as Record<string, any>)) {
        archivesList.push.apply(archivesList, monthItem)
      }
    }
    return archivesList
  })
</script>

<style lang="scss" scoped>
  .archive-page {
    margin-top: 45px;
  }
  .timeline {
    &-item {
      position: relative;
      padding-bottom: 15px;
      display: flex;
      padding: 10px 0;
      $node-width: 25px;
      &.year {
        &:not(:first-child) {
          margin-top: 15px;
        }
        .timeline-item-wrapper {
          font-size: 36px;
        }
      }
      &.month .timeline-item-wrapper {
        font-size: 24px;
      }
      &:not(:last-child)::before {
        content: '';
        position: absolute;
        display: block;
        left: calc($node-width / 2);
        width: 0;
        top: calc(50% - calc($node-width / 2));
        bottom: -$node-width;
        border-left: 1px dashed var(--vp-c-divider);
      }
      &-node {
        width: $node-width;
        height: $node-width;
        background: var(--vp-c-bg-soft);
        border-radius: 50%;
        z-index: 9;
        left: 0;
        margin-right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--vp-c-text-2);
        font-size: 12px;
      }
      .timeline-item-wrapper a {
        color: var(--vp-c-text-1);
        &:hover {
          color: var(--vp-c-brand);
        }
      }
    }
  }
</style>
