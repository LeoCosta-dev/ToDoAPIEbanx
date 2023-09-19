class Utils{
    static objectIsEmpty(Object){
        const keys = Object.keys(Object)
        return keys.length === 0
    }
}

export default Utils