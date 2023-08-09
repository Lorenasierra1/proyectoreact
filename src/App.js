import './App.css';
import Testimonio from './componentes/Testimonio';

function App(){
return(
  <div className="App">
    <div className='contenedor-principal'>
    <h1>L3 TECHNOLOGY</h1>
    <p>La empresa L3 Technology es una pyme familiar comercializadora de dispositivos móviles, accesorios y soporte técnico. El proyecto se encuentra enfocado en una primera visual para los usuarios, donde en 3 componentes se quiere mostrar la historia de la microempresa, los productos que ofrece y los canales de atención dispuestos para los usuarios.</p>
    <Testimonio 
    nombre='NUESTRA'
    pais='HISTORIA'
    imagen='emma'
    cargo='Conoce un poco'
    empresa='de nosotros'
    testimonio='L3 Technology nació en el 2022 como una idea familiar de ofrecer a sus clientes variedad de productos de excelente calidad y pensando en su economía. Por esto en el mes de mayo de ese año, la empresa abre sus puertas en el reconocido Centro Comercial Caribe en el corazón de la ciudad de Bogotá, en San Andresito de la 38.'/>
    
    <Testimonio 
  nombre='NUESTROS'
  pais=' PRODUCTOS'
  imagen='sarah'
  cargo='Conoce algunos de'
  empresa='nuestro stock'
  testimonio='Pensando en las necesidades de todos nuestros clientes, L3 Technology ofrece teléfonos móviles nuevos, de exhibición y usados de todas las gamas. Todos nuestro productos tienen garantía de sus IMEI’s y por su funcionamiento.También ofrecemos todos los accesorios que necesites para armar tu combo: audífonos de todo tipo, cables, cargadores, forros, protectores de vidrios, cámaras y muchos más.'/>
  

<Testimonio 
  nombre='CONTACTANOS'
  pais=' AHORA'
  imagen='shawn'
  cargo='Conoce nuestros canales'
  empresa='de atencion'
  testimonio='Danos la oportunidad de ofrecerte los mejores productos y la mejor atención. Te esperamos!'/>
    </div>
      </div>
);

}
export default App;