export const nullValidate = <T>(item: T[] | T): boolean => {
    let r: boolean = true
    if (item instanceof Array) {
        for(let i of item) {
            if (i === null || i === undefined) r = r && false 
        }        
    } else {
        if (item === null || item === undefined) return r && false
    }
    return r
}

export const emptyValidate = (item: string | any[]) => {
    let r: boolean = true
    if (item instanceof Array) {
        for(let i of item) {
            if (i === "") r = r && false 
        }
    } else {
        if (item === "") r = r && false
    }
    return r
}

export const emailValidate = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    return (false)
}