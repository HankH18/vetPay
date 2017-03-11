import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import Banner from './views/components/banner'
import Footer from './views/components/footer'
import FormInput from './views/components/formInput'
import Location from './views/components/location'
import MaxPrice from './views/components/maxPrice'
import minPrice from './views/components/minPrice'
import PriceRange from './views/components/priceRange'
import SubmitButton from './views/components/submitButton'
import PatientView from './views/patientView'




var specialties = ['abuse', 'addiction', 'behavioral', 'bipolar', 'condependency', 'depression', 'drug abuse', 'impulse control', 'mental deficiency', 'phobia', 'schizophrenia', 'insomnia']

var specialtiesList = specialties.map((specialty) =>
	<li>{specialty}</li>
	);






const app = function() {
  var vetRouter = Backbone.Router.extend({
  	routes: {
  	"patient": "patientView"
  },
  patientView: function (){
  	ReactDOM.render(<PatientPage />, document.querySelector('.container'))
  }

  })
}
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..