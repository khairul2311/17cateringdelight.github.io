/* ==========================================================================
   Catering Delight - Main Application Logic (app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // 1. ACTIVE NAVIGATION & MOBILE MENU TOGGLE
  // ==========================================================================
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');

  // Auto-mark active state in navigation headers based on filename
  const path = window.location.pathname;
  const page = path.split("/").pop() || "1_homepage.html";

  function highlightActiveLink(links) {
    links.forEach(link => {
      const href = link.getAttribute('href');
      // Highlight if href equals page name or index.html maps to homepage
      if (href === page || (page === "index.html" && href === "1_homepage.html")) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  highlightActiveLink(navLinks);
  highlightActiveLink(mobileLinks);

  // Mobile menu triggers
  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener('click', () => {
      mobileOverlay.classList.add('open');
    });
  }

  if (mobileClose && mobileOverlay) {
    mobileClose.addEventListener('click', () => {
      mobileOverlay.classList.remove('open');
    });
  }


  // ==========================================================================
  // 2. DEEP LINK QUERY PARAMS PARSER (Pre-fill Booking Form)
  // ==========================================================================
  const urlParams = new URLSearchParams(window.location.search);
  
  // Pre-fill Event Type
  const bookEventType = document.getElementById('book-event-type');
  const paramService = urlParams.get('service');
  if (bookEventType && paramService) {
    for (let option of bookEventType.options) {
      if (option.value === paramService || option.text.toLowerCase().includes(paramService.toLowerCase())) {
        bookEventType.value = option.value;
        break;
      }
    }
  }

  // Pre-fill Package selection
  const bookPackage = document.getElementById('book-package');
  const paramPackage = urlParams.get('package');
  if (bookPackage && paramPackage) {
    for (let option of bookPackage.options) {
      if (option.value === paramPackage || option.text.toLowerCase().includes(paramPackage.toLowerCase())) {
        bookPackage.value = option.value;
        break;
      }
    }
  }

  // Pre-fill Guest Count
  const bookGuests = document.getElementById('book-guests');
  const paramGuests = urlParams.get('guests');
  if (bookGuests && paramGuests) {
    bookGuests.value = paramGuests;
  }


  // ==========================================================================
  // 3. STATISTICS COUNTERS ANIMATION (Runs on About page load)
  // ==========================================================================
  const statEventsEl = document.getElementById('stat-events');
  if (statEventsEl) {
    animateCounter('stat-events', 1500, '+');
    animateCounter('stat-guests', 120000, '+');
    animateCounter('stat-dishes', 250, '+');
    animateCounter('stat-cities', 12, '');
  }

  function animateCounter(id, target, suffix) {
    const el = document.getElementById(id);
    if (!el) return;
    let start = 0;
    const duration = 1500; // ms
    const increment = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        el.textContent = target.toLocaleString() + suffix;
      } else {
        el.textContent = start.toLocaleString() + suffix;
      }
    }, 30);
  }


  // ==========================================================================
  // 4. INTERACTIVE MENU CUSTOMIZER (Menus page)
  // ==========================================================================
  const dietSelect = document.getElementById('customizer-diet');
  const upgradeSelect = document.getElementById('customizer-upgrade');
  const themeSelect = document.getElementById('customizer-theme');
  const customizerSummary = document.getElementById('customizer-summary');

  function updateCustomizerText() {
    if (!dietSelect || !upgradeSelect || !themeSelect || !customizerSummary) return;

    const dietText = dietSelect.options[dietSelect.selectedIndex].text;
    const upgradeText = upgradeSelect.options[upgradeSelect.selectedIndex].text;
    const themeText = themeSelect.options[themeSelect.selectedIndex].text;

    customizerSummary.innerHTML = `Selected Style: <strong>${dietText}</strong> with <strong>${upgradeText}</strong>. Decor palette chosen: <strong>${themeText}</strong>.`;
  }

  [dietSelect, upgradeSelect, themeSelect].forEach(item => {
    if (item) item.addEventListener('change', updateCustomizerText);
  });


  // ==========================================================================
// 5. GALLERY CATEGORY FILTERING & LIGHTBOX
// ==========================================================================

const filterBtns = document.querySelectorAll('.gallery-filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

const lightbox = document.getElementById('gallery-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');

const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

if (galleryItems.length > 0) {

    let currentImageIndex = 0;

    // ==========================
    // Gallery Filter
    // ==========================
    filterBtns.forEach(btn => {

        btn.addEventListener('click', function () {

            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filterVal = this.dataset.filter;

            galleryItems.forEach(item => {

                const category = item.dataset.category;

                if (filterVal === 'all' || category === filterVal) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }

            });

        });

    });

    // ==========================
    // Open Lightbox
    // ==========================
    galleryItems.forEach(item => {

        item.addEventListener('click', () => {

            const images = JSON.parse(item.dataset.images || '[]');

            currentImageIndex = 0;

            if (images.length > 0) {
                lightboxImg.src = images[0];
            } else {
                lightboxImg.src = item.dataset.src;
            }

            lightboxTitle.textContent = item.dataset.title || '';
            lightboxDesc.textContent = item.dataset.desc || '';

            lightbox.dataset.images = JSON.stringify(images);

            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';

        });

    });

    // ==========================
    // Previous / Next
    // ==========================
    function navigateLightbox(direction) {

        const images = JSON.parse(lightbox.dataset.images || '[]');

        if (images.length <= 1) return;

        currentImageIndex += direction;

        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        }

        if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        lightboxImg.src = images[currentImageIndex];
    }

    // ==========================
    // Close Lightbox
    // ==========================
    function closeLightbox() {

        lightbox.classList.remove('open');
        document.body.style.overflow = 'auto';

    }

    // ==========================
    // Button Events
    // ==========================
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', () => {
            navigateLightbox(-1);
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', () => {
            navigateLightbox(1);
        });
    }

    // ==========================
    // Click Outside To Close
    // ==========================
    if (lightbox) {

        lightbox.addEventListener('click', (e) => {

            if (e.target === lightbox) {
                closeLightbox();
            }

        });

    }

    // ==========================
    // Keyboard Controls
    // ==========================
    document.addEventListener('keydown', (e) => {

        if (!lightbox.classList.contains('open')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        }

        if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        }

        if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }

    });

}


  // ==========================================================================
  // 6. CATERING PRICE CALCULATOR (Quotes page)
  // ==========================================================================
  const calcPackage = document.getElementById('calc-package');
  const calcGuests = document.getElementById('calc-guests');
  const addLiveStation = document.getElementById('add-live-station');
  const addDessertBar = document.getElementById('add-dessert-bar');
  const addBarista = document.getElementById('add-barista');
  const addButler = document.getElementById('add-butler');
  const addTableStyling = document.getElementById('add-table-styling');

  // Breakdown Output Elements
  const breakdownPkg = document.getElementById('breakdown-pkg');
  const breakdownGuests = document.getElementById('breakdown-guests');
  const breakdownPkgSubtotal = document.getElementById('breakdown-pkg-subtotal');
  const breakdownExtras = document.getElementById('breakdown-itemized-extras');
  const breakdownTotal = document.getElementById('breakdown-total');
  const breakdownPerPax = document.getElementById('breakdown-per-pax');

  function calculateBill() {
    if (!calcPackage || !calcGuests) return;

    // 0. Stop calculation if no package is chosen yet and reset displays
    if (calcPackage.value === "") {
      if (breakdownPkg) breakdownPkg.textContent = "(choose a package)";
      if (breakdownGuests) breakdownGuests.textContent = "0 Pax";
      if (breakdownPkgSubtotal) breakdownPkgSubtotal.textContent = "RM 0.00";
      if (breakdownExtras) breakdownExtras.textContent = "No service upgrades or add-ons selected.";
      if (breakdownTotal) breakdownTotal.textContent = "RM 0.00";
      if (breakdownPerPax) breakdownPerPax.textContent = "RM 0.00";
      return; 
    }

    // 1. Gather Inputs
    const selectedOpt = calcPackage.options[calcPackage.selectedIndex];
    const packageName = selectedOpt.text.split(' (RM')[0];
    const packagePrice = parseFloat(selectedOpt.getAttribute('data-price'));
    
    let guestCount = parseInt(calcGuests.value) || 0;
    
    // Safety check for pax
    if (guestCount < 20) {
      guestCount = 20;
      calcGuests.value = 20;
    }

    // 2. Perform Math
    const packageSubtotal = packagePrice * guestCount;
    let extraCosts = 0;
    let itemizedListHTML = '';

    if (addLiveStation && addLiveStation.checked) {
      const pricePerPax = parseFloat(addLiveStation.value);
      const sub = pricePerPax * guestCount;
      extraCosts += sub;
      itemizedListHTML += `<div class="itemized-row"><span>Live Stations:</span><span>RM ${sub.toFixed(2)} (RM ${pricePerPax}/pax)</span></div>`;
    }
    if (addDessertBar && addDessertBar.checked) {
      const pricePerPax = parseFloat(addDessertBar.value);
      const sub = pricePerPax * guestCount;
      extraCosts += sub;
      itemizedListHTML += `<div class="itemized-row"><span>Dessert Bar:</span><span>RM ${sub.toFixed(2)} (RM ${pricePerPax}/pax)</span></div>`;
    }
    if (addBarista && addBarista.checked) {
      const pricePerPax = parseFloat(addBarista.value);
      const sub = pricePerPax * guestCount;
      extraCosts += sub;
      itemizedListHTML += `<div class="itemized-row"><span>Barista Bar:</span><span>RM ${sub.toFixed(2)} (RM ${pricePerPax}/pax)</span></div>`;
    }
    if (addButler && addButler.checked) {
      const flatCost = parseFloat(addButler.value);
      extraCosts += flatCost;
      itemizedListHTML += `<div class="itemized-row"><span>Butler Service:</span><span>RM ${flatCost.toFixed(2)} (Flat Rate)</span></div>`;
    }
    if (addTableStyling && addTableStyling.checked) {
      const flatCost = parseFloat(addTableStyling.value);
      extraCosts += flatCost;
      itemizedListHTML += `<div class="itemized-row"><span>Thematic Decor:</span><span>RM ${flatCost.toFixed(2)} (Flat Rate)</span></div>`;
    }

    const totalEstimate = packageSubtotal + extraCosts;
    const costPerPax = totalEstimate / guestCount;

    // 3. Update Visuals
    if (breakdownPkg) breakdownPkg.textContent = `${packageName} (RM ${packagePrice}/pax)`;
    if (breakdownGuests) breakdownGuests.textContent = `${guestCount} Pax`;
    if (breakdownPkgSubtotal) breakdownPkgSubtotal.textContent = `RM ${packageSubtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    
    if (breakdownExtras) {
      if (itemizedListHTML) {
        breakdownExtras.innerHTML = itemizedListHTML;
      } else {
        breakdownExtras.textContent = 'No service upgrades or add-ons selected.';
      }
    }

    if (breakdownTotal) breakdownTotal.textContent = `RM ${totalEstimate.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    if (breakdownPerPax) breakdownPerPax.textContent = `RM ${costPerPax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  
  }

  // Listeners for calculator triggers
  const calcInputs = [calcPackage, calcGuests, addLiveStation, addDessertBar, addBarista, addButler, addTableStyling];
  calcInputs.forEach(input => {
    if (input) {
      input.addEventListener('change', calculateBill);
      input.addEventListener('input', calculateBill);
    }
  });

  // Calculate initially if calculator exists
  if (calcPackage) {
    calculateBill();
  }


  // ==========================================================================
  // 7. AREA DELIVERY CHECKER (Quotes page)
  // ==========================================================================
  const zipInput = document.getElementById('delivery-zip');
  const checkZipBtn = document.getElementById('btn-check-delivery');
  const deliveryStatus = document.getElementById('delivery-status');

  if (checkZipBtn && zipInput && deliveryStatus) {
    checkZipBtn.addEventListener('click', () => {
      const zipVal = zipInput.value.trim();
      
      if (!zipVal) {
        deliveryStatus.textContent = "Please enter a valid code.";
        deliveryStatus.style.color = "var(--error)";
        return;
      }

      // Quick logic based on numbers
      const parsedNum = parseInt(zipVal.replace(/\D/g, ''));

      if (isNaN(parsedNum)) {
        deliveryStatus.textContent = "We deliver across Gastronomy City limits. Please phone us to verify.";
        deliveryStatus.style.color = "var(--gold-dark)";
      } else {
        if (parsedNum % 2 === 0) {
          deliveryStatus.textContent = "We deliver here! A standard $35 delivery fee applies.";
          deliveryStatus.style.color = "var(--gold-dark)";
        } else {
          deliveryStatus.textContent = "Excellent news! Your location qualifies for FREE delivery!";
          deliveryStatus.style.color = "var(--success)";
        }
      }
    });
  }


  // ==========================================================================
  // 8. ACCORDION FAQ LOGIC (FAQ page)
  // ==========================================================================
  const faqTriggers = document.querySelectorAll('.faq-trigger');

  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const faqContent = this.nextElementSibling;
      const isOpen = faqItem.classList.contains('open');

      // Close all other open items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-content').style.maxHeight = null;
      });

      // Toggle current item
      if (!isOpen) {
        faqItem.classList.add('open');
        faqContent.style.maxHeight = faqContent.scrollHeight + "px";
      } else {
        faqItem.classList.remove('open');
        faqContent.style.maxHeight = null;
      }
    });
  });


  // ==========================================================================
  // 9. FORM VALIDATIONS & SUCCESS MODALS (Booking & Contact pages)
  // ==========================================================================
  const successModal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalHeading = document.getElementById('modal-heading');
  const modalBody = document.getElementById('modal-body');
  const modalSummaryBox = document.getElementById('modal-summary-box');

  const bookingForm = document.getElementById('event-booking-form');
  const contactForm = document.getElementById('contact-message-form');
  const newsletterForm = document.getElementById('newsletter-form');

  // Utility functions for validation styling
  function markInvalid(inputEl) {
    inputEl.parentElement.classList.add('invalid');
  }

  function markValid(inputEl) {
    inputEl.parentElement.classList.remove('invalid');
  }

  // Regex validation helpers
  function isValidEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^[\d\s\-\+\(\)]{7,20}$/.test(phone);
  }

  // Modal display helpers
  function showSuccessModal(heading, bodyText, summaryHTML) {
    if (!successModal) return;
    
    modalHeading.textContent = heading;
    modalBody.textContent = bodyText;
    
    if (summaryHTML) {
      modalSummaryBox.innerHTML = summaryHTML;
      modalSummaryBox.style.display = 'block';
    } else {
      modalSummaryBox.style.display = 'none';
    }

    successModal.classList.add('open');
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      successModal.classList.remove('open');
    });
  }

  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('open');
      }
    });
  }
  const datetimeInput = document.getElementById('book-datetime');
  if (datetimeInput) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const minDatetime = now.toISOString().slice(0, 16);
    datetimeInput.setAttribute('min', minDatetime);
  }

  // 9A. Event Booking Form submit
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      // Select elements
      const eventType = document.getElementById('book-event-type');
      const packageSel = document.getElementById('book-package');
      const guests = document.getElementById('book-guests');
      const datetime = document.getElementById('book-datetime');
      const location = document.getElementById('book-location');
      const name = document.getElementById('book-name');
      const email = document.getElementById('book-email');
      const phone = document.getElementById('book-phone');
      const requests = document.getElementById('book-requests');

      // 1. Event Type Validation
      if (!eventType.value) {
        markInvalid(eventType);
        isValid = false;
      } else {
        markValid(eventType);
      }

      // 2. Package Validation
      if (!packageSel.value) {
        markInvalid(packageSel);
        isValid = false;
      } else {
        markValid(packageSel);
      }

      // 3. Guests Validation (>= 20)
      const guestNum = parseInt(guests.value) || 0;
      if (guestNum < 20) {
        markInvalid(guests);
        isValid = false;
      } else {
        markValid(guests);
      }

      // 4. Date Validation (must be in future)
      if (!datetime.value) {
        markInvalid(datetime);
        isValid = false;
      } else {
        const selectedDate = new Date(datetime.value);
        const now = new Date();
        if (selectedDate <= now) {
          markInvalid(datetime);
          isValid = false;
        } else {
          markValid(datetime);
        }
      }

      // 5. Location Validation
      if (!location.value.trim()) {
        markInvalid(location);
        isValid = false;
      } else {
        markValid(location);
      }

      // 6. Name Validation
      if (!name.value.trim()) {
        markInvalid(name);
        isValid = false;
      } else {
        markValid(name);
      }

      // 7. Email Validation
      if (!email.value.trim() || !isValidEmail(email.value)) {
        markInvalid(email);
        isValid = false;
      } else {
        markValid(email);
      }

      // 8. Phone Validation
      if (!phone.value.trim() || !isValidPhone(phone.value)) {
        markInvalid(phone);
        isValid = false;
      } else {
        markValid(phone);
      }

      // Submit if all fields are valid
      if (isValid) {
        const submitBtn = document.getElementById('submit-booking');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending Request...";
        submitBtn.disabled = true;

        const formData = new FormData(bookingForm);

        fetch("https://formspree.io/f/mjgdznwz", {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).then(response => {
          if (response.ok) {
            const pkgText = packageSel.options[packageSel.selectedIndex].text;
            const eventText = eventType.options[eventType.selectedIndex].text;
            const formattedDate = new Date(datetime.value).toLocaleString();
            
            const summaryHTML = `
              <h4 style="margin-bottom:0.5rem; color:var(--maroon-main); font-weight:700;">Booking Summary:</h4>
              <p><strong>Host Name:</strong> ${name.value.trim()}</p>
              <p><strong>Event Type:</strong> ${eventText}</p>
              <p><strong>Package Choice:</strong> ${pkgText}</p>
              <p><strong>Guest Count:</strong> ${guestNum} Pax</p>
              <p><strong>Event Schedule:</strong> ${formattedDate}</p>
              <p><strong>Delivery Address:</strong> ${location.value.trim()}</p>
              ${requests.value.trim() ? `<p><strong>Special Notes:</strong> "${requests.value.trim()}"</p>` : ''}
            `;

            showSuccessModal("Reservation Request Received!", "Thank you for choosing Catering Delight. Your details have been sent to our team, and we will contact you within 24 hours.", summaryHTML);
            bookingForm.reset();
          } else {
            alert("Oops! There was a problem submitting your booking. Please try again.");
          }
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }).catch(error => {
          alert("Network error. Please check your internet connection.");
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
      }
    });

    // Clear validation error styling dynamically when typing/fixing
    const bookingFormInputs = bookingForm.querySelectorAll('input, select, textarea');
    bookingFormInputs.forEach(input => {
      input.addEventListener('input', function() {
        markValid(this);
      });
      input.addEventListener('change', function() {
        markValid(this);
      });
    });
  }

  // 9B. Contact Form submit
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const subject = document.getElementById('contact-subject');
      const msg = document.getElementById('contact-message');

      // 1. Name Validation
      if (!name.value.trim()) {
        markInvalid(name);
        isValid = false;
      } else {
        markValid(name);
      }

      // 2. Email Validation
      if (!email.value.trim() || !isValidEmail(email.value)) {
        markInvalid(email);
        isValid = false;
      } else {
        markValid(email);
      }

      // 3. Message Validation
      if (!msg.value.trim()) {
        markInvalid(msg);
        isValid = false;
      } else {
        markValid(msg);
      }

      if (isValid) {
        const submitBtn = document.getElementById('submit-contact');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending Message...";
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        fetch("https://formspree.io/f/mykavrjy", {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).then(response => {
          if (response.ok) {
            showSuccessModal(
              "Inquiry Message Sent!",
              `Thank you, ${name.value.trim()}. Your message regarding "${subject.value.trim() || 'General Inquiry'}" has been successfully delivered. Our corporate sales team will reply to ${email.value.trim()} shortly.`,
              null
            );
            contactForm.reset();
          } else {
            alert("Oops! There was a problem sending your message. Please try again.");
          }
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }).catch(error => {
          alert("Network error. Please check your internet connection.");
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
      }
    });

    // Clear validation error styling dynamically when typing/fixing
    const contactFormInputs = contactForm.querySelectorAll('input, textarea');
    contactFormInputs.forEach(input => {
      input.addEventListener('input', function() {
        markValid(this);
      });
    });
  }

  // 9C. Submit quote from Calculator Section (Redirects to Booking Page with options)
  const calcApplyBtn = document.getElementById('btn-calc-apply');
  if (calcApplyBtn && calcPackage && calcGuests) {
    calcApplyBtn.addEventListener('click', () => {
      const selOpt = calcPackage.options[calcPackage.selectedIndex];
      const pkgVal = selOpt.value; // basic, corporate, wedding, premium, festive
      const guests = calcGuests.value;

      // Redirect to Booking Page with query params
      window.location.href = `6_event_packages_booking.html?package=${encodeURIComponent(pkgVal)}&guests=${encodeURIComponent(guests)}`;
    });
  }

  // 9D. Newsletter Form submit
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim()) {
        alert(`Thank you for subscribing! We have added ${emailInput.value.trim()} to our monthly Catering Delight news list.`);
        newsletterForm.reset();
      }
    });
  }

  // 9E. Review Form Submit (Testimonials Page)
  const reviewForm = document.getElementById('review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;
      
      const name = document.getElementById('review-name');
      const event = document.getElementById('review-event');
      const msg = document.getElementById('review-message');

      if (!name.value.trim()) { markInvalid(name); isValid = false; } else { markValid(name); }
      if (!event.value.trim()) { markInvalid(event); isValid = false; } else { markValid(event); }
      if (!msg.value.trim()) { markInvalid(msg); isValid = false; } else { markValid(msg); }

      if (isValid) {
        const submitBtn = document.getElementById('submit-review');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = "Sending Review...";
        submitBtn.disabled = true;

        const formData = new FormData(reviewForm);

        fetch("https://formspree.io/f/xaqzkrog", {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        }).then(response => {
          if (response.ok) {
            showSuccessModal("Review Submitted!", `Thank you, ${name.value.trim()}! Your review has been sent to our team.`, null);
            reviewForm.reset();
          } else {
            alert("Oops! There was a problem submitting your review.");
          }
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }).catch(error => {
          alert("Network error. Please check your internet connection.");
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
      }
    });
    
    const reviewFormInputs = reviewForm.querySelectorAll('input, textarea');
    reviewFormInputs.forEach(input => { input.addEventListener('input', function() { markValid(this); }); });
  }

});

// ==========================================================================
// 10. PACKAGE IMAGE SLIDER (Homepage)
// ==========================================================================

const packageSliders = document.querySelectorAll('.pack-card-image');

packageSliders.forEach(slider => {

    const images = slider.querySelectorAll('.slider-image');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');

    if (images.length === 0 || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function showSlide(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showSlide(currentIndex);
    });

    // Auto slide every 4 seconds
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }, 4000);

});
