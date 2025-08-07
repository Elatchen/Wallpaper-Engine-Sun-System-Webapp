/*  Document By Michael Elert*/

function setAllInfosCorner(corner) {
  const validCorners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  if (!validCorners.includes(corner)) corner = 'top-left'; // default fallback

  $('.info').removeClass('corner-top-left corner-top-right corner-bottom-left corner-bottom-right');
  $('.info').addClass('corner-' + corner);
}

window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
		
		// set infobox corner
        if (properties.infoboxposition) {
            var cornerValue = properties.infoboxposition.value;
			setAllInfosCorner(cornerValue);
        }
		
		// set background image
		if (properties.background) {
			const backgroundValue = properties.background.value;

			if (backgroundValue == "Black") {
				document.body.style.backgroundImage = "none";
			} else {
				// Build filename like "Milky Way.png"
				const imageUrl = `${backgroundValue}.png`;

				// Preload to verify it exists
				const img = new Image();
				img.onload = function () {
					// success: apply as background
					document.body.style.backgroundImage = `url("${imageUrl}")`;
					document.body.style.backgroundSize = "cover";
					document.body.style.backgroundPosition = "center";
					document.body.style.backgroundRepeat = "no-repeat";
				};
				img.onerror = function () {
				// failed to load -> remove image (leave black background as-is)
				document.body.style.backgroundImage = "none";
				};
			img.src = imageUrl;
			}
		}
		
		// scale planet size
		if (properties.planetsize) {
			const planetsizeValue = properties.planetsize.value; // e.g. "120"
			const scaleFactor = parseFloat(planetsizeValue) / 100;

		// scale planets and orbits
		document.querySelectorAll('.planet').forEach(el => {
			// Save original sizes once
			if (!el.dataset.originalWidth) {
				el.dataset.originalWidth = el.offsetWidth;
				el.dataset.originalHeight = el.offsetHeight;
				el.dataset.originalMarginLeft = parseFloat(getComputedStyle(el).marginLeft);
				el.dataset.originalMarginTop = parseFloat(getComputedStyle(el).marginTop);
			}
			const origW = parseFloat(el.dataset.originalWidth);
			const origH = parseFloat(el.dataset.originalHeight);

			el.style.width = (origW * scaleFactor) + 'px';
			el.style.height = (origH * scaleFactor) + 'px';

			// Margin to keep element centered (-half width/height)
			el.style.marginLeft = -(origW * scaleFactor / 2) + 'px';
			el.style.marginTop = -(origH * scaleFactor / 2) + 'px';
		});

		// Scale orbits
		document.querySelectorAll('[id$="orbit"]').forEach(el => {
			// Save original sizes once
			if (!el.dataset.originalWidth) {
				el.dataset.originalWidth = el.offsetWidth;
				el.dataset.originalHeight = el.offsetHeight;
				el.dataset.originalMarginLeft = parseFloat(getComputedStyle(el).marginLeft);
				el.dataset.originalMarginTop = parseFloat(getComputedStyle(el).marginTop);
			}
			const origW = parseFloat(el.dataset.originalWidth);
			const origH = parseFloat(el.dataset.originalHeight);

			el.style.width = (origW * scaleFactor) + 'px';
			el.style.height = (origH * scaleFactor) + 'px';

			// Margins keep orbit centered (-half width/height)
			el.style.marginLeft = -(origW * scaleFactor / 2) + 'px';
			el.style.marginTop = -(origH * scaleFactor / 2) + 'px';
		  });
		}
		
		// scale table size
		if (properties.tablesize) {
			const raw = properties.tablesize.value; // e.g. "120"
			let scaleFactor = parseFloat(raw) / 100;
			if (isNaN(scaleFactor) || scaleFactor <= 0) scaleFactor = 1;
			document.querySelectorAll('.info').forEach(el => {
				el.style.transform = `scale(${scaleFactor})`;
			});
		}
		
		//  enable or disable pluto
		if (properties.enablepluto) {
			var pluto = properties.enablepluto.value;
			if (pluto) {
				$('#pluto').show();
			} else {
				$('#pluto').hide();
			}
		}
		
		// change language
		if (properties.language) {
			const langCode = properties.language.value;
			loadLocale(langCode);
		}
    },
};


// code for changing language
const localesCache = {};
let currentLocale = 'en';

async function loadLocale(lang) {
  if (localesCache[lang]) {
    currentLocale = lang;
    applyTranslations();
    return;
  }

  try {
    const resp = await fetch(`${lang}.json`);
    if (!resp.ok) throw new Error('not found');
    const data = await resp.json();
    localesCache[lang] = data;
    currentLocale = lang;
  } catch (e) {
    // fallback to English if not already loaded
    if (lang !== 'en') {
      console.warn(`Locale "${lang}" failed to load, falling back to en.`); 
      await loadLocale('en');
      return;
    }
  }
  applyTranslations();
}

function t(key) {
  const localeData = localesCache[currentLocale] || {};
  return localeData[key] ?? key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.dataset.i18nKey;
    el.textContent = t(key);
  });
}

// optional: format numbers per current locale
function formatNumber(number) {
  try {
    return new Intl.NumberFormat(currentLocale).format(number);
  } catch {
    return number;
  }
}

$(document).ready(function () {
    $('.info').hide();

	$('.planet').on('click', function () {
	  const targetInfo = $(`#${this.id}-info`);
	  if (targetInfo.is(':visible')) {
		targetInfo.hide('slow');
	  } else {
		$('.info').not(targetInfo).hide();
		targetInfo.show('slow');
	  }
	});

});


