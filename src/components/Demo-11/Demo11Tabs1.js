import Link from "next/link";
import React from "react";

const Demo11Tabs1 = () => {
  return (
    <section id="tabs-1" className="wide-100 tabs-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* TABS NAVIGATION */}
            <div id="tabs-nav" className="list-group text-center">
              <ul className="nav nav-pills" id="pills-tab">
                {/* TAB-1 LINK */}
                <li className="nav-item icon-xs">
                  <Link href="#">
                    <a className="nav-link active" href="#tab-1">
                      <span className="flaticon-083-stethoscope" />
                      Pediatrics
                    </a>
                  </Link>
                </li>
                {/* TAB-2 LINK */}
                <li className="nav-item icon-xs">
                  <Link href="#">
                    <a className="nav-link" href="#tab-2">
                      <span className="flaticon-005-blood-donation-3" />
                      Hematology
                    </a>
                  </Link>
                </li>
                {/* TAB-3 LINK */}
                <li className="nav-item icon-xs">
                  <Link href="#">
                    <a className="nav-link" href="#tab-3">
                      <span className="flaticon-031-scanner" />
                      MRI
                    </a>
                  </Link>
                </li>
                {/* TAB-4 LINK */}
                <li className="nav-item icon-xs">
                  <Link href="#">
                    <a className="nav-link" href="#tab-4">
                      <span className="flaticon-048-lungs" />
                      X-Ray Diagnostic
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* END TABS NAVIGATION */}
            {/* TABS CONTENT */}
            <div className="tab-content" id="pills-tabContent">
              {/* TAB-1 CONTENT */}
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
                aria-labelledby="tab1-list"
              >
                <div className="row d-flex align-items-center">
                  {/* TAB-1 IMAGE */}
                  <div className="col-lg-6">
                    <div className="tab-img">
                      <img
                        className="img-fluid"
                        src="images/pediatrics_700x700.jpg"
                        alt="tab-image"
                      />
                    </div>
                  </div>
                  {/* TAB-1 TEXT */}
                  <div className="col-lg-6">
                    <div className="txt-block pc-30">
                      {/* Title */}
                      <h3 className="h3-md steelblue-color">Pediatrics</h3>
                      {/* Text */}
                      <p className="mb-30">
                        An enim nullam tempor sapien gravida donec enim ipsum
                        blandit porta justo integer odio velna vitae auctor
                        integer congue magna at pretium purus pretium ligula
                        rutrum itae laoreet augue in cubilia laoreet an augue
                        egestas ipsum vitae emo ligula vitae arcu mollis blandit
                        ultrice ligula egestas magna suscipit
                      </p>
                      {/* Options List */}
                      <div className="row">
                        <div className="col-xl-6">
                          {/* Option #1 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Nemo ipsam egestas volute and turpis dolores
                              quaerat
                            </p>
                          </div>
                          {/* Option #2 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">Magna luctus tempor</p>
                          </div>
                          {/* Option  #3 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              An enim nullam tempor at pretium purus blandit
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          {/* Option #4 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Magna luctus tempor blandit a vitae suscipit
                              mollis
                            </p>
                          </div>
                          {/* Option #5 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Nemo ipsam egestas volute turpis dolores quaerat
                            </p>
                          </div>
                          {/* Option #6 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">An enim nullam tempor</p>
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
                  </div>
                  {/* END TAB-1 TEXT */}
                </div>
              </div>
              {/* END TAB-1 CONTENT */}
              {/* TAB-2 CONTENT */}
              <div
                className="tab-pane fade"
                id="tab-2"
                role="tabpanel"
                aria-labelledby="tab2-list"
              >
                <div className="row d-flex align-items-center">
                  {/* TAB-2 IMAGE */}
                  <div className="col-lg-6">
                    <div className="tab-imgs">
                      <img
                        className="img-fluid"
                        src="images/hematology_700x700.jpg"
                        alt="tab-image"
                      />
                    </div>
                  </div>
                  {/* TAB-2 TEXT */}
                  <div className="col-lg-6">
                    <div className="txt-block pc-30">
                      {/* Title */}
                      <h3 className="h3-md steelblue-color">Hematology</h3>
                      {/* Text */}
                      <p className="mb-30">
                        An enim nullam tempor sapien gravida donec enim ipsum
                        blandit porta justo integer odio velna vitae auctor
                        integer congue magna at pretium purus pretium ligula
                        rutrum itae laoreet augue in cubilia laoreet an augue
                        egestas ipsum vitae emo ligula vitae arcu mollis blandit
                        ultrice ligula egestas magna suscipit
                      </p>
                      {/* Options List */}
                      <div className="row">
                        <div className="col-xl-6">
                          {/* Option #1 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Nemo ipsam egestas volute and turpis dolores
                              quaerat
                            </p>
                          </div>
                          {/* Option #2 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">Magna luctus tempor</p>
                          </div>
                          {/* Option #3 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              An enim nullam tempor at pretium purus blandit
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          {/* Option #4 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Magna luctus tempor blandit a vitae suscipit
                              mollis
                            </p>
                          </div>
                          {/* Option #5 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Nemo ipsam egestas volute turpis dolores quaerat
                            </p>
                          </div>
                          {/* Option #6 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">An enim nullam tempor</p>
                          </div>
                        </div>
                      </div>
                      {/* End Options List */}
                      {/* Button */}
                      <Link href="/service-2">
                        <a className="btn btn-blue blue-hover mt-30">
                          View More Details
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* END TAB-2 TEXT */}
                </div>
              </div>
              {/* END TAB-2 CONTENT */}
              {/* TAB-3 CONTENT */}
              <div
                className="tab-pane fade"
                id="tab-3"
                role="tabpanel"
                aria-labelledby="tab3-list"
              >
                <div className="row d-flex align-items-center">
                  {/* TAB-3 IMAGE */}
                  <div className="col-lg-6">
                    <div className="tab-img">
                      <img
                        className="img-fluid"
                        src="images/mri_700x700.jpg"
                        alt="tab-image"
                      />
                    </div>
                  </div>
                  {/* TAB-3 TEXT */}
                  <div className="col-lg-6">
                    <div className="txt-block pc-30">
                      {/* Title */}
                      <h3 className="h3-md steelblue-color">MRI Diagnostic</h3>
                      {/* Text */}
                      <p className="mb-30">
                        An enim nullam tempor sapien gravida donec enim ipsum
                        blandit porta justo integer odio velna vitae auctor
                        integer congue magna at pretium purus pretium ligula
                        rutrum itae laoreet augue in cubilia laoreet an augue
                        egestas ipsum vitae emo ligula vitae arcu mollis blandit
                        ultrice ligula egestas magna suscipit
                      </p>
                      {/* Options List */}
                      <div className="row">
                        <div className="col-xl-6">
                          {/* Option #1 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Nemo ipsam egestas volute and turpis dolores
                              quaerat
                            </p>
                          </div>
                          {/* Option #2 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">Magna luctus tempor</p>
                          </div>
                          {/* Option #3 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              An enim nullam tempor at pretium purus blandit
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          {/* Option #4 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Magna luctus tempor blandit a vitae suscipit
                              mollis
                            </p>
                          </div>
                          {/* Option #5 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Nemo ipsam egestas volute turpis dolores quaerat
                            </p>
                          </div>
                          {/* Option #6 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">An enim nullam tempor</p>
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
                  </div>
                  {/* END TAB-3 TEXT */}
                </div>
              </div>
              {/* END TAB-3 CONTENT */}
              {/* TAB-4 CONTENT */}
              <div
                className="tab-pane fade"
                id="tab-4"
                role="tabpanel"
                aria-labelledby="tab4-list"
              >
                <div className="row d-flex align-items-center">
                  {/* TAB-4 IMAGE */}
                  <div className="col-lg-6">
                    <div className="tab-img">
                      <img
                        className="img-fluid"
                        src="images/x-ray_700x700.jpg"
                        alt="tab-image"
                      />
                    </div>
                  </div>
                  {/* TAB-4 TEXT */}
                  <div className="col-lg-6">
                    <div className="txt-block pc-30">
                      {/* Title */}
                      <h3 className="h3-md steelblue-color">
                        X-Ray Diagnostic
                      </h3>
                      {/* Text */}
                      <p className="mb-30">
                        An enim nullam tempor sapien gravida donec enim ipsum
                        blandit porta justo integer odio velna vitae auctor
                        integer congue magna at pretium purus pretium ligula
                        rutrum itae laoreet augue in cubilia laoreet an augue
                        egestas ipsum vitae emo ligula vitae arcu mollis blandit
                        ultrice ligula egestas magna suscipit
                      </p>
                      {/* Options List */}
                      <div className="row">
                        <div className="col-xl-6">
                          {/* Option #1 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Nemo ipsam egestas volute and turpis dolores
                              quaerat
                            </p>
                          </div>
                          {/* Option #2 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">Magna luctus tempor</p>
                          </div>
                          {/* Option #3 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              An enim nullam tempor at pretium purus blandit
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          {/* Option #4 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Magna luctus tempor blandit a vitae suscipit
                              mollis
                            </p>
                          </div>
                          {/* Option #5 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">
                              Nemo ipsam egestas volute turpis dolores quaerat
                            </p>
                          </div>
                          {/* Option #6 */}
                          <div className="box-list">
                            <div className="box-list-icon blue-color">
                              <i className="fas fa-angle-double-right" />
                            </div>
                            <p className="p-sm">An enim nullam tempor</p>
                          </div>
                        </div>
                      </div>
                      {/* End Options List */}
                      {/* Button */}
                      <Link href="/service-2">
                        <a className="btn btn-blue blue-hover mt-30">
                          View More Details
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* END TAB-4 TEXT */}
                </div>
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

export default Demo11Tabs1;
