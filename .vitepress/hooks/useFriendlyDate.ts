import { computed } from 'vue'
export function useFriendlyDate(_date: number | Date | string) {
  return computed(() => {
    const date = new Date(_date)
    var formats = {
      year: '%n%年前',
      month: '%n%个月前',
      day: '%n%天前',
      hour: '%n%小时前',
      minute: '%n%分钟前',
      second: '%n%秒前'
    }
    var now = Date.now()
    var seconds = Math.floor((now - date.getTime()) / 1000)
    var minutes = Math.floor(seconds / 60)
    var hours = Math.floor(minutes / 60)
    var days = Math.floor(hours / 24)
    var months = Math.floor(days / 30)
    var diffType = ''
    var diffValue = 0
    // 超过一个月直接显示日期
    if (months > 0) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    } else {
      if (days > 0) {
        diffType = 'day'
        diffValue = days
      } else {
        if (hours > 0) {
          diffType = 'hour'
          diffValue = hours
        } else {
          if (minutes > 0) {
            diffType = 'minute'
            diffValue = minutes
          } else {
            diffType = 'second'
            diffValue = seconds === 0 ? (seconds = 1) : seconds
          }
        }
      }
    }
    return formats[diffType].replace('%n%', diffValue)
  })
}
