import React, { useContext } from "react";
import { ctx } from "../context";
import PageWrapper from "../components/PageWrapper";
import CreateprojectSteps from "../components/CreateProjectSteps";
import DashBoard from "../components/DashBoard";

const MainPage = () => {
  const { createdProject } = useContext(ctx);
  if (createdProject) {
    return (
      <PageWrapper>
        <CreateprojectSteps />
      </PageWrapper>
    );
  }
  return <DashBoard />;
};

export default MainPage;
