import axios from "axios";


const instance = axios.create({
    baseURL: 'http://10.31.33.12:3000'
})


const ApiContato = {
    getContato: () =>{
       return instance.get('/Contatos');
    },

    postContato: (contato) =>{
       return instance.post("/Contatos", contato);
    }, 

    putContato: (contato) => {
        return instance.put("/Contatos/" + contato.id, contato);
    },

    deleteContato: (idContato) =>{
        return instance.delete("/Contatos/" + idContato)
    }


}

export default ApiContato;