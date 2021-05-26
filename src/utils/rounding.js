export const rounding = (num) => {
    if (num > 1000) {
        return (num / 1000).toFixed(1)+ 'k'
    }
    return num
}