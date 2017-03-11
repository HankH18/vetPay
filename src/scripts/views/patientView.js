import React from 'react'
import Backbone from 'backbone'
import LocationInput from './components/locastion'
import NameInput from './components/formInput'
import MaxPriceInput from './components/maxPrics'
import MinPriceInput from './components/minPrice'

var PatientPage = React.createClass({
	render: function () {
		return (
			<form>
				<NameInput />
				<LocationInput />
				<MaxPriceInput />
				<MinPriceInput />
			</form>
			)
	}
})

export default PatientPage