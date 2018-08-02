import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import {connect} from 'react-redux';
import requireAuth from '../requireAuth';
import * as pointsActions from '../../actions/points';
import {getPoint} from '../../selector';

const AnyReactComponent = ({ text }) => (
	<div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class PointPage extends Component {
	componentWillMount () {
		this.props.pointsLoadingStart();
	}
	render () {
		//const code = this.props.match.params.code.toUpperCase();
		//const selectPoint = this.props.points.find(point => code === point.Code.toUpperCase());
		const {selectPoint} = this.props;
		let renderModel = (<p>Loading...</p>)
		if(selectPoint) {
			const lng = Number.parseFloat(selectPoint.coordX).toFixed(2);
			const lat = Number.parseFloat(selectPoint.coordY).toFixed(2);
			const center = {lng: +lng, lat: +lat};
			renderModel = (
				<div>
					<p>Адрес: {selectPoint.Address}</p>
					<p>Описание к проезду: {selectPoint.AddressComment}</p>
					<p>Город: {selectPoint.City}</p>
					<p>Страна: {selectPoint.CountryName}</p>
					<p>Электронная почта: {selectPoint.Email}</p>
					<p>Полная информация по адресу: {selectPoint.FullAddress}</p>
					<p>Безналичный рассчет: {selectPoint.HaveCashless}</p>
					<p>Примерочная: {selectPoint.IsDressingRoom}</p>
					<p>Станция метро: {selectPoint.MetroStation}</p>
					<p>Название: {selectPoint.Name}</p>
					<p>Близжайшая станция метро: {selectPoint.NearestStation}</p>
					<p>Номер телефона: {selectPoint.Phone}</p>
					<p>Название региона: {selectPoint.RegionName}</p>
					<p>Рабочее время: {selectPoint.WorkTime}</p>
					<div style={{width: "100%", height: "600px"}}>
						<GoogleMapReact
					        defaultCenter={center}
					        defaultZoom={11}
					      >
					        <AnyReactComponent 
					          lat={selectPoint.coorX} 
					          lng={selectPoint.coorY} 
					          text={selectPoint.Address} 
					        />
	      				</GoogleMapReact>
					</div>
				</div>
			);
		}
		if(this.props.points && !selectPoint) {
				renderModel = (<p>Нет такой точки</p>)
		}
		return (<div className="pointElement">{renderModel}</div>);
	}
}

const mapStateToProps = (state, props) => {
	return {
	selectPoint: getPoint(state, props)
}}

export default requireAuth(connect(mapStateToProps, pointsActions)(PointPage));