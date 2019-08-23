import { observable, computed,action } from "mobx";


class A {
    @observable count = 0;
    

    @computed get total() {
        return this.count
    }

    @action add(){
        this.count++
    }
}

let a = new A()


class B {
    @observable name = 'name';
}

let b = new B()

export {a,b};