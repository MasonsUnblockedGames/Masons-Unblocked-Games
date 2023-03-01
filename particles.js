const particleImages = [
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg',
  'https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg',
];

const particleOpts = {
  particles: {
    number: {
      value: 12,
      density: { enable: true, value_area: 700 },
    },
    shape: {
      type: 'images',
      images: particleImages.map((image) => {
        return {
          src: image,
          height: 115,
          width: 100,
        };
      }),
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.6,
        sync: false,
      },
    },
    size: {
      value: 60,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  fullScreen: false,
};

tsParticles.load('particleContainer', particleOpts).catch((error) => {
  console.error(error);
});

const particles = tsParticles.domItem(0);
particles.play();
