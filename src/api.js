import axios from "axios";

const searchImagenes = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=QJy_z4nyZ00VhBicju2u4PsFRTMTJTVmfKuYpBxJVEY'

    const response = await axios.get(url, {
        params:{
            query: term        }
    })

    console.log(response)
    return response.data.results
}

export default searchImagenes