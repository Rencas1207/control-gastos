import { useState } from 'react';
import closeModal from '../img/cerrar.svg'
import Message from './Message';

const Modal = ({ setModal, animarModal, setAnimarModal, saveExpense }) => {

   const [message, setMessage] = useState('');

   const [nombre, setNombre] = useState('');
   const [cantidad, setCantidad] = useState('');
   const [categoria, setCategoria] = useState('');

   const hideModal = () => {
      setAnimarModal(false);
      setTimeout(() => {
         setModal(false);
      }, 300);
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if ([nombre, cantidad, categoria].includes('')) {
         setMessage('Todos los campos son obligatorios')
         setTimeout(() => {
            setMessage('');
         }, 1500);
         return;
      }

      saveExpense({ nombre, cantidad, categoria });
      hideModal();
   }

   return (
      <div className='modal'>
         <div className="cerrar-modal">
            <img src={closeModal} alt="close modal" onClick={hideModal} />
         </div>
         <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
            onSubmit={handleSubmit}
         >
            <legend>
               Nuevo gasto
            </legend>
            {
               message && <Message tipo="error">{message}</Message>
            }
            <div className="campo">
               <label htmlFor="nombre">Nombre gasto</label>
               <input type="text" placeholder='Añade el nombre del gasto' id='nombre'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
               />
            </div>
            <div className="campo">
               <label htmlFor="cantidad">Cantidad</label>
               <input type="number" placeholder='Añade la cantidad del gasto: ej. 500' id='cantidad'
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
               />
            </div>
            <div className="campo">
               <label htmlFor="categoria">Nombre gasto</label>
               <select id='categoria'
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
               >
                  <option value="">--Seleccione--</option>
                  <option value="ahorro">Ahorro</option>
                  <option value="comida">Comida</option>
                  <option value="casa">Casa</option>
                  <option value="gastos">Gastos Varios</option>
                  <option value="ocio">Ocio</option>
                  <option value="salud">Salud</option>
                  <option value="suscripciones">Suscripciones</option>
               </select>
            </div>

            <input type="submit" value="Añadir gasto" />

         </form>
      </div>
   )
}

export default Modal