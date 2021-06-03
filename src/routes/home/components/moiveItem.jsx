import React from 'react'
import './movieItem.css'
const movieItem = ()=> {
    return (
        <div className="movieItem">
            <div className="movieItem__poster">
                <img src="/source/movie/asset1.jpeg" alt="" />
            </div>
            <div className="movieItem__detail">
                <div className="movieItem__name">神秘巨星</div>
                <div className="movieItem__score">观众评分 <span>2</span></div>
                <div className="movieItem__director">导演：张三三</div>
                <div className="movieItem__actor">主演：李思思</div>
                {/* { data.actor && <div className="movieItem__actor">主演：李思思</div> } */}
                <div className="movieItem__tag">
                    <span className="tTag tTag--blue">11</span>
                    <span className="tTag tTag--red">22</span>
                {/* {
                    data.tags.map((tag, i) => {
                    if (i%2) {
                        return <span key={tag} className="tTag tTag--blue">{tag}</span>;
                    }
                    return  <span key={tag} className="tTag tTag--red">{tag}</span>;
                    })
                } */}
                </div>
            </div>
            <div className="movieItem__btn">
                <button className="tBtn">购票</button>
                <span className="movieItem__price">9.9</span>
            </div>
        </div>
    )
}
export default  movieItem