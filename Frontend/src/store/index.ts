

import { createStore } from "vuex";

export const store = createStore({
    state: {
        email: ""
    },
    getters: {},
    mutations: {
        //managing the login and logout state here
        login(state, email) {
            state.email = email;
            localStorage.setItem('email', email);
            // alert('Logged in')
        },
        logout(state) {
            state.email = '';
            localStorage.removeItem('email');
            alert('logged out')
        },
        initializeStore(state) {
            if (localStorage.getItem('email')) {
                state.email = localStorage.getItem('email') ?? "";
            }
            //managing the login and logout state here ▲
        }
    },
    actions: {},
    modules: {},
});