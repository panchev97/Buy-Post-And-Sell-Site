const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_HkY_Q-i4l";
const kinveyAppSecret = "9656208ffc76412c8e840e63b1e95439";
const kinveyAppAuthHeaders = {
    'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
};