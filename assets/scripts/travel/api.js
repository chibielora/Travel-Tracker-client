const config = require('./../config.js')
const store = require('./../store.js')

const createTravel = function (data) {
  // console.log(store.user._id)
  // console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + '/travel',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      travel: {
        date: data.travel.date,
        location: data.travel.location
      }
    }
  })
}

const travelIndex = () => {
  // console.log('this is owner from api ', store.user._id)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/travel',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      travel: {
        owner: store.user._id
      }
    }
  })
}

module.exports = {
  travelIndex,
  createTravel
  // getTravel,
  // editTravel,
  // deleteTravel
}
