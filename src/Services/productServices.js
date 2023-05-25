export function getAllProducts(search){
    return fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
      ).then(res => res.json());
}

export function getProductById(id){
return fetch(`https://api.mercadolibre.com/items/${id}`).then(res => res.json());
}