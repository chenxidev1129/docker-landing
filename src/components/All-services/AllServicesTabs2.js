import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";

const AllServicesTabs2 = () => {
  return (
    <section id="tabs-2" className="wide-100 tabs-section division">
      <div className="container">
        <Tab.Container defaultActiveKey="tab-11">
          <div className="row">
            {/* TABS NAVIGATION */}
            <div className="col-lg-4">
              <div className="list-group text-center clearfix">
                <Nav className="nav nav-pills" id="pills-tab" as="ul">
                  {/* TAB-1 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-11" href="#tab-11">
                      Routine Medical Care
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-2 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-12" href="#tab-12">
                      Full Blood Picture
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-3 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-13" href="#tab-13">
                      MRI Diagnostic
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-4 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-14" href="#tab-14">
                      X-Ray Diagnostic
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            {/* END TABS NAVIGATION */}
            {/* TABS CONTENT */}
            <div className="col-lg-8">
              <Tab.Content className="tab-content" id="pills-tabContent">
                {/* TAB-1 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade show"
                  eventKey="tab-11"
                  role="tabpanel"
                  aria-labelledby="tab11-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">
                    Routine Medical Care
                  </h3>
                  {/* Text */}
                  <p>
                    Sapien gravida donec enim ipsum blandit porta justo integer
                    odio velna vitae auctor integer congue magna at pretium
                    purus pretium ligula rutrum itae laoreet augue in cubilia
                    laoreet an augue egestas ipsum vitae emo ligula vitae arcu
                    mollis blandit ultrice ligula egestas magna suscipit
                  </p>
                  {/* Image */}
                  <div className="tab-img">
                    <img
                      className="img-fluid"
                      src="images/pediatrics_1000x500.jpg"
                      alt="tab-image"
                    />
                  </div>
                  {/* Text */}
                  <p>
                    An enim nullam tempor sapien gravida donec enim ipsum
                    blandit porta justo integer odio velna vitae auctor integer
                    congue magna at pretium purus pretium ligula rutrum itae
                    laoreet augue in cubilia laoreet an augue egestas ipsum
                    vitae emo ligula vitae arcu mollis blandit ultrice ligula
                    egestas magna suscipit
                  </p>
                  {/* Options List */}
                  <div className="row">
                    <div className="col-xl-6">
                      {/* Option #1 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Nemo ipsam egestas volute and turpis dolores quaerat
                          massa suscipit, luctus neque
                        </p>
                      </div>
                      {/* Option #2 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                      {/* Option #3 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>An enim nullam tempor at pretium blandit</p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      {/* Option #4 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                      {/* Option #5 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>An enim nullam tempor at pretium blandit</p>
                      </div>
                      {/* Option #6 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Options List */}
                  {/* Button */}
                  <Link href="/service-1">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-1 CONTENT */}
                {/* TAB-2 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-12"
                  role="tabpanel"
                  aria-labelledby="tab12-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">Full Blood Picture</h3>
                  {/* Text */}
                  <p>
                    Sapien gravida donec enim ipsum blandit porta justo integer
                    odio velna vitae auctor integer congue magna at pretium
                    purus pretium ligula rutrum itae laoreet augue in cubilia
                    laoreet an augue egestas ipsum vitae emo ligula vitae arcu
                    mollis blandit ultrice ligula egestas magna suscipit
                  </p>
                  {/* Image */}
                  <div className="tab-img">
                    <img
                      className="img-fluid"
                      src="images/hematology_1000x500.jpg"
                      alt="tab-image"
                    />
                  </div>
                  {/* Text */}
                  <p>
                    An enim nullam tempor sapien gravida donec enim ipsum
                    blandit porta justo integer odio velna vitae auctor integer
                    congue magna at pretium purus pretium ligula rutrum itae
                    laoreet augue in cubilia laoreet an augue egestas ipsum
                    vitae emo ligula vitae arcu mollis blandit ultrice ligula
                    egestas magna suscipit
                  </p>
                  {/* Options List */}
                  <div className="row">
                    <div className="col-xl-6">
                      {/* Option #1 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Nemo ipsam egestas volute and turpis dolores quaerat
                          massa suscipit, luctus neque
                        </p>
                      </div>
                      {/* Option #2 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                      {/* Option #3 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>An enim nullam tempor at pretium blandit</p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      {/* Option #4 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                      {/* Option #5 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>An enim nullam tempor at pretium blandit</p>
                      </div>
                      {/* Option #6 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Options List */}
                  {/* Button */}
                  <Link href="/service-1">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-2 CONTENT */}
                {/* TAB-3 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-13"
                  role="tabpanel"
                  aria-labelledby="tab13-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">MRI Diagnostic</h3>
                  {/* Text */}
                  <p>
                    Sapien gravida donec enim ipsum blandit porta justo integer
                    odio velna vitae auctor integer congue magna at pretium
                    purus pretium ligula rutrum itae laoreet augue in cubilia
                    laoreet an augue egestas ipsum vitae emo ligula vitae arcu
                    mollis blandit ultrice ligula egestas magna suscipit
                  </p>
                  {/* Image */}
                  <div className="tab-img">
                    <img
                      className="img-fluid"
                      src="images/mri_1000x500.jpg"
                      alt="tab-image"
                    />
                  </div>
                  {/* Text */}
                  <p>
                    An enim nullam tempor sapien gravida donec enim ipsum
                    blandit porta justo integer odio velna vitae auctor integer
                    congue magna at pretium purus pretium ligula rutrum itae
                    laoreet augue in cubilia laoreet an augue egestas ipsum
                    vitae emo ligula vitae arcu mollis blandit ultrice ligula
                    egestas magna suscipit
                  </p>
                  {/* Options List */}
                  <div className="row">
                    <div className="col-xl-6">
                      {/* Option #1 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Nemo ipsam egestas volute and turpis dolores quaerat
                          massa suscipit, luctus neque
                        </p>
                      </div>
                      {/* Option #2 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                      {/* Option #3 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>An enim nullam tempor at pretium blandit</p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      {/* Option #4 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                      {/* Option #5 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>An enim nullam tempor at pretium blandit</p>
                      </div>
                      {/* Option #6 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Options List */}
                  {/* Button */}
                  <Link href="/service-1">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-3 CONTENT */}
                {/* TAB-4 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-14"
                  role="tabpanel"
                  aria-labelledby="tab14-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">X-Ray Diagnostic</h3>
                  {/* Text */}
                  <p>
                    Sapien gravida donec enim ipsum blandit porta justo integer
                    odio velna vitae auctor integer congue magna at pretium
                    purus pretium ligula rutrum itae laoreet augue in cubilia
                    laoreet an augue egestas ipsum vitae emo ligula vitae arcu
                    mollis blandit ultrice ligula egestas magna suscipit
                  </p>
                  {/* Image */}
                  <div className="tab-img">
                    <img
                      className="img-fluid"
                      src="images/x-ray_1000x500.jpg"
                      alt="tab-image"
                    />
                  </div>
                  {/* Text */}
                  <p>
                    An enim nullam tempor sapien gravida donec enim ipsum
                    blandit porta justo integer odio velna vitae auctor integer
                    congue magna at pretium purus pretium ligula rutrum itae
                    laoreet augue in cubilia laoreet an augue egestas ipsum
                    vitae emo ligula vitae arcu mollis blandit ultrice ligula
                    egestas magna suscipit
                  </p>
                  {/* Options List */}
                  <div className="row">
                    <div className="col-xl-6">
                      {/* Option #1 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Nemo ipsam egestas volute and turpis dolores quaerat
                          massa suscipit, luctus neque
                        </p>
                      </div>
                      {/* Option #2 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                      {/* Option #3 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>An enim nullam tempor at pretium blandit</p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      {/* Option #4 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                      {/* Option #5 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>An enim nullam tempor at pretium blandit</p>
                      </div>
                      {/* Option #6 */}
                      <div className="box-list">
                        <div className="box-list-icon blue-color">
                          <i className="fas fa-angle-double-right" />
                        </div>
                        <p>
                          Magna massa suscipit, luctus neque purus and ipsum
                          neque dolor primis luctus tempor
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* End Options List */}
                  {/* Button */}
                  <Link href="/service-1">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-4 CONTENT */}
              </Tab.Content>
              {/* END TABS CONTENT */}
            </div>
          </div>
        </Tab.Container>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default AllServicesTabs2;
