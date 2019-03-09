import {foo} from "../foo";


test("test-foo", () => {
    expect(foo()).toBe(42);
});