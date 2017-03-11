import React from 'react'
import Backbone from 'backbone'

var FormInput = React.createClass({
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
				<label for="name"/>
			</div>
			)
	}

})

export default FormInput