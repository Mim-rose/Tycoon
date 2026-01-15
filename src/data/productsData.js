export const products = [
  // ==========================================================
  // 1. REFRIGERATORS (6 Items)
  // ==========================================================
  {
    id: 101,
    slug: "tycoon-a202-black-peony",
    type: "refrigerator",
    name: "Tycoon-A 202L Black Peony",
    price: 32500, // Base price
    variants: [
      { color: "Black Peony", price: 32500, img: "/images/21R.jpg" },
      { color: "Blue Peony", price: 33000, img: "/images/products/fridge-1-blue.jpg" }
    ],
    thumbnail: "/images/21R.jpg",
    categories: ["Refrigerator", "Home Appliance"],
    features: ["Floral Glass Door", "Rapid Cooling", "12 Years Warranty"],
    specifications: { "Volume": "202L", "Type": "Direct Cool", "Gas": "R600a" }
  },
  {
    id: 102,
    slug: "tycoon-side-by-side-550l",
    type: "refrigerator",
    name: "Tycoon Grand 550L Side-by-Side",
    price: 85000,
    variants: [
      { color: "Inox Steel", price: 85000, img: "/images/22R.jpg" },
      { color: "Mirror Black", price: 89000, img: "/images/products/fridge-2-black.jpg" }
    ],
    thumbnail: "/images/22R.jpg",
    categories: ["Refrigerator", "Home Appliance"],
    features: ["Inverter Compressor", "Water Dispenser", "Digital Display"],
    specifications: { "Volume": "550L", "Type": "No Frost", "Finish": "Premium Steel" }
  },
  {
    id: 103,
    slug: "tycoon-double-door-320l-frost-free",
    type: "refrigerator",
    name: "Tycoon 320L Frost Free Double Door",
    price: 45000,
    variants: [
      { color: "Silver Leaf", price: 45000, img: "/images/products/fridge-3-silver.jpg" },
      { color: "Golden Rose", price: 46500, img: "/images/products/fridge-3-gold.jpg" }
    ],
    thumbnail: "/images/products/fridge-3.jpg",
    categories: ["Refrigerator", "Home Appliance"],
    features: ["Convertible Freezer", "Deodorizer", "Moisture Control"],
    specifications: { "Volume": "320L", "Type": "Frost Free", "Shelves": "Tempered Glass" }
  },
  {
    id: 104,
    slug: "tycoon-single-door-185l-ruby",
    type: "refrigerator",
    name: "Tycoon 185L Ruby Red Single Door",
    price: 24000,
    variants: [
      { color: "Ruby Red", price: 24000, img: "/images/products/fridge-4-red.jpg" },
      { color: "Emerald Green", price: 24000, img: "/images/products/fridge-4-green.jpg" }
    ],
    thumbnail: "/images/products/fridge-4.jpg",
    categories: ["Refrigerator", "Home Appliance"],
    features: ["Stabilizer Free", "Fast Ice Making", "Toughened Glass"],
    specifications: { "Volume": "185L", "Star Rating": "5 Star", "Color": "Ruby Red" }
  },
  {
    id: 105,
    slug: "tycoon-chest-freezer-200l",
    type: "refrigerator",
    name: "Tycoon Deep Chest Freezer 200L",
    price: 28000,
    variants: [
      { color: "Arctic White", price: 28000, img: "/images/products/fridge-5.jpg" }
    ],
    thumbnail: "/images/products/fridge-5.jpg",
    categories: ["Refrigerator", "Home Appliance"],
    features: ["Convertible Mode", "Deep Freezing", "LED Lighting"],
    specifications: { "Volume": "200L", "Type": "Chest Freezer", "Cooling": "Super Fast" }
  },
  {
    id: 106,
    slug: "tycoon-mini-fridge-50l",
    type: "refrigerator",
    name: "Tycoon Compact Mini Fridge 50L",
    price: 12500,
    variants: [
      { color: "Metallic Silver", price: 12500, img: "/images/products/fridge-6-silver.jpg" },
      { color: "Matte Black", price: 13000, img: "/images/products/fridge-6-black.jpg" }
    ],
    thumbnail: "/images/products/fridge-6.jpg",
    categories: ["Refrigerator", "Home Appliance"],
    features: ["Low Vibration", "Bottle Rack", "Energy Efficient"],
    specifications: { "Volume": "50L", "Type": "Compact", "Noise": "38dB" }
  },

  // ==========================================================
  // 2. FANS (6 Items)
  // ==========================================================
  {
    id: 201,
    slug: "tycoon-56-dynamic-ceiling-fan",
    type: "fan",
    subCategory: "Ceiling Fan",
    name: "Tycoon 56\" Dynamic Ceiling Fan",
    price: 3800,
    variants: [
      { color: "White", price: 3800, img: "/images/13.jpeg" },
      { color: "Golden Off-White", price: 4200, img: "/images/products/fan-1-gold.jpg" }
    ],
    thumbnail: "/images/13.jpeg",
    categories: ["Fan", "Home Appliance"],
    features: ["99.9% Copper", "Anti-Dust Paint", "High RPM"],
    specifications: { "Size": "56 Inch", "Power": "60W", "Speed": "325 RPM" }
  },
  {
    id: 202,
    slug: "tycoon-16-hi-speed-stand-fan",
    type: "fan",
    subCategory: "Stand Fan",
    name: "Tycoon 16\" Hi-Speed Stand Fan",
    price: 4500,
    variants: [
      { color: "Black-Blue", price: 4500, img: "/images/17.jpeg" },
      { color: "White-Grey", price: 4500, img: "/images/products/fan-2-white.jpg" }
    ],
    thumbnail: "/images/17.jpeg",
    categories: ["Fan", "Home Appliance"],
    features: ["Remote Control", "Adjustable Height", "Silent Motor"],
    specifications: { "Size": "16 Inch", "Modes": "3 Speed", "Timer": "7.5 Hours" }
  },
  {
    id: 203,
    slug: "tycoon-desk-master-table-fan",
    type: "fan",
    subCategory: "Table Fan",
    name: "Tycoon Desk Master Table Fan",
    price: 2900,
    variants: [
      { color: "Blue", price: 2900, img: "/images/products/fan-3-blue.jpg" },
      { color: "Green", price: 2900, img: "/images/products/fan-3-green.jpg" }
    ],
    thumbnail: "/images/products/fan-3.jpg",
    categories: ["Fan", "Home Appliance"],
    features: ["Compact Design", "Overload Protection", "Smooth Oscillation"],
    specifications: { "Size": "12 Inch", "Voltage": "220V", "Blades": "3" }
  },
  {
    id: 204,
    slug: "tycoon-fresh-air-exhaust-9",
    type: "fan",
    subCategory: "Exhaust Fan",
    name: "Tycoon Fresh Air Exhaust Fan",
    price: 1800,
    variants: [
      { color: "Ivory", price: 1800, img: "/images/products/fan-4.jpg" }
    ],
    thumbnail: "/images/products/fan-4.jpg",
    categories: ["Fan", "Home Appliance"],
    features: ["Rust Proof Body", "High Suction", "Louver Design"],
    specifications: { "Size": "9 Inch", "RPM": "2100", "Material": "Metal" }
  },
  {
    id: 205,
    slug: "tycoon-rechargeable-mist-fan",
    type: "fan",
    subCategory: "Rechargeable Fan",
    name: "Tycoon 12\" Rechargeable Mist Fan",
    price: 7500,
    variants: [
      { color: "White", price: 7500, img: "/images/products/fan-5.jpg" }
    ],
    thumbnail: "/images/products/fan-5.jpg",
    categories: ["Fan", "Home Appliance"],
    features: ["Battery Backup 8hrs", "Water Tank", "USB Charging"],
    specifications: { "Battery": "12V", "Tank": "2L", "Charging Time": "12hrs" }
  },
  {
    id: 206,
    slug: "tycoon-wall-mount-tornado-fan",
    type: "fan",
    subCategory: "Wall Fan",
    name: "Tycoon 18\" Wall Mount Tornado Fan",
    price: 3600,
    variants: [
      { color: "Black", price: 3600, img: "/images/products/fan-6.jpg" }
    ],
    thumbnail: "/images/products/fan-6.jpg",
    categories: ["Fan", "Home Appliance"],
    features: ["Space Saving", "Pull Cord Control", "Wide Angle Swing"],
    specifications: { "Size": "18 Inch", "Speed": "1350 RPM", "Blades": "5" }
  },

  // ==========================================================
  // 3. TELEVISION (6 Items)
  // ==========================================================
  {
    id: 301,
    slug: "tycoon-32-google-tv-frameless",
    type: "tv",
    subCategory: "Google TV",
    name: "Tycoon 32\" Frameless Google TV",
    price: 18500,
    variants: [
      { color: "Piano Black", price: 18500, img: "/images/frameless1.webp" }
    ],
    thumbnail: "/images/frameless1.webp",
    categories: ["Television", "Home Appliance"],
    features: ["Voice Search", "Chromecast Built-in", "Bluetooth 5.0"],
    specifications: { "OS": "Google TV", "Resolution": "HD Ready", "HDMI": "2" }
  },
  {
    id: 302,
    slug: "tycoon-43-android-11-smart-tv",
    type: "tv",
    subCategory: "Android TV",
    name: "Tycoon 43\" Android 11 Smart TV",
    price: 32000,
    variants: [
      { color: "Titanium Grey", price: 32000, img: "/images/androidtv1.jpg" }
    ],
    thumbnail: "/images/androidtv1.jpg",
    categories: ["Television", "Home Appliance"],
    features: ["Play Store", "1GB RAM / 8GB ROM", "WiFi Support"],
    specifications: { "OS": "Android 11", "Resolution": "Full HD", "Speaker": "20W" }
  },
  {
    id: 303,
    slug: "tycoon-55-uhd-4k-smart-tv",
    type: "tv",
    subCategory: "4K UHD TV",
    name: "Tycoon 55\" Ultra HD 4K Smart TV",
    price: 55000,
    variants: [
      { color: "Midnight Black", price: 55000, img: "/images/products/tv-3.jpg" }
    ],
    thumbnail: "/images/products/tv-3.jpg",
    categories: ["Television", "Home Appliance"],
    features: ["HDR 10+", "Magic Remote", "Bezel-less Design"],
    specifications: { "Resolution": "3840x2160", "Refresh Rate": "60Hz", "USB": "2" }
  },
  {
    id: 304,
    slug: "tycoon-24-basic-led-tv",
    type: "tv",
    subCategory: "Basic LED TV",
    name: "Tycoon 24\" Eco Bright LED TV",
    price: 9500,
    variants: [
      { color: "Black", price: 9500, img: "/images/products/tv-4.jpg" }
    ],
    thumbnail: "/images/products/tv-4.jpg",
    categories: ["Television", "Home Appliance"],
    features: ["Energy Saving", "Wide View Angle", "USB Movie Play"],
    specifications: { "Type": "LED", "Ports": "HDMI, VGA", "Speaker": "Internal" }
  },
  {
    id: 305,
    slug: "tycoon-65-qled-premium-smart-tv",
    type: "tv",
    subCategory: "QLED TV",
    name: "Tycoon 65\" Premium QLED 4K TV",
    price: 98000,
    variants: [
      { color: "Carbon Silver", price: 98000, img: "/images/products/tv-5.jpg" }
    ],
    thumbnail: "/images/products/tv-5.jpg",
    categories: ["Television", "Home Appliance"],
    features: ["Quantum Dot Tech", "Dolby Vision", "Hands-free Voice"],
    specifications: { "Panel": "QLED", "Audio": "30W Dolby Atmos", "Ports": "3 HDMI" }
  },
  {
    id: 306,
    slug: "tycoon-75-ultra-theatre-tv",
    type: "tv",
    subCategory: "4K UHD TV",
    name: "Tycoon 75\" Giant Ultra Theatre TV",
    price: 145000,
    variants: [
      { color: "Obsidian Black", price: 145000, img: "/images/products/tv-6.jpg" }
    ],
    thumbnail: "/images/products/tv-6.jpg",
    categories: ["Television", "Home Appliance"],
    features: ["Cinema Mode", "Local Dimming", "AI Picture Pro"],
    specifications: { "Size": "75 Inch", "OS": "Google TV", "Refresh": "120Hz" }
  },

  // ==========================================================
  // 4. RICE COOKERS (6 Items)
  // ==========================================================
  {
    id: 401,
    slug: "tycoon-2-8l-double-pot-rice-cooker",
    type: "rice-cooker",
    name: "Tycoon 2.8L Double Pot Rice Cooker",
    price: 3200,
    variants: [
      { color: "Classic White", price: 3200, img: "/images/whitecook1.png" },
      { color: "Floral Pink", price: 3400, img: "/images/products/rc-1-pink.jpg" }
    ],
    thumbnail: "/images/whitecook1.png",
    categories: ["Rice Cooker", "Kitchen Appliance"],
    features: ["Non-stick Inner Pot", "Auto-Keep Warm", "Steamer Tray"],
    specifications: { "Capacity": "2.8L", "Power": "1000W", "Pot Type": "Double" }
  },
  {
    id: 402,
    slug: "tycoon-1-8l-single-pot-cooker",
    type: "rice-cooker",
    name: "Tycoon 1.8L Single Pot Rice Cooker",
    price: 2400,
    variants: [
      { color: "Stainless Steel", price: 2400, img: "/images/RedCooker1.png" }
    ],
    thumbnail: "/images/RedCooker1.png",
    categories: ["Rice Cooker", "Kitchen Appliance"],
    features: ["Compact Size", "One-Touch Button", "Stainless Steel Lid"],
    specifications: { "Capacity": "1.8L", "Power": "700W", "Pot Type": "Single" }
  },
  {
    id: 403,
    slug: "tycoon-digital-fuzzy-logic-cooker",
    type: "rice-cooker",
    name: "Tycoon 1.8L Digital Fuzzy Logic Cooker",
    price: 5500,
    variants: [
      { color: "Pearl Black", price: 5500, img: "/images/products/rc-3.jpg" }
    ],
    thumbnail: "/images/products/rc-3.jpg",
    categories: ["Rice Cooker", "Kitchen Appliance"],
    features: ["Multiple Menus", "Preset Timer", "LED Display"],
    specifications: { "Functions": "10-in-1", "Pot": "Ceramic Coated", "Timer": "24hr" }
  },
  {
    id: 404,
    slug: "tycoon-3l-heavy-duty-cooker",
    type: "rice-cooker",
    name: "Tycoon 3.0L Heavy Duty Rice Cooker",
    price: 3800,
    variants: [
      { color: "Industrial Silver", price: 3800, img: "/images/products/rc-4.jpg" }
    ],
    thumbnail: "/images/products/rc-4.jpg",
    categories: ["Rice Cooker", "Kitchen Appliance"],
    features: ["Reinforced Body", "Dual Heating Element", "Safety Fuse"],
    specifications: { "Capacity": "3.0L", "Power": "1100W", "Weight": "3.5kg" }
  },
  {
    id: 405,
    slug: "tycoon-mini-1l-travel-cooker",
    type: "rice-cooker",
    name: "Tycoon 1.0L Mini Travel Rice Cooker",
    price: 1950,
    variants: [
      { color: "Sky Blue", price: 1950, img: "/images/products/rc-5-blue.jpg" },
      { color: "Mint Green", price: 1950, img: "/images/products/rc-5-green.jpg" }
    ],
    thumbnail: "/images/products/rc-5.jpg",
    categories: ["Rice Cooker", "Kitchen Appliance"],
    features: ["Portable Design", "Perfect for 1-2 people"],
    specifications: { "Capacity": "1.0L", "Power": "400W", "Weight": "1.2kg" }
  },
  {
    id: 406,
    slug: "tycoon-4-5l-commercial-cooker",
    type: "rice-cooker",
    name: "Tycoon 4.5L Commercial Rice Cooker",
    price: 6200,
    variants: [
      { color: "Steel Grey", price: 6200, img: "/images/products/rc-6.jpg" }
    ],
    thumbnail: "/images/products/rc-6.jpg",
    categories: ["Rice Cooker", "Kitchen Appliance"],
    features: ["Large Scale Cooking", "Thermal Protection", "Durable Handles"],
    specifications: { "Capacity": "4.5L", "Power": "1500W", "Serves": "15-20 People" }
  },

  // ==========================================================
  // 5. MIXER GRINDERS (6 Items)
  // ==========================================================
  {
    id: 501,
    slug: "tycoon-750w-pro-mixer-grinder",
    type: "mixer-grinder",
    name: "Tycoon 750W Pro Mixer Grinder",
    price: 4200,
    variants: [
      { color: "Cherry Red", price: 4200, img: "/images/grinder01.jpg" },
      { color: "Cool White", price: 4000, img: "/images/products/mg-1-white.jpg" }
    ],
    thumbnail: "/images/grinder01.jpg",
    categories: ["Mixer Grinder", "Kitchen Appliance"],
    features: ["3 SS Jars", "Overload Protection", "Pulse Function"],
    specifications: { "Motor": "750W", "RPM": "18000", "Jars": "3" }
  },
  {
    id: 502,
    slug: "tycoon-1000w-heavy-duty-grinder",
    type: "mixer-grinder",
    name: "Tycoon 1000W Heavy Duty Grinder",
    price: 6800,
    variants: [
      { color: "Metallic Black", price: 6800, img: "/images/heavygrin.jpg" }
    ],
    thumbnail: "/images/heavygrin.jpg",
    categories: ["Mixer Grinder", "Kitchen Appliance"],
    features: ["Stone Grinding Tech", "Double Ball Bearing"],
    specifications: { "Motor": "1000W Copper", "Jars": "4 Jars", "Warranty": "2 Years" }
  },
  {
    id: 503,
    slug: "tycoon-bullet-blender-400w",
    type: "mixer-grinder",
    name: "Tycoon Smart Bullet Blender",
    price: 3500,
    variants: [
      { color: "Black-Silver", price: 3500, img: "/images/products/mg-3.jpg" }
    ],
    thumbnail: "/images/products/mg-3.jpg",
    categories: ["Mixer Grinder", "Kitchen Appliance"],
    features: ["Smoothie Maker", "One-Push Operation"],
    specifications: { "Power": "400W", "Cups": "2 Cups", "Blade": "SS Extractor" }
  },
  {
    id: 504,
    slug: "tycoon-3-in-1-juicer-mixer",
    type: "mixer-grinder",
    name: "Tycoon 3-in-1 Juicer Mixer Grinder",
    price: 4900,
    variants: [
      { color: "White-Orange", price: 4900, img: "/images/products/mg-4.jpg" }
    ],
    thumbnail: "/images/products/mg-4.jpg",
    categories: ["Mixer Grinder", "Kitchen Appliance"],
    features: ["Centrifugal Juicer", "Anti-Drip Spout"],
    specifications: { "Power": "500W", "Type": "Juicer Mixer", "Jars": "2" }
  },
  {
    id: 505,
    slug: "tycoon-eco-550w-mixer",
    type: "mixer-grinder",
    name: "Tycoon Eco-Series 550W Mixer",
    price: 2800,
    variants: [
      { color: "Blue", price: 2800, img: "/images/products/mg-5-blue.jpg" },
      { color: "Pink", price: 2800, img: "/images/products/mg-5-pink.jpg" }
    ],
    thumbnail: "/images/products/mg-5.jpg",
    categories: ["Mixer Grinder", "Kitchen Appliance"],
    features: ["Budget Friendly", "Sturdy Handles"],
    specifications: { "Power": "550W", "Jars": "2 Jars", "Material": "ABS Plastic" }
  },
  {
    id: 506,
    slug: "tycoon-nutri-blend-max",
    type: "mixer-grinder",
    name: "Tycoon Nutri-Blend Max",
    price: 7200,
    variants: [
      { color: "Champagne Gold", price: 7200, img: "/images/products/mg-6.jpg" }
    ],
    thumbnail: "/images/products/mg-6.jpg",
    categories: ["Mixer Grinder", "Kitchen Appliance"],
    features: ["Nutrient Extraction", "Super Silent", "Touch Interface"],
    specifications: { "Power": "1200W", "Speed": "22000 RPM", "Modes": "Smart Connect" }
  },

  // ==========================================================
  // 6. PRESSURE COOKERS (6 Items)
  // ==========================================================
  {
    id: 601,
    slug: "tycoon-5l-hard-anodized-cooker",
    type: "pressure-cooker",
    name: "Tycoon 5L Hard Anodized Pressure Cooker",
    price: 2600,
    variants: [
      { color: "Charcoal Black", price: 2600, img: "/images/pres1.png" }
    ],
    thumbnail: "/images/pres1.png",
    categories: ["Pressure Cooker", "Kitchen Appliance"],
    features: ["Induction Bottom", "Food Grade Gasket", "Safety Valve"],
    specifications: { "Volume": "5L", "Material": "Hard Anodized", "Type": "Outer Lid" }
  },
  {
    id: 602,
    slug: "tycoon-3l-aluminum-cooker",
    type: "pressure-cooker",
    name: "Tycoon 3L Classic Aluminum Cooker",
    price: 1800,
    variants: [
      { color: "Silver", price: 1800, img: "/images/aluminiumcook1.png" }
    ],
    thumbnail: "/images/aluminiumcook1.png",
    categories: ["Pressure Cooker", "Kitchen Appliance"],
    features: ["Pure Aluminum", "Quick Heating", "Weight Valve"],
    specifications: { "Volume": "3L", "Material": "Aluminum", "Type": "Inner Lid" }
  },
  {
    id: 603,
    slug: "tycoon-electric-pressure-cooker-6l",
    type: "pressure-cooker",
    name: "Tycoon Multi-Cook Electric Pressure Cooker",
    price: 7800,
    variants: [
      { color: "Brushed Steel", price: 7800, img: "/images/products/pc-3.jpg" }
    ],
    thumbnail: "/images/products/pc-3.jpg",
    categories: ["Pressure Cooker", "Kitchen Appliance"],
    features: ["15 Preset Menus", "Auto Pressure Release", "Keep Warm"],
    specifications: { "Volume": "6L", "Power": "1000W", "Control": "Digital" }
  },
  {
    id: 604,
    slug: "tycoon-ss-cooker-combo-set",
    type: "pressure-cooker",
    name: "Tycoon Stainless Steel Cooker Combo (3L + 5L)",
    price: 5200,
    variants: [
      { color: "Polished Silver", price: 5200, img: "/images/products/pc-4.jpg" }
    ],
    thumbnail: "/images/products/pc-4.jpg",
    categories: ["Pressure Cooker", "Kitchen Appliance"],
    features: ["Interchangeable Lid", "Tri-ply Bottom", "Rust Proof"],
    specifications: { "Package": "2 Pots, 1 Lid", "Material": "SS 304", "Base": "Induction" }
  },
  {
    id: 605,
    slug: "tycoon-8l-jumbo-cooker",
    type: "pressure-cooker",
    name: "Tycoon 8L Jumbo Family Cooker",
    price: 3500,
    variants: [
      { color: "Aluminum Silver", price: 3500, img: "/images/products/pc-5.jpg" }
    ],
    thumbnail: "/images/products/pc-5.jpg",
    categories: ["Pressure Cooker", "Kitchen Appliance"],
    features: ["Extra Large Capacity", "Stay Cool Handles"],
    specifications: { "Volume": "8L", "Type": "Outer Lid", "Use": "Large Family" }
  },
  {
    id: 606,
    slug: "tycoon-handi-shape-pressure-cooker",
    type: "pressure-cooker",
    name: "Tycoon 5L Handi-Shape Cooker",
    price: 3100,
    variants: [
      { color: "Black Anodized", price: 3100, img: "/images/products/pc-6-black.jpg" },
      { color: "Maroon", price: 3200, img: "/images/products/pc-6-maroon.jpg" }
    ],
    thumbnail: "/images/products/pc-6.jpg",
    categories: ["Pressure Cooker", "Kitchen Appliance"],
    features: ["Unique Handi Shape", "Easy Stirring", "Elegant Look"],
    specifications: { "Volume": "5L", "Body": "Bulged Shape", "Bottom": "Induction Friendly" }
  }
];