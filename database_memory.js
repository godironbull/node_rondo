import { randomUUID } from 'node:crypto'
export class DatabaseMemory {
    #videos = new Map()
    list() {
        return this.#videos.values()
    }

    Create(video) {
        const videoid = randomUUID()

        this.#videos.push(video)
    };
    
    Update(id, video) {
        this.#videos.set(id, video)
    }
    delete(id) {
        this.#videos.delete(id)
    };
};