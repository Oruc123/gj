import React from "react";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

export default TabPanel;
