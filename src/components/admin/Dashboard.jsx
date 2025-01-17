import React from "react";

function Dashboard() {
  return (
    <div
      className="px-3"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        borderRadius: "10px",
        height: "100%",
        marginLeft: "20px",
        marginRight: "10px",
        marginTop: "50px",
      }}
    >
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-2">
          <div className="col-md-3 col-sm-6 p-1">
            <div className="p-3 bg-white shadow p-3 d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="bi bi-cart-plus p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 p-1">
            <div className="p-3 bg-white shadow p-3 d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2450</h3>
                <p className="fs-5">Sales</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 p-1">
            <div className="p-3 bg-white shadow p-3 d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">2250</h3>
                <p className="fs-5">Delivery</p>
              </div>
              <i className="bi bi-truck p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 p-1">
            <div className="p-3 bg-white shadow p-3 d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">20%</h3>
                <p className="fs-5">Increase</p>
              </div>
              <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>
        <table className="table caption-top bg-white rounded" style={{marginTop: "70px"}}>
          <caption className="text-black fs-2">Recent Orders</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default Dashboard;
