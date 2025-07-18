document.addEventListener('DOMContentLoaded', () => {

    const courseBank = document.getElementById('course-bank');
    const semestersGrid = document.getElementById('semesters-grid');
    const additionalReqsContainer = document.getElementById('additional-requirements');
    const gpaValueEl = document.getElementById('gpa-value');
    const creditsValueEl = document.getElementById('credits-value');

    const courseData = [
      
        { code: 'ART-MIN', name: 'Mínimo de Artes', credits: 10, prerequisites: [] },
        { code: 'LET-MIN', name: 'Mínimo de Letras', credits: 10, prerequisites: [] },
        { code: 'IHI0205', name: 'Historia Mundial Contemporánea', credits: 10, prerequisites: [] },
        { code: 'FIL-MIN', name: 'Mínimo de Filosofía', credits: 10, prerequisites: [] },
        { code: 'MAT0100', name: 'Razonamiento Cuantitativo', credits: 10, prerequisites: [] },
        { code: 'VRA0901', name: 'Taller de Iniciación', credits: 5, prerequisites: [] },
        { code: 'COM101', name: 'Test de Actualidad I A', credits: 0, prerequisites: [] },
        { code: 'COM102', name: 'Test de Actualidad I B', credits: 0, prerequisites: ['COM101'] }, 
        { code: 'EST210A', name: 'Fundamentos de la Estética', credits: 10, prerequisites: [] },
        { code: 'COM110', name: 'Teoría de la Comunicación', credits: 10, prerequisites: [] },
        { code: 'COM113', name: 'Tecnologías de la Comunicación', credits: 10, prerequisites: [] },
        { code: 'COM122', name: 'Narración de Ficción', credits: 10, prerequisites: [] },
        { code: 'COM115', name: 'Lenguaje Visual', credits: 10, prerequisites: [] },
        { code: 'COM109', name: 'Historia de la Comunicación Social', credits: 10, prerequisites: [] },
        { code: 'MH', name: 'Curso Área de Habilidades Comunicativas Orales', credits: 10, prerequisites: [] },
        { code: 'OR-TEO', name: 'Teológico', credits: 10, prerequisites: [] },
        { code: 'COM103', name: 'Test de Actualidad II A', credits: 0, prerequisites: ['COM102'] }, 
        { code: 'MR', name: 'Metodologías de la Investigación Social', credits: 10, prerequisites: [] },
        { code: 'COM705', name: 'Espectáculo Audiovisual', credits: 10, prerequisites: ['EST210A'] },
        { code: 'COM706', name: 'Herramientas de Gestión Audiovisual', credits: 10, prerequisites: [] },
        { code: 'COM120', name: 'Narración de No Ficción', credits: 10, prerequisites: [] },
        { code: 'FIL183', name: '¿Filosofía Para Qué?', credits: 10, prerequisites: [] },
        { code: 'COM104', name: 'Test de Actualidad II B', credits: 0, prerequisites: ['COM103'] },
        { code: 'COM100', name: 'Desafíos de la Comunicación', credits: 10, prerequisites: [] },
        { code: 'COM718', name: 'Taller de Lenguaje Audiovisual', credits: 10, prerequisites: ['COM115'] },
        { code: 'COM708', name: 'Fundamentos Dramáticos de lo Audiovisual', credits: 10, prerequisites: [] },
        { code: 'COM116', name: 'Audiencias', credits: 10, prerequisites: ['COM110'] },
        { code: 'COM3500', name: 'Economía de las Comunicaciones', credits: 10, prerequisites: [] },
        { code: 'COM105', name: 'Test de Actualidad III A', credits: 0, prerequisites: ['COM104'] },
        { code: 'COM704', name: 'Seminario de Cine', credits: 10, prerequisites: ['COM705'] },
        { code: 'COM719', name: 'Taller de Realización Audiovisual', credits: 10, prerequisites: ['COM718'] },
        { code: 'COM177', name: 'Narración Interactiva', credits: 10, prerequisites: ['COM113'] },
        { code: 'COM121', name: 'Semiología', credits: 10, prerequisites: ['COM110'] },
        { code: 'COM709', name: 'Generación y Desarrollo de Proyectos Audiovisual', credits: 10, prerequisites: [] },
        { code: 'COM106', name: 'Test de Actualidad III B', credits: 0, prerequisites: ['COM105'] },
        { code: 'COM711', name: 'Seminario de Televisión', credits: 10, prerequisites: [] },
        { code: 'COM710', name: 'Taller de Televisión', credits: 10, prerequisites: ['COM719'] },
        { code: 'COM720', name: 'Seminario de Documental', credits: 10, prerequisites: [] },
        { code: 'COM712', name: 'Géneros y Formatos del Guión Audiovisual', credits: 10, prerequisites: [] },
        { code: 'COM1000', name: 'Práctica Interna (20 hrs.)', credits: 0, prerequisites: [] },
        { code: 'COM713', name: 'Taller de Documental', credits: 10, prerequisites: ['COM719'] },
        { code: 'DEL307', name: 'Derecho de la Comunicación', credits: 10, prerequisites: [] },
        { code: 'COM200', name: 'Éticas de las Comunicaciones', credits: 10, prerequisites: [] },
        { code: 'COM714', name: 'Seminario de Nuevas Tendencias', credits: 10, prerequisites: [] },
        { code: 'COM716', name: 'Taller de Ficción', credits: 10, prerequisites: ['COM710'] },
        { code: 'COM715', name: 'Escritura del Relato Audiovisual', credits: 10, prerequisites: [] },
        { code: 'OPT-PROF1', name: 'Optativo de Profundización 1', credits: 10, prerequisites: [] },
        { code: 'COM790', name: 'Práctica Profesional I', credits: 0, prerequisites: [] },
        { code: 'COM721', name: 'Taller Avanzado de Realización Audiovisual', credits: 10, prerequisites: ['COM716', 'COM713'] },
        { code: 'COM3504', name: 'Industria Audiovisual', credits: 10, prerequisites: ['COM3500'] },
        { code: 'OPT-PROF2', name: 'Optativo de Profundización 2', credits: 10, prerequisites: [] },
        { code: 'OPT-PROF3', name: 'Optativo de Profundización 3', credits: 10, prerequisites: [] },
        { code: 'COM791', name: 'Práctica Profesional II', credits: 0, prerequisites: [] },
    ];
    const courseDataMap = new Map(courseData.map(c => [c.code, c]));

    const additionalReqsData = [
        { id: 'req-com-escrita', name: 'Examen de Comunicación Escrita (VRA100C)' },
        { id: 'req-english', name: 'English Test Alte 2 (VRA2000)' },
        { id: 'req-iniciacion', name: 'Taller de Iniciación Aprobado' }
    ];


    function updateSummary() {
        let totalCredits = 0;
        let weightedSum = 0;

        document.querySelectorAll('.semester-column .course').forEach(courseEl => {
            const courseCode = courseEl.dataset.code;
            const courseInfo = courseDataMap.get(courseCode);
            const gradeInput = courseEl.querySelector('.course-grade');
            const grade = parseFloat(gradeInput.value);

            if (courseInfo && !isNaN(grade) && grade >= 1 && grade <= 7) {
                totalCredits += courseInfo.credits;
                weightedSum += grade * courseInfo.credits;
            }
        });

        creditsValueEl.textContent = totalCredits;
        if (totalCredits > 0) {
            const gpa = (weightedSum / totalCredits).toFixed(2);
            gpaValueEl.textContent = gpa;
        } else {
            gpaValueEl.textContent = 'N/A';
        }
    }

    function initializeUI() {
        for (let i = 1; i <= 10; i++) {
            const semesterCol = document.createElement('div');
            semesterCol.classList.add('semester-column');
            semesterCol.dataset.semester = i;
            semesterCol.innerHTML = `<h3>Semestre ${i}</h3>`;
            semestersGrid.appendChild(semesterCol);
        }

        courseData.forEach(course => {
            const courseEl = document.createElement('div');
            courseEl.className = 'course';
            courseEl.id = course.code;
            courseEl.draggable = true;
            courseEl.dataset.code = course.code;
            courseEl.dataset.prerequisites = JSON.stringify(course.prerequisites);
            courseEl.innerHTML = `
                <div class="course-info">
                    <span class="course-code">${course.code}</span>
                    <span class="course-name">${course.name}</span>
                    <span class="course-credits">${course.credits} créditos</span>
                </div>
                <div class="course-grade-wrapper"></div>
            `;
            courseBank.appendChild(courseEl);
        });

        additionalReqsData.forEach(req => {
            const reqEl = document.createElement('div');
            reqEl.classList.add('req-item');
            reqEl.id = req.id;
            reqEl.textContent = req.name;
            reqEl.addEventListener('click', () => {
                reqEl.classList.toggle('completed');
                saveState();
            });
            additionalReqsContainer.appendChild(reqEl);
        });
    }

    function enableDragAndDrop() {
        const courses = document.querySelectorAll('.course');
        const dropzones = [...document.querySelectorAll('.semester-column'), courseBank];

        courses.forEach(course => {
            course.addEventListener('dragstart', e => {
                if (course.classList.contains('locked')) {
                    e.preventDefault();
                    return;
                }
                e.dataTransfer.setData('text/plain', course.id);
                setTimeout(() => { course.style.opacity = '0.5'; }, 0);
            });
            course.addEventListener('dragend', () => course.style.opacity = '1');
        });

        dropzones.forEach(zone => {
            zone.addEventListener('dragover', e => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });
            zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
            zone.addEventListener('drop', e => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                const courseId = e.dataTransfer.getData('text/plain');
                const courseEl = document.getElementById(courseId);

                if (courseEl) {
                    const isApproved = zone.classList.contains('semester-column');
                    if (isApproved || zone === courseBank) {
                        zone.appendChild(courseEl);
                        courseEl.classList.toggle('approved', isApproved);
                        
                        const gradeWrapper = courseEl.querySelector('.course-grade-wrapper');
                        const existingInput = gradeWrapper.querySelector('.course-grade');

                        if (isApproved && !existingInput) {
                            const gradeInput = document.createElement('input');
                            gradeInput.type = 'number';
                            gradeInput.min = 1.0;
                            gradeInput.max = 7.0;
                            gradeInput.step = 0.1;
                            gradeInput.placeholder = 'Nota';
                            gradeInput.className = 'course-grade';
                            gradeInput.addEventListener('change', saveState);
                            gradeWrapper.appendChild(gradeInput);
                        } else if (!isApproved && existingInput) {
                            existingInput.remove();
                        }
                        saveState();
                    }
                }
            });
        });
    }

    function updateCourseLockStates() {
        const approvedCourses = new Set(Array.from(document.querySelectorAll('.semester-column .course')).map(c => c.dataset.code));
        document.querySelectorAll('#course-bank .course').forEach(c => {
            const prereqs = JSON.parse(c.dataset.prerequisites);
            const allMet = prereqs.every(req => approvedCourses.has(req));
            c.classList.toggle('locked', prereqs.length > 0 && !allMet);
        });
    }

    function saveState() {
        const state = {
            semesters: {},
            bank: Array.from(courseBank.querySelectorAll('.course')).map(c => c.id),
            requirements: {}
        };

        document.querySelectorAll('.semester-column').forEach((col) => {
            state.semesters[col.dataset.semester] = Array.from(col.querySelectorAll('.course')).map(c => ({
                id: c.id,
                grade: c.querySelector('.course-grade')?.value || ''
            }));
        });
        
        document.querySelectorAll('.req-item').forEach(req => {
            state.requirements[req.id] = req.classList.contains('completed');
        });

        localStorage.setItem('mallaState', JSON.stringify(state));
        updateCourseLockStates();
        updateSummary(); 
    }

    function loadState() {
        const state = JSON.parse(localStorage.getItem('mallaState'));
        if (!state) return;
        
        Object.entries(state.semesters).forEach(([semKey, courses]) => {
            const col = document.querySelector(`[data-semester="${semKey}"]`);
            if(col) {
                courses.forEach(courseObj => {
                    const courseEl = document.getElementById(courseObj.id);
                    if (courseEl) {
                        col.appendChild(courseEl);
                        courseEl.classList.add('approved');
                        
                        const gradeWrapper = courseEl.querySelector('.course-grade-wrapper');
                        const gradeInput = document.createElement('input');
                        gradeInput.type = 'number';
                        gradeInput.min = 1.0;
                        gradeInput.max = 7.0;
                        gradeInput.step = 0.1;
                        gradeInput.placeholder = 'Nota';
                        gradeInput.className = 'course-grade';
                        gradeInput.value = courseObj.grade;
                        gradeInput.addEventListener('change', saveState);
                        gradeWrapper.appendChild(gradeInput);
                    }
                });
            }
        });

        Object.entries(state.requirements).forEach(([id, completed]) => {
            const el = document.getElementById(id);
            if (el) el.classList.toggle('completed', completed);
        });
    }

 
    initializeUI();
    enableDragAndDrop();
    loadState();
    updateCourseLockStates();
    updateSummary();
});
