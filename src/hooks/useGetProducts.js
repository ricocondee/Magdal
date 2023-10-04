export const getProducts = async (API, end) => {//funcion para obtener todos los datos de la api
    try {
      const res = await fetch(`${API}/${end}`)  
      return await res.json()
    } catch (err) {
        throw err;
    }
    
}

export const handleProductData = async(itemId) =>{//funcion para obtener producto seleccionado por medio del id
  try {
    localStorage.removeItem('itemID'); //elimino el local storage para cada que se ingrese al producto pueda sel el requerido
    localStorage.setItem('itemID', itemId);//sete el valor de la clave en el localStorage para usarla despues
    const resp = await fetch(`https://store-api-d3d0-dev.fl0.io/api/products/${itemId}`)//fetch de la API, [A MEJORAR]
    return await resp.json()
  } catch (error) {
    throw error
  }
}