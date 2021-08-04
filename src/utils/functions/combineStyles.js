export const combineStyles = (list, styles) => (
    list.split(" ").reduce((acc,item) => {
        return {...acc,  ...styles[item]}; 
    },{})
)