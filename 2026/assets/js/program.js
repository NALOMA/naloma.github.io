					/*
					 * Event delegation is used intentionally.
					 * This works even if this script is loaded before the
					 * program elements are inserted into the page.
					 */

					document.addEventListener('click', function (event) {

						/*
						 * Clicking "Paper" should open the paper,
						 * not expand/collapse the program card.
						 */
						if (event.target.closest('.program-paper-link')) {
							return;
						}

						const toggle = event.target.closest(
							'.naloma-program .program-card-toggle'
						);

						if (!toggle) {
							return;
						}

						const card = toggle.closest('.program-card');

						if (!card) {
							return;
						}

						const isOpen = card.classList.toggle('is-open');

						toggle.setAttribute(
							'aria-expanded',
							isOpen ? 'true' : 'false'
						);

					});


					/*
					 * Keyboard support:
					 * Enter or Space expands/collapses a focused card.
					 */
					document.addEventListener('keydown', function (event) {

						if (event.key !== 'Enter' && event.key !== ' ') {
							return;
						}

						/*
						 * Do not interfere with the normal paper link.
						 */
						if (event.target.closest('.program-paper-link')) {
							return;
						}

						const toggle = event.target.closest(
							'.naloma-program .program-card-toggle'
						);

						if (!toggle) {
							return;
						}

						event.preventDefault();

						const card = toggle.closest('.program-card');

						if (!card) {
							return;
						}

						const isOpen = card.classList.toggle('is-open');

						toggle.setAttribute(
							'aria-expanded',
							isOpen ? 'true' : 'false'
						);

					});