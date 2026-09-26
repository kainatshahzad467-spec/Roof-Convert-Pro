import { ProjectItem, ServiceItem, TestimonialItem, FaqItem } from '../types';

import heroImg from '../assets/images/hero_modern_roof_1790424575231.jpg';
import installImg from '../assets/images/service_roof_installation_1790424591655.jpg';
import replaceImg from '../assets/images/service_roof_solar_metal_1790424604420.jpg';
import repairImg from '../assets/images/service_roof_repair_1790424616014.jpg';
import inspectionImg from '../assets/images/service_roof_inspection_1790424691345.jpg';
import contractorImg from '../assets/images/contractor_roofer_portrait_1790424707348.jpg';
import residentialMetalImg from '../assets/images/gallery_residential_metal_1790424719215.jpg';
import chaletWalkthroughImg from '../assets/images/project_chalet_modern_roof_1790424634306.jpg';

export const ASSETS = {
  hero: heroImg,
  serviceInstall: installImg,
  serviceReplace: replaceImg,
  serviceRepair: repairImg,
  serviceInspection: inspectionImg,
  contractor: contractorImg,
  residentialMetal: residentialMetalImg,
  chaletWalkthrough: chaletWalkthroughImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'roof-installation',
    title: 'Roof Installation',
    shortDesc: 'Build a sturdy, weatherproof roof quality materials skilled installation.',
    fullDesc: 'Complete turnkey architectural roof installation for new constructions and luxury modern extensions. Engineered to withstand category 4 hurricane-force winds and excessive snowfall.',
    iconType: 'installation',
    image: installImg,
    features: ['Precision flashing & drip edges', 'Multi-layer ice & water shields', 'Class 4 impact resistance certification', '50-Year manufacturer warranty'],
    startingPrice: '$8,500',
    turnaroundTime: '2 - 3 Days',
  },
  {
    id: 'roof-replacement',
    title: 'Roof Replacement',
    shortDesc: 'Replace old roofs with long-lasting, durable systems.',
    fullDesc: 'Seamless tear-off and upgrade of outdated asphalt shingles or failing membranes into modern energy-efficient standing seam metal or premium composite architectural tiles.',
    iconType: 'replacement',
    image: replaceImg,
    features: ['Complete old substrate tear-off & recycle', 'R-30 decking thermal insulation upgrade', 'Solar panel integration compatibility', 'Lifetime workmanship guarantee'],
    startingPrice: '$7,200',
    turnaroundTime: '1 - 2 Days',
  },
  {
    id: 'roof-repair',
    title: 'Roof Repair',
    shortDesc: 'Quickly repair leaks, broken shingles, flashing, and storm damage.',
    fullDesc: 'Rapid-response emergency leak mitigation, storm restoration, shingle patching, valley resealing, and chimney counter-flashing repairs to prevent costly interior water damage.',
    iconType: 'repair',
    image: repairImg,
    features: ['24/7 Emergency tarping dispatch', 'Infrared moisture leak detection', 'Color-matched tile & shingle replacement', 'Complete insurance documentation support'],
    startingPrice: '$450',
    turnaroundTime: 'Same Day / 24 Hours',
  },
  {
    id: 'roof-inspection',
    title: 'Roof Inspection',
    shortDesc: 'Thorough inspections to catch issues early and avoid expensive repairs.',
    fullDesc: 'High-definition 4K aerial drone scans coupled with meticulous physical boots-on-roof tactile diagnostics. Receive a comprehensive 24-point engineering assessment report with photos.',
    iconType: 'inspection',
    image: inspectionImg,
    features: ['High-res aerial thermal drone survey', 'Decking & attic structural analysis', 'Comprehensive photo condition report', '100% Free with zero sales pressure'],
    startingPrice: 'Free ($0)',
    turnaroundTime: '1 Hour On-Site',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    year: '2014',
    title: 'Commercial Office Roof Installation',
    category: 'Commercial',
    image: installImg,
    location: 'Downtown Tech Campus',
    duration: '6 Days',
    material: '24-Gauge Matte Charcoal Standing Seam',
    description: 'High-pitch architectural metal installation on a modern steel-framed headquarters with integrated concealed snow guards and commercial gutter systems.',
  },
  {
    id: 'proj-2',
    year: '2024',
    title: 'Modern Residential Roof Replacement',
    category: 'Residential',
    image: residentialMetalImg,
    location: 'West End Heights',
    duration: '2 Days',
    material: 'Architectural Zinc Coated Steel & Cedar Trim',
    description: 'Complete tear-off of 25-year degraded asphalt shingles and replacement with striking matte black standing seam panels paired with warm cedar soffits.',
  },
  {
    id: 'proj-3',
    year: '2026',
    title: 'Luxury Home Metal Roofing',
    category: 'Metal',
    image: heroImg,
    location: 'Pine Crest Estate',
    duration: '4 Days',
    material: 'Interlocking Black Ceramic Flat Tile System',
    description: 'Architect-designed custom clerestory roof line engineered with custom copper valleys, thermal barrier ventilation, and hidden perimeter rainwater channels.',
  },
  {
    id: 'proj-4',
    year: '2016',
    title: 'Industrial Warehouse Roofing System',
    category: 'Commercial',
    image: replaceImg,
    location: 'Gateway Logistics Center',
    duration: '8 Days',
    material: 'TPO Reflective Membrane & Solar Ready Decking',
    description: '45,000 sq ft industrial facility roof overhaul with high-albedo cool roof membrane reducing factory HVAC costs by 32% year-round.',
  },
  {
    id: 'proj-5',
    year: '2018',
    title: 'Apartment Complex Roofing Upgrade',
    category: 'Residential',
    image: repairImg,
    location: 'Oakridge Terrace Communities',
    duration: '5 Days',
    material: 'Class 4 Hail-Resistant Slate Composite',
    description: 'Multi-family residential complex roof upgrade covering 18 units with sound-dampening acoustic underlayment and extended 50-year warranty transferability.',
  },
  {
    id: 'proj-6',
    year: '2016',
    title: 'Storm Damage Roof Restoration',
    category: 'Restoration',
    image: chaletWalkthroughImg,
    location: 'Highland Alpine Valley',
    duration: '3 Days',
    material: 'Heavy-Gauge Snow Load Standing Seam',
    description: 'Post-blizzard structural repair and complete roof restoration, rebuilding damaged truss rafters and sealing against severe freeze-thaw cycles.',
    beforeImage: repairImg,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'James W.',
    role: 'Project Manager',
    rating: 5,
    content: 'Their attention to detail and quality materials instilled confidence. Our new roof looks fantastic and performs even better. The crew cleaned up impeccably every single evening.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    projectType: 'Commercial Metal Installation',
  },
  {
    id: 'test-2',
    name: 'David B.',
    role: 'Business Owner',
    rating: 5,
    content: 'They fixed our roof quickly after the severe hail storm. Great communication, fair upfront prices with no surprises, and absolutely top-notch work. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    projectType: 'Emergency Storm Repair',
  },
  {
    id: 'test-3',
    name: 'Emma R.',
    role: 'Technology Lead',
    rating: 5,
    content: 'The team replaced our roof quickly and professionally, exceeding our expectations with a smooth process from start to finish. The drone inspection video report was eye-opening.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
    projectType: 'Residential Standing Seam',
  },
];

export const STATS = [
  { value: '78%', label: 'On-Time Project Delivery' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '30+', label: 'Cities Served in country' },
  { value: '95%', label: 'Client Satisfaction Rate' },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Process',
    question: 'How long does a typical roof replacement take?',
    answer: 'Most standard residential roof replacements are completed in just 1 to 2 days. Our specialized crews work efficiently with dedicated waste removal haulers so your driveway and yard remain spotless.',
  },
  {
    category: 'Pricing',
    question: 'Are your estimates truly free with no hidden obligations?',
    answer: 'Yes, 100%. We provide a complete 24-point physical and drone inspection report along with an itemized, transparent cost breakdown. There is zero pushy sales tactic or obligation.',
  },
  {
    category: 'Materials',
    question: 'What is the difference between architectural shingles and standing seam metal?',
    answer: 'Architectural shingles offer classic beauty and a 30-year lifespan at an economical price point. Standing seam metal provides unmatched 50+ year longevity, superior hail/fire resistance, and modern architectural aesthetics.',
  },
  {
    category: 'Insurance',
    question: 'Do you help with insurance storm damage claims?',
    answer: 'Yes! Our certified storm specialists document every damaged tile or dented valley with timestamped high-resolution photos and meet directly with your insurance adjuster on-site to ensure full coverage.',
  },
  {
    category: 'Warranty',
    question: 'What warranties come with your roofing systems?',
    answer: 'We provide dual protection: a 50-year non-prorated manufacturer warranty on premium roofing materials plus our exclusive 10-year transferable workmanship guarantee.',
  },
];
