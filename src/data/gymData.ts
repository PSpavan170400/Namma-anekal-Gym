import { FacilityHighlight, FAQItem, GalleryItem, MembershipPlan, Program, Testimonial, Trainer } from '../types';

export const gymInfo = {
  name: "Ironstone Athletic Club",
  shortName: "Ironstone",
  tagline: "Forged in Discipline. Built for Performance.",
  heroHeadline: "THE INDEPENDENT STANDARD IN STRENGTH & HUMAN PERFORMANCE",
  heroSubheadline: "An 18,000 sq. ft. precision-equipped athletic club built for dedicated lifters, athletes, and anyone who refuses to settle for generic corporate fitness.",
  establishedYear: "2018",
  address: {
    street: "410 Ironworks Boulevard",
    district: "Warehouse Arts District",
    city: "Austin",
    state: "TX",
    zip: "78702",
    full: "410 Ironworks Boulevard, Warehouse Arts District, Austin, TX 78702",
  },
  contact: {
    phone: "+1 (512) 555-4766",
    displayPhone: "(512) 555-IRON",
    email: "join@ironstoneathletic.com",
    supportEmail: "hello@ironstoneathletic.com",
    whatsapp: "15125554766",
    whatsappMessage: "Hi Ironstone Team! I would like to enquire about a free trial pass and membership details.",
  },
  hours: [
    { days: "Monday – Friday", time: "5:00 AM – 11:00 PM", notes: "Staffed 6:00 AM – 9:00 PM" },
    { days: "Saturday", time: "6:00 AM – 9:00 PM", notes: "Staffed 7:00 AM – 7:00 PM" },
    { days: "Sunday", time: "7:00 AM – 8:00 PM", notes: "Staffed 8:00 AM – 5:00 PM" },
    { days: "VIP 24/7 Keyfob Access", time: "Available on Premium Plans", notes: "Biometric security turnstile" }
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    x: "https://x.com",
  },
  stats: [
    { value: "18,000", unit: "sq ft", label: "Training Space" },
    { value: "14", unit: "+", label: "Elite Coaches" },
    { value: "8", unit: "Lanes", label: "Competition Platforms" },
    { value: "98.4%", unit: "", label: "Goal Achievement Rate" }
  ]
};

export const programsData: Program[] = [
  {
    id: "personal-training",
    title: "Personal Training",
    shortDescription: "One-on-one tailored periodization and biometric coaching for rapid, injury-free body transformation.",
    description: "Work directly with a certified CSCS/NASM master coach. Every session includes personalized movement prep, data-driven overload tracking, nutritional guidance, and dedicated recovery protocols designed around your specific physiology and timeline.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    intensity: "Custom / All Levels",
    duration: "60-minute private sessions",
    targetAudience: "Individuals wanting laser-focused coaching, corrective movement, or maximum progress velocity.",
    benefits: [
      "Customized 12-week progressive overload plan",
      "Full InBody 770 body composition analysis & tracking",
      "Corrective exercise screening & joint mobility work",
      "Dedicated nutrition & macronutrient roadmaps",
      "Direct coach chat messaging between sessions"
    ],
    ctaText: "Book Free PT Consultation"
  },
  {
    id: "strength-training",
    title: "Strength Training",
    shortDescription: "Master compound movements and build raw, functional horsepower on Olympic-grade iron.",
    description: "Our flagship strength program bridges powerlifting, strongman fundamentals, and kinetic athletic force development. Train on custom Eleiko and Rogue racks with calibrated competition plates, Texas power bars, and specialty barbells.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    duration: "45–75 mins",
    targetAudience: "Lifters seeking systematic strength gains, barbell mastery, and bulletproof musculoskeletal density.",
    benefits: [
      "Structured periodized phases (Hypertrophy, Strength, Peaking)",
      "Technical coaching on squat, bench press, deadlift, and overhead press",
      "Access to specialty bars (Safety Squat, Swiss, Trap Bar, Cambered)",
      "Chalk stations, lifting straps, and competition belt loaners",
      "Velocity-based barbell tracking telemetry"
    ],
    ctaText: "Explore Strength Program"
  },
  {
    id: "weight-training",
    title: "Weight Training & Hypertrophy",
    shortDescription: "Sculpt lean mass and optimize muscle architecture through precision biomechanics.",
    description: "Designed for physique enhancement and aesthetic bodybuilding. Combine heavy free weights with biomechanically convergent plate-loaded machines (Prime Fitness, Arsenal Strength, Hammer Strength) to isolate target muscles with minimal joint wear.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    duration: "50–65 mins",
    targetAudience: "Athletes focused on lean mass accrual, symmetrical muscular development, and joint-friendly training.",
    benefits: [
      "Custom angle selector machines for peak contractile resistance",
      "Dumbbell array scaling seamlessly from 5 lbs to 150 lbs",
      "Volume, frequency, and deload cycle management",
      "Isolative hypertrophy techniques (drop-sets, myo-reps, tempo control)",
      "Post-session hypertrophy nutritional advice"
    ],
    ctaText: "Start Hypertrophy Training"
  },
  {
    id: "cardio-conditioning",
    title: "Cardio & Metabolic Conditioning",
    shortDescription: "Elevate your VO2 max, torch calories, and build an unbreakable cardiovascular engine.",
    description: "Say goodbye to boring treadmills. Our conditioning floor pairs Concept2 Rowers, SkiErgs, Echo Bikes, Woodway Curve treadmills, and sled runs into high-efficiency energy-system workouts that keep heart rates elevated and lungs resilient.",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    intensity: "Moderate to High",
    duration: "30–45 mins",
    targetAudience: "Anyone aiming to shred body fat, improve heart health, and build sustained athletic stamina.",
    benefits: [
      "Zone 2 aerobic base building and anaerobic threshold intervals",
      "Zero-impact curved treadmills that protect knees and hips",
      "Real-time heart rate telemetry screen pairing",
      "Enhanced recovery speed between demanding training days",
      "Significant metabolic afterburn (EPOC)"
    ],
    ctaText: "Boost Your Engine"
  },
  {
    id: "functional-training",
    title: "Functional Training & Turf",
    shortDescription: "Agility, rotational power, kettlebells, and plyometrics on our 40-yard indoor turf.",
    description: "Real-world movement that translates outside the gym. Utilize farmer walk handles, heavy Bulgarian bags, medicine balls, battle ropes, and prowler sleds to build multi-planar athletic power that carries over to sports, work, and everyday life.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    intensity: "High",
    duration: "45–60 mins",
    targetAudience: "Recreational athletes, weekend warriors, and those seeking functional resilience and agility.",
    benefits: [
      "40-yard sprint track with heavy Prowler sleds",
      "Kettlebell complex training (snatches, swings, get-ups)",
      "Core rotational power and deceleration mechanics",
      "Balance, proprioception, and injury-proofing drills",
      "Full mobility prep and dynamic movement screening"
    ],
    ctaText: "Train Functionally"
  },
  {
    id: "group-training",
    title: "Group Training & Squad Camps",
    shortDescription: "High-voltage group camaraderie, expert coach supervision, and infectious team energy.",
    description: "Train alongside like-minded individuals in an electric team atmosphere. Group sessions are capped at 16 members to guarantee hands-on form coaching, calibrated pacing, and zero bottlenecking at equipment stations.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    intensity: "Very High",
    duration: "50 mins",
    targetAudience: "Members who thrive on squad energy, accountability, friendly competition, and high-energy music.",
    benefits: [
      "Capped class sizes (maximum 16 athletes per session)",
      "Dynamic daily programming so no two workouts are identical",
      "Scaled modifications for every fitness tier",
      "Live DJ sound system and performance lighting",
      "Dedicated member community challenges & social events"
    ],
    ctaText: "Join a Group Session"
  }
];

export const membershipPlansData: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: 59,
    annualPrice: 49,
    duration: "Month-to-month billing",
    description: "Ideal for self-directed athletes looking for unrestricted access to premier weight rooms and cardio equipment.",
    isRecommended: false,
    features: [
      "Full access during all staffed club hours",
      "Unlimited free weights & competition racks",
      "Cardio & metabolic training deck access",
      "Standard locker room & shower facilities",
      "Complimentary Wi-Fi and mobile app workout log",
      "1 complimentary InBody scan upon joining"
    ],
    excludedFeatures: [
      "24/7 keyfob after-hours access",
      "Unlimited group athletic training classes",
      "Infrared sauna & contrast recovery plunge",
      "Free monthly guest passes"
    ],
    ctaText: "Select Basic Plan"
  },
  {
    id: "standard",
    name: "Standard",
    monthlyPrice: 99,
    annualPrice: 79,
    duration: "Most popular choice",
    description: "The complete athletic package combining full equipment access, group classes, and recovery amenities.",
    isRecommended: true,
    badge: "Most Popular",
    features: [
      "Full club access during all operational hours",
      "Unlimited Group Training & Squad Camp sessions",
      "40-yard indoor turf & sled track privileges",
      "Access to Infrared Cedar Saunas",
      "2 Free Monthly Guest Passes for friends",
      "Quarterly InBody 770 body composition scans",
      "Discounted member rate for 1-on-1 coaching",
      "Complimentary towel service & cold brew tap"
    ],
    excludedFeatures: [
      "24/7 keyfob after-hours biometric access",
      "Dedicated private executive locker"
    ],
    ctaText: "Claim Standard Membership"
  },
  {
    id: "premium",
    name: "Premium VIP",
    monthlyPrice: 149,
    annualPrice: 125,
    duration: "The ultimate performance tier",
    description: "Uncompromised 24/7 access, full group classes, cold plunge contrast therapy, and dedicated personal coach check-ins.",
    isRecommended: false,
    badge: "All-Inclusive",
    features: [
      "24/7 biometric keyfob access 365 days a year",
      "Unlimited Group Training, HIIT & Strength Camps",
      "Full Contrast Recovery: Cold Plunge & Infrared Sauna",
      "Monthly 1-on-1 private coaching check-in & programming",
      "Monthly InBody 770 composition assessment",
      "4 Free Monthly Guest Passes",
      "Permanent private reserved executive locker",
      "Complimentary pre-workout & post-workout shakes",
      "15% off pro shop merchandise and partner brands"
    ],
    ctaText: "Join as VIP Member"
  }
];

export const trainersData: Trainer[] = [
  {
    id: "marcus-sterling",
    name: "Marcus \"Vance\" Sterling",
    role: "Head of Strength & Conditioning",
    specialization: "Barbell Mechanics & Power Development",
    experience: "12+ Years Experience",
    certifications: ["CSCS (Certified Strength & Conditioning Specialist)", "USAW Senior Coach", "EXOS Performance Coach"],
    biography: "Former NCAA Division I collegiate strength coach who has trained elite sprinters, collegiate football linemen, and competitive powerlifters. Vance focuses on structural balance, pristine barbell bar paths, and building an injury-proof foundation.",
    photo: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    quote: "True strength isn't rushed. We build the architecture first, then load the weight.",
    specialties: ["Powerlifting", "Olympic Squat Mechanics", "Concentric Speed Training", "Velocity Profiling"]
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Senior Coach & Mobility Director",
    specialization: "Olympic Weightlifting & Joint Longevity",
    experience: "9+ Years Experience",
    certifications: ["USAW National Coach Level 2", "FRC (Functional Range Conditioning)", "NASM Master Trainer"],
    biography: "Elena spent 8 years competing at national Olympic weightlifting championships before dedicating her life to coaching. She specializes in deep hip and shoulder mobility, snatch efficiency, and bulletproofing joints against tendonitis.",
    photo: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    quote: "If you cannot control the position with zero weight, you have no business loading it.",
    specialties: ["Snatch & Clean & Jerk", "Thoracic Mobility", "Hip Rotational Health", "Female Athletic Lifecycles"]
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Hypertrophy & Physique Specialist",
    specialization: "Muscular Symmetry & Sports Nutrition",
    experience: "8+ Years Experience",
    certifications: ["CISSN (Certified Sports Nutritionist)", "NASM-CPT", "Biomechanics Specialist"],
    biography: "David blends strict biomechanical line-of-pull science with sustainable nutritional strategies. Having coached over 300 transformation clients, he removes the guesswork from muscle gain, body recomposition, and metabolic health.",
    photo: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
    quote: "Hypertrophy is precision engineering: control the eccentric, match the resistance curve, eat to recover.",
    specialties: ["Body Recomposition", "Macronutrient Periodization", "Joint-Friendly Hypertrophy", "Posing & Symmetry"]
  },
  {
    id: "maya-almansoor",
    name: "Maya Al-Mansoor",
    role: "Lead Functional & Conditioning Coach",
    specialization: "Metabolic Engine & Turf Agility",
    experience: "7+ Years Experience",
    certifications: ["CrossFit Level 2", "FMS Level 2 (Functional Movement Screen)", "ACE-CPT"],
    biography: "A dynamic force on the turf, Maya programs high-tempo functional sessions that leave members feeling energized and empowered. Her background in track & field and competitive kettlebell sport brings unmatched cadence and motivation.",
    photo: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80",
    quote: "Show up with intent. The energy you bring to the turf is the energy you carry into the world.",
    specialties: ["Kettlebell Complexes", "Sled & Sprint Mechanics", "Metabolic Conditioning", "Core Anti-Rotation"]
  },
  {
    id: "jordan-blake",
    name: "Jordan Blake",
    role: "Athletic Performance & Combat Fitness",
    specialization: "Rotational Power & Conditioning",
    experience: "10+ Years Experience",
    certifications: ["NSCA-CPT", "USA Boxing Certified Coach", "TRX Master Instructor"],
    biography: "Jordan bridges athletic strength with tactical combat conditioning. His sessions emphasize multi-directional movement, reactive agility, striking biomechanics, and explosive endurance for athletes at all stages.",
    photo: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    quote: "Discipline is doing what needs to be done, even when motivation has left the room.",
    specialties: ["Combat Agility", "Rotational Force", "Plyometrics", "Cardiovascular Resilience"]
  },
  {
    id: "sarah-jenkins",
    name: "Dr. Sarah Jenkins, DPT",
    role: "Sports Physical Therapist & Recovery Lead",
    specialization: "Injury Prevention & Return-to-Sport",
    experience: "11+ Years Experience",
    certifications: ["Doctor of Physical Therapy (DPT)", "OCS (Orthopedic Clinical Specialist)", "NASM-CES"],
    biography: "Sarah works closely with our personal training team to provide on-site movement assessments, dry needling, and rehabilitation for back pain, shoulder impingements, and ACL post-op athletic return.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    quote: "Pain is a signal, not a life sentence. We adapt, rebuild the tissue, and make you more durable than before.",
    specialties: ["Spine & Lumbar Mechanics", "Rotator Cuff Rehab", "Knee Stability", "Contrast Recovery Protocols"]
  }
];

export const facilitiesData: FacilityHighlight[] = [
  {
    id: "olympic-platforms",
    title: "Competition Lifting Platforms",
    description: "8 dedicated Olympic lifting stations recessed into sound-dampening flooring, outfitted with competition Eleiko barbells and calibrated bumper plates.",
    specs: ["Eleiko IWF Certified Bars", "Chalk Bowls & Belt Stations", "Zero Vibrational Bounce Floor", "Rogue Monster Series Racks"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "indoor-turf",
    title: "40-Yard Sprint & Sled Turf",
    description: "High-density cushioned athletic turf track engineered for sprint mechanics, heavy prowler pushes, kettlebell carries, and explosive agility drills.",
    specs: ["Commercial Prowlers & Sleds", "Yardage Measurement Markers", "Farmer Walk Handles", "Plyometric Wooden & Foam Boxes"],
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "contrast-recovery",
    title: "Contrast Therapy & Recovery Lounge",
    description: "Full modern recovery suite featuring twin dry cedar infrared saunas and commercial cold plunge tubs chilled to 45°F for rapid cellular recovery.",
    specs: ["Infrared Cedar Saunas (up to 195°F)", "Cold Plunges with filtration", "Normatec Compression Sleeves", "Theragun Perfusion Stations"],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "plate-loaded",
    title: "Heavy Iron & Custom Machines",
    description: "Carefully curated array of plate-loaded machines with biomechanically convergent paths from Prime Fitness, Arsenal Strength, and Hammer Strength.",
    specs: ["Dumbbells from 5 lbs up to 150 lbs", "Dual Adjustable Pulley Cables", "Pendulum & Belt Squats", "Specialty Grip Attachments"],
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "cardio-deck",
    title: "Metabolic Cardio Loft",
    description: "An open cardio deck featuring non-motorized Woodway curves, Concept2 ergs, and Assault bikes facing floor-to-ceiling industrial glass.",
    specs: ["Concept2 Rowers & SkiErgs", "Assault AirBikes", "Woodway Curve Treadmills", "StairMasters & Spin Bikes"],
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "executive-lockers",
    title: "Executive Locker Rooms & Amenities",
    description: "Pristine locker facilities with rain showers, eucalyptus towel service, Malin+Goetz grooming essentials, and blow-dry vanity bars.",
    specs: ["Electronic Keypad Lockers", "Private Tile Rain Showers", "Fresh Chilled Towels", "Cold Brew Coffee on Tap"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
  }
];

export const galleryItemsData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy Barbell Training Bay",
    category: "strength",
    categoryLabel: "Strength & Free Weights",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    caption: "Competition-grade Eleiko plates and power racks built for maximum loads."
  },
  {
    id: "gal-2",
    title: "40-Yard Athletic Turf Sprint Track",
    category: "functional",
    categoryLabel: "Functional & Turf",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    caption: "High-density indoor turf engineered for sleds, farmers walks, and agility drills."
  },
  {
    id: "gal-3",
    title: "Squad Conditioning & Group Camp",
    category: "group",
    categoryLabel: "Group Sessions",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    caption: "High-energy group training capped at 16 athletes with hands-on coaching."
  },
  {
    id: "gal-4",
    title: "Precision Dumbbell Array (Up to 150 lbs)",
    category: "strength",
    categoryLabel: "Strength & Free Weights",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    caption: "Milled urethane dumbbells with knurled stainless steel grips."
  },
  {
    id: "gal-5",
    title: "Contrast Cold Plunge & Cedar Sauna",
    category: "recovery",
    categoryLabel: "Recovery & Amenities",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    caption: "45°F cold immersion plunge tubs and infrared dry sauna suites."
  },
  {
    id: "gal-6",
    title: "Metabolic Conditioning Cardio Loft",
    category: "facility",
    categoryLabel: "Facility Architecture",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    caption: "Concept2 rowers, SkiErgs, and curved treadmills overlooking the main floor."
  },
  {
    id: "gal-7",
    title: "One-on-One Movement Analysis",
    category: "strength",
    categoryLabel: "Strength & Free Weights",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    caption: "Private coach-led movement screening and biomechanical posture calibration."
  },
  {
    id: "gal-8",
    title: "Functional Kettlebell & Core Deck",
    category: "functional",
    categoryLabel: "Functional & Turf",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    caption: "Competition kettlebells from 8kg to 48kg with non-slip rubber platforms."
  },
  {
    id: "gal-9",
    title: "Executive Showers & Clean Locker Suites",
    category: "recovery",
    categoryLabel: "Recovery & Amenities",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    caption: "Pristine locker rooms with rainfall showers, chilled towels, and luxury amenities."
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Brandon Miller",
    role: "Competitive Powerlifter & Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "I trained at three different commercial gyms in Austin before finding Ironstone. The difference is night and day. You never wait for a squat rack, the bars are actually straight and calibrated, and the coaching team has real credentials.",
    achievement: "Added 85 lbs to squat total in 6 months",
    rating: 5,
    memberSince: "Member since 2021"
  },
  {
    id: "test-2",
    name: "Rachel Ramirez",
    role: "Marathoner & Corporate Director",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "The contrast therapy recovery lounge and Maya's turf conditioning sessions completely transformed my running endurance. I had nagging knee pain that two orthopedic visits couldn't solve; Coach Sarah diagnosed my glute weakness in one session.",
    achievement: "PR'd Austin Marathon by 18 minutes",
    rating: 5,
    memberSince: "Member since 2022"
  },
  {
    id: "test-3",
    name: "Terrence Wright",
    role: "Busy Father & Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "I was intimidated to enter a dedicated strength gym at age 44 having not lifted in ten years. The community here is humble, welcoming, and focused. There are no cameras in your face or posers—just people putting in genuine work.",
    achievement: "Lost 32 lbs and reversed pre-hypertension",
    rating: 5,
    memberSince: "Member since 2023"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is included in the Free 1-Day Trial Pass?",
    answer: "Your free trial includes full unrestricted access to the entire club floor, equipment, turf track, and locker room amenities for the day. You will also receive an optional 15-minute facility orientation with a coach and a complimentary InBody 770 body composition scan."
  },
  {
    id: "faq-2",
    question: "Do I have to sign a long-term locked-in contract?",
    answer: "No. Ironstone is an independent gym founded on earning your loyalty every month. Our standard memberships are month-to-month with simple 30-day written cancellation notice. We also offer discounted annual upfront plans for members who want the best rate."
  },
  {
    id: "faq-3",
    question: "Is Ironstone beginner-friendly or only for advanced athletes?",
    answer: "Both! While our facility houses world-class Olympic lifting and strength equipment, over 40% of our members started as complete beginners. Our coaches provide respectful, hands-on guidance on proper form, and our community prides itself on being free of judgment."
  },
  {
    id: "faq-4",
    question: "How do group classes work and do I need to book in advance?",
    answer: "Group training is included in Standard and Premium plans. To protect the training quality and coach-to-athlete ratio, classes are strictly capped at 16 members. You can reserve your spot up to 7 days in advance via our quick online schedule or at the front desk."
  },
  {
    id: "faq-5",
    question: "How does 24/7 access work for Premium members?",
    answer: "Premium members receive an encrypted RFID keyfob and biometric entry access that unlocks our security turnstiles outside staffed hours. The club is monitored 24/7 by high-definition interior and exterior security cameras and rapid emergency response systems."
  },
  {
    id: "faq-6",
    question: "Can I bring a friend or workout partner?",
    answer: "Yes! Standard members receive 2 free guest passes per month, and Premium members receive 4 free passes. Your guests enjoy full access for their visit upon completing a simple digital safety waiver at the front desk."
  },
  {
    id: "faq-7",
    question: "Where can I park when visiting the gym?",
    answer: "We have an on-site private paved parking lot with 85 free stalls directly in front of the main entrance, including 4 Level-2 EV charging stalls, plus secure covered bicycle racks."
  }
];

export const whyChooseUsData = [
  {
    title: "Independent & Trainee-First",
    description: "No corporate hedge funds or shareholder compromises. We invest directly in the highest grade steel, cleanest air filtration, and best coaching talent.",
    icon: "ShieldCheck"
  },
  {
    title: "Competition-Grade Arsenal",
    description: "Eleiko calibrated plates, Rogue Monster rigs, Arsenal plate-loaded machinery, and dumbbells up to 150 lbs. You will never outgrow our floor.",
    icon: "Dumbbell"
  },
  {
    title: "Uncrowded & Capped Capacity",
    description: "We strictly cap total active memberships to prevent overcrowding, line-ups for squat racks, or chaotic locker rooms at peak 6 PM hours.",
    icon: "Users"
  },
  {
    title: "Integrated Recovery Science",
    description: "Cold plunge tubs, infrared cedar saunas, and sports physical therapists on-site to ensure your body recovers as fast as you train.",
    icon: "Flame"
  }
];
