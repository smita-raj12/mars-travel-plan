import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarsWhetherService from './mars-whether-services.js';
import {MarsCuriosityService,MarsOpportunityService} from './mars-photo-services.js';

function getElements(response) {
  if (response.validity_checks) {
    $('.showTemperature').text(`The temperature in mars ${response.temperature}`);
    $('.showWind').text(`The wind in mars is ${response.wind}.`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getCPhotoElements(response) {
  if (response.photos) {
    $('.showPhoto').attr("src" ,response.photos[0].img_src);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}
function getOPhotoElements(response) {
  if (response.photos) {
    $('.showOPhoto').attr("src" ,response.photos[1].img_src);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#mars').click(function() {
    MarsWhetherService.getWhether()
      .then(function(response) {
        getElements(response);
      },function(error){
        $('.showErrors').text(`There was an error: ${error}`);
    });

    MarsCuriosityService.getCuriosityPhoto()
      .then(function(response){
        getCPhotoElements(response);
      },function(error){
        $('.showErrors').text(`There was an error: ${error}`);
      }); 
      
      MarsOpportunityService.getOpportunityPhoto()
      .then(function(response){
        getOPhotoElements(response);
      },function(error){
        $('.showErrors').text(`There was an error: ${error}`);
      });     
  });  
});