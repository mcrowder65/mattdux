import {mount} from "enzyme";
import Comp from "../src/comp";
import {connect} from "../src/connect";

describe("test/connect.spec.jsx", () => {
    test("test", () => {
        const comp = mount(connect(Comp));
        expect(comp.props().hi()).toEqual("hi");
    });
});