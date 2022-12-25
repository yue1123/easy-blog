export const scriptLoaderWrapper: Record<string, Promise<any>> = {}
export function getScriptAsync({ key, src }): Promise<any> {
  if (!scriptLoaderWrapper[key]) {
    scriptLoaderWrapper[key] = new Promise<void>((resolve, reject) => {
      const script: HTMLScriptElement = document.createElement('script')
      const cal = () => {
        resolve()
        window.document.body.removeChild(script)
      }
      script.onload = function (this: any) {
        if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
          script.onload = null
          cal()
        }
      }
      script.src = src
      script.type = 'text/javascript'
      script.defer = true
      script.onerror = reject
      document.body.appendChild(script)
    })
  }
  return scriptLoaderWrapper[key]
}
