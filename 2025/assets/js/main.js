/*
	TXT by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			alignment: 'center'
		});

	// Scrolly
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height() - 5; }
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);




// function shufflePC() {
// 	const ul = document.getElementById('PC');
// 	const items = Array.from(ul.children); // Convert HTMLCollection to an array

// 	// Shuffle the array using the Fisher-Yates shuffle algorithm
// 	for (let i = items.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1)); // Random index
// 		[items[i], items[j]] = [items[j], items[i]]; // Swap items
// 	}

// 	// Clear the current list and append the shuffled items
// 	ul.innerHTML = '';
// 	items.forEach(item => ul.appendChild(item));
// }


function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Swap elements
	}
	return array;
}


function shuffleKeynote(n) {
	const list = document.getElementById('keynote-list');
	const all_items = Array.from(list.children); // Get all <li> elements
	const items = all_items.splice(0, n);

	// Shuffle the items
	const shuffled = shuffleArray(items);

	// console.log('shuffled', shuffled);
	// console.log('Just Items:', shuffledOtherItems);
	// console.log('Item Types:', itemType);

	// Clear the original list and append the shuffled items
	list.innerHTML = '';
	shuffled.forEach(item => list.appendChild(item));
	all_items.forEach(item => list.appendChild(item));
}


function shufflePC() {
	const list = document.getElementById('PC');
	const items = Array.from(list.children); // Get all <li> elements

	// Separate items into two arrays
	const cochairItems = [];
	const otherItems = [];
	const itemType = [];

	items.forEach((item, index) => {
		if (item.classList.contains('cochair')) {
			cochairItems.push({ element: item, index }); // Include original index
			itemType.push(1)
		} else {
			otherItems.push({ element: item, index }); // Include original index
			itemType.push(0)
		}
	});

	// Shuffle the items in each array
	const shuffledCochairItems = shuffleArray(cochairItems);
	const shuffledOtherItems = shuffleArray(otherItems);

	// console.log('Cochair Items:', shuffledCochairItems);
	// console.log('Just Items:', shuffledOtherItems);
	// console.log('Item Types:', itemType);

	// Create a new list preserving positions
	const newList = [];
	itemType.forEach(type => {
		if (type == 1) {
			newList.push(shuffledCochairItems.shift().element);
		} else {
			newList.push(shuffledOtherItems.shift().element);
		}
	});

	// console.log('New Items:', newList);

	// Clear the original list and append the shuffled items
	list.innerHTML = '';
	newList.forEach(item => list.appendChild(item));
}



// workshop program 
// Optional: Add click handlers for sessions
document.querySelectorAll('.conference-program .session').forEach(session => {
	session.addEventListener('click', function() {
		if (this.classList.contains('empty')) return;
		
		const title = this.querySelector('.session-title')?.textContent || 'Session';
		alert(`Session: ${title}`);
	});
});