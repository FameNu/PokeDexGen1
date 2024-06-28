interface Pokemon {
    id: string
    name: string
    stats: {[key: string]: {
        hp: number
        atk: number
        'sp-atk': number
        def: number
        'sp-def': number
        speed: number
    }}
    types: string[]
}

export default Pokemon