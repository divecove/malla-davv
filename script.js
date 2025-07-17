const cursos = [
  {codigo: "MinArtes", nombre: "Mínimo de Artes", creditos: 10, prereq: []},
  {codigo: "MinLetras", nombre: "Mínimo de Letras", creditos: 10, prereq: []},
  {codigo: "IHI0205", nombre: "Historia Mundial Contemporanea", creditos: 10, prereq: []},
  {codigo: "MinFilo", nombre: "Mínimo de Filosofía", creditos: 10, prereq: []},
  {codigo: "MAT0100", nombre: "Razonamiento Cuantitativo", creditos: 10, prereq: []},
  {codigo: "VRA0901", nombre: "Taller de Iniciación", creditos: 5, prereq: []},
  {codigo: "COM101", nombre: "Test de Actualidad I A", creditos: 0, prereq: []},
  {codigo: "EST210A", nombre: "Fundamentos de la Estética", creditos: 10, prereq: []},
  {codigo: "FIL217H", nombre: "Verdad y Belleza", creditos: 10, prereq: []},
  {codigo: "COM110", nombre: "Teoría de la Comunicación", creditos: 10, prereq: []},
  {codigo: "COM113", nombre: "Tecnologías de la Comunicación", creditos: 10, prereq: []},
  {codigo: "COM102", nombre: "Test de Actualidad I B", creditos: 0, prereq: []},
  {codigo: "COM122", nombre: "Narración de Ficción", creditos: 10, prereq: []},
  {codigo: "COM115", nombre: "Lenguaje Visual", creditos: 10, prereq: []},
  {codigo: "COM109", nombre: "Historia de la Comunicación Social", creditos: 10, prereq: []},
  {codigo: "MH", nombre: "Curso Área de Habilidades Comunicativas Orales", creditos: 10, prereq: []},
  {codigo: "OR", nombre: "Teológico", creditos: 10, prereq: []},
  {codigo: "COM103", nombre: "Test de Actualidad II A", creditos: 0, prereq: []},
  {codigo: "MR", nombre: "Metodologías de la Investigación Social", creditos: 10, prereq: []},
  {codigo: "COM705", nombre: "Espectáculo Audiovisual", creditos: 10, prereq: []},
  {codigo: "COM706", nombre: "Herramientas de Gestión Audiovisual", creditos: 10, prereq: []},
  {codigo: "COM120", nombre: "Narración de No Ficción", creditos: 10, prereq: []},
  {codigo: "FIL183", nombre: "¿Filosofía Para Qué?", creditos: 10, prereq: []},
  {codigo: "COM104", nombre: "Test de Actualidad II B", creditos: 0, prereq: []},
  {codigo: "COM100", nombre: "Desafíos de la Comunicación", creditos: 10, prereq: []},
  {codigo: "COM718", nombre: "Taller de Lenguaje Audiovisual", creditos: 10, prereq: ["COM115"]},
  {codigo: "COM708", nombre: "Fundamentos Dramáticos de lo Audiovisual", creditos: 10, prereq: ["COM705"]},
  {codigo: "COM116", nombre: "Audiencias", creditos: 10, prereq: []},
  {codigo: "COM3500", nombre: "Economía de las Comunicaciones", creditos: 10, prereq: []},
  {codigo: "COM105", nombre: "Test de Actualidad III A", creditos: 0, prereq: []},
  {codigo: "COM704", nombre: "Seminario de Cine", creditos: 10, prereq: ["COM110","COM115"]},
  {codigo: "COM719", nombre: "Taller de Realización Audiovisual", creditos: 10, prereq: ["COM718"]},
  {codigo: "COM177", nombre: "Narración Interactiva", creditos: 10, prereq: []},
  {codigo: "COM121", nombre: "Semiología", creditos: 10, prereq: []},
  {codigo: "COM709", nombre: "Generación y Desarrollo de Proyectos Audiovisual", creditos: 10, prereq: ["COM706","COM790"]},
  {codigo: "COM106", nombre: "Test de Actualidad III B", creditos: 0, prereq: []},
  {codigo: "COM711", nombre: "Seminario de Televisión", creditos: 10, prereq: ["COM115"]},
  {codigo: "COM710", nombre: "Taller de Televisión", creditos: 10, prereq: ["COM719"]},
  {codigo: "COM720", nombre: "Seminario de Documental", creditos: 10, prereq: []},
  {codigo: "COM712", nombre: "Géneros y Formatos del Guión Audiovisual", creditos: 10, prereq: ["COM705"]},
  {codigo: "COM1000", nombre: "Práctica Interna", creditos: 0, prereq: []},
  {codigo: "COM713", nombre: "Taller de Documental", creditos: 10, prereq: ["COM719"]},
  {codigo: "DEL307", nombre: "Derecho de la Comunicación", creditos: 10, prereq: []},
  {codigo: "COM200", nombre: "Éticas de las Comunicaciones", creditos: 10, prereq: ["FIL183"]},
  {codigo: "COM714", nombre: "Seminario de Nuevas Tendencias", creditos: 10, prereq: []},
  {codigo: "COM716", nombre: "Taller de Ficción", creditos: 10, prereq: ["COM719"]},
  {codigo: "COM715", nombre: "Escritura del Relato Audiovisual", creditos: 10, prereq: ["COM708"]},
  {codigo: "Optativo1", nombre: "Optativo de Profundización 1", creditos: 10, prereq: []},
  {codigo: "COM790", nombre: "Práctica Profesional I", creditos: 0, prereq: []},
  {codigo: "COM3500B", nombre: "Economía de las Comunicaciones (2)", creditos: 10, prereq: []},
  {codigo: "COM721", nombre: "Taller Avanzado de Realización Audiovisual", creditos: 10, prereq: ["COM710","COM713","COM716"]},
  {codigo: "COM3504", nombre: "Industria Audiovisual", creditos: 10, prereq: ["COM709"]},
  {codigo: "Optativo2", nombre: "Optativo de Profundización 2", creditos: 10, prereq: []},
  {codigo: "Optativo3", nombre: "Optativo de Profundización 3", creditos: 10, prereq: []},
  {codigo: "COM791", nombre: "Práctica Profesional II", creditos: 0, prereq: []}
];

const cursosDiv = document.getElementById('cursos');

function renderCursos() {
  cursosDiv.innerHTML = "";
  cursos.forEach(curso => {
    const div = document.createElement('div');
    div.classList.add('curso');
    div.textContent = `${curso.codigo} ${curso.nombre}`;
    div.setAttribute('data-curso', curso.codigo);
    if (curso.prereq.length > 0 && !curso.aprobado) div.classList.add('locked');
    if (curso.aprobado) div.classList.add('completed');
    cursosDiv.appendChild(div);
  });
  initInteract();
}

function initInteract() {
  interact('.curso').draggable({
    inertia: true,
    autoScroll: true,
    listeners: {
      move (event) {
        const target = event.target;
        if (target.classList.contains('locked')) return;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      },
      end (event) {
        if (!event.target.parentElement.classList.contains('dropzone')) {
          event.target.style.transform = 'none';
          event.target.removeAttribute('data-x');
          event.target.removeAttribute('data-y');
        }
      }
    }
  });

  interact('.dropzone').dropzone({
    accept: '.curso:not(.locked)',
    overlap: 0.75,
    ondrop: function (event) {
      event.target.appendChild(event.relatedTarget);
      event.relatedTarget.style.transform = "none";
      event.relatedTarget.removeAttribute('data-x');
      event.relatedTarget.removeAttribute('data-y');

      const codigo = event.relatedTarget.getAttribute('data-curso');
      const curso = cursos.find(c => c.codigo === codigo);
      if (curso) curso.aprobado = true;

      event.relatedTarget.classList.add('completed');
      event.relatedTarget.classList.remove('locked');

      saveMalla();
    }
  });
}

function saveMalla() {
  const malla = {};

  document.querySelectorAll('.dropzone').forEach(drop => {
    const semestre = drop.dataset.semestre;
    malla[semestre] = [];
    drop.querySelectorAll('.curso').forEach(cursoDiv => {
      malla[semestre].push(cursoDiv.getAttribute('data-curso'));
    });
  });

  localStorage.setItem('malla', JSON.stringify(malla));
}

function loadMalla() {
  const data = localStorage.getItem('malla');
  if (!data) return;
  const malla = JSON.parse(data);

  document.querySelectorAll('.dropzone').forEach(dz => dz.innerHTML = `<h3>Semestre ${dz.dataset.semestre}</h3>`);

  Object.keys(malla).forEach(semestre => {
    const dropzone = document.querySelector(`.dropzone[data-semestre="${semestre}"]`);
    malla[semestre].forEach(codigo => {
      const cursoDiv = document.querySelector(`.curso[data-curso="${codigo}"]`);
      if (cursoDiv) {
        dropzone.appendChild(cursoDiv);
        cursoDiv.classList.add('completed');
        cursoDiv.classList.remove('locked');
        cursoDiv.style.transform = "none";
        cursoDiv.removeAttribute('data-x');
        cursoDiv.removeAttribute('data-y');
      }
    });
  });
}

document.getElementById('reset').addEventListener('click', () => {
  localStorage.removeItem('malla');
  location.reload();
});

window.onload = () => {
  renderCursos();
  loadMalla();
};
