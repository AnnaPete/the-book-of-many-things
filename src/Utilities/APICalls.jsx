export const getData = () => {
  paths.forEach(path => {
    return (
      fetch('http://localhost:3000/api/v1/data')
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

