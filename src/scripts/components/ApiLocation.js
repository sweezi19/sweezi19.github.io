export default class ApiLocation {
  constructor(data){
    this._apiUrl = data.apiUrl;
    this._headers = data.headers
  }
  // функция получения ответа и преобразования его в объект
  _getRes(res) {
    return (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
  }
  // функция отправки fetch запроса
  _request (url, options) {
    return fetch(`${this._apiUrl}/${url}`, options).then(this._getRes)
  }
  // функция получения информации пользователя
  getUserLocation() {
    return this._request(`ipgeo?apiKey=8ffa38ec677445779ee783968bee7e3e`, { method: 'GET' })
  }
}