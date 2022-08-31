export const customFetch = (productos) => {
    return new Promise((resolve,rej) => {
        setTimeout(() => {
            resolve(productos)
        },2000)
    })
}