const products = [
    {id : 1 , name : 'phone' , price : 12222},
    {id : 2 , name : 'laptop' , price : 12222},
    {id : 3 , name : 'asus' , price : 12222},
    {id : 4 , name : 'laptop' , price : 12222},
    {id : 5 , name : 'laptop' , price : 12222},
    {id : 6 , name : 'mackbook' , price : 12222},
    {id : 7 , name : 'asus' , price : 12222},
]
function matchProducts (products, search){
    let matched = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products, "lapTop");
console.log(result);
// console.log(products);
