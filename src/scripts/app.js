import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import PatientPage from './views/patientView'
import FormInput from './views/components/formInput'

var testOne = 'success'


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