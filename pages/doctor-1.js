import Doctor1Details from "../src/components/Doctor-1/Doctor1Details";
import Doctor1Reviews2 from "../src/components/Doctor-1/Doctor1Reviews2";
import Layouts from "../src/layout/Layouts";

const Doctor1 = () => {
  return (
    <Layouts>
      <section
        id="doctor-breadcrumbs"
        className="bg-fixed doctor-details-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7 offset-md-5">
              <div className="doctor-data white-color">
                {/* Name */}
                <h2 className="h2-xs">Dr. Matthew Anderson</h2>
                <h5 className="h5-md">
                  Neurologist / Epilepsy Specialist / Cardiologist
                </h5>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      <Doctor1Details />
      <Doctor1Reviews2 />
    </Layouts>
  );
};

export default Doctor1;
