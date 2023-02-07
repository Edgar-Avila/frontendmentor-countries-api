import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Home({ countries }) {
  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(countries)
  const [select, setSelect] = useState("")

  useEffect(() => {
    const fn = setTimeout(() => {
      const searchRegex = new RegExp(search, "i")
      setFiltered(countries.filter(country => {
        return searchRegex.test(country.name) && (select === ''  || country.region === select)
      }))
    }, 500)
    return () => clearTimeout(fn)
  }, [search, select, countries])

  const searchChange = (event) => {
    setSearch(event.currentTarget.value)
  }

  const selectChange = (event) => {
    setSelect(event.currentTarget.value)
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 sm:px-12 dark:bg-dark-bg">
        <div className="flex justify-between mb-8 flex-wrap gap-4">
          <div className="shadow bg-light-els text-light-input focus-within:bg-red grow sm:grow-0 dark:bg-dark-els dark:text-dark-text rounded overflow-hidden">
            <FontAwesomeIcon icon={faSearch} className="mr-4 h-full pl-4" />
            <input
              type="text"
              value={search}
              onChange={searchChange}
              placeholder="Search for a country..."
              className="focus:outline-none h-full py-4 pr-4 dark:bg-dark-els dark:text-dark-text"
            />
          </div>
          <select name="regions" id="regions" className="p-4 cursor-pointer rounded shadow bg-light-els text-light-input dark:bg-dark-els dark:text-dark-text" onChange={selectChange} defaultValue="">
            <option value="" disabled hidden>Filter by Region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {filtered.map(country => (
            <Link href={`/${country.code}`} key={country.code}>
              <div className="rounded overflow-hidden bg-light-els shadow-md h-full dark:bg-dark-els">
                <Image
                  src={country.flag} alt={country.name} width={600} height={400} className="object-cover aspect-video" />
                <div className="px-4 pt-6 pb-12">
                  <h3 className="font-bold text-xl mb-2">{country.name}</h3>
                  <p><b>Population: </b>{country.population}</p>
                  <p><b>Region: </b>{country.region}</p>
                  {
                    country.capital &&
                    <p><b>Capital: </b>{country.capital}</p>
                  }
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v2/all")
  const data = await res.json()
  const countries = data.map(country => ({
    flag: country.flags.png,
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital || null,
    code: country.alpha3Code,
  }))
  return {
    props: { countries }
  }
}

export default Home;