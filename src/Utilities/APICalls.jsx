const rules = '/rules'
const races = '/races'
const classes = '/classes'
const abilityScores = '/ability-scores'
const alignments = '/alignments'
const backgrounds = '/backgrounds'
const proficiencies = '/proficiencies'
const skills  = '/skills'
const spells = '/spells'
const paths = [rules, races, classes, abilityScores, alignments, backgrounds, proficiencies, skills, spells]

export const getData = () => {
  paths.forEach(path => {
    return (
      fetch(`https://www.dnd5eapi.co/api${path}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject(response.status)
        }
      })
    )
  })
}

