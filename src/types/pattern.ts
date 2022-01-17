export type Pattern = {
    title: string
    intent: string
    diagram_link: string
    body: string
    body_subtext?: string
    questions: Question[]
}

export type Question = {
    body: string
    answer?: string
    variant_name?: string
    code_link?: string
    is_optional?: boolean
}