import React from 'react'
import Backbone from 'backbone'

import LocationInput from './components/location'
import NameInput from './components/formInput'
import MaxPriceInput from './components/maxPrice'
import MinPriceInput from './components/minPrice'

var PatientView = React.createClass({
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


export default PatientView

