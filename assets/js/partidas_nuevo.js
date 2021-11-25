const deshabilitar_submit = () => {
	document.getElementById('submit').setAttribute('class', 'btn btn-success disabled')
}

const habilitar_submit = () => {
	document.getElementById('submit').setAttribute('class', 'btn btn-success')
}

const verificar = (evt) => {
	document.getElementById(evt.target.id + '_dis').setAttribute('disabled', 'true')

	const local = document.getElementById('local').value
	const visitante = document.getElementById('visitante').value
	const estado = document.getElementById('estado').value

	if (estado == -1) {
		deshabilitar_submit()
	} else {
		if (local != visitante && local != -1 && visitante != -1) {
			habilitar_submit()
		} else {
			deshabilitar_submit()
		}
	}
}

const cambiar_estado_prev = (evt) => {
	document.getElementById(evt.target.id + '_dis').setAttribute('disabled', 'true')
	habilitar_submit()
}

const cambiar_estado = (evt) => {
	document.getElementById(evt.target.id + '_dis').setAttribute('disabled', 'true')
}

const main = () => {
	document.getElementById('categoria').addEventListener('change', cambiar_estado_prev)

	document.getElementById('juego').addEventListener('change', cambiar_estado_prev)

	document.getElementById('local').addEventListener('change', verificar)
	document.getElementById('visitante').addEventListener('change', verificar)
	document.getElementById('estado').addEventListener('change', cambiar_estado)
}

window.addEventListener('load', main)