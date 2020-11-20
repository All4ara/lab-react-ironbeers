import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="card" style={{width: "100%"}}>
            <img className="card-img-top" src="../images/AllBeers.png" alt="Card"/>
            <div className="card-body">
                <Link to="/all">
                    <h5 className="card-title">All Beers</h5>
                    <p className="card-text">Enjoy a variety of beers in our collection.</p>
                </Link>
            </div>
            <img className="card-img-top" src="../images/RandomBeer.png" alt="Card"/>
            <div className="card-body">
                <Link to="/random">
                    <h5 className="card-title">Random Beer</h5>
                    <p className="card-text">Personality test: Which beer are you?</p>
                </Link>
            </div>
            <img className="card-img-top" src="../images/NewBeer.png" alt="Card"/>
            <div className="card-body">
                <Link to="/new">
                    <h5 className="card-title">New Beer</h5>
                    <p className="card-text">Add your favorite beer to our collection.</p>
                </Link>
            </div>

            
        </div>
    )
}

export default Home;