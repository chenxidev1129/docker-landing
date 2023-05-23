import Link from "next/link";
import React from "react";
import { Nav, Tab } from "react-bootstrap";

const AllServicesTabsPanel = () => {
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
                      Krankengymnastik
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-2 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-12" href="#tab-12">
                      Manuelle Therapie
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-3 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-13" href="#tab-13">
                      Sportphysiotherapie
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-4 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-14" href="#tab-14">
                      Kinesio-Taping
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-5 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-15" href="#tab-15">
                      Manuelle Lymphdrainage
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-6 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-16" href="#tab-16">
                      Klassische, medizinische Massagen
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-7 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-17" href="#tab-17">
                      CMD
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-8 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-18" href="#tab-18">
                      Elektrotherapie
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-9 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-19" href="#tab-19">
                      Wärmetherapie
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-10 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-110" href="#tab-110">
                      Kältetherapie
                    </Nav.Link>
                  </Nav.Item>
                  {/* TAB-11 LINK */}
                  <Nav.Item className="nav-item icon-xs" as="li">
                    <Nav.Link eventKey="tab-111" href="#tab-111">
                      Hausbesuche
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
                    Krankengymnastik
                  </h3>
                  {/* Text */}
                  <p>
                    Krankengymnastik ist eine Therapieform, bei der Bewegungen gezielt eingesetzt werden, um den Körper zu mobilisieren und zu stärken. Dabei werden individuelle Übungen durchgeführt, die auf die Bedürfnisse des jeweiligen Patienten abgestimmt sind.Das Ziel der Krankengymnastik ist es, Schmerzen zu lindern, die Beweglichkeit zu verbessern, die Körperhaltung zu korrigieren und die Muskulatur zu kräftigen. Die klassische Krankengymnastik umfasst Übungen zur Kräftigung und Dehnung der Muskulatur, welche die Körperhaltung stabilisieren.Die Krankengymnastik wird immer individuell auf die Bedürfnisse des Patienten abgestimmt und richtet sich nach den Beschwerden und Zielen des Therapieprozesses.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
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
                  <h3 className="h3-md steelblue-color">Manuelle Therapie</h3>
                  {/* Text */}
                  <p>
                    Die manuelle Therapie ist eine physiotherapeutische
                    Behandlungsmethode, bei der der Therapeut seine Hände gezielt einsetzt, um Schmerzen und
                    Bewegungseinschränkungen zu behandeln. Dabei werden verschiedene Techniken angewendet, wie z.B.
                    Mobilisation und Manipulation von Gelenken, Dehnung von Muskeln und Faszien, sowie spezielle Grifftechniken, um Verspannungen und Verklebungen zu lösen. Ziel der manuellen Therapie ist es, die Beweglichkeit von Gelenken und Weichteilen zu verbessern, Schmerzen zu lindern und die Funktion des Bewegungsapparates wiederherzustellen.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
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
                  <h3 className="h3-md steelblue-color">Sportphysiotherapie</h3>
                  {/* Text */}
                  <p>
                    Die Sportphysiotherapie spezialisiert sich sich auf die Behandlung und Betreuung von Sportlern und sportbegeisterten Menschen. Der Physiotherapeut hilft dabei, Verletzungen vorzubeugen, ihre körperliche Leistungsfähigkeit zu optimieren und Verletzungen zu behandeln, die während des Trainings oder Wettkampfs auftreten können.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
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
                  <h3 className="h3-md steelblue-color">Kinesio-Taping</h3>
                  {/* Text */}
                  <p>
                    Kinesio-Taping ist eine Therapieform, die auf der Verwendung von elastischen Tapes basiert, welche auf die Haut geklebt werden. Diese Tapes sollen dabei helfen, Schmerzen zu lindern, Entzündungen zu reduzieren, die Muskelfunktion zu verbessern und die Bewegungsfreiheit zu erhohen.
                    Durch die Anwendung des Tapes auf bestimmte Körperbereiche können
                    Muskelverspannungen reduziert und die Durchblutung gefördert werden. Zudem kann das Tape zur Unterstützung bei der Regeneration nach Verletzungen, Operationen oder bei chronischen Erkrankungen eingesetzt werden.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-4 CONTENT */}
                {/* TAB-5 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-15"
                  role="tabpanel"
                  aria-labelledby="tab15-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">Manuelle Lymphdrainage</h3>
                  {/* Text */}
                  <p>
                    Die Manuelle Lymphdrainage ist eine spezielle Form der Massage, die darauf abzielt, das Lymphsystem des Körpers zu stimulieren. Dabei wird durch sanfte, rhythmische Bewegungen des Therapeuten der Lymphfluss angeregt und somit die Absorption von Lymphflüssigkeit und die Entgiftung des Körpers verbessert.
                    Die Therapie wird häufig bei Störungen des Lymphsystems eingesetzt, beispielsweise bei Lymphödemen oder Schwellungen. Durch die Stimulation des Lymphsystems können Schmerzen und Schwellungen gelindert werden.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-5 CONTENT */}
                {/* TAB-6 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-16"
                  role="tabpanel"
                  aria-labelledby="tab16-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">Klassische, medizinische Massagen</h3>
                  {/* Text */}
                  <p>
                    Klassische, medizinische Massagen sind eine Form der manuellen Therapie, die zur Behandlung von körperlichen Beschwerden eingesetzt wird. Diese
                    Massagen nutzen verschiedene Techniken wie Kneten, Streichen, Klopfen und Druck, um Muskelverspannungen und Schmerzen zu lösen und die Durchblutung zu verbessern.
                    Klassische, medizinische Massagen können bei vielen Beschwerden helfen, wie zum Beispiel bei Rückenschmerzen, Verspannungen im Nacken- und Schulterbereich, Kopfschmerzen oder auch bei postoperativen Schmerzen.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-6 CONTENT */}
                {/* TAB-7 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-17"
                  role="tabpanel"
                  aria-labelledby="tab17-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">CMD</h3>
                  {/* Text */}
                  <p>
                    Die craniomandibuläre Dysfunktion (CMD) ist eine Störung, die im Zusammenhang mit dem Kiefergelenk und den umgebenden Muskeln, Nerven und Blutgefäßen auftritt. Eine CMD kann verschiedene Symptome verursachen, wie z.B. Schmerzen im Bereich des Kiefers, Nacken, Kopfschmerzen, Schwindel oder Tinnitus. Ursachen für CMD sind oft Zahnfehlstellungen, Stress, Verletzungen oder Überbeanspruchung der Kiefermuskulatur. Die Behandlung von CMD umfasst häufig eine Kombination aus Therapien wie manuelle Therapie, klassischer Physiotherapie sowie Muskelentspannungstechniken.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-7 CONTENT */}
                {/* TAB-8 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-18"
                  role="tabpanel"
                  aria-labelledby="tab18-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">Elektrotherapie</h3>
                  {/* Text */}
                  <p>
                    Die Elektrotherapie ist eine physiotherapeutische
                    Behandlungsmethode, bei der elektrischer Strom eingesetzt wird, um Gewebe im Körper zu stimulieren. Dabei werden elektrische Impulse gezielt auf bestimmte Körperbereiche übertragen, um Schmerzen zu lindern, die Muskelkraft zu verbessern, die Durchblutung zu fördern und Entzündungen zu bekämpfen.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-8 CONTENT */}
                {/* TAB-9 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-19"
                  role="tabpanel"
                  aria-labelledby="tab19-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">Wärmetherapie</h3>
                  {/* Text */}
                  <p>
                    Die Wärmetherapie ist eine Art der Behandlung von Schmerzen oder
                    Verletzungen durch die Anwendung von Wärme. Die Wärme kann auf verschiedene Weise auf den Körper aufgebracht werden, zum Beispiel durch warme Kompressen oder Infrarotstrahlung.Die Wärme hilft dabei, die Durchblutung zu verbessern und die Muskeln zu entspannen, was Schmerzen lindert und die Heilung fördert.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-9 CONTENT */}
                {/* TAB-10 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-110"
                  role="tabpanel"
                  aria-labelledby="tab110-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">Kältetherapie</h3>
                  {/* Text */}
                  <p>
                    Die Kältetherapie ist eine medizinische Anwendung, bei der Kälte zur Behandlung von Verletzungen und Schmerzen eingesetzt wird.Die Kälte wirkt entzündungshemmend und schmerzlindernd, da sie die Durchblutung reduziert und dadurch Schwellungen und Entzündungen abbaut. Die Behandlung kann auch die Muskelsteifigkeit verringern und die Erholung von Verletzungen oder Operationen beschleunigen.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-10 CONTENT */}
                {/* TAB-11 CONTENT */}
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey="tab-111"
                  role="tabpanel"
                  aria-labelledby="tab111-list"
                >
                  {/* Title */}
                  <h3 className="h3-md steelblue-color">Hausbesuche</h3>
                  {/* Text */}
                  <p>
                    Die Hausbesuche der Physiotherapie sind eine Form der ambulanten Versorgung, bei der ein Physiotherapeut direkt zum Patienten nach Hause kommt, um die physiotherapeutische Behandlung durchzuführen. Der Service wird für Patienten angeboten, die aufgrund von Erkrankungen oder Verletzungen eingeschränkt oder nicht in der Lage sind, eine Praxis aufzusuchen.
                  </p>
                  {/* Button */}
                  <Link href="https://www.doctolib.de/praxis/berlin/physiotherapie-stuetzpunkt-berlin">
                    <a className="btn btn-blue blue-hover mt-30">
                      View More Details
                    </a>
                  </Link>
                </Tab.Pane>
                {/* END TAB-11 CONTENT */}
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
