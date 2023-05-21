import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { service3Props } from "../../../sliderProps";

const ServicesPanel = () => {
  return (
    <section
      id="services-3"
      className="bg-lightgrey wide-100 services-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-lg-10 offset-lg-1 section-title">
            {/* Title 	*/}
            <h3 className="h3-md steelblue-color">
              Total Health Care Solutions
            </h3>
            {/* Text */}
            <p>
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero at tempus, blandit posuere ligula varius congue
              cursus porta feugiat
            </p>
          </div>
        </div>
        {/* SERVICES CONTENT */}
        <div className="row">
          <div className="col-md-12">
            <Swiper
              {...service3Props}
              className="owl-carousel owl-theme services-holder"
            >
              {/* SERVICE BOX #1 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-083-stethoscope" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Krankengymnastik</h5>
                {/* Text */}
                <p>
                  Krankengymnastik ist eine Therapieform, bei der Bewegungen gezielt eingesetzt werden, um den Körper zu mobilisieren und zu stärken. Dabei werden individuelle Übungen durchgeführt, die auf die Bedürfnisse des jeweiligen Patienten abgestimmt sind.Das Ziel der Krankengymnastik ist es, Schmerzen zu lindern, die Beweglichkeit zu verbessern, die Körperhaltung zu korrigieren und die Muskulatur zu kräftigen. Die klassische Krankengymnastik umfasst Übungen zur Kräftigung und Dehnung der Muskulatur, welche die Körperhaltung stabilisieren.Die Krankengymnastik wird immer individuell auf die Bedürfnisse des Patienten abgestimmt und richtet sich nach den Beschwerden und Zielen des Therapieprozesses.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #2 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-047-head" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Manuelle Therapie</h5>
                {/* Text */}
                <p>
                  Die manuelle Therapie ist eine physiotherapeutische
                  Behandlungsmethode, bei der der Therapeut seine Hände gezielt einsetzt, um Schmerzen und
                  Bewegungseinschränkungen zu behandeln. Dabei werden verschiedene Techniken angewendet, wie z.B.
                  Mobilisation und Manipulation von Gelenken, Dehnung von Muskeln und Faszien, sowie spezielle Grifftechniken, um Verspannungen und Verklebungen zu lösen. Ziel der manuellen Therapie ist es, die Beweglichkeit von Gelenken und Weichteilen zu verbessern, Schmerzen zu lindern und die Funktion des Bewegungsapparates wiederherzustellen.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #3 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-015-blood-donation-1" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Sportphysiotherapie</h5>
                {/* Text */}
                <p>
                  Die Sportphysiotherapie spezialisiert sich sich auf die Behandlung und Betreuung von Sportlern und sportbegeisterten Menschen. Der Physiotherapeut hilft dabei, Verletzungen vorzubeugen, ihre körperliche Leistungsfähigkeit zu optimieren und Verletzungen zu behandeln, die während des Trainings oder Wettkampfs auftreten können.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #4 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-048-lungs" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Kinesio-Taping</h5>
                {/* Text */}
                <p>
                  Kinesio-Taping ist eine Therapieform, die auf der Verwendung von elastischen Tapes basiert, welche auf die Haut geklebt werden. Diese Tapes sollen dabei helfen, Schmerzen zu lindern, Entzündungen zu reduzieren, die Muskelfunktion zu verbessern und die Bewegungsfreiheit zu erhohen.
                  Durch die Anwendung des Tapes auf bestimmte Körperbereiche können
                  Muskelverspannungen reduziert und die Durchblutung gefördert werden. Zudem kann das Tape zur Unterstützung bei der Regeneration nach Verletzungen, Operationen oder bei chronischen Erkrankungen eingesetzt werden.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #5 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-060-cardiogram-4" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Manuelle Lymphdrainage</h5>
                {/* Text */}
                <p>
                  Die Manuelle Lymphdrainage ist eine spezielle Form der Massage, die darauf abzielt, das Lymphsystem des Körpers zu stimulieren. Dabei wird durch sanfte, rhythmische Bewegungen des Therapeuten der Lymphfluss angeregt und somit die Absorption von Lymphflüssigkeit und die Entgiftung des Körpers verbessert.
                  Die Therapie wird häufig bei Störungen des Lymphsystems eingesetzt, beispielsweise bei Lymphödemen oder Schwellungen. Durch die Stimulation des Lymphsystems können Schmerzen und Schwellungen gelindert werden.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #6 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-031-scanner" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Klassische, medizinische Massagen</h5>
                {/* Text */}
                <p>
                  Klassische, medizinische Massagen sind eine Form der manuellen Therapie, die zur Behandlung von körperlichen Beschwerden eingesetzt wird. Diese
                  Massagen nutzen verschiedene Techniken wie Kneten, Streichen, Klopfen und Druck, um Muskelverspannungen und Schmerzen zu lösen und die Durchblutung zu verbessern.
                  Klassische, medizinische Massagen können bei vielen Beschwerden helfen, wie zum Beispiel bei Rückenschmerzen, Verspannungen im Nacken- und Schulterbereich, Kopfschmerzen oder auch bei postoperativen Schmerzen.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #7 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-076-microscope" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">CMD</h5>
                {/* Text */}
                <p>
                  Die craniomandibuläre Dysfunktion (CMD) ist eine Störung, die im Zusammenhang mit dem Kiefergelenk und den umgebenden Muskeln, Nerven und Blutgefäßen auftritt. Eine CMD kann verschiedene Symptome verursachen, wie z.B. Schmerzen im Bereich des Kiefers, Nacken, Kopfschmerzen, Schwindel oder Tinnitus. Ursachen für CMD sind oft Zahnfehlstellungen, Stress, Verletzungen oder Überbeanspruchung der Kiefermuskulatur. Die Behandlung von CMD umfasst häufig eine Kombination aus Therapien wie manuelle Therapie, klassischer Physiotherapie sowie Muskelentspannungstechniken.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #8 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-068-ambulance-3" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Elektrotherapie</h5>
                {/* Text */}
                <p>
                  Die Elektrotherapie ist eine physiotherapeutische
                  Behandlungsmethode, bei der elektrischer Strom eingesetzt wird, um Gewebe im Körper zu stimulieren. Dabei werden elektrische Impulse gezielt auf bestimmte Körperbereiche übertragen, um Schmerzen zu lindern, die Muskelkraft zu verbessern, die Durchblutung zu fördern und Entzündungen zu bekämpfen.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #9 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-068-ambulance-3" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Wärmetherapie</h5>
                {/* Text */}
                <p>
                  Die Wärmetherapie ist eine Art der Behandlung von Schmerzen oder
                  Verletzungen durch die Anwendung von Wärme. Die Wärme kann auf verschiedene Weise auf den Körper aufgebracht werden, zum Beispiel durch warme Kompressen oder Infrarotstrahlung.Die Wärme hilft dabei, die Durchblutung zu verbessern und die Muskeln zu entspannen, was Schmerzen lindert und die Heilung fördert.
                </p>
              </SwiperSlide>
              {/* SERVICE BOX #10 */}
              <SwiperSlide className="sbox-3 icon-sm">
                {/* Icon */}
                <div className="sbox-3-icon">
                  <span className="flaticon-068-ambulance-3" />
                </div>
                {/* Title */}
                <h5 className="h5-xs steelblue-color">Kältetherapie</h5>
                {/* Text */}
                <p>
                  Die Kältetherapie ist eine medizinische Anwendung, bei der Kälte zur Behandlung von Verletzungen und Schmerzen eingesetzt wird.Die Kälte wirkt entzündungshemmend und schmerzlindernd, da sie die Durchblutung reduziert und dadurch Schwellungen und Entzündungen abbaut.
                </p>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
          </div>
        </div>
        {/* END SERVICES CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default ServicesPanel;
