export interface Options {
  method: string,
  headers?: HeadersInit,
  body?: string,
}

export interface NewNotion {
  title: string,
  body: string,
}

export interface Notion {
  id: number,
  title: string,
  body: string,
}
