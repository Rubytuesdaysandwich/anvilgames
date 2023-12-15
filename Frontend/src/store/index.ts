import { createStore, } from "vuex";

// This file is using Typescript so you must define you variable types before using them here in the interface
interface RootStateManagmentVuex {
    // Define root state properties
    user: {
        email: string;
        password: string;
    }

}



const store = createStore<RootStateManagmentVuex>({
    state: {
        // Initial state properties
        user: {
            email: "",
            password: "",
        },
    },
    getters: {},
    mutations: ({
        //managing the login and logout state here
        login(state, { email, password }) {
            state.user.email = email;
            state.user.password = password;
            localStorage.setItem('email', state.user.email);
            localStorage.setItem('password', state.user.password);
            // alert('Logged in')
        },
        logout(state) {
            state.user.email = '';
            state.user.password = '';
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            alert('logged out')
        },
        initializeStore(state) {
            if (localStorage.getItem('email')) {
                state.user.email = localStorage.getItem('email') ?? "";
                state.user.password = localStorage.getItem('password') ?? "";
            }
            //managing the login and logout state here ▲
        }
    }),
    actions: {},
    modules: {},
});

export default store;