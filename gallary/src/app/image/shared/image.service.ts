import { Injectable } from '@angular/core';

@Injectable ()
export class ImageService {
	visibleImages = [];
	getImages() {
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id: number) {
		return IMAGES.slice(0).find(image => image.id == id)
	}
}


const IMAGES = [
	{"id": 1, "category": "boats", "caption": "view 1", "url": "assets/img/boat_01.jpeg"},
	{"id": 2, "category": "boats", "caption": "view 2", "url": "assets/img/boat_01.jpeg"},
	{"id": 3, "category": "boats", "caption": "view 3", "url": "assets/img/boat_01.jpeg"},
	{"id": 4, "category": "boats", "caption": "view 4", "url": "assets/img/boat_01.jpeg"},
	{"id": 5, "category": "some", "caption": "view 5", "url": "assets/img/boat_01.jpeg"},
	{"id": 6, "category": "some", "caption": "view 6", "url": "assets/img/boat_01.jpeg"},
	{"id": 7, "category": "some", "caption": "view 7", "url": "assets/img/boat_01.jpeg"},
	{"id": 8, "category": "some", "caption": "view 8", "url": "assets/img/boat_01.jpeg"},
	{"id": 9, "category": "some", "caption": "view 9", "url": "assets/img/boat_01.jpeg"},
	{"id": 10, "category": "other", "captio": "view10", "url": "assets/img/boat_01.jpeg"},
	{"id": 11, "category": "other", "captio": "view11", "url": "assets/img/boat_01.jpeg"},
	{"id": 12, "category": "other", "captio": "view12", "url": "assets/img/boat_01.jpeg"},
	{"id": 13, "category": "other", "captio": "view13", "url": "assets/img/boat_01.jpeg"},
	{"id": 14, "category": "other", "captio": "view14", "url": "assets/img/boat_01.jpeg"},
	{"id": 15, "category": "other", "captio": "view15", "url": "assets/img/boat_01.jpeg"},
	{"id": 16, "category": "new", "captio": "view16", "url": "assets/img/boat_01.jpeg"},
	{"id": 17, "category": "new", "captio": "view17", "url": "assets/img/boat_01.jpeg"}

]