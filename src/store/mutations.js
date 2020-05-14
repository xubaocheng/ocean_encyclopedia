import * as types from './mutations_types'
const mutations = {
    [types.SET_NAME](state, name) {
        state.name = name
    },
    [types.SET_AGE](state, age) {
        state.age = age
    },
    [types.SET_PERSONALLINE](state, boolean) {
        state.personalLine = boolean
    },
    [types.SET_ACSHOW](state, boolean) {
        state.acShow = boolean
    }
}

export default mutations
