    import React from 'react'

import { Link } from "react-router-dom";
    class Body extends React.Component{
      render(){	
      const tdImg={
      	height:'18px',
        marginTop:'-2px'
      }	;
    const progressStyle7={
        width:'7%'
      } ; 
       const progressStyle20={
        width:'20%'
      } ; 
       const progressStyle80={
        width:'80%'
      } ;  
      const progressStyle93={
        width:'93%'
      } ;  const progressStyle43={
        width:'43%'
      } ;  const progressStyle57={
        width:'57%'
      } ;  const progressStyle27={
        width:'27%'
      } ;  const progressStyle73={
        width:'73%'
      } ;


const height380={
        width:'380px'
      } ;


       return(
<div>
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-laptop"></i> Dashboard</h3>
            <ol className="breadcrumb">
              <li><i className="fa fa-home"></i><Link to='/'>Home</Link></li>
              <li><i className="fa fa-laptop"></i>Dashboard</li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box blue-bg">
              <i className="fa fa-cloud-download"></i>
              <div className="count">6.674</div>
              <div className="title">Download</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box brown-bg">
              <i className="fa fa-shopping-cart"></i>
              <div className="count">7.538</div>
              <div className="title">Purchased</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box dark-bg">
              <i className="fa fa-thumbs-o-up"></i>
              <div className="count">4.362</div>
              <div className="title">Order</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box green-bg">
              <i className="fa fa-cubes"></i>
              <div className="count">1.426</div>
              <div className="title">Stock</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9 col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2><i className="fa fa-map-marker red"></i><strong>Countries</strong></h2>
                <div className="panel-actions">
                  <a href="index.html#" className="btn-setting"><i className="fa fa-rotate-right"></i></a>
                  <a href="index.html#" className="btn-minimize"><i className="fa fa-chevron-up"></i></a>
                  <a href="index.html#" className="btn-close"><i className="fa fa-times"></i></a>
                </div>
              </div>
              <div className="panel-body-map">
                <div id="map" style={height380}></div>
              </div>

            </div>
          </div>
          <div className="col-md-3">
          
            <ul className="today-datas">
              
              <li>
                <div><span id="todayspark1" className="spark"></span></div>
            
                <div className="datas-text">11,500 visitors/day</div>
              </li>
              <li>
                <div><span id="todayspark2" className="spark"></span></div>
                <div className="datas-text">15,000 Pageviews</div>
              </li>
              <li>
                <div><span id="todayspark3" className="spark"></span></div>
                <div className="datas-text">30.55% Bounce Rate</div>
              </li>
              <li>
                <div><span id="todayspark4" className="spark"></span></div>
                <div className="datas-text">$16,00 Revenue/Day</div>
              </li>
              <li>
                <div><span id="todayspark5" className="spark"></span></div>
                <div className="datas-text">12,000000 visitors every Month</div>
              </li>
            </ul>
          </div>


        </div>


        <div className="row">

          <div className="col-lg-9 col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2><i className="fa fa-flag-o red"></i><strong>Registered Users</strong></h2>
                <div className="panel-actions">
                  <a href="index.html#" className="btn-setting"><i className="fa fa-rotate-right"></i></a>
                  <a href="index.html#" className="btn-minimize"><i className="fa fa-chevron-up"></i></a>
                  <a href="index.html#" className="btn-close"><i className="fa fa-times"></i></a>
                </div>
              </div>
              <div className="panel-body">
                <table className="table bootstrap-datatable countries">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Country</th>
                      <th>Users</th>
                      <th>Online</th>
                      <th>Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src="img/Germany.png" style={tdImg}/></td>
                      <td>Germany</td>
                      <td>2563</td>
                      <td>1025</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={progressStyle73}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100" style={progressStyle27}>
                          </div>
                        </div>
                        <span className="sr-only">73%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="img/India.png" style={tdImg}/></td>
                      <td>India</td>
                      <td>3652</td>
                      <td>2563</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={progressStyle57}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style={progressStyle43}>
                          </div>
                        </div>
                        <span className="sr-only">57%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="img/Spain.png" style={tdImg}/></td>
                      <td>Spain</td>
                      <td>562</td>
                      <td>452</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100" style={progressStyle93}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100" style={progressStyle7}>
                          </div>
                        </div>
                        <span className="sr-only">93%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="img/India.png" style={tdImg}/></td>
                      <td>Russia</td>
                      <td>1258</td>
                      <td>958</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={progressStyle20}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={progressStyle80}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="img/Spain.png" style={tdImg}/></td>
                      <td>USA</td>
                      <td>4856</td>
                      <td>3621</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={progressStyle20}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={progressStyle80}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="img/Germany.png" style={tdImg}/></td>
                      <td>Brazil</td>
                      <td>265</td>
                      <td>102</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={progressStyle20}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={progressStyle80}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="img/Germany.png" style={tdImg}/></td>
                      <td>Coloumbia</td>
                      <td>265</td>
                      <td>102</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={progressStyle20}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={progressStyle80}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="img/Germany.png" style={tdImg}/></td>
                      <td>France</td>
                      <td>265</td>
                      <td>102</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={progressStyle20}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={progressStyle80}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

          </div>
          <div className="col-md-3">

            <div className="social-box facebook">
              <i className="fa fa-facebook"></i>
              <ul>
                <li>
                  <strong>256k</strong>
                  <span>friends</span>
                </li>
                <li>
                  <strong>359</strong>
                  <span>feeds</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">

            <div className="social-box google-plus">
              <i className="fa fa-google-plus"></i>
              <ul>
                <li>
                  <strong>962</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>256</strong>
                  <span>circles</span>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-md-3">

            <div className="social-box twitter">
              <i className="fa fa-twitter"></i>
              <ul>
                <li>
                  <strong>1562k</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>2562</strong>
                  <span>tweets</span>
                </li>
              </ul>
            </div>

          </div>

        </div>


        <div className="row">
          <div className="col-md-4 portlets">
          
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="pull-left">Message</div>
                <div className="widget-icons pull-right">
                  <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a>
                  <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="panel-body">
                
                <div className="padd sscroll">

                  <ul className="chats">

                    <li className="by-me">
                      <div className="avatar pull-left">
                        <img src="img/user.jpg" alt="" />
                      </div>

                      <div className="chat-content">
                        <div className="chat-meta">John Smith <span className="pull-right">3 hours ago</span></div>
                        Vivamus diam elit diam, consectetur dapibus adipiscing elit.
                        <div className="clearfix"></div>
                      </div>
                    </li>

                    <li className="by-other">
                      <div className="avatar pull-right">
                        <img src="img/user22.png" alt="" />
                      </div>

                      <div className="chat-content">
                        <div className="chat-meta">3 hours ago <span className="pull-right">Jenifer Smith</span></div>
                        Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.
                        <div className="clearfix"></div>
                      </div>
                    </li>

                    <li className="by-me">
                      <div className="avatar pull-left">
                        <img src="img/user.jpg" alt="" />
                      </div>

                      <div className="chat-content">
                        <div className="chat-meta">John Smith <span className="pull-right">4 hours ago</span></div>
                        Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit.
                        <div className="clearfix"></div>
                      </div>
                    </li>

                    <li className="by-other">
                      <div className="avatar pull-right">
                        <img src="img/user22.png" alt="" />
                      </div>

                      <div className="chat-content">
                        <div className="chat-meta">3 hours ago <span className="pull-right">Jenifer Smith</span></div>
                        Vivamus diam elit diam, consectetur fermentum sed dapibus eget, Vivamus consectetur dapibus adipiscing elit.
                        <div className="clearfix"></div>
                      </div>
                    </li>

                  </ul>

                </div>
                <div className="widget-foot">

                  <form className="form-inline">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Type your message here..."/>
                    </div>
                    <button type="submit" className="btn btn-info">Send</button>
                  </form>


                </div>
              </div>


            </div>
          </div>

          <div className="col-lg-8">
            <section className="panel">
              <div className="panel-body progress-panel">
                <div className="row">
                  <div className="col-lg-8 task-progress pull-left">
                    <h1>To Do Everyday</h1>
                  </div>
                  <div className="col-lg-4">
                    <span className="profile-ava pull-right">
                                        <img alt="" className="simple" src="img/avatar1_small.jpg"/>
                                        Jenifer smith
                                </span>
                  </div>
                </div>
              </div>
              <table className="table table-hover personal-task">
                <tbody>
                  <tr>
                    <td>Today</td>
                    <td>
                      web design
                    </td>
                    <td>
                      <span className="badge bg-important">Upload</span>
                    </td>
                    <td>
                      <span className="profile-ava">
                                        <img alt="" className="simple" src="img/avatar1_small.jpg"/>
                                    </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Yesterday</td>
                    <td>
                      Project Design Task
                    </td>
                    <td>
                      <span className="badge bg-success">Task</span>
                    </td>
                    <td>
                      <div id="work-progress2"></div>
                    </td>
                  </tr>
                  <tr>
                    <td>21-10-14</td>
                    <td>
                      Generate Invoice
                    </td>
                    <td>
                      <span className="badge bg-success">Task</span>
                    </td>
                    <td>
                      <div id="work-progress3"></div>
                    </td>
                  </tr>
                  <tr>
                    <td>22-10-14</td>
                    <td>
                      Project Testing
                    </td>
                    <td>
                      <span className="badge bg-primary">To-Do</span>
                    </td>
                    <td>
                      <span className="profile-ava">
                                        <img alt="" className="simple" src="img/avatar1_small.jpg"/>
                                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>24-10-14</td>
                    <td>
                      Project Release Date
                    </td>
                    <td>
                      <span className="badge bg-info">Milestone</span>
                    </td>
                    <td>
                      <div id="work-progress4"></div>
                    </td>
                  </tr>
                  <tr>
                    <td>28-10-14</td>
                    <td>
                      Project Release Date
                    </td>
                    <td>
                      <span className="badge bg-primary">To-Do</span>
                    </td>
                    <td>
                      <div id="work-progress5"></div>
                    </td>
                  </tr>
                  <tr>
                    <td>Last week</td>
                    <td>
                      Project Release Date
                    </td>
                    <td>
                      <span className="badge bg-primary">To-Do</span>
                    </td>
                    <td>
                      <div id="work-progress1"></div>
                    </td>
                  </tr>
                  <tr>
                    <td>last month</td>
                    <td>
                      Project Release Date
                    </td>
                    <td>
                      <span className="badge bg-success">To-Do</span>
                    </td>
                    <td>
                      <span className="profile-ava">
                                        <img alt="" className="simple" src="img/avatar1_small.jpg"/>
                                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div><br/><br/>

        <div className="row">
          <div className="col-md-6 portlets">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2><strong>Calendar</strong></h2>
                <div className="panel-actions">
                  <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a>
                  <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                </div>

              </div><br/><br/><br/>
              <div className="panel-body">
                <div id="calendar"></div>

              </div>
            </div>

          </div>

          <div className="col-md-6 portlets">
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="pull-left">Quick Post</div>
                <div className="widget-icons pull-right">
                  <a href="#" className="wminimize"><i className="fa fa-chevron-up"></i></a>
                  <a href="#" className="wclose"><i className="fa fa-times"></i></a>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="panel-body">
                <div className="padd">

                  <div className="form quick-post">
                    <form className="form-horizontal">
                    
                      <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="title">Title</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control" id="title"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="content">Content</label>
                        <div className="col-lg-10">
                          <textarea className="form-control" id="content"></textarea>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-2">Category</label>
                        <div className="col-lg-10">
                          <select className="form-control">
                                                  <option value="">- Choose Cateogry -</option>
                                                  <option value="1">General</option>
                                                  <option value="2">News</option>
                                                  <option value="3">Media</option>
                                                  <option value="4">Funny</option>
                                                </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-lg-2" htmlFor="tags">Tags</label>
                        <div className="col-lg-10">
                          <input type="text" className="form-control" id="tags"/>
                        </div>
                      </div>

                      <div className="form-group">
                      
                        <div className="col-lg-offset-2 col-lg-9">
                          <button type="submit" className="btn btn-primary">Publish</button>
                          <button type="submit" className="btn btn-danger">Save Draft</button>
                          <button type="reset" className="btn btn-default">Reset</button>
                        </div>
                      </div>
                    </form>
                  </div>


                </div>
                <div className="widget-foot">

                </div>
              </div>
            </div>

          </div>

        </div>
</div>
    

        )	
    }
    }

    export default Body