
import { Component } from '../src/utils/Injectable'


@Component
class SecondLevelChild {

    sayMyName() {
        return 'SecondLevelChild'
    }
}

@Component
class Child {

    constructor(
        private secondLevelChild?: SecondLevelChild,
    ) { }

    sayMyName() {
        return 'Child'
    }

    public sayChildName() {
        return this.secondLevelChild.sayMyName()
    }
}

@Component
class AnotherChild {

    sayMyName() {
        return 'AnotherChild'
    }
}

class NonInjectableChild {

    sayMyName() {
        return 'NonInjectableChild'
    }
}

@Component
class Container {

    constructor(
        public child?: Child,
        private anotherChild?: AnotherChild,
        public nonInjectableChild?: NonInjectableChild
    ) { }

    public sayChildName() {
        return this.child.sayMyName()
    }

    public sayAnotherChildName() {
        return this.anotherChild.sayMyName()
    }
}


describe('Di should work', () => {

    test('it should create object', () => {
        let object = new Container();
        expect(object).not.toBe(undefined);
    });
    test('it should create singleton', () => {
        let object1 = new Container();
        let object2 = new Container();
        expect(object1).toBe(object2);
    });
    test('it should be able to inject a dependable class', () => {
        let object = new Container();
        const childHello = object.sayChildName()
        const anotherChildHello = object.sayAnotherChildName()
        expect(childHello).toEqual('Child');
        expect(anotherChildHello).toEqual('AnotherChild');
    });

    test('it should be able to inject a dependable class with a dependable class (2 levels down)', () => {
        let object = new Container();
        const secondLevelChildHello = object.child.sayChildName()
        expect(secondLevelChildHello).toBe('SecondLevelChild');
    });

    test('it should be able to ignore non injectable dependencies', () => {
        let object = new Container();
        expect(object.nonInjectableChild).toBe(null);
    });

})