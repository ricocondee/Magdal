const getProducts = async (API, end) => {
    try {
      const res = await fetch(`${API}/${end}`)  
      return await res.json()
    } catch (err) {
        throw err;
    }
    
}


export default getProducts