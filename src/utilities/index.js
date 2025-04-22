import toast from "react-hot-toast"

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
        return toast.error('Already in favorites')
    }
    favorites.push(phone)
    toast.success('Added to favorites')
    localStorage.setItem('favorite', JSON.stringify(favorites))
}

export const removeFavorite = id => {
    const favorites = getFavorites()
    const remaining = favorites.filter(fav => fav.id !== id)
    localStorage.setItem('favorite', JSON.stringify(remaining))
    toast.error('Removed from favorites')
}