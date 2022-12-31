
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1IKDQ8B76UbZ6q0fG5DUSM43z2F54DjU&q=${category}&limit=10`;

    const response = await fetch(url);
    const { data = [] } = await response.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
    
        }
        }
    );
    return gifs;
};