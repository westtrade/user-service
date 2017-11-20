import ZeroService from 'zeroservice/src/ZeroService';

export default class UserService extends ZeroService {
    constructor(initialUserData = {}, ...args) {
        super(...args);
        
        this.initialState = {
            data: initialUserData,
        };
    }
};