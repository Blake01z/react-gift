

export const getGifs = async(category) =>{
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=yw33JdH0FxRDYs8aYc8I5cu9RJ3JezXQ`;    
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //signo de interrogacion para saber si tiene imagenes
        }
    })

    return gifs;

}