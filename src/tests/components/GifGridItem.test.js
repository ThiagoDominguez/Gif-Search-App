import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

{
  import("jest").Config;
}

describe("Pruebas en GifGridItem", () => {
  const title = "title";
  const url = "https://localhost:5000";
  test("Debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });
});
