export default interface ServerLog {
    author?: string
    status?: string
    keep_alive: boolean
    statusCode: number
}

export interface StandardResponse {
    data: Data
    meta?: Meta
}

export interface Data {
    message?: string,
    token?: string,
    status: number
}
export interface Meta {
    time_stamp: string,
    trace_id?: string
}

export interface User {
    first_name: ModelDefinition<string> | string,
    last_name: ModelDefinition<string> | string,
    email: ModelDefinition<string> | string,
    password: ModelDefinition<string> | string,
    team: ModelDefinition<string> | string,
    token?: ModelDefinition<string> | string
}
export interface ModelDefinition<T> {
    type: any,
    default?: T | null,
    unique?: boolean
}