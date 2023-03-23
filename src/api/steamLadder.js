require('dotenv').config();
const request = require('request-promise');

const API_KEY = process.env.STEAMLADDER_API_KEY;
const BASE_URL = 'https://steamladder.com/api/v1';

module.exports = function(){
    this.options = {
        method: 'GET',
        json: true,
        headers: { 'Authorization': 'Token ' + API_KEY }
    };

    this.getProfile = async (steamID) => {
        const opt = this.options;
        opt.uri = BASE_URL + '/profile/' + steamID;
        const res = await request(options)
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                return false;
            });
            if(!response) return new Error(`Error happened while handling your request ([${opt.method}] on ${opt.uri}).`);
        return res;
    }

    this.reloadProfile = async (steamID) => {
        const opt = this.options;
        opt.uri = BASE_URL + '/profile/' + steamID;
        opt.method = 'POST';
        const res = await request(options)
            .then(function (response) {
                return response;
            })
            .catch(function (err) {
                return false;
            });
        if(!response) return new Error(`Error happened while handling your request ([${opt.method}] on ${opt.uri}).`);
        return res;
    }
}