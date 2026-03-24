const civilAircrafts = [
  "assets/avion-civil-1.jpg",
  "assets/avion-civil-2.jpg",
  "assets/avion-civil-3.jpg",
  "assets/avion-civil-4.jpg",
  "assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "assets/avion-militar-1.jpg",
  "assets/avion-militar-2.jpg",
  "assets/avion-militar-3.jpg",
  "assets/avion-militar-4.jpg",
  "assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "assets/helicoptero-civil-1.jpg",
  "assets/helicoptero-civil-2.jpg",
  "assets/helicoptero-civil-3.jpg",
  "assets/helicoptero-civil-4.jpg",
  "assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
  "assets/helicoptero-militar-1.jpg",
  "assets/helicoptero-militar-2.jpg",
  "assets/helicoptero-militar-3.jpg",
  "assets/helicoptero-militar-4.jpg",
  "assets/helicoptero-militar-5.jpg",
];

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilImages;
    this.militaryImages = militaryImages;
  }

  getRandomCivil() {
    const totalCivil = [...this.civilImages];
    const numAleatorio = Math.floor(Math.random() * totalCivil.length);
    return totalCivil[numAleatorio];
  }

  getRandomMilitary() {
    const totalMilitar = [...this.militaryImages];
    const numAleatorio = Math.floor(Math.random() * totalMilitar.length);
    return totalMilitar[numAleatorio];
  }

  getAll() {
    return [...this.civilImages, ...this.militaryImages];
  }
}

class Painter {
  constructor() {
    this.createGallery();
  }

  createGallery() {
    const section = document.createElement("section");
    document.body.appendChild(section);

    this.gallery = section;
  }

  createImageTag(imageUrl) {
    const picture = document.createElement("picture");

    const img = document.createElement("img");
    img.src = imageUrl;

    picture.appendChild(img);

    return picture;
  }

  paintSingleImage(imageUrl) {
    const img = this.createImageTag(imageUrl);
    this.gallery.appendChild(img);
  }

  paintMultipleImages(arrayOfImages) {
    for (let image of arrayOfImages) {
      const img = this.createImageTag(image);
      this.gallery.appendChild(img);
    }
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();