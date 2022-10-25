
const Router = window.ReactRouterDOM.BrowserRouter;
const Link = window.ReactRouterDOM.Link;
const Route = window.ReactRouterDOM.Route;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

const { 
    Marker, 
    Map: LeafletMap,
    Popup, 
    TileLayer, 
    Circle } = ReactLeaflet;

class Map extends React.Component {
    render() {
		const position = [-11.6, 27.4];
        return (
			<div>
				<h3 className="text-dark mb-1">Carte</h3>
                <LeafletMap center={position} zoom={8} attributionControl={false}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    detectRetina={true}
                    maxZoom={18}
                    />
                    <Circle center={position} fillColor="blue" radius={200} />
                    <Marker position={position}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                    </Marker>
                </LeafletMap>
            </div>
        )
    }
}

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<h3 class="text-dark mb-4">Team</h3>
				<div class="card shadow">
					<div class="card-header py-3">
						<p class="text-primary m-0 fw-bold">Employee Info</p>
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-6 text-nowrap">
								<div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">Show&nbsp;<select class="d-inline-block form-select form-select-sm">
											<option value="10" selected="">10</option>
											<option value="25">25</option>
											<option value="50">50</option>
											<option value="100">100</option>
										</select>&nbsp;</label></div>
							</div>
							<div class="col-md-6">
								<div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
							</div>
						</div>
						<div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
							<table class="table my-0" id="dataTable">
								<thead>
									<tr>
										<th>Name</th>
										<th>Position</th>
										<th>Office</th>
										<th>Age</th>
										<th>Start date</th>
										<th>Salary</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar1.jpeg"/>Airi Satou</td>
										<td>Accountant</td>
										<td>Tokyo</td>
										<td>33</td>
										<td>2008/11/28</td>
										<td>$162,700</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar2.jpeg"/>Angelica Ramos</td>
										<td>Chief Executive Officer(CEO)</td>
										<td>London</td>
										<td>47</td>
										<td>2009/10/09<br/></td>
										<td>$1,200,000</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar3.jpeg"/>Ashton Cox</td>
										<td>Junior Technical Author</td>
										<td>San Francisco</td>
										<td>66</td>
										<td>2009/01/12<br/></td>
										<td>$86,000</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar4.jpeg"/>Bradley Greer</td>
										<td>Software Engineer</td>
										<td>London</td>
										<td>41</td>
										<td>2012/10/13<br/></td>
										<td>$132,000</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar5.jpeg"/>Brenden Wagner</td>
										<td>Software Engineer</td>
										<td>San Francisco</td>
										<td>28</td>
										<td>2011/06/07<br/></td>
										<td>$206,850</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar1.jpeg"/>Brielle Williamson</td>
										<td>Integration Specialist</td>
										<td>New York</td>
										<td>61</td>
										<td>2012/12/02<br/></td>
										<td>$372,000</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar2.jpeg"/>Bruno Nash<br/></td>
										<td>Software Engineer</td>
										<td>London</td>
										<td>38</td>
										<td>2011/05/03<br/></td>
										<td>$163,500</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar3.jpeg"/>Caesar Vance</td>
										<td>Pre-Sales Support</td>
										<td>New York</td>
										<td>21</td>
										<td>2011/12/12<br/></td>
										<td>$106,450</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar4.jpeg"/>Cara Stevens</td>
										<td>Sales Assistant</td>
										<td>New York</td>
										<td>46</td>
										<td>2011/12/06<br/></td>
										<td>$145,600</td>
									</tr>
									<tr>
										<td><img class="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar5.jpeg"/>Cedric Kelly</td>
										<td>Senior JavaScript Developer</td>
										<td>Edinburgh</td>
										<td>22</td>
										<td>2012/03/29<br/></td>
										<td>$433,060</td>
									</tr>
								</tbody>
								<tfoot>
									<tr>
										<td><strong>Name</strong></td>
										<td><strong>Position</strong></td>
										<td><strong>Office</strong></td>
										<td><strong>Age</strong></td>
										<td><strong>Start date</strong></td>
										<td><strong>Salary</strong></td>
									</tr>
								</tfoot>
							</table>
						</div>
						<div class="row">
							<div class="col-md-6 align-self-center">
								<p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
							</div>
							<div class="col-md-6">
								<nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
									<ul class="pagination">
										<li class="page-item disabled"><a class="page-link" aria-label="Previous" href="#"><span aria-hidden="true">«</span></a></li>
										<li class="page-item active"><a class="page-link" href="#">1</a></li>
										<li class="page-item"><a class="page-link" href="#">2</a></li>
										<li class="page-item"><a class="page-link" href="#">3</a></li>
										<li class="page-item"><a class="page-link" aria-label="Next" href="#"><span aria-hidden="true">»</span></a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


class App extends React.Component {
	
	render() {
		return (
			<Router>
				<div id="wrapper">
					<nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
						<div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
								<div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
								<div className="sidebar-brand-text mx-3"><span>Brand</span></div>
							</a>
							<hr className="sidebar-divider my-0" />
							<ul className="navbar-nav text-light" id="accordionSidebar">
								<li className="nav-item">
									<Link className="nav-link active" to="/">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map-fill" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"/>
										</svg>
										<span className="ms-1">Carte</span>
									</Link>
								</li>
								<li className="nav-item"><Link className="nav-link" to="/dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></Link></li>
							</ul>
							<div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
						</div>
					</nav>
					<div class="d-flex flex-column" id="content-wrapper">
						<div id="content">
							<nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
								<div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
									<form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
										<div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
									</form>
									<ul class="navbar-nav flex-nowrap ms-auto">
										<li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i class="fas fa-search"></i></a>
											<div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
												<form class="me-auto navbar-search w-100">
													<div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."/>
														<div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
													</div>
												</form>
											</div>
										</li>
										<li class="nav-item dropdown no-arrow mx-1">
											<div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="badge bg-danger badge-counter">3+</span><i class="fas fa-bell fa-fw"></i></a>
												<div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
													<h6 class="dropdown-header">alerts center</h6><a class="dropdown-item d-flex align-items-center" href="#">
														<div class="me-3">
															<div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
														</div>
														<div><span class="small text-gray-500">December 12, 2019</span>
															<p>A new monthly report is ready to download!</p>
														</div>
													</a><a class="dropdown-item d-flex align-items-center" href="#">
														<div class="me-3">
															<div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
														</div>
														<div><span class="small text-gray-500">December 7, 2019</span>
															<p>$290.29 has been deposited into your account!</p>
														</div>
													</a><a class="dropdown-item d-flex align-items-center" href="#">
														<div class="me-3">
															<div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
														</div>
														<div><span class="small text-gray-500">December 2, 2019</span>
															<p>Spending Alert: We've noticed unusually high spending for your account.</p>
														</div>
													</a><a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
												</div>
											</div>
										</li>
										<li class="nav-item dropdown no-arrow mx-1">
											<div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="badge bg-danger badge-counter">7</span><i class="fas fa-envelope fa-fw"></i></a>
												<div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
													<h6 class="dropdown-header">alerts center</h6><a class="dropdown-item d-flex align-items-center" href="#">
														<div class="dropdown-list-image me-3"><img class="rounded-circle" src="assets/img/avatars/avatar4.jpeg"/>
															<div class="bg-success status-indicator"></div>
														</div>
														<div class="fw-bold">
															<div class="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
															<p class="small text-gray-500 mb-0">Emily Fowler - 58m</p>
														</div>
													</a><a class="dropdown-item d-flex align-items-center" href="#">
														<div class="dropdown-list-image me-3"><img class="rounded-circle" src="assets/img/avatars/avatar2.jpeg"/>
															<div class="status-indicator"></div>
														</div>
														<div class="fw-bold">
															<div class="text-truncate"><span>I have the photos that you ordered last month!</span></div>
															<p class="small text-gray-500 mb-0">Jae Chun - 1d</p>
														</div>
													</a><a class="dropdown-item d-flex align-items-center" href="#">
														<div class="dropdown-list-image me-3"><img class="rounded-circle" src="assets/img/avatars/avatar3.jpeg"/>
															<div class="bg-warning status-indicator"></div>
														</div>
														<div class="fw-bold">
															<div class="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
															<p class="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
														</div>
													</a><a class="dropdown-item d-flex align-items-center" href="#">
														<div class="dropdown-list-image me-3"><img class="rounded-circle" src="assets/img/avatars/avatar5.jpeg"/>
															<div class="bg-success status-indicator"></div>
														</div>
														<div class="fw-bold">
															<div class="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
															<p class="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
														</div>
													</a><a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
												</div>
											</div>
											<div class="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
										</li>
										<div class="d-none d-sm-block topbar-divider"></div>
										<li class="nav-item dropdown no-arrow">
											<div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span><img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg"/></a>
												<div class="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a class="dropdown-item" href="#"><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" href="#"><i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a class="dropdown-item" href="#"><i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
													<div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</nav>
							<div class="container-fluid">
								<Switch>
									<Route path="/dashboard" exact render={(props) => <Dashboard {...props} />} />
									<Route path="/" exact render={(props) => <Map {...props} />} />
								</Switch>
							</div>
						</div>
						<footer class="bg-white sticky-footer">
							<div class="container my-auto">
								<div class="text-center my-auto copyright"><span>Copyright © Brand 2022</span></div>
							</div>
						</footer>
					</div>
				</div>
			</Router>
		)
	}
}

ReactDOM.createRoot(document.getElementById("page-top")).render(<App />);

