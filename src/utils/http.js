import axios from 'axios'
export default ({method, url, params ,headers, data, _this}) => {
  return axios({
    method,
    url,
    headers,
    params,
    data
  })
  .then(result => {

    return result.data
  })
  .catch(error => {
    return error
  })
}