import * as types from '../mutation-types'

// initial state
const state = {
    articleId: 1,
    chapterId: 1,
    fontSize: '18px',
    bgColor: '#e9dfc7',
    isDaytime: true,
    chapterListState: false
}

// getters
const getters = {

}

// actions
const actions = {
    setReaderInfoOne({ commit }, obj) {
        // obj 为 {key:'属性名A', val: '属性名A对应的属性值'},格式，
        commit(types.SET_READER_INFO_ONE, { obj })
    },

    setReaderInfoAll({ commit }, obj) {
        // 更新整个state
        commit(types.SET_READER_INFO_ALL, { obj })
    },

    // setChapterId({ commit }, id) {
    //     commit(types.SET_READER_INFO_ALL, { id })
    // }
}

// mutations
const mutations = {
    [types.SET_READER_INFO_ONE](state, { obj }) {
        state[obj.key] = obj.val
    },

    [types.SET_READER_INFO_ALL](state, { obj }) {
        for(let key in obj){
            state[key] = obj[key]
        }
    },

    // [types.SET_ARTICLE_ID](state, { id }) {
    //     state.curArticleId = id
    // },

    // [types.SHE_CHAPTER_ID](state, { id }) {
    //     state.curChapterId = id
    // },

    // [types.ADD_TO_CART](state, { id }) {
    //     state.all.find(p => p.id === id).inventory--
    // }
}

export default {
    state,
    getters,
    actions,
    mutations
}
