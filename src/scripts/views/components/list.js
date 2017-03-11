import React from 'react'

var specialties = ['abuse', 'addiction', 'behavioral', 'bipolar', 'condependency', 'depression', 'drug abuse', 'impulse control', 'mental deficiency', 'phobia', 'schizophrenia', 'insomnia']

var specialtiesList = specialties.map(specialty => <li>{specialty}</li>)

var specialtiesList = specialties.map(function(specialty) {
	return <li>{specialty}</li>
})
 
export default specialtiesList