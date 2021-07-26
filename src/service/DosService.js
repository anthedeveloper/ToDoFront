

export default class DosService {

    getTodos() {
        return fetch('data.json',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(d => d.data);
    }

}