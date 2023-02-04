import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
export const SingleUser = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState({
  })
  const getUser = () => {
    axios.get(`https://restcountries.com/v3.1/name/` + name)
      .then((data) => {
        if (data.status === 200) {
          setUser(data.data?.[0])
        }
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getUser()
  },)
  return (
    <>
      <div className="container">
        <button onClick={() => navigate(-1)} className="btn btn-danger ms-4 mt-4 mb-4">Back</button>
        <div className="d-flex align-items-center ">
          <img className="w-50 boreder bordered-2 rounded-3 me-5 " src={user.flags?.svg} alt="" width='500px'
            height='450px' />
          <div className="content d-flex align-items-start justify-content-between p-2 ">
            <div className="">
              <h3 className="h3 title d-block fw-bold mb-4 text-danger fs-3 "> {user.name?.common}</h3>
              <p className="text mb-4 fs-3"><strong className="text-warning">Population: </strong>{user.population}</p>
              <p className="text mb-4 fs-3"><strong className="text-warning">Region: </strong>{user.region}</p>
              <p className="text mb-4 fs-3"><strong className="text-warning">Sub Region: </strong>{user.subregion}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}