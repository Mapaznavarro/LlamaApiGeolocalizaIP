const url = 'https://ip-location5.p.rapidapi.com/get_geo_info';

const fetchIpInfo = async(ip) => {

  const data = new FormData();
  data.append('ip', ip);  // Se agrega la IP ingresada

  const OPTIONS = {
	  method: 'POST',
    headers: {
		  'x-rapidapi-key': '17b3c18c55msh24866e5ceb51463p1a6207jsn2a8be1fdcf48',
		  'x-rapidapi-host': 'ip-location5.p.rapidapi.com'
	  },
    body: data
  }

  return await fetch( url, OPTIONS)
  .then(res => res.json())
  .catch(err => console.error(err))
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async(event) => {
  event.preventDefault()
  const value = $input.value
  if (!value) return

  // Dehabilitar el botón y mostrar que está 
  // procesando
  $submit.setAttribute('disabled', '')
  $submit.setAttribute('aria-busy', 'true')


  const ipInfo = await fetchIpInfo(value)

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  // Habilitar el botón y mostrar que ya no está ocupado
  $submit.removeAttribute('disabled')
  $submit.removeAttribute('aria-busy')
})