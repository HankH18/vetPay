import React from 'react'
import Backbone from 'backbone'

const MaxPriceInput = React.createClass({
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
				<label htmlFor="name">Maximum Expenditure</label>
				<input type="Patient Name" className="form-control" placeholder="Full Name" onKeyDown={this._handleKeyDown} />
			</div>
			)
	}

})


export default MaxPriceInput
