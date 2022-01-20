export type Pattern = {
    title: string
    intent: string
    diagram_link: string
    starter_code_link: string
    body: string
    body_img?: string
    body_subtext?: string
    questions: Question[]
}

export type Question = {
    body: string
    answer?: string
    variant_name?: string
    code_link?: string
    is_optional?: boolean
    is_primary_implementation?: boolean
    is_not_implemented?: boolean
}