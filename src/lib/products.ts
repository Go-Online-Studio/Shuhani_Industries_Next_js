export interface Product {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  specs: Record<string, string>;
  features: string[];
  images: string[];
}

export const productsList: Product[] = [
  {
    id: "3d-carving",
    name: "3D Wood Carving",
    category: "Wood Artistry",
    shortDesc: "Intricate 3D sculptures and relief carvings with exceptional depth.",
    fullDesc:
      "Bring your artistic vision to life with our high-precision 3D wood carving services. From detailed mythological figures to contemporary abstract art, our advanced multi-axis CNC machines sculpt complex geometries with lifelike detail and hand-finished refinement.",
    specs: {
      Material: "Teak / Oak / MDF / Solid Wood",
      "Max Depth": "Up to 150mm",
      Precision: "±0.01mm",
      Finish: "Hand Sanded / Natural Wax / PU Polish",
    },
    features: [
      "High Definition Detail",
      "Custom Artifact Creation",
      "Restoration Work",
      "Multi-Axis Machining",
    ],
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/3DCarvingProduct.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/3DWoodCarving1.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/3DWoodCarving2.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/3DWoodCarving3.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/3DWoodCarving4.jpg`,
    ],
  },
  {
    id: "2d-carving",
    name: "2D & V-Groove Carving",
    category: "Surface Engraving",
    shortDesc: "Precision flat engraving for signage, panels, and decorative elements.",
    fullDesc:
      "Perfect for doors, cabinet panels, office partitions, and branding elements. Our 2D carving service offers clean, razor-sharp lines and intricate V-groove patterns that add visual interest and sophisticated texture to any flat substrate.",
    specs: {
      Material: "MDF / Acrylic / PVC / Solid Wood",
      Thickness: "Any Sheet Thickness",
      Tooling: "V-Bit / Ball Nose / End Mill",
      Application: "Signage / Furniture / Room Partitions",
    },
    features: [
      "Clean Edge Quality",
      "Vector Precision",
      "Rapid Prototyping",
      "Batch Production",
    ],
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/2DCarvingProduct.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/2D_Carving1.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/2D_Carving2.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/2D_Carving3.jpg`,
    ],
  },
  {
    id: "wave-board",
    name: "Architectural Wave Board",
    category: "3D Wall Panels",
    shortDesc: "Premium CNC-sculpted textures for high-end interiors.",
    fullDesc:
      "Transform plain walls into dynamic architectural focal points. Our Wave Boards are precision-carved using industrial 3-axis CNC technology to create seamless, flowing patterns that interact beautifully with light and shadow in upscale residential and commercial spaces.",
    specs: {
      Material: "MDF / WPC / Solid Wood",
      Thickness: "12mm - 25mm",
      Size: "8ft x 4ft (Customizable)",
      Finish: "Raw / PU Polish / Duco Metallic",
    },
    features: [
      "Seamless Continuity",
      "Water Resistant (WPC)",
      "Acoustic Diffusion",
      "Zero-Joint Installation",
    ],
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/WaveBoardProducts1.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/WaveBoardProducts2.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/WaveBoardProducts3.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/WaveBoard1.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/WaveBoard2.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/WaveBoard3.jpg`,
    ],
  },
  {
    id: "metal-cnc",
    name: "Precision Metal CNC",
    category: "Industrial Machining",
    shortDesc: "Industrial-grade metal machining for critical parts and dies.",
    fullDesc:
      "When sub-millimetre tolerances matter most, trust our high-speed Metal CNC machining. We handle steel, aluminum, brass, and copper with extreme accuracy, suitable for mechanical molds, stamping dies, industrial parts, and premium custom metal grills.",
    specs: {
      Material: "Mild Steel / Aluminum / Brass / Copper",
      Tolerance: "±0.005mm",
      Machining: "Milling / Turning / Drilling",
      Capacity: "Heavy Duty Industrial Production",
    },
    features: [
      "Micron Accuracy",
      "Complex Geometries",
      "Hard Material Machining",
      "CAD/CAM Integration",
    ],
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/MetalCNC_Products1.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/MetalCNC_Products2.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/MetalCNC_Products3.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/MetalCNC1.jpg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/ServicesPageImage/MetalCNC2.jpg`,
    ],
  },
  {
    id: "wooden-legs",
    name: "Wooden Legs & Furniture Turnings",
    category: "Furniture Components",
    shortDesc: "Custom-turned and shaped wooden legs for premium furniture designs.",
    fullDesc:
      "Elevate your furniture range with our premium custom wooden legs. Crafted from high-grade seasoned hardwoods, our legs are machined on automated copy lathes, hand-sanded to a smooth finish, and ready for your paint or polish. Perfect for tables, sofas, and cabinetry.",
    specs: {
      Material: "Teak / Oak / Rosewood / Premium Maple",
      Length: "100mm - 900mm (Customizable)",
      Precision: "±0.1mm",
      Finish: "Raw / Hand-Sanded / Stained / Polished",
    },
    features: [
      "Consistent Profiling",
      "High Structural Strength",
      "Custom Lathe Turning",
      "Sanded Ready for Finish",
    ],
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/productImages/WoodenLegProduct.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/WOODEN_LEGS_ServiceImg.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bannerImage.webp`,
    ],
  },
  {
    id: "custom-fabrication",
    name: "Bespoke Custom Fabrication",
    category: "Custom Projects",
    shortDesc: "End-to-end custom fabrication solutions for architects and designers.",
    fullDesc:
      "Your vision, engineered. Our bespoke custom fabrication service combines multiple CNC techniques, seasoned wood, metal elements, acrylics, and artisan hand-finishing to deliver one-of-a-kind, high-end installations. We support you from initial CAD layouts to final physical delivery.",
    specs: {
      Material: "Wood / Metal / Acrylic / Solid Surfaces",
      Scale: "From Small Prototypes to Large Installations",
      "Design Support": "CAD Drafting & 3D Modeling",
      Finish: "Bespoke Finishing Options",
    },
    features: [
      "Multi-Material Integration",
      "Concept to Reality Support",
      "Prototyping & Testing",
      "Installation Assistance",
    ],
    images: [
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/waveBoardAbout.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bannerImage.webp`,
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/A_DECADE_OF_INNOVATION.webp`,
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return productsList.find((p) => p.id === id);
}

export function getAllProductIds(): string[] {
  return productsList.map((p) => p.id);
}
