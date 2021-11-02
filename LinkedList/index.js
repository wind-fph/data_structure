/**
 * 元素类
 */
class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
}
/**
 * 链表类
 */
class LinkedList {
    constructor(){
        this.size = 0
        this.head = null
    }
    /**
     * 追加元素
     */
    append(element){
        let node = new Node(element)
        if(this.head === null){
            this.head = node
        }else{
            let current = this.getNode(this.size - 1)
            current.next = node
        }
        this.size++
    }
    /**
     * 追加元素到指定位置
     */
    appendAt(position,element){
        if(position < 0 || position > this.size){
            throw new Error('positon out range')
        }
        let node = new Node(element)
        if(position === 0){
            node.next = this.head
            this.head = node
            
        }else{
            let pre = this.getNode(position - 1)
            node.next = pre.next
            pre.next = node
        }
        this.size++
        
    }
    /**
     * 移除元素
     */
    removeAt(position){
        if(postion < 0 || position >= this.size){
           throw new Error('positon out range')
        }
        let current = this.head
        if(position === 0){
            this.head = current.next
        }else{
            let pre = this.getNode(position - 1)
            current = pre.next
            pre.next = current.next
        }
        this.size--
        
    }
    /**
     * 查找元素位置
     */
    indexOf(element){
        let current = this.head
        for(let i =0;i < this.zise; i++){
            if(current.element === element){
                return i 
            }
            current = current.next
        }
        return -1
    }
    /**
     * 获取指定位置的元素
     */
    getNode(index){
        if(index < 0 || index >= this.size){
            throw new Error('out range')
        }
        let current = this.head
        for(let i = 0; i < index; i++){
            current = current.next
        }
        return current
    }
}
