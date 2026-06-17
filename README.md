<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Catering Delight | Delicious Food, Memorable Events</title>
  <meta name="description" content="Experience professional, premium, and delicious catering services for weddings, corporate lunches, birthdays, and festive celebrations. Request a quote online today.">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  <!-- FontAwesome Icons for aesthetics -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Main Stylesheet -->
  <link rel="stylesheet" href="index.css">
</head>
<body>

  <!-- Top Navigation Header -->
  <header class="main-header" id="header">
    <div class="header-container">
      <a href="1_homepage.html" class="logo-area" id="logo-link">
        <img src="assets/Logo Catering Delight.png" alt="Catering Delight Logo" class="brand-logo">
        <span class="brand-name"> 17 Catering <span class="gold-text">Delight</span></span>
      </a>
      
      <nav class="navbar" id="navbar">
        <ul class="nav-menu">
          <li><a href="1_homepage.html" class="nav-link active" id="nav-home">Home</a></li>
          <li><a href="2_about_us.html" class="nav-link" id="nav-about">About Us</a></li>
          <li><a href="3_catering_services.html" class="nav-link" id="nav-services">Services</a></li>
          <li><a href="4_menu_food_packages.html" class="nav-link" id="nav-menu-packages">Menus</a></li>
          <li><a href="5_food_gallery.html" class="nav-link" id="nav-gallery">Gallery</a></li>
          <li><a href="6_event_packages_booking.html" class="nav-link" id="nav-booking">Book Event</a></li>
          <li><a href="7_quotation_request.html" class="nav-link" id="nav-quotes">Get Quote</a></li>
          <li><a href="8_customer_testimonials.html" class="nav-link" id="nav-testimonials">Testimonials</a></li>
          <li><a href="9_faq.html" class="nav-link" id="nav-faq">FAQ</a></li>
          <li><a href="10_contact_us.html" class="nav-link" id="nav-contact">Contact</a></li>
        </ul>
      </nav>
      
      <div class="header-ctas">
        <a href="6_event_packages_booking.html" class="btn btn-gold btn-header-cta" id="header-book-btn">Book Now</a>
        <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Toggle navigation menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Overlay Navigation -->
  <div class="mobile-nav-overlay" id="mobile-overlay">
    <div class="mobile-overlay-header">
      <span class="brand-name">Catering <span class="gold-text">Delight</span></span>
      <button class="mobile-close-btn" id="mobile-close"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <ul class="mobile-menu">
      <li><a href="1_homepage.html" class="mobile-link active">Home</a></li>
      <li><a href="2_about_us.html" class="mobile-link">About Us</a></li>
      <li><a href="3_catering_services.html" class="mobile-link">Services</a></li>
      <li><a href="4_menu_food_packages.html" class="mobile-link">Menus & Packages</a></li>
      <li><a href="5_food_gallery.html" class="mobile-link">Food Gallery</a></li>
      <li><a href="6_event_packages_booking.html" class="mobile-link">Event Booking</a></li>
      <li><a href="7_quotation_request.html" class="mobile-link">Quotation Request</a></li>
      <li><a href="8_customer_testimonials.html" class="mobile-link">Testimonials</a></li>
      <li><a href="9_faq.html" class="mobile-link">FAQ</a></li>
      <li><a href="10_contact_us.html" class="mobile-link">Contact Us</a></li>
    </ul>
  </div>

  <!-- Main Content Container -->
  <main class="main-content">

    <!-- 1. HOMEPAGE SECTION -->
    <section class="page-section" id="home">

      <!-- Hero Banner -->
      <div class="hero-banner">
        <div class="hero-bg-overlay"></div>
        <div class="hero-content-container">
          <span class="hero-sub">PREMIUM CATERING SERVICES</span>
          <h1 class="hero-title">Delicious Food,<br><span class="gold-text">Memorable Events</span></h1>
          <p class="hero-desc">Elevate your celebrations with gourmet culinary creations, spectacular setups, and professional hospitality designed to wow your guests.</p>
          <div class="hero-actions">
            <a href="4_menu_food_packages.html" class="btn btn-gold btn-large" id="hero-menu-cta">Explore Menus</a>
            <a href="7_quotation_request.html" class="btn btn-outline-white btn-large" id="hero-quote-cta">Calculate Estimate</a>
          </div>
        </div>
        <div class="hero-scroll-indicator">
          <span>Scroll to Discover</span>
          <i class="fa-solid fa-chevron-down animate-bounce"></i>
        </div>
      </div>

      <!-- Quick Welcome Pitch -->
      <div class="section-container home-welcome-container">
        <div class="text-center max-w-700 margin-auto">
          <span class="section-sub gold-text">Welcome to Catering Delight</span>
          <h2 class="section-title">Crafting Exquisite Culinary Experiences</h2>
          <p class="section-desc">At Catering Delight, we believe that food is at the heart of every great memory. Whether it is an intimate wedding reception, a high-stakes corporate gala, or a warm family gathering, we curate premium menus crafted from the freshest ingredients and styled to perfection.</p>
        </div>
      </div>

      <!-- Service Highlights Grid -->
      <div class="section-container bg-charcoal text-white home-services-highlights">
        <div class="text-center max-w-700 margin-auto">
          <span class="section-sub gold-text">What We Do</span>
          <h2 class="section-title text-white">Our Service Highlights</h2>
          <p class="section-desc text-light">From premium dining to office catering, we offer tailored options for every scale of event.</p>
        </div>

        <div class="grid-layout cols-3 gap-2">
          <!-- Item 1 -->
          <div class="service-highlight-card">
            <div class="card-icon"><i class="fa-solid fa-ring"></i></div>
            <h3>Wedding Catering</h3>
            <p>Romantic banquets, buffet spreads, and cocktail services styled elegantly for your special day.</p>
            <a href="3_catering_services.html" class="card-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <!-- Item 2 -->
          <div class="service-highlight-card">
            <div class="card-icon"><i class="fa-solid fa-briefcase"></i></div>
            <h3>Corporate Luncheons</h3>
            <p>Punctual, organized, and appetizing setups to impress clients and fuel productive team days.</p>
            <a href="3_catering_services.html" class="card-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <!-- Item 3 -->
          <div class="service-highlight-card">
            <div class="card-icon"><i class="fa-solid fa-cake-candles"></i></div>
            <h3>Birthday Bashes</h3>
            <p>Fun, creative, and delicious food stations and finger foods designed for guests of all ages.</p>
            <a href="3_catering_services.html" class="card-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>

          <!-- Item 4 -->
          <div class="service-highlight-card">
            <div class="card-icon"><i class="fa-solid fa-bowl-food"></i></div>
            <h3>Buffet</h3>
            <p>A dining experience featuring multiple food choices, fresh dishes, and satisfying flavors.</p>
            <a href="3_catering_services.html" class="card-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <!-- Item 5 -->
          <div class="service-highlight-card">
            <div class="card-icon"><i class="fa-solid fa-utensils"></i></div>
            <h3>Packed Meal Boxes</h3>
            <p>Delicious and practical meal packages perfect for events, meetings, and daily needs.</p>
            <a href="3_catering_services.html" class="card-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>

          <!-- Item 6 -->
          <div class="service-highlight-card">
            <div class="card-icon"><i class="fa-solid fa-mug-hot"></i></div>
            <h3>High Tea</h3>
            <p>A delightful afternoon tea with sweet and savoury treats served fresh.</p>
            <a href="3_catering_services.html" class="card-link">Learn More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <!-- Featured Packages Preview -->
      <div class="section-container home-packages-preview">
        <div class="text-center max-w-700 margin-auto">
          <span class="section-sub gold-text">Curated Selections</span>
          <h2 class="section-title">Popular Catering Packages</h2>
          <p class="section-desc">Take a look at some of our most-requested dining packages tailored to make planning simple.</p>
        </div>

        <div class="grid-layout cols-3 gap-2">
          <!-- Package Preview 1 -->
          <div class="featured-pack-card">
            <div class="pack-card-image">
              <img src="assets/Wedding Catering (People).png"
     class="slider-image active">
              <img src="assets/Wedding Catering (Food).png"
     class="slider-image">

            <button class="img-btn prev-btn">&#10094;</button>
            <button class="img-btn next-btn">&#10095;</button>

              <div class="pack-badge">Popular</div>
            </div>
            <div class="pack-card-content">
              <h3>Wedding Banquet</h3>
              <p class="pack-price">Est. RM35 / person</p>
              <p class="pack-meta"><i class="fa-solid fa-user-group"></i> Min. 50 Pax</p>
              <p class="pack-short-desc">Elegant four-course plated dining or premium buffet, featuring chef signature dishes and beverage bar.</p>
              <a href="4_menu_food_packages.html" class="btn btn-gold btn-full btn-pack-view">View Details</a>
            </div>
          </div>
          <!-- Package Preview 2 -->
          <div class="featured-pack-card">
            <div class="pack-card-image">
              <img src="assets/Corporate Catering (People).png"
     class="slider-image active">
              <img src="assets/Corporate Catering (Food).png"
     class="slider-image">

            <button class="img-btn prev-btn">&#10094;</button>
            <button class="img-btn next-btn">&#10095;</button>

            </div>
            <div class="pack-card-content">
              <h3>Corporate Lunch</h3>
              <p class="pack-price">Est. RM25 / person</p>
              <p class="pack-meta"><i class="fa-solid fa-user-group"></i> Min. 30 Pax</p>
              <p class="pack-short-desc">Gourmet hot entrees, wraps, salads, and healthy light options designed for executive meetings.</p>
              <a href="4_menu_food_packages.html" class="btn btn-gold btn-full btn-pack-view">View Details</a>
            </div>
          </div>
          <!-- Package Preview 3 -->
          <div class="featured-pack-card">
            <div class="pack-card-image">
              <img src="assets/Birthday Catering (People).png"
     class="slider-image active">
              <img src="assets/Birthday Catering (Food).png"
     class="slider-image">

            <button class="img-btn prev-btn">&#10094;</button>
            <button class="img-btn next-btn">&#10095;</button>

              <div class="pack-badge">Exclusive</div>
            </div>
            <div class="pack-card-content">
              <h3>Birthday Bashes</h3>
              <p class="pack-price">Est. RM15 / person</p>
              <p class="pack-meta"><i class="fa-solid fa-user-group"></i> Min. 40 Pax</p>
              <p class="pack-short-desc">A premium interactive live chef station experience with carving boards, high-end plating, and desserts.</p>
              <a href="4_menu_food_packages.html" class="btn btn-gold btn-full btn-pack-view">View Details</a>
            </div>
            </div>

            <!-- Package Preview 4 -->
            <div class="featured-pack-card">
            <div class="pack-card-image">
              <div class="pack-card-image">
              <img src="assets/Buffet (People).png"
     class="slider-image active">
              <img src="assets/Buffet (Food).png"
     class="slider-image">

            <button class="img-btn prev-btn">&#10094;</button>
            <button class="img-btn next-btn">&#10095;</button>
            </div>
            <div class="pack-badge">Popular</div>
            </div>
            <div class="pack-card-content">
              <h3>Buffet</h3>
              <p class="pack-price">Est. RM40 / person</p>
              <p class="pack-meta"><i class="fa-solid fa-user-group"></i> Min. 100 Pax</p>
              <p class="pack-short-desc">Enjoy a wide variety of dishes with unlimited choices to satisfy every taste.</p>
              <a href="4_menu_food_packages.html" class="btn btn-gold btn-full btn-pack-view">View Details</a>
            </div>
          </div>
          <!-- Package Preview 5 -->
          <div class="featured-pack-card">
            <div class="pack-card-image">
              <img src="assets/Packed Meal (People).png"
     class="slider-image active">
              <img src="assets/Packed Meal (Food).png"
     class="slider-image">

            <button class="img-btn prev-btn">&#10094;</button>
            <button class="img-btn next-btn">&#10095;</button>
            </div>
            <div class="pack-card-content">
              <h3>Packed Meal Boxes</h3>
              <p class="pack-price">Est. RM25 / person</p>
              <p class="pack-meta"><i class="fa-solid fa-user-group"></i> Min. 20 Pax</p>
              <p class="pack-short-desc">Freshly prepared meals packed neatly for convenience and easy enjoyment anywhere.</p>
              <a href="4_menu_food_packages.html" class="btn btn-gold btn-full btn-pack-view">View Details</a>
            </div>
            </div>

            <!-- Package Preview 6 -->
            <div class="featured-pack-card">
            <div class="pack-card-image">
              <img src="assets/High Tea (People).png"
     class="slider-image active">
              <img src="assets/High Tea (Food).png"
     class="slider-image">

            <button class="img-btn prev-btn">&#10094;</button>
            <button class="img-btn next-btn">&#10095;</button>
            </div>
            <div class="pack-card-content">
              <h3>High Tea</h3>
              <p class="pack-price">Est. RM20 / person</p>
              <p class="pack-meta"><i class="fa-solid fa-user-group"></i> Min. 20 Pax</p>
              <p class="pack-short-desc">A relaxing selection of tea, pastries, and light bites for a delightful afternoon experience.</p>
              <a href="4_menu_food_packages.html" class="btn btn-gold btn-full btn-pack-view">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-column brand-summary">
        <span class="brand-name text-white">Catering <span class="gold-text">Delight</span></span>
        <p>Providing award-winning luxury catering and custom food designs for weddings, corporate dinners, and families since 2012.</p>
        <div class="footer-social-links">
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      <div class="footer-column footer-links-list">
        <h3>Quick Navigation</h3>
        <ul>
          <li><a href="1_homepage.html">Home</a></li>
          <li><a href="2_about_us.html">About Us</a></li>
          <li><a href="3_catering_services.html">Our Services</a></li>
          <li><a href="4_menu_food_packages.html">Menus & Packages</a></li>
          <li><a href="5_food_gallery.html">Food Gallery</a></li>
        </ul>
      </div>

      <div class="footer-column footer-links-list">
        <h3>Get Started</h3>
        <ul>
          <li><a href="6_event_packages_booking.html">Book Event</a></li>
          <li><a href="7_quotation_request.html">Request Quotation</a></li>
          <li><a href="9_faq.html">FAQ</a></li>
          <li><a href="10_contact_us.html">Contact Details</a></li>
        </ul>
      </div>

      <div class="footer-column newsletter-col">
        <h3>Newsletter Sign-Up</h3>
        <p>Subscribe to receive seasonal recipes, party hosting tips, and special holiday package discounts.</p>
        <form id="newsletter-form" class="newsletter-form">
          <input type="email" placeholder="Your Email Address" required aria-label="Email Address">
          <button type="submit" class="btn btn-gold btn-small"><i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
    
    <div class="footer-bottom text-center">
      <p>&copy; 2026 Catering Delight (CateringDelight.com). All Rights Reserved.</p>
    </div>
  </footer>

  <!-- Main JavaScript File -->
  <script src="app.js"></script>
</body>
</html>
