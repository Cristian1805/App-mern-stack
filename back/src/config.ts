import dotenv from 'dotenv'
dotenv.config();


console.log(process.env.Hello)


export default {
    MONGO_DATABASE: 'videosdb',
    MONGO_USER: 'admin',
    MONGO_PASSWORD: 'admin',
    MONGO_HOST: 'localhost'
}


//Continuar minuto 36