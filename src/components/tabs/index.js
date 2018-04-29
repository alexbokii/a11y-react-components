import React from 'react';
import './index.css';

const dummyTabsContent = [
  {"id": "01", "name": "Manon", "content": "Content 1"},
  {"id": "02", "name": "Swan Lake", "content": "Content 2"},
  {"id": "03", "name": "Lohengrin", "content": "And some content for tab 3"}
]

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activePanelId: dummyTabsContent[0].id};
  }

  render() {
    let tabs = dummyTabsContent.map((tab, i) => {
      return <li key={i}
                  className="tabs__tab"
                  role="tab"
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}>
                    {tab.name}
              </li>
    });

    let tabPanels = dummyTabsContent.map((tab, i) => {
      return <div key={i}
                  className="tabs__tabpanel"
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  aria-hidden={this.state.activePanelId === tab.id ? false : true}>
        <p>{tab.content}</p>
      </div>
    })

    return <div className="tabs">
      <ul className="tabs__tablist" role="tablist">
        {tabs}
      </ul>
      {tabPanels}
    </div>
  }
}
