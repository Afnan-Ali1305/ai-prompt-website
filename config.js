// config.js - 100 AI Prompts for Image & Video Generation

const promptConfig = {
    allPrompts: [
        // January 2026 Prompts (1-31)
        {
            id: 1,
            date: "2026-01-01",
            title: "Vintage Aesthetic Portrait",
            content: "Create a retro vintage grainy yet bright Pinterest-inspired image of a young man with dark brown wavy curly hair flowing naturally in wind. He wears a perfect plain black paint shirt giving 90s movie vibe with romantic dreamy aesthetic. Standing against solid wall with deep shadows and dramatic contrast creating mysterious artistic atmosphere. Warm lighting with golden-hour tones evoking nostalgia. Background minimalist and slightly textured keeping focus on him. Moody calm yet happy introspective expression capturing vintage cinematic moment. --ar 4:5 --style raw",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 2,
            date: "2026-01-02",
            title: "Cinematic Motion Blur Photography",
            content: "Cinematic motion-blur photography shot on Leica M6 with 50mm Summilux at f/2.8 captured from chest-level frontal angle using slow shutter panning. Lighting: flat overcast daylight acting as soft diffusion allowing long blur trails without harsh contrast. Color tone: muted concrete greys and pale skin neutrals inspired by A24 films. Subject: Gen-Z male model standing completely still, sharp eyes, symmetrical face, real skin pores visible, wearing understated fashion. Crowd action: hundreds of commuters rushing past in all directions, bodies stretched into smooth horizontal diagonal blur. Emotion: quiet rebellion through stillness. Aesthetic: editorial calm vs chaos. Post: clean motion physics, fine grain, no glitches, no face distortion, no warped anatomy. --ar 4:5",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 3,
            date: "2026-01-03",
            title: "Luxury Perfume Ad Campaign",
            content: "Ultra-luxury perfume advertisement featuring ethereal female model in flowing silk gown standing in minimalist marble studio. Slow-motion close-up of perfume bottle with golden liquid catching light, droplets suspended in air. Dreamy pastel color palette with soft focus effects. Elegant typography overlay: 'L'ESSENCE | Timeless Elegance'. Cinematic lighting with god rays filtering through window. 4K resolution, cinematic 2.39:1 aspect ratio, shallow depth of field. Shot on ARRI Alexa with Cooke S4i lenses. Style: high-fashion editorial meets commercial luxury.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 4,
            date: "2026-01-04",
            title: "Minimalist Tech Product Launch",
            content: "Minimalist tech product launch video for premium wireless earbuds. Clean white studio background with subtle gradient. Product rotates slowly on invisible stand, showing sleek design details. Close-ups of magnetic charging case opening smoothly, earbuds glowing with soft LED indicators. Typography animation: 'Sound Beyond Boundaries'. Color palette: monochromatic with single accent color (deep blue). Smooth camera dollies and precise focus pulls. Clean sound design with subtle whooshes and electronic tones. 30-second spot, 9:16 vertical format for social media.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 5,
            date: "2026-01-05",
            title: "Streetwear Lookbook Series",
            content: "Streetwear fashion lookbook series in urban Tokyo setting. Diverse models of different ethnicities wearing oversized denim, technical jackets, and chunky sneakers. Dynamic poses against neon-lit alleyways, konbini stores, and subway stations. Mix of candid shots and styled portraits. Grainy film texture with lifted blacks and cyan/teal color grade. Shot on 35mm film (Portra 400) with natural lighting. Capturing youthful energy and urban exploration vibes. Each image includes brand logo watermark and product tags. --style raw --ar 3:4",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 6,
            date: "2026-01-06",
            title: "Coffee Shop Brand Story",
            content: "Short documentary-style brand story video for artisanal coffee shop. Golden hour lighting through large windows, close-ups of espresso machine steam, coffee grounds falling in slow motion. Barista with sleeve tattoos carefully preparing pour-over. Customers laughing at wooden tables with laptops. Quick cuts of local coffee beans being roasted. Warm, cozy color grade with orange/amber tones. Voiceover: 'Every cup tells a story'. Natural ambient sounds: coffee brewing, milk steaming, quiet chatter. 1-minute video for Instagram Reels.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 7,
            date: "2026-01-07",
            title: "Cosmetic Product Close-ups",
            content: "Hyper-realistic macro photography for luxury cosmetic brand. Extreme close-up of liquid lipstick gliding perfectly on model's lips, showing texture and pigment saturation. Droplets of facial serum on skin, catching light like diamonds. Cream blush being swatched on arm, showing blendability. Clean beauty aesthetic with minimal skin retouching, real skin texture visible. White studio background with soft shadow. Shot on 100mm macro lens at f/2.8, focus stacking for maximum sharpness. Commercial beauty photography style.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 8,
            date: "2026-01-08",
            title: "Fitness App Promo Video",
            content: "Energetic promo video for fitness tracking app. Quick cuts between: athlete running through city at dawn, yoga studio session with golden light, gym weightlifting with sweat details, stats dashboard animation on phone screen. Dynamic camera movements: drone shots, gimbal follows, POV shots. Bold typography animations showing metrics: '++5000 STEPS', '--15% STRESS'. Upbeat electronic soundtrack with motivational voiceover: 'Your journey, tracked to perfection'. Color palette: vibrant neons against dark backgrounds. 15-second TikTok ad format.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 9,
            date: "2026-01-09",
            title: "Sustainable Fashion Campaign",
            content: "Eco-conscious fashion campaign in natural wilderness setting. Female model wearing organic cotton dresses and linen sets standing in misty forest, barefoot on moss. Natural lighting with sun rays filtering through trees. Close-ups of fabric textures: woven details, natural dyes, handmade imperfections. Earth tone color palette: olive greens, clay oranges, earthy browns. Minimal retouching, embracing natural skin and environment. Tagline overlay: 'Wear the Earth Gently'. Shot on medium format digital with environmental portrait style.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 10,
            date: "2026-01-10",
            title: "Real Estate Virtual Tour",
            content: "Architectural virtual tour video for luxury modern villa. Smooth gimbal walkthrough starting at entrance, moving through open-plan living area with floor-to-ceiling windows showing ocean view. Camera glides over infinity pool edge, through minimalist kitchen with marble countertops, into spa-like bathroom with freestanding tub. Twilight exterior shots with architectural lighting. Text overlays highlighting features: 'Smart Home Integration', 'Sustainable Design', 'Panoramic Views'. Soothing ambient music with subtle nature sounds. 360-degree rotation shots of key rooms.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 11,
            date: "2026-01-11",
            title: "Jewelry E-commerce Product Shots",
            content: "Professional e-commerce jewelry photography on clean white background. Diamond necklace laid perfectly with each stone catching individual sparkles. Ring on velvet stand with dramatic shadow, showing prong details. Earrings suspended on invisible thread with slight rotation. Luxury watch with metallic reflections showing craftsmanship. Clean product cutouts ready for website. Consistent lighting across all products. Shot on product table with light tent, multiple light sources for maximum sparkle. Commercial product photography style.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 12,
            date: "2026-01-12",
            title: "Automotive Launch Film",
            content: "Cinematic electric car launch film. Opening shot: car emerging from mist in slow motion, dramatic low-angle. Interior details: minimalist dashboard with digital display booting up. Driving sequences on coastal road at sunset, reflections on sleek body. Charging port glowing with blue LED light. Family loading luggage into spacious trunk. Safety features animation: collision avoidance system visualization. Tagline: 'The Future, Electrified'. Color grade: cool tones with electric blue accents. Shot with car-mounted cameras and drone follow shots.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 13,
            date: "2026-01-13",
            title: "Food Delivery App Ad",
            content: "Mouth-watering food photography for delivery app advertisement. Top-down flat lay of various cuisine: sushi platter with perfect fish slices, pizza with cheese pull, burger with juicy patty and dripping sauce, colorful poke bowl. Smartphone screen showing app interface with order button. Warm inviting lighting making food look fresh and delicious. Slight steam rising from hot dishes. Clean modern kitchen background. App logo overlay with tagline: 'Restaurants at Your Doorstep'. Shot for social media feed and stories.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 14,
            date: "2026-01-14",
            title: "Music Festival Aftermovie",
            content: "Energetic music festival aftermovie recap video. Quick cuts of: crowd dancing with hands in air, DJ dropping beat with controller close-up, fireworks exploding over main stage, friends laughing at campsite, colorful stage lighting sweeping across audience. GoPro POV shots from crowd. Time-lapse of sunset over festival grounds. Drone shots revealing massive scale. Text overlays with festival dates and artist names. Colorful vibrant grade with neon glow effects. Upbeat electronic track synced to cuts.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 15,
            date: "2026-01-15",
            title: "Skincare Routine Tutorial",
            content: "Step-by-step skincare tutorial for social media. Clean aesthetic bathroom setting with marble surfaces. Female model with minimal makeup demonstrating product application: cleansing oil emulsifying with water, serum droplets on fingertips, gua sha tool gliding over face, sheet mask perfectly applied. Text overlays: 'Step 1: Double Cleanse', 'Step 2: Tone', etc. Close-ups of product textures and skin results. Soothing pastel color palette. Shot with overhead rig and front-facing camera. ASMR sounds of product application.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 16,
            date: "2026-01-16",
            title: "Corporate Team Portrait Series",
            content: "Modern corporate team photography in bright office environment. Diverse team members in business casual attire laughing during meeting, collaborating at whiteboard, working at standing desks with laptops. Natural lighting from large windows, clean modern office decor. Authentic candid moments mixed with directed group shots. Bright and airy color grade, professional but approachable. Company logo subtly incorporated in background. Shot for website 'About Us' page and annual report.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 17,
            date: "2026-01-17",
            title: "Travel Agency Destination Reel",
            content: "Compelling travel destination reel for social media. Quick cuts between: couple walking through lavender fields in Provence, snorkeling in Maldives turquoise waters, hiking Machu Picchu at sunrise, eating street food in Bangkok night market. Beautiful people experiencing joy of travel. Text overlays: 'Your Next Adventure Awaits', 'Book Now'. Vibrant colors enhanced, smooth transitions between locations. Uplifting inspirational music. Shot in 9:16 vertical format optimized for Instagram Reels.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 18,
            date: "2026-01-18",
            title: "Minimalist Watch Advertisement",
            content: "Minimalist luxury watch advertisement on black background. Watch floating in negative space with perfect studio lighting catching metallic details. Extreme close-up of movement through transparent case back showing intricate gears. Shadow play creating dramatic contrast. Single water droplet on sapphire crystal catching light. Minimal typography: brand name and 'Swiss Craftsmanship'. Monochromatic color scheme with subtle gold accents. Shot with focus stacking technique for maximum detail. High-end product photography style.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 19,
            date: "2026-01-19",
            title: "Beverage Pouring Sequence",
            content: "Slow-motion beverage pouring sequence for commercial. Amber whiskey pouring from bottle into crystal glass, capturing liquid flow and light refraction. Carbonated drink being poured over ice cubes, showing bubbles rising. Smoothie with fruit pieces swirling in blender jar. Coffee being brewed with detailed crema formation. Each shot backlit to show liquid transparency and color. Extreme slow motion at 240fps. Clean sound design of pouring sounds. 10-second clips for social media ads.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 20,
            date: "2026-01-20",
            title: "Fitness Influencer Campaign",
            content: "Fitness influencer social media campaign. Athletic woman in matching activewear performing exercises in modern gym: lifting weights with perfect form, yoga pose with sunrise through window, post-workout smoothie close-up. Authentic sweat details, muscle definition visible. Motivational quotes overlay: 'Strong is Beautiful'. Bright vibrant colors, high-energy aesthetic. Shot for Instagram grid consistency. Mix of selfie angles and third-person shots. Fitness brand logo placement.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 21,
            date: "2026-01-21",
            title: "Smartphone Camera Demo",
            content: "Smartphone camera capabilities demonstration video. Side-by-side comparison shots: portrait mode blurring background perfectly, night mode brightening dark scene, macro lens capturing insect details, ultra-wide showing expansive landscape. Screen recording showing camera app interface. Text highlights: '48MP Pro Camera', 'Nightography', 'Portrait Studio'. Real-world usage scenarios: capturing toddler's first steps, vacation sunset, food at restaurant. Before/after comparisons showing camera improvement.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 22,
            date: "2026-01-22",
            title: "Interior Design Portfolio",
            content: "Luxury interior design portfolio shots. Modern living room with floor-to-ceiling windows showing city skyline, minimalist furniture, statement art piece. Kitchen with marble island and pendant lighting. Bedroom with layered textiles and ambient lighting. Bathroom with freestanding tub and natural stone. Each room perfectly styled with decorative objects, books, plants. Natural lighting mixed with architectural lighting. Wide-angle shots showing full room layouts. Shot for designer portfolio and luxury real estate.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 23,
            date: "2026-01-23",
            title: "Sneaker Launch Animation",
            content: "Animated sneaker launch video showing 360-degree product rotation. Sneaker appears in 3D space, slowly rotating to show all design details: unique sole pattern, premium materials, brand logos, colorway details. Text animations highlighting features: 'Air Cushioning', 'Sustainable Materials', 'Limited Edition'. Background with abstract geometric patterns in brand colors. Close-up zoom on specific design elements. Sound design with subtle whooshes and electronic tones. Optimized for social media stories and ads.",
            tool: "Kaiber",
            category: "Animation"
        },
        {
            id: 24,
            date: "2026-01-24",
            title: "Wedding Photography Samples",
            content: "Emotional wedding photography portfolio. Bride getting ready with natural window light, dress details, emotional first look with groom. Ceremony moment with ring exchange, tearful smiles. Reception details: table settings, cake cutting, first dance silhouette against sunset. Black and white conversions for emotional moments, color for celebration shots. Candid moments mixed with styled portraits. Timeless classic wedding photography style. Shot with natural light and subtle flash fill.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 25,
            date: "2026-01-25",
            title: "Cosmetic Transformation Time-lapse",
            content: "Satisfying cosmetic application time-lapse video. Close-up of face with makeup being applied in real-time but sped up: foundation blending seamlessly, eyeshadow colors building, eyeliner perfect line, mascara application, lipstick fill. Split-screen showing before/after transformation. Product close-ups with brand visible. Soothing ASMR sounds of makeup application. Clean beauty studio background. 30-second video for TikTok and Instagram Reels showcasing makeup skills.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 26,
            date: "2026-01-26",
            title: "Professional Headshot Series",
            content: "Modern professional headshots for corporate website. Clean gray or white background. Subject in professional attire with confident pose and genuine smile. Multiple angles: straight-on, three-quarter turn. Different expression options: serious professional, approachable smile. Consistent lighting across all shots. Retouched but natural-looking, maintaining skin texture. Shot with studio lighting setup, softbox for even illumination. Delivered in both color and black/white versions.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 27,
            date: "2026-01-27",
            title: "Restaurant Food Preparation Reel",
            content: "Fast-paced restaurant kitchen reel showing food preparation. Quick cuts: chef chopping vegetables with precision, pasta being hand-rolled, steak sizzling on grill, pizza being tossed in air, dessert plating with artistic sauce drizzles. Close-ups of fresh ingredients, flame cooking, final plated dishes. Text overlays: 'Fresh Daily', 'Handcrafted', 'Artisanal'. Energetic soundtrack matching knife chops and sizzle sounds. 15-second Instagram Reel format.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 28,
            date: "2026-01-28",
            title: "Fashion Editorial Street Style",
            content: "High-fashion editorial street style photography. Model in avant-garde outfit standing against colorful graffiti wall. Dramatic poses, intense eye contact with camera. Accessories highlighted: statement bag, oversized sunglasses, layered jewelry. Urban environment with interesting textures: brick walls, metal staircases, neon signs. Contrast between high fashion and gritty street background. Moody color grade with selective color pops. Shot for fashion magazine editorial spread.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 29,
            date: "2026-01-29",
            title: "Product Unboxing Experience",
            content: "Satisfying product unboxing video for premium brand. Close-up shots: hands unsealing branded box, peeling back tissue paper, revealing product nestled in custom foam. Product being lifted out slowly, showing all angles. Accessories being removed: cables, manuals, extra parts. First power-on with satisfying startup sound/light. Text overlay: 'The Unboxing Experience'. Clean studio background, smooth camera movements. ASMR sounds of unboxing materials. 60-second video for YouTube and website.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 30,
            date: "2026-01-30",
            title: "Architectural Detail Abstracts",
            content: "Abstract architectural detail photography for design firm portfolio. Extreme close-ups of building materials: polished concrete texture, glass curtain wall reflections, steel beam connections, wood grain patterns, geometric facade patterns. Play of light and shadow on surfaces. Minimalist compositions focusing on lines, shapes, textures. Black and white conversions for dramatic contrast. Shot with tilt-shift lens for perfect lines. Artistic architectural photography style.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 31,
            date: "2026-01-31",
            title: "Luxury Hotel Suite Tour",
            content: "Video tour of luxury hotel penthouse suite showing all amenities. Starting with establishing drone shot of hotel exterior at dusk, moving into lobby with art deco design. Suite interior: king-size bed with premium linens, marble bathroom with rainfall shower, private balcony with city views. Room service being delivered, concierge demonstrating smart room controls. Text overlays: '24/7 Butler Service', 'Panoramic Views', 'Designer Interiors'. Smooth camera glides, luxury lifestyle aesthetic. 2-minute video for hotel website.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        // February 2026 Prompts (32-59)
        {
            id: 32,
            date: "2026-02-01",
            title: "Fragrance Bottle Still Life",
            content: "Artistic still life composition of luxury perfume bottles on reflective black surface. Dramatic lighting creating liquid reflections inside glass. Bottles of different heights creating visual rhythm, some with caps off showing spray mechanisms. Golden liquid catching light, creating amber glow. Subtle smoke or mist swirling around bases. High contrast with deep shadows. Shot from low angle for dramatic perspective. Luxury product photography for high-end brand catalog.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 33,
            date: "2026-02-02",
            title: "Athletic Wear Campaign",
            content: "Dynamic athletic wear campaign featuring diverse athletes in motion. Runner sprinting on track with sweat droplets flying, yoga practitioner in impossible pose with muscles defined, basketball player mid-dunk with fabric stretching. Technical close-ups of fabric technology: moisture-wicking texture, seamless construction, ventilation panels. Urban and natural environments mixed. Bold typography: 'Performance Engineered'. Energetic color palette with neon accents. Shot with high-speed photography techniques.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 34,
            date: "2026-02-03",
            title: "Artisan Chocolate Making",
            content: "Artisanal chocolate making process documentary. Close-ups of cocoa beans being roasted, melangeur grinding beans into liquid, chocolate being tempered on marble slab, hand-pouring into molds. Chef's hands working with precision, chocolate shavings falling like snow. Rich brown color palette with gold accents. Text overlays explaining process steps. Soothing classical music with ASMR sounds of chocolate work. Macro shots of finished chocolates with edible gold leaf. 90-second brand story video.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 35,
            date: "2026-02-04",
            title: "Minimalist Brand Identity",
            content: "Complete minimalist brand identity visual system for luxury skincare line. Clean sans-serif typography on white backgrounds, subtle logo animations, color palette of muted pastels. Product packaging shots showing matte finishes and subtle embossing. Pattern designs based on molecular structures. Stationery set: business cards, letterhead, envelopes. Digital mockups showing website interface. Consistent grid system and spacing. Shot with clean studio lighting, shadows carefully controlled. Brand guideline aesthetic.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 36,
            date: "2026-02-05",
            title: "Virtual Fashion Show",
            content: "Virtual reality fashion show experience. Models walking through impossible digital environments: floating platforms in space, underwater catwalk with bubble trails, forest with glowing plants. Clothes transforming as models walk, fabrics changing colors and patterns. Audience of digital avatars reacting. Multiple camera angles including POV from front row. Techno soundtrack synchronized with model steps. LED runway lighting effects. 360-degree video format for VR headsets.",
            tool: "Kaiber",
            category: "Animation"
        },
        {
            id: 37,
            date: "2026-02-06",
            title: "Luxury Car Interior Details",
            content: "Ultra-detailed luxury car interior photography. Close-up of hand-stitched leather steering wheel, wood inlay on dashboard catching light, digital instrument cluster glowing, ambient lighting strips in door panels, massage seat controls, premium sound system speakers. Each shot perfectly lit to show material quality. Reflections in polished surfaces controlled. Color palette matching brand identity. Commercial automotive photography for configurator and brochure.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 38,
            date: "2026-02-07",
            title: "Time-lapse Cityscape",
            content: "24-hour time-lapse of major city skyline. Starting with sunrise glow behind buildings, clouds moving rapidly, daytime traffic flows, sunset painting sky in oranges and purples, city lights gradually turning on, nighttime with car light trails. Moon rising and moving across sky. Weather changes if possible: rain showers passing through. Ultra-smooth motion control rig movement. Soothing ambient soundtrack evolving through day. 60-second establishing shot for corporate video opening.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 39,
            date: "2026-02-08",
            title: "Beauty Salon Services",
            content: "Before-and-after beauty salon service transformations. Hair color transformation: dark to balayage blonde showing detailed foiling process. Makeup application for special event. Facial treatment showing glowing skin results. Nail art creation with intricate designs. Each transformation shown in split screen with time-lapse of process. Happy client reactions. Clean modern salon interior with natural light. Text highlights services and results. 2-minute promotional video for social media.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 40,
            date: "2026-02-09",
            title: "Architectural Model Photography",
            content: "Professional architectural scale model photography. Detailed shots of 3D-printed building models showing design concepts. Perfect lighting to show form and materials. Scale figures for reference. Different angles: bird's eye view, eye level, dramatic low angles. Clean white background or minimalist studio setup. Focus stacking for maximum depth of field. Shadows used to emphasize geometry. Shot for architectural firm portfolio and competition submissions.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 41,
            date: "2026-02-10",
            title: "Craft Beer Brewing Process",
            content: "Craft brewery process documentary. Starting with malt grains being milled, mash tun conversion, boiling with hops addition, fermentation tanks bubbling, bottling line operation. Brewer tasting and adjusting. Close-ups of beer pouring into glass with perfect head formation. Bar environment with happy customers. Text explaining craft philosophy. Rustic industrial aesthetic with warm lighting. Ambient sounds of brewery equipment. 3-minute brand story for website.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 42,
            date: "2026-02-11",
            title: "High-End Real Estate Drone",
            content: "Luxury property drone cinematography. Smooth drone flights over mansion showing full property extent: tennis court, swimming pool, landscaped gardens, guest house. Fly-through of gated entrance. Revealing shots of architectural features. Golden hour lighting enhancing property beauty. Text overlays highlighting amenities. Soaring music building to climax. Multiple property angles and elevations. 90-second hero video for luxury real estate listing.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 43,
            date: "2026-02-12",
            title: "Fashion Accessory Flat Lay",
            content: "Stylish flat lay composition of fashion accessories on marble surface. Arrangement includes: designer sunglasses, luxury watches, leather belts, silk scarves, statement jewelry. Careful color coordination and compositional balance. Natural window lighting creating soft shadows. Some items slightly overlapping for depth. Textured backgrounds: crushed velvet, raw silk, suede. Shot from directly above with perfect symmetry. E-commerce and social media content style.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 44,
            date: "2026-02-13",
            title: "Romantic Dinner Date Scene",
            content: "Romantic restaurant scene for Valentine's campaign. Couple at candlelit table, soft focus background with bokeh lights. Close-up of hands reaching across table, champagne glasses clinking, dessert being shared. Warm amber lighting, rose petals on table. Slow-motion shots of laughter and intimate moments. Text overlay: 'Moments to Remember'. Soothing romantic soundtrack. Shallow depth of field emphasizing connection. 30-second commercial for restaurant group.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 45,
            date: "2026-02-14",
            title: "Jewelry Workshop Process",
            content: "Artisan jewelry making process. Close-ups of skilled hands: sawing precious metal, filing edges, stone setting with loupe, polishing to mirror finish. Time-lapse of piece developing from raw materials to finished product. Macro shots of gemstone inclusions, metal textures. Workshop environment with traditional tools. Text explaining craftsmanship. ASMR sounds of metal work. 2-minute documentary for luxury brand storytelling.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 46,
            date: "2026-02-15",
            title: "Modern Office Workspace",
            content: "Contemporary office workspace photography. Open-plan office with ergonomic furniture, living green walls, collaboration spaces with whiteboards. Employees working in natural light from floor-to-ceiling windows. Meeting in glass-walled conference room. Breakout area with comfortable seating. Tech-enabled meeting rooms. Clean, bright, productive atmosphere. Shot for corporate website and recruitment materials. Professional business environment aesthetic.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 47,
            date: "2026-02-16",
            title: "Adventure Travel Montage",
            content: "Extreme adventure travel montage. Quick cuts between: paragliding over mountains, scuba diving with sharks, rock climbing sheer face, mountain biking downhill, surfing massive waves. GoPro POV shots mixed with drone footage. Adrenaline-pumping soundtrack. Text overlays: 'Push Your Limits', 'Live the Adventure'. Dynamic color grading enhancing blues and greens. 60-second promotional video for adventure travel company.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 48,
            date: "2026-02-17",
            title: "Luxury Watch Macro Details",
            content: "Extreme macro photography of luxury watch complications. Movement details: balance wheel oscillating, gear teeth meshing, jewels reflecting light. Dial textures: guilloché patterns, applied indices, luminescent material. Crown and pusher mechanisms. Case finishing: brushed and polished surfaces. Strap materials: alligator leather texture, metal bracelet links. Shot with specialized macro lenses and focus stacking. Technical watch photography for enthusiast publications.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 49,
            date: "2026-02-18",
            title: "Cooking Show Intro Sequence",
            content: "Energetic cooking show opening sequence. Quick cuts of ingredients being prepared: herbs being chopped, vegetables sliced, meat searing, liquids pouring. Chef's hands working with precision. Time-lapse of dish assembly. Final plated dish beauty shot with steam rising. Show logo animation with kitchen utensil elements. Upbeat cooking-themed soundtrack. Kitchen atmosphere with professional equipment. 15-second intro for YouTube cooking channel.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 50,
            date: "2026-02-19",
            title: "Fashion Model Portfolio",
            content: "Diverse fashion model portfolio shots. Multiple looks: high fashion editorial, commercial smile, dramatic moody, athletic activewear, casual street style. Different lighting setups: studio strobe, natural window, outdoor golden hour. Variety of backgrounds: seamless paper, urban locations, studio sets. Full body, three-quarter, and close-up shots. Professional model card layout with measurements and details. Industry-standard portfolio presentation.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 51,
            date: "2026-02-20",
            title: "Product Assembly Animation",
            content: "3D animated product assembly sequence. Premium furniture item assembling itself piece by piece in stop-motion style. Parts floating into position, screws turning themselves, components clicking together. Exploded view showing all parts before assembly. Text labels highlighting unique features. Clean white background with subtle shadow. Soothing mechanical sounds. 30-second animation for product demonstration and instructions.",
            tool: "Kaiber",
            category: "Animation"
        },
        {
            id: 52,
            date: "2026-02-21",
            title: "Winery Vineyard Tour",
            content: "Serene winery tour documentary. Establishing shots of vineyard rows at sunrise with mist. Grape harvesting by hand. Crushing process with grape juice flowing. Barrel room with oak aging. Tasting room experience with sommelier explaining notes. Bottling line operation. Family history of winemaking. Text overlays explaining terroir and process. Peaceful classical music. 3-minute brand story for premium wine label.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 53,
            date: "2026-02-22",
            title: "Minimalist Product Packaging",
            content: "Minimalist product packaging design photography. Clean shots of packaging: matte cardboard boxes, embossed logos, subtle texture details. Products arranged in grid formation. Unboxing sequence showing layers. Sustainability features: recycled materials, minimal ink usage. Color palette restricted to 2-3 colors. Shot with diffused natural light. Shadows used as design element. Modern e-commerce aesthetic.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 54,
            date: "2026-02-23",
            title: "Yoga Studio Promotional",
            content: "Peaceful yoga studio promotional video. Slow-motion shots of various yoga poses in beautiful studio space. Natural light filtering through large windows. Close-ups of focused faces, flexible bodies, bare feet on mats. Meditation session with candles. Community shots of class practicing together. Text overlays: 'Find Your Balance', 'Mind Body Connection'. Soothing ambient music with nature sounds. 60-second video for studio website and social media.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 55,
            date: "2026-02-24",
            title: "Architectural Blueprint Art",
            content: "Artistic architectural blueprint compositions. Technical drawings overlaid on moody building photographs. Line weights varying for visual interest. Hand-drawn aesthetic with ink textures. Color accents highlighting specific elements. Mixed media look combining technical and artistic. Shot as if on drafting table with tools visible. Creative interpretation of architectural documentation. For design firm marketing and art prints.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 56,
            date: "2026-02-25",
            title: "Coffee Art Time-lapse",
            content: "Satisfying coffee art creation time-lapse. Barista's hands preparing perfect espresso shot, steaming milk to silky texture, pouring latte art designs: heart, rosetta, swan, tulip. Multiple attempts showing progression. Extreme close-up of crema formation. Coffee shop atmosphere in background. Soothing jazz soundtrack. Text explaining milk texture importance. 45-second Instagram Reel content for cafe.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 57,
            date: "2026-02-26",
            title: "Luxury Handbag Details",
            content: "Luxury handbag detail photography. Close-ups of hardware: zipper pulls, lock mechanisms, brand engravings. Leather texture showing grain and quality. Stitching perfection showing craftsmanship. Interior lining materials and pockets. Comparison of different leather types. Shot with studio lighting to highlight details. Commercial fashion photography for brand lookbook and e-commerce.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 58,
            date: "2026-02-27",
            title: "Event Highlights Reel",
            content: "Corporate event highlights reel. Quick cuts of: keynote speaker on stage, audience engagement, networking moments, product demonstrations, award ceremonies, gala dinner, entertainment performances. Mixed footage: handheld dynamic shots, stabilized gimbal, drone establishing shots. Upbeat corporate soundtrack. Logo animations for sponsors. Text overlays with event hashtags. 90-second recap for participants and marketing.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 59,
            date: "2026-02-28",
            title: "Minimalist Branded Merchandise",
            content: "Minimalist branded merchandise photography. Clean shots of company swag: t-shirts with subtle logos, premium notebooks, reusable bottles, tote bags. Arranged in pleasing compositions. Natural lifestyle context: desk setup, gym bag, coffee table. Subtle brand presence without being promotional. Monochromatic color scheme with brand accent color. Shot with natural light for authentic feel. Content for employee recruitment and brand loyalty.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        // March 2026 Prompts (60-90)
        {
            id: 60,
            date: "2026-03-01",
            title: "Smoothie Bowl Creation",
            content: "Satisfying smoothie bowl creation video. Top-down shot of blender making colorful smoothie base. Pouring into bowl creating perfect circle. Arranging fruit toppings in artistic patterns: spiral of berries, banana slices, granola clusters, chia seeds, edible flowers. Final drizzle of honey or nut butter. Time-lapse of entire process. ASMR sounds of cutting and pouring. Bright natural lighting. 30-second recipe video for health food brand.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 61,
            date: "2026-03-02",
            title: "Tech Conference Speaker",
            content: "Dynamic tech conference speaker photography. Presenter on stage with large screen behind showing presentation slides. Engaging with audience, using hand gestures. Multiple angles: from audience perspective, side stage, low angle for drama. Conference branding visible. Crowd shots showing engagement. Professional event photography style with available light mixed with stage lighting. For conference marketing and speaker promotion.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 62,
            date: "2026-03-03",
            title: "Car Wash Satisfaction",
            content: "Satisfying car wash process video. Extreme close-ups of soap suds sliding off paint, rotating brushes cleaning wheels, high-pressure rinse removing dirt, water beading on freshly waxed surface. Time-lapse of entire wash process. Before/after comparisons. Reflections in clean paint. ASMR sounds of water and cleaning. 45-second promotional video for premium car wash service.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 63,
            date: "2026-03-04",
            title: "Luxury Pen Writing",
            content: "Premium writing instrument photography. Close-up of fountain pen nib touching paper, ink flowing onto page. Hand writing calligraphy with smooth motion. Pen details: clip mechanism, barrel materials, cap engraving. Ink bottle with dropper filling pen. Written text showing ink shading and sheen. Shot with controlled lighting to show metallic reflections. Luxury stationery aesthetic for brand catalog.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 64,
            date: "2026-03-05",
            title: "Dance Studio Performance",
            content: "Energetic dance studio performance video. Various dance styles: contemporary, hip-hop, ballet, salsa. Dancers in motion with flowing fabrics. Multiple camera angles: wide shots showing formations, close-ups of footwork and facial expressions. Mirror reflections in studio. Dynamic lighting changes with music. Text overlays with dance style names. Upbeat soundtrack matching dance genres. 2-minute promotional for dance school.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 65,
            date: "2026-03-06",
            title: "Architectural Symmetry",
            content: "Architectural symmetry photography. Perfectly centered shots of building facades, staircases, colonnades, atriums. Reflections creating symmetrical compositions. Leading lines drawing eye to center. Minimalist approach removing distractions. Black and white for emphasis on form. Shot with tilt-shift lens for perfect verticals. Architectural fine art photography style for galleries and publications.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 66,
            date: "2026-03-07",
            title: "Ice Cream Making Process",
            content: "Artisanal ice cream making video. Starting with fresh ingredients: vanilla beans being scraped, fruit purees, chocolate melting. Mixing in industrial ice cream machine. Slow-motion of paddle churning. Scooping perfect spheres. Toppings being added: hot fudge pouring, sprinkles falling, wafer cone being filled. Customer enjoying first bite. Warm summer lighting. 60-second commercial for ice cream parlor.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 67,
            date: "2026-03-08",
            title: "Modern Art Gallery",
            content: "Contemporary art gallery interior photography. Clean white walls with large-scale artwork. Gallery visitors contemplating pieces. Lighting perfectly highlighting artworks. Gallery staff discussing with collectors. Exhibition opening event with champagne. Architectural details of gallery space. Shot with available light for natural feel. Art world aesthetic for gallery promotion and artist portfolios.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 68,
            date: "2026-03-09",
            title: "Baking Process ASMR",
            content: "ASMR baking process video. Close-up sounds of: flour sifting, eggs cracking, whisking batter, dough kneading, oven door closing, crust cracking. Time-lapse of bread rising in oven. Butter melting on warm baked goods. No talking, just natural sounds. Extreme close-ups of textures. Soothing visual and audio experience. 3-minute relaxing content for social media.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 69,
            date: "2026-03-10",
            title: "Luxury Spa Experience",
            content: "Serene luxury spa experience photography. Treatment rooms with soft lighting, steam room with mist, relaxation lounge with herbal tea. Details: rolled towels, essential oil bottles, massage stones. Peaceful atmosphere with natural elements: water features, living walls, natural materials. Minimal human presence focusing on environment. Shot with soft focus and warm tones. For spa website and promotional materials.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 70,
            date: "2026-03-11",
            title: "Product Comparison Slider",
            content: "Interactive product comparison video. Slider effect showing before/after: old product vs new design, problem vs solution, basic vs premium version. Smooth transition revealing improvements. Text highlighting key differences. Side-by-side features comparison. Clean white background for focus on products. Call to action at end. 30-second social media ad format.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 71,
            date: "2026-03-12",
            title: "Urban Exploration Photography",
            content: "Urban exploration aesthetic photography. Abandoned buildings with peeling paint, industrial machinery with rust textures, subway tunnels with graffiti. Moody lighting from limited sources. Atmospheric haze or dust particles. Human element for scale. Dark, gritty color grade with selective color pops. Adventure photography style for editorial and artistic projects.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 72,
            date: "2026-03-13",
            title: "Cocktail Making Masterclass",
            content: "Professional cocktail making tutorial video. Bartender's hands working with precision: measuring spirits, shaking cocktail shaker, straining into glass, garnishing with citrus twist. Multiple cocktail recipes shown in sequence. Close-ups of ice crystallization, condensation on glass. Bar tools organized neatly. Sophisticated bar environment. Upbeat jazz soundtrack. 5-minute masterclass for premium spirits brand.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 73,
            date: "2026-03-14",
            title: "Minimalist Product Studio",
            content: "Minimalist product studio setup photography. Single product on seamless background with perfect lighting. Multiple angles: front, back, side, top, detail. Consistent lighting across all shots. Shadows used as design element. Extreme minimalism focusing on product form. Shot for e-commerce product pages and catalog. Clean, professional, distraction-free aesthetic.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 74,
            date: "2026-03-15",
            title: "Time-lapse Flower Bloom",
            content: "Beautiful time-lapse of flowers blooming. Various flowers: roses opening petals, tulips following light, sunflowers tracking sun. Macro details of pollen, petals unfurling. Natural light changes showing day cycle. Soothing classical music. Text overlay with flower names and meanings. 60-second nature content for wellness brands and social media.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 75,
            date: "2026-03-16",
            title: "Luxury Yacht Interior",
            content: "Luxury yacht interior photography. Master cabin with ocean views, dining area with crystal glasses, lounge with entertainment system, deck with jacuzzi. Materials: teak wood, stainless steel, white leather. Natural light from large windows. Nautical elements tastefully incorporated. Shot with wide-angle lenses to show space. Luxury lifestyle photography for yacht charter marketing.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 76,
            date: "2026-03-17",
            title: "Fashion Styling Transformation",
            content: "Fashion styling transformation video. Subject starting in basic outfit, then multiple layers and accessories added: jacket, scarf, jewelry, bag, shoes. Quick changes showing different style personalities: professional, casual, evening, edgy. Split screen showing before/after. Stylist's hands adjusting details. Upbeat fashion soundtrack. 90-second content for personal stylist promotion.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 77,
            date: "2026-03-18",
            title: "Abstract Liquid Art",
            content: "Abstract liquid art photography. Colors dropped into water creating organic patterns, ink dispersing in liquid, paint swirling on surface, oil and water interactions. Macro shots of bubble formations, color gradients, texture details. Black background for maximum contrast. Artistic expression rather than commercial. Fine art photography for prints and exhibitions.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 78,
            date: "2026-03-19",
            title: "Coffee Roasting Process",
            content: "Coffee roasting process documentary. Green coffee beans entering roaster, color transformation during roast, first crack sound, beans cooling, final roasted color. Roaster adjusting temperature and time. Cupping session for quality control. Close-ups of bean surface oil. Text explaining roast levels. Industrial aesthetic with warm tones. 2-minute educational content for coffee roastery.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 79,
            date: "2026-03-20",
            title: "Modern Library Interior",
            content: "Contemporary library interior photography. Floor-to-ceiling bookshelves, reading nooks with comfortable chairs, study carrels with task lighting, architectural details. People studying and reading naturally. Natural light from skylights. Quiet, contemplative atmosphere. Shot with available light for authentic feel. Architectural and interior design photography for public spaces.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 80,
            date: "2026-03-21",
            title: "Product Launch Countdown",
            content: "Product launch countdown animation. Digital countdown timer with product teasers revealing features daily. 3D product model slowly rotating with partial reveals. Typography animations building anticipation. Email signup form integration. Social media share prompts. Energetic soundtrack building tension. 15-second clips for daily countdown posts leading to launch.",
            tool: "Kaiber",
            category: "Animation"
        },
        {
            id: 81,
            date: "2026-03-22",
            title: "Minimalist Food Photography",
            content: "Minimalist food photography on plain backgrounds. Single ingredient or dish with plenty of negative space. Natural lighting with soft shadows. Composition focusing on texture and color. No props or distractions. Examples: perfect avocado half, crusty bread loaf, whole fish, bunch of herbs. Clean, modern food styling for cookbooks and food blogs.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 82,
            date: "2026-03-23",
            title: "Fitness Challenge Progress",
            content: "Fitness transformation progress video. Daily clips showing workout consistency over 30 days. Body changes visible through consistent framing. Workout variety shown: strength, cardio, flexibility. Nutrition shots: meal prep, healthy eating. Final before/after comparison with metrics. Motivational text overlays. Energetic soundtrack. 60-second inspirational content for fitness coaches.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 83,
            date: "2026-03-24",
            title: "Luxury Hotel Amenities",
            content: "Luxury hotel amenities detail photography. Bathroom products arranged perfectly, robe and slippers presentation, turndown service with chocolate, minibar selection, pillow menu. Each detail shot with luxury aesthetic. Materials: marble, brass, linen, glass. Shot with controlled lighting showing quality. Hospitality photography for 5-star hotel marketing.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 84,
            date: "2026-03-25",
            title: "Candle Making Process",
            content: "Artisanal candle making process video. Wax melting in double boiler, adding fragrance oils, pouring into containers, wick centering. Time-lapse of candles cooling and setting. Label application. Burning shot showing melt pool and flame. Packaging for gifting. Text explaining natural ingredients. Soothing ambient sounds. 90-second brand story for candle company.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 85,
            date: "2026-03-26",
            title: "Architectural Night Photography",
            content: "Architectural night photography with light trails. Building exteriors illuminated, light trails from traffic creating movement, star trails in sky above. Long exposures showing light patterns. Interior lights creating geometric patterns in windows. Blue hour transitions. Shot with tripod for stability. Dramatic cityscape photography for commercial and artistic use.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 86,
            date: "2026-03-27",
            title: "Smooth Product Transitions",
            content: "Smooth product transition video for social media. One product morphs into another through creative transitions: match cut on shape, color wipe, 3D rotation reveal. Multiple products shown in seamless sequence. Call to action at end. Trendy transition effects. Upbeat contemporary music. 15-second format perfect for Instagram Reels and TikTok.",
            tool: "Kaiber",
            category: "Video Generation"
        },
        {
            id: 87,
            date: "2026-03-28",
            title: "Minimalist Watch Collection",
            content: "Minimalist watch collection flat lay. Multiple watch models arranged by color and style. Clean neutral background. Different strap options shown. Details: case sizes, dial colors, complications. Shot from above with even lighting. Composition creates visual rhythm. E-commerce product photography for watch brand website.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 88,
            date: "2026-03-29",
            title: "Restaurant Chef's Table",
            content: "Restaurant chef's table experience video. Chef preparing dishes directly for guests at counter. Interaction between chef and diners. Close-ups of plating techniques. Guests' reactions to dishes. Kitchen atmosphere behind scenes. Text overlays explaining culinary philosophy. Sophisticated ambiance. 2-minute experience video for fine dining restaurant.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 89,
            date: "2026-03-30",
            title: "Abstract Fashion Textures",
            content: "Abstract fashion texture photography. Extreme close-ups of fabric details: lace patterns, knit stitches, embroidery threads, leather grain, sequin reflections. Textures isolated without context. Artistic compositions focusing on pattern and form. Shot with macro lens and controlled lighting. Creative fashion photography for textile designers and magazines.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 90,
            date: "2026-03-31",
            title: "Morning Routine Aesthetic",
            content: "Aesthetic morning routine video. Peaceful wake up with natural light, making bed, morning skincare, healthy breakfast preparation, planning day. Slow, intentional movements. Soft focus and warm tones. No dialogue, ambient sounds only. Text overlays with routine tips. Soothing piano music. 60-second lifestyle content for wellness brands.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        // April 2026 Prompts (91-100)
        {
            id: 91,
            date: "2026-04-01",
            title: "Brand Color Palette",
            content: "Brand color palette visualization. Swatches of primary and secondary brand colors in gradient arrangements. Color applications on various materials: paper, fabric, digital screens. Complementary colors shown together. Text with color codes: HEX, RGB, CMYK. Minimalist design showing color relationships. Shot with consistent lighting for accurate color representation. Brand guideline asset.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 92,
            date: "2026-04-02",
            title: "Product Feature Animation",
            content: "Animated product feature highlights. 3D product model with specific features glowing or highlighting. Text callouts appearing with explanations. Arrows pointing to details. Comparison animations showing benefits. Clean white background. Professional voiceover explaining features. Subtle sound effects. 30-second animation for product demonstration and trade shows.",
            tool: "Kaiber",
            category: "Animation"
        },
        {
            id: 93,
            date: "2026-04-03",
            title: "Luxury Retail Store",
            content: "Luxury retail store interior photography. High-end boutique with curated merchandise displays. Lighting highlighting products. Architectural details of store design. Staff assisting customers. Window displays attracting attention. Materials: marble floors, glass cases, velvet displays. Shot during business hours with natural customer flow. Retail photography for brand portfolio.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 94,
            date: "2026-04-04",
            title: "Time-lapse Cloud Movement",
            content: "Dramatic time-lapse of cloud movement over landscape. Fast-moving clouds creating dynamic skies. Light changes as clouds pass. Landscape below in sharp focus. Different weather patterns: storm clouds, fluffy cumulus, sunset cirrus. Soothing ambient soundtrack. Text explaining cloud types. 45-second nature content for relaxation and background visuals.",
            tool: "RunwayML",
            category: "Video Generation"
        },
        {
            id: 95,
            date: "2026-04-05",
            title: "Minimalist Brand Typography",
            content: "Minimalist brand typography presentations. Logo variations: full logo, icon only, wordmark. Typography scale showing hierarchy. Application examples: business card, letterhead, packaging. Kerning and spacing details. Font pairings demonstrated. Clean white background with subtle shadows. Shot for brand guideline documentation and designer portfolios.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 96,
            date: "2026-04-06",
            title: "Cocktail Garnish Art",
            content: "Creative cocktail garnish preparation video. Bartender crafting intricate garnishes: citrus twists, herb bouquets, edible flowers, custom ice cubes with inclusions. Tools: channel knife, peeler, scissors. Close-ups of finishing touches. Multiple garnish styles for different cocktails. ASMR sounds of cutting. Sophisticated bar setting. 90-second content for premium bar Instagram.",
            tool: "Pika Labs",
            category: "Video Generation"
        },
        {
            id: 97,
            date: "2026-04-07",
            title: "Architectural Model Details",
            content: "Detailed architectural model photography. Scale models with incredible detail: miniature furniture, tiny trees, interior lighting. Shot with macro lens to show craftsmanship. Different scales compared. Model-making tools in background. Creative compositions showing entire model and details. For architectural firm presentations and competitions.",
            tool: "DALL-E 3",
            category: "Image Generation"
        },
        {
            id: 98,
            date: "2026-04-08",
            title: "Social Media Content Calendar",
            content: "Animated social media content calendar visualization. Month view with different content types color-coded. Posts animating into calendar slots. Content examples appearing: images, videos, carousels. Engagement metrics showing. Platform icons indicating where content posts. Smooth transitions between weeks. 30-second explanation for social media agency pitch.",
            tool: "Kaiber",
            category: "Animation"
        },
        {
            id: 99,
            date: "2026-04-09",
            title: "Luxury Leather Goods",
            content: "Luxury leather goods craftsmanship photography. Close-ups of leather cutting, edge painting, hand stitching, hardware attachment. Tools of the trade: skiving knives, mallets, awls. Finished products showing quality. Natural leather textures and aging. Workshop environment with master craftsman. Shot with warm lighting emphasizing craftsmanship. For luxury brand storytelling.",
            tool: "Midjourney",
            category: "Image Generation"
        },
        {
            id: 100,
            date: "2026-04-10",
            title: "Final Product Hero Shot",
            content: "Ultimate product hero shot video. Slow 360-degree rotation of product on invisible stand. Lighting reveals different features as it rotates. Dramatic shadows changing. Close-up details highlighted. Product name and tagline appear elegantly. Cinematic soundtrack building to climax. Perfectly smooth camera movement. 20-second hero video for website homepage and launch events.",
            tool: "RunwayML",
            category: "Video Generation"
        }
    ],

    // AI Tools list
    aiTools: [
        { name: "Midjourney", icon: "fas fa-palette", color: "#1e1e1e" },
        { name: "DALL-E 3", icon: "fas fa-image", color: "#00a67e" },
        { name: "RunwayML", icon: "fas fa-video", color: "#000000" },
        { name: "Pika Labs", icon: "fas fa-film", color: "#9146FF" },
        { name: "Kaiber", icon: "fas fa-play-circle", color: "#00BFFF" }
    ],

    // Prompt categories
    categories: [
        "All",
        "Image Generation", 
        "Video Generation",
        "Animation"
    ]
};

// Helper function to get all prompts combined
function getAllPrompts() {
    return promptConfig.allPrompts;
}

// Helper function to get prompts by category
function getPromptsByCategory(category) {
    const allPrompts = getAllPrompts();
    if (category === "All") return allPrompts;
    return allPrompts.filter(prompt => prompt.category === category);
}

// Helper function to search prompts
function searchPrompts(query) {
    const allPrompts = getAllPrompts();
    const searchQuery = query.toLowerCase().trim();
    
    if (!searchQuery) return allPrompts;
    
    return allPrompts.filter(prompt => {
        if (prompt.content.toLowerCase().includes(searchQuery)) return true;
        if (prompt.title.toLowerCase().includes(searchQuery)) return true;
        if (prompt.tool.toLowerCase().includes(searchQuery)) return true;
        if (prompt.category.toLowerCase().includes(searchQuery)) return true;
        return false;
    });
}