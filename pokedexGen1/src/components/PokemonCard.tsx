import Pokemon from '@/models/Pokemon'

import PokemonImage from './PokemonImage'
import TypeCard from './TypeCard'
import Chart from './Chart'

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const colorPick: { [key: string]: string } = {
    hp: '#6ffca5',
    atk: '#fc6f6f',
    'sp-atk': '#FFA500',
    def: '#6f89fc',
    'sp-def': '#796ffc',
    speed: '#8bfc6f'
  }

  const headingKey: { [key: string]: string } = {
    hp: 'HP',
    atk: 'Attack',
    'sp-atk': 'Special Attack',
    def: 'Defense',
    'sp-def': 'Special Defense',
    speed: 'Speed'
  }

  return (
    <div className="flex-0-30 flex flex-col gap-4 items-center border-4 rounded-2xl p-2 mb-5 min-w-[330px]">
      <h2>
        #{pokemon.id} {pokemon.name}
      </h2>
      <PokemonImage pokemonId={pokemon.id} />
      <div className="flex gap-2">
        {pokemon.types.map((type, index) => {
          return <TypeCard type={type} key={index} />
        })}
      </div>
      <div className="flex flex-col w-full">
        {Object.keys(pokemon.stats).map((key: string, index) => {
          const heading: string = headingKey[key]
          const stat: number = Number(JSON.stringify(pokemon.stats[key]))
          const statColor: string = colorPick[key]
          return (
            <div
              key={index}
              className="grid grid-cols-[auto_2em_60%] items-center gap-2 h-12"
            >
              <h4 className='m-0 mr-2 text-right'>{heading}</h4>
              <span>{stat}</span>
              <Chart key={index} width={stat} color={statColor} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonCard
