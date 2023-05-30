import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { getTranslations } from "../../../../utils/translationUtils";
import { useContext } from "react";
import LanguageContext from "../../../contexts/LanguageContext";

const AllServicesTabsPanel = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const translations = getTranslations(currentLanguage);
    setServices(translations.services);
  }, [currentLanguage]);

  return (
    <section id="tabs-2" className="wide-100 tabs-section division">
      <div className="container">
        <Tab.Container defaultActiveKey="tab-11">
          <div className="row">
            {/* TABS NAVIGATION */}
            <div className="col-lg-4">
              <div className="list-group text-center clearfix">
                <Nav className="nav nav-pills" id="pills-tab" as="ul">
                  {
                    services.map((service, index) => (
                      <Nav.Item key={index} className="nav-item icon-xs" as="li">
                        <Nav.Link eventKey={`tab-1` + index} href={`#tab-1` + index}>
                          {service.title}
                        </Nav.Link>
                      </Nav.Item>
                    ))
                  }
                </Nav>
              </div>
            </div>
            {/* END TABS NAVIGATION */}
            {/* TABS CONTENT */}
            <div className="col-lg-8">
              <Tab.Content className="tab-content" id="pills-tabContent">
                {
                  services.map((service, index) => (
                    <Tab.Pane
                      key={index}
                      className="tab-pane fade show"
                      eventKey={`tab-1` + index}
                      role="tabpanel"
                      aria-labelledby={`tab1` + index + `-list`}
                    >
                      {/* Title */}
                      <h3 className="h3-md steelblue-color">
                        {service.title}
                      </h3>
                      {/* Text */}
                      <p>
                        {service.description}
                      </p>
                      {/* Button */}
                      <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                        <a className="btn btn-blue blue-hover mt-30">
                          {service.action}
                        </a>
                      </Link>
                    </Tab.Pane>
                  ))
                }
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

export default AllServicesTabsPanel;
