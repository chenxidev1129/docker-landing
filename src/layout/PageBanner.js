import Link from "next/dist/client/link";
const PageBanner = ({ pageTitle, motherTitle, url }) => {
  return (
    <div id="breadcrumb" className="division">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="breadcrumb-holder">
              {/* Breadcrumb Nav */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/demo-1">Home</Link>
                  </li>
                  {motherTitle && (
                    <li className="breadcrumb-item">
                      <a href={`/${url}`}>{motherTitle}</a>
                    </li>
                  )}
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageTitle}
                  </li>
                </ol>
              </nav>
              {/* Title */}
              <h4 className="h4-sm steelblue-color">{pageTitle}</h4>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </div>
  );
};

export default PageBanner;
