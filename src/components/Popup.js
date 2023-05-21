import React, { Fragment, useEffect, useRef } from "react";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const Popup = ({ close, content }) => {
  let domNode = useClickOutside(() => {
    close(false);
  });

  const findContent = (name) => {
    switch (name) {
      case "vimeo":
        return (
          <iframe
            className="mfp-iframe"
            src={`//player.vimeo.com/video/${
              content && content.src ? content && content.src : "hello"
            }?autoplay=1`}
            frameBorder={0}
            allowFullScreen
          />
        );
      case "soundcloud":
        return (
          <iframe
            className="mfp-iframe"
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${
              content && content.src ? content && content.src : "471954807"
            }&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            frameBorder={0}
            allowFullScreen
          />
        );

      case "image":
        return (
          <img
            className="mfp-img"
            src={content && content.src ? content && content.src : "hello"}
          />
        );

      default:
        return (
          <iframe
            className="mfp-iframe"
            src={`//www.youtube.com/embed/${
              content && content.src ? content && content.src : "SZEflIVnhH8"
            }?autoplay=1`}
            frameBorder={0}
            allowFullScreen
          />
        );
    }
  };

  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div
          className={`mfp-container mfp-s-ready mfp-iframe-holder ${
            content && content.name == "image" ? "mfp-img-container" : ""
          }`}
        >
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close()}
              >
                ×
              </button>

              {findContent(content && content.name)}
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Popup;
