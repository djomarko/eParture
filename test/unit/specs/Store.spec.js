import Vue from 'vue';
import { mutations } from 'src/store';


describe('mutations', () => {
    it('should have card data initialization', () => {
        let state = {
            data:  ['1','2','3']   
        };
        let replaceWith = ['2'];
        
        mutations.initData(state,replaceWith);
        expect(state.data).to.equal(replaceWith);
    });
});