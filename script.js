const facts = [
    "Deep-sea hydrothermal vent tubeworms can grow up to 3 meters long!",
    "Chemosynthetic bacteria convert chemicals from the Earth's crust into energy.",
    "Giant tube worms can live for more than 25 years!",
    "Archaea are some of the oldest organisms on Earth, thriving in extreme environments.",
    "Some chemosynthetic organisms can create their own food in total darkness!"
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
         
        },
        'sea-farming': {
            title: 'Sea Farming for Human Food',
            image: '\crop.jpg',
            description: 'Aquaculture and marine farming can provide sustainable food sources for a growing human population.',
         
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
