export default class Wrapper<T> {
    toJSON(value: T): string {
        return JSON.stringify(value)
    }
    out(value: T): T {
        return value
    }
}
// { name: "Nathaniel" } => { "name": "Nathaniel" } 