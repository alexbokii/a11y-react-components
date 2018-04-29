import React from 'react';
import Tabs from './index.js';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const tabs = shallow(<Tabs />);

const dummyTabsContent = [
  {"id": "01", "name": "Manon", "content": "Content 1"},
  {"id": "02", "name": "Swan Lake", "content": "Content 2"},
  {"id": "03", "name": "Lohengrin", "content": "And some content for tab 3"}
]

describe("Tabs component", () => {
  it("renders tabs container", () => {
    expect(tabs.find('div').exists()).toBe(true);
  })

  it("renders tab for every element in dummyTabsContent", () => {
    expect(tabs.find('.tabs__tab').length).toBe(dummyTabsContent.length);
  })

  describe("relationships between tabs and tabpanels", () => {
    it("should render the same number of tabpanels as tabs", () => {
      const numOfTabs = tabs.find(".tabs__tab").length;
      expect(tabs.find(".tabs__tabpanel").length).toBe(numOfTabs);
    })

    it("should set aria-controls attribute to tab with id of tabpanel", ()=> {
      expect(tabs.find(".tabs__tab").first().prop("aria-controls")).
      toBe(`tabpanel-${dummyTabsContent[0].id}`)
    })

    it("should set aria-labelledby to tabpanel", () => {
      const firstTabId = tabs.find(".tabs__tab").first().prop("id");
      expect(tabs.find(".tabs__tabpanel").first().prop("aria-labelledby"))
      .toBe(firstTabId)
    })
  })

  describe("ARIA roles", () => {
    it("should set role tablist to ul", () => {
      expect(tabs.find('ul').first().prop("role")).toBe("tablist")
    })

    it("should set role tab to li", () => {
      expect(tabs.find('li').first().prop("role")).toBe("tab");
    })

    it("should set role tabpanel to a container associated with tab", () => {
      expect(tabs.find('.tabs__tabpanel').first().prop("role")).toBe("tabpanel");
    })
  })

  describe("initial state", () => {
    it("should set aria-hidden to true to all tabpanels except for the first one", () => {
      expect(tabs.find('.tabs__tabpanel').first().prop("aria-hidden")).toBe(false);
      expect(tabs.find('.tabs__tabpanel').last().prop("aria-hidden")).toBe(true);
    })
  })
})
