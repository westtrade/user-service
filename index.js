import { ZeroService } from 'zeroservice/src/ZeroService';

const properties = Symbol('Service private properties');



export default class UserService extends ZeroService {
    constructor(initialUserData = {}, ...args) {
        super(...args);

        this[properties] = {
            rules: [],
        }
        
        this.initialState = {
            data: initialUserData,
        };
    }

    can(action) {
        
    }

    addRule(action, rule) {
        
    }

    login(userData = {}) {
        
    }

    logout() {
        
    }

};