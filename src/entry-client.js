/*
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2021-04-21 11:40:09
 * @LastEditors: sueRim
 * @LastEditTime: 2021-11-24 21:52:26
 */
import { createApp } from './main'
import './registerServiceWorker'

const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {
  // We initialize the store state with the data injected from the server
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  router.beforeResolve((to,from,next) => {
		const matched = router.getMatchedComponents(to)
		const prevMatched = router.getMatchedComponents(from)
		
		// 我们只关心非预渲染的组件
    // 所以我们对比它们，找出两个匹配列表的差异组件
    let diffed = false
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = (prevMatched[i] !== c))
    })

    if (!activated.length) {
      return next()
    }
    
     Promise.all(activated.map(c => {
      if (c.asyncData) {
        return c.asyncData({ store, route: to })
      }
    })).then(() => {

      // 停止加载指示器(loading indicator)

      next()
    }).catch(next)
		
	})
	

  app.$mount('#app');
});
