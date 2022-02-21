
/*=============== TYPED ===============*/
const typed = new Typed('.typed', {
	strings: [
		'<i class="homeEducation1">Estudiante de Ingeniería de Sistemas</i>',
		'<i class="homeEducation2">Desarrollador Frontend</i>'
	],

	//stringsElement: '#text-education', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 18, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
	//showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
