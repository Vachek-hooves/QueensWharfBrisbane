export const PLACES = [
  {
    id: 1,
    name: "South Bank Parklands",
    place: "Cultural Precinct",
    location: {
      latitude: -27.4765,
      longitude: 153.0234
    },
    description: "A premier lifestyle and cultural destination featuring Streets Beach, restaurants, and walking paths along the Brisbane River.",
    image: "https://example.com/southbank.jpg",
    openingHours: "24/7 (some attractions vary)",
    category: "Parks & Recreation",
    popularFor: ["Man-made beach", "Restaurants", "Weekend markets", "Cultural events"]
  },
  {
    id: 2,
    name: "Story Bridge",
    place: "Kangaroo Point",
    location: {
      latitude: -27.4671,
      longitude: 153.0340
    },
    description: "Heritage-listed steel cantilever bridge offering bridge climb experiences and iconic city views.",
    image: "https://example.com/storybridge.jpg",
    yearBuilt: 1940,
    category: "Landmarks",
    activities: ["Bridge climb", "Photography", "Walking", "Cycling"]
  },
  {
    id: 3,
    name: "Mount Coot-tha Lookout",
    place: "Mount Coot-tha",
    location: {
      latitude: -27.4785,
      longitude: 152.9741
    },
    description: "Scenic lookout offering panoramic views of Brisbane city, Moreton Bay, and surrounding regions.",
    image: "https://example.com/mtcoottha.jpg",
    elevation: "287m",
    category: "Nature",
    amenities: ["Restaurant", "Cafe", "Parking", "Viewing platforms"]
  },
  {
    id: 4,
    name: "Brisbane City Botanic Gardens",
    place: "Gardens Point",
    location: {
      latitude: -27.4753,
      longitude: 153.0297
    },
    description: "Historic gardens established in 1855, featuring rare plants, ancient trees, and beautiful walking paths.",
    image: "https://example.com/botanicgardens.jpg",
    category: "Nature",
    amenities: ["Guided walks", "Rotunda", "Cycling paths", "River views"]
  },
  {
    id: 5,
    name: "Queen Street Mall",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4698,
      longitude: 153.0251
    },
    description: "Brisbane's premier shopping destination with over 700 retailers, boutiques, and dining options.",
    image: "https://example.com/queenstreetmall.jpg",
    category: "Shopping",
    features: ["Shopping centers", "Street performers", "Food courts", "Designer stores"]
  },
  {
    id: 6,
    name: "GOMA (Gallery of Modern Art)",
    place: "South Brisbane",
    location: {
      latitude: -27.4709,
      longitude: 153.0170
    },
    description: "Australia's largest gallery of modern and contemporary art, featuring local and international exhibitions.",
    image: "https://example.com/goma.jpg",
    category: "Culture",
    amenities: ["Cafe", "Gift shop", "Library", "Interactive exhibits"]
  },
  {
    id: 7,
    name: "The Wheel of Brisbane",
    place: "South Bank",
    location: {
      latitude: -27.4748,
      longitude: 153.0185
    },
    description: "60-meter-tall observation wheel offering 360-degree views of the city in climate-controlled gondolas.",
    image: "https://example.com/wheel.jpg",
    category: "Attractions",
    duration: "12-15 minutes per ride"
  },
  {
    id: 8,
    name: "Roma Street Parkland",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4615,
      longitude: 153.0169
    },
    description: "World's largest subtropical garden in a city center, featuring themed gardens and entertainment spaces.",
    image: "https://example.com/romastreet.jpg",
    category: "Parks & Recreation",
    features: ["Amphitheatre", "Gardens", "Playground", "Guided tours"]
  },
  {
    id: 9,
    name: "Howard Smith Wharves",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4657,
      longitude: 153.0339
    },
    description: "Historic riverside precinct featuring restaurants, bars, hotel, and event spaces under the Story Bridge.",
    image: "https://example.com/wharves.jpg",
    category: "Entertainment",
    amenities: ["Restaurants", "Brewery", "Events space", "River views"]
  },
  {
    id: 10,
    name: "Lone Pine Koala Sanctuary",
    place: "Fig Tree Pocket",
    location: {
      latitude: -27.5317,
      longitude: 152.9740
    },
    description: "World's first and largest koala sanctuary, home to various Australian wildlife.",
    image: "https://example.com/lonepine.jpg",
    category: "Wildlife",
    activities: ["Koala holding", "Wildlife shows", "Bird feeding"]
  },
  {
    id: 11,
    name: "Brisbane City Hall",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4689,
      longitude: 153.0234
    },
    description: "Heritage-listed building with museum, clock tower tours, and grand auditorium.",
    image: "https://example.com/cityhall.jpg",
    category: "Heritage",
    yearBuilt: 1930
  },
  {
    id: 12,
    name: "Kangaroo Point Cliffs",
    place: "Kangaroo Point",
    location: {
      latitude: -27.4721,
      longitude: 153.0355
    },
    description: "Popular spot for rock climbing and outdoor recreation with stunning river views.",
    image: "https://example.com/kangaroopt.jpg",
    category: "Adventure",
    activities: ["Rock climbing", "Abseiling", "Walking", "Picnicking"]
  },
  {
    id: 13,
    name: "New Farm Park",
    place: "New Farm",
    location: {
      latitude: -27.4712,
      longitude: 153.0508
    },
    description: "Historic park known for its rose garden, weekend markets, and riverside location.",
    image: "https://example.com/newfarmpark.jpg",
    category: "Parks & Recreation",
    features: ["Rose garden", "Powerhouse", "Cycling paths", "Picnic areas"]
  },
  {
    id: 14,
    name: "Brisbane Powerhouse",
    place: "New Farm",
    location: {
      latitude: -27.4689,
      longitude: 153.0526
    },
    description: "Former power station turned arts venue hosting performances, exhibitions, and events.",
    image: "https://example.com/powerhouse.jpg",
    category: "Culture",
    events: ["Theatre", "Comedy", "Music", "Exhibitions"]
  },
  {
    id: 15,
    name: "The Gabba",
    place: "Woolloongabba",
    location: {
      latitude: -27.4858,
      longitude: 153.0381
    },
    description: "Iconic cricket ground and AFL stadium hosting major sporting events.",
    image: "https://example.com/gabba.jpg",
    category: "Sports",
    capacity: "42,000"
  },
  {
    id: 16,
    name: "Queensland Museum",
    place: "South Brisbane",
    location: {
      latitude: -27.4709,
      longitude: 153.0185
    },
    description: "State museum featuring natural history, cultural heritage, and science exhibitions.",
    image: "https://example.com/museum.jpg",
    category: "Culture",
    amenities: ["Cafe", "Gift shop", "Interactive displays"]
  },
  {
    id: 17,
    name: "Eagle Street Pier",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4674,
      longitude: 153.0300
    },
    description: "Waterfront dining precinct offering fine restaurants and river views.",
    image: "https://example.com/eaglestreet.jpg",
    category: "Dining",
    features: ["Restaurants", "River views", "City Cat terminal"]
  },
  {
    id: 18,
    name: "Suncorp Stadium",
    place: "Milton",
    location: {
      latitude: -27.4648,
      longitude: 153.0095
    },
    description: "Premier rectangular stadium hosting rugby league, rugby union, and soccer matches.",
    image: "https://example.com/suncorp.jpg",
    category: "Sports",
    capacity: "52,500"
  },
  {
    id: 19,
    name: "Treasury Casino",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4708,
      longitude: 153.0234
    },
    description: "Heritage-listed casino complex with gaming, dining, and entertainment options.",
    image: "https://example.com/treasury.jpg",
    category: "Entertainment",
    features: ["Gaming", "Restaurants", "Bars", "Hotel"]
  },
  {
    id: 20,
    name: "Customs House",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4645,
      longitude: 153.0293
    },
    description: "Heritage-listed customs house featuring restaurant and function venues.",
    image: "https://example.com/customs.jpg",
    category: "Heritage",
    yearBuilt: 1889
  },
  {
    id: 21,
    name: "James Street Precinct",
    place: "Fortitude Valley",
    location: {
      latitude: -27.4545,
      longitude: 153.0408
    },
    description: "Fashion and lifestyle precinct with boutiques, cafes, and design stores.",
    image: "https://example.com/jamesst.jpg",
    category: "Shopping",
    features: ["Fashion boutiques", "Cafes", "Design stores"]
  },
  {
    id: 22,
    name: "City Botanic Gardens Riverwalk",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4741,
      longitude: 153.0308
    },
    description: "Scenic riverside walkway connecting the City Botanic Gardens to New Farm.",
    image: "https://example.com/riverwalk.jpg",
    category: "Recreation",
    activities: ["Walking", "Cycling", "Running"]
  },
  {
    id: 23,
    name: "Queensland Performing Arts Centre",
    place: "South Brisbane",
    location: {
      latitude: -27.4709,
      longitude: 153.0188
    },
    description: "Premier performing arts venue hosting theatre, opera, and musical performances.",
    image: "https://example.com/qpac.jpg",
    category: "Culture",
    venues: ["Lyric Theatre", "Concert Hall", "Playhouse"]
  },
  {
    id: 24,
    name: "Eat Street Northshore",
    place: "Hamilton",
    location: {
      latitude: -27.4431,
      longitude: 153.0677
    },
    description: "Popular outdoor dining venue featuring international food stalls in shipping containers.",
    image: "https://example.com/eatstreet.jpg",
    category: "Dining",
    openingHours: "Friday-Sunday evenings"
  },
  {
    id: 25,
    name: "St John's Cathedral",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4647,
      longitude: 153.0283
    },
    description: "Gothic Revival cathedral and significant architectural landmark.",
    image: "https://example.com/cathedral.jpg",
    category: "Heritage",
    yearCompleted: 2009
  },
  {
    id: 26,
    name: "Brisbane Quarter",
    place: "Brisbane CBD",
    location: {
      latitude: -27.4694,
      longitude: 153.0227
    },
    description: "Modern precinct featuring luxury retail, dining, and the W Brisbane hotel.",
    image: "https://example.com/quarter.jpg",
    category: "Lifestyle",
    amenities: ["Restaurants", "Shopping", "Hotel"]
  },
  {
    id: 27,
    name: "Victoria Bridge",
    place: "South Brisbane",
    location: {
      latitude: -27.4721,
      longitude: 153.0218
    },
    description: "Historic bridge connecting the CBD to South Brisbane, with pedestrian and cycle paths.",
    image: "https://example.com/victoria.jpg",
    category: "Transport",
    yearBuilt: 1969
  },
  {
    id: 28,
    name: "Fortitude Valley",
    place: "Fortitude Valley",
    location: {
      latitude: -27.4570,
      longitude: 153.0344
    },
    description: "Entertainment precinct known for nightlife, live music venues, and Chinatown.",
    image: "https://example.com/valley.jpg",
    category: "Entertainment",
    features: ["Nightclubs", "Live music", "Markets", "Dining"]
  },
  {
    id: 29,
    name: "Captain Burke Park",
    place: "Kangaroo Point",
    location: {
      latitude: -27.4671,
      longitude: 153.0371
    },
    description: "Riverside park under the Story Bridge offering city views and picnic facilities.",
    image: "https://example.com/burkepark.jpg",
    category: "Parks & Recreation",
    amenities: ["BBQ facilities", "Playground", "River views"]
  },
  {
    id: 30,
    name: "Brisbane Lookout Mount Gravatt",
    place: "Mount Gravatt",
    location: {
      latitude: -27.5377,
      longitude: 153.0663
    },
    description: "Scenic lookout offering views of the city, Moreton Bay, and the Gold Coast.",
    image: "https://example.com/mtgravatt.jpg",
    category: "Nature",
    elevation: "187m",
    amenities: ["Cafe", "Viewing platform", "Parking"]
  }
];
