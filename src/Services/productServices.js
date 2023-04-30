export function getAllProducts(){
    return fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=extraterrestres%20alien"
      ).then(res => res.json());
}

export function getProductById(id){
return fetch(`https://api.mercadolibre.com/items/${id}`).then(res => res.json());
}