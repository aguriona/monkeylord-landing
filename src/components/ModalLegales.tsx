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

const ModalLegales = () => {
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
        <button onClick={openModal}>Ver Politicas de Privacidad</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Privacidad"
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
                Información básica sobre Protección de Datos
              </h2>
            </div>
            <h3>RESPONSABLE</h3>
            <p className="mb-8">Corporación dual grupo Grupo LC S.L.U</p>

            <h3>FINALIDAD</h3>
            <p className="mb-8">
              <ol>
                <li>Prestación de servicios online.</li>
                <li>Gestión de usuarios web.</li>
                <li>
                  Comunicaciones comerciales relacionadas con nuestros
                  servicios.
                </li>
              </ol>
            </p>

            <h3>LEGITIMACIÓN</h3>
            <p className="mb-8">Consentimiento expreso e interés legítimo.</p>

            <h3>DESTINATARIOS</h3>
            <p className="mb-8">
              No se ceden datos a terceros, salvo obligación legal.
            </p>

            <h3>DERECHOS</h3>
            <p className="mb-8">
              Acceder, rectificar y suprimir los datos, así como otros derechos,
              como se explica en la información adicional.
            </p>

            <h3>INFORMACIÓN ADICIONAL</h3>
            <p>
              En Corporación dual grupo Grupo LC S.L.U trabajamos para ofrecerte
              a través de nuestros productos y servicios la mejor experiencia
              posible. En algunos casos, es necesario recabar información para
              conseguirlo. Nos importa tu privacidad y creemos que debemos ser
              transparentes al respecto. Por ello, y a efectos de lo previsto en
              el REGLAMENTO (UE) 2016/679 DEL PARLAMENTO EUROPEO Y DEL CONSEJO
              de 27 de abril de 2016 (en adelante, “RGPD”) relativo a la
              protección de las personas físicas en lo que respecta al
              tratamiento de datos personales y a la libre circulación de estos
              datos, y la LEY 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la información y de comercio electrónico (en adelante,
              “LSSI”), Corporación dual grupo Grupo LC S.L.U informa al usuario
              que, como responsable del tratamiento, incorporará los datos de
              carácter personal facilitados por los usuarios en un fichero
              automatizado. Nuestro compromiso empieza por explicarte lo
              siguiente:
            </p>
            <ul className="mb-8">
              <li>
                • Se recogen tus datos para que la experiencia de usuario
                mejore, atendiendo a tus intereses y necesidades
              </li>
              <li>
                • Somos transparentes en relación a los datos que obtenemos
                acerca de ti y la razón por la que lo hacemos.
              </li>
              <li>
                • Nuestra intención es ofrecerte la mejor experiencia posible.
                Por ello, cuando vayamos a usar tu información personal lo
                haremos siempre cumpliendo la normativa, y cuando sea necesario,
                solicitaremos tu consentimiento.
              </li>
              <li>
                • Entendemos que tus datos te pertenecen. Por tanto, si decides
                no autorizarnos a procesarlos puedes solicitarnos que dejemos de
                tratarlos.
              </li>
              <li>
                • Nuestra prioridad consiste en garantizar tu seguridad y tratar
                tus datos de acuerdo con la normativa europea.
              </li>
            </ul>

            <p>
              Si deseas obtener más información sobre el tratamiento de tus
              datos, consulta los distintos apartados de la política de
              privacidad que se encuentran a continuación:
            </p>

            <h3>
              ¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO DE SUS DATOS PERSONALES?
            </h3>
            <p className="mb-8">
              Identidad: Corporación dual grupo Grupo LC S.L.U
            </p>
            <ul>
              <li>
                Domicilio social: Avda Maisonave 33 portal 3 3ª 03002 Alicante.
                C.I.F. nº : C.I.F B42529370
              </li>
              <li>Email: plannersingle@gmail.com</li>
            </ul>
            <p className="mb-8">
              First Dinner Events ha designado un Delegado de Protección de
              Datos o una persona de contacto interna dentro de su organización.
              Si deseas hacer una consulta en relación al tratamiento de tus
              datos personales, puedes ponerte en contacto con él mediante el
              correo plannersingle@gmail.com
            </p>

            <h3>¿QUÉ DATOS PERSONALES RECOPILAMOS?</h3>
            <p>
              Los datos personales que el usuario puede llegar a proporcionar:
            </p>
            <ul>
              <li>• Nombre, dirección y fecha de nacimiento.</li>
              <li>• Número de teléfono y dirección de correo electrónico.</li>
              <li>• Ubicación.</li>
              <li>• Información relativa a pagos y devoluciones.</li>
              <li>
                • Dirección IP, fecha y hora en la que has accedido a nuestros
                servicios, navegador de internet que uses y datos sobre el
                sistema operativo del dispositivo.
              </li>
              <li>
                • Cualquier otra información o datos que decidas compartir con
                nosotros.
              </li>
            </ul>

            <p className="mb-8">
              En algunos casos, es obligatoria la cumplimentación del formulario
              de registro para acceder y disfrutar de determinados servicios
              ofrecidos en la web; asimismo, no facilitar los datos personales
              solicitados o el no aceptar la presente política de protección de
              datos supone la imposibilidad de suscribirse, registrarse o
              participar en cualquiera de las promociones en las que se
              soliciten datos carácter personal.
            </p>

            <h3>¿POR QUÉ Y PARA QUÉ TRATAMOS TUS DATOS?</h3>
            <p>
              En Corporación dual grupo Grupo LC S.L.U tratamos la información
              que nos facilitan las personas interesadas con las siguientes
              finalidades:
            </p>
            <ul>
              <li>
                • Gestionar pedidos o contratar alguno de nuestros servicios, ya
                sea online o en las tiendas físicas.
              </li>
              <li>• Gestionar el envío de la información que nos soliciten.</li>
              <li>
                • Desarrollar acciones comerciales y realizar el mantenimiento y
                gestión de la relación con el usuario, así como la gestión de
                los servicios ofrecido a través del sitio web y las labores de
                información, pudiendo realizar valoraciones automáticas,
                obtención de perfiles y labores de segmentación de los clientes
                con el objeto de personalizar el trato conforme a sus
                características y necesidades y mejorar la experiencia en línea
                del cliente.
              </li>
              <li>
                • Desarrollar y gestionar los concursos, sorteos u otras
                actividades promocionales que se puedan organizar.
              </li>
              <li>
                • En algunos casos será necesario facilitar información a las
                Autoridades o terceras empresas por motivos de auditoría, así
                como manejar datos personales de facturas, contratos y
                documentos para responder a reclamaciones de clientes o de las
                Administraciones Públicas
              </li>
            </ul>
            <p className="mb-8">
              Informamos que los datos personales que se obtengan como
              consecuencia de tu registro como usuario formarán parte del
              Registro de Actividades y operaciones de Tratamiento (RAT), que se
              actualizará periódicamente de acuerdo con lo establecido en el
              RGPD.
            </p>

            <h3>¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE TUS DATOS?</h3>
            <p>
              El tratamiento de tus datos puede fundamentarse en las siguientes
              bases legales:
            </p>
            <ul className="mb-8">
              <li>
                • Consentimiento del interesado para la contratación de
                servicios y productos, para los formularios de contacto, las
                solicitudes de información o alta en newsletters.
              </li>
              <li>
                • Interés legítimo para el tratamiento de datos de nuestros
                clientes en acciones de marketing directo y consentimiento
                expreso del interesado para todo lo relativo a las valoraciones
                automáticas y elaboración de perfiles.
              </li>
              <li>
                • Cumplimiento de obligaciones legales para prevención del
                fraude, comunicación con Autoridades públicas y reclamaciones de
                terceros.
              </li>
            </ul>

            <h3>¿CUÁNTO TIEMPO CONSERVAMOS TUS DATOS?</h3>
            <p>
              El tratamiento de tus datos puede fundamentarse en las siguientes
              bases legales:
            </p>
            <p className="mb-8">
              El tratamiento de los datos con las finalidades descritas se
              mantendrá durante el tiempo necesario para cumplir con la
              finalidad de su recogida (por ejemplo, mientras dure la relación
              comercial), así como para el cumplimiento de las obligaciones
              legales que se deriven del tratamiento de los datos.
            </p>

            <h3>¿A QUÉ DESTINATARIOS SE COMUNICAN TUS DATOS?</h3>
            <p>
              En algunos casos, solo cuando sea necesario, First Dinner Events
              proporcionará datos de los usuarios a terceros. Sin embargo, nunca
              se venderán los datos a terceros. Los proveedores de servicios
              externos (por ejemplo, proveedores de pago o empresas de reparto)
              con los que First Dinner Events trabaje pueden usar los datos para
              proporcionar los servicios correspondientes, sin embargo, no
              usarán dicha información para fines propios o para cesión a
              terceros.
            </p>

            <p className="mb-8">
              First Dinner Events procura garantizar la seguridad de los datos
              personales cuando se envían fuera de la empresa y se asegura que
              los terceros proveedores de servicio respetan la confidencialidad
              y cuentan con las medidas adecuadas para proteger los datos
              personales. Dichos terceros tienen la obligación de garantizar que
              la información se trata conforme con la normativa de privacidad de
              datos. En algunos casos, la ley puede exigir que se revelen datos
              personales a organismos públicos u otras partes, solo se revelará
              lo estrictamente necesario para el cumplimiento de dichas
              obligaciones legales. Los datos personales obtenidos también
              podrán ser compartidos con otras empresas del grupo.
            </p>

            <h3>¿DÓNDE SE ALMACENAN TUS DATOS?</h3>
            <p className="mb-8">
              Con carácter general, los datos se almacenan dentro de la UE. Los
              datos que se envíen a terceros que no pertenezcan a la UE, nos
              aseguraremos que ofrezcan un nivel de protección suficiente, ya
              sea porque cuentan con Normas Corporativas Vinculantes (BCR) o
              porque se hayan adherido al “Privacy Shield”.
            </p>

            <h3>¿QUÉ DERECHOS TE ASISTEN Y CÓMO PUEDES EJERCERLOS?</h3>
            <p>
              Puedes dirigir tus comunicaciones y ejercitar tus derechos
              mediante una petición en el siguiente correo electrónico a
              plannersingle@gmail.com
            </p>
            <p>En virtud de lo que establece el RGPD puedes solicitar:</p>

            <ul>
              <li>
                • Derecho de acceso: puedes pedir información de aquellos datos
                personales que dispongamos acerca de ti.
              </li>
              <li>
                • Derecho de rectificación: puedes comunicar cualquier cambio en
                tus datos personales.
              </li>
              <li>
                • Derecho de supresión y al olvido: puedes solicitar la
                eliminación previo bloqueo de los datos personales.
              </li>
              <li>
                • Derecho de limitación al tratamiento: supone la restricción
                del tratamiento de los datos personales.
              </li>
              <li>
                • Derecho de oposición: puedes retirar el consentimiento del
                tratamiento de los datos, oponiéndose a que se sigan tratando.
              </li>
              <li>
                • Derecho a la portabilidad: en algunos casos, puedes pedir una
                copia de los datos personales en un formato estructurado, de uso
                común y lectura mecánica para su transmisión a otro responsable.
              </li>
              <li>
                • Derecho a no ser objeto de decisiones individualizadas: puedes
                solicitar que no se tomen decisiones que se basen únicamente en
                el tratamiento automatizado, incluyendo la elaboración de
                perfiles, que produzca efectos jurídicos o afecte
                significativamente al interesado.
              </li>
            </ul>
            <p className="mb-8">
              En algunos casos, se podrá rechazar la solicitud si solicitas que
              se eliminen datos necesarios para el cumplimiento de obligaciones
              legales. Asimismo, si tienes alguna queja sobre el tratamiento de
              los datos puedes presentar una reclamación a la autoridad de
              protección de datos.
            </p>

            <h3>
              ¿QUIÉN ES EL RESPONSABLE DE LA EXACTITUD Y VERACIDAD DE LOS DATOS
              FACILITADOS?
            </h3>
            <p>
              El usuario es el único responsable de la veracidad y corrección de
              los datos incluidos, exonerando a First Dinner Events de cualquier
              responsabilidad al respecto. Los usuarios garantizan y responden,
              en cualquier caso, de la exactitud, vigencia y autenticidad de los
              datos personales facilitados, y se comprometen a mantenerlos
              debidamente actualizados. El usuario acepta proporcionar
              información completa y correcta en el formulario de registro o
              suscripción. First Dinner Events se reserva el derecho de
              finalizar los servicios contratados que se hubiera celebrado con
              los usuarios, en caso que los datos que haya facilitado sean
              falsos, incompletos, inexactos o no estén actualizados.
            </p>
            <p>
              First Dinner Events no responde de la veracidad de las
              informaciones que no sean de elaboración propia y de las que se
              indique otra fuente, por lo que tampoco asume responsabilidad
              alguna en cuanto a hipotéticos perjuicios que pudieran originarse
              por el uso de dicha información.
            </p>
            <p>
              First Dinner Events se reserva el derecho a actualizar, modificar
              o eliminar la información contenida en sus páginas web pudiendo
              incluso limitar o no permitir el acceso a dicha información. Se
              exonera a First Dinner Events de responsabilidad ante cualquier
              daño o perjuicio que pudiera sufrir el usuario como consecuencia
              de errores, defectos u omisiones, en la información facilitada por
              First Dinner Events siempre que proceda de fuentes ajenas a la
              misma.
            </p>
            <p className="mb-8">
              Asimismo, el usuario certifica que es mayor de 14 años y que posee
              la capacidad legal necesaria para la prestación del consentimiento
              en cuanto al tratamiento de sus datos de carácter personal.
            </p>

            <h3>¿CÓMO TRATAMOS LOS DATOS PERSONALES DE LOS MENORES DE EDAD?</h3>
            <p>
              En principio nuestros servicios no van dirigidos específicamente a
              menos de edad. Sin embargo, en el supuesto de que alguno de ellos
              se dirija a menores de catorce años, de conformidad con el
              artículo 8 del RGPD y el artículo 7 de la LO3/2018, de 5 de
              diciembre (LOPDGDD), First Dinner Events exigirá el consentimiento
              válido, libre, inequívoco, específico e informado de sus tutores
              legales para tratar los datos personales de los menores. En este
              caso, se exigirá el DNI u otra forma de identificación de quien
              preste el consentimiento.
            </p>
            <p className="mb-8">
              En el caso de mayores de catorce años podrá procederse al
              tratamiento de los datos con el consentimiento del usuario,
              exceptuando aquellos casos en los que la Ley exija la asistencia
              de los titulares de la patria potestad o tutela.
            </p>

            <h3>
              ¿QUÉ MEDIDAS DE SEGURIDAD APLICAMOS PARA PROTEGER TUS DATOS
              PERSONALES?
            </h3>
            <p>
              First Dinner Events ha adoptado los niveles de seguridad de
              protección de los Datos Personales legalmente requeridos, y
              procura instalar aquellos otros medios y medidas técnicas
              adicionales a su alcance para evitar la pérdida, mal uso,
              alteración, acceso no autorizado y robo de los Datos Personales
              facilitados a First Dinner Events
            </p>
            <p className="mb-8">
              First Dinner Events no es responsable de hipotéticos daños o
              perjuicios que se pudieran derivar de interferencias, omisiones,
              interrupciones, virus informáticos, averías telefónicas o
              desconexiones en el funcionamiento operativo de este sistema
              electrónico, motivadas por causas ajenas a First Dinner Events de
              retrasos o bloqueos en el uso del presente sistema electrónico
              causados por deficiencias o sobrecargas de líneas telefónicas o
              sobrecargas en el Centro de Procesos de Datos, en el sistema de
              Internet o en otros sistemas electrónicos, así como de daños que
              puedan ser causados por terceras personas mediante intromisiones
              ilegítimas fuera del control de First Dinner Events. Ello, no
              obstante, el usuario debe ser consciente de que las medidas de
              seguridad en Internet no son inexpugnables.
            </p>

            <h3>ENLACES A OTROS SITIOS WEB</h3>
            <p className="mb-8">
              En el sitio web https://first-dinner.com/ puede haber enlaces a
              otras páginas web. Al clicar en uno de estos enlaces y acceder a
              un sitio web externo, la visita estará sujeta a la política de
              privacidad de dicho sitio web, quedando First Dinner Events
              desvinculada de cualquier tipo de responsabilidad acerca de su
              política de privacidad.
            </p>

            <h3>¿CÓMO UTILIZAMOS LAS COOKIES?</h3>
            <p>
              El sitio web de First Dinner Events utiliza cookies, a los efectos
              de optimizar y personalizar su navegación por el mismo. Las
              cookies son ficheros físicos de información que se alojan en el
              propio terminal del usuario, la información recogida mediante las
              cookies sirve para facilitar la navegación del usuario por el
              portal y optimizar la experiencia de navegación. Los datos
              recopilados mediante las cookies pueden ser compartidos con los
              creadores de las mismas, pero en ningún caso la información
              obtenida por las mismas será asociada a datos personales ni a
              datos que puedan identificar al usuario.
            </p>
            <p className="mb-8">
              Sin embargo, si el usuario no desea que se instalen cookies en su
              disco duro, tiene la posibilidad de configurar el navegador de tal
              modo que impida la instalación de estos archivos. Para obtener más
              información consulte nuestra Política de Cookies{" "}
            </p>

            <h3>¿PUEDE MODIFICARSE LA POLÍTICA DE PRIVACIDAD?</h3>
            <p className="mb-8">
              Esta política de privacidad puede modificarse. Te recomendamos que
              revises la política de privacidad con cierta periodicidad.{" "}
            </p>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModalLegales;
