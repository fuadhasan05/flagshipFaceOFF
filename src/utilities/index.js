export const getFavorites = () => {
    const favorites = localStorage.getItem('favorite')
    if (favorites) {
        return JSON.parse(favorites)
    }
    return []
}

export const addFavorite = phone => {
    const favorites =getFavorites()
    const isExist = favorites.find(fav => fav.id === phone.id)
    if (isExist) {
        return 
    }
    favorites.push(phone)
    localStorage.setItem('favorite', JSON.stringify(favorites))
}