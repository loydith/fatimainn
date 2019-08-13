import React from 'react';
import axios from 'axios';
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations:[]
        }
    }
    componentDidMount(){
        axios.get('/reservations').then(res => {
            this.setState({
                reservations: res.data
            })
        })
    }
    renderRows = () => {
        return this.state.reservations.map((e, i) =>(
            <tr key={i}>
               <td>{e.full_name}</td>
               <td>{e.email}</td>
               <td>{e.phone}</td>
               <td>{e.room_type}</td>
               <td>{e.room_qty}</td>
               <td>{e.check_in}</td>
               <td>{e.check_out}</td>
               <td>{e.guests_adult}</td>
               <td>{e.guests_child}</td>
            </tr>
        ))
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col s2">
                        <ul className="collection">
                            <li className="collection-item avatar">
                                <i className="fas fa-list circle blue"></i>
                                <a href="#!" className="collection-item">Guest List</a>
                            </li>
                            <li className="collection-item avatar">
                                <i className="circle fas fa-heart pink"></i>
                                <a href="#!" className="collection-item">Guest Reviews</a>
                            </li>
                            <li className="collection-item avatar">
                                <i className="circle far fa-calendar-alt "></i>
                                <a href="#!" className="collection-item">Rates & Availability</a>
                            </li>
                            <li className="collection-item avatar">
                                <i className="far fa-envelope circle green"></i>
                                <a href="#!" className="collection-item">Inbox</a>
                            </li>
                            <li className="collection-item avatar">
                                <i className="fas fa-user-tie circle brown"></i>
                                <a href="#!" className="collection-item">Business Travels</a>
                            </li>
                            <li className="collection-item avatar">
                                <i className="fas fa-store-alt circle yellow"></i>
                                <a href="#!" className="collection-item">Travel Agency</a>
                            </li>
                            <li className="collection-item avatar">
                                <i className="fas fa-store-alt circle orange"></i>
                                <a href="#!" className="collection-item">MarketPlace</a>
                            </li>
                            <li className="collection-item avatar">
                                <i className="fas fa-chart-line circle purple"></i>
                                <a href="#!" className="collection-item">Analytics</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col s10">
                        <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <table className="table table-sm table-hover" id="train-table">
                                    <thead>
                                        <tr>
                                            <th className="col-md-2">Full Name</th>
                                            <th className="col-md-2">Email</th>
                                            <th className="col-md-2">Phone</th>
                                            <th className="col-md-2">Room</th>
                                            <th className="col-md-1">Qty_Rooms</th>
                                            <th className="col-md-2">Check_In</th>
                                            <th className="col-md-2">Check_Out</th>
                                            <th className="col-md-2">Qty_Adults</th>
                                            <th className="col-md-1">Qty_Children</th>
                                            <th className="col-md-1">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderRows()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                </React.Fragment>
        );
    }
}
