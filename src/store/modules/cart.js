// ## Mutation Types
export const ADD_TO_CART = 'ADD_TO_CART';

// ## State
const state = {
    added: [],
    checkoutStatus: null
};

// ## Mutations
export const mutations = {
    [ADD_TO_CART](state, { id }) {
        state.lastCheckout = null
        const record = state.added.find(p => p.id === id)
        if (!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }
    }
};

// ## Actions
export const addToCart = ({ commit }, product) => {
    if (product.inventory > 0) {
        commit(ADD_TO_CART, {
            id: product.id
        })
    }
};

// ## Getters
export const cartProducts = state => {
    return state.cart.added.map(({ id, quantity }) => {
        const product = state.products.all.find(p => p.id === id)
        return {
            title: product.title,
            price: product.price,
            quantity
        }
    })
};
