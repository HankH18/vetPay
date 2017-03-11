import React from 'react'
import Backbone from 'backbone'
<<<<<<< HEAD
import LocationInput from './components/locastion'
import NameInput from './components/formInput'
import MaxPriceInput from './components/maxPrics'
=======
import LocationInput from './components/location'
import NameInput from './components/formInput'
import MaxPriceInput from './components/maxPrice'
>>>>>>> upstream/master
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

<<<<<<< HEAD

export default patientView
=======
export default PatientView
>>>>>>> upstream/master
