import Link from "next/link";
import React, { useState } from "react";

const FaqsPage = () => {
  const [a1, setA1] = useState(1);
  const [a2, setA2] = useState(0);
  const [a3, setA3] = useState(0);
  return (
    <section id="faqs-page" className="wide-80 faqs-section division">
      <div className="container">
        <div className="row">
          {/* QUESTIONS HOLDER */}
          <div className="col-lg-8">
            <div className="questions-holder pr-30">
              {/* Title */}
              <h3 className="h3-md steelblue-color">
                Frequently Asked Questions
              </h3>
              {/* Text */}
              <p>
                Porta semper lacus cursus, feugiat primis ultrice in ligula
                risus auctor tempus feugiat dolor lacinia cubilia curae integer
                congue leo metus, primis in orci integer metus mollis faucibus
                enim. Nemo ipsam egestas volute turpis dolores ut aliquam
                quaerat sodales sapien undo pretium purus feugiat dolor impedit
                magna purus pretium gravida donec ligula massa gravida donec
                pretium
              </p>
              {/* QUESTIONS ACCORDION */}
              <div id="accordion">
                {/* CATEGORY TITLE  */}
                <h5 className="h5-xl blue-color">1. General Questions</h5>
                {/* ACCORDION CARD #1 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingOne">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA1(a1 === 1 ? 0 : 1)}
                          data-toggle="collapse"
                          aria-expanded={a1 === 1 ? true : false}
                          className={a1 === 1 ? "" : "collapsed"}
                        >
                          Is porta semper MedService primis?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a1 === 1 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Nullam rutrum eget nunc varius etiam mollis risus congue
                        aliquam etiam sapien egestas, congue gestas posuere
                        cubilia congue ipsum mauris lectus laoreet gestas neque
                        vitae auctor eros dolor luctus odio tempor sapien
                        gravida donec pretium and ipsum porta
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #1 */}
                {/* ACCORDION CARD #2 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingTwo">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA1(a1 === 2 ? 0 : 2)}
                          data-toggle="collapse"
                          aria-expanded={a1 === 2 ? true : false}
                          className={a1 === 2 ? "" : "collapsed"}
                        >
                          How feugiat primis ultrice in ligula?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a1 === 2 ? "show" : ""}`}>
                    <div className="card-body">
                      <p>
                        Maecenas gravida porttitor nunc, quis vehicula magna
                        luctus tempor. Quisque vel laoreet turpis. Urna augue,
                        viverra a augue eget, dictum tempor diam. Sed pulvinar
                        consectetur nibh, imperdiet cubilia curae integer congue
                        leo metus, primis in orci integer metus mollis faucibus
                        enim
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #2 */}
                {/* ACCORDION CARD #3 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingThree">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA1(a1 === 3 ? 0 : 3)}
                          data-toggle="collapse"
                          aria-expanded={a1 === 3 ? true : false}
                          className={a1 === 3 ? "" : "collapsed"}
                        >
                          Did donec pretium and MedService porta?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a1 === 3 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Nullam rutrum eget nunc varius etiam mollis risus congue
                        aliquam etiam sapien egestas, congue gestas posuere
                        cubilia congue ipsum
                      </p>
                      {/* List */}
                      <ul className="content-list">
                        <li>
                          <p>
                            Vitae auctor integer congue magna at pretium purus
                            pretium ligula rutrum luctus risus eros dolor auctor
                            cubilia curae integer congue leo metus, primis in
                            orci integer metus mollis enim
                          </p>
                        </li>
                        <li>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna cubilia curae integer congue
                            leo metus, primis in orci integer metus mollis
                            faucibus enimipsum
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #3 */}
                {/* ACCORDION CARD #4 */}
                <div className="card no-border">
                  {/* Card Title */}
                  <div className="card-header" id="headingFour">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA1(a1 === 4 ? 0 : 4)}
                          data-toggle="collapse"
                          aria-expanded={a1 === 4 ? true : false}
                          className={a1 === 4 ? "" : "collapsed"}
                        >
                          What is metus mollis faucibus?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a1 === 4 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Aliqum mullam blandit tempor sapien gravida donec ipsum,
                        at porta justo. Velna vitae auctor eros congue magna
                        nihil impedit ligula risus. Mauris donec ociis et magnis
                        sapien etiam sapien sem sagittis cubilia curae integer
                        congue leo metus, primis in orci integer metus mollis
                        enim
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #4 */}
                {/* CATEGORY TITLE  */}
                <h5 className="h5-xl blue-color">
                  2. Medical Treatment Questions
                </h5>
                {/* ACCORDION CARD #5 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingFive">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA2(a2 === 1 ? 0 : 1)}
                          data-toggle="collapse"
                          aria-expanded={a2 === 1 ? true : false}
                          className={a2 === 1 ? "" : "collapsed"}
                        >
                          How much congue magna nihil impedit ligula risus?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a2 === 1 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Nullam non scelerisque lectus. In at mauris vel nisl
                        convallis porta at vitae dui. Nam lacus ligula,
                        vulputate molestie quis aliquet cubilia curae integer
                        congue leo metus, primis in orci integer metus mollis
                        faucibus enim
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #5 */}
                {/* ACCORDION CARD #6 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingSix">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA2(a2 === 2 ? 0 : 2)}
                          data-toggle="collapse"
                          aria-expanded={a2 === 2 ? true : false}
                          className={a2 === 2 ? "" : "collapsed"}
                        >
                          What I congue magna nihil convallis porta?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a2 === 2 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Nullam non scelerisque lectus. In at mauris vel nisl
                        convallis porta at vitae dui. Nam lacus ligula,
                        vulputate molestie bibendum quis, aliquet elementum
                        massa. Vestibulum ut sagittis odio
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #6 */}
                {/* ACCORDION CARD #7 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingSeven">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA2(a2 === 3 ? 0 : 3)}
                          data-toggle="collapse"
                          aria-expanded={a2 === 3 ? true : false}
                          className={a2 === 3 ? "" : "collapsed"}
                        >
                          Is there a aliquet elementum massa?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a2 === 3 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Aliqum mullam blandit tempor sapien gravida donec ipsum,
                        at porta justo. Velna vitae auctor eros congue magna
                        nihil impedit ligula risus. Mauris donec ociis et magnis
                        sapien etiam sapien sem sagittis congue tempor gravida
                        donec enim ipsum porta justo integer at odio velna
                        congue integer vitae auctor eros dolor luctus odio
                        placerat massa magna
                      </p>
                      {/* Text */}
                      <p>
                        Nullam rutrum eget nunc varius etiam mollis risus congue
                        aliquam etiam sapien egestas, congue gestas posuere
                        cubilia congue ipsum mauris lectus laoreet gestas neque
                        vitae
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #7 */}
                {/* ACCORDION CARD #8 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingEight">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA2(a2 === 4 ? 0 : 4)}
                          data-toggle="collapse"
                          aria-expanded={a2 === 4 ? true : false}
                          className={a2 === 4 ? "" : "collapsed"}
                        >
                          Can I auctor eros dolor luctus odio placerat massa
                          magna?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a2 === 4 ? "show" : ""}`}>
                    <div className="card-body">
                      <p>
                        Maecenas gravida porttitor nunc, quis vehicula magna
                        luctus tempor. Quisque vel laoreet turpis. Urna augue,
                        viverra a augue eget, dictum tempor diam. Sed pulvinar
                        consectetur nibh, vel imperdiet dui varius viverra.
                        Pellentesque ac massa lorem. Fusce eu cursus est fusce
                        non nulla
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #8 */}
                {/* ACCORDION CARD #9 */}
                <div className="card no-border">
                  {/* Card Title */}
                  <div className="card-header" id="headingNine">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA2(a2 === 5 ? 0 : 5)}
                          data-toggle="collapse"
                          aria-expanded={a2 === 5 ? true : false}
                          className={a2 === 5 ? "" : "collapsed"}
                        >
                          Do you have vehicula magna luctus tempor?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a2 === 5 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Nullam rutrum eget nunc varius etiam mollis risus congue
                        aliquam etiam sapien egestas, congue gestas posuere
                        cubilia congue ipsum mauris lectus laoreet gestas neque
                        vitae auctor eros dolor luctus odio placerat magna
                        cursus
                      </p>
                      {/* List */}
                      <ul className="content-list">
                        <li>
                          <p>
                            Vitae auctor integer congue magna at pretium purus
                            pretium ligula rutrum luctus risus
                          </p>
                        </li>
                        <li>
                          <p>
                            Sagittis congue augue egestas volutpat egestas magna
                            suscipit egestas magna ipsum vitae purus efficitur
                            ipsum primis in cubilia laoreet augue egestas luctus
                            donec diamTempor sapien gravida donec enim ipsum
                            blandit magna at purus pretium ligula rutrum luctus
                          </p>
                        </li>
                        <li>
                          <p>
                            Justo odio integer a velna lectus aenean magna and
                            mauris lectus pretium ligula rutrum luctus risus ac
                            risus auctor gravida donec congue tempor gravida
                            donec enim ipsum porta justo integer
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #9 */}
                {/* CATEGORY TITLE  */}
                <h5 className="h5-xl blue-color">
                  3. Emergency Help Questions
                </h5>
                {/* ACCORDION CARD #10 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingTen">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA3(a3 === 1 ? 0 : 1)}
                          data-toggle="collapse"
                          aria-expanded={a3 === 1 ? true : false}
                          className={a3 === 1 ? "" : "collapsed"}
                        >
                          I have tempor sapien gravida?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a3 === 1 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Aliqum mullam blandit tempor sapien gravida donec ipsum,
                        at porta justo. Velna vitae auctor eros congue magna
                        nihil impedit ligula risus. Mauris donec ociis et magnis
                        sapien etiam sapien sem sagittis congue tempor gravida
                        donec enim ipsum porta justo integer at odio velna
                        congue integer vitae auctor eros dolor luctus odio
                        placerat
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #10 */}
                {/* ACCORDION CARD #11 */}
                <div className="card">
                  {/* Card Title */}
                  <div className="card-header" id="headingEleven">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA3(a3 === 2 ? 0 : 2)}
                          data-toggle="collapse"
                          aria-expanded={a3 === 2 ? true : false}
                          className={a3 === 2 ? "" : "collapsed"}
                        >
                          I want molestie bibendum quis, aliquet?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a3 === 2 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Curabitur ac dapibus libero. Quisque eu tristique neque.
                        Phasellus blandit tristique justo ut aliquam. Aliquam
                        vitae molestie nunc. Quisque sapien justo, aliquet non
                        molestie sed, venenatis nec purus. Aliquam eget lacinia
                        elit. Vestibulum tincidunt tincidunt massa, et porttitor
                        justo tincidunt eu.
                      </p>
                      {/* Text */}
                      <p>
                        Nullam non scelerisque lectus. In at mauris vel nisl
                        convallis porta at vitae dui. Nam lacus ligula,
                        vulputate molestie bibendum quis, aliquet elementum
                        massa. Vestibulum ut sagittis odio
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #11 */}
                {/* ACCORDION CARD #12 */}
                <div className="card no-border">
                  {/* Card Title */}
                  <div className="card-header" id="headingTwelve">
                    <h5 className="h5-xs">
                      <Link href="#">
                        <a
                          onClick={(e) => setA3(a3 === 3 ? 0 : 3)}
                          data-toggle="collapse"
                          aria-expanded={a3 === 3 ? true : false}
                          className={a3 === 3 ? "" : "collapsed"}
                        >
                          Can I tincidunt tincidunt massa, et porttitor?
                        </a>
                      </Link>
                    </h5>
                  </div>
                  {/* Card Content */}
                  <div className={`collapse ${a3 === 3 ? "show" : ""}`}>
                    <div className="card-body">
                      {/* Text */}
                      <p>
                        Curabitur ac dapibus libero. Quisque eu tristique neque.
                        Phasellus blandit tristique justo ut aliquam. Aliquam
                        vitae molestie nunc. Quisque sapien justo, aliquet non
                        molestie sed, venenatis nec purus. Aliquam eget lacinia
                        elit. Vestibulum tincidunt tincidunt massa, et porttitor
                        justo tincidunt eu.
                      </p>
                      {/* Text */}
                      <p>
                        Nullam non scelerisque lectus. In at mauris vel nisl
                        convallis porta at vitae dui. Nam lacus ligula,
                        vulputate molestie bibendum quis, aliquet elementum
                        massa. Vestibulum ut sagittis odio
                      </p>
                    </div>
                  </div>
                </div>
                {/* END ACCORDION CARD #12 */}
              </div>
              {/* END QUESTIONS ACCORDION */}
            </div>
          </div>
          {/*END QUESTIONS HOLDER */}
          {/* SIDEBAR */}
          <aside id="sidebar" className="col-lg-4">
            {/* TEXT WIDGET */}
            <div id="txt-widget" className="sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-sm steelblue-color">The Heart Of Clinic</h5>
              {/* Head of Clinic */}
              <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                {/* Avatar */}
                <div className="txt-widget-avatar">
                  <img
                    src="images/head-of-clinic.jpg"
                    alt="testimonial-avatar"
                  />
                </div>
                {/* Data */}
                <div className="txt-widget-data">
                  <h5 className="h5-md steelblue-color">Dr. Jonathan Barnes</h5>
                  <span>Chief Medical Officer, Founder</span>
                  <p className="blue-color">1-800-1234-567</p>
                </div>
              </div>
              {/* End Head of Clinic */}
              {/* Text */}
              <p className="p-sm">
                An enim nullam tempor sapien at gravida donec pretium ipsum
                porta justo integer at odiovelna vitae auctor integer congue
                magna purus
              </p>
              {/* Button */}
              <Link href="/about">
                <a className="btn btn-blue blue-hover">Learn More</a>
              </Link>
            </div>
            {/* END TEXT WIDGET */}
            {/* SIDEBAR TABLE */}
            <div className="sidebar-table blue-table sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-md">Working Time</h5>
              {/* Text */}
              <p className="p-sm">
                Porta semper lacus cursus, feugiat primis ultrice ligula risus
                auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
              </p>
              {/* Table */}
              <table className="table">
                <tbody>
                  <tr>
                    <td>Mon – Wed</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 7:00 PM</td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 6:30 PM</td>
                  </tr>
                  <tr>
                    <td>Friday</td>
                    <td> - </td>
                    <td className="text-right">9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr className="last-tr">
                    <td>Sun - Sun</td>
                    <td>-</td>
                    <td className="text-right">CLOSED</td>
                  </tr>
                </tbody>
              </table>
              {/* Title */}
              <h5 className="h5-xs">Need a personal health plan?</h5>
              {/* Text */}
              <p className="p-sm">
                Porta semper lacus cursus, and feugiat primis ultrice ligula at
                risus auctor
              </p>
            </div>
            {/* END SIDEBAR TABLE */}
            {/* SIDEBAR TIMETABLE */}
            <div className="sidebar-timetable sidebar-div mb-50">
              {/* Title */}
              <h5 className="h5-md mb-20">Doctors Timetable</h5>
              {/* Text */}
              <p className="p-sm">
                Porta semper lacus cursus, feugiat primis ultrice ligula risus
                auctor at tempus feugiat dolor lacinia cursus nulla vitae massa
              </p>
              {/* Button */}
              <Link href="/about">
                <a className="btn btn-blue blue-hover mt-10">View Timetable</a>
              </Link>
            </div>
            {/* END SIDEBAR TABLE */}
          </aside>
          {/* END SIDEBAR */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default FaqsPage;
