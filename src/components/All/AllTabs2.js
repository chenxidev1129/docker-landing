import Link from "next/link";
import React from "react";

const AllTabs2 = () => {
  return (
    <section id="tabs-2" className="wide-100 tabs-section division">
      <div className="container">
        <div className="row">
          {/* TABS NAVIGATION */}
          <div className="col-lg-4">
            <div id="tabs-nav" className="list-group text-center clearfix">
              <ul className="nav nav-pills" id="pills-tab">
                {/* TAB-1 LINK */}
                <li className="nav-item icon-xs">
                  <Link href="#">
                    <a
                      className="nav-link active"
                      id="tab11-list"
                      href="#tab-11"
                    >
                      <span className="flaticon-083-stethoscope" />
                      Pediatrics
                    </a>
                  </Link>
                </li>
                {/* TAB-2 LINK */}
                <li className="nav-item icon-xs">
                  <Link href="#">
                    <a className="nav-link" id="tab12-list" href="#tab-12">
                      <span className="flaticon-005-blood-donation-3" />
                      Full Blood Picture
                    </a>
                  </Link>
                </li>
                {/* TAB-3 LINK */}
                <li className="nav-item icon-xs">
                  <Link href="#">
                    <a className="nav-link" id="tab13-list" href="#tab-13">
                      <span className="flaticon-031-scanner" />
                      MRI Diagnostic
                    </a>
                  </Link>
                </li>
                {/* TAB-4 LINK */}
                <li className="nav-item icon-xs">
                  <Link href="#">
                    <a className="nav-link" id="tab14-list" href="#tab-14">
                      <span className="flaticon-048-lungs" />
                      X-Ray Diagnostic
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* END TABS NAVIGATION */}
          {/* TABS CONTENT */}
          <div className="col-lg-8">
            <div className="tab-content" id="pills-tabContent">
              {/* TAB-1 CONTENT */}
              <div
                className="tab-pane fade show active"
                id="tab-11"
                role="tabpanel"
                aria-labelledby="tab11-list"
              >
                {/* Title */}
                <h3 className="h3-md steelblue-color">Pediatrics</h3>
                {/* Text */}
                <p>
                  Sapien gravida donec enim ipsum blandit porta justo integer
                  odio velna vitae auctor integer congue magna at pretium purus
                  pretium ligula rutrum itae laoreet augue in cubilia laoreet an
                  augue egestas ipsum vitae emo ligula vitae arcu mollis blandit
                  ultrice ligula egestas magna suscipit
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
                  An enim nullam tempor sapien gravida donec enim ipsum blandit
                  porta justo integer odio velna vitae auctor integer congue
                  magna at pretium purus pretium ligula rutrum itae laoreet
                  augue in cubilia laoreet an augue egestas ipsum vitae emo
                  ligula vitae arcu mollis blandit ultrice ligula egestas magna
                  suscipit
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
              </div>
              {/* END TAB-1 CONTENT */}
              {/* TAB-2 CONTENT */}
              <div
                className="tab-pane fade"
                id="tab-12"
                role="tabpanel"
                aria-labelledby="tab12-list"
              >
                {/* Title */}
                <h3 className="h3-md steelblue-color">Full Blood Picture</h3>
                {/* Text */}
                <p>
                  Sapien gravida donec enim ipsum blandit porta justo integer
                  odio velna vitae auctor integer congue magna at pretium purus
                  pretium ligula rutrum itae laoreet augue in cubilia laoreet an
                  augue egestas ipsum vitae emo ligula vitae arcu mollis blandit
                  ultrice ligula egestas magna suscipit
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
                  An enim nullam tempor sapien gravida donec enim ipsum blandit
                  porta justo integer odio velna vitae auctor integer congue
                  magna at pretium purus pretium ligula rutrum itae laoreet
                  augue in cubilia laoreet an augue egestas ipsum vitae emo
                  ligula vitae arcu mollis blandit ultrice ligula egestas magna
                  suscipit
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
              </div>
              {/* END TAB-2 CONTENT */}
              {/* TAB-3 CONTENT */}
              <div
                className="tab-pane fade"
                id="tab-13"
                role="tabpanel"
                aria-labelledby="tab13-list"
              >
                {/* Title */}
                <h3 className="h3-md steelblue-color">MRI Diagnostic</h3>
                {/* Text */}
                <p>
                  Sapien gravida donec enim ipsum blandit porta justo integer
                  odio velna vitae auctor integer congue magna at pretium purus
                  pretium ligula rutrum itae laoreet augue in cubilia laoreet an
                  augue egestas ipsum vitae emo ligula vitae arcu mollis blandit
                  ultrice ligula egestas magna suscipit
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
                  An enim nullam tempor sapien gravida donec enim ipsum blandit
                  porta justo integer odio velna vitae auctor integer congue
                  magna at pretium purus pretium ligula rutrum itae laoreet
                  augue in cubilia laoreet an augue egestas ipsum vitae emo
                  ligula vitae arcu mollis blandit ultrice ligula egestas magna
                  suscipit
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
              </div>
              {/* END TAB-3 CONTENT */}
              {/* TAB-4 CONTENT */}
              <div
                className="tab-pane fade"
                id="tab-14"
                role="tabpanel"
                aria-labelledby="tab14-list"
              >
                {/* Title */}
                <h3 className="h3-md steelblue-color">X-Ray Diagnostic</h3>
                {/* Text */}
                <p>
                  Sapien gravida donec enim ipsum blandit porta justo integer
                  odio velna vitae auctor integer congue magna at pretium purus
                  pretium ligula rutrum itae laoreet augue in cubilia laoreet an
                  augue egestas ipsum vitae emo ligula vitae arcu mollis blandit
                  ultrice ligula egestas magna suscipit
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
                  An enim nullam tempor sapien gravida donec enim ipsum blandit
                  porta justo integer odio velna vitae auctor integer congue
                  magna at pretium purus pretium ligula rutrum itae laoreet
                  augue in cubilia laoreet an augue egestas ipsum vitae emo
                  ligula vitae arcu mollis blandit ultrice ligula egestas magna
                  suscipit
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
                        Magna massa suscipit, luctus neque purus and ipsum neque
                        dolor primis luctus tempor
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
              </div>
              {/* END TAB-4 CONTENT */}
            </div>
            {/* END TABS CONTENT */}
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default AllTabs2;
