/*
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2021-04-21 11:40:09
 * @LastEditors: sueRim
 * @LastEditTime: 2021-11-24 22:01:20
 */
import Vue from 'vue'
import Vuex from 'vuex'

import { queryTodolist } from '../api/home'
import {queryText} from '../api/about'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: {
      todolist:[],
      aboutText:''
    },
    getters: {
    },
    mutations: {
      SET_TODOLIST(state, data) {
        Vue.set(state,'todolist',data)
      },
      SET_ABOUT_TEXT(state,text) {
        Vue.set(state,'aboutText',text)
      }
    },
    actions: {
      getTodolist({commit}) {
        return queryTodolist().then(res => {
          commit('SET_TODOLIST',res)
        })
      },
      getAboutText({commit}) {
        return queryText().then(res => {
          commit('SET_ABOUT_TEXT',res)
        })
      }
    },
    modules: {
    },
  });
  return store;
}
