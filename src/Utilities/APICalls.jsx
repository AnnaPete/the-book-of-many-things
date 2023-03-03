export const getData = () => {
  return fetch('https://thebookofmanythings.herokuapp.com/api/v1/data', {
    mode: 'no-cors'
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject(response.status)
    }
  })
}