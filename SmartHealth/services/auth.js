import axios from "axios";

 async function authenticate(mode, data){

    const urlSignIn = 'http://localhost:3001/user/login';
    const urlSignUp = 'http://localhost:3001/user/register';

    if(mode === 'signUp' ){
        const response = await axios.post(urlSignUp, {
            first_name: data.first_name,
            last_name: data.last_name,
            age: data.age,
            gender : data.gender,
            email: data.email,
            password : data.password
        })
        console.log(response.data);
        return response.data.token;
    }

    if(mode === 'signInWithPassword'){
            const response = await axios.post(urlSignIn, {
            email: data.email,
            password: data.password
        })
        console.log(response.data);
        return response.data.token;
    }
    
   

}

export function createUser(data){

    return authenticate('signUp', data);
}

export function login(email,password){
    
    return authenticate('signInWithPassword', email, password);

}

export async function test(email){

     const url = 'http://localhost:3001/journal/'

    const response = await axios.get(url, {params:{ email: '1234@email.com'}});

    return response.data;
}


 