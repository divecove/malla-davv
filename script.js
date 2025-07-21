document.addEventListener('DOMContentLoaded', () => {
    // --- ELEMENTOS DEL DOM ---
    const semestersGrid = document.getElementById('semesters-grid');
    const additionalReqsContainer = document.getElementById('additional-requirements');
    const gpaValueEl = document.getElementById('gpa-value');
    const creditsValueEl = document.getElementById('credits-value');

    // --- DATOS: Malla Curricular ---
    const courseData = [
        // Semestre 1
        { code: 'ARO100T', name: 'Introducción al Arte Contemporáneo', credits: 10, prerequisites: [], semester: 1 },
        { code: 'IHI0214', name: 'Historia de Chile Contemporáneo', credits: 10, prerequisites: [], semester: 1 },
        { code: 'VRA0901', name: 'Taller de Iniciación', credits: 5, prerequisites: [], semester: 1 },
        { code: 'MAT1000', name: 'Precálculo', credits: 10, prerequisites: [], semester: 1 },
        { code: 'LET1011', name: 'Literatura Universal I', credits: 10, prerequisites: [], semester: 1 },
        { code: 'FIL189', name: 'Introducción a la Filosofía', credits: 10, prerequisites: [], semester: 1 },
        // Semestre 2
        { code: 'MAT0100', name: 'Razonamiento Cuantitativo', credits: 10, prerequisites: [], semester: 2 },
        { code: 'COM115', name: 'Lenguaje Visual', credits: 10, prerequisites: [], semester: 2 },
        { code: 'ESO013', name: 'El Cuerpo en la Historia del Arte', credits: 10, prerequisites: [], semester: 2 },
        { code: 'FIL217H', name: 'Verdad y Belleza', credits: 10, prerequisites: [], semester: 2 },
        // Semestre 3
        { code: 'ARO113M', name: 'Tiempo, Movimiento y Representación', credits: 10, prerequisites: [], semester: 3 },
        { code: 'ART0404', name: 'Artes Mediales', credits: 10, prerequisites: [], semester: 3 },
        { code: 'COM706', name: 'Herramientas de Gestión Audiovisual', credits: 10, prerequisites: [], semester: 3 },
        { code: 'EST210A', name: 'Fundamentos de la Estética', credits: 10, prerequisites: [], semester: 3 },
        { code: 'ART0403', name: 'Dibujo', credits: 10, prerequisites: [], semester: 3 },
        { code: 'ESO235C', name: 'Introducción a la Gestión Cultural', credits: 10, prerequisites: [], semester: 3 },
        // Semestre 4
        { code: 'COM109', name: 'Historia de la Comunicación Social', credits: 10, prerequisites: [], semester: 4 },
        { code: 'COM110', name: 'Teoría de la Comunicación', credits: 10, prerequisites: [], semester: 4 },
        { code: 'COM705', name: 'Espectáculo Audiovisual', credits: 10, prerequisites: ['EST210A'], semester: 4 },
        { code: 'COM122', name: 'Narración de Ficción', credits: 10, prerequisites: [], semester: 4 },
        // Semestre 5
        { code: 'COM708', name: 'Fundamentos Dramáticos de lo Audiovisual', credits: 10, prerequisites: ['COM122'], semester: 5 },
        { code: 'COM718', name: 'Taller de Lenguaje Audiovisual', credits: 10, prerequisites: ['COM115'], semester: 5 },
        { code: 'COM116', name: 'Audiencias', credits: 10, prerequisites: ['COM110'], semester: 5 },
        { code: 'COM120', name: 'Narración de No Ficción', credits: 10, prerequisites: [], semester: 5 },
        { code: 'SOL126C', name: 'Metodología de la Investigación Social', credits: 10, prerequisites: [], semester: 5 },
        { code: 'COM113', name: 'Tecnologías de la Comunicación', credits: 10, prerequisites: [], semester: 5 },
        // Semestre 6
        { code: 'COM1000', name: 'Práctica Interna (20 hrs)', credits: 0, prerequisites: ['COM719'], semester: 6 },
        { code: 'IHI0205', name: 'Historia Mundial Contemporánea', credits: 10, prerequisites: [], semester: 6 },
        { code: 'COM177', name: 'Narración Interactiva', credits: 10, prerequisites: ['COM113'], semester: 6 },
        { code: 'COM102', name: 'Test de Actualidad I B', credits: 0, prerequisites: ['COM101'], semester: 6 },
        { code: 'COM121', name: 'Semiología', credits: 10, prerequisites: ['COM110'], semester: 6 },
        { code: 'COM719', name: 'Taller de Realización Audiovisual', credits: 10, prerequisites: ['COM718'], semester: 6 },
        // Semestre 7
        { code: 'COM704', name: 'Seminario de Cine', credits: 10, prerequisites: ['COM705'], semester: 7 },
        { code: 'COM710', name: 'Taller de Televisión', credits: 10, prerequisites: ['COM719'], semester: 7 },
        { code: 'DEL307', name: 'Derecho de la Comunicación', credits: 10, prerequisites: [], semester: 7 },
        { code: 'COM101', name: 'Test de Actualidad I A', credits: 0, prerequisites: [], semester: 7 },
        { code: 'COM619', name: 'Taller de Producción Creativa', credits: 10, prerequisites: [], semester: 7 },
        { code: 'COM712', name: 'Géneros y Formatos del Guión', credits: 10, prerequisites: ['COM708'], semester: 7 },
        // Semestre 8
        { code: 'COM104', name: 'Test de Actualidad II B', credits: 0, prerequisites: ['COM103'], semester: 8 },
        { code: 'COM720', name: 'Seminario de Documental', credits: 10, prerequisites: ['COM120'], semester: 8 },
        { code: 'COM716', name: 'Taller de Ficción', credits: 10, prerequisites: ['COM710', 'COM712'], semester: 8 },
        { code: 'ACO264E', name: 'Habilidades Comunicativas Orales', credits: 10, prerequisites: [], semester: 8 },
        { code: 'COM790', name: 'Práctica Profesional I', credits: 0, prerequisites: ['COM1000'], semester: 8 },
        // Semestre 9
        { code: 'FIL183', name: '¿Filosofía Para Qué?', credits: 10, prerequisites: [], semester: 9 },
        { code: 'COM103', name: 'Test de Actualidad II A', credits: 0, prerequisites: ['COM102'], semester: 9 },
        { code: 'COM713', name: 'Taller de Documental', credits: 10, prerequisites: ['COM719', 'COM720'], semester: 9 },
        { code: 'COM714', name: 'Seminario de Nuevas Tendencias', credits: 10, prerequisites: [], semester: 9 }, // No tiene COM711 en la malla
        { code: 'COM715', name: 'Escritura del Relato Audiovisual', credits: 10, prerequisites: ['COM712'], semester: 9 },
        // Semestre 10
        { code: 'COM709', name: 'Generación y Desarrollo de Proyectos', credits: 10, prerequisites: ['COM706'], semester: 10 },
        { code: 'OR-TEO', name: 'OR Teológico', credits: 10, prerequisites: [], semester: 10 },
        { code: 'COM100', name: 'Desafíos de la Comunicación', credits: 10, prerequisites: [], semester: 10 },
        { code: 'COM3500', name: 'Economía de las Comunicaciones', credits: 10, prerequisites: [], semester: 10 },
        { code: 'COM105', name: 'Test de Actualidad III A', credits: 0, prerequisites: ['COM104'], semester: 10 },
        { code: 'COM106', name: 'Test de Actualidad III B', credits: 0, prerequisites: ['COM105'], semester: 10 },
        { code: 'COM711', name: 'Seminario de Televisión', credits: 10, prerequisites: ['COM704'], semester: 10 },
        { code: 'COM200', name: 'Éticas de las Comunicaciones', credits: 10, prerequisites: [], semester: 10 },
        { code: 'OP1', name: 'Optativo de Profundización I', credits: 10, prerequisites: [], semester: 10 },
        { code: 'COM721', name: 'Taller Avanzado de Realización', credits: 10, prerequisites: ['COM716', 'COM713'], semester: 10 },
        { code: 'COM3504', name: 'Industria Audiovisual', credits: 10, prerequisites: ['COM3500'], semester: 10 },
        { code: 'OP2', name: 'Optativo de Profundización II', credits: 10, prerequisites: [], semester: 10 },
        { code: 'OP3', name: 'Optativo de Profundización III', credits: 10, prerequisites: [], semester: 10 },
        { code: 'COM791', name: 'Práctica Profesional II', credits: 0, prerequisites: ['COM790'], semester: 10 }
    ];
    const courseDataMap = new Map(courseData.map(c => [c.code, c]));
    const additionalReqsData = [
        { id: 'req-com-escrita', name: 'Examen de Comunicación Escrita (VRA100C)' },
        { id: 'req-english', name: 'English Test Alte 2 (VRA2000)' },
    ];

    function updateSummary() {
        let totalCredits = 0;
        let weightedSum = 0;
        document.querySelectorAll('.course.approved').forEach(courseEl => {
            const courseCode = courseEl.dataset.code;
            const courseInfo = courseDataMap.get(courseCode);
            const gradeInput = courseEl.querySelector('.course-grade');
            const grade = gradeInput ? parseFloat(gradeInput.value) : NaN;

            if (courseInfo && !isNaN(grade) && grade >= 1 && grade <= 7) {
                totalCredits += courseInfo.credits;
                weightedSum += grade * courseInfo.credits;
            }
        });
        creditsValueEl.textContent = totalCredits;
        gpaValueEl.textContent = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : 'N/A';
    }

    function initializeUI() {
        // ▼▼ LÍNEA MODIFICADA ▼▼
        for (let i = 1; i <= 11; i++) {
        // ▲▲ FIN DE LA MODIFICACIÓN ▲▲
            const semesterCol = document.createElement('div');
            semesterCol.classList.add('semester-column');
            semesterCol.dataset.semester = i;
            semesterCol.innerHTML = `<h3>Semestre ${i}</h3>`;
            semestersGrid.appendChild(semesterCol);
        }

        courseData.forEach(course => {
            const courseEl = createCourseElement(course);
            const targetContainer = document.querySelector(`[data-semester="${course.semester}"]`);
            if (targetContainer) {
                targetContainer.appendChild(courseEl);
            }
        });

        additionalReqsData.forEach(req => {
            const reqEl = document.createElement('div');
            reqEl.id = req.id;
            reqEl.className = 'req-item';
            reqEl.textContent = req.name;
            reqEl.addEventListener('click', () => {
                reqEl.classList.toggle('completed');
                saveState();
            });
            additionalReqsContainer.appendChild(reqEl);
        });
    }
    
    function createCourseElement(course) {
        const courseEl = document.createElement('div');
        courseEl.className = 'course';
        courseEl.id = course.code;
        courseEl.draggable = true;
        courseEl.dataset.code = course.code;
        courseEl.dataset.prerequisites = JSON.stringify(course.prerequisites);
        courseEl.innerHTML = `
            <div class="course-details">
                <span class="course-code">${course.code}</span>
                <span class="course-name">${course.name}</span>
                <span class="course-credits">${course.credits} créditos</span>
            </div>
            <div class="course-grade-wrapper"></div>
        `;
        courseEl.addEventListener('click', (e) => {
            if (e.target.tagName === 'INPUT') return;
            courseEl.classList.toggle('approved');
            handleApprovalState(courseEl);
            saveState();
        });
        return courseEl;
    }

    function addGradeInput(courseEl) {
        const gradeWrapper = courseEl.querySelector('.course-grade-wrapper');
        if (!gradeWrapper.querySelector('.course-grade')) {
            const gradeInput = document.createElement('input');
            gradeInput.type = 'number';
            gradeInput.min = 1.0;
            gradeInput.max = 7.0;
            gradeInput.step = 0.1;
            gradeInput.placeholder = 'Nota';
            gradeInput.className = 'course-grade';
            gradeInput.addEventListener('change', saveState);
            gradeInput.addEventListener('click', (e) => e.stopPropagation());
            gradeWrapper.appendChild(gradeInput);
        }
    }
    
    function handleApprovalState(courseEl) {
        const isApproved = courseEl.classList.contains('approved');
        const gradeWrapper = courseEl.querySelector('.course-grade-wrapper');
        if (isApproved) {
            addGradeInput(courseEl);
        } else {
            if (gradeWrapper) gradeWrapper.innerHTML = '';
        }
    }

    function enableDragAndDrop() {
        const dropzones = [...document.querySelectorAll('.semester-column')];

        document.addEventListener('dragstart', e => {
            if (e.target.classList.contains('course')) {
                if (e.target.classList.contains('locked')) {
                    e.preventDefault();
                    return;
                }
                e.dataTransfer.setData('text/plain', e.target.id);
                setTimeout(() => { e.target.style.opacity = '0.5'; }, 0);
            }
        });

        document.addEventListener('dragend', e => {
            if (e.target.classList.contains('course')) {
                e.target.style.opacity = '1';
            }
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
                    zone.appendChild(courseEl);
                    saveState();
                }
            });
        });
    }

    function updateCourseLockStates() {
        const approvedCourses = new Set(Array.from(document.querySelectorAll('.course.approved')).map(c => c.dataset.code));
        courseData.forEach(courseInfo => {
            const courseEl = document.getElementById(courseInfo.code);
            if (courseEl) {
                const prereqs = courseInfo.prerequisites;
                const allMet = prereqs.every(req => approvedCourses.has(req));
                courseEl.classList.toggle('locked', prereqs.length > 0 && !allMet);
            }
        });
    }
    
    function saveState() {
        const state = {
            courses: {},
            requirements: {}
        };
        document.querySelectorAll('.course').forEach(c => {
            const parentId = c.parentElement.dataset.semester;
            state.courses[c.id] = {
                parentSemester: parentId,
                approved: c.classList.contains('approved'),
                grade: c.querySelector('.course-grade')?.value || ''
            };
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

        Object.entries(state.courses).forEach(([courseId, courseInfo]) => {
            const courseEl = document.getElementById(courseId);
            if (!courseEl) return;
            
            const parentEl = document.querySelector(`[data-semester="${courseInfo.parentSemester}"]`);
            if (parentEl) parentEl.appendChild(courseEl);
            
            courseEl.classList.toggle('approved', courseInfo.approved);
            handleApprovalState(courseEl);
            const gradeInput = courseEl.querySelector('.course-grade');
            if (gradeInput) {
                gradeInput.value = courseInfo.grade;
            }
        });

        Object.entries(state.requirements).forEach(([id, completed]) => {
            const el = document.getElementById(id);
            if (el) el.classList.toggle('completed', completed);
        });
    }

    // --- FLUJO DE EJECUCIÓN ---
    initializeUI();
    enableDragAndDrop();
    loadState();
    updateCourseLockStates();
    updateSummary();
});
