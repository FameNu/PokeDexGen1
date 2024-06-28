import axios from 'axios'
import { useEffect, useState } from 'react'

function PokemonImage({pokemonId}: {pokemonId: string}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pokemonData, setPokemonData] = useState<null | any>(null)

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        setPokemonData(response.data)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
      }
    }

    fetchPokemonData()
  }, [pokemonId])

  return (
    <div>
      {pokemonData && (
        <img
          src={pokemonData.sprites.front_default}
          alt={`Pokemon ${pokemonData.name}`}
          className='max-w-[100px] max-h-[100px] animate-fade-in'
        />
      )}
    </div>
  )
}

export default PokemonImage