import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
  Width: "50%",
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement');

const PoliticaCookies = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex flex-col min-h-full lg:px-24 items-center text-center">
        <button onClick={openModal}>Ver Politica de Cookies</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className=""
        >
          <div className="lg:p-20 min-h-full content-end">
            <div className="text-center">
              <button
                onClick={closeModal}
                className="fixed bg-[#d2b57f] text-white top-12 right-12 lg:right-20 px-4 py-2 rounded-full hover:bg-amber-600"
              >
                X
              </button>
              <h2
                ref={(_subtitle) => (subtitle = _subtitle)}
                className="text-[#d2b57f] mb-12 text-3xl font-bold mb-4 lg:min-w-full"
              >
                Lea atentamente nuestras «Política de Cookies» para que tenga
                una mejor experiencia de usuario.
              </h2>
            </div>

            <p className="mb-8">
              En cumplimiento con el deber de información recogido en el
              apartado 2º del artículo 22 de la Ley 34/2002, de 11 de Julio, de
              Servicios de la Sociedad de la Información y del Comercio
              Electrónico, la presente política de cookies tiene por finalidad
              informarle de manera clara y precisa sobre las cookies que se
              utilizan en la página web de Corporación dual grupo Grupo LC S.L.U
              (First Dinner Events)
            </p>

            <h3>¿QUÉ SON LAS COOKIES?</h3>
            <p className="mb-8">
              Una cookie es un fichero de pequeño tamaño que los sitios web
              envían al navegador y se descargan en su ordenador. Las cookies
              permiten que la página web almacene y recupere la información
              sobre su visita, como su idioma preferido y otras opciones, con el
              fin de mejorar los servicios que se ofrecen y contribuir a tener
              una mejor experiencia de navegación para el usuario.
            </p>

            <h3>¿QUÉ SON LAS COOKIES?</h3>
            <p>
              En función de quién gestione el dominio desde donde se envían las
              cookies y se traten los datos, se distinguirá entre cookies
              propias y cookies de terceros. Las cookies también pueden
              clasificarse según el plazo de tiempo que permanezcan almacenadas
              en el navegador del usuario, distinguiéndose entre cookies de
              sesión o cookies persistentes.
            </p>
            <p>
              Finalmente, en función de la finalidad para la que se trate la
              información recopilada, las cookies se pueden clasificar en las
              siguientes categorías:
            </p>
            <ol>
              <li>
                • Cookies técnicas: permiten al usuario navegar por un sitio web
                y utiliz ar algunos de los servicios ofrecidos por el mismo
                (como, por ejemplo, las que sirven para recordar los elementos
                integrantes de un carrito de compra).
              </li>
              <li>
                • Cookies de personalización: permiten que el usuario acceda al
                sitio web con unas características determinadas, como puede ser
                el idioma.
              </li>
              <li>
                • Cookies de seguridad: sirven para impedir o dificultar los
                ataques contra el sitio web.
              </li>
              <li>
                • Cookies de complemento para intercambiar contenidos sociales:
                los llamados plug-in, que permiten compartir contenidos en redes
                sociales.
              </li>
              <li>
                • Cookies de análisis: permiten al responsable el seguimiento
                del comportamiento del usuario.
              </li>
              <li>
                • Cookies publicitarias: permiten gestionar los espacios de
                publicidad del sitio web.
              </li>
              <li>
                • Cookies de publicidad comportamental: como las anteriores,
                sirven para gestionar los espacios de publicidad del sitio web
                en función de la información recogida sobre el comportamiento
                del usuario y sus hábitos, adaptando la publicidad al perfil del
                usuario.
              </li>
              <li>
                • Cookies de geolocalización: utilizadas para averiguar el país
                dónde se encuentra el usuario.
              </li>
            </ol>

            <h3>AUTORIZACIÓN PARA EL USO DE COOKIES</h3>
            <p className="mb-8">
              De conformidad con el aviso de cookies que aparece en el sitio
              web, el usuario puede consentir expresamente el uso de cookies que
              requieran consentimiento; sin embargo, el uso de cookies técnicas
              o necesarias no requiere de consentimiento. Sin perjuicio de todo
              ello, el usuario puede modificar la configuración de su navegador
              para rechazar el uso de las cookies.
            </p>

            <h3>CÓMO MODIFICAR LA CONFIGURACIÓN DE LAS COOKIES</h3>
            <p className="mb-8">
              Usted puede restringir, bloquear o borrar las cookies de
              Corporación dual grupo Grupo LC S.L.U o cualquier otra página web
              utilizando su navegador. En cada navegador la operativa es
              diferente, puede encontrar cómo hacerlo en el menú de ayuda de su
              navegador dónde se establece el procedimiento para su eliminación.
              Para más información:
            </p>
            <ul>
              <li>
                • Google Chrome:
                https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=es
              </li>
              <li>
                • Mozilla Firefox: https://support.moz illa.org/es/kb/habilitar-
                y-deshabilitar- cookies- sitios-web-rastrear-preferencias
              </li>
              <li>
                • Safari:
                https://support.apple.com/es-es/guide/safari/sfri11471/mac
              </li>
              <li>
                • Internet Explorer:
                https://support.microsoft.com/es-es/help/278835/how-to-delete-
                cookie-files-in-internet-explorer
              </li>
            </ul>

            <p className="mb-8">
              Es posible que al deshabilitar las cookies la página web no
              funcione correctamente o no pueda acceder a determinadas funciones
              de la misma.
            </p>

            <h3>COOKIES UTILIZADAS EN LA WEB</h3>
            <p>
              La ley afirma que podemos almacenar cookies en su dispositivo si
              son estrictamente necesarias para el funcionamiento de esta
              página. Para todos los demás tipos de cookies necesitamos su
              permiso.
            </p>
            <p>
              Esta página utiliza tipos diferentes de cookies. Algunas cookies
              son colocadas por servicios de terceros que aparecen en nuestras
              páginas.
            </p>
            <p>
              En cualquier momento puede cambiar o retirar su consentimiento
              desde la Declaración de cookies en nuestro sitio web.Obtenga más
              información sobre quiénes somos, cómo puede contactarnos y cómo
              procesamos los datos personales en nuestra Política de privacidad.
            </p>
            <p>
              Obtenga más información sobre quiénes somos, cómo puede
              contactarnos y cómo procesamos los datos personales en nuestra
              Política de privacidad.
            </p>
            <p>
              Al contactarnos respecto a su consentimiento, por favor, indique
              el ID y la fecha de su consentimiento.
            </p>
            <p>
              Su consentimiento se aplica a los siguientes dominios
              https://first-dinner.com/
            </p>

            <h3>MODIFICACIÓN DE LAS CONDICIONES</h3>
            <p>
              {" "}
              Corporación dual grupo Grupo LC S.L.U se reserva expresamente el
              derecho a modificar unilateralmente, total o parcialmente, sin
              necesidad de previo aviso, la presente Política de Cookies. El
              usuario reconoce y acepta que es su responsabilidad revisar la
              presente Política de Cookies.
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default PoliticaCookies;
