<template>
<div class="block-small" style="margin-top: 100px;">
    <div class="container">
        <div class="row py-5 mt-4 align-items-center">
            <div class="col-md-5 pr-lg-6 mb-4 mb-md-0">
                <img src="../assets/login.png" alt="" class="img-fluid mb-4 d-none d-md-block">
            </div>

            <div class="col-md-7 col-lg-6 ml-auto">
                <form @submit.prevent="handleRegister">
                    <h1 class="h3 mb-3 font-weight-normal">S'inscrire</h1><hr>
                    <label for="inputEmail">Email :</label>
                    <input type="email" v-model="email" name="email" id="inputEmail" class="form-control" required autofocus>
                    <br>
                    <label for="inputPassword">Mot de passe :</label>
                    <input type="password" v-model="password" id="inputPassword" class="form-control" required>

                    <input type="hidden" name="_csrf_token" value="">
                    <br/>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">
                        S'inscrire
                    </button>
                    <hr/>
                    <p class="text-center"><a class="text-dark" href="">Mot de passe oublié ?</a></p>
                    <p class="text-center text-secondary">Pas encore de compte ? <a class="text-dark text-bold" href="">Créez en un !</a></p>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import {API_URL} from "../config";
export default {
    name: "Login",
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleRegister(){
            const {email, password} = this;
            return axios.post(API_URL, {
                email, password
            })
        }
    }

}
</script>