import Ciudad from "../Graph/Ciudad.mjs"
import Node from "./Node.mjs";

export default class linkedList {
    #head
    #count

    constructor(){
        this.#head = undefined
        this.#count = 0
    }

    push (name,weight) {
        let ciudad = new Ciudad(name, weight)
        let node = new Node (ciudad)
        let current
        if (this.#head == null){
            this.#head = node
        }
        else{
            current = this.#head
            while(current.next != null)
                current = current.next
            current.next = node
        }
        this.#count++
    }

    getElementAt (index) {
        if(index >=0 && index<this.#count){
            let node = this.#head
            for(let i=0; i<index && node != null; i++)
                node = node.next
            return node
        }
        return undefined
    }

    empty(){
    return this.size() === 0 
    }
     
    size(){
        return this.#count
    }

    getHead(){
        return this.#head
    }
}