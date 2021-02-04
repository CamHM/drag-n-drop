export default interface Option {
    id: string,
    index: number,
    child: string,
    opacity: number,
}

export interface Board {
    id: string,
    options: string[]
    isDroppable?: boolean;
    hasOnlyChild?: boolean;
    hint?: string,
}
