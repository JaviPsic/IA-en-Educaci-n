// Datos del quiz (NUEVO CONTENIDO)
const questions = [
    {
        question: "¿Cuál técnica de 'prompting' busca obtener respuestas más completas y pensadas por parte de la IA, fomentando el pensamiento crítico y reflexivo en los estudiantes?",
        options: [
            "Prompting de role-playing",
            "Prompting de preguntas abiertas", // respuesta correcta
            "Prompting de escenarios",
            "Prompting de palabras clave"
        ],
        correctAnswerIndex: 1, // 'b' es el índice 1
        justification: "El \"prompting de preguntas abiertas\" le pide al asistente de IA que se explaye con respuestas más completas y pensadas, lo que saca a relucir el pensamiento crítico y reflexivo de los estudiantes.",
        phase: 1
    },
    {
        question: "¿Qué técnica de 'prompting' implica presentarle a la IA una situación hipotética (como un guion) para que genere ideas de soluciones o acciones, buscando que los alumnos se conviertan en gestores de su aprendizaje?",
        options: [
            "Prompting de debate",
            "Prompting de resumen",
            "Prompting de escenarios", // respuesta correcta
            "Prompting de definición"
        ],
        correctAnswerIndex: 2, // 'c' es el índice 2
        justification: "El \"prompting de escenarios\" implica una acción de presentar a la IA un guion con una situación hipotética para que proponga ideas de soluciones o acciones, con el objetivo de que los estudiantes gestionen su aprendizaje.",
        phase: 1
    },
    {
        question: "El \"prompting de ‘role-playing’\" es una técnica que invita a la IA a:",
        options: [
            "Resumir información compleja.",
            "Generar preguntas de examen.",
            "Ponerse en la piel de un personaje y responder desde esa perspectiva", // respuesta correcta
            "Corregir errores gramaticales."
        ],
        correctAnswerIndex: 2, // 'c' es el índice 2
        justification: "El \"prompting de ‘role-playing’\" consiste en invitar a la IA a ponerse en la piel de algún personaje y responder desde esa perspectiva.",
        phase: 2
    },
    {
        question: "Al hablar de las implicancias de la IA en la evaluación, en lugar de solo buscar respuestas correctas, la clave está en centrarse en fomentar y evaluar las habilidades del siglo XXI. ¿Cuáles son algunas de estas habilidades?",
        options: [
            "Memorización, repetición y obediencia.",
            "Pensamiento crítico, creatividad y colaboración", // respuesta correcta
            "Velocidad de respuesta y uso de atajos.",
            "Capacidad para copiar y pegar información."
        ],
        correctAnswerIndex: 1, // 'b' es el índice 1
        justification: "El documento enfatiza que la clave en la evaluación asistida por IA es centrarse en fomentar y evaluar las habilidades del siglo XXI, nombrando específicamente el pensamiento crítico, la creatividad y la colaboración.",
        phase: 2
    },
    {
        question: "¿Qué estrategia de evaluación permite recolectar y reflexionar sobre el trabajo del estudiante a lo largo del tiempo, ofreciendo una visión más completa de su crecimiento?",
        options: [
            "Exámenes tradicionales.",
            "Presentaciones orales.",
            "Portafolios digitales", // respuesta correcta
            "Cuestionarios de opción múltiple."
        ],
        correctAnswerIndex: 2, // 'c' es el índice 2
        justification: "Los \"Portafolios digitales\" son una estrategia para que los estudiantes recopilen y reflexionen sobre su trabajo, permitiendo una evaluación continua y una visión completa de su crecimiento a lo largo del tiempo.",
        phase: 3
    },
    {
        question: "La \"evaluación auténtica\" se refiere a:",
        options: [
            "La evaluación que se realiza sin el uso de tecnología.",
            "La evaluación que se basa únicamente en la memorización de hechos.",
            "La evaluación que involucra tareas que reflejan el uso de habilidades y conocimientos en situaciones del mundo real", // respuesta correcta
            "La evaluación automática realizada exclusivamente por la IA."
        ],
        correctAnswerIndex: 2, // 'c' es el índice 2
        justification: "El documento define la \"evaluación auténtica\" como aquella que involucra tareas que reflejan el uso de habilidades y conocimientos en situaciones del mundo real, y sugiere su aplicación para evaluar tareas complejas más allá de respuestas correctas o incorrectas.",
        phase: 3
    },
    {
        question: "¿Qué significa principalmente que un buen prompt deba ser \"claro y preciso\"?",
        options: [
            "Que debe ser muy corto para que la IA lo procese rápido.",
            "Que debe evitar cualquier tipo de detalle o especificación.",
            "Que debe incluir únicamente palabras clave sueltas.",
            "Que debe especificar claramente lo que se quiere obtener de la IA." // respuesta correcta
        ],
        correctAnswerIndex: 3, // 'd' es el índice 3
        justification: "\"Un buen prompt debe ser claro y preciso\", y lo explica como la necesidad de \"especificar claramente lo que se quiere obtener de la IA\".",
        phase: 4
    },
    {
        question: "Hay un orden básico sugerido para crear prompts efectivos. ¿Cuál es la secuencia correcta de esta estructural?",
        options: [
            "Instrucción -> Salida -> Contexto -> Entrada",
            "Entrada -> Contexto -> Instrucción -> Salida",
            "Contexto -> Instrucción -> Entrada -> Salida.", // respuesta correcta
            "Salida -> Instrucción -> Entrada -> Contexto"
        ],
        correctAnswerIndex: 2, // 'c' es el índice 2
        justification: "Los buenos prompts siguen el orden: CONTEXTO -> INSTRUCCIÓN -> ENTRADA -> SALIDA.",
        phase: 4
    },
     {
        question: "Una de las bases para prompts efectivos es \"Actúa como si fueras un experto en...\". ¿Cuál es el propósito de usar este tipo de estructura o similar?",
        options: [
            "Limitar las respuestas de la IA a un formato predefinido.",
            "Indicar a la IA que invente información si no la conoce.",
            "Solicitar a la IA que genere preguntas para el usuario.",
            "Pedir a la IA que se comporte como un experto en un ámbito específico para obtener respuestas más elaboradas." // respuesta correcta
        ],
        correctAnswerIndex: 3, // 'd' es el índice 3
        justification: "Esto es una base para prompts efectivos, explicando que solicita a la IA que se comporte como un experto en un ámbito específico para obtener respuestas más elaboradas.",
        phase: 5
    },
    {
        question: "Además de la claridad y la estructura, se sugiere tener en cuenta otra característica importante al diseñar prompts, especialmente si se buscan ideas nuevas y creativas. ¿A qué se refiere esta sugerencia?",
        options: [
            "Pedir a la IA que solo muestre información preexistente.",
            "Evitar cualquier tipo de pregunta que requiera creatividad.",
            "Pedirle a la IA que piense \"fuera de la caja\".", // respuesta correcta
            "Restringir la respuesta a un formato muy simple y predecible."
        ],
        correctAnswerIndex: 2, // 'c' es el índice 2
        justification: "Para generar ideas nuevas y creativas, a veces es útil pedirle a la IA que piense \"fuera de la caja\", es decir, que combine información de maneras únicas en lugar de solo mostrar datos existentes.",
        phase: 5
    }
];

const quizContainer = document.getElementById('quiz-container');
// answeredQuestions solo contendrá los índices de las preguntas respondidas *correctamente*
let answeredQuestions = [];
let unlockedPhases = [1]; // Fases desbloqueadas inicialmente

// Función para crear una tarjeta de pregunta
function createQuestionCard(question, index) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardContainer.id = `card-container-${index}`;

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index; // Guarda el índice de la pregunta

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.innerHTML = `
        <p>${question.question}</p>
        <div class="options-container">
            ${question.options.map((option, optionIndex) => `
                <div class="answer-option" data-index="${optionIndex}">${String.fromCharCode(65 + optionIndex)}. ${option}</div>
            `).join('')}
        </div>
    `;

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.innerHTML = ''; // Inicialmente vacío

    card.appendChild(cardFront);
    card.appendChild(cardBack);
    cardContainer.appendChild(card);

    return cardContainer;
}

// Función para voltear la tarjeta y verificar la respuesta
// Esta función ahora se llama *desde* el listener de la opción de respuesta
function flipCard(card, questionIndex) {
    const question = questions[questionIndex];
    const cardBack = card.querySelector('.card-back');
    // Obtenemos la opción seleccionada DENTRO de esta tarjeta específica
    const selectedOption = card.querySelector('.answer-option.selected');
    const selectedAnswerIndex = parseInt(selectedOption.dataset.index); // Ahora selectedOption siempre existe aquí
    const isCorrect = selectedAnswerIndex === question.correctAnswerIndex;

    // Voltear la tarjeta
    card.classList.add('flipped');

    // Mostrar la retroalimentación
    let feedbackContent = `<div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">`;
    if (isCorrect) {
        feedbackContent += `✔ Correcto<p>${question.justification}</p>`;
    } else {
        // Para respuesta incorrecta, solo mostramos el icono y texto "Incorrecto"
        feedbackContent += `✖ Incorrecto`;
    }
    feedbackContent += `</div>`;
    cardBack.innerHTML = feedbackContent;

    // Lógica después de mostrar la respuesta
    if (isCorrect) {
        // Si es correcta:
        // 1. Marcar como respondida (para que no se pueda interactuar más con ella)
        if (!answeredQuestions.includes(questionIndex)) {
             answeredQuestions.push(questionIndex);
             // Deshabilitar el contenedor de la tarjeta para evitar más clics
             const cardContainer = card.closest('.card-container'); // Obtener el contenedor aquí
             if (cardContainer) { // Asegurarse de que existe
                 cardContainer.classList.add('disabled');
             }
        }

        // 2. Desbloquear la siguiente fase si aplica
        unlockNextPhase(question.phase + 1);

    } else {
        // Si es incorrecta:
        // 1. NO marcar como respondida
        // 2. NO deshabilitar la tarjeta
        // 3. Quitar la clase 'selected' de la opción y voltear de nuevo después de un breve retraso

        // Quitar la clase 'selected' de todas las opciones (aunque solo haya una con ella)
        card.querySelectorAll('.answer-option').forEach(opt => {
            opt.classList.remove('selected');
        });

        setTimeout(() => {
            // Voltear la tarjeta de nuevo al frente
            card.classList.remove('flipped');
            // Limpiar el contenido del reverso
            cardBack.innerHTML = '';
             // La tarjeta sigue habilitada porque la clase 'disabled' nunca se agregó al contenedor
        }, 3000); // 3000 ms = 3 segundos
    }
}


// Función para desbloquear la siguiente fase
function unlockNextPhase(phaseNumber) {
    // Solo desbloquear si la fase existe (hasta 5 en este caso) y aún no está desbloqueada
    if (phaseNumber <= 5 && !unlockedPhases.includes(phaseNumber)) {
        unlockedPhases.push(phaseNumber);
        console.log(`Fase ${phaseNumber} desbloqueada.`); // Log para depuración

        // Encontrar las tarjetas de la fase recién desbloqueada y habilitarlas
        questions.forEach((question, index) => {
            if (question.phase === phaseNumber) {
                const cardContainer = document.getElementById(`card-container-${index}`);
                 if (cardContainer) { // Asegurarse de que la tarjeta exista
                    // Solo quitar la clase disabled si la tarjeta no ha sido ya respondida correctamente
                    if (!answeredQuestions.includes(index)) {
                         cardContainer.classList.remove('disabled');
                         // Los estilos de opacidad, cursor, pointer-events se manejan por CSS con la clase disabled
                    }
                 }
            }
        });
         // Opcional: agregar algún feedback visual general de que una fase fue desbloqueada
    }
}


// Función para renderizar las preguntas
function renderQuestions() {
    quizContainer.innerHTML = ''; // Limpiar el contenedor
    questions.forEach((question, index) => {
        const cardContainer = createQuestionCard(question, index);
        quizContainer.appendChild(cardContainer);

        // Deshabilitar tarjetas si su fase no está desbloqueada O si ya han sido respondidas CORRECTAMENTE
        if (!unlockedPhases.includes(question.phase) || answeredQuestions.includes(index)) {
            cardContainer.classList.add('disabled');

            // Si ya está respondida correctamente, voltearla al cargar y mostrar justificación
            if (answeredQuestions.includes(index)) {
                 const card = cardContainer.querySelector('.card');
                 const questionData = questions[index];
                 const cardBack = card.querySelector('.card-back');

                 // Encontrar la opción correcta para marcarla como seleccionada si se vuelve a renderizar
                 const correctOption = card.querySelector(`.answer-option[data-index="${questionData.correctAnswerIndex}"]`);
                 if (correctOption) {
                     correctOption.classList.add('selected');
                 }

                 // Mostrar la justificación
                 cardBack.innerHTML = `
                    <div class="feedback correct">
                        ✔ Correcto
                        <p>${questionData.justification}</p>
                    </div>
                 `;
                 card.classList.add('flipped');
            }
        }
    });
    setupAnswerOptionListeners(); // Asigna los event listeners a las opciones después de crear las tarjetas
}

// Función para asignar event listeners a las opciones de respuesta
function setupAnswerOptionListeners() {
     document.querySelectorAll('.answer-option').forEach(option => {
        // Remover listeners existentes (seguridad) antes de añadir uno nuevo
        const oldListener = option.dataset.listener;
        if (oldListener) {
            option.removeEventListener('click', oldListener);
        }

        // Crear nuevo listener
        const newListener = function(event) {
             // >>>>>>>>>> DETENER PROPAGACIÓN <<<<<<<<<<
             // Esto es CRUCIAL para que el clic en la opción NO llegue al contenedor de la tarjeta
             // y cause un comportamiento inesperado si hubiera otros listeners allí.
             event.stopPropagation();

             // Obtener el card y cardContainer
            const card = this.closest('.card');
            const cardContainer = card.closest('.card-container');

            // --- NUEVA VERIFICACIÓN ---
            // Solo permite interactuar si:
            // 1. La tarjeta no está deshabilitada (por fase o ya respondida correctamente)
            // 2. La tarjeta NO está actualmente volteada (mostrando feedback)
            if (cardContainer.classList.contains('disabled') || card.classList.contains('flipped')) {
                return; // No hacer nada si deshabilitada o ya mostrando feedback
            }
            // --------------------------


            // Remover la clase "selected" de todas las opciones en la tarjeta actual
            card.querySelectorAll('.answer-option').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Agregar la clase "selected" a la opción clickeada
            this.classList.add('selected');

            // >>>>>>>>>> LLAMAR A flipCard AQUÍ <<<<<<<<<<
            // Esto voltea la tarjeta INMEDIATAMENTE después de seleccionar la opción
            const questionIndex = parseInt(card.dataset.index);
            flipCard(card, questionIndex);
            // <<<<<<<<<<<<
        };

        // Añadir el nuevo listener
        option.addEventListener('click', newListener);
        // Guardar referencia al listener (útil si necesitas removerlo después, aunque en este caso quizás no sea estrictamente necesario)
        option.dataset.listener = newListener;
     });
}


// Iniciar el juego
renderQuestions();