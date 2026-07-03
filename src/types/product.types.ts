export interface Product{
    id : string,
    title : string,
    price: number,
    discountPercentage: number,
    rating: number
}

export interface Products{
    products : Product[]
}