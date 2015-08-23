import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressBarWidth: 0,
      fundsRaised: 1400,
      fundsGoal: 2500
    }
  }

  componentDidMount() {
    let socket = io.connect();

    var fundsRaisedDom = this.refs.fundsRaised.getDOMNode();
    var fundsRaisedCounter = new CountUp(fundsRaisedDom, 0, this.state.fundsRaised, 0, 2.5, { prefix: '$' });

    var fundsGoalDom = this.refs.fundsGoal.getDOMNode();
    var fundsGoalCounter = new CountUp(fundsGoalDom, this.state.fundsGoal, this.state.fundsGoal, 0, 0, { prefix: '$' });

    fundsRaisedCounter.start();
    fundsGoalCounter.start();

    socket.on('newFundsAdded', (data) => {
      var newFundsRaised = this.state.fundsRaised + data.amount;
      this.setState({
        fundsRaised: newFundsRaised,
        progressBarWidth: parseFloat((newFundsRaised / this.state.fundsGoal) * 100).toFixed(0)
      });
      fundsRaisedCounter.update(newFundsRaised);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel">
            <div className="panel-body">

              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-5">
                  <div className="image-list">
                    <img src="http://blog.rdio.com/.a/6a014e87574ac9970d01b7c7024181970b-pi"/>

                    <div className="short-info-top">&#x25cf; Live</div>
                    <div className="short-info">7:00 PM</div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-5 col-xs-6">
                  <div className="description-list">
                    <h3>Taylor Swift</h3>
                    <p>Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos
                      modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <div className="price-list">
                    <div><a href="#" className="btn btn-primary"><i className="ion-android-notifications"></i>Notify</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="progress">
                <div className="progress-bar progress-bar-success" style={{ width: this.state.progressBarWidth + '%' }}>
                  <span style={this.state.progressBarWidth < 50 ? { color: '#333' } : { color: '#fff' }}
                        ref="fundsRaised"></span>
                  <span style={this.state.progressBarWidth < 90 ? { color: '#333' } : { color: '#fff' }}
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
                  <img className="media-object" src="http://image.eveonline.com/Character/1_128.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Sahat Y.</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>34</div>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="http://image.eveonline.com/Character/1_128.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Clarence</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>30</div>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="http://image.eveonline.com/Character/1_128.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Michael C.</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>25</div>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img className="media-object" src="http://image.eveonline.com/Character/1_128.jpg"/>
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
                      src="https://scontent.xx.fbcdn.net/hphotos-xpf1/t31.0-8/11894573_1129030427125061_1749357114485373241_o.jpg"/>

                    <div className="short-info">August 24, 2015 @ 7:00 PM</div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-7 col-xs-8">
                  <h3>Roniit</h3>

                  <p>Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad dicat sanctus detracto vis. Eos
                    modus dolorum ex, qui adipisci maiestatis inciderint no, eos in elit dicat.....</p>
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