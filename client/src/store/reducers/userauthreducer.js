
export default (loggedin = [], action) => {

    switch (action.type) {
        
        case 'IS_LOGGED_IN':
            return loggedin;
        default:
            return;
    }
}