import axios from '../../util/API';

class OrderService {

    setFocus() {
        console.log('OrderService');
        document.getElementById("qty_0").focus();
    }

    add() {
        console.log('Add');
    }

    remove() {
        console.log('Remove');
    }

    quantityChange(event){
        console.log("event.target.value");
        console.log(event.target.value);
    }

    save(data) {
        console.log("FORMDATA");
        console.log(data)
    }



}

export default OrderService;