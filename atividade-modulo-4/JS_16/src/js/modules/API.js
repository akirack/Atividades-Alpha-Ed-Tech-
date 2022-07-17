
//let url = "http://economia.awesomeapi.com.br/json/last/USD-BRL";

export async function fetchAddresByCep(url){
    return (await fetch(url)
    .then(response => {
        if (!response.ok) {
          return new Error('falhou a requisição');
        }
  
        if (response.status === 404) {
          return new Error('não encontrou qualquer resultado')
        }
  
        return response.json()
      })
    );
} 


export async function fetchMap(url){
    return (await fetch(url)
    .then(response => {
        if (!response.ok) {
          return new Error('falhou a requisição');
        }
  
        if (response.status === 404) {
          return new Error('não encontrou qualquer resultado')
        }
  
        return response.json()
      })
    );
} 