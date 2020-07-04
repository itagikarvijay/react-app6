export function setTitle() {
    console.log('rootActions')
    return {
        type: 'SET_TITLE',
        payload: 'Some title'
    };
}

export function setUser(user) {
    console.log('setUser')
    console.log(user)
    return {
        type: 'SET_USER',
        payload: user
    };
}
