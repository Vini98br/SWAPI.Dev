import React from "react";

import {
  Container,
  TabsHeader,
  TabsWrapper,
  TabContent,
  TabLabel,
} from "./styles";

export interface TabType {
  label: string;
  value: string;
}

export interface TabsProps {
  currentTab: TabType["value"];
  onChange: (value: TabType["value"]) => void;
  logo?: React.ReactNode;
  size?: 'small' | 'large';
}

const Tabs: React.FC<TabsProps> & { TabPane: React.FC<TabType> } = ({
  children,
  currentTab,
  onChange,
  size = 'large',
  logo
}) => {
  const getCurrentTab = () => {
    const tab = React.Children.toArray(children).find((child) => {
      if (!React.isValidElement<TabType>(child)) {
        return child;
      }
      return child.props.value === currentTab;
    }) as React.ReactElement<React.PropsWithChildren<TabType>>;

    return tab?.props.children;
  };

  const handleTabClick = (value: TabType["value"]) => (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    onChange(value);
  };

  return (
    <Container size={size}>
      <TabsHeader>
        <TabsWrapper>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement<TabType>(child)) {
              return child;
            }
            return (
              <TabLabel
                key={child.props.value}
                selected={currentTab === child.props.value}
                onClick={handleTabClick(child.props.value)}
              >
                {child?.props.label}
              </TabLabel>
            );
          })}
        </TabsWrapper>
      </TabsHeader>
      <TabContent>{getCurrentTab()}</TabContent>
    </Container>
  );
};

export const TabPane: React.FC<TabType> = ({ children }) => {
  return <div>{children}</div>;
};

Tabs.TabPane = TabPane;

export default Tabs;
