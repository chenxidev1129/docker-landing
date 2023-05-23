import Link from "next/link";
import React from "react";

const TermsPanel = () => {
    return (
        <section id="terms-page" className="wide-80 terms-section division">
            <div className="container">
                <div className="row">
                    {/* TERMS CONTENT */}
                    <div className="col-lg-12">
                        <div className="terms-holder pr-30">
                            <div className="terms-box">
                                <p className="p-notice steelblue-color">
                                    Datenschutzerklärung
                                </p>
                                <p>
                                    Wir freuen uns über Ihren Besuch auf unserer Webseite <a href="www.physio-stützpunkt.de">www.physio-stützpunkt.de</a> und Ihr Interesse an unserem Unternehmen und unseren Angeboten. Für externe Links zu fremden Inhalten übernehmen wir trotz sorgfältiger inhaltlicher Kontrolle keine Haftung, da wir die Übermittlung dieser Information nicht veranlassen, den Adressaten der übermittelten Information und die übermittelten Informationen selbst nicht ausgewählt oder verändert haben.
                                </p>
                                <p>
                                    Der Schutz Ihrer personenbezogenen Daten bei der Erhebung, Verarbeitung und Nutzung anlässlich Ihres Besuchs auf unseren Internetseiten ist uns ein wichtiges Anliegen und erfolgt im Rahmen der gesetzlichen Vorschriften, über die Sie sich z.B. unter <a href="www.bfd.bund.de">www.bfd.bund.de</a> informieren können.
                                </p>
                                <p>
                                    Im Folgenden erläutern wir Ihnen, welche Informationen wir während Ihres Besuchs auf unseren Webseiten erfassen und wie diese genutzt werden:
                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    1. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung
                                </h5>
                                <p>
                                    a) Beim Besuch der Webseite
                                </p>
                                <p>
                                    Bei jedem Zugriff eines Kunden (oder sonstigen Besuchers) auf unserer Webseite werden durch den auf Ihrem Endgerät (Computer, Laptop, Tablet, Smartphone, etc.) zum Einsatz kommenden Internet-Browser automatisch Informationen an den Server unserer Webseite gesendet. Diese Informationen werden temporär in einem sog. Logfile (Protokolldatei) gespeichert.
                                </p>
                                <p>
                                    Folgende Daten werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                                </p>
                                {/* List */}
                                <ul className="terms-list">
                                    <li>
                                        IP-Adresse des anfragenden Rechners, sowie Geräte-ID oder individuelle Geräte-Kennung und Gerätetyp,
                                    </li>
                                    <li>
                                        Name der abgerufenen Datei und übertragene Datenmenge, sowie Datum und Uhrzeit des Abrufs,
                                    </li>
                                    <li>
                                        Meldung über erfolgreichen Abruf,
                                    </li>
                                    <li>
                                        anfragende Domain,
                                    </li>
                                    <li>
                                        Beschreibung des Typs des verwendeten Internet-Browsers und ggf. des Betriebssystems Ihres Endgeräts sowie der Name Ihres Access-Providers,
                                    </li>
                                    <li>
                                        Ihre Browser-Verlaufsdaten sowie Ihre standardmäßigen Weblog-Informationen
                                    </li>
                                </ul>
                                <p>
                                    Unser berechtigtes Interesse gem. Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Erhebung der Daten beruht auf den folgenden Zwecken: Gewährleistung eines reibungslosen Verbindungsaufbaus und einer komfortablen Nutzung der Webseite, Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken.
                                </p>
                                <p>
                                    In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
                                </p>
                                <p>
                                    b) Bei Abschluss eines Vertragsverhältnisses
                                </p>
                                <p>
                                    Bei Abschluss eines Vertragsverhältnisses auf unserer Webseite bitten wir Sie um die Angaben folgender personenbezogener Daten:
                                </p>
                                <p>
                                    weitere personenbezogene Daten, zu deren Erfassung und Verarbeitung wir gesetzlich verpflichtet oder berechtigt sind und die wir für Ihre Authentifizierung, Identifizierung oder zur Überprüfung der von uns erhobenen Daten benötigen.
                                </p>
                                <p>
                                    Die genannten Daten werden zur Abwicklung des Vertragsverhältnisses verarbeitet. Die Verarbeitung der Daten erfolgt aufgrund von Art. 6 Abs. 1 lit. b DSGVO. Die Speicherfrist ist auf den Vertragszweck und, sofern vorhanden, gesetzliche und vertragliche Aufbewahrungspflichten beschränkt.
                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    2. Weitergabe von personenbezogenen Daten
                                </h5>
                                <p>
                                    Eine Übermittlung Ihrer Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.
                                </p>
                                <p>
                                    Wir geben Ihre Daten nur an Dritte weiter, wenn:
                                </p>
                                <ul className="terms-list">
                                    <li>
                                        Sie eine ausdrückliche Einwilligung dazu erteilt haben nach (Art. 6 Abs. 1 S. 1 lit. a DSGVO),
                                    </li>
                                    <li>
                                        dies für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO),
                                    </li>
                                    <li>
                                        eine gesetzliche Verpflichtung zur Weitergabe besteht (Art.6 Abs.1 lit. c DSGVO),
                                    </li>
                                    <li>
                                        die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben (Art. 6 Abs. 1 S. 1 lit. f DSGVO). In diesen Fällen beschränkt sich der Umfang der übermittelten Daten jedoch nur auf das erforderliche Minimum.
                                    </li>
                                </ul>
                                <p>
                                    Unsere Datenschutzbestimmungen stehen im Einklang mit den geltenden datenschutzrechtlichen Bestimmungen und die Daten werden nur in der Bundesrepublik Deutschland / Europäischen Union verarbeitet. Eine Übermittlung in Drittländer findet nicht statt und ist nicht beabsichtigt.
                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    3. Betroffenenrechte
                                </h5>
                                <p>
                                    Auf Anfrage werden wir Sie gern informieren, ob und welche personenbezogenen Daten zu Ihrer Person gespeichert sind (Art. 16 DSGVO), insbesondere über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling.
                                </p>
                                <p>
                                    Ihnen steht zudem das Recht zu, etwaig unrichtig erhobene personenbezogene Daten berichtigen oder unvollständig erhobene Daten vervollständigen zu lassen (Art. 16 DSGVO).
                                </p>
                                <p>
                                    Ferner haben Sie das Recht, von uns die Einschränkung der Verarbeitung Ihrer Daten zu verlangen, sofern die gesetzlichen Voraussetzungen hierfür vorliegen (Art. 18 DSGVO).
                                </p>
                                <p>
                                    Sie haben das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen (Art. 20 DSGVO).
                                </p>
                                <p>
                                    Darüber hinaus steht Ihnen das sogenannte „Recht auf Vergessenwerden“ zu, d.h. Sie können von uns die Löschung Ihrer personenbezogenen Daten verlangen, sofern hierfür die gesetzlichen Voraussetzungen vorliegen (Art. 17 DSGVO).
                                </p>
                                <p>
                                    Unabhängig davon werden Ihre personenbezogenen Daten automatisch von uns gelöscht, wenn der Zweck der Datenerhebung weggefallen oder die Datenverarbeitung unrechtmäßig erfolgt ist.
                                </p>
                                <p>
                                    Gemäß Art. 7 Abs. 3 DSGVO haben Sie das Recht Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen.
                                </p>
                                <p>
                                    Sie haben zudem das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch zu erheben, sofern ein Widerspruchsrecht gesetzlich vorgesehen ist. Im Falle eines wirksamen Widerrufs werden Ihre personenbezogenen Daten ebenfalls automatisch durch uns gelöscht (Art. 21 DSGVO).
                                </p>
                                <p>
                                    Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an: Mail@physio-stützpunkt.de.
                                </p>
                                <p>
                                    Bei Verstößen gegen die datenschutzrechtlichen Vorschriften haben Sie gem. Art. 77 DSGVO die Möglichkeit, Beschwerde bei einer Aufsichtsbehörde zu erheben.
                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    4. Dauer der Datenspeicherung
                                </h5>
                                <p>
                                    Die erhobenen Daten werden solange bei uns gespeichert, wie dies für die Durchführung der mit uns eingegangen Verträge erforderlich ist oder Sie Ihr Recht auf Löschung oder Ihr Recht auf Datenübertragung auf ein anderes Unternehmen nicht ausgeübt haben.
                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    5. Cookies
                                </h5>
                                <p>
                                    Wir setzen auf unserer Webseite keine Cookies ein.
                                </p>
                            </div>
                            {/* TERMS BOX #8 */}
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    6. Online-Marketing/ Analyse-Tools
                                </h5>
                                <p>

                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    Links zu unseren Internetauftritten in sozialen Netzwerken
                                </h5>
                                <p>
                                    Auf unserer Webseite haben wir Links zu unseren Internetauftritten in den sozialen Netzwerken eingebunden. Wir weisen darauf hin, dass es sich hierbei nur um Verlinkungen handelt, die zu unserem Internetauftritt in den genannten Netzwerken weiterleiten, es handelt sich nicht um sog. Plugins, mit denen Sie bspw. Informationen auf unserer Webseite in den Netzwerken „teilen“ oder „liken“ könnten. Soweit uns bekannt ist, ist es technisch nicht möglich, dass soziale Netzwerke über die bloßen Verlinkungen personenbezogene Daten auf unserer Webseite erheben können. Zweck und Umfang der Datenerhebung nach der Weiterleitung entnehmen Sie bitte den Datenschutzinformationen des jeweiligen Netzwerkes.
                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    Datensicherheit
                                </h5>
                                <p>
                                    Wir sind um alle notwendigen technischen und organisatorischen Sicherheitsmaßnahmen bemüht, um Ihre personenbezogenen Daten so zu speichern, dass sie weder Dritten noch der Öffentlichkeit zugänglich sind. Sollten Sie mit uns per E-Mail in Kontakt treten wollen, so weisen wir Sie darauf hin, dass bei diesem Kommunikationsweg die Vertraulichkeit der übermittelten Informationen nicht vollständig gewährleistet werden kann. Wir empfehlen Ihnen daher, uns vertrauliche Informationen ausschließlich über den Postweg zukommen zu lassen.
                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    Aktualität und Änderung dieser Datenschutzerklärung
                                </h5>
                                <p>
                                    Diese Datenschutzerklärung ist aktuell gültig.
                                </p>
                                <p>
                                    Durch die Weiterentwicklung unserer Webseite und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Webseite unter <a href="https://physio-stützpunkt.de">https://physio-stützpunkt.de</a> von Ihnen abgerufen und ausgedruckt werden.
                                </p>
                            </div>
                            <div className="terms-box">
                                <h5 className="h5-xl steelblue-color">
                                    Name und Kontaktdaten des für die Verarbeitung Verantwortlichen
                                </h5>
                                <p>
                                    Diese Datenschutz-Information gilt für die Datenverarbeitung durch:
                                </p>
                                <p>
                                    Physiotherapie Stützpunkt Berlin
                                </p>
                                <p>
                                    Kolonnenstraße 60, 10827 Berlin
                                </p>
                                <p>
                                    Mail@physio-stützpunkt.de
                                </p>
                                <p>
                                    +49 30 60977359
                                </p>
                                <p>
                                    Sidar Arslan
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*END TERMS CONTENT */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default TermsPanel;
