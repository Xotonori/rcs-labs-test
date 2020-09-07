export type treeData = {
    [key: number]: treeDataItem
};

export type treeDataItem = {
    id: number
    parent_id: number
    srt: number
    title: string
} | any;