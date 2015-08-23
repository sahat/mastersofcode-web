import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);

    var element = this.refs.fundsRaised.getDOMNode();
    var demo = new CountUp(element, 0, 1400, 0, 2.5, { prefix: '$' });

    demo.start();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
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
                <div className="progress-bar progress-bar-success" style={{ width: "60%"}}>
                  <span ref="fundsRaised"></span>
                  <span className="right" ref="fundsGoal">$2,500</span>
                </div>
              </div>
            </div>
          </div>


          <h2 className="text-center"><span className="accent">Top</span> Contributors</h2>

          <div className="panel">
            <div className="panel-body">

              <div className="media">
                <div className="media-left">
                  <img className="media-object"
                       src="http://static1.businessinsider.com/image/528d41f76bb3f7d71051e27f/when-hiring-always-ask-yourself-where-can-this-person-go-from-here.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Sahat Y.</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>140</div>

                </div>
              </div>


              <div className="media">
                <div className="media-left">
                  <img className="media-object"
                       src="http://static1.businessinsider.com/image/528d41f76bb3f7d71051e27f/when-hiring-always-ask-yourself-where-can-this-person-go-from-here.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Clarence</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>30</div>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img className="media-object"
                       src="http://static1.businessinsider.com/image/528d41f76bb3f7d71051e27f/when-hiring-always-ask-yourself-where-can-this-person-go-from-here.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Michael C.</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>25</div>
                </div>
              </div>

              <div className="media">
                <div className="media-left">
                  <img className="media-object"
                       src="http://static1.businessinsider.com/image/528d41f76bb3f7d71051e27f/when-hiring-always-ask-yourself-where-can-this-person-go-from-here.jpg"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Joe</h4>
                  <div className="text-success"><i className="ion-social-usd"></i>40</div>

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