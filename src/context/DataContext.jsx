import React, { createContext, useEffect, useState } from 'react'

export const DATA = createContext(null)

function DataContext({ children }) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then(res => {
        console.log('API Response status:', res.status);
        console.log('API Response headers:', res.headers);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json()
      })
      .then(api => {
        console.log('API Data received:', api);
        if (api && api.data && Array.isArray(api.data)) {
          // Convert to the expected format with manual region mapping
          const countries = api.data.map(country => {
            // Manual region mapping based on country names
            let region = "Unknown";
            const countryName = country.country.toLowerCase();
            
            // Africa
            if (['algeria', 'angola', 'benin', 'botswana', 'burkina faso', 'burundi', 'cameroon', 'cape verde', 'central african republic', 'chad', 'comoros', 'congo', 'côte d\'ivoire', 'djibouti', 'egypt', 'equatorial guinea', 'eritrea', 'ethiopia', 'gabon', 'gambia', 'ghana', 'guinea', 'guinea-bissau', 'kenya', 'lesotho', 'liberia', 'libya', 'madagascar', 'malawi', 'mali', 'mauritania', 'mauritius', 'morocco', 'mozambique', 'namibia', 'niger', 'nigeria', 'rwanda', 'são tomé and príncipe', 'senegal', 'seychelles', 'sierra leone', 'somalia', 'south africa', 'south sudan', 'sudan', 'tanzania', 'togo', 'tunisia', 'uganda', 'zambia', 'zimbabwe'].includes(countryName)) {
              region = "Africa";
            }
            // Europe
            else if (['albania', 'andorra', 'austria', 'belarus', 'belgium', 'bosnia and herzegovina', 'bulgaria', 'croatia', 'czech republic', 'denmark', 'estonia', 'finland', 'france', 'germany', 'greece', 'hungary', 'iceland', 'ireland', 'italy', 'latvia', 'liechtenstein', 'lithuania', 'luxembourg', 'malta', 'moldova', 'monaco', 'montenegro', 'netherlands', 'north macedonia', 'norway', 'poland', 'portugal', 'romania', 'russia', 'san marino', 'serbia', 'slovakia', 'slovenia', 'spain', 'sweden', 'switzerland', 'ukraine', 'united kingdom', 'vatican city'].includes(countryName)) {
              region = "Europe";
            }
            // Asia
            else if (['afghanistan', 'armenia', 'azerbaijan', 'bahrain', 'bangladesh', 'bhutan', 'brunei', 'cambodia', 'china', 'cyprus', 'georgia', 'india', 'indonesia', 'iran', 'iraq', 'israel', 'japan', 'jordan', 'kazakhstan', 'kuwait', 'kyrgyzstan', 'laos', 'lebanon', 'malaysia', 'maldives', 'mongolia', 'myanmar', 'nepal', 'north korea', 'oman', 'pakistan', 'palestine', 'philippines', 'qatar', 'saudi arabia', 'singapore', 'south korea', 'sri lanka', 'syria', 'taiwan', 'tajikistan', 'thailand', 'timor-leste', 'turkey', 'turkmenistan', 'united arab emirates', 'uzbekistan', 'vietnam', 'yemen'].includes(countryName)) {
              region = "Asia";
            }
            // Americas
            else if (['antigua and barbuda', 'argentina', 'bahamas', 'barbados', 'belize', 'bolivia', 'brazil', 'canada', 'chile', 'colombia', 'costa rica', 'cuba', 'dominica', 'dominican republic', 'ecuador', 'el salvador', 'grenada', 'guatemala', 'guyana', 'haiti', 'honduras', 'jamaica', 'mexico', 'nicaragua', 'panama', 'paraguay', 'peru', 'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines', 'suriname', 'trinidad and tobago', 'united states', 'uruguay', 'venezuela'].includes(countryName)) {
              region = "Americas";
            }
            // Oceania
            else if (['australia', 'fiji', 'kiribati', 'marshall islands', 'micronesia', 'nauru', 'new zealand', 'palau', 'papua new guinea', 'samoa', 'solomon islands', 'tonga', 'tuvalu', 'vanuatu'].includes(countryName)) {
              region = "Oceania";
            }
            
            return {
              name: { common: country.country },
              flags: { png: `https://flagcdn.com/w320/${country.iso2?.toLowerCase()}.png` },
              region: region,
              population: Math.floor(Math.random() * 100000000), // Random population for demo
              capital: country.cities && country.cities.length > 0 ? [country.cities[0]] : ["Unknown"],
              cca3: country.iso3 || "UNK"
            };
          });
          setData(countries);
        } else {
          setData([]);
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
        setError(err.message)
        setLoading(false)
        setData([])
      })
  }, [])

  return (
    <DATA.Provider value={{data, loading, error}}>
      {children}
    </DATA.Provider>
  )
}

export default DataContext