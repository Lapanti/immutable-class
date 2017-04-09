import { expect } from 'chai';
import ImmutableClass from '../ImmutableClass';

describe('ImmutableClass', () => {
    const testStringV: string = 'testString!';
    const testNumberV: number = 1;
    const testBooleanV: boolean = true;
    const testListV: string[] = ['string1', 'string2', 'string3'];
    const testObjectV: { [key: string]: string } = {
        'testKey1': 'testValue1',
        'testKey2': 'testValue2',
        'testKey3': 'testValue3'
    };
    class TestClass extends ImmutableClass {
        testString: string = testStringV;
        testNumber: number = testNumberV;
        testBoolean: boolean = testBooleanV;
        testList: string[] = testListV;
        testObject: { [key: string]: string } = testObjectV;
    }
    const testClass = new TestClass();

    describe('getting values', () => {
        it('should get the string value correctly', () => {
            expect(testClass.testString).to.be.a('string');
            expect(testClass.testString).to.equal(testStringV);
        });

        it('should get the number value correctly', () => {
            expect(testClass.testNumber).to.be.a('number');
            expect(testClass.testNumber).to.equal(testNumberV);
        });

        it('should get the boolean value correctly', () => {
            expect(testClass.testBoolean).to.be.a('boolean');
            expect(testClass.testBoolean).to.equal(testBooleanV);
        });

        it('should get the list value correctly', () => {
            expect(testClass.testList).to.be.an('array');
            expect(testClass.testList).to.deep.equal(testListV);
        });

        it('should get the object value correctly', () => {
            expect(testClass.testObject).to.be.an('object');
            expect(testClass.testObject).to.deep.equal(testObjectV);
        });
    });

    describe('assigning values', () => {
        it('should throw an error when assigning the string', () => {
            const altString = 'notCorrect';
            expect(altString).to.not.equal(testStringV);
            expect(() => { testClass.testString = altString; }).to.throw(TypeError);
            expect(testClass.testString).to.not.equal(altString);
            expect(testClass.testString).to.equal(testStringV);
        });

        it('should throw an error when assigning the number', () => {
            const altNumber = -1;
            expect(altNumber).to.not.equal(testNumberV);
            expect(() => { testClass.testNumber = altNumber; }).to.throw(TypeError);
            expect(testClass.testNumber).to.not.equal(altNumber);
            expect(testClass.testNumber).to.equal(testNumberV);
        });
        
        it('should throw an error when assigning the bolean', () => {
            const altBoolean = false;
            expect(altBoolean).to.not.equal(testBooleanV);
            expect(() => { testClass.testBoolean = altBoolean; }).to.throw(TypeError);
            expect(testClass.testBoolean).to.not.equal(altBoolean);
            expect(testClass.testBoolean).to.equal(testBooleanV);
        });
        
        it('should throw an error when assigning the list', () => {
            const altList = ['notCorrect', 'still', 'wrong'];
            expect(altList).to.not.deep.equal(testListV);
            expect(() => { testClass.testList = altList; }).to.throw(TypeError);
            expect(testClass.testList).to.not.deep.equal(altList);
            expect(testClass.testList).to.deep.equal(testListV);
        });
        
        it('should throw an error when assigning the object', () => {
            const altObject = { 'notKey1': 'notVal1', 'notKey2': 'notVal2', 'notKey3': 'notVal3' };
            expect(altObject).to.not.deep.equal(testObjectV);
            expect(() => { testClass.testObject = altObject; }).to.throw(TypeError);
            expect(testClass.testObject).to.not.deep.equal(altObject);
            expect(testClass.testObject).to.deep.equal(testObjectV);
        });
    });

    describe('setting values', () => {
        it('should set correctly with just a new string', () => {
            const altString = 'correct!';
            expect(altString).to.not.equal(testStringV);
            const newTestClass = testClass.set('testString', altString);
            expect(newTestClass.testString).to.equal(altString);
            expect(testClass.testString).to.equal(testStringV);
            expect(newTestClass.testNumber).to.equal(testClass.testNumber);
            expect(newTestClass.testBoolean).to.equal(testClass.testBoolean);
            expect(newTestClass.testList).to.deep.equal(testClass.testList);
            expect(newTestClass.testObject).to.deep.equal(testClass.testObject);
        });

        it('should set correctly with just a new number', () => {
            const altNumber = 10;
            expect(altNumber).to.not.equal(testNumberV);
            const newTestClass = testClass.set('testNumber', altNumber);
            expect(newTestClass.testNumber).to.equal(altNumber);
            expect(testClass.testNumber).to.equal(testNumberV);
            expect(newTestClass.testString).to.equal(testClass.testString);
            expect(newTestClass.testBoolean).to.equal(testClass.testBoolean);
            expect(newTestClass.testList).to.deep.equal(testClass.testList);
            expect(newTestClass.testObject).to.deep.equal(testClass.testObject);
        });

        it('should set correctly with just a new boolean', () => {
            const altBoolean = false;
            expect(altBoolean).to.not.equal(testBooleanV);
            const newTestClass = testClass.set('testBoolean', altBoolean);
            expect(newTestClass.testBoolean).to.equal(altBoolean);
            expect(testClass.testBoolean).to.equal(testBooleanV);
            expect(newTestClass.testString).to.equal(testClass.testString);
            expect(newTestClass.testNumber).to.equal(testClass.testNumber);
            expect(newTestClass.testList).to.deep.equal(testClass.testList);
            expect(newTestClass.testObject).to.deep.equal(testClass.testObject);
        });

        it('should set correctly with just a new list', () => {
            const altList = ['this', 'should', 'work'];
            expect(altList).to.not.equal(testListV);
            const newTestClass = testClass.set('testList', altList);
            expect(newTestClass.testList).to.equal(altList);
            expect(testClass.testList).to.equal(testListV);
            expect(newTestClass.testString).to.equal(testClass.testString);
            expect(newTestClass.testNumber).to.equal(testClass.testNumber);
            expect(newTestClass.testBoolean).to.equal(testClass.testBoolean);
            expect(newTestClass.testObject).to.deep.equal(testClass.testObject);
        });

        it('should set correctly with just a new list', () => {
            const altObject = { 'this': 'should', 'work': 'even', 'now': 'right' };
            expect(altObject).to.not.equal(testObjectV);
            const newTestClass = testClass.set('testObject', altObject);
            expect(newTestClass.testObject).to.equal(altObject);
            expect(testClass.testObject).to.equal(testObjectV);
            expect(newTestClass.testString).to.equal(testClass.testString);
            expect(newTestClass.testNumber).to.equal(testClass.testNumber);
            expect(newTestClass.testBoolean).to.equal(testClass.testBoolean);
            expect(newTestClass.testList).to.deep.equal(testClass.testList);
        });

        it('should chain correctly', () => {
            const altString = 'it\'s working!';
            const altNumber = 20;
            expect(altString).to.not.equal(testStringV);
            expect(altNumber).to.not.equal(testNumberV);
            const newTestClass = testClass.set('testString', altString).set('testNumber', altNumber);
            expect(newTestClass.testString).to.equal(altString);
            expect(testClass.testString).to.equal(testStringV);
            expect(newTestClass.testNumber).to.equal(altNumber);
            expect(testClass.testNumber).to.equal(testNumberV);
            expect(newTestClass.testBoolean).to.equal(testClass.testBoolean);
            expect(newTestClass.testList).to.deep.equal(testClass.testList);
            expect(newTestClass.testObject).to.deep.equal(testClass.testObject);
        });
        
        it('should throw error when setting with a nonexistent key', () => (
            expect(testClass.set('shouldfail', 0)).to.throw(TypeError)
        ));
    });
});
