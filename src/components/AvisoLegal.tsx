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

const AvisoLegal = () => {
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
      <div>
        <button onClick={openModal}>Ver Nota Legal</button>
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
                className="text-[#d2b57f] mb-12 text-3xl font-bold mb-4 min-w-full"
              >
                Lea atentamente nuestro «Aviso Legal» para que tenga una mejor
                experiencia de usuario.
              </h2>
            </div>

            <p className="mb-8">
              En cumplimiento con el deber de información recogido en artículo
              10 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad
              de la Información y del Comercio Electrónico, le informamos que el
              Sitio Web y el portal de Internet https://first-dinner.com/ (en
              adelante, el «Web») es titularidad de Corporación dual grupo Grupo
              LC S.L.U con domicilio social en Avda Maisonave 33 portal 3 3ª
              03002 Alicante CIF B42529370 El presente aviso legal regula las
              condiciones de uso del citado portal de Internet.
            </p>

            <h3>LEY APLICABLE Y JURISDICCIÓN</h3>
            <p>
              Con carácter general las relaciones entre Fisrt Dinner Events y
              los usuarios de sus servicios telemáticos, presentes en la web, se
              encuentran sometidas a la legislación y jurisdicción españolas.
            </p>
            <p className="mb-8">
              Con carácter general las relaciones entre Fisrt Dinner Events y
              los usuarios de sus servicios telemáticos, presentes en la web, se
              encuentran sometidas a la legislación y jurisdicción españolas.
            </p>

            {/* <p className='mb-8'>
            <ol>
              <li>Prestación de servicios online.</li>
              <li>Gestión de usuarios web.</li>
              <li>Comunicaciones comerciales relacionadas con nuestros servicios.</li>
            </ol>
          </p> */}

            <h3>ACEPTACIÓN DEL USUARIO</h3>
            <p>
              Este Aviso Legal regula el acceso y utilización de la página web
              que First Dinner Events pone a la disposición de los usuarios de
              Internet. Se considera usuario la persona que acceda, navegue,
              utilice o participe en los servicios y actividades de la página
              web.
            </p>
            <p>
              El usuario queda informado, y acepta, que el acceso a la presente
              web no supone, en modo alguno, el inicio de una relación comercial
              con First Dinner Events
            </p>
            <p className="mb-8">
              El acceso y navegación en el sitio web por parte del usuario
              supone la aceptación de la totalidad de las presentes Condiciones
              de Uso. En caso de desacuerdo con las condiciones debe abstenerse
              a usar el sitio web.
            </p>

            <h3>ACCESO A LA WEB</h3>
            <p className="mb-8">
              No se ceden datos a terceros, salvo obligación legal.
            </p>

            <h3>Contenido y uso</h3>
            <p>
              La visita al sitio web por parte del usuario deberá hacerse de
              forma responsable y de conformidad a la legalidad vigente, la
              buena fe, el presente Aviso Legal y respetando los derechos de
              propiedad intelectual e industrial de titularidad de First Dinner
              Evenst o cualquier otras personas físicas o jurídicas.
            </p>
            <p>
              El uso de cualquiera de los contenidos del sitio web con
              finalidades que sean o pudieran ser ilícitas queda totalmente
              prohibido, así como la realización de cualquier acción que cause o
              pueda causar daños o alteraciones de cualquier tipo no consentidas
              por First Dinner Events al sitio web o a sus contenidos.
            </p>
            <p className="mb-8">
              El titular del web no se identifica con las opiniones vertidas en
              el mismo por sus colaboradores. La empresa se reserva el derecho
              de efectuar sin previo aviso las modificaciones que considere
              oportunas en su Web, pudiendo cambiar, suprimir o añadir tanto los
              contenidos y servicios que se presten a través de la misma como la
              forma en la que éstos aparezcan presentados o localizados en sus
              servidores.
            </p>

            <h3>PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
            <p>
              Los derechos de propiedad intelectual del contenido de las páginas
              web, su diseño gráfico y códigos son titularidad de First Dinner
              Events y, por tanto, queda prohibida su reproducción,
              distribución, comunicación pública, transformación o cualquier
              otra actividad que se realice con los contenidos de la página web,
              ni siquiera, aunque se citen las fuentes, salvo que se cuente con
              el consentimiento previo, expreso y por escrito de First Dinner
              Events . Todos los nombres comerciales, marcas o signos distintos
              de cualquier clase contenidos en las páginas web de la empresa son
              propiedad de sus dueños y están protegidos por ley.
            </p>
            <p>
              First Dinner Events no concede ninguna licencia o autorización de
              uso de ninguna clase sobre sus derechos de propiedad intelectual e
              industrial o sobre cualquier otra propiedad o derecho relacionado
              con el sitio web, y en ningún caso se entenderá que el acceso y
              navegación de los usuarios implica una renuncia, transmisión,
              licencia o cesión total ni parcial de dichos derechos por parte de
              First Dinner Events
            </p>
            <p className="mb-8">
              Cualquier uso de esos contenidos no autorizado previamente por
              parte de First Dinner Evenst será considerado un incumplimiento
              grave de los derechos de propiedad intelectual o industrial y dará
              lugar a las responsabilidades legalmente establecidas. First
              Dinner Evenst se reserva el derecho de ejercitar frente al usuario
              las acciones judiciales y extrajudiciales que correspondan.
            </p>

            <h3>RESPONSABILIDAD Y GARANTÍAS</h3>
            <p>
              First Dinner Events declara que ha adoptado las medidas necesarias
              que, dentro de sus posibilidades y el estado de la tecnología,
              permitan el correcto funcionamiento de su sitio web, así como la
              ausencia de virus y componentes dañinos. Sin embargo, First Dinner
              Evenst no puede hacerse responsable de las siguientes situaciones
              que se enumeran a título enunciativo, pero no limitativo:
            </p>
            <ol>
              <li>• La continuidad y disponibilidad de los Contenidos.</li>
              <li>
                • La ausencia de errores en dichos Contenidos ni la corrección
                de cualquier defecto que pudiera ocurrir.
              </li>
              <li>• La ausencia de virus y/o demás componentes dañinos.</li>
              <li>
                • Los daños o perjuicios que cause cualquier persona que vulnere
                los sistemas de seguridad de First Dinner Events
              </li>
              <li>
                • El uso que los usuarios puedan hacer de los contenidos
                incluidos en el web. En consecuencia, First Dinner Evenst no
                garantiza que el uso que los usuarios puedan hacer de los
                contenidos que en su caso se incluyan en el sitio web, se
                ajusten al presente aviso legal, ni que el uso del sitio web se
                realice de forma diligente.
              </li>
              <li>
                • El uso por menores de edad del sitio web o del envío de sus
                datos personales sin el permiso de sus tutores, siendo los
                tutores responsables del uso que hagan de Internet.
              </li>
              <li>
                • Los contenidos a los que el usuario pueda acceder a través de
                enlaces no autorizados o introducidos por usuarios mediante
                comentarios o herramientas similares.
              </li>
              <li>
                • La introducción de datos erróneos por parte del usuario o de
                un tercero.
              </li>
            </ol>

            <p>
              First Dinner Events podrá suspender temporalmente y sin previo
              aviso, la accesibilidad al sitio web con motivo de operaciones de
              mantenimiento, reparación, actualización o mejora. No obstante,
              siempre que las circunstancias lo permitan, First Dinner Evenst
              comunicará al usuario, con antelación suficiente, la fecha
              prevista para la suspensión de los contenidos.
            </p>
            <p className="mb-8">
              Asimismo, de conformidad con los arts. 11 y 16 de la Ley 34/2002,
              de 11 de julio, de servicios de la sociedad de la información y de
              comercio electrónico (LSSICE), First Dinner Evenst se compromete a
              la eliminación o, en su caso, bloqueo de los contenidos que
              pudieran afectar o ser contrarios a la legislación vigente, los
              derechos de terceros o la moral y orden público.
            </p>

            <h3>COOKIES</h3>
            <p>
              First Dinner Evenst utiliza cookies, a los efectos de optimizar y
              personalizar su navegación por el sitio web. Las cookies son
              ficheros físicos de información que se alojan en el propio
              terminal del usuario, la información recogida mediante las cookies
              sirve para facilitar la navegación del usuario por el portal y
              optimizar la experiencia de navegación. Los datos recopilados
              mediante las cookies pueden ser compartidos con los creadores de
              las mismas, pero en ningún caso la información obtenida por las
              mismas será asociada a datos personales ni a datos que puedan
              identificar al usuario.
            </p>
            <p className="mb-8">
              Sin embargo, si el usuario no desea que se instalen cookies en su
              disco duro, tiene la posibilidad de configurar el navegador de tal
              modo que impida la instalación de estos archivos. Para obtener más
              información consulte nuestra Política de Cookies
              www.vinquloformacion.com/politica-de-cookies.
            </p>

            <h3>ENLACES (LINKS)</h3>
            <p>
              La presencia de enlaces (links) en la página web de First Dinnert
              Events hacia otros sitios de Internet tiene finalidad meramente
              informativa y en ningún caso suponen sugerencia, invitación o
              recomendación sobre los mismos. First Dinner Evenst no asumirá
              responsabilidad por los contenidos de un enlace perteneciente a un
              sitio web ajeno, ni garantizará la fiabilidad, exactitud,
              amplitud, veracidad, validez y disponibilidad técnica.
            </p>
            <p>
              En el caso de que en otros sitios web se establezcan enlaces a la
              página web de First Dinner Events no se entenderá que First Dinner
              Evenst ha autorizado el enlace o el contenido del sitio web en el
              que se contiene el enlace, tampoco podrá incluirse en la página
              del enlace contenidos inapropiados, difamatorios, ilegales,
              obscenos o ilícitos, ni otros contenidos que sean contrarios a la
              legalidad vigente.
            </p>
            <p className="mb-8">
              First Dinner Evenst se reserva la posibilidad de contactar con el
              propietario del sitio web en el que se establezca el enlace si
              considera que se incumple la normativa, así como de ejercitar las
              correspondientes acciones judiciales y extrajudiciales.
            </p>

            <h3>MODIFICACIÓN DE LAS CONDICIONES</h3>
            <p>
              First Dinner Evenst se reserva expresamente el derecho a modificar
              unilateralmente, total o parcialmente, sin necesidad de previo
              aviso, el presente Aviso Legal. El usuario reconoce y acepta que
              es su responsabilidad revisar periódicamente el presente Aviso
              Legal.
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AvisoLegal;
