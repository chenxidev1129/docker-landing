import Link from "next/link";
import React, { useEffect, useState } from "react";

const CookieConsentPanel = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const hasConsent = localStorage.getItem('cookieConsent');
        setShowConsent(!hasConsent);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowConsent(false);
    };

    const handleCancel = () => {
        setShowConsent(false);
    };

    return (
        <>
            {showConsent && (
                <div className={`modal ${showConsent ? 'show' : ''}`} tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-xl modal-dialog-bottom" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modalTitle">Cookies Consent</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => handleCancel()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    Auf unserer Webseite verwenden wir ausschließlich notwendige Cookies, um Ihnen eine optimale Nutzungserfahrung zu ermöglichen. Diese Cookies sind für den Betrieb der Webseite unbedingt erforderlich und können nicht deaktiviert werden. Sie speichern keine persönlichen Informationen und werden nur für den Zeitraum Ihres Besuchs auf unserer Webseite gespeichert.
                                </p>
                                <p>
                                    Indem Sie unsere Webseite weiterhin nutzen, erklären Sie sich mit der Verwendung dieser notwendigen Cookies einverstanden. Wenn Sie diese Cookies deaktivieren möchten, können Sie dies in den Einstellungen Ihres Browsers tun. Bitte beachten Sie jedoch, dass dies die Funktionalität und Darstellung unserer Webseite beeinträchtigen kann.
                                </p>
                                <p>
                                    Wir verwenden keine Marketing-Cookies oder Cookies von Drittanbietern, die Ihr Surfverhalten verfolgen oder persönliche Daten sammeln. Unser Ziel ist es, Ihre Privatsphäre zu schützen und Ihnen eine sichere und benutzerfreundliche Webseite anzubieten.
                                </p>
                                <p>
                                    Wenn Sie Fragen zur Verwendung von Cookies auf unserer Webseite haben, können Sie sich gerne an uns wenden. Vielen Dank für Ihr Verständnis und Ihre Zustimmung zur Verwendung notwendiger Cookies.
                                </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => handleAccept()}>Zustimmen</button>
                            <button type="button" className="btn btn-secondary" onClick={() => handleCancel()}>Ablehnen</button>
                        </div>
                    </div>
                </div>
                </div >
            )}
        </>
    );
};

export default CookieConsentPanel;
