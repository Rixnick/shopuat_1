import React from 'react';


const admin = () => {
    return (
        <>
            <input type="checkbox" id="sidebar-toggle" />
            <div className="sidebar">
                <div className="sidebar-header">
                <h3 className="brand">
                    <span className="ti-unlink" />
                    <span>Ozonr Shope</span>
                </h3>
                <label htmlFor="sidebar-toggle" className="ti-menu-alt" />
                </div>
                {/* Sidebar */}
                <div className="sidebar-menu">
                <ul>
                    <li>
                    <a href="#">
                        <span className="ti-home" />
                        <span>ຫນ້າຫລັກ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="ti-view-list" />
                        <span>ລາຍການສັ່ງຊື້</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="ti-server" />
                        <span>ສິນຄ້າໃນສ່າງ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="ti-clipboard" />
                        <span>ປະເພດສີນຄ້າ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="ti-folder" />
                        <span>ແບຣນສີນຄ້າ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="ti-layout-grid2" />
                        <span>ລາຍການຫມວດສິນຄ້າ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="ti-wallet" />
                        <span>ຂໍ້ມູນການຊຳລະ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="ti-stats-up" />
                        <span>ຂໍ້ມູນການຂ່າຍອອກສິນຄ້າ</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span className="ti-settings" />
                        <span>ຂໍ້ມູນຜູ້ໃຊ້</span>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            {/* Maint Contents */}
            <div className="main-content">
                {/* Header */}
                <header>
                <div className="search-wrapper">
                    <span className="ti-search" />
                    <input type="search" name="search" id="search" placeholder="Search..." />
                </div>
                <div className="social-icons">
                    <span className="ti-bell" />
                    <span className="ti-comment" />
                    <div />
                </div>
                </header>
                {/* Main Section */}
                <main>
                <h2 className="dash-title">Over Views</h2>
                <div className="dash-cards">
                    <div className="card-single">
                    <div className="card-body">
                        <span className="ti-briefcase" />
                        <div>
                        <h5>Account Balance</h5>
                        <h4>$30,405.00</h4>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#">View all</a>
                    </div>
                    </div>
                    <div className="card-single">
                    <div className="card-body">
                        <span className="ti-reload" />
                        <div>
                        <h5>Pending</h5>
                        <h4>$21,249.00</h4>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#">View all</a>
                    </div>
                    </div>
                    <div className="card-single">
                    <div className="card-body">
                        <span className="ti-check-box" />
                        <div>
                        <h5>Proccessed</h5>
                        <h4>$74,905.00</h4>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#">View all</a>
                    </div>
                    </div>
                    <div className="card-single">
                    <div className="card-body">
                        <span className="ti-book" />
                        <div>
                        <h5>Total Report</h5>
                        <h4>$174,905.00</h4>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="#">View all</a>
                    </div>
                    </div>
                </div>
                <section className="recent">
                    <div className="activity-grid">
                    <div className="activity-card">
                        <h3>Recently Activity</h3>
                        <div className="table-responsive">
                        <table>
                            <thead>
                            <tr>
                                <th>Project</th>
                                <th>Start Data</th>
                                <th>End Date</th>
                                <th>Team</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>App Development</td>
                                <td>23 Aug, 2020</td>
                                <td>23 Dec, 2020</td>
                                <td className="td-team">
                                <div className="img-1" />
                                <div className="img-2" />
                                <div className="img-3" />
                                </td>
                                <td>
                                <span className="badge success">Success</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Frontend Development</td>
                                <td>23 Aug, 2020</td>
                                <td>23 Dec, 2020</td>
                                <td className="td-team">
                                <div className="img-1" />
                                <div className="img-2" />
                                <div className="img-3" />
                                </td>
                                <td>
                                <span className="badge warning">Processing</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Marketting Reasearch</td>
                                <td>23 Aug, 2020</td>
                                <td>23 Dec, 2020</td>
                                <td className="td-team">
                                <div className="img-1" />
                                <div className="img-2" />
                                <div className="img-3" />
                                </td>
                                <td>
                                <span className="badge success">Success</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Backend Development</td>
                                <td>23 Aug, 2020</td>
                                <td>23 Dec, 2020</td>
                                <td className="td-team">
                                <div className="img-1" />
                                <div className="img-2" />
                                <div className="img-3" />
                                </td>
                                <td>
                                <span className="badge warning">Processing</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Official building Construct</td>
                                <td>23 Aug, 2020</td>
                                <td>23 Dec, 2020</td>
                                <td className="td-team">
                                <div className="img-1" />
                                <div className="img-2" />
                                <div className="img-3" />
                                </td>
                                <td>
                                <span className="badge success">Success</span>
                                </td>
                            </tr>
                            <tr>
                                <td>MS Advanced Specialist Training</td>
                                <td>23 Aug, 2020</td>
                                <td>23 Dec, 2020</td>
                                <td className="td-team">
                                <div className="img-1" />
                                <div className="img-2" />
                                <div className="img-3" />
                                </td>
                                <td>
                                <span className="badge warning">Processing</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="summary">
                        <div className="summary-card">
                        <div className="summary-single">
                            <span className="ti-id-badge" />
                            <h3>196</h3>
                            <small>Number Of Staff</small>
                        </div>
                        <div className="summary-single">
                            <span className="ti-calendar" />
                            <h3>16</h3>
                            <small>Number Of Leaves</small>
                        </div>
                        <div className="summary-single">
                            <span className="ti-face-smile" />
                            <h3>59</h3>
                            <small>Profile update requested</small>
                        </div>
                        </div>
                        <div className="bday-card">
                        <div className="bday-flex">
                            <div className="bday-image" />
                            <div className="bday-info">
                            <h5>Loki J. Rixnickz</h5>
                            <small>Birthday Today</small>
                            </div>
                        </div>
                        <div className="text-center">
                            <button>
                            <span className="ti-gift" />
                            Wish him
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </main>
            </div>

        </>
    )
}

export default admin;
