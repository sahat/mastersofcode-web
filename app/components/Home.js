import React from 'react';
import {Link} from 'react-router';

let socket;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fundsRaised: 2067.43,
      fundsGoal: 3000
    }
  }

  componentDidMount() {
    socket = io.connect();

    var fundsRaisedDom = this.refs.fundsRaised.getDOMNode();
    var fundsRaisedCounter = new CountUp(fundsRaisedDom, 0, this.state.fundsRaised, 2, 2, { prefix: '$' });

    var fundsGoalDom = this.refs.fundsGoal.getDOMNode();
    var fundsGoalCounter = new CountUp(fundsGoalDom, 0, this.state.fundsGoal, 0, 0.5, { prefix: '$' });

    fundsRaisedCounter.start();
    fundsGoalCounter.start();

    socket.on('newFundsAdded', (amount) => {
      let newFundsRaised = this.state.fundsRaised + amount;
      this.setState({ fundsRaised: newFundsRaised });
      fundsRaisedCounter.update(newFundsRaised);
    });
  }

  handleNotifyClick() {
    toastr.success('Notifications have been sent to nearby devices.');
    socket.emit('notify');
  }

  render() {
    let progressBarWidth = parseFloat(this.state.fundsRaised / this.state.fundsGoal * 100).toFixed(0);

    return (
      <div className="container">
        <div className="row">
          <div className="panel">
            <div className="panel-body">

              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <div className="image-list">
                    <img src="/img/taylor_swift.jpg"/>
                    <div className="short-info-top"><span>&#x25cf; Live</span></div>
                    <div className="short-info">7:00 PM</div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-5">
                  <div className="description-list">
                    <h3>Taylor Swift</h3>
                    <p>
                      Taylor’s sponsored charity for the Celebrity Charity Fundraising Concert is Doctors without Borders / Médecins Sans Frontières.  MSF provides assistance to populations in distress, to victims of natural or man-made disasters, and to victims of armed conflict. They do so irrespective of race, religion, creed, or political convictions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <div className="price-list">
                    <div><a href="#" className="btn btn-primary" onClick={this.handleNotifyClick}><i className="ion-android-notifications"></i>Notify</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="progress">
                <div className="progress-bar progress-bar-success" style={{ width: progressBarWidth + '%' }}>
                  <span style={progressBarWidth < 50 ? { color: '#333' } : { color: '#fff' }}
                        ref="fundsRaised"></span>
                  <span style={progressBarWidth < 90 ? { color: '#333' } : { color: '#fff' }}
                        className="right" ref="fundsGoal">{this.state.fundsGoal}</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-center"><span className="accent">Top</span> Contributors</h2>

          <div className="panel">
            <div className="panel-body">
              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="/img/avatar.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Sahat Y.</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>34</div>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="/img/avatar.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Clarence</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>30</div>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="/img/avatar.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Michael C.</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>25</div>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="/img/avatar.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Joe</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>12</div>
                </div>
              </div>
            </div>
          </div>


          <div className="text-center">
            <ul className="pagination">
              <li><a href="#">Prev</a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </div>

          <hr/>

          <h2 className="text-center"><span className="accent">Upcoming</span> Events</h2>

          <div className="panel">
            <div className="panel-body">

              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <div className="image-list">
                    <img
                      src="/img/roniit.jpg"/>

                    <div className="short-info">August 24, 2015 @ 7:00 PM</div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-7 col-xs-8">
                  <h3>Roniit</h3>
                  <p>
                    Roniit’s sponsored charity for the Celebrity Charity Fundraising Concert is UNICEF.  UNICEF, the United Nations Children's Fund, is mandated by the United Nations General Assembly to advocate for the protection of children's rights, to help meet their basic needs and to expand their opportunities to reach their full potential.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;