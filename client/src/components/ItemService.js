import axios from 'axios';

class ItemService {

  sendData(data) {
    axios.post('http://localhost:4200/add', {
      item: data
    })
    .then(res => this.setState({ items: res.data }))
    .catch(err => console.log(err))
  }
}

export default ItemService;