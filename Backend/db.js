import pkg from "pg";
const {Client}= pkg 


const dbConfig = {
    user: "postgres",
    password: 'Starovoytov1',
    host: "localhost",
    port: 5432,
    database: "tpark"
}

export const client = new Client(dbConfig)
client.connect().then(()=>{
    console.log('Успешое подключение');
}).catch((error) =>{
    console.error('Ошибка подключение', error)
})