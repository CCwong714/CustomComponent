import React, { ReactNode } from 'react';

interface TabProps {
  id: string;
  activeTab: string;
  children: ReactNode;
}

interface TabsProps<T> {
  tabData: T[];
  attributeName: keyof T;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  tabContent: (props: TabProps) => JSX.Element;
}

const Tabs = <T,>({
  tabData,
  attributeName,
  activeTab,
  onTabChange,
  tabContent,
}: TabsProps<T>) => {
  return (
    <div className='mx-auto max-w-md rounded bg-white p-4 shadow'>
      <ul className='flex border-b'>
        {tabData.map((items, index) => {
          const uniqueKey = `tab${index + 1}`;
          return (
            <li key={uniqueKey} className='-mb-px mr-1'>
              <button
                type='button'
                className={
                  activeTab === uniqueKey
                    ? 'active-tab-style'
                    : 'inactive-tab-style'
                }
                onClick={() => onTabChange(uniqueKey)}
              >
                {items[attributeName] as React.ReactNode}
              </button>
            </li>
          );
        })}
      </ul>
      {tabData.map((items, index) => {
        const uniqueKey = `tab${index + 1}`;
        return (
          <div
            key={uniqueKey}
            id={uniqueKey}
            className={`tab h-fit w-fit py-4 ${
              activeTab !== uniqueKey ? 'hidden' : ''
            }`}
          >
            {tabContent({
              id: uniqueKey,
              activeTab,
              children: items[attributeName] as ReactNode,
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

// Example :

// ----- anothere component (tabs body) -----
// function TabContent({ tab }: { tab: string }) {
//   return <p>This is the content for {tab}.</p>;
// }

// ----------------------------------------------------------------
// const tabs = [{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }];

// const [activeTab, setActiveTab] = useState('tab1');

// const handleTabChange = (tabId: string) => {
//   setActiveTab(tabId);
// };

// return
// <div className='flex flex-col lg:px-8'>
//   <Tabs
//     tabData={tabs}
//-    attributeName='label'
//-    activeTab={activeTab}
//     onTabChange={handleTabChange}
//     tabContent={({ id }) => (
//       <div>
//         <h2 className='text-xl font-semibold'>{id} Content</h2>
//         {activeTab === id && <TabContent tab={id} />}
//       </div>
//     )}
//   />
// </div>;
