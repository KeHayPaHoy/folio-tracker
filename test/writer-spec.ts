import { Writer } from '../src/writer';
import * as chai from 'chai';
import * as sinon from 'sinon';

const assert = chai.assert;

describe('Writer', () => {
    describe('#write()', () => {
        it('should write a message', () => {

            const spy = sinon.spy(console, 'log');
            const writer = new Writer();
            writer.write('I am being tested!');

            assert(spy.calledWith('I am being tested!'));

            spy.restore();

        });
        it('should write a default message', () => {

            const spy = sinon.spy(console, 'log');
            const writer = new Writer();
            writer.write();

            assert(spy.calledWith('Hello World!'));

            spy.restore();

        });
    });
});
