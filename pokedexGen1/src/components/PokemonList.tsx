import axios from "axios"
import { ChangeEvent, useEffect, useState } from 'react'
import PokemonCard from "./PokemonCard"

const url: string = import.meta.env.VITE_BASE_URL as string

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])
  const [inputSearchName, setInputSearchName] = useState('')

  const findByKeyword = async (keyword: string) => {
    const response = await axios.post(`${url}search`, {
      keyword: keyword
    })
    setPokemonList(response.data.pokemonList)
  }
  
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearchName(e.target.value)
    findByKeyword(e.target.value)
  }

  useEffect(() => {
    const getPokemonList = async () => {
      const response = await axios.get(`${url}`)
      setPokemonList(response.data.pokemonList)
    }

    getPokemonList()
  }, [])

  return (
    <div className="container-pokemon">
      <header className="border-4 rounded-lg bg-white sticky top-0 mx-2 p-6 flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold">Pokemon List</h1>
        <label className="form-control w-1/3">
          <div className="label">
            <span className="label-text">Search Name</span>
          </div>
          <input
            type="text"
            name="search-name"
            id="search-name"
            className="input input-bordered"
            value={inputSearchName}
            onChange={handleInput}
          />
        </label>
        <h5 className="font-bold">Number of Result: {pokemonList.length}</h5>
      </header>
      <div className="flex flex-wrap justify-evenly gap-4 p-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  )
}

export default PokemonList
