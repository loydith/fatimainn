import React from 'react';
function Nav() {
  return (
<nav id='nav-head'>
  <div className='nav-wrapper'>
    <img src='/images/Logo-FatimaInn.png' height='80' className='brand-logo' alt='brand logo'/>
    <a href='#' data-target='mobile-demo' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
    <ul className='right hide-on-med-and-down'>
        <li><a id='inicio' href='/index'>Inicio</a></li>
        <li><a id='explore' href='/explore'>Explore</a></li>
         <li><a id='habitaciones' href='/habitaciones'>Habitaciones</a></li>
         <li><a id='contactos' href='/contactos'>Contáctenos</a></li>
         <li><a id='auditorio' href='/auditorio'>Auditorio</a></li>
         <li><a id='explore' href='/login'>Login</a></li>
         <li><a id='explore' href='/signup'>Sign Up</a></li>
  
        <li><a  id='tour' className='dropdown-trigger' href='#' data-target='dropdown1'>Tours<i className='material-icons right'>arrow_drop_down</i></a></li>
        <li><a id='reservaciones' className='waves-effect waves-light btn' href='/reservaciones'>Reserva</a></li>
    </ul>
  </div>
  <ul id='dropdown1' className='dropdown-content'>
  <li><a href='/mediodia'>Media día</a></li>
   <li><a href='/diacompleto'>Día Completo</a></li>
   <li><a href='/paqueteturistico'>Paquete Turístico</a></li>
  <li className='divider'></li>
  <li><a id='salir' href='#!'>Salir</a></li>
</ul>
 
<ul id='dropdown2' className='dropdown-content'>
  <li><a href='/mediodia'>Media día</a></li>
   <li><a href='/diacompleto'>Día Completo</a></li>
   <li><a href='/paqueteturistico'>Paquete Turístico</a></li>
  <li className='divider'></li>
  <li><a id='salir' href='#!'>Salir</a></li>
</ul>
<ul className='sidenav' id='mobile-demo'>
    <li><a id='inicio' href='index'>Inicio</a></li>
    <li><a id='explore' href='/explore'>Explore</a></li>
    <li><a id='habitaciones' href='/habitaciones'>Habitaciones</a></li>
    <li><a id='contactos' href='/contactos'>Contáctenos</a></li>
    <li><a id='auditorio' href='/auditorio'>Auditorio</a></li>
    <li><a id='explore' href='/login'>Login</a></li>
    <li><a id='explore' href='/signup'>Sign Up</a></li>

   <li><a  id='tourMobile' className='dropdown-trigger' href='#!' data-target='dropdown2'>Tours<i className='material-icons right'>arrow_drop_down</i></a></li>
   <li><a id='reservaciones' className='waves-effect waves-light btn' href='/reservaciones'>Reserva</a></li>
</ul>
    </nav>
  );
}
export default Nav;