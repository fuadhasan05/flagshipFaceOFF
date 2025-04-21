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

export const removeFavorite = id => {
    const favorites = getFavorites()
    const remaining = favorites.filter(fav => fav.id !== id)
    localStorage.setItem('favorite', JSON.stringify(remaining))
}