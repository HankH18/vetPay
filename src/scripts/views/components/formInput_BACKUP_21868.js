import React from 'react'
import Backbone from 'backbone'

const NameInput = React.createClass({
	_handleKeyDown: function(evtObj){
		if(evtObj.keyCode === 13) {
			evtObj.preventDefault()
			location.hash = `search/${evtObj.target.value}`
			evtObj.target.value = ''
		}
	},
	render: function (){
		return (
			<div className="form-group">
<<<<<<< HEAD
				<label for="name"/>
=======
				<label for="name">Your Name</label>
				<input type="Patient Name" className="form-control" placeholder="Full Name" onKeyDown={this._handleKeyDown} />
>>>>>>> a26123862e597ae74d8073462350bfd4add3570f
			</div>
			)
	}

})

export default FormInput