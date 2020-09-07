export type TreeDataType = TreeDataItemType[] | [];

export type TreeDataItemType = {
    alt_id: null | string
    config: {}
    created: string
    id: number
    is_hidden: number
    latitude: number
    longitude: number
    parent_id: number
    src_id: null | number
    srt: number
    tags: []
    title: string
    updated: string
    children?: TreeDataItemType[] | []
};