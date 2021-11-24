
/*
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2021-11-24 21:37:34
 * @LastEditors: sueRim
 * @LastEditTime: 2021-11-24 21:55:33
 */
export function queryText() {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve('这是 about 页面异步请求的文字，哈哈哈')
    },500)
  })
}
