import { shallow } from "enzyme";
import GifExpertApp from "../components/GifExpertApp";

{
  import("jest").Config;
}

describe("Pruebas en el componente GifExpertApp", () => {
  test("El boton debe devolver la categoria Stranger Things", () => {
    const wrapper = shallow(<GifExpertApp />);
    wrapper.find("button").simulate("click");
    const strangerThings = wrapper.find("li").at(4).text().trim();
    expect(strangerThings).toBe("Stranger Things");
  });
});
