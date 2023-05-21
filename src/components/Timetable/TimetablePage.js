import React from "react";

const TimetablePage = () => {
  return (
    <div id="timetable-page" className="timetable-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* TIMETABLE	*/}
            <div className="cd-schedule js-full">
              {/* Timeline */}
              <div className="timeline">
                <ul>
                  <li>
                    <span>09:00</span>
                  </li>
                  <li>
                    <span>09:30</span>
                  </li>
                  <li>
                    <span>10:00</span>
                  </li>
                  <li>
                    <span>10:30</span>
                  </li>
                  <li>
                    <span>11:00</span>
                  </li>
                  <li>
                    <span>11:30</span>
                  </li>
                  <li>
                    <span>12:00</span>
                  </li>
                  <li>
                    <span>12:30</span>
                  </li>
                  <li>
                    <span>13:00</span>
                  </li>
                  <li>
                    <span>13:30</span>
                  </li>
                  <li>
                    <span>14:00</span>
                  </li>
                  <li>
                    <span>14:30</span>
                  </li>
                  <li>
                    <span>15:00</span>
                  </li>
                  <li>
                    <span>15:30</span>
                  </li>
                  <li>
                    <span>16:00</span>
                  </li>
                  <li>
                    <span>16:30</span>
                  </li>
                  <li>
                    <span>17:00</span>
                  </li>
                  <li>
                    <span>17:30</span>
                  </li>
                  <li>
                    <span>18:00</span>
                  </li>
                  <li>
                    <span>18:30</span>
                  </li>
                  <li>
                    <span>19:00</span>
                  </li>
                </ul>
              </div>{" "}
              {/* End Timeline */}
              {/* Events */}
              <div className="events">
                <ul>
                  {/* MONDAY */}
                  <li className="events-group">
                    <div className="top-info">
                      <span>Monday</span>
                    </div>
                    <ul>
                      <li
                        className="single-event"
                        data-start="09:00"
                        data-end="11:00"
                        data-event="event-1"
                        style={{ top: "-1px", height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">09:00 - 11:00</span>
                          <em className="event-name">Primacy Help Care</em>
                          <em className="event-name event-doctor">
                            Dr. Hannah Harper
                          </em>
                          <em className="event-name event-room">
                            Rm.13 Hall A
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="11:00"
                        data-end="13:00"
                        data-event="event-2"
                        style={{ top: 199, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">11:00 - 13:00</span>
                          <em className="event-name">Pediatrics</em>
                          <em className="event-name event-doctor">
                            Dr. J.Barnes
                          </em>
                          <em className="event-name event-room">
                            Rm.27 Hall B
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="13:00"
                        data-end="15:00"
                        data-event="event-3"
                        style={{ top: 399, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">13:00 - 15:00</span>
                          <em className="event-name">Haematology</em>
                          <em className="event-name event-doctor">
                            Dr. M.Anderson
                          </em>
                          <em className="event-name event-room">
                            Rm.46 Hall B
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="15:00"
                        data-end="17:00"
                        data-event="event-4"
                        style={{ top: 599, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">15:00 - 17:00</span>
                          <em className="event-name">X-Ray</em>
                          <em className="event-name event-doctor">
                            Dr. M.Coleman
                          </em>
                          <em className="event-name event-room">
                            Rm.103 Hall C
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="17:00"
                        data-end="19:00"
                        data-event="event-6"
                        style={{ top: 799, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">17:00 - 19:00</span>
                          <em className="event-name">Traumatology</em>
                          <em className="event-name event-doctor">
                            Dr. R.Peterson
                          </em>
                          <em className="event-name event-room">
                            Rm.29 Hall C
                          </em>
                        </div>
                      </li>
                    </ul>
                  </li>{" "}
                  {/* END MONDAY */}
                  {/* TUESDAY */}
                  <li className="events-group">
                    <div className="top-info">
                      <span>Tuesday</span>
                    </div>
                    <ul>
                      <li
                        className="single-event"
                        data-start="10:00"
                        data-end="12:00"
                        data-event="event-7"
                        style={{ top: 99, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">10:00 - 12:00</span>
                          <em className="event-name">Pulmonary</em>
                          <em className="event-name event-doctor">
                            Dr. R.Peterson
                          </em>
                          <em className="event-name event-room">
                            Rm.13 Hall A
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="13:00"
                        data-end="15:00"
                        data-event="event-5"
                        style={{ top: 399, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">13:00 - 15:00</span>
                          <em className="event-name">Laryngology</em>
                          <em className="event-name event-doctor">
                            Dr. J.Elledge
                          </em>
                          <em className="event-name event-room">
                            Rm.27 Hall B
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="15:00"
                        data-end="17:00"
                        data-event="event-1"
                        style={{ top: 599, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">15:00 - 17:00</span>
                          <em className="event-name">Primacy Help Care</em>
                          <em className="event-name event-doctor">
                            Dr. Hannah Harper
                          </em>
                          <em className="event-name event-room">
                            Rm.46 Hall B
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="17:00"
                        data-end="19:00"
                        data-event="event-4"
                        style={{ top: 799, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">17:00 - 19:00</span>
                          <em className="event-name">X-Ray</em>
                          <em className="event-name event-doctor">
                            Dr. .Anderson
                          </em>
                          <em className="event-name event-room">
                            Rm.103 Hall C
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="17:00"
                        data-end="19:00"
                        data-event="event-8"
                        style={{ top: 799, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">17:00 - 19:00</span>
                          <em className="event-name">Pediatrics</em>
                          <em className="event-name event-doctor">
                            Dr. J.Barnes
                          </em>
                          <em className="event-name event-room">
                            Rm.29 Hall C
                          </em>
                        </div>
                      </li>
                    </ul>
                  </li>{" "}
                  {/* END TUESDAY */}
                  {/* WEDNESDAY */}
                  <li className="events-group">
                    <div className="top-info">
                      <span>Wednesday</span>
                    </div>
                    <ul>
                      <li
                        className="single-event"
                        data-start="9:00"
                        data-end="11:00"
                        data-event="event-4"
                        style={{ top: "-1px", height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">9:00 - 11:00</span>
                          <em className="event-name">X-Ray</em>
                          <em className="event-name event-doctor">
                            Dr. .Anderson
                          </em>
                          <em className="event-name event-room">
                            Rm.103 Hall C
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="11:00"
                        data-end="13:00"
                        data-event="event-8"
                        style={{ top: 199, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">11:00 - 13:00</span>
                          <em className="event-name">Pediatrics</em>
                          <em className="event-name event-doctor">
                            Dr. J.Barnes
                          </em>
                          <em className="event-name event-room">
                            Rm.29 Hall C
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="14:00"
                        data-end="16:00"
                        data-event="event-3"
                        style={{ top: 499, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">14:00 - 16:00</span>
                          <em className="event-name">Primacy Help Care</em>
                          <em className="event-name event-doctor">
                            Dr. Hannah Harper
                          </em>
                          <em className="event-name event-room">
                            Rm.46 Hall B
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="16:00"
                        data-end="18:00"
                        data-event="event-4"
                        style={{ top: 699, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">16:00 - 18:00</span>
                          <em className="event-name">X-Ray</em>
                          <em className="event-name event-doctor">
                            Dr. .Anderson
                          </em>
                          <em className="event-name event-room">
                            Rm.103 Hall C
                          </em>
                        </div>
                      </li>
                    </ul>
                  </li>{" "}
                  {/* END WEDNESDAY */}
                  {/* THURSDAY */}
                  <li className="events-group">
                    <div className="top-info">
                      <span>Thursday</span>
                    </div>
                    <ul>
                      <li
                        className="single-event"
                        data-start="9:00"
                        data-end="12:00"
                        data-event="event-1"
                        style={{ top: "-1px", height: 301 }}
                      >
                        <div className="event-info">
                          <span className="event-date">9:00 - 12:00</span>
                          <em className="event-name">Pulmonary</em>
                          <em className="event-name event-doctor">
                            Dr. R.Peterson
                          </em>
                          <em className="event-name event-room">
                            Rm.13 Hall A
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="12:00"
                        data-end="14:00"
                        data-event="event-2"
                        style={{ top: 299, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">12:00 - 14:00</span>
                          <em className="event-name">Laryngology</em>
                          <em className="event-name event-doctor">
                            Dr. J.Elledge
                          </em>
                          <em className="event-name event-room">
                            Rm.27 Hall B
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="14:00"
                        data-end="16:00"
                        data-event="event-8"
                        style={{ top: 499, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">14:00 - 16:00</span>
                          <em className="event-name">Pediatrics</em>
                          <em className="event-name event-doctor">
                            Dr. J.Barnes
                          </em>
                          <em className="event-name event-room">
                            Rm.29 Hall C
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="16:00"
                        data-end="19:00"
                        data-event="event-6"
                        style={{ top: 699, height: 301 }}
                      >
                        <div className="event-info">
                          <span className="event-date">16:00 - 19:00</span>
                          <em className="event-name">Traumatology</em>
                          <em className="event-name event-doctor">
                            Dr. R.Peterson
                          </em>
                          <em className="event-name event-room">
                            Rm.29 Hall C
                          </em>
                        </div>
                      </li>
                    </ul>
                  </li>{" "}
                  {/* END THURSDAY */}
                  {/* FRIDAY */}
                  <li className="events-group">
                    <div className="top-info">
                      <span>Friday</span>
                    </div>
                    <ul>
                      <li
                        className="single-event"
                        data-start="9:00"
                        data-end="11:00"
                        data-event="event-8"
                        style={{ top: "-1px", height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">9:00 - 11:00</span>
                          <em className="event-name">Pediatrics</em>
                          <em className="event-name event-doctor">
                            Dr. J.Barnes
                          </em>
                          <em className="event-name event-room">
                            Rm.29 Hall C
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="11:00"
                        data-end="13:00"
                        data-event="event-2"
                        style={{ top: 199, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">11:00 - 13:00</span>
                          <em className="event-name">Laryngology</em>
                          <em className="event-name event-doctor">
                            Dr. J.Elledge
                          </em>
                          <em className="event-name event-room">
                            Rm.27 Hall B
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="13:00"
                        data-end="15:00"
                        data-event="event-3"
                        style={{ top: 399, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">13:00 - 15:00</span>
                          <em className="event-name">Primacy Help Care</em>
                          <em className="event-name event-doctor">
                            Dr. Hannah Harper
                          </em>
                          <em className="event-name event-room">
                            Rm.46 Hall B
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="15:00"
                        data-end="17:00"
                        data-event="event-4"
                        style={{ top: 599, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">15:00 - 17:00</span>
                          <em className="event-name">X-Ray</em>
                          <em className="event-name event-doctor">
                            Dr. .Anderson
                          </em>
                          <em className="event-name event-room">
                            Rm.103 Hall C
                          </em>
                        </div>
                      </li>
                      <li
                        className="single-event"
                        data-start="17:00"
                        data-end="19:00"
                        data-event="event-5"
                        style={{ top: 799, height: 201 }}
                      >
                        <div className="event-info">
                          <span className="event-date">17:00 - 19:00</span>
                          <em className="event-name">Pediatrics</em>
                          <em className="event-name event-doctor">
                            Dr. J.Barnes
                          </em>
                          <em className="event-name event-room">
                            Rm.29 Hall C
                          </em>
                        </div>
                      </li>
                    </ul>
                  </li>{" "}
                  {/* END FRIDAY */}
                </ul>
              </div>{" "}
              {/* End Events */}
            </div>{" "}
            {/* END TIMETABLE	*/}
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default TimetablePage;
