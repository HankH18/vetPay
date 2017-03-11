import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


var specialties = ['abuse', 'addiction', 'behavioral', 'bipolar', 'condependency', 'depression', 'drug abuse', 'impulse control', 'mental deficiency', 'phobia', 'schizophrenia', 'insomnia']

var specialtiesList = specialties.map((specialty) =>
	<li>{specialty}</li>
	);






const app = function() {
  document.querySelector('.container').innerHTML = `<h1>vetPay</h1>`
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..