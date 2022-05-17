/**
 * Copyright (C) 2022 Ingeiero en Computación: Ricardo Presilla.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 **/
import Vue from '../node_modules/@vue';
import vSelect from '../node_modules/vue-select/dist/vue-select';

Vue.component('v-select', vSelect);

var vue1 = new Vue({
    el: '#app',
    data: {
        options: [
            'Consulta',
            'Presupuesto',
            'Envio de documentos'
        ],
        projects: [],
    },
    mounted: function(){//Función en el Ciclo de vida del Vue.js ciclo mounted.
        var serverURL = 'http://172.104.91.187/projects';
        var _this = this;
        var configAxios= {
            url: serverURL,
            method: 'get', //Metodo de comunicación get, post, delete, put.
            responseType: 'json', // default
            responseEncoding: 'utf8', // default
            // `data` is the data to be sent as the request body
            data: {},
            // `headers` are custom headers to be sent
            headers: {
                'Content-Type': 'application/json',
                'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80iqnk0skp9Jp6NQ3'
            },
        };
        axios.request(configAxios).then( (response) => {
            console.log(response); //Prueba de comunicación
            _this.projects = response.data; //Asigna la respuesta del json a la data del vue
        });
    },
    methods: {
        suma(a, b){
            return (a+b);
        }
    },
    computed: {},
    watch: {},
});