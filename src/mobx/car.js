import {observable, useStrict, action, computed} from 'mobx'
useStrict()
class AppCar {
  @observable isLoading = false
  @observable carCount = ''

  @action changeLoading = (loadingState) => {
    this.isLoading = loadingState
  }

  @action setCarCount = (count) => {
    this.carCount = count === 0 ? '' : count
  }
}

const appCar = new AppCar()

export default appCar
