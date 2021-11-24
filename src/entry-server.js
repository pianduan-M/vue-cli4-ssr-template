/*
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2021-04-21 11:40:09
 * @LastEditors: sueRim
 * @LastEditTime: 2021-11-24 21:56:11
 */
// runs on server only

import { createApp } from './main'

export default (context) => {
  // since there could potentially be asynchronous route hooks or components,
  // we will be returning a Promise so that the server can wait until
  // everything is ready before rendering.
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    // set server-side router's location
    router.push(context.url)

    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      
      // no matched routes, reject with 404
      const matchedComponents = router.getMatchedComponents()
      if (matchedComponents.length === 0) {
        return reject({ code: 404 })
      }
      Promise.all(matchedComponents.map(Component => {
				if (Component.asyncData) {
					return Component.asyncData({
						store,
						route: router.currentRoute
					})
				}
			})).then(()=>{
				context.state = store.state
				resolve(app)
			}).catch(reject)
     
    }, reject)
  })
}
