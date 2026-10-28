/* Presentation-only enhancement. Does not change application records, text or routes. */
(() => {
  'use strict';
  const paths = {
    home:'M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z',
    grid:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
    calendar:'M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z M7 3v4 M17 3v4 M3 11h18 M8 15h2 M14 15h2',
    arrow:'M5 19 19 5 M5 5h14v14',
    compass:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z M16 8l-3 5-5 3 3-5Z',
    book:'M3 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H3Z M21 4h-6a3 3 0 0 0-3 3v14a4 4 0 0 1 4-2h5Z',
    people:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z M22 21v-2a4 4 0 0 0-3-3.87 M16 3a4 4 0 0 1 0 8',
    person:'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z M4 21v-2a8 8 0 0 1 16 0v2',
    chart:'M4 4v16h17 M8 15l4-5 4 2 5-7',
    document:'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z M14 2v6h6 M8 13h8 M8 17h6',
    heart:'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
    layers:'m12 3 10 5-10 5L2 8Z M2 12l10 5 10-5 M2 16l10 5 10-5',
    play:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z m-11-4 6 4-6 4Z',
    settings:'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2',
    message:'M21 11a9 9 0 0 1-9 9H4l-3 2 2-6a9 9 0 1 1 18-5Z M8 10h8 M8 14h5',
    bell:'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9 M10 21h4',
    medal:'m8 14-2 8 6-3 6 3-2-8 M19 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z',
    shield:'m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6Z M8 12l3 3 5-6',
    menu:'M4 7h16 M4 12h16 M4 17h10'
  };
  const svg = name => `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${paths[name]||paths.grid}"/></svg>`;
  const navIcons = {'Resumen':'home','Inicio':'home','Dashboard':'grid','Mis actividades':'calendar','Oportunidades':'compass','Programas':'layers','Calendario':'calendar','Talleres':'book','Contenido':'document','Comunidad':'people','Mi impacto':'chart','Perfil':'person','Mis programas':'layers','Recursos':'book','Mi progreso':'chart','Certificados':'medal','Eventos':'calendar','Soporte':'message','Mis aportes':'heart','Programas apoyados':'layers','Impacto':'chart','Transparencia':'shield','Reportes':'chart','Documentos':'document','Personas':'people','Voluntarios':'people','Miembros':'people','Donantes':'heart','Actividades':'calendar','Blog':'document','Multimedia':'play','Donaciones':'heart','Solicitudes':'message','Configuración':'settings'};
  const statusNames={'Borrador':'draft','En revisión':'pending','Pendiente':'pending','Aprobado':'approved','Aprobada':'approved','Publicado':'published','Requiere cambios':'changes','No aprobada':'changes','Activo':'active'};
  let lastRoute='';
  function decorate(){
    document.body.dataset.portal=location.hash.match(/\/portal\/([^/]+)/)?.[1]||'public';
    document.querySelectorAll('.sidebar nav a').forEach(a=>{
      const span=a.querySelector('.nav-symbol');
      const label=[...a.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.textContent).join('').trim();
      if(span&&!span.querySelector('svg'))span.innerHTML=svg(navIcons[label]||'grid');
    });
    document.querySelectorAll('.menu-toggle').forEach(b=>{if(!b.querySelector('svg'))b.innerHTML=svg('menu');});
    document.querySelectorAll('.notification-button').forEach(b=>{if(!b.querySelector('svg')){const dot=b.querySelector('.notification-dot');b.innerHTML=svg('bell');if(dot)b.append(dot);}});
    document.querySelectorAll('.demo-roles button>span').forEach((s,i)=>{if(!s.querySelector('svg'))s.innerHTML=svg(['arrow','book','heart','grid'][i]);});
    document.querySelectorAll('.badge').forEach(el=>{const status=statusNames[el.textContent.trim()];if(status)el.dataset.state=status;});
    if(lastRoute!==location.hash){
      lastRoute=location.hash;
      const main=document.querySelector('#main');
      if(main&&!matchMedia('(prefers-reduced-motion: reduce)').matches){main.classList.add('view-arrive');main.addEventListener('animationend',()=>main.classList.remove('view-arrive'),{once:true});}
    }
  }
  new MutationObserver(decorate).observe(document.getElementById('app'),{childList:true});
  decorate();
})();
