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
    this.state = {
      activePanelId: dummyTabsContent[0].id,
      selectedPanelId: dummyTabsContent[0].id
    };
  }

  handleTabClick(ev, id) {
    this.setState({activePanelId: id})
  }

  handleKeyDown(ev) {
    const tabLength = dummyTabsContent.length;
    const selectedTab = dummyTabsContent.find((tab) => tab.id === this.state.selectedPanelId);
    const selectedTabIndex = dummyTabsContent.indexOf(selectedTab);

    let newId;

    if(ev.key === "ArrowRight") {
      newId = selectedTabIndex != (tabLength - 1) ? dummyTabsContent[selectedTabIndex + 1].id : dummyTabsContent[0].id;
    }

    else if(ev.key === "ArrowLeft") {
      newId = selectedTabIndex != 0 ? dummyTabsContent[selectedTabIndex - 1].id : dummyTabsContent[tabLength - 1].id;
    }

    this.setState({selectedPanelId: newId}, console.log(this.state.selectedPanelId));

  }

  tabClasses(tabId) {
    if(tabId === this.state.activePanelId) {
      return 'tabs__tab active'
    }

    else if(this.state.selectedPanelId && tabId === this.state.selectedPanelId) {
      return 'tabs__tab selected'
    }

    else {
      return "tabs__tab"
    }
  }


  render() {
    let tabs = dummyTabsContent.map((tab, i) => {
      return <li key={i}
                  className={this.tabClasses(tab.id)}
                  tabIndex={tab.id === this.state.activePanelId ? "1": "-1"}
                  role="tab"
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={(e) => this.handleTabClick(e, tab.id)}
                  onKeyDown={(ev) => this.handleKeyDown(ev)}>
                    {tab.name}
              </li>
    });

    let tabPanels = dummyTabsContent.map((tab, i) => {
      return <div key={i}
                  className="tabs__tabpanel"
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  aria-hidden={this.state.activePanelId === tab.id ? false : true}
                  tabIndex={tab.id === this.state.activePanelId ? "1": "-1"}>
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
