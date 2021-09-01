import React from 'react'

const ContactPage = () => {
    return (
      <section className="contact py-5 bg-light" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h4>Contacts</h4>
        <hr />
      </div>
      <div className="col-md-6">
        <div className="address">
          <h5>Address:Trịnh Văn Bô,Nam Từ Liêm,Hà Nội</h5>
          <ul className="list-unstyled">
            <li> T-Mobile Customer Relations</li>
            <li> 0329316963</li>
            <li> Albuquerque, NM 87176-7380</li>
          </ul>
          <p>Please don't send anything to this address.</p>
        </div>
        <div className="email">
          <h5>Email:</h5>
          <ul className="list-unstyled">
            <li> doanttph09742@fpt.edu.vn</li>
            <li> doanttph09742@fpt.edu.vn</li>
          </ul>
        </div>
        <div className="phone">
          <h5>Phone:</h5>
          <ul className="list-unstyled">
            <li> 19008198</li>
            <li> 18008011</li>
          </ul>
        </div>
        <hr />
        <div className="social">
          <ul className="list-inline list-unstyled">
            <li className="list-inline-item">
              <a href="#"><i className="fa fa-facebook-square fa-2x" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#"><i className="fa fa-google-plus-square fa-2x" /></a>
            </li>
            <li className="list-inline-item">
              <a href="#"><i className="fa fa-youtube-play fa-2x" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input id="Full Name" name="Full Name" placeholder="Full Name" className="form-control" type="text" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input id="Mobile No." name="Mobile No." placeholder="Mobile No." className="form-control" required="required" type="text" />
                </div>
                <div className="form-group col-md-6">
                  <select id="inputState" className="form-control">
                    <option selected>Choose ...</option>
                    <option> New Buyer</option>
                    <option> Auction</option>
                    <option> Complaint</option>
                    <option> Feedback</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <textarea id="comment" name="comment" cols={40} rows={5} placeholder="Your Message" className="form-control" defaultValue={""} />
                </div>
              </div>
              <div className="form-row">
                <button type="button" className="btn btn-danger">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}

export default ContactPage;
