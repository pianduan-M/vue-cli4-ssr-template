
/*
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2021-11-24 21:37:34
 * @LastEditors: sueRim
 * @LastEditTime: 2021-11-24 21:55:33
 */
export function queryTodolist() {
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve([
        '写代码',
        '吃饭',
        '睡觉',
        '看书',
      ])
    },500)
  })
}
