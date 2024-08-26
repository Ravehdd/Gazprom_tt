import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Product = {
    articleid: number,
    subarticleid: number,
    articlename: string,
    external_str_id: string,
    ecrlongname: string,    
}

export type productId = number

export type ProductsState = {
    entities: Record<productId, Product>
    ids: productId[]
}

export const initialProductsState: ProductsState = {
    entities: {},
    ids: []
}


export const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    selectors: {
        selectAllProducts: state => state.entities
    },
    reducers: {
        addProduct(state, action: PayloadAction<{productlist: Product[]}>) {
            const productlist = action.payload.productlist
            productlist.forEach(product => {
                state.entities[product.articleid] = product
                state.ids.push(product.articleid)
            })
            
        }
    }})