import React from "react"

import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import Footer, { socialIcons } from "../Footer"

Enzyme.configure({ adapter: new Adapter() });

HTMLCanvasElement.prototype.getContext = jest.fn()

test('Check social media icons exists', () => {
    const footer = shallow(<Footer />)
    // Check the social media icons exists
    footer.find('SocialMediaIcons').exists()
})

test('Check four social icons are visible', () => {
    expect(socialIcons.length).toEqual(4)
})