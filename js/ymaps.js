async function initMap() {
	console.log(ymaps)
	await ymaps.ready()
	const placemarks = [
		[56.809014, 36.004944],
		[56.880435, 35.892268],
		[56.872044, 35.843768],
		[56.849325, 35.937328],
		[56.842635, 35.790076],
	]

	// Иницилиазируем карту
	const map = new ymaps.Map(
		// Передаём ссылку на HTMLElement контейнера
		document.getElementById('map'),
		{
			center: [56.861648, 35.899679],
			controls: [],
			zoom: 11,
		},
	)

	for (const key in placemarks) {
		if (!Object.hasOwn(placemarks, key)) continue
		map.geoObjects.add(
			new ymaps.Placemark(
				placemarks[key],
				{},
				{
					preset: 'islands#redIcon',
					// iconLayout: 'default#image',
					// iconImageHref: '../items/marker.png',
					// iconImageSize: [20, 20],
					// iconImageOffset: [0, 0],
				},
			),
		)
	}
}
