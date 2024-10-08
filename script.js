const facts = [
    "Deep-sea hydrothermal vent tubeworms can grow up to 3 meters long!",
    "Chemosynthetic bacteria convert chemicals from the Earth's crust into energy.",
    "Giant tube worms can live for more than 25 years!",
    "Archaea are some of the oldest organisms on Earth, thriving in extreme environments.",
    "Some chemosynthetic organisms can create their own food in total darkness!",
    "Sunlit Depths: The underwater environment is illuminated by sunlight, allowing photosynthetic organisms to thrive in shallow waters, creating vibrant underwater gardens",
    "Chemosynthesis Dominance: Instead of relying solely on sunlight for energy, many organisms have adapted to chemosynthesis, converting chemicals from hydrothermal vents into energy",
    "Diverse Ecosystems: Various ecosystems flourish, including coral-like structures built by chemosynthetic bacteria that form the foundation for complex communities",
    "Modified Flora: Seaweeds and other plants have adapted to absorb both sunlight and nutrients from surrounding water, optimizing growth and energy production",
    "Giant Kelp Forests: Massive underwater forests of chemosynthetic kelp provide habitat for diverse marine life, serving as both shelter and a food source",
    "Unique Fauna: Creatures like bioluminescent fish and oversized mollusks evolved to exploit the light and chemical energy available in their environment",
    "Symbiotic Relationships: Many species form symbiotic relationships, such as fish that host chemosynthetic bacteria in their bodies, providing them with nutrients in exchange for protection",
    "Underwater Cities: Human settlements are built in underwater cities, designed with bio-luminescent materials and structures that blend into the surrounding marine life",
    "Air Supply: Humans utilize advanced technology to extract oxygen from water, creating breathable environments in their underwater habitats",
    "Thermal Vents: Hydrothermal vents serve as hotspots of biodiversity, where specialized organisms thrive in extreme temperatures and chemical-rich environments",
    "Biodiversity Hotspots: Regions around hydrothermal vents and cold seeps are known for high levels of endemic species, each adapted to unique environmental conditions",
    "Food Web Complexity: Food webs are intricate, with multiple trophic levels, including primary producers (chemosynthetic bacteria), herbivores, and top predators",
    "Acoustic Communication: Many species develop complex vocalizations and communication methods to navigate and establish territories in the underwater world",
    "Seasonal Migrations: Certain species migrate between different ocean zones, following nutrient-rich currents and seasonal temperature changes",
    "Carbon Sequestration: Chemoautotrophs play a crucial role in carbon cycling, helping to sequester carbon in the ocean depths, impacting global climate",
    "Cultural Evolution: Human culture evolves to prioritize ocean conservation, fostering a deep respect for marine ecosystems and their inhabitants", 
    "Transport Networks: Specialized transportation systems, like underwater railways or bioengineered vehicles, facilitate travel between human settlements",
    "Technological Innovation: Advances in biotechnology allow for the cultivation of chemosynthetic organisms for sustainable food sources",
    "Climate Resilience: The underwater world is more resilient to climate change impacts, with stable temperatures and buffered ecosystems compared to terrestrial environments",
    "Exploration and Research: Scientists and explorers constantly study the depths, uncovering new species and understanding the complexities of underwater ecosystems",
];

document.getElementById('random-fact-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    const factElement = document.getElementById('random-fact');

    factElement.textContent = fact;
    factElement.classList.toggle('hidden');
});

function toggleContent(section) {
    const content = {
        'hydrothermal-vents': {
            title: 'Hydrothermal Vents and Geothermal Power',
            image: 've.jpg',
            description: 'Hydrothermal vents are openings in the sea floor that emit hot, mineral-rich water, providing energy for unique ecosystems.',
            video: 'vid1.mp4'
        },
        'underwater-sea-life': {
            title: 'Underwater Sea Life and New Life Forms',
            image: '15.png',
            description: 'The deep ocean is home to many unexplored species, showcasing biodiversity that thrives in extreme conditions.',
            video: 'coro.mp4'
         
        },
        'sea-farming': {
            title: 'Sea Farming for Human Food',
            image: '\crop.jpg',
            description: 'Aquaculture and marine farming can provide sustainable food sources for a growing human population.',
            video: 'soro.mp4'
        },
        'chemical-construction': {
            title: 'Using Chemicals for Underwater Structures',
            image: '13.png',
            description: 'Innovative materials can be used to create buildings and habitats suitable for underwater living.',

        },
        'advanced-machinery': {
            title: 'Advanced Machinery for Underwater Living',
            image: 'navi.jpg',
            description: 'Cutting-edge technology helps sustain human life underwater, from submarines to life-support systems.',
          
        },
        'desalination-plants': {
            title: 'Desalination Plants for Drinking Water',
            image: 'Picture1.png',
            description: 'Desalination technology turns saltwater into fresh drinking water, crucial for underwater settlements.',
         
        },
        'oxygen-production': {
            title: 'Making Oxygen Using Hydrothermal Vent Heat',
            image: 'struc.jpg',
            description: 'Utilizing heat from hydrothermal vents, innovative systems can generate oxygen for human use.',
        
        },
        'navigation': {
            title: 'Navigating Underwater',
            image: 'naviga.avif',
            description: 'Advanced navigation systems enable humans to explore and operate efficiently in underwater environments.',
        
        },
        'challenges': {
            title: 'Challenges of Underwater Living',
            image: 'challenge.png',
            description: 'From pressure to resource management, living underwater presents unique challenges that need to be addressed.',
           
        },
        'main-features': {
            title: 'Main Features of the Underwater World',
            image: 'Picture2.png',
            description: 'This underwater world is characterized by unique ecosystems, geological features, and biodiversity.',
         
        }
    };

    const { title, image, description, video } = content[section];
    document.getElementById('content-title').textContent = title;
    document.getElementById('content-image').src = image;
    document.getElementById('content-image').alt = title;
    document.getElementById('content-description').textContent = description;
    document.getElementById('video-source').src = video;
    document.getElementById('content-video').load(); // Load new video

    document.getElementById('content-display').classList.remove('hidden');
    
    // Smooth scroll to the content display
    document.getElementById('content-display').scrollIntoView({ behavior: 'smooth' });
}

function closeContent() {
    document.getElementById('content-display').classList.add('hidden');
}
