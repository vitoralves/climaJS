import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query;
    }

    async results() {
        const token = '898285b3ae7c116ea97a406cf925d469';
        const res = await axios(`http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token=${token}`);
        console.log(res);
    }
}





