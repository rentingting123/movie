import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CityLayer.css'
export default class CityLayer extends Component {
    static propTypes = {
        prop: PropTypes
    }
    // const onClose = () => {
    //     console.log(111);
    // }
    render() {
        return (
            <div className="cityLayer">
                <div className="cityLayer__title">
                    <div className="cityLayer__close">关闭</div>
                    选择城市
                </div>
                <div className="cityLayer__content">
                    <div className="cityBlock">
                        <div className="cityBlock__label">定位城市</div>
                        <div className="cityBlock__wrap">
                        <div className="cityBlock__item" >杭州</div>
                            {/* <div className="cityBlock__item" onClick={() => onSelect('杭州')}>杭州</div> */}
                        </div>
                    </div>
                    <div className="cityBlock" id="热门">
                        <div className="cityBlock__label">热门城市</div>
                        <div className="cityBlock__wrap">
                        <div className="cityBlock__item" >杭州</div>
                        {/* { hot.map(city => <div key={city.cityCode} className="cityBlock__item" onClick={() => onSelect(city.regionName)}>{city.regionName}</div>) } */}
                        </div>
                    </div>
                    <div className="cityList">
                        <div className="cityList__label">A</div>
                        <ul className="cityList__wrap">
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                            <li className="cityList__item">杭州</li>
                        {/* { citys.map(city => <li key={city.cityCode} className="cityList__item" onClick={() => onSelect(city.regionName)}>{city.regionName}</li>) } */}
                        </ul>
                    </div>
                    <div className="cityLayer__index cityIndex">
                        <ul className="cityIndex__list">
                            <li className="cityIndex__item"><a href="#定位">定位</a></li>
                            <li className="cityIndex__item"><a href="#热门">热门</a></li>
                            <li className="cityIndex__item"><a href={`#A`}>A</a></li>
                            {/* { alphabetKeys.map(alphabet => <li key={alphabet} className="cityIndex__item"><a href={`#${alphabet}`}>{alphabet}</a></li>) } */}
                        </ul>
                    </div>
                </div>
            </div>
           
        )
    }
}
