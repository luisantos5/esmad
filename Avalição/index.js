let photos = []
let photosId = 0

class Photo {
    constructor(hora, zona, nmasc, nfem) {
        this._id = Photo.getLastId() + 1
        this.zona = zona
        this.nmasc = nmasc
        this.nfem = nfem      
    }

    // Property Id
    get id() {
        return this._id
    }

    // Property Hora de captura da foto
    get hora() {
        return this._hora
    }

    set hora(newhora) {
        this._hora = newhora        
    }

    
    // Property Zona de captura da foto
    get zona() {
        return this._zona
    }

    set zona(newzona) {
        this._zona = newzona        
    }

    // Property Number H
    get nmasc() {
        return this._nmasc
    }

    set nmasc(newnmasc) {
        this._nmasc = newnmasc        
    }

    // Property Number F
    get nfem() {
        return this._nfem
    }

    set nfem(newnfem) {        
        this._nfem = newnfem    
        
    
    }



    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (photos.length > 0) {
            lastId = photos[photos.length-1].id
        }        
        return lastId
    }

}

