import * as types from './mutations_types'

export const editNameAge = ({ commit, state }, { name, age }) => {
    console.log(state)
    return new Promise((resolve, reject) => {
        console.log(reject)
        setTimeout(() => {
            commit(types.SET_NAME, name)
            commit(types.SET_AGE, age)
            resolve()
        }, 5000)
    })
}
