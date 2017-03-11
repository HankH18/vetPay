import React from 'react'
import Backbone from 'backbone'
import LocationInput from 'locastion'
import NameInput from 'formInput'
import MaxPriceInput from 'maxInput'
import MinPriceInput from 'minInput'

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
