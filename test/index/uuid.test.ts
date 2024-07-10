import { uuid } from '../../src/index';
describe('生成uuid', () => {
    it('uuid() => return 未传', () => {
        const newUuid = uuid()
        // console.log(newUuid);
    })
    it('uuid(true) -> return 传', () => {
        const newUuid = uuid(true)
        // console.log(newUuid);
    })
})