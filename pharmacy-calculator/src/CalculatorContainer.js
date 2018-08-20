import React, { Component } from "react";
import './stylesheets/CalculatorContainer.css';
import { Jumbotron, Button, Grid, Row, Col, DropdownButton, MenuItem } from 'react-bootstrap/lib';

function convertVolume(valNum) {

}

class CalculatorContainer extends Component {
	render() {
		return (
			<div>
			 	<Jumbotron>
				  <h1>Calculator</h1>
				  <p>
				    Easily calculate how to make your IV or convert between common units in the pharmacy!
				  </p>
				  <p>
				    <Button bsStyle="primary">Learn more</Button>
				  </p>
				</Jumbotron>
			{/* might need to use a clearfix */}
				<Grid>
				  <h1>Making an IV Bag</h1>
				  <Row className='show-grid'>
				    <Col xs={6} md={6}>
				      <h2>What you know</h2>
				      <p>Left Half</p>
				      {/*<DropdownButton
					      title={'Select a dose'}
					      key={1}
					      id={'dropdown-basic-1'}
					    >
					      <MenuItem eventKey="1" active>mg</MenuItem>
					      <MenuItem eventKey="2">mL</MenuItem>
					    </DropdownButton>*/}
					    <div>
					      <label className={'ivLabel'}>Dose</label>
						  <input className={'ivInput'}  type="number" placeholder=""
						  onInput={convertVolume(this.value)} onChange={convertVolume(this.value)} />
						    <select id='selDose'>
						    	<option>mg</option>
						    	<option>mL</option>
						    </select>
					    </div>
					    <div>
						    <label className={'ivLabel'}>Diluent</label>
						    <input className={'ivInput'}  type="number" placeholder=""
						    onInput={convertVolume(this.value)} onChange={convertVolume(this.value)} />
						    <select id='selDose'>
						    	<option>mL</option>
						    	<option>L</option>
						    </select>
					    </div>
						  <div>
						  	<label className={'ivLabel'}>Vial Size</label>
							<input className={'ivInput'}  type="number" placeholder=""
							onInput={convertVolume(this.value)} onChange={convertVolume(this.value)} />
						    <select id='selDose'>
						    	<option>mg</option>
						    	<option>mL</option>
						    </select>
						  </div>
					  <div>
					  	<label className={'ivLabel'}>Drug Name</label>
					  	<input  type="text" placeholder=""/>
					  </div>
				    </Col>
				    <Col xs={6} md={6}>
				      <h2>Info needed</h2>
				      <p>Right Half</p>
				    </Col>
				  </Row>

				  <h1>Unit Conversion</h1>
				  <Row className="show-grid">
				  	<Col xs={12} s={8} md={6} className='colCenter'>
				  		<Row className='conversionBtns'>
					  		<Col md={4}>
					  			<Button className='colCenter' bsStyle="primary">Primary</Button>
					  		</Col>
					  		<Col md={4}>
					  			<Button className='colCenter' bsStyle="primary">Primary</Button>
					  		</Col>
					  		<Col md={4}>
					  			<Button className='colCenter' bsStyle="primary">Primary</Button>
					  		</Col>
				  		</Row>
				  	</Col>
				  	
				    <Col xs={6} md={3}>
				      <label>Volume</label>
					  <input id="inputVolume" className='conversionInput' type="number" placeholder="Enter a number"
					  onInput={convertVolume(this.value)} onChange={convertVolume(this.value)} />
				    </Col>
				    <Col xs={6} md={3}>
				      <label>Mass</label>
					  <input id="inputMass" className='conversionInput' type="number" placeholder="Enter a number"
					  onInput={convertVolume(this.value)} onChange={convertVolume(this.value)} />
				    </Col>
				    <Col xs={6} md={3}>
				      <label>Concentration</label>
					  <input id="inputConcentration" className='conversionInput' type="number" placeholder="Enter a number"
					  onInput={convertVolume(this.value)} onChange={convertVolume(this.value)} />
				    </Col>
				    <Col xs={6} md={3}>
				      <label>Rate</label>
					  <input id="inputRate" className='conversionInput' type="number" placeholder="Enter a number"
					  onInput={convertVolume(this.value)} onChange={convertVolume(this.value)} />
				    </Col>
				  </Row>
			  	</Grid>
			</div>   
		);
	}
}

export default CalculatorContainer;

