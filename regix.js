const s = 'Keep On Asking, and It Will Be Given You. '
const regix = s.replace(/[a-z]+/g, (m) =>{
    return m.toUpperCase()
})
console.log(regix)

const ar = [100, 1, 20, 43, 30, 11, 4]
ar.sort((a, b) =>{
    return b - a
})
console.log(ar)
