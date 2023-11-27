export const initialState = {
    details : [],
    cart : [],
    wishlist : [],
    user : 'false'
};

export const getcartTotal = (cart) => cart?.reduce((amount, product) => product.price + amount, 0);

const reducer = (state,action) => {
    console.log(action);
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state,
                user: action.user
            }
        case 'REMOVE_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart : [...state.cart, action.product],
            };
        case 'ADD_TO_WISHLIST':
            return{
                ...state,
                wishlist : [...state.wishlist, action.product],
            }
        
        case 'SHOW_DESCRIPTION':
            return{
                ...state,
                details: [...state.details, action.product],
            };
        case 'CLEAR_DESCRIPTION':
            return {
                ...state,
                details: []
            }
        case 'EMPTY_CART':
            return {
                ...state,
                cart: []
            };
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id);
            let newcart = [...state.cart];

            if(index>=0){
                newcart.splice(index,1);
            }
            else{
                console.warn('Cannot remove product as its not in cart')
            }
            return {
                ...state,
                cart: newcart
            }
        case 'REMOVE_FROM_WISHLIST':
            const ind = state.wishlist.findIndex(
                (wishlistItem) => wishlistItem.id === action.id);
            let newWishlist = [...state.wishlist];
    
            if(ind>=0){
                newWishlist.splice(ind,1);
            }
            else{
                console.warn('Cannot remove product as its not in wishlist')
            }
            return {
                ...state,
                wishlist: newWishlist
        }
        default:
            return state;
    }
};

export default reducer;