import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Country({ country }) {
  const router = useRouter()

  return (
    <Layout>
      <div className="container mx-auto px-6 sm:px-12">
        <button onClick={()=>router.back()} className="shadow-lg px-8 py-1 mb-12 hover:scale-105 dark:bg-dark-els">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
          <span>Back</span>
        </button>
        <div className="flex gap-12 items-center flex-col md:flex-row">
          <Image
            src={country.flag}
            alt={`${country.name} flag`}
            width={540}
            height={360}
            className="basis-0 grow"
            priority
          />
          <div className="basis-0 grow">
            <h1 className="text-4xl font-bold mb-6">{country.name}</h1>
            <div className="flex gap-8 sm:gap-0 justify-between mb-8 flex-col sm:flex-row">
              <div className="basis-0 grow">
                <p><b>Native Name: </b>{country.nativeName}</p>
                <p><b>Population: </b>{country.population}</p>
                <p><b>Region: </b>{country.region}</p>
                <p><b>Sub Region: </b>{country.subregion}</p>
                <p><b>Capital: </b>{country.capital}</p>
              </div>
              <div className="basis-0 grow">
                <p><b>Top Level Domain: </b>{country.topLevelDomain.join(', ')}</p>
                {country.currencies &&
                  <p><b>Currencies: </b>{country.currencies.join(', ')}</p>
                }
                {country.languages &&
                  <p><b>Languages: </b>{country.languages.join(', ')}</p>
                }
              </div>
            </div>
            {country.borders &&
              <div className="flex gap-2 flex-wrap">
                <b>Border Countries: </b>
                <div className="flex gap-2 flex-wrap">
                  {country.borders.map(border => (
                    <Link href={border.code} key={border.code} className="shadow px-4 py-1 hover:scale-105 dark:bg-dark-els">
                      {border.name}
                    </Link>
                  ))}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Country;

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v2/all")
  const data = await res.json()
  const paths = data.map(country => ({
    params: {
      code: country.alpha3Code
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Get data of the country
  const res = await fetch(`https://restcountries.com/v2/alpha/${params.code}`)
  const country = await res.json()

  // Simple check in case API fails somehow
  if (country.alpha3Code != params.code) throw new Error(country.name)

  // Get only the necessary data from currencies and languages
  let currencies = null
  let languages = null
  if (country.currencies) {
    currencies = Object.values(country.currencies).map(c => c.name)
  }
  if (country.languages) {
    languages = Object.values(country.languages).map(l => l.name)
  }

  // Select full name of bordering countries instead of just the codes
  let borders = null
  if (country.borders) {
    const codes = country.borders.join(',')
    const bordersRes = await fetch(`https://restcountries.com/v2/alpha?codes=${codes}`)
    const bordersData = await bordersRes.json()
    borders = bordersData.map(b => ({code: b.alpha3Code, name: b.name}))
  }

  // Return
  return {
    props: {
      country: {
        name: country.name || null,
        nativeName: country.nativeName || null,
        population: country.population || null,
        region: country.region || null,
        subregion: country.subregion || null,
        capital: country.capital || null,
        topLevelDomain: country.topLevelDomain || null,
        flag: country.flags.png || null,
        currencies,
        languages,
        borders
      }
    }
  }
}